import type { Slide } from "../types";

export const slide: Slide = {
  id: "ai-provider-comparison",
  number: "10",
  title: "Which AI model reads your messages \u2014 honest numbers, not hype",
  subtitle: "Pick a primary and a fallback. Keep it swappable.",
  objective:
    "Defuse the \u201Cwhich AI is best?\u201D conversation with a short, grounded answer.",
  content: [
    { kind: "heading", text: "What we need from the AI" },
    {
      kind: "numbered",
      items: [
        "Read short messages in English, Hindi, Hinglish, Telugu and produce a 1\u20132 line TLDR.",
        "Classify intent (lead / booking / complaint / reschedule / pricing / info / other) and urgency.",
        "Be cheap and fast \u2014 we call it on every inbound message.",
      ],
    },
    { kind: "heading", text: "2026 pricing (per 1M tokens, source: provider pricing pages, April 2026)" },
    {
      kind: "table",
      header: ["Model", "Input $/M", "Output $/M", "Indian-lang", "Speed", "Verdict"],
      rows: [
        [
          "Gemini 2.5 Flash",
          "$0.15\u2013$0.30",
          "$0.60\u2013$3.50",
          "Best-in-class",
          "Fastest",
          "Primary choice",
        ],
        [
          "Claude Haiku 4.5",
          "$1.00",
          "$5.00",
          "Good English; weaker Indic",
          "Fast",
          "Backup for English-heavy",
        ],
        [
          "GPT-4o mini / GPT-5 Mini",
          "$0.15",
          "$0.60",
          "Good Hindi; decent Telugu",
          "Fast",
          "Viable alternative",
        ],
        [
          "Claude Sonnet 4.6",
          "$3.00",
          "$15.00",
          "Strong English",
          "Medium",
          "Overkill & pricier",
        ],
        [
          "Gemini 2.5 Pro",
          "$1.25",
          "$10.00",
          "Strong multilingual",
          "Medium",
          "Only for deeper reasoning",
        ],
      ],
    },
    { kind: "heading", text: "What this means in \u20B9 for your volume" },
    {
      kind: "bullets",
      items: [
        "Assume 100 messages/day = ~3,000/month. Each round-trip ~1,000 tokens.",
        "Gemini 2.5 Flash: ~\u20B950\u2013\u20B9150 / month.",
        "Claude Haiku 4.5: ~\u20B9500 / month.",
        "GPT-4o mini: ~\u20B9100 / month.",
        "Realistic budget to promise: \u20B9500\u2013\u20B91,500 / month (generous headroom for classification + digest).",
      ],
    },
    {
      kind: "callout",
      tone: "good",
      title: "Recommendation",
      text: "Primary Gemini 2.5 Flash (strongest Indian languages, cheapest, fastest). Fallback Claude Haiku 4.5 (reliability). Provider-agnostic abstraction so we can switch in hours.",
    },
  ],
  visual:
    "Three-row card layout: \u201CGemini Flash \u2014 Primary (best for Indian languages, cheapest)\u201D, \u201CClaude Haiku \u2014 Fallback (reliability)\u201D, \u201CGPT mini \u2014 Alternative (if Google has issues)\u201D. Small price bar under each.",
  speakerNotes:
    "I\u2019ve looked at all three major providers at current 2026 pricing. For your use case \u2014 short WhatsApp messages in mixed English, Hindi and Telugu \u2014 Google\u2019s Gemini Flash is both the cheapest and the best at Indian-language understanding. Anthropic\u2019s Claude Haiku is excellent but pricier and weaker on Telugu. OpenAI\u2019s smallest model is comparable in price to Gemini but slightly behind on regional languages. So: Gemini Flash as primary, Claude Haiku as fallback. If any of the three changes pricing or performance, we can swap \u2014 I keep that part modular, which is something a lot of people don\u2019t bother with until they regret it.",
  questions: [
    "Any concerns about using a US-based AI provider? (some businesses care; most don\u2019t)",
    "What\u2019s your rough monthly message volume, so we can size API costs accurately?",
    "Do you want all messages processed in real time, or is \u201Cwithin a minute\u201D acceptable?",
  ],
  capture: [
    "Their volume estimate (feeds the AI cost projection).",
    "Any data-residency preferences.",
    "Whether they already have an OpenAI / Gemini / Anthropic account (rare but yes = we use it).",
  ],
  privateNotes: [
    "Never quote raw USD; always convert to INR at a conservative rate.",
    "Always include 18% GST mentally when stating any Indian SaaS cost.",
    "Prompt caching (Anthropic, OpenAI) can cut costs ~90% for repeated system prompts \u2014 we use this from day one.",
  ],
};
