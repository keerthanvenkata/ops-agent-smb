import type { Slide } from "../types";

export const slide: Slide = {
  id: "existing-systems-discovery",
  number: "03",
  title: "What tools you already use \u2014 so we don\u2019t rebuild what exists",
  subtitle: "WhatsApp Business app vs API, BSPs, CRMs, spreadsheets.",
  objective:
    "Find out whether they are using the Business App, linked devices, a BSP, a CRM, a spreadsheet \u2014 anything. Your entire integration approach flips on these answers.",
  content: [
    {
      kind: "bullets",
      items: [
        "WhatsApp Business app vs WhatsApp Business API \u2014 very different under the hood.",
        "Linked devices (WhatsApp Web / multi-device) \u2014 how many and who?",
        "Any shared inbox / BSP (AiSensy, WATI, Interakt, Gupshup, 360dialog)?",
        "Any CRM, field-service or scheduling tool (Zoho, Jobber-alike, Excel, Google Sheets)?",
        "Where do customer names and phone numbers actually live today?",
      ],
    },
    { kind: "heading", text: "Recommendation logic (in your head)" },
    {
      kind: "bullets",
      items: [
        "Only WhatsApp Business app \u2192 must move to Cloud API (we help).",
        "Linked devices only \u2192 still only one \u201Cseat\u201D; must move to Cloud API for multi-user or AI.",
        "Already on a BSP \u2192 keep it if pricing is fair and it exposes webhooks/API. Otherwise migrate to Meta Cloud API directly.",
        "Already on a CRM / field-service tool \u2192 one-shot import of customers if useful; otherwise ignore and go lean.",
      ],
    },
  ],
  visual:
    "2\u00D72 grid of screenshots/icons (Business App, linked devices, BSP dashboard, Spreadsheet/CRM) with a \u201C?\u201D overlay on each; client fills in what they use.",
  speakerNotes:
    "There are two very different worlds here. The WhatsApp app on your phone \u2014 the free green-icon app \u2014 is built for one user, one device. It cannot be read by software, it has no real API, and it is not built for multi-user. The WhatsApp Business API (Cloud API) is a different channel run by Meta. You move your number onto it, and then your team (or in our case, an AI agent) can read and reply to messages programmatically. Most small businesses start on the app, hit a wall, and move to the API. I want to know exactly where you are on that journey \u2014 and whether you already pay any third party like AiSensy or WATI. If you do, we may keep it; if not, we will recommend the cheapest sensible path.",
  questions: [
    "Show me your WhatsApp on your phone \u2014 is it the green app, or the blue-tick business version?",
    "How many phones/laptops have this WhatsApp logged in (linked devices)?",
    "Do you currently pay anyone monthly for WhatsApp tools? (Look for \u20B9999\u2013\u20B93,000/month charges.)",
    "When a customer books a job, where does their detail get written \u2014 phone book, notebook, Excel, app?",
    "Is there any software where your staff sees today\u2019s job list?",
    "Who owns the Facebook/Meta Business account for this number, if any?",
  ],
  capture: [
    "Exact app/tool name, plan, and billing amount.",
    "Number of linked devices and who has them.",
    "Who the \u201CMeta Business admin\u201D is (or who will be if none exists).",
    "Whether a GST certificate and PAN exist for the business (required for WhatsApp API).",
    "The data source that will become our \u201Ccustomer list\u201D (phone book export, spreadsheet, nothing).",
  ],
};
