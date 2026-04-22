# Deliverables — Hyderabad Cleaning Services Client

**Engagement:** Internal AI Operations Agent for WhatsApp
**Prepared by:** Keerthan Venkata, TinKern Labs
**Date:** 22 April 2026

This folder contains everything you need for the client meeting.

## Contents

```
deliverables/
├── brand/
│   └── tinkern-logo.jpg               ← TinKern Labs logo (used in the client brief)
│
├── client-brief/                      ← THE ONE-PAGE PRINTABLE BRIEF (React + TypeScript)
│   ├── src/App.tsx                    ← the content — edit numbers / copy here
│   ├── src/styles.css                 ← print / A4-optimised styling
│   └── README.md                      ← how to run, how to print to PDF
│
├── slides/                            ← 15 slides, one Markdown file per slide
│   ├── 00-README.md                   ← slide index
│   ├── 01-executive-summary.md
│   ├── 02-current-workflow-discovery.md
│   ├── 03-existing-systems-discovery.md
│   ├── 04-pain-and-bottlenecks.md
│   ├── 05-future-workflow.md
│   ├── 06-customer-data-strategy.md
│   ├── 07-executive-assignment-logic.md
│   ├── 08-status-flow.md
│   ├── 09-whatsapp-integration-options.md
│   ├── 09b-routing-pattern.md         ← shared inbox vs group+tags (key call)
│   ├── 10-ai-provider-comparison.md
│   ├── 11-hosting-infra-comparison.md
│   ├── 12-commercial-proposal.md
│   ├── 13-timeline.md
│   └── 14-client-decisions-required.md
│
└── playbook/                          ← INTERNAL — not for the client
    ├── 00-README.md                   ← playbook index
    ├── 01-meeting-checklist.md
    ├── 02-inspection-guide.md
    ├── 03-red-flags-and-gaps.md
    ├── 04-pricing-analysis.md
    ├── 05-negotiation-strategy.md
    ├── 06-scope-exclusions.md
    └── 07-recommended-stack.md
```

## Quick start (next 30 minutes)

1. **See the printable brief:**
   ```bash
   cd deliverables/client-brief
   npm install
   npm run dev
   ```
   Open http://localhost:5173. Print to PDF via `Ctrl+P` → A4 → Margins **None** → Background graphics **ON**.

2. **Read the playbook:**
   Start with `playbook/00-README.md`. Each file is short.

3. **Turn the slides into a deck:**
   Each `slides/NN-*.md` file has a **Slide Title**, **Key Points**, **Visual**, **Speaker Notes**, **Questions to Ask**, **What to Capture**. Paste into PowerPoint / Google Slides / Keynote. Or render as-is in a Markdown presentation tool (Marp, Slidev, Reveal.js).

## What changed from your initial request

| Your ask | What we did |
|---|---|
| 10–12 slides | 15 slides (added 09b: routing-pattern shared-inbox vs group-with-tags per your feedback). |
| 1-page client report | Built as React/TypeScript printable webpage in `client-brief/` — print to PDF or screenshot. A4-portrait, TinKern branded. |
| TinKern Labs + Keerthan branding | Logo moved from `monochrome (1).jpg` to `deliverables/brand/tinkern-logo.jpg`; embedded in the client brief. |
| Part-time 4-week effort pricing | Playbook 04 reframes ₹30k/₹45k around part-time reality + long-term revenue. |
| "Pay only when something breaks / scales / new features" | Support model explicitly re-scoped in the brief and Slide 12. |
| Shared inbox vs group+tags question | Dedicated slide (09b); strong recommendation for group+tags for this client's size/shape. |
| Research BSPs, Meta API, AI providers | All April-2026 numbers cross-checked; outdated per-conversation pricing in reference reports flagged and corrected. |

## Cross-check notes on the ChatGPT deep-research reports you attached

- **Meta pricing in those reports is outdated** (quoted per-conversation with "1,000 free service conversations/month"). Meta switched to **per-message** pricing on **July 1, 2025**. 2026 India rates used throughout this deliverable: Marketing **₹0.8631**, Utility/Auth **~₹0.115**, Service messages **free with no cap** inside the 24-hour customer-service window. Source: Meta's developer platform pricing page (last updated March 30, 2026).
- **BSP pricing in those reports** is roughly in the right ballpark but stale on specifics. Current numbers used: AiSensy ₹1,500/mo (Basic) / Free Forever; Interakt Growth ₹2,499/mo; WATI Growth ~₹2,499/mo (3 agents); 360dialog ~₹3,900/mo.
- **AI pricing** in those reports matched our cross-check (Gemini Flash cheapest; Claude Haiku mid; GPT-4o mini similar to Gemini; Claude Sonnet / GPT-5 too expensive for this use case).
- **Industry-cost context** (₹3–7 lakh for a typical SMB MVP quote in India) is accurate and used in `playbook/04-pricing-analysis.md` to anchor why ₹30k–₹45k is strategically lean, not underpriced.

## Before the meeting

1. Fill in your real contact details in `client-brief/src/App.tsx` (the `BRAND` const — email and phone are placeholders).
2. Build the PDF of the brief and bring 2 printed copies.
3. Skim `playbook/01-meeting-checklist.md` and `playbook/02-inspection-guide.md`.
4. Have `playbook/05-negotiation-strategy.md` fresh in your head.
