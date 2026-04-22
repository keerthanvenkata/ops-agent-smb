import type { Slide } from "../types";

export const slide: Slide = {
  id: "executive-assignment-logic",
  number: "07",
  title: "How messages get routed to the right person on your team",
  subtitle: "Simple enough to explain on day one, smart enough to be useful.",
  objective:
    "Pin down routing rules concretely. The answers from Slide 02 feed directly into this.",
  content: [
    {
      kind: "bullets",
      items: [
        "Fixed exec per customer \u2014 once a customer is attached to someone, they stay for continuity.",
        "Area-based \u2014 Kondapur \u2192 Exec A, Gachibowli \u2192 Exec B.",
        "Service-based \u2014 deep-cleaning \u2192 senior; routine \u2192 junior; office vs home; sofa vs tiles.",
        "Round-robin \u2014 balance load when no other rule applies (new leads, non-regional).",
        "Owner-handled by default \u2014 anything urgent / complaint / VIP routes to you in parallel.",
        "Manual override \u2014 you can always reassign via a simple WhatsApp command to the ops group.",
      ],
    },
    { kind: "heading", text: "Decision tree" },
    {
      kind: "code",
      text: "Incoming message\n  |\n  v\nIs phone an existing customer?\n  |-- Yes -> Route to their assigned exec\n  `-- No  -> Do we know the area from the message?\n              |-- Yes -> Route by area rule\n              `-- No  -> Round-robin among available execs\n                         (Owner gets a FYI copy in the ops group)",
    },
  ],
  visual:
    "Decision-tree diagram (same as the code block, rendered visually). Keep it clean \u2014 a branching flow with four leaves.",
  speakerNotes:
    "Routing is the heart of the system. We want a rule simple enough to explain to a new cleaner on day one, but smart enough that the right person always gets the right chat. My recommendation is layered: if it\u2019s a returning customer, stick with the exec who served them last \u2014 continuity matters. If new, we try area first, then service type, then round-robin. And anything flagged urgent or a complaint also pings you \u2014 in this industry, complaints escalate fast and you want early warning. We will confirm the actual rules together after Slide 02\u2019s answers.",
  questions: [
    "Do you have specific execs attached to specific areas, or is it loose?",
    "Do repeat customers expect the same person back?",
    "Which services need a senior / experienced exec vs. a junior?",
    "Do you have a \u201Cnight / weekend\u201D exec, or does everyone handle everything?",
    "Is there any customer where you must be the first to reply, always?",
  ],
  capture: [
    "Exec names, phone numbers, their areas, their services.",
    "Hard rules (\u201CVIP X always comes to me\u201D) vs soft rules (\u201Cprefer Ravi for Jubilee Hills\u201D).",
    "What \u201Curgent\u201D means in their words \u2014 write it down verbatim.",
    "Who covers when the primary exec is unavailable (leave, travel, etc.).",
  ],
};
