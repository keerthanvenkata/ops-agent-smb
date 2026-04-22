# Recommended Stack — For THIS Client, Practically

A concrete, opinionated stack recommendation. Not "here are the options" — actual choices with justification.

## The stack

```
┌──────────────────────────────────────────────────────────────┐
│                    Customers (WhatsApp)                      │
└────────────────────────────┬─────────────────────────────────┘
                             │
                  (inbound messages only — free in
                   24h service window)
                             │
┌────────────────────────────▼─────────────────────────────────┐
│        Meta WhatsApp Cloud API (direct, no BSP)              │
│        ₹50–₹300 / month for this volume                      │
└────────────────────────────┬─────────────────────────────────┘
                             │ webhook
┌────────────────────────────▼─────────────────────────────────┐
│  Node.js 20 + Fastify on Railway Hobby ($5 + usage)          │
│  - Webhook endpoint (HTTP 200 fast, queue internally)        │
│  - Provider-agnostic LLM client (Gemini / Claude swappable)  │
│  - Routing + notifications                                   │
│  - Cron: end-of-day digest                                   │
└──────────┬──────────────────────────────────┬────────────────┘
           │                                  │
┌──────────▼──────────┐                 ┌─────▼──────────────┐
│  Supabase (free)    │                 │ Gemini 2.5 Flash   │
│  - Postgres (data)  │                 │ (primary AI)       │
│  - Auth (admin UI)  │                 │ + Claude Haiku     │
│  - RLS policies     │                 │ (fallback)         │
└─────────────────────┘                 └────────────────────┘
           │
┌──────────▼──────────────────────────────────────────────────┐
│  Delivery channels (outbound notifications)                 │
│  - Telegram bot → ops group + DM to assigned exec           │
│  - WhatsApp (via Cloud API) → customer replies by exec      │
└─────────────────────────────────────────────────────────────┘
```

## Component-by-component

### Language + runtime: **Node.js 20 + TypeScript**
- **Why:** fast to ship, first-class WhatsApp API SDKs + LLM SDKs, good Railway support, small memory footprint.
- **Alternative:** Python (FastAPI). Pick Node only if *you* are faster in Node; Python works equally well.

### HTTP framework: **Fastify**
- **Why:** ~5x faster than Express for this workload, sane TypeScript, good plugin ecosystem.
- **Alternative:** Express if you're more comfortable; performance is not the bottleneck here.

### Hosting: **Railway Hobby ($5/mo + usage, ~₹500–₹1,200/mo realistic)**
- **Why:** zero ops, push-to-deploy, built-in logs, scales by itself.
- **Alternatives rejected:**
  - *Render Starter* ($7 fixed) — predictable but slightly less flexible.
  - *DigitalOcean Droplet* — cheapest but requires SSH and admin time we don't want to sell to the client.
  - *VPS (Hetzner)* — €4/mo, cheapest overall, but ops-heavy; only if client is price-obsessed.

### Database: **Supabase Postgres (free tier, upgrade to Pro at ₹2,100 only if needed)**
- **Why:** generous free tier for our data sizes, Postgres (not a proprietary store), built-in auth for the admin UI in Option B, built-in RLS for multi-exec data scoping.
- **Alternative:** Neon (similar, sometimes cheaper). Both work; Supabase's auth is the tiebreaker for Option B.

### Message queue / background jobs: **Postgres-backed queue (pg-boss or trigger.dev lite)**
- **Why:** one fewer moving part. Redis / BullMQ is overkill at this volume.

### AI: **Gemini 2.5 Flash (primary) + Claude Haiku 4.5 (fallback)**
- **Why:** Gemini Flash is both the cheapest and the strongest on Hindi/Telugu/Hinglish per 2026 benchmarks. Claude Haiku is reliable English fallback.
- **Abstraction:** single `classify(messages: Message[]): Intent` function with provider behind a feature flag. Switch is a 10-line change.
- **Prompt strategy:** system prompt cached (Anthropic caching ~90% discount; Gemini also caches). Tight JSON-schema output for reliability.

### WhatsApp channel: **Meta Cloud API, direct (no BSP)**
- **Why:** free hosting by Meta, no subscription, pay only Meta's per-message rates. BSPs add ₹1,500–₹4,000/mo for a dashboard we don't need (we use the group+tags pattern).
- **When to switch to a BSP:** if the client later wants a polished team-inbox UI and has ≥5 dedicated agents.
- **Onboarding:** follow Meta Business Suite → WhatsApp Manager → Add Phone Number. GST + PAN + website + business-matching docs needed. 3–7 working days.

### Internal notifications: **Telegram Bot API**
- **Why:** free, unlimited messages, easier to integrate than a second WhatsApp number, works on every phone. Better for internal ops group.
- **Alternative:** same-WhatsApp-group broadcasts. Works but requires the group number to be on WABA (extra setup). Only if client insists.

### Observability: **Railway built-in logs + Sentry free tier**
- **Why:** free for our volume. Sentry captures real exceptions; Railway shows HTTP logs.

### Secrets management: **Railway environment variables + shared 1Password / Bitwarden vault**
- **Why:** simple, audit-able, easy to rotate.

### Version control + CI: **GitHub (private repo) + GitHub Actions**
- **Why:** free, familiar, good Railway integration.

## Concrete data schema (starting point)

```sql
-- customers: keyed by phone
create table customers (
  phone text primary key,                -- E.164, e.g. +919876543210
  name text,
  area text,                             -- e.g. "Gachibowli"
  assigned_exec_phone text references execs(phone),
  first_seen_at timestamptz default now(),
  last_message_at timestamptz,
  notes text,
  is_vip boolean default false
);

-- execs: internal team
create table execs (
  phone text primary key,
  name text not null,
  role text check (role in ('owner', 'exec', 'supervisor')),
  areas text[],                          -- e.g. {"Gachibowli","Kondapur"}
  services text[],                       -- e.g. {"deep_clean","sofa"}
  is_active boolean default true
);

-- messages: every inbound + outbound log
create table messages (
  id uuid primary key default gen_random_uuid(),
  customer_phone text references customers(phone),
  direction text check (direction in ('in', 'out')),
  raw_text text,
  media_urls text[],
  tldr text,
  intent text,                           -- lead/booking/complaint/reschedule/pricing/info/noise
  urgency text check (urgency in ('low', 'normal', 'urgent')),
  language text,                         -- en, hi, te, mixed
  created_at timestamptz default now(),
  classified_by text,                    -- 'gemini-2.5-flash' etc.
  classification_confidence numeric
);

-- statuses: current state per customer per lifecycle
create table statuses (
  customer_phone text references customers(phone),
  lifecycle text check (lifecycle in ('lead','service','complaint')),
  state text not null,                   -- e.g. 'new','contacted','quoted'...
  updated_at timestamptz default now(),
  updated_by text,                       -- exec phone
  note text,
  primary key (customer_phone, lifecycle)
);

-- audit: for accountability
create table audit_log (
  id bigserial primary key,
  actor text,                            -- exec phone or 'system'
  action text,
  target_customer_phone text,
  payload jsonb,
  at timestamptz default now()
);
```

## Operational budget (ongoing, client pays direct)

| Line item | Monthly (INR) |
|---|---|
| Meta WhatsApp API (inbound-heavy, service window free) | ₹50–₹300 |
| Gemini 2.5 Flash (~3,000 msgs/mo) | ₹100–₹400 |
| Railway Hobby + usage | ₹500–₹1,000 |
| Supabase (free tier) | ₹0 |
| Sentry (free tier) | ₹0 |
| Buffer / GST | ~₹300 |
| **Total realistic** | **₹950–₹2,000 / month** |

## What you need to buy / have ready before Week 1 kickoff

- [ ] GitHub organisation for TinKern Labs (if not already).
- [ ] Railway account (can be TinKern's during build; transfer at go-live).
- [ ] Supabase account (same pattern).
- [ ] Gemini API key + Anthropic API key (fallback).
- [ ] Telegram BotFather account.
- [ ] 1Password / Bitwarden vault shared with client at go-live.
- [ ] A clean local `.env.example` and a template repo you reuse for the next client (starts the productisation).

## Citations / sources (for your own confidence, not the client)

- Meta WhatsApp Cloud API pricing for India (April 2026): Meta Developer Platform — Pricing page, `developers.facebook.com/documentation/business-messaging/whatsapp/pricing`. Confirms: per-message pricing since July 1, 2025; India marketing ₹0.8631; utility/auth ~₹0.115; service messages free with no cap inside 24-hour customer-service window.
- BSP pricing April 2026: AiSensy official pricing (`aisensy.com/pricing`), CompareBizTech 2026 comparison (`comparebiztech.com/wati-vs-aisensy-vs-interakt`), Interakt / WATI official pages.
- Claude / GPT / Gemini pricing (April 2026): Anthropic pricing page, OpenAI pricing page, Google AI Studio pricing page. Also cross-referenced at `apiscout.dev/blog/llm-api-pricing-comparison-2026` and `nicolalazzari.ai/articles/ai-api-pricing-comparison-2026`.
- Indian-language LLM quality: `ChatGPT vs Claude vs Gemini` India reviews (April 2026), plus IndicGenBench paper (arXiv:2404.16816) — Gemini leads on Hindi/Telugu.
- Hosting pricing (April 2026): Railway docs (`docs.railway.com/reference/pricing`), Render docs, DigitalOcean pricing, Supabase pricing.
- Cross-checked against user-supplied ChatGPT deep-research reports: the per-conversation Meta pricing quoted in those reports (₹0.27–₹0.80 per conversation; 1,000 free service conversations) is the **old model** that Meta retired on July 1, 2025. Do not use it.
