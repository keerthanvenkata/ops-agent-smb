import type { Slide } from "../types";

export const slide: Slide = {
  id: "client-decisions-required",
  number: "14",
  title: "What we need you to decide so we can start",
  subtitle: "Seven yes-or-no decisions. Nothing fluffy.",
  objective:
    "End with a clear, actionable close. Move toward a signed SOW.",
  content: [
    {
      kind: "numbered",
      items: [
        "WhatsApp number \u2014 keep current (we migrate to API) or use a new number? Recommendation: keep current, for continuity.",
        "Data strategy \u2014 Option A (fresh) or Option B (one-time import)? Recommendation: Option B if you have a reasonably clean list.",
        "Assignment logic \u2014 fixed-exec-per-customer, area-based, or hybrid? Recommendation: hybrid \u2014 fixed for repeats, area for new.",
        "Routing pattern \u2014 group + tags (recommended) or shared web inbox?",
        "Support model \u2014 45 or 60 days included, then pay-as-you-go. Want an optional AMC quoted separately?",
        "Account ownership \u2014 Meta Business, Railway, Supabase, AI provider \u2014 all accounts in your business name. Confirm.",
        "Commercial option \u2014 A (\u20B930k) or B (\u20B945k)?",
      ],
    },
  ],
  visual:
    "Checklist on screen with spaces for initials / ticks next to each decision. Print-friendly \u2014 you can literally hand a printout and have the owner tick through it.",
  speakerNotes:
    "That\u2019s the deck. To actually start, I need seven yes-or-no decisions from you. None of them are risky; most have a clear recommended answer already. If we can agree on these in the next few days, I\u2019ll send a one-page SOW reflecting exactly what we discussed, you sign it, and we kick off the week after. The fastest path to seeing this live is: agree in principle today, I send SOW tomorrow, you sign, we start Monday. You\u2019re looking at a working system by the end of next month.",
  questions: [
    "Is there anything on this list you are uncomfortable deciding today? Why?",
    "Is there a decision I haven\u2019t asked for that you expected me to?",
    "Who besides you needs to sign off on this? (partner, CA, spouse \u2014 all valid)",
  ],
  capture: [
    "A soft yes/no on each of the 7 decisions.",
    "Names of any other stakeholders involved in the decision.",
    "Their preferred next step: SOW tomorrow, second meeting first, or time to think.",
  ],
  privateNotes: [
    "If they\u2019re enthusiastic but say \u201Clet me get back to you\u201D, send the SOW within 24 hours. Momentum is everything.",
    "If they hesitate on price, do NOT drop the price on the spot. Instead offer to \u201Creshape the scope\u201D and buy yourself 24 hours to come back.",
    "If they push for \u201Ccan you do this for 20k?\u201D \u2014 the answer is \u201Cfor 20k I can do a genuinely lighter version \u2014 here\u2019s what I\u2019d take out.\u201D Never say yes to a 33% discount without removing 33% of scope.",
  ],
};
