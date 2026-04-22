# Red Flags & Missing Requirements

## Red flags in client answers — slow down or walk

These are patterns that predict a bad engagement. If one appears, *do not* discount the price to rescue the sale. Reframe, reschedule, or walk.

### Commercial red flags

- **"Can you match ₹15,000 / ₹20,000?"** — this isn't a negotiation, it's a rejection. Do not race to the bottom. Offer a genuinely lighter scope (see `05-negotiation-strategy.md`) or decline politely.
- **"Pay after go-live only"** — never. You need 50% upfront to start, period. No exceptions for a first engagement.
- **"My nephew / cousin / friend's son can also do this, but we chose you"** — subtext: *we will compare your work to an unskilled person who charges nothing*. Clarify expectations hard or walk.
- **"Let's not make it a contract, just a trust thing"** — absolutely not. A 1-page SOW is protection for both sides, not bureaucracy.
- **"We need this in 2 weeks"** — you cannot deliver a quality WhatsApp API integration in 2 weeks. The Meta verification alone can take 1 week. Either push back to 4 weeks or walk.
- **They won't pay for running costs separately ("just include it")** — running costs are variable and open-ended. Never fold them into a fixed fee. Insist on transparency.

### Operational red flags

- **"I don't have GST"** — WhatsApp Business API requires GST in India. You can work around with PAN + other docs sometimes, but it's friction. Investigate before committing to timeline.
- **Business name ≠ what's on the WhatsApp profile, website, and GST cert** — Meta OBA will likely reject. Green-tick ambitions need to be paused.
- **No website, no social presence** — Meta Business verification will struggle. Plan a 1-week buffer or help them stand up a basic site first.
- **"My current number is banned / under review"** — this is a bigger problem than they realise. A banned number cannot be onboarded to Cloud API. Probe what happened.
- **They only log into WhatsApp from a shared family phone** — cultural norm in some SMBs. Mention firmly that the number moves to your/their business identity, not a family device.

### People red flags

- **Owner is not in the meeting** — you cannot sell this to an office manager or accountant. Reschedule.
- **"My manager / CA / friend will decide"** — map the real decision-maker now. Do not keep pitching the wrong person.
- **The person you're meeting speaks vaguely about pain ("everything is fine, this would be a nice-to-have")** — low urgency = low close rate. Don't spend 6 weeks chasing. Mark for 6-month follow-up and move on.
- **Owner is actively hostile to automation ("what will my staff do?")** — this is a values conflict, not a requirements conflict. Address head-on (the system *supports* staff, not replaces), or walk.
- **"We tried a similar thing before and it failed"** — dig into why. If the failure was their buy-in, not the tool, yours will fail too. Address trust explicitly.

### Technical red flags

- **They already pay WATI / AiSensy / Interakt and refuse to consider Cloud API direct** — not necessarily bad, but confirm the BSP exposes webhooks / API for our agent to plug in. If not, you can't build. Renegotiate or walk.
- **They have an unknown legacy app ("we have an ERP someone built for us years ago")** — integration scope just tripled. Either ignore the legacy app entirely (fresh start) or rescope heavily.
- **"All our customer data is on the owner's personal phone contacts"** — feasible but annoying. Budget extra hours for a manual export / cleanup in Week 1.

## Requirements you will likely forget — check for each

When scoping, it's easy to miss these. Run through the list explicitly before finalising SOW.

### Functional
- [ ] **Voice notes** — WhatsApp voice messages are common in India. Do we transcribe them? If yes, that's an extra Gemini/Whisper call per voice note. Scope it or exclude it.
- [ ] **Images / videos** — customers send photos of dirty rooms or videos. Do we index them, summarise them, or just forward? v1 default: forward with a caption; no image understanding.
- [ ] **PDF / document attachments** — rare but happens. Forward + log.
- [ ] **Stickers / emojis / reactions** — treat as no-op (don't classify).
- [ ] **Group messages** — if the customer messages from a group, behaviour is different. Usually we ignore group-originated messages in v1.
- [ ] **Spam / wrong-number messages** — add a "noise" intent so we don't assign them to an exec.

### Operational
- [ ] **Business hours** — urgent escalations at 2 AM — do they want them? Default: only during business hours unless "complaint + VIP".
- [ ] **Holidays / festivals** — Diwali, Dussehra, etc. Different routing? Off-day auto-replies?
- [ ] **Staff availability / leave** — if Priya is on leave, who covers her customers? Easy manual override must exist.
- [ ] **Language fallback** — if the agent can't understand the message, what does it do? Default: route to owner.
- [ ] **First-ever message** — greeting response? v1 default: forward to owner/round-robin, no auto-greet (customers hate chatbots; this is not a chatbot).

### Data & compliance
- [ ] **Customer consent** — technically WhatsApp Business API requires opt-in for business-initiated messages. Customer-initiated chats (replies within 24h) are fine. Clarify whether they'll ever send templates.
- [ ] **Retention** — how long do we keep raw message content? Default: 90 days.
- [ ] **Export** — if they leave us / want a backup, they get a DB dump. Mention this in SOW.
- [ ] **PII handling** — messages contain addresses, phones, names. No third-party analytics on raw content; AI API calls only. Document this.
- [ ] **GDPR / DPDP Act** — India's DPDP Act applies. We're handling personal data; the client is the data fiduciary, we are the data processor. Add a 2-line DPA clause to the SOW.

### Edge cases
- [ ] **Customer messages from 2 different phones** — dedupe logic? Default: each phone = separate customer record; owner can manually merge.
- [ ] **Customer number changes** — merge logic? v1: manual merge only.
- [ ] **Executive leaves the company** — reassignment logic? v1: owner reassigns manually; our admin view shows unassigned customers.
- [ ] **Agent makes a bad call** — feedback loop? v1: exec can reply `wrong intent` to the ops group message; we log for tuning.

### Deliverables we often forget to ship
- [ ] A 1-page SOP PDF for the team in both English and Hindi (owner's choice).
- [ ] A short recorded Loom walkthrough for future-hire onboarding.
- [ ] Backup credentials stored in a shared 1Password / Bitwarden vault — you DO set this up on Day 1.
- [ ] A simple "kill switch" — one command that pauses the agent (in case of a runaway bill).
