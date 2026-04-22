# Slides Deck — WhatsApp Ops Agent

14-slide client meeting deck for the WhatsApp Operations Agent engagement.

**Prepared by:** Keerthan Venkata, TinKern Labs
**Prepared for:** Ashish — Cleaning Services Business, Hyderabad
**Date:** 22 April 2026

## Run

```bash
npm install
npm run dev       # http://localhost:5174
npm run build
npm run preview
```

## Keyboard shortcuts

| Key | Action |
|-----|--------|
| `→` / `Space` / `PgDn` | Next slide |
| `←` / `PgUp` | Previous slide |
| `Home` / `End` | Jump to first / last |
| `P` | Toggle presenter notes (speaker notes, questions, capture, private) |
| `S` | Toggle slide list sidebar |

## Structure

Every slide is its own TypeScript module under `src/slides/` with a typed `Slide` shape:

- `title`, `subtitle`, `objective`
- `content` — typed sections (heading / paragraph / bullets / numbered / table / code / callout / quote)
- `visual` — a description of the diagram / mock to put on the slide
- `speakerNotes`, `questions`, `capture`
- `privateNotes` — consultant-only, shown only in presenter mode and marked distinctly

Slides are indexed in `src/slides/index.ts` in the order they appear. To add or reorder, edit that file.

## Presenter mode

Presenter mode is **on by default**. The right-hand rail shows the objective, visual description, speaker notes, questions to ask, what to capture, and any private notes. For a clean, client-facing view (e.g. screen-sharing during the meeting), press `P` to hide the rail.

## Print

`Ctrl/Cmd + P` from the browser. Each slide is forced to a page break; the rail, toolbar, and footer are hidden automatically. Set page size A4 landscape for best fit.
