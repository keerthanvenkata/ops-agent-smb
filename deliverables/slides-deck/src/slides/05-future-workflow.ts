import type { Slide } from "../types";

export const slide: Slide = {
  id: "future-workflow",
  number: "05",
  title: "What happens every time a customer messages you, after we go live",
  subtitle: "A concrete walkthrough \u2014 not abstract architecture.",
  objective:
    "Make the solution tangible. They should finish this slide thinking, \u201Coh, this is obvious and useful.\u201D",
  content: [
    {
      kind: "numbered",
      items: [
        "Customer sends a WhatsApp message (no change for them).",
        "Message hits our agent via Meta Cloud API webhook.",
        "Agent identifies customer by phone; fetches history + assigned executive.",
        "Agent classifies intent (lead / booking / complaint / reschedule / pricing / info) and urgency.",
        "Agent writes a 1\u20132 line TLDR and routes it \u2014 direct to the responsible executive AND into a shared ops group with tags like [LEAD][KONDAPUR][NEW].",
        "Executive replies on WhatsApp as normal. Status auto-updates.",
        "Urgent issues (complaints, escalations) simultaneously ping the owner.",
      ],
    },
    { kind: "heading", text: "Concrete example" },
    {
      kind: "quote",
      text: "Raw (Telugu/Hinglish): \u201CSaar, tomorrow 10am booking ni 2pm ki change cheyyandi plz\u201D \u2192 TLDR: \u201CRamesh K. \u2014 reschedule tomorrow\u2019s booking from 10am to 2pm.\u201D \u2192 Tags: [RESCHEDULE][EXISTING][LOW-URGENCY] \u2192 Routed to Exec Priya + Ops group.",
    },
  ],
  visual:
    "Horizontal 6-box flow: customer \u2192 webhook \u2192 agent (history + intent) \u2192 TLDR + tags \u2192 exec + ops group \u2192 status. Below the flow, a mock card showing the Ramesh example.",
  speakerNotes:
    "Let me walk you through a specific example. Suppose tomorrow morning, Ramesh \u2014 an existing customer \u2014 messages your WhatsApp in Telugu-Hinglish asking to reschedule his 10 a.m. booking to 2 p.m. Today, that message sits in your inbox until you open it, you forward it to Priya who handles this area, Priya may or may not see it, she replies to Ramesh separately, and nobody has a record. With the agent: the message arrives, the agent recognises Ramesh, sees Priya is his usual exec, writes a one-line English summary \u201Creschedule 10\u21922 tomorrow\u201D, tags it, and pings Priya directly \u2014 also drops it into your team\u2019s ops group with the tag. You never had to touch it. That\u2019s a small example. Now multiply it by fifty messages a day.",
  questions: [
    "Does this match how you want things to work, or would you change anything?",
    "For an urgent complaint, would you want real-time ping, or a consolidated alert?",
    "In the end-of-day summary, what do you actually care about \u2014 leads won/lost, pending complaints, tomorrow\u2019s bookings?",
  ],
  capture: [
    "Their definition of \u201Curgent\u201D \u2014 keyword-based (refund, angry, cancel), customer-type-based (VIP), or both.",
    "Preferred channel for urgent escalation \u2014 WhatsApp, call, Telegram, SMS.",
    "Preferred end-of-day digest contents.",
  ],
};
