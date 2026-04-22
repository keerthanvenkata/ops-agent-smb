# Slide 13 — 4-Week Timeline

## Slide Title
Four weeks, four clear milestones, one working system at the end

## Objective
Set honest expectations on what happens when. Make the part-time nature clear *without* undermining confidence. Own the schedule.

## Key Points (on slide)

### Week 1 — Discover & set up
- 45-min kickoff discovery call; fill in Slide 02 / 03 / 04 answers.
- Agree final scope, routing rules, status flow.
- Start **Meta Business verification + WABA onboarding** (this is the slowest external dependency — usually 3–7 working days).
- Set up Railway, Supabase, GitHub repo, environment credentials.
- **Milestone:** signed SOW, WABA application submitted, architecture locked.

### Week 2 — WhatsApp + AI brain
- Cloud API webhook receiving real test messages.
- AI classification + TLDR working on synthetic + real messages.
- Intent / urgency / language detection tuned to your actual chat patterns.
- **Milestone:** given any real message, the agent produces the right TLDR and intent in >90% of cases.

### Week 3 — Routing, data, notifications
- Customer data layer populated (Option B: one-time import done).
- Executive mapping, area rules, assignment rules coded.
- Direct-to-exec + ops-group notifications live.
- Status updates via WhatsApp / Telegram commands working.
- Urgent / complaint escalation to owner working.
- **Milestone:** a real message can flow end-to-end to the right exec with the right tags.

### Week 4 — Test, tune, go-live, handover
- Shadow-mode (agent runs alongside your current flow, you compare) for 2–3 days.
- Tune the prompts and rules against any misrouted messages.
- Full cutover to live mode.
- Written SOP handed over; 1-hour walkthrough with you and key execs.
- **Milestone:** system is live, owner has end-of-day digest, team is trained.

### What "part-time" actually means
- This is **four calendar weeks** with focused engineering on our side — not a 40-hour-per-week consultant engagement.
- You get full end-of-week check-ins, a shared project tracker, and quick responses on blockers.
- The 4-week schedule assumes you / a nominated staff are available for ~2–3 short sessions per week.

## Visual
A horizontal Gantt-style bar, 4 columns:
```
Week 1  |████ Discovery + WABA onboarding
Week 2  |     ████ WhatsApp + AI classification
Week 3  |          ████ Data + routing + notifications
Week 4  |               ███ Shadow  █ Go-live
```
Each week has a milestone checkbox at the end.

## Speaker Notes
"Four calendar weeks, four clean milestones. To set expectations honestly — this is not a dedicated forty-hour-a-week consultant. It's focused part-time engineering across four weeks, which is both what makes the price honest and what gives you the natural iteration time on real data. Week one is discovery and the slow bit — getting your WhatsApp number onto the official API, which is a Meta review, usually three to seven working days; we can't speed that up, so we start it on day one. Week two we get the AI reading messages and summarising. Week three we plug in your team and routing. Week four we run it in shadow mode next to your current flow for a couple of days so you can verify before we flip the switch. By end of week four, you have a system, your team has a one-page SOP, and I'm on call for support for the next forty-five to sixty days."

## Questions to Ask
- Is a 4-week timeline acceptable, or is there a specific date we should hit?
- Are there days in the next 4 weeks when you or your team will be unavailable? (festivals, travel)
- Is there a specific first chat / customer / scenario you want us to demonstrably get right on go-live?

## What to Capture
- Their preferred kickoff date and any hard deadlines.
- Unavailability windows (affects the 2-3 sessions/week assumption).
- The "demo scenario" they most want to see working on day 1.

## Notes for you (not on slide)
- **Biggest real-world risk: WABA onboarding delays.** Meta's verification can sometimes take 2 weeks. If it drags past Week 2, shift the timeline — don't fake it.
- **Don't commit to a specific go-live date < 3.5 weeks from kickoff.** You have zero buffer at 4 weeks.
- In your head, Week 4 is actually Week 4 + a 1-week soft-support buffer before the 45-day clock starts. Don't announce it, but hold it.
