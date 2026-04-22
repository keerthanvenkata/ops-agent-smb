import type { Slide } from "../types";

export const slide: Slide = {
  id: "routing-pattern",
  number: "09b",
  title: "Two ways to deliver messages to your team \u2014 which one actually fits you",
  subtitle: "Shared Team Inbox vs Direct-to-Exec + Shared Ops Group with Tags.",
  objective:
    "Small-but-critical architectural choice. The same AI agent serves either pattern. Picking the right one saves cost, training, and an unused dashboard.",
  content: [
    { kind: "heading", text: "Pattern 1 \u2014 Shared Team Inbox (web dashboard)" },
    {
      kind: "bullets",
      items: [
        "Every staff member logs into a web app (from BSP or custom).",
        "They see a unified queue; assign, claim, reply, add internal notes, apply tags.",
        "Great when you have \u22655 dedicated customer-service agents working full-time at a desk.",
        "Costs more (BSP \u20B91,500\u2013\u20B94,000/mo, or we build a dashboard in scope).",
        "Training overhead \u2014 cleaners and field execs are on the move on phones, not at a desk.",
      ],
    },
    {
      kind: "heading",
      text: "Pattern 2 \u2014 Direct-to-Exec + Shared Ops Group with Tags (recommended)",
    },
    {
      kind: "bullets",
      items: [
        "AI agent does the thinking; delivery is via WhatsApp / Telegram the team already uses.",
        "Each incoming customer message produces two outbound notifications: (1) direct to the responsible exec with raw + TLDR + suggested next action; (2) broadcast to a shared internal ops group with the same TLDR plus tags (intent, area, status, @assigned_exec).",
        "Urgent / complaint messages also get a direct ping to the owner in real time.",
        "Everyone sees everything in the group \u2014 full transparency, zero new UI.",
        "Cost: zero additional BSP seats. Training: none \u2014 your team already lives in WhatsApp / Telegram groups.",
      ],
    },
    { kind: "heading", text: "Side-by-side" },
    {
      kind: "table",
      header: ["Dimension", "Shared Inbox", "Group + Tags"],
      rows: [
        ["Team tool", "New web dashboard", "WhatsApp / Telegram (existing)"],
        ["Training needed", "Medium\u2013High", "Near zero"],
        ["Cost (monthly)", "\u20B91,500\u2013\u20B94,000", "Negligible"],
        ["Who sees what", "Role-based; can be siloed", "Everyone sees everything tagged"],
        ["Ownership of chat", "Explicit claim/assign", "Implicit via @assigned_exec tag"],
        ["Accountability", "Very high (logged)", "Good (group-visible)"],
        ["Offline / field-friendly", "Poor", "Excellent"],
        ["Works for 2\u20138 person team", "Overkill", "Ideal"],
        ["Works for 20+ person team", "Preferred", "Gets noisy"],
      ],
    },
  ],
  visual:
    "Two mock screens side-by-side: left = web inbox UI with queue + tags + agent avatars; right = WhatsApp group showing [LEAD][GACHIBOWLI][NEW] @priya \u2014 Ramesh asking for 3BHK deep-clean quote. Caption: \u201CSame AI agent. Same data. Only the delivery surface changes.\u201D",
  speakerNotes:
    "Most vendors will push you toward a shared team inbox \u2014 a web dashboard where everyone logs in and manages chats. That works well for a twenty-person customer support team sitting at desks. For a field-heavy team like yours \u2014 cleaners, supervisors, some office \u2014 it\u2019s usually overkill. They are on phones, on the move. They won\u2019t remember to log into a dashboard every morning. What I\u2019m recommending instead is pattern two: our agent does the intelligence \u2014 reading, summarising, classifying, routing \u2014 but the delivery stays in WhatsApp or Telegram. Two messages go out: one direct to the responsible exec, one into a shared ops group with tags so everyone has visibility. You get accountability, transparency, and zero training. If you ever grow past eight or ten execs, we\u2019ll revisit this \u2014 but that\u2019s a six-month-from-now problem.",
  questions: [
    "Do your execs already share a WhatsApp or Telegram group for internal coordination?",
    "Would they prefer a dashboard, or would that feel like extra work they won\u2019t do?",
    "For escalations to you specifically \u2014 direct ping, or group with an @owner tag?",
    "Is there ever a reason an exec should NOT see another exec\u2019s chats? (privacy / territorial)",
  ],
  capture: [
    "Existence (or not) of internal coordination group \u2014 and where.",
    "Preferred escalation channel \u2014 WhatsApp DM, call, SMS.",
    "Any confidentiality boundaries (e.g., financial chats only to owner).",
    "Their gut reaction: dashboard-curious or dashboard-allergic.",
  ],
  privateNotes: [
    "Hybrid is possible: build Pattern 2 on day one (faster, cheaper); add a minimal read-only dashboard later. Lets you deliver on \u20B930k/\u20B945k without cutting value.",
    "Telegram vs WhatsApp for the internal ops group: Telegram bots are much easier to integrate and free-forever; WhatsApp groups require the Cloud API and the group number must be on WABA. Default to Telegram for internal ops unless client insists.",
  ],
};
