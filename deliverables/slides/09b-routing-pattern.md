# Slide 09b — Routing Pattern: Shared Inbox vs. Group + Tags

## Slide Title
Two ways to deliver messages to your team — which one actually fits you

## Objective
This is a small-but-critical architectural choice. The *same* AI agent can serve either pattern. Picking the right one saves cost, saves training, and saves you from building a dashboard the team won't use.

## Key Points (on slide)

### Pattern 1 — Shared Team Inbox (web dashboard)
- Every staff member logs into a web app (from BSP or custom).
- They see a unified queue of chats; assign, claim, reply, add internal notes, apply tags.
- Great when you have ≥5 dedicated customer-service agents working full-time at a desk.
- **Costs more** (BSP subscription ₹1,500–₹4,000/month, or we build a dashboard as part of scope).
- **Training overhead** — cleaners and field execs are typically on-the-move on phones, not at a desk.

### Pattern 2 — Direct-to-Exec + Shared Ops Group with Tags *(recommended for this client)*
- The AI agent does the thinking; the *delivery* is via WhatsApp or Telegram the team already uses.
- Each incoming customer message produces **two outbound notifications**:
  1. **Direct message to the responsible executive** — raw message + TLDR + suggested next action.
  2. **Broadcast to a shared internal ops group** — same TLDR tagged with intent, area, status, and `@assigned_exec`.
- Urgent / complaint messages also get a direct ping to the owner in real time.
- Everyone sees everything in the group — full transparency, zero new UI.
- **Cost**: zero additional BSP seats; just more messages through the same channel.
- **Training**: none. Your team already lives in WhatsApp/Telegram groups.

### Side-by-side

| Dimension | Shared Inbox | Group + Tags |
|---|---|---|
| Team tool | New web dashboard | WhatsApp / Telegram (existing) |
| Training needed | Medium–High | Near zero |
| Cost (monthly) | BSP or dashboard infra ₹1,500–₹4,000 | Negligible |
| Who sees what | Role-based; can be siloed | Everyone sees everything tagged |
| Ownership of chat | Explicit claim/assign | Implicit via `@assigned_exec` tag |
| Accountability | Very high (logged) | Good (group-visible) |
| Offline / field-friendly | Poor | Excellent |
| Works for 2–8 person team | Overkill | Ideal |
| Works for 20+ person team | Preferred | Gets noisy |

## Visual
Two sketched mock screens side-by-side:
- Left: a clean web inbox UI with a queue, tags, and agent avatars — labelled *"Shared Inbox (Pattern 1)"*.
- Right: a WhatsApp group chat showing bot messages like `[LEAD][GACHIBOWLI][NEW] @priya — Ramesh asking for 3BHK deep-clean quote this weekend. Raw: …` — labelled *"Group + Tags (Pattern 2)"*.
Caption under both: *"Same AI agent. Same data. Only the delivery surface changes."*

## Speaker Notes
"Most vendors will push you toward a shared team inbox — a web dashboard where everyone logs in and manages chats. That works well for a twenty-person customer support team sitting at desks. For a field-heavy team like yours — cleaners, supervisors, some office — it's usually overkill. They are on phones, on the move. They won't remember to log into a dashboard every morning. What I'm recommending instead is pattern two: our agent does the intelligence — reading, summarising, classifying, routing — but the *delivery* stays in WhatsApp or Telegram. Two messages go out: one direct to the responsible exec with 'here's your new booking', and one into a shared ops group with tags so everyone has visibility. You get accountability, transparency, and zero training. If you ever grow past eight or ten execs, we'll revisit this — but that's a six-month-from-now problem."

## Questions to Ask
- Do your execs already share a WhatsApp or Telegram group for internal coordination?
- Would they prefer a dashboard, or would that feel like extra work they won't do?
- For escalations to you specifically — do you want a direct ping, or is the group with an `@owner` tag enough?
- Is there ever a reason an exec should *not* see another exec's chats? (privacy / territorial)

## What to Capture
- Existence (or not) of internal coordination group — and where.
- Preferred escalation channel — WhatsApp DM, call, SMS.
- Any confidentiality boundaries (e.g., financial chats only to owner).
- Their gut reaction: dashboard-curious or dashboard-allergic.

## Notes for you (not on slide)
- **Hybrid is possible**: we build Pattern 2 on day one (goes live faster, cheaper); add a minimal read-only dashboard in a later sprint if they want it. This lets you deliver on the ₹30k/₹45k quote without cutting value.
- **Telegram vs WhatsApp for the internal ops group**: Telegram bots are much easier to integrate and free-forever; WhatsApp groups require the Cloud API to post, which means the group number needs to be on WABA. Default to Telegram for internal ops-group notifications unless the client insists on WhatsApp.
