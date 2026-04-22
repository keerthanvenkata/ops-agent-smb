# Slide 05 — Future Workflow

## Slide Title
What happens every time a customer messages you, after we go live

## Objective
Make the solution tangible. Walk them through a concrete example — not abstract architecture. They should finish this slide thinking, *"oh, this is obvious and useful."*

## Key Points (on slide)
Six numbered steps, visually on a single line:
1. Customer sends WhatsApp message (no change for them).
2. Message hits our agent via Meta Cloud API webhook.
3. Agent identifies customer by phone; fetches history + assigned executive.
4. Agent classifies intent (lead / booking / complaint / reschedule / pricing / info) and urgency.
5. Agent writes a 1–2 line TLDR and routes it:
   - Directly to the responsible executive, AND
   - Into a shared ops group with tags (e.g., `[LEAD][KONDAPUR][NEW]`).
6. Executive replies on WhatsApp as normal. Status auto-updates.
7. Urgent issues (complaints, escalations) simultaneously ping the owner.

## Visual
Horizontal 6-box flow, left-to-right, with icons:
`📱 customer  →  🔌 webhook  →  🧠 agent (history + intent)  →  🏷️ TLDR + tags  →  👤 exec + 👥 ops group  →  ✅ status`

Below the flow, a mock example card:
> **Raw message (Telugu/Hinglish):** "Saar, tomorrow 10am booking ni 2pm ki change cheyyandi plz"
> **TLDR (English):** "Ramesh K. — reschedule tomorrow's booking from 10am to 2pm."
> **Tags:** `[RESCHEDULE][EXISTING][LOW-URGENCY]`
> **Routed to:** Exec Priya (assigned to this customer) + Ops group.

## Speaker Notes
"Let me walk you through a specific example. Suppose tomorrow morning, Ramesh — an existing customer — messages your WhatsApp in Telugu-Hinglish asking to reschedule his 10 a.m. booking to 2 p.m. Today, that message sits in your inbox until you open it, you forward it to Priya who handles this area, Priya may or may not see it, she replies to Ramesh separately, and nobody has a record. With the agent: the message arrives, the agent recognises Ramesh, sees Priya is his usual exec, writes a one-line English summary 'reschedule 10→2 tomorrow', tags it, and pings Priya directly — also drops it into your team's ops group with the tag. You never had to touch it. That's a small example. Now multiply it by fifty messages a day."

## Questions to Ask
- Does this match how you *want* things to work, or would you change anything?
- For an urgent complaint, would you want real-time ping, or a consolidated alert?
- In the end-of-day summary, what do you actually care about? (leads won/lost? pending complaints? bookings for tomorrow?)

## What to Capture
- Their definition of "urgent" — is it keyword-based (refund, angry, cancel), or customer-type-based (VIP), or both?
- Their preferred channel for urgent escalation — WhatsApp, call, Telegram, SMS?
- Their preferred end-of-day digest contents.
