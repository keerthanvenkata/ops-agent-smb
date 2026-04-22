import type { Slide } from "../types";

export const slide: Slide = {
  id: "status-flow",
  number: "08",
  title: "The three lifecycles we track \u2014 keeping it boring on purpose",
  subtitle: "Any more stages is a CRM. Any fewer gives no visibility.",
  objective:
    "Agree on the minimum set of statuses. Simpler is better.",
  content: [
    { kind: "heading", text: "Lead lifecycle" },
    { kind: "paragraph", text: "new \u2192 contacted \u2192 quoted \u2192 won / lost" },
    { kind: "heading", text: "Service / booking lifecycle" },
    {
      kind: "paragraph",
      text: "scheduled \u2192 in-progress \u2192 completed  (optional: rescheduled, cancelled)",
    },
    { kind: "heading", text: "Complaint lifecycle" },
    {
      kind: "paragraph",
      text: "open \u2192 pending \u2192 resolved  (side-branch: escalated when flagged to owner)",
    },
    { kind: "heading", text: "How statuses move" },
    {
      kind: "bullets",
      items: [
        "Agent sets the initial status based on intent classification.",
        "Exec updates status via simple WhatsApp keywords or a one-click link in the ops-group message (e.g., reply \u201Cstatus quoted\u201D).",
        "Owner sees everything in the end-of-day digest.",
      ],
    },
  ],
  visual:
    "Three horizontal status pipelines stacked. Pills in a row connected by arrows. Lead = blue, Service = green, Complaint = red/orange with an \u201Cescalated\u201D branch.",
  speakerNotes:
    "This is where most software projects over-engineer themselves into the ground. A 20-stage pipeline looks impressive on a screenshot and is useless in real life. I\u2019m suggesting four stages for leads, three for bookings, and three for complaints. That\u2019s it. Your exec will update status by just typing \u201Cstatus won\u201D or \u201Cstatus resolved\u201D in WhatsApp \u2014 no login, no dashboard. If in six months you want more nuance \u2014 \u2018contacted but no response\u2019, \u2018quoted but waiting on approval\u2019 \u2014 we can add it. Let\u2019s not start there.",
  questions: [
    "Are there any statuses we\u2019ve missed that matter to you operationally?",
    "How do you know today if a customer was actually followed up after quoting?",
    "For complaints \u2014 is there a time-based SLA you want (e.g., escalate to you if open > 2 hours)?",
    "Do you want to see who updated a status and when? (for accountability)",
  ],
  capture: [
    "Any extra status they insist on adding (note it, but challenge if not operationally critical).",
    "SLA preferences (e.g., auto-escalate complaints after X hours).",
    "Whether they want the owner to see every status change or just the daily digest.",
  ],
};
