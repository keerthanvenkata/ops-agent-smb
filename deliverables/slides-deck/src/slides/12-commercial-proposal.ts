import type { Slide } from "../types";

export const slide: Slide = {
  id: "commercial-proposal",
  number: "12",
  title: "Two ways to start \u2014 both honest, neither bloated",
  subtitle: "Lean Build \u20B930k or Better Build \u20B945k. Plus transparent monthly running costs.",
  objective:
    "Present priced options with clear differentiators. Hold the anchor; guide to Option B. Running-cost transparency is a trust-builder, not a red flag.",
  content: [
    { kind: "heading", text: "Option A \u2014 Lean Build \u2014 \u20B930,000 one-time" },
    {
      kind: "bullets",
      items: [
        "Discovery + architecture + WhatsApp API onboarding",
        "AI inbox agent (intent + urgency + TLDR)",
        "Lightweight data layer (customers, execs, messages, statuses)",
        "Routing rules + ops group notifications + owner escalation",
        "Testing + tuning on real data + go-live",
        "Written SOP & handover",
        "45 days reasonable support post go-live",
        "No customer data migration; fresh start.",
      ],
    },
    { kind: "heading", text: "Option B \u2014 Better Build \u2014 \u20B945,000 one-time (recommended)" },
    {
      kind: "paragraph",
      text: "Everything in Option A, plus:",
    },
    {
      kind: "bullets",
      items: [
        "One-time import of your existing customer list (up to ~2,000 records).",
        "Lightweight web admin view (read-only): customers, execs, today\u2019s queue, statuses.",
        "Owner daily-digest \u2014 single WhatsApp/Telegram message each evening (leads, wins/losses, pending complaints, tomorrow\u2019s bookings).",
        "60 days reasonable support post go-live.",
      ],
    },
    { kind: "heading", text: "Running costs (separate, paid by you at actuals)" },
    {
      kind: "bullets",
      items: [
        "WhatsApp API (Meta): ~\u20B950\u2013\u20B9300 / mo (most messages free in 24-hour service window).",
        "AI API (Gemini Flash primary): ~\u20B9500\u2013\u20B91,500 / mo.",
        "Hosting + database: ~\u20B9500\u2013\u20B91,500 / mo.",
        "Typical total: \u20B91,000\u2013\u20B93,000 / mo. Billed directly by providers to your card / account.",
      ],
    },
    { kind: "heading", text: "Payment terms" },
    {
      kind: "bullets",
      items: [
        "50% on kickoff (signed SOW).",
        "40% on go-live.",
        "10% on completion of the support period (45 or 60 days).",
        "Invoice raised by TinKern Labs. GST as applicable.",
      ],
    },
  ],
  visual:
    "Two clean price cards side-by-side. Option B has a \u201CRecommended\u201D ribbon. Below the cards, a strip showing monthly running costs as three dots totalling \u201C~\u20B91\u20133k/month \u2014 paid to vendors, not to us.\u201D",
  speakerNotes:
    "Two options. Option A gets the system live and running for thirty thousand \u2014 that\u2019s the lean build. It works. It just doesn\u2019t import your existing customer list, and there\u2019s no admin view; everything happens via WhatsApp. Option B is forty-five thousand and it adds three things that, honestly, you\u2019ll want within a few weeks of going live: we take your existing customer data and seed the system so there\u2019s continuity from day one, we build a simple web view where you or anyone with the link can see what\u2019s happening, and you get a nice end-of-day digest so you know where the business stands each evening. The running costs \u2014 WhatsApp, AI, hosting \u2014 are paid by you directly to the providers, not routed through me. I want you to see exactly what you\u2019re paying for, where. For a team your size, expect one to three thousand a month, all in.",
  questions: [
    "Does the payment structure (50/40/10) work for you?",
    "Can you raise a GST invoice under your business name, or is this a proprietorship receipt?",
    "Anything in Option B that doesn\u2019t feel worth the extra 15k to you? (force them to defend A)",
    "If we were to add one more thing to Option B, what would be most valuable?",
  ],
  capture: [
    "Their stated preference and the reason.",
    "Any negotiation signal \u2014 \u201Ccan we do 25?\u201D \u201Ccan you include X?\u201D",
    "Their billing / GST entity (needed for invoicing).",
  ],
  privateNotes: [
    "Hold the floor on \u20B930k. Don\u2019t offer \u20B925k as an opener. A ~10% discount (\u20B927k / \u20B940k) is the maximum concession, and only in exchange for something (referral, case study, faster payments).",
    "If they bite on Option B, do NOT immediately expand scope to prove gratitude. Scope creep starts here.",
    "Running costs are explicitly not your revenue \u2014 say it out loud; it builds enormous trust.",
  ],
};
