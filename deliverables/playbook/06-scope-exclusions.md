# Scope Exclusions — Protect Yourself

These are the things that *must* be written into the SOW as explicitly NOT IN SCOPE. If you don't, they will be assumed-in by the client, and you'll end up delivering them for free.

Copy these directly into the SOW's "Out of Scope" section.

## Product scope — explicitly excluded

1. **Customer-facing chatbot / auto-reply bot.** The system is internal. Customers continue messaging humans. We do not build auto-responses to customers beyond basic WhatsApp Business greeting / away messages they may already have.
2. **Full CRM / ERP / field-service platform.** No job scheduling engine, no dispatch, no workforce management, no fleet tracking.
3. **Mobile application (Android / iOS) for staff.** No native or hybrid app. If needed, that is a separate engagement.
4. **Payment / invoicing / billing module.** No UPI, no Razorpay, no GST invoice generation, no customer wallet.
5. **Web booking portal.** No public website or booking form. Customers still book via WhatsApp.
6. **Marketing broadcasts, bulk campaigns, drip sequences.** Not included. Templates we design are only those needed for the agent (e.g., a confirmation utility template, if any). Any marketing campaign work is separately scoped.
7. **Admin dashboard** beyond the lightweight read-only view in Option B. No full CRUD UI, no reporting suite, no analytics dashboard.
8. **Staff attendance / HR / payroll integration.**
9. **Integration with any existing third-party tool** (Tally, Zoho, Salesforce, Jobber, etc.) beyond a one-time customer data import (Option B only).
10. **Multi-number or multi-business support.** The quote is for **one** WhatsApp number and **one** business entity. Additional numbers or entities are separately scoped.

## AI / data scope — explicitly excluded

11. **Voice note transcription.** Unless explicitly added to scope, voice notes are **forwarded as-is** to the responsible executive without transcription or classification. If they want transcription, add it as a separately priced line item (+₹3,000–₹5,000).
12. **Image / video understanding.** We do not OCR or analyse image content. Media is forwarded with a caption. Adding image understanding is a separate scope.
13. **Training a custom model.** We use hosted LLM APIs only. No fine-tuning, no bespoke model.
14. **Advanced analytics / BI.** No retention dashboards, no cohort analysis, no funnel reports.
15. **Sentiment analysis beyond urgency classification.** We classify urgency (urgent / normal). Deeper NPS / mood tracking is out of scope.
16. **Historical chat migration.** Old WhatsApp chats (the years of history on the owner's phone) are not migrated into our database. Only messages from go-live onward are indexed.

## Commercial scope — explicitly excluded

17. **Running costs** — WhatsApp API charges (Meta), AI API charges, hosting and database fees are **paid directly by the client** to the respective providers. TinKern Labs does not mark these up or resell them.
18. **GST / tax compliance for the client.** TinKern Labs invoices are subject to GST as applicable. The client's own tax positions are their own.
19. **Content creation.** Any marketing copy, template message text, or customer-facing communications drafting is separately scoped.
20. **Legal, compliance, or regulatory review.** Not a law firm, not a compliance firm.

## Support scope — explicitly excluded

21. **Feature additions** after go-live are not part of the included support window. The 45/60-day support window covers: bug fixes, prompt / rule tweaks, minor configuration changes, onboarding new execs into the existing system, and answering operational questions. It does **NOT** cover: new intents, new integrations, new statuses, schema changes, new data sources, UI additions, or training sessions beyond the 1-hour handover.
22. **Staff training** beyond the 1-hour go-live handover and the written SOP is separately scoped.
23. **Data recovery** from the client's side (e.g., if their WhatsApp account is banned due to their own policy violations).
24. **24×7 on-call support.** Support is "reasonable business hours, email and WhatsApp response within 24 hours on weekdays." No SLAs.
25. **Ongoing prompt-tuning** based on changing business patterns beyond the initial support window.

## IP & ownership — define explicitly

26. **TinKern Labs retains** the rights to reuse the framework, patterns, and non-client-specific code for other clients. Client-specific configuration, data, prompts, and the deployed instance are the client's property.
27. **Client owns**: the WhatsApp number, the Meta Business Account, the database contents, the deployed instance credentials, the one-time-delivered codebase (for this engagement).
28. **No indemnification** for third-party service issues (Meta bans, AI provider outages, hosting downtime). We will help resolve in good faith but are not liable for business loss.
29. **Confidentiality** runs both ways and for 2 years post-engagement.

## Cancellation / termination

30. If the client cancels after SOW signing but before Week 1 completion: 50% deposit is forfeited as work commenced.
31. If the client cancels after Week 2: 90% of the fixed fee is payable (only the final 10% support-period payment is waived).
32. If TinKern Labs cancels for any reason: pro-rated refund of deposit minus actual work delivered, assessed in good faith.
33. **Force majeure** covers WhatsApp policy changes, Meta account actions outside our control, AI provider bankruptcy or similar. Timeline extensions permitted without penalty.

## How to word it in the SOW

Use this style:

> **Not included in this engagement** (non-exhaustive, for clarity):
> - Customer-facing chatbot or auto-replies.
> - Full CRM, ERP, or field-service platform.
> - Mobile application for staff.
> - Payments, invoicing, or web booking portal.
> - Voice-note transcription or image/video understanding.
> - Marketing broadcast campaigns or template design beyond agent needs.
> - Historical WhatsApp chat migration.
> - Any integration with existing third-party tools beyond a one-time customer data import (Option B).
>
> **Running costs** (WhatsApp Cloud API, AI API, hosting, database) are paid by the client directly to the respective providers; TinKern Labs does not resell them.
>
> **Support (45 / 60 days) covers**: bug fixes, minor tweaks, operational questions. It does **not** cover new features, new integrations, or training sessions.
>
> Any work outside this scope will be scoped and invoiced separately.
