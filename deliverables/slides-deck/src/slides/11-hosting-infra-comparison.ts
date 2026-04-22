import type { Slide } from "../types";

export const slide: Slide = {
  id: "hosting-infra",
  number: "11",
  title: "Where the agent actually runs \u2014 small footprint, low cost",
  subtitle: "Inexpensive, reliable, all accounts in your name.",
  objective:
    "Tell them where the service lives, reassure on cost and reliability, and get ownership clarity (whose account, whose card).",
  content: [
    { kind: "heading", text: "What we need to host" },
    {
      kind: "numbered",
      items: [
        "A tiny Node/Python web service (webhook + agent brain).",
        "A small PostgreSQL database (customers, execs, messages, statuses).",
        "Optional: a very thin dashboard (only on Option B).",
      ],
    },
    { kind: "heading", text: "2026 options (monthly INR)" },
    {
      kind: "table",
      header: ["Provider", "Baseline plan", "Good for", "INR/mo"],
      rows: [
        ["Railway", "Hobby $5 + usage", "One-click deploy, very low ops", "~\u20B9500\u2013\u20B91,200"],
        ["Render", "Starter $7 fixed", "Predictable pricing, multi-region", "~\u20B9600\u2013\u20B91,500"],
        ["DigitalOcean Droplet", "Basic VM $4\u2013$6", "Full control, SSH, Docker", "~\u20B9350\u2013\u20B91,000"],
        ["Supabase (Postgres + auth)", "Free / Pro $25", "Best DB-as-a-service for small teams", "\u20B90 / \u20B92,100"],
        ["Hetzner VPS (CX)", "\u20AC4\u2013\u20AC6", "Cheapest serious VPS, EU-hosted", "~\u20B9400\u2013\u20B9650"],
      ],
    },
    { kind: "heading", text: "Recommended stack for you" },
    {
      kind: "bullets",
      items: [
        "Service hosting: Railway Hobby (~\u20B9500\u2013\u20B9800/mo). One-click deploy, logs built-in.",
        "Database: Supabase free tier (Postgres, auth, simple admin view). Upgrade to Pro only if volume outgrows free ceiling.",
        "Total projected monthly infra: \u20B9500\u2013\u20B91,500 / month.",
        "All accounts are created in your name / business email. You own everything and can switch vendors later.",
      ],
    },
    { kind: "heading", text: "Stack diagram" },
    {
      kind: "code",
      text: "+----------------------------+\n|  Railway (web + cron)      |   <- agent brain\n+----------------------------+\n|  Supabase (Postgres)       |   <- customer / exec / message data\n+----------------------------+\n|  Meta Cloud API            |   <- WhatsApp channel\n+----------------------------+\n          |\n   Gemini / Claude API         <- AI brain",
    },
  ],
  visual:
    "3-layer stack diagram (Railway \u2192 Supabase \u2192 Meta Cloud API) with Gemini/Claude branching off the agent. Clean. Under \u20B91,500/month total infra.",
  speakerNotes:
    "Hosting for a service this size is effectively a rounding error. We\u2019ll run the agent on Railway \u2014 easiest path, you push code and it runs, no server admin. We\u2019ll use Supabase for the database, which has a generous free tier. All told, running the whole system costs maybe one thousand to fifteen hundred rupees a month, plus the Meta and AI costs we discussed. We create every account in your business name \u2014 so if one day you want to move to a different vendor, or bring it in-house, you have full control. Nothing is locked to us.",
  questions: [
    "Do you have a business email address / domain we should use for these accounts?",
    "Do you have a credit card / corporate card to put on file? (Or do you want me to front them and invoice monthly at actuals + 10%?)",
    "Any compliance, data-residency or industry-specific hosting preferences?",
  ],
  capture: [
    "Preferred business email for account creation.",
    "Payment arrangement for running costs (their card vs. pass-through billing).",
    "Any regulatory constraints (unlikely for cleaning services, but ask).",
  ],
  privateNotes: [
    "Common pattern: you hold Railway/Supabase accounts during build; transfer ownership to them at go-live. Cleaner than juggling half-set-up accounts mid-build.",
    "If they resist vendor costs entirely, a DigitalOcean droplet with self-hosted Postgres at ~\u20B9400\u2013\u20B9600/mo is possible \u2014 but ops burden is real. Mention only if pushed.",
  ],
};
