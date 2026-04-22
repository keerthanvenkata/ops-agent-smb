# Client Brief — Printable One-Pager

A single-page A4-portrait React/TypeScript page summarising the engagement, scoped for handing to the client in the meeting. Optimised for print and PDF export.

## Run locally

```bash
cd deliverables/client-brief
npm install
npm run dev
```

Open http://localhost:5173.

## Print to PDF (recommended)

1. `npm run build && npm run preview` (or just `npm run dev`).
2. Open in Chrome / Edge.
3. `Ctrl+P` → Destination **Save as PDF** → Paper size **A4** → Margins **None** → Background graphics **ON** → Save.

You get a clean 1-page A4 PDF with the TinKern Labs branding, logo, scope, timeline, commercials, support model and business impact.

## Edit

- Text / numbers: `src/App.tsx`
- Styling: `src/styles.css`
- Logo: `src/assets/tinkern-logo.jpg` (drop-in replace)

## What this is

A working-document brief for the discussion, not a final SOW. Final scope is confirmed via a signed one-page SOW before kickoff.
