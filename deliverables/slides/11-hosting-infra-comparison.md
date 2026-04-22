# Slide 11 — Hosting & Infrastructure

## Slide Title
Where the agent actually runs — small footprint, low cost

## Objective
Tell them where the service lives, reassure them it's inexpensive and reliable, and get ownership clarity (whose account, whose credit card).

## Key Points (on slide)

### What we need to host
1. A tiny Node/Python web service (the webhook + agent brain).
2. A small PostgreSQL database (customers, executives, messages, statuses).
3. Optional: a very thin dashboard (only on Option B).

### 2026 options (monthly INR, all include basic reliability)

| Provider | Baseline plan | Good for | INR/mo |
|---|---|---|---|
| **Railway** | Hobby $5 + usage | One-click deploy, very low ops | **~₹500–₹1,200** |
| **Render** | Starter $7 fixed | Predictable pricing, multi-region | **~₹600–₹1,500** |
| **DigitalOcean Droplet** | Basic VM $4–$6 | Full control, SSH, Docker | **~₹350–₹1,000** |
| **Supabase (Postgres + auth)** | Free tier / Pro $25 | Best DB-as-a-service for small teams | **₹0 (free tier) / ₹2,100 (Pro)** |
| **Hetzner VPS (CX-series)** | €4–€6 | Cheapest serious VPS, EU-hosted | **~₹400–₹650** |

### Our recommended stack for you

- **Service hosting:** Railway Hobby (~₹500–₹800/mo). One-click deploy, logs built-in, zero-ops.
- **Database:** Supabase free tier (Postgres, auth, simple admin view comes free). Upgrade to Pro only if volume grows past the free ceiling.
- **Total projected monthly infra:** **₹500–₹1,500 / month.**
- **All accounts are created in your name / business email.** You own everything and can switch vendors later.

## Visual
A 3-layer stack diagram:
```
   ┌──────────────────────────┐
   │  Railway (web + cron)    │   ← agent brain
   ├──────────────────────────┤
   │  Supabase (Postgres)     │   ← customer / exec / message data
   ├──────────────────────────┤
   │  Meta Cloud API          │   ← WhatsApp channel
   └──────────────────────────┘
                │
         Gemini / Claude API  ← AI brain
```

## Speaker Notes
"Hosting for a service this size is effectively a rounding error. We'll run the agent on Railway — it's the easiest path, you push code and it runs, no server admin. We'll use Supabase for the database, which has a generous free tier. All told, running the whole system costs maybe one thousand to fifteen hundred rupees a month, plus the Meta and AI costs we discussed. We create every account in your business name — so if one day you want to move to a different vendor, or bring it in-house, you have full control. Nothing is locked to us."

## Questions to Ask
- Do you have a business email address / domain we should use for these accounts?
- Do you have a credit card / corporate card to put on file for these services? (Or do you want me to front them and invoice monthly at actuals + 10%?)
- Any compliance, data-residency or industry-specific hosting preferences?

## What to Capture
- Preferred business email for account creation.
- Payment arrangement for running costs (their card vs. you billing pass-through).
- Any regulatory constraints (unlikely for cleaning services, but ask).

## Notes for you (not on slide)
- A common SMB pattern: *you* hold the Railway/Supabase accounts during build; transfer ownership to them at go-live. Cleaner than juggling half-set-up accounts mid-build.
- If they resist monthly vendor costs entirely, you can run on a single DigitalOcean droplet with self-hosted Postgres at ~₹400–₹600/mo — but ops burden is real, and that's where your paid-support hours will go. Not a recommendation for this engagement; mention only if pushed.
