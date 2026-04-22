import type { Slide } from "../types";

export const slide: Slide = {
  id: "current-workflow-discovery",
  number: "02",
  title: "How WhatsApp actually works in your business today",
  subtitle: "Discovery \u2014 this slide is mostly for asking, not telling.",
  objective:
    "Understand their real operational reality before prescribing anything. Do not skip or rush it \u2014 everything downstream depends on the answers.",
  content: [
    {
      kind: "bullets",
      items: [
        "Who monitors the WhatsApp number(s), on what device(s), during what hours?",
        "How many messages come in per day? Peak days? Off hours?",
        "How are jobs assigned to executives today \u2014 by area, by service, by whoever picks up first?",
        "How are reschedules, delays and complaints handled today?",
        "Where do leads go if the owner is unavailable?",
      ],
    },
  ],
  visual:
    "Blank mini-flowchart with 4 unfilled boxes and dotted arrows, titled \u201CYour current message flow (to fill in together)\u201D. Draw it live with the client if possible.",
  speakerNotes:
    "Before I tell you what I think you need, I want to understand what you actually do today. I\u2019ll ask a few boring questions \u2014 please answer plainly, even if something sounds basic. There are no wrong answers, only incorrect assumptions on my side. Once we have this picture, the rest of the deck either becomes obvious or becomes irrelevant. Let\u2019s draw your current flow together.",
  questions: [
    "Is there one WhatsApp number, or multiple? Whose phone(s) are they on?",
    "Who replies to customers \u2014 only you, or do staff have access?",
    "On a typical weekday vs a weekend, roughly how many messages come in?",
    "When a new booking request comes in, what happens \u2014 literally step by step?",
    "When a customer complains, what happens \u2014 literally step by step?",
    "When a customer wants to reschedule, who decides and how do they inform the exec?",
    "If you are in a meeting for 2 hours, what happens to the inbound messages?",
    "Have you lost a customer in the last month because of a response delay? What happened?",
  ],
  capture: [
    "Number(s) of WhatsApp accounts in use, and device count.",
    "Names/roles of anyone else who handles messages (even informally via forwarding).",
    "Message volume bands: low / medium / high days.",
    "The 2\u20133 workflows that break most often.",
    "One real story of a missed lead or complaint \u2014 keep this as ammunition for the ROI argument later.",
  ],
};
