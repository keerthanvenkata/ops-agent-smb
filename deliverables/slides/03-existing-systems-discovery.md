# Slide 03 — Existing Systems (Discovery)

## Slide Title
What tools you already use — so we don't rebuild what exists

## Objective
Find out whether they are already using WhatsApp Business App, linked devices, a BSP, a CRM, a spreadsheet — anything. Your entire integration approach flips on these answers.

## Key Points (on slide)
- WhatsApp Business **app** vs WhatsApp Business **API** — very different under the hood.
- Linked devices (WhatsApp Web / multi-device) — how many and who?
- Any shared inbox / BSP (AiSensy, WATI, Interakt, Gupshup, 360dialog)?
- Any CRM, field-service or scheduling tool (Zoho, Jobber-alike, Excel, Google Sheets)?
- Where do customer names and phone numbers actually live today?

## Visual
A 2×2 grid of screenshots / icons:
- WhatsApp Business app (mobile)
- Linked devices (web / desktop)
- BSP dashboard (generic inbox look)
- Spreadsheet / CRM (generic)
With a "?" overlay on each — the client fills in which they use.

## Speaker Notes
"There are two very different worlds here. The WhatsApp *app* on your phone — which is the free green-icon app — is built for one user, one device. It cannot be read by software, it cannot be multi-user properly, and it has no real API. The WhatsApp *Business API* — also called WhatsApp Cloud API — is a different channel run by Meta. You move your number onto it, and then your team (or in our case, an AI agent) can read and reply to messages programmatically. Most small businesses start on the app, hit a wall, and move to the API. I want to know exactly where you are on that journey — and whether you already pay any third-party like AiSensy or WATI. If you do, we may keep it; if not, we will recommend the cheapest sensible path."

## Questions to Ask
1. Show me your WhatsApp on your phone — is it the green app, or the blue-tick business version?
2. How many phones/laptops have this WhatsApp logged in (linked devices)?
3. Do you currently pay anyone monthly for WhatsApp tools? (Look for ₹999–₹3,000/month charges.)
4. When a customer books a job, where does their detail get written — phone book, notebook, Excel, app?
5. Is there any software where your staff sees today's job list?
6. Who owns the Facebook/Meta Business account for this number, if any?

## What to Capture
- Exact app/tool name, plan, and billing amount.
- Number of linked devices and who has them.
- Who the "Meta Business admin" is (or who will be if none exists).
- Whether a GST certificate and PAN exist for the business (required for WhatsApp API).
- The data source that will become our "customer list" (phone book export, spreadsheet, nothing).

## Recommendation logic (for your head)
- **Only WhatsApp Business app** → must move to Cloud API (we help).
- **Linked devices only** → still only one "seat"; must move to Cloud API for multi-user or AI.
- **Already on a BSP** → keep it if the pricing is fair and they expose webhooks/API. Otherwise, migrate to Meta Cloud API directly.
- **Already on a CRM/field-service tool** → one-shot import of customers if useful; otherwise ignore and go lean.
