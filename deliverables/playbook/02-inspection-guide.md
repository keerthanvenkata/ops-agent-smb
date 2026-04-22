# What to Inspect When the Client Shows You Their Current Setup

If the client is willing to show you their phone / laptop live, this is where the real gold is. Most business owners *say* things vaguely and *show* the reality accurately. Do not skip the inspection if offered.

## WhatsApp (on the owner's phone)

- [ ] **Which app icon?** Green-and-white = regular WhatsApp. Green-with-briefcase = WhatsApp Business (the free app). Blue-and-white logo + "Meta Business Suite" = already on API.
- [ ] Tap the business profile → look for a **green/blue tick** beside the business name → if present, they're on API with Official Business Account status.
- [ ] Settings → Linked Devices → note count and OS (Android, iOS, Windows, Mac Web).
- [ ] Settings → Business Tools → look for:
  - **Greeting message** set? What does it say?
  - **Away message** set? When does it fire?
  - **Quick replies** used? How many and what are the keywords?
  - **Catalog / collections / orders** used? (Usually no for cleaning services, but check.)
  - **Labels** used on chats? (Business app supports up to 20 labels — useful clue.)
- [ ] Scroll the chat list — note:
  - Rough unread count
  - Rough age of oldest unread (24 hours? 3 days?)
  - How many chats are **labelled** (if any) and by what
- [ ] Open 3 random customer chats. Look for:
  - Length of threads (one-off vs. long relationship)
  - Proportion in English vs. Hindi/Hinglish vs. Telugu
  - Whether the owner sends voice notes (affects our STT scope)
  - Whether media attachments (photos of jobs, videos) are common
- [ ] Storage usage: Settings → Storage and data. >1 GB of WhatsApp data = heavy user, supports high-volume story for pricing.

## Any existing CRM / business app they pull up

- [ ] Name and exact vendor (ask them to tap the app info / help → about).
- [ ] Plan / tier (Settings → Subscription).
- [ ] Monthly billing amount. Ask them to show the last invoice if comfortable.
- [ ] Number of users / seats enabled.
- [ ] Which modules they actually use (a lot of SMBs pay for 10 features, use 2).
- [ ] Is there an **API / webhook / export** option? Screenshot if possible.
- [ ] Does it integrate with WhatsApp today? How (native, Zapier-style, nothing)?

## Computer / shared drive

- [ ] Excel / Google Sheets file that holds customer data — ask to see.
  - Number of rows, columns, last-modified date.
  - Column hygiene: is "phone" consistent? Are there duplicates?
- [ ] Any shared Google Drive / OneDrive folder used for coordination — screenshot structure.
- [ ] Email inbox: do leads also come via email/web form? If yes, that's out of scope v1 — log it.

## Staff coordination

- [ ] Ask to see any internal **WhatsApp/Telegram group** used for staff.
  - Group size, how active, what's posted.
  - This is *exactly* where our routing notifications will go — make sure it exists or needs creating.
- [ ] If no group exists: suggest creating one as part of Week 1 deliverable.

## Phone contacts

- [ ] Ask the owner: "If you open your contacts and scroll, roughly how many customer entries?"
- [ ] Glance: are contacts labelled with addresses / service types / notes, or just names?
- [ ] Quality of this phone book = your baseline for data migration effort.

## Meta Business Suite / Facebook Page

- [ ] Do they have a Facebook / Meta Business account? Who is the admin?
- [ ] Is Business Verification complete? (Meta Business Suite → Security Center.)
- [ ] Is a website linked? Domain match the business name?

## Website

- [ ] Does the website exist and match the business name?
- [ ] WhatsApp "click to chat" button? Goes to which number?
- [ ] SSL / security basics fine? (Not your problem, but affects Meta verification.)

## What these signals tell you (quick rubric)

| Signal | Implication |
|---|---|
| Still on WhatsApp Business **app**, no BSP | Must move to Cloud API; expect 5–7 day Meta verification. |
| Linked devices used heavily | They already want multi-user; our system is a natural fit. |
| Labels in heavy use | They *think* operationally; they'll understand our status model immediately. |
| Greeting + away + quick replies set | They've already hit the ceiling of the free app. Sell is easier. |
| Using WATI / AiSensy already | They understand paid tooling; our Cloud API recommendation needs justification. |
| Customer data in messy Excel | Option B (one-time import) has real friction — budget cleanup time. |
| No internal staff group | Add "create internal group" to Week 1. |
| No GST / PAN ready | WABA onboarding will be delayed. Surface this early. |
| Website missing / broken | Meta OBA / green tick will be hard. Set expectations. |
