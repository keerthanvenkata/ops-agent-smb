import type { Slide } from "../types";

export const slide: Slide = {
  id: "executive-summary",
  number: "01",
  title: "An internal AI agent that takes WhatsApp off your plate",
  subtitle: "Without changing how your customers message you.",
  objective:
    "Open with clarity. In 60 seconds make the owner feel \u201cthis person understands my problem and has a concrete plan.\u201d Set up everything that follows.",
  content: [
    {
      kind: "bullets",
      items: [
        "Today, almost every lead, booking, complaint and reschedule lives in one WhatsApp number \u2014 yours.",
        "Messages get missed; follow-ups slip; you are the bottleneck for every decision.",
        "We propose an internal AI Operations Agent (not a chatbot) that reads each incoming message, identifies the customer, classifies intent, and routes it \u2014 quietly.",
        "Customers notice nothing. You and your team see cleaner, faster, more accountable operations.",
        "4-week build. \u20B930,000\u2013\u20B945,000 one-time. 45\u201360 days support. Runs on its own after.",
      ],
    },
  ],
  visual:
    "Three-column \u201CBefore \u2192 Agent \u2192 After\u201D: chaotic inbox on one phone \u2192 small gear labelled AI Ops Agent \u2192 clean split: Exec A, Exec B, Owner (urgent only).",
  speakerNotes:
    "Before I show you the deck, let me say what I think I heard. You run this business largely from WhatsApp \u2014 you personally take most of the chats. That works, but it means if you are off-phone for two hours, leads get delayed, complaints sit, and even simple things like reschedules wait for you. What I am proposing is a small internal layer \u2014 call it a back-office assistant \u2014 that reads every message as it comes in, figures out who it\u2019s from, what they want, how urgent it is, and delivers it to the right person on your team, with a one-line summary. Your customers never interact with a bot \u2014 they keep chatting with you and your team on WhatsApp as usual. Our job is just to kill the chaos on your side.",
  questions: [
    "On a busy day, roughly how many WhatsApp chats come in?",
    "If you had to guess, how many leads slip through in a week because you were busy?",
    "Which of these is most painful right now \u2014 lost leads, slow response, complaints, or staff coordination?",
  ],
  capture: [
    "The one pain point they light up about \u2014 this becomes the anchor for everything.",
    "Their rough message volume (even a guess).",
    "Whether \u201Cowner off the hot seat\u201D lands, or whether they like being in every chat (tells you about delegation culture).",
  ],
};
