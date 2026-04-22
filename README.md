# ops-agent-smb

Source of truth for **WhatsApp Operations Agent** — an internal AI ops layer for small businesses that still run day-to-day on WhatsApp.

This repo holds both the **go-to-market materials** (pitch, brief, slides, playbook) and, over time, the **product itself** (services, data layer, dashboards, infra) — in one place so nothing drifts.

- Consultant / maintainer: **Keerthan Venkata · TinKern Labs**, Hyderabad
- Repo: `github.com/keerthanvenkata/ops-agent-smb`
- First engagement: **Ashish — Cleaning Services Business, Hyderabad**

---

## Repository layout

This is intended to grow into a small monorepo. Current and planned top-level folders:

```
ops-agent-smb/
├── deliverables/          Client-facing materials (pitch, brief, slides, playbook)
│   ├── brand/             TinKern Labs logo assets
│   ├── client-brief/      Printable one-page engagement brief (React + TS + Vite)
│   ├── slides-deck/       15-slide meeting deck with presenter notes (React + TS + Vite)
│   └── playbook/          Meeting checklist, pricing, negotiation, stack
│
├── services/              [planned]  Backend services — webhook, AI agent, router
│   └── ops-agent/         [planned]  WhatsApp ingress + intent/urgency + routing
│
├── apps/                  [planned]  Frontends — ops dashboard, admin
│
├── packages/              [planned]  Shared TS libs (types, prompts, utils)
│
├── infra/                 [planned]  Dockerfiles, compose, deploy scripts
│
└── docs/                  [planned]  Architecture notes, ADRs, SOPs
```

Client materials stay in `deliverables/`. The product code will land under `services/`, `apps/`, `packages/`, `infra/` as we build it. Everything is containerized from the start — local dev via `docker compose`, production via single-host VPS or a managed platform (Railway / Hetzner).

---

## Deliverables — quick start

### Client brief (one-pager, printable)

```bash
cd deliverables/client-brief
npm install
npm run dev       # http://localhost:5173
npm run build     # static output in dist/
```

Use the browser's **Print → Save as PDF** to produce the client-ready PDF.

### Slides deck (presenter view)

```bash
cd deliverables/slides-deck
npm install
npm run dev       # keyboard-nav deck at http://localhost:5174
```

### Playbook (internal only)

Markdown in `deliverables/playbook/` — read directly, not for sharing.

---

## Roadmap

1. **Sell** — use `deliverables/` to close the Ashish engagement.
2. **Build v1** — `services/ops-agent` (Node.js + Fastify + Postgres + Meta Cloud API + Gemini 2.5 Flash), `apps/ops-dashboard` (React).
3. **Containerize** — `infra/docker` with compose for local, single-image per service for deploy.
4. **Productize** — generalize past the first client; clean multi-tenant data model; self-serve onboarding.

---

## Conventions

- **Commits:** Conventional Commits (`feat(scope): ...`, `fix:`, `docs:`, `chore:`, `refactor:`). Keep them atomic — one concern per commit.
- **Branches:** `main` is always shippable. Feature work on short-lived branches, squash-merge via PR.
- **Secrets:** never commit. `.env.example` files at each service root; real `.env` stays local.
- **Node:** target Node 20+ LTS for all JS/TS packages.

---

## License

Proprietary. © TinKern Labs. Not for redistribution without written consent.
