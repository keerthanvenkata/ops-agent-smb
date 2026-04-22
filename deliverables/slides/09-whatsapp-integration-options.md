# Slide 09 — WhatsApp Integration Options

## Slide Title
How we connect to WhatsApp — three paths, one honest recommendation

## Objective
Compare WhatsApp Business app vs Meta Cloud API (direct) vs BSP providers, with real 2026 India pricing. Steer toward the option that fits their volume and in-house tech comfort. Shut down any "just use the free app" hope — it genuinely does not work for this use case.

## Key Points (on slide)

### Option A — WhatsApp Business App (the free green app)
- **Not usable for our solution.** It is built for one device, one user. It has no official API for software to read messages. Any "solution" that scrapes the app is against WhatsApp's terms and *will* eventually get your number banned.
- Mention this only to close the door on it.

### Option B — Meta WhatsApp Cloud API (direct)
- **This is Meta's official API.** We build the inbox agent against it directly.
- **No subscription to a middleman.** You pay Meta per-message rates only.
- **India per-message rates (Jan 2026, Meta's published rates):**
  - Marketing templates: **₹0.8631** per delivered message
  - Utility / Authentication templates: **~₹0.115** per message
  - **Service messages (any reply to a customer within 24 hours of their last message to you): FREE**
- **For your business, 90%+ of messages fall in the free service window.** Realistic monthly Meta spend: ₹50–₹300.
- You need GST, PAN, Meta Business verification. We handle all of it.

### Option C — BSP (Business Solution Provider)
- Third-party platforms (AiSensy, WATI, Interakt, Gupshup, 360dialog) that wrap the Cloud API in a prettier UI and a pre-built team inbox.
- **You pay a monthly subscription to the BSP *plus* Meta's per-message rates (sometimes with a small BSP markup, typically 10–20%).**
- Indicative India pricing, April 2026:

| BSP | Entry plan | Per-msg markup | Notable |
|---|---|---|---|
| **AiSensy** | ₹1,500/mo (monthly) or ~₹1,350/mo (annual). Free-Forever plan exists for testing. | ~20% markup (Mktg ~₹1.09) | IST phone support, unlimited agents, free green-tick help |
| **Interakt** | ₹2,499/mo (Growth). Starter ₹999/mo is Instagram-only. | Varies; utility markup can be 30–40% | Strong Shopify integration |
| **WATI** | ~₹2,499–5,999/mo. Growth capped at 3 agents. | ~20% on utility | Best UI; agent seats cost extra |
| **360dialog** | ~₹3,900/mo | Minimal markup | Compliance-first, no-markup reputation |

## Visual
Two-column table on the slide: "App — ❌ not viable", "Cloud API — ✅ recommended for lean build", "BSP — ✅ if you want a ready-made team inbox UI". Include a small INR price band per column.

## Speaker Notes
"There are three doors. Door one — the WhatsApp Business app on your phone — is a dead end for what we're building. It cannot be integrated with, full stop. Door two is Meta's official Cloud API. We plug our agent directly into it. You pay Meta's per-message rates, which for your business will likely come to fifty to three hundred rupees a month, because the vast majority of your conversations are customer-initiated replies inside the twenty-four hour free window. Door three is a BSP — AiSensy, WATI, Interakt and a few others. They sit on top of the Cloud API, charge you fifteen hundred to four thousand rupees a month, and give you a ready-made team-inbox web dashboard. My default recommendation for a team your size is Door Two — direct Cloud API — because it's cheaper, it's officially supported, and the 'team inbox' part we design with you in the next slide *without needing a dashboard at all*. If you later decide you want the full BSP dashboard experience, we can migrate in a day."

## Questions to Ask
- Have you been pitched by AiSensy, WATI or Interakt before? What did you think?
- Are you already paying for any of them?
- Do you prefer paying a predictable monthly subscription, or pay-per-message for lower cost but more variable?
- How comfortable is your team with a web dashboard vs. just using WhatsApp on their phones?

## What to Capture
- Any existing BSP contract / commitment.
- Their preference on fixed vs variable monthly spend.
- Whether they want a "dashboard" as a deliverable or are happy with WhatsApp-native routing.

## Notes for you (not on slide)
- Meta moved to per-message pricing on **July 1, 2025**. Any pricing you see quoted as "per conversation" with "1,000 free service conversations/month" is **outdated** — that was the old model.
- Some BSP comparisons still quote the old model; cross-check before repeating their numbers.
- The logo green-tick / "Meta Verified" on the Business App ≠ the Official Business Account green tick via API. Don't conflate them.
