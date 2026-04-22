import type { Slide } from "../types";

export const slide: Slide = {
  id: "timeline",
  number: "13",
  title: "Four weeks, four clear milestones, one working system at the end",
  subtitle: "Calendar weeks, not full-time weeks. Own the schedule honestly.",
  objective:
    "Set honest expectations on what happens when. Make the part-time nature clear without undermining confidence.",
  content: [
    { kind: "heading", text: "Week 1 \u2014 Discover & set up" },
    {
      kind: "bullets",
      items: [
        "45-min kickoff discovery; fill in Slides 02 / 03 / 04 answers.",
        "Agree final scope, routing rules, status flow.",
        "Start Meta Business verification + WABA onboarding (slowest external dependency \u2014 3\u20137 working days).",
        "Set up Railway, Supabase, GitHub repo, environment credentials.",
        "Milestone: signed SOW, WABA application submitted, architecture locked.",
      ],
    },
    { kind: "heading", text: "Week 2 \u2014 WhatsApp + AI brain" },
    {
      kind: "bullets",
      items: [
        "Cloud API webhook receiving real test messages.",
        "AI classification + TLDR working on synthetic + real messages.",
        "Intent / urgency / language detection tuned to your actual chat patterns.",
        "Milestone: agent produces correct TLDR + intent in >90% of cases.",
      ],
    },
    { kind: "heading", text: "Week 3 \u2014 Routing, data, notifications" },
    {
      kind: "bullets",
      items: [
        "Customer data layer populated (Option B: one-time import done).",
        "Executive mapping, area rules, assignment rules coded.",
        "Direct-to-exec + ops-group notifications live.",
        "Status updates via WhatsApp / Telegram commands working.",
        "Urgent / complaint escalation to owner working.",
        "Milestone: a real message flows end-to-end to the right exec with the right tags.",
      ],
    },
    { kind: "heading", text: "Week 4 \u2014 Test, tune, go-live, handover" },
    {
      kind: "bullets",
      items: [
        "Shadow-mode (agent runs alongside current flow) for 2\u20133 days.",
        "Tune prompts and rules against any misrouted messages.",
        "Full cutover to live mode.",
        "Written SOP handed over; 1-hour walkthrough with you and key execs.",
        "Milestone: system is live, owner has end-of-day digest, team is trained.",
      ],
    },
    {
      kind: "callout",
      tone: "info",
      title: "What \u201Cpart-time\u201D actually means",
      text: "Four calendar weeks with focused engineering on our side \u2014 not a 40-hour/week consultant engagement. You get end-of-week check-ins, a shared tracker, and quick responses on blockers. The schedule assumes you / a nominated staff are available for ~2\u20133 short sessions per week.",
    },
    { kind: "heading", text: "Gantt" },
    {
      kind: "code",
      text: "Week 1  |####  Discovery + WABA onboarding\nWeek 2  |      ####  WhatsApp + AI classification\nWeek 3  |            ####  Data + routing + notifications\nWeek 4  |                  ###  Shadow   #  Go-live",
    },
  ],
  visual:
    "Horizontal Gantt-style bar, 4 columns with a milestone checkbox at the end of each week. Keep it clean.",
  speakerNotes:
    "Four calendar weeks, four clean milestones. To set expectations honestly \u2014 this is not a dedicated forty-hour-a-week consultant. It\u2019s focused part-time engineering across four weeks, which is both what makes the price honest and what gives you the natural iteration time on real data. Week one is discovery and the slow bit \u2014 getting your WhatsApp number onto the official API, which is a Meta review, usually three to seven working days; we can\u2019t speed that up, so we start it on day one. Week two we get the AI reading messages and summarising. Week three we plug in your team and routing. Week four we run it in shadow mode next to your current flow for a couple of days so you can verify before we flip the switch. By end of week four, you have a system, your team has a one-page SOP, and I\u2019m on call for support for the next forty-five to sixty days.",
  questions: [
    "Is a 4-week timeline acceptable, or is there a specific date we should hit?",
    "Are there days in the next 4 weeks when you or your team will be unavailable? (festivals, travel)",
    "Is there a specific first chat / customer / scenario you want us to demonstrably get right on go-live?",
  ],
  capture: [
    "Their preferred kickoff date and any hard deadlines.",
    "Unavailability windows (affects the 2\u20133 sessions/week assumption).",
    "The \u201Cdemo scenario\u201D they most want to see working on day 1.",
  ],
  privateNotes: [
    "Biggest real-world risk: WABA onboarding delays. Meta\u2019s verification can sometimes take 2 weeks. If it drags past Week 2, shift the timeline \u2014 don\u2019t fake it.",
    "Don\u2019t commit to a specific go-live date < 3.5 weeks from kickoff. You have zero buffer at 4 weeks.",
    "In your head, Week 4 is Week 4 + a 1-week soft-support buffer before the 45-day clock starts. Don\u2019t announce it, but hold it.",
  ],
};
