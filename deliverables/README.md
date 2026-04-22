# Deliverables — Ashish, Cleaning Services Business (Hyderabad)

**Engagement:** Internal AI Operations Agent for WhatsApp
**Prepared by:** Keerthan Venkata, TinKern Labs · Hyderabad
**Contact:** keerthan@tinkernlabs.com · +91 63091 17006
**Date:** 22 April 2026

This folder contains everything you need for the client meeting.

## Contents

```
deliverables/
├── brand/
│   └── tinkern-logo.jpg               TinKern Labs logo (used in brief + deck)
│
├── client-brief/                      One-page printable engagement brief (React + TS + Vite)
│   ├── src/App.tsx                    content — edit numbers / copy here
│   ├── src/styles.css                 A4-portrait print styling
│   └── README.md                      how to run, how to print to PDF
│
├── slides-deck/                       15-slide client meeting deck (React + TS + Vite)
│   ├── src/types.ts                   Slide / Section shape
│   ├── src/slides/NN-*.ts             one TypeScript module per slide
│   ├── src/slides/index.ts            ordered list of slides
│   ├── src/components/                SlideView, SectionView
│   ├── src/App.tsx                    keyboard-nav presenter
│   └── README.md                      how to run, shortcuts, print
│
└── playbook/                          INTERNAL — not for the client
    ├── 00-README.md                   playbook index
    ├── 01-meeting-checklist.md
    ├── 02-inspection-guide.md
    ├── 03-red-flags-and-gaps.md
    ├── 04-pricing-analysis.md
    ├── 05-negotiation-strategy.md
    ├── 06-scope-exclusions.md
    └── 07-recommended-stack.md
```

## Quick start (next 30 minutes)

**1. Run the printable client brief:**

```bash
cd deliverables/client-brief
npm install
npm run dev       # http://localhost:5173
```

Print to PDF via `Ctrl/Cmd + P` → A4 → Margins **None** → Background graphics **ON**.

**2. Run the presenter deck:**

```bash
cd deliverables/slides-deck
npm install
npm run dev       # http://localhost:5174
```

Keyboard: `→`/`←` or `Space` to navigate · `P` toggles presenter notes · `S` toggles the slide list.

**3. Read the playbook (internal-only):**

Start with `playbook/00-README.md`. Each file is short and purpose-built.

## What's in each slide

Every slide carries **title**, **subtitle**, **objective**, **content** (typed sections — bullets, tables, code, callouts, quotes), **visual** description, **speaker notes**, **questions to ask**, **what to capture**, and optional consultant-only **private notes**. Presenter mode shows everything; public mode shows only the client-facing content.

## What changed from the original ask

| Your ask | What we did |
|---|---|
| 10–12 slides | 15 slides (added 09b: routing-pattern shared-inbox vs group-with-tags per your feedback). |
| 1-page client report | Built as React/TypeScript printable webpage in `client-brief/` — A4-portrait, TinKern branded. |
| TinKern Labs + Keerthan branding | Logo moved from `monochrome (1).jpg` to `deliverables/brand/tinkern-logo.jpg`; embedded in brief + deck. |
| Part-time 4-week effort pricing | Playbook 04 reframes ₹30k/₹45k around part-time calendar + long-term revenue. |
| "Pay only when something breaks / scales / new features" | Support model explicitly re-scoped in the brief and Slide 12. |
| Shared inbox vs group+tags question | Dedicated slide (09b); strong recommendation for group+tags for this client's size/shape. |
| Research BSPs, Meta API, AI providers | All April-2026 numbers cross-checked; outdated per-conversation pricing in reference reports flagged and corrected. |
| Slides authored as markdown | Converted to typed TS modules under `slides-deck/src/slides/`. Markdown removed once the TS deck was verified. |

## Cross-check notes on the ChatGPT deep-research reports

- **Meta pricing in those reports is outdated** (quoted per-conversation with "1,000 free service conversations/month"). Meta switched to **per-message** pricing on **July 1, 2025**. 2026 India rates used throughout: Marketing **₹0.8631**, Utility/Auth **~₹0.115**, Service messages **free with no cap** inside the 24-hour customer-service window. Source: Meta's developer pricing page (last updated March 30, 2026).
- **BSP pricing in those reports** is roughly in the right ballpark but stale on specifics. Current numbers used: AiSensy ₹1,500/mo (Basic) / Free Forever; Interakt Growth ₹2,499/mo; WATI Growth ~₹2,499/mo (3 agents); 360dialog ~₹3,900/mo.
- **AI pricing** matched our cross-check (Gemini Flash cheapest; Claude Haiku mid; GPT-4o mini similar to Gemini; Claude Sonnet / GPT-5 too expensive for this use case).
- **Industry-cost context** (₹3–7 lakh for a typical SMB MVP quote in India) is accurate and used in `playbook/04-pricing-analysis.md` to anchor why ₹30k–₹45k is strategically lean, not underpriced.

## Before the meeting

1. Build the PDF of the brief and bring 2 printed copies.
2. Open the slides deck on your laptop in presenter mode (`P` to toggle).
3. Skim `playbook/01-meeting-checklist.md` and `playbook/02-inspection-guide.md`.
4. Have `playbook/05-negotiation-strategy.md` fresh in your head.
