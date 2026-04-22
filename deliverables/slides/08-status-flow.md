# Slide 08 — Lead / Booking / Complaint Status Flow

## Slide Title
The three lifecycles we track — keeping it boring on purpose

## Objective
Agree on the *minimum* set of statuses. Any more than this and you're building a CRM. Any less and the system gives no visibility.

## Key Points (on slide)

**Lead lifecycle**
`new → contacted → quoted → won / lost`

**Service / booking lifecycle**
`scheduled → in-progress → completed`
(optional: `rescheduled`, `cancelled`)

**Complaint lifecycle**
`open → pending → resolved`
(with side-branch: `escalated` when flagged to owner)

How statuses move:
- Agent sets the initial status based on intent classification.
- Exec updates status via simple WhatsApp keywords or a one-click link in the ops-group message. (e.g., reply `status quoted`.)
- Owner sees everything in the end-of-day digest.

## Visual
Three horizontal status pipelines, stacked. Each is just pills in a row connected by arrows. Colours:
- Lead = blue
- Service = green
- Complaint = red/orange (with an "escalated" branch coming off)

## Speaker Notes
"This is where most software projects over-engineer themselves into the ground. A 20-stage pipeline looks impressive on a screenshot and is useless in real life. I'm suggesting four stages for leads, three for bookings, and three for complaints. That's it. Your exec will update status by just typing 'status won' or 'status resolved' in WhatsApp — no login, no dashboard. If in six months you want more nuance — 'contacted but no response', 'quoted but waiting on approval' — we can add it. Let's not start there."

## Questions to Ask
- Are there any statuses we've missed that matter to you operationally?
- How do you today know if a customer was actually followed up after quoting?
- For complaints — is there a time-based SLA you want (e.g., escalate to you if open > 2 hours)?
- Do you want to see who updated a status and when? (for accountability)

## What to Capture
- Any extra status they insist on adding (note it, but challenge if it's not operationally critical).
- SLA preferences (e.g., auto-escalate complaints after X hours).
- Whether they want the owner to see every status change or just daily digest.
