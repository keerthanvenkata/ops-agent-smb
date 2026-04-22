# Pricing Analysis — Is ₹30k Underpriced? Is ₹45k Fair?

Honest answer first, justification second.

## TL;DR

- **₹30,000 is underpriced for what's written in the scope, if priced at market freelance rates in Hyderabad.** But it's *defensible* because (a) this is likely your first engagement of this shape, so it's partially a proof-of-value investment; (b) it's genuinely part-time across 4 weeks; (c) the real recurring revenue is in post-support paid work if the client sticks.
- **₹45,000 is fair-to-lean.** It is not premium. It accurately prices the additional scope (data migration, admin view, daily digest, extra 15 days of support).
- **What you should *not* do:** drop below ₹30k, or deliver Option A's scope at anything below ₹27k.

## Effort math — honest

A realistic part-time effort breakdown for Option A:

| Phase | Hours (real work) |
|---|---|
| Discovery + SOW + architecture | 6–8 |
| WABA onboarding + account setup | 3–4 (mostly waiting, some paperwork) |
| WhatsApp Cloud API webhook + infra | 8–10 |
| AI classifier + prompt engineering + testing | 10–12 |
| Data layer (schema + CRUD) | 6–8 |
| Routing + notifications + escalation logic | 8–10 |
| Status updates + command parser | 4–6 |
| End-to-end testing + tuning on real data | 8–12 |
| Go-live + handover + SOP writing | 4–6 |
| **Subtotal** | **~57–76 hours** |
| 45-day support (reactive, not billed hours) | allow 8–10 hours buffer |
| **Total realistic effort** | **~65–85 hours** |

Option B adds ~10–15 hours for import + admin view + daily digest → **~80–100 hours total.**

## Market rate check — Hyderabad, April 2026

For a freelancer doing mid-skill backend + AI integration work:

| Tier | INR / hour | INR / 80 hours |
|---|---|---|
| Junior / generalist | ₹400–₹600 | ₹32,000–₹48,000 |
| Solid mid-level | ₹700–₹1,000 | ₹56,000–₹80,000 |
| Senior / premium | ₹1,200–₹2,000 | ₹96,000–₹1,60,000 |
| Small agency | ₹1,500–₹3,000 | ₹1,20,000–₹2,40,000 |

Custom MVP quotes from Indian dev shops typically start at ₹3–7 lakh for a "basic app" — context: they bake in sales margin, account management, QA overhead, and project management that a solo freelancer doesn't.

## So is ₹30k underpriced?

**Yes, at market mid-level rates — by ~30–40%.**

But at the *junior* end it's within range (₹400/hr × 75 hours = ₹30,000), and given:

1. **This is likely your first engagement of this shape.** First-client pricing is strategically lower to build a portfolio and reference case.
2. **The client is a small Hyderabad SMB paying out of operational cashflow, not VC money.** Price elasticity is real — at ₹1,00,000, the conversation dies.
3. **Your real revenue model is not this invoice.** It's:
   - Paid support for bugs/scale/features over 6–18 months.
   - Referrals to other Hyderabad SMBs in similar pain.
   - A productised version of this agent sold to the next 10 clients at the same price band, where your effort drops by 50%+ because of reuse.
4. **Your ongoing costs are minimal.** Your tools and learning apply to the next client.

So ₹30k is **strategically defensible, not financially optimal**. Own the framing.

## Is ₹45k justified? Sell points

| Option B add-on | Justification |
|---|---|
| One-time customer data import | Any decent import of 500–2,000 records with cleanup is an extra 6–8 hours of work. At ₹700/hr that's ₹5,000 on its own. |
| Lightweight admin view | Even a minimal read-only web UI is 4–6 hours, plus auth setup. Worth ₹3,500–₹5,000. |
| Owner daily-digest | End-of-day summary generation + delivery pipeline + prompt work. Worth ₹2,000–₹3,000. |
| Extra 15 days of support | Extending support from 45 to 60 days is 5 more weekdays of availability. Worth ₹3,000–₹4,000. |

Sum of add-ons: ₹13,500–₹17,000. Option B is ₹15k more than Option A. **The price is honest.**

## How to sell Option B

1. **Don't sell it as "the expensive option."** Sell it as "the version you'd actually use daily."
2. **Lead with the daily digest.** Owners instinctively want "an evening summary of my business." It's the sticky feature.
3. **Make Option A sound intentionally bare-bones.** "No dashboard, no digest, no import — just the core routing. Works, but feels lean."
4. **Anchor on the *monthly savings*, not the upfront cost.** "You pay an extra ₹15k once; you save roughly that in a month by recovering one missed lead."
5. **Bundle confidence.** "Option B's extra 15 days of support means we're on call until June rather than mid-May. Peace of mind during your real test — the busy season."

## What ₹30k is actually buying them

Be explicit with the client. Tell them:

> "At ₹30k, you are paying the marginal cost of a focused part-time engineer for four weeks. You are *not* paying agency margins, project manager overhead, or account executive hand-offs. You are paying me, a small outfit, to deliver exactly what's on this page — no less, no more. The reason I can price it this honestly is that my overhead is minimal and I'm betting on this becoming a long relationship of small paid changes over the next year."

## Anchoring tactics for the meeting

- **Mention ₹45k first, then ₹30k.** The ₹30k then looks like relief, not the number they argue down from.
- **Show the monthly running-cost line early.** It anchors them in the "this is cheap vs. what it does" frame.
- **If they say "₹30k is too much":** don't drop the number. Offer to remove something (e.g., "I can do just the integration without the routing rules for ₹20k — you'd get the inbox agent reading messages, but you'd still route them manually for now. Deal?"). This reframes negotiation as scope, not price.
- **If they offer ₹25k:** politely decline with a scope-shrink counter-offer, not a price drop.

## Long-term revenue projection from this one client

If things go well:

| Phase | Likely revenue |
|---|---|
| Initial build (Option B) | ₹45,000 |
| Paid support / changes over 12 months | ₹30,000–₹80,000 (4–10 small asks × ₹5–10k each) |
| Optional AMC year 2 | ₹60,000–₹1,00,000 |
| Referrals to other Hyderabad SMBs | priceless (and repeatable) |

**Year-1 expected revenue from this one relationship: ₹75,000–₹1,25,000.**

That is the number you should be holding in your head — not ₹30k.
