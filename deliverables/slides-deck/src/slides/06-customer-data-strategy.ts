import type { Slide } from "../types";

export const slide: Slide = {
  id: "customer-data-strategy",
  number: "06",
  title: "What \u201Ccustomer data\u201D looks like on day one \u2014 three honest options",
  subtitle: "Avoid over-promising a CRM-like experience. Stay lean.",
  objective:
    "Present three concrete data strategies and steer them toward the right one for their size.",
  content: [
    {
      kind: "table",
      header: ["Option", "What we do", "Pros", "Cons", "Best for"],
      rows: [
        [
          "A. Fresh lightweight layer (recommended)",
          "Phone number = customer ID. New records created as messages arrive. Assigned exec set manually or by rule.",
          "Fastest, cleanest, cheapest. Zero legacy bugs.",
          "Existing customer history (if any) not available day one.",
          "SMBs with data in phone book / Excel / nothing.",
        ],
        [
          "B. One-time import",
          "Take one CSV / phone-book export and seed the DB with names, phones, areas, last service.",
          "Customers recognised on day one. No ongoing sync pain.",
          "Costs a few days; data cleanup required; one-time only.",
          "Clients with a decent customer list in Excel or an old tool.",
        ],
        [
          "C. Live sync with existing app",
          "Our data layer stays continuously in sync with another tool via API.",
          "Both systems stay up to date.",
          "Most complex, fragile, expensive to maintain. Rarely worth it for a small team.",
          "Larger outfits with a CRM they are committed to.",
        ],
      ],
    },
    { kind: "heading", text: "Minimal schema on day one (Option A)" },
    {
      kind: "code",
      text: "customers: { phone, name, area, assigned_exec, last_status }\nmessages:  { phone, text, tldr, intent, urgency, timestamp }\nexecs:     { name, phone, areas, services, is_owner }",
    },
  ],
  visual:
    "Three vertical cards side-by-side (A / B / C). The A card has a \u201CRecommended\u201D ribbon. Include the 3-table schema on the A card.",
  speakerNotes:
    "There is a natural temptation to say \u2018import everything, sync everything, we\u2019ll have a rich CRM\u2019. I would actively push back on that. For a team your size, the value is in getting a working system live in four weeks, not in building a database. So my strong recommendation is Option A: we start fresh. Customers are keyed by phone number. As messages come in, records build themselves. After two months of running, you will have a real customer list \u2014 built from actual interactions, not stale data. If you have a clean Excel already, Option B is cheap insurance. Option C I would only recommend if you already run a specific software you are committed to \u2014 and even then, we\u2019d want a good reason.",
  questions: [
    "Do you have a customer list in any form today \u2014 phone contacts, Excel, a tool?",
    "If yes, how clean is it? (honest answer please)",
    "Are there customers you must recognise on day one \u2014 VIPs, big clients?",
    "Is there anyone besides you who would use a dashboard, or is WhatsApp enough for the team?",
  ],
  capture: [
    "Which option they lean toward.",
    "If B: size of existing customer list, format, and any cleanup needed.",
    "If C: exact name of the tool they want to sync with and whether it has an API.",
    "A short \u201CVIP list\u201D of customers they want auto-flagged.",
  ],
};
