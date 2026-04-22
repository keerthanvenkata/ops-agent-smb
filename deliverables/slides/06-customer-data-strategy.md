# Slide 06 — Customer Data Strategy

## Slide Title
What "customer data" looks like on day one — three honest options

## Objective
Present three concrete data strategies and steer them toward the right one for their size. Avoid the trap of over-promising a "CRM-like" experience — keep it lean.

## Key Points (on slide)

| Option | What we do | Pros | Cons | Best for |
|---|---|---|---|---|
| **A. Fresh lightweight layer** *(recommended)* | Phone number is the customer ID. New records are created as messages arrive. Assigned exec is set manually or by rule. | Fastest, cleanest, cheapest. Zero legacy bugs. | Existing customer history (if any) is not available on day one. | SMBs with data in phone book / Excel / nothing. |
| **B. One-time import** | We take one CSV / phone-book export and seed the database with names, phones, areas, last service. | Customers are recognised on day one. No ongoing sync pain. | Costs a few days; data cleanup required; one-time only. | Clients with a decent customer list in Excel or an old tool. |
| **C. Live sync with existing app** | Our data layer stays in continuous sync with another tool via API. | Both systems stay up to date. | Most complex, fragile, expensive to maintain. Rarely worth it for a small team. | Larger outfits with a CRM they are committed to. |

## Visual
Three vertical cards side-by-side (A / B / C), with the "A" card highlighted with a "Recommended" ribbon. Include a tiny 5-field schema on card A:
```
customers: { phone, name, area, assigned_exec, last_status }
messages:  { phone, text, tldr, intent, urgency, timestamp }
execs:     { name, phone, areas, services, is_owner }
```

## Speaker Notes
"There is a natural temptation to say 'import everything, sync everything, we'll have a rich CRM'. I would actively push back on that. For a team your size, the value is in getting a working system live in four weeks, not in building a database. So my strong recommendation is Option A: we start fresh. Customers are keyed by phone number. As messages come in, records build themselves. After two months of running, you will have a real customer list — built from *actual* interactions, not stale data. If you have a clean Excel already, Option B is cheap insurance. Option C I would only recommend if you already run a specific software you are committed to — and even then, we'd want a good reason."

## Questions to Ask
- Do you have a customer list in any form today — phone contacts, Excel, a tool?
- If yes, how clean is it? (honest answer, please)
- Are there customers you *must* recognise on day one — VIPs, big clients?
- Is there anyone besides you who would use a dashboard, or is WhatsApp enough for the team?

## What to Capture
- Which option they lean toward.
- If B: size of existing customer list, format, and any cleanup needed.
- If C: exact name of the tool they want to sync with and whether it has an API.
- A short "VIP list" of customers they want auto-flagged.
