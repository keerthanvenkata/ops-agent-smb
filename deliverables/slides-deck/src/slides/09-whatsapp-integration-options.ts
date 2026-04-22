import type { Slide } from "../types";

export const slide: Slide = {
  id: "whatsapp-integration-options",
  number: "09",
  title: "How we connect to WhatsApp \u2014 three paths, one honest recommendation",
  subtitle: "Business App vs Meta Cloud API vs BSPs. Real 2026 India pricing.",
  objective:
    "Shut down the \u201Cjust use the free app\u201D hope \u2014 it does not work here. Steer toward Cloud API direct unless they specifically want a BSP inbox.",
  content: [
    { kind: "heading", text: "A. WhatsApp Business App (the free green app)" },
    {
      kind: "callout",
      tone: "warn",
      title: "Not viable for this solution",
      text: "Built for one device, one user. No official API. Any scraper-based solution is against WhatsApp\u2019s terms and will eventually get your number banned. Mention only to close the door.",
    },
    { kind: "heading", text: "B. Meta WhatsApp Cloud API (direct)" },
    {
      kind: "bullets",
      items: [
        "Meta\u2019s official API. We build the inbox agent against it directly.",
        "No subscription to a middleman. You pay Meta per-message rates only.",
        "India per-message rates (Jan 2026): Marketing templates \u20B90.8631 per delivered message; Utility / Authentication ~\u20B90.115; Service messages (customer-initiated, within 24h) FREE.",
        "For your business, 90%+ of messages fall in the free service window. Realistic monthly Meta spend: \u20B950\u2013\u20B9300.",
        "Requires GST, PAN, Meta Business verification. We handle it.",
      ],
    },
    { kind: "heading", text: "C. BSP (Business Solution Provider)" },
    {
      kind: "paragraph",
      text: "Third-party platforms (AiSensy, WATI, Interakt, Gupshup, 360dialog) wrap the Cloud API in a prettier UI and a pre-built team inbox. You pay a monthly subscription plus Meta\u2019s per-message rates (often with a small BSP markup).",
    },
    {
      kind: "table",
      header: ["BSP", "Entry plan", "Per-msg markup", "Notable"],
      rows: [
        [
          "AiSensy",
          "\u20B91,500/mo (or ~\u20B91,350/mo annual). Free-Forever plan for testing.",
          "~20% (Mktg ~\u20B91.09)",
          "IST phone support, unlimited agents, free green-tick help",
        ],
        [
          "Interakt",
          "\u20B92,499/mo (Growth). Starter \u20B9999/mo is IG-only.",
          "30\u201340% on utility",
          "Strong Shopify integration",
        ],
        [
          "WATI",
          "~\u20B92,499\u2013\u20B95,999/mo. Growth capped at 3 agents.",
          "~20% on utility",
          "Best UI; agent seats cost extra",
        ],
        [
          "360dialog",
          "~\u20B93,900/mo",
          "Minimal markup",
          "Compliance-first, no-markup reputation",
        ],
      ],
      caption: "Indicative India pricing, April 2026.",
    },
  ],
  visual:
    "Two-column comparison on the slide: \u201CApp \u2014 not viable\u201D, \u201CCloud API \u2014 recommended for lean build\u201D, \u201CBSP \u2014 only if you want a ready-made dashboard.\u201D Include a small INR price band per column.",
  speakerNotes:
    "There are three doors. Door one \u2014 the WhatsApp Business app on your phone \u2014 is a dead end for what we\u2019re building. It cannot be integrated with, full stop. Door two is Meta\u2019s official Cloud API. We plug our agent directly into it. You pay Meta\u2019s per-message rates, which for your business will likely come to fifty to three hundred rupees a month, because the vast majority of your conversations are customer-initiated replies inside the twenty-four-hour free window. Door three is a BSP \u2014 AiSensy, WATI, Interakt and a few others. They sit on top of the Cloud API, charge you fifteen hundred to four thousand rupees a month, and give you a ready-made team-inbox web dashboard. My default recommendation for a team your size is Door Two \u2014 direct Cloud API \u2014 because it\u2019s cheaper, officially supported, and the \u2018team inbox\u2019 part we design with you in the next slide without needing a dashboard at all. If you later decide you want the full BSP dashboard experience, we can migrate in a day.",
  questions: [
    "Have you been pitched by AiSensy, WATI or Interakt before? What did you think?",
    "Are you already paying for any of them?",
    "Do you prefer paying a predictable monthly subscription, or pay-per-message for lower cost but more variable?",
    "How comfortable is your team with a web dashboard vs. just using WhatsApp on their phones?",
  ],
  capture: [
    "Any existing BSP contract / commitment.",
    "Their preference on fixed vs variable monthly spend.",
    "Whether they want a \u201Cdashboard\u201D as a deliverable or are happy with WhatsApp-native routing.",
  ],
  privateNotes: [
    "Meta moved to per-message pricing on July 1, 2025. Any pricing you see quoted as \u201Cper conversation\u201D with \u201C1,000 free service conversations/month\u201D is outdated.",
    "Some BSP comparisons still quote the old model; cross-check before repeating their numbers.",
    "Meta Verified badge on Business App \u2260 Official Business Account green tick via API. Don\u2019t conflate them.",
  ],
};
