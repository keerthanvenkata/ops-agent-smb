import logo from "./assets/tinkern-logo.jpg";

const BRAND = {
  name: "TinKern Labs",
  owner: "Keerthan Venkata",
  email_primary: "keerthan@tinkernlabs.com",
  email_alt: "keerthanvenkata@gmail.com",
  phone: "+91 63091 17006",
  location: "Hyderabad, India",
};

const DOC = {
  title: "WhatsApp Operations Agent",
  subtitle: "Engagement Brief — Scope, Timeline & Commercials",
  version: "v1.0",
  date: "22 April 2026",
  prepared_for: "Ashish — Cleaning Services Business, Hyderabad",
};

export function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="brand">
          <img src={logo} alt="TinKern Labs" className="logo" />
          <div className="brand-text">
            <div className="brand-name">{BRAND.name}</div>
            <div className="brand-tag">Operations · AI · Integration</div>
          </div>
        </div>
        <div className="meta">
          <div className="meta-title">{DOC.title}</div>
          <div className="meta-sub">{DOC.subtitle}</div>
          <div className="meta-row">
            <span>Prepared for: <strong>{DOC.prepared_for}</strong></span>
            <span>{DOC.date} · {DOC.version}</span>
          </div>
        </div>
      </header>

      <section className="intent">
        <h2 className="h2">What we are solving</h2>
        <p>
          Today, most customer conversations — leads, bookings, reschedules and complaints — flow
          through one WhatsApp number handled personally by the owner. That works until it becomes the
          bottleneck. Messages get missed, follow-ups slip, and every urgent issue must pass through
          one pair of hands. We are proposing a lean, <strong>internal AI Operations Agent</strong> that
          reads every incoming WhatsApp message, understands what it is about, identifies the customer,
          and quietly routes it to the right executive — without changing how customers message you.
        </p>
      </section>

      <section className="grid-2">
        <div className="card">
          <div className="card-title">Scope — what’s included</div>
          <ul className="tight">
            <li><strong>Discovery & audit</strong> of current WhatsApp workflow, tools, team and numbers.</li>
            <li><strong>WhatsApp integration</strong> via Meta Cloud API (direct) or a BSP — whichever fits best.</li>
            <li><strong>Lightweight data layer</strong> — customer record keyed by phone, assigned executive, message history summary, status tags.</li>
            <li><strong>AI inbox agent</strong> — reads messages (English, Hindi, Telugu, Hinglish), detects intent (lead / booking / complaint / reschedule / pricing), writes a 1–2 line TLDR.</li>
            <li><strong>Routing & SOPs</strong> — rules for who handles what; repeat customers stay with their owner; urgent issues escalate to you.</li>
            <li><strong>Notifications</strong> — TLDR + raw message delivered to the responsible executive and a shared ops group with tags (lead / urgent / complaint).</li>
            <li><strong>Status tracking</strong> — lean statuses (new, contacted, quoted, won/lost; scheduled, in-progress, done; open, resolved, escalated).</li>
            <li><strong>Testing, tuning, go-live & handover</strong> with a short written SOP for your team.</li>
          </ul>
        </div>

        <div className="card">
          <div className="card-title">Not included</div>
          <ul className="tight">
            <li>No full CRM / ERP / field-service platform.</li>
            <li>No custom mobile app for field staff.</li>
            <li>No customer-facing chatbot — customers still chat with humans.</li>
            <li>No payments, billing, invoicing or scheduling engine.</li>
            <li>No marketing broadcast campaigns or template design beyond what we need for the agent.</li>
            <li>No data migration from an existing system beyond a one-time, one-shot import if agreed.</li>
          </ul>
          <div className="card-title" style={{ marginTop: 10 }}>Assumptions</div>
          <ul className="tight">
            <li>You can either keep your existing WhatsApp number (migrated to API) or use a new one — your call.</li>
            <li>Volumes in the small-SMB range (tens to low-hundreds of messages/day).</li>
            <li>You or a nominated staff member is reachable for ~2–3 short sessions a week during the build.</li>
          </ul>
        </div>
      </section>

      <section className="flow">
        <div className="card-title">How a message will flow</div>
        <div className="flow-steps">
          <div className="fstep"><span className="num">1</span>Customer sends WhatsApp message</div>
          <div className="farr">→</div>
          <div className="fstep"><span className="num">2</span>Cloud API webhook → our agent</div>
          <div className="farr">→</div>
          <div className="fstep"><span className="num">3</span>Identify customer by phone; fetch history & assigned exec</div>
          <div className="farr">→</div>
          <div className="fstep"><span className="num">4</span>Classify intent + urgency; write TLDR</div>
          <div className="farr">→</div>
          <div className="fstep"><span className="num">5</span>Route to right exec + tag in ops group; escalate if urgent</div>
          <div className="farr">→</div>
          <div className="fstep"><span className="num">6</span>Exec replies on WhatsApp as normal; status updated</div>
        </div>
      </section>

      <section className="grid-3">
        <div className="card">
          <div className="card-title">Timeline — 4 calendar weeks</div>
          <ul className="tight">
            <li><strong>Wk 1</strong> Discovery, audit, architecture, WABA onboarding started</li>
            <li><strong>Wk 2</strong> WhatsApp integration; intent classification & TLDR working on test messages</li>
            <li><strong>Wk 3</strong> Customer + executive data layer, routing rules, notifications, status tags</li>
            <li><strong>Wk 4</strong> End-to-end testing, tuning on your real chats, go-live, handover & SOP</li>
          </ul>
          <p className="note">
            This is four calendar weeks with focused part-time engineering, not a full-time consultant
            engagement — which is how we keep the price honest while giving you real-data iteration time.
          </p>
        </div>

        <div className="card">
          <div className="card-title">Commercials</div>
          <div className="price-row">
            <div className="price-box">
              <div className="plan">Option A — Lean</div>
              <div className="amount">₹30,000</div>
              <div className="fine">one-time, inclusive</div>
              <ul className="tight">
                <li>Fresh data layer (no migration)</li>
                <li>Core routing + escalation + status</li>
                <li>Group-notification pattern (no dashboard)</li>
                <li>45 days reasonable post-go-live support</li>
              </ul>
            </div>
            <div className="price-box recommended">
              <div className="plan">Option B — Better <span className="pill">Recommended</span></div>
              <div className="amount">₹45,000</div>
              <div className="fine">one-time, inclusive</div>
              <ul className="tight">
                <li>Everything in Option A</li>
                <li>One-time import of your existing customer list</li>
                <li>Lightweight admin view (exec, customer, status)</li>
                <li>Owner daily-digest (end-of-day TLDR)</li>
                <li>60 days reasonable post-go-live support</li>
              </ul>
            </div>
          </div>
          <p className="note">
            <strong>Running costs</strong> (at actuals, paid by you directly): WhatsApp API ~<strong>₹50–300/mo</strong> (most inbound
            replies fall in the free 24-hour service window); AI API ~<strong>₹500–1,500/mo</strong> (Gemini Flash / Claude
            Haiku class models); hosting + DB ~<strong>₹500–1,500/mo</strong>. Total typically ~<strong>₹1,000–3,000/mo</strong>.
          </p>
        </div>

        <div className="card">
          <div className="card-title">Support model</div>
          <ul className="tight">
            <li><strong>45–60 days reasonable support</strong> post go-live is included — bugs, small prompt/rule tweaks, and minor issues we missed during build.</li>
            <li><strong>After that, pay-as-you-go:</strong> you pay only when something breaks, scales, or you want new features / new intents / new integrations. The system is designed to run on its own.</li>
            <li><strong>Optional AMC</strong> available separately if you prefer predictability (~₹5,000–8,000/month) — not required.</li>
            <li>You own the WhatsApp number, the Meta Business Account, the database and the code.</li>
          </ul>
        </div>
      </section>

      <section className="impact">
        <div className="card-title">Business impact we are aiming for</div>
        <div className="impact-grid">
          <div className="impact-cell">
            <div className="impact-num">0 missed leads</div>
            <div className="impact-text">Every incoming message is logged, classified and routed — nothing sits unseen in a personal inbox.</div>
          </div>
          <div className="impact-cell">
            <div className="impact-num">Faster first response</div>
            <div className="impact-text">Responsible exec is paged directly with a TLDR — no forwarding, no retyping.</div>
          </div>
          <div className="impact-cell">
            <div className="impact-num">Owner off the hot seat</div>
            <div className="impact-text">You see an end-of-day digest and only the genuinely urgent escalations in real time.</div>
          </div>
          <div className="impact-cell">
            <div className="impact-num">Accountable team</div>
            <div className="impact-text">Every chat has an owner, a status and a history — complaints don’t fall through cracks.</div>
          </div>
        </div>
      </section>

      <section className="next">
        <div className="card-title">What we need from you to start</div>
        <ol className="tight">
          <li>Pick Option A or B, and confirm the WhatsApp number strategy (keep current, or use a new one).</li>
          <li>GST certificate + PAN (needed for Meta Business verification).</li>
          <li>Access to one staff phone for the test period, and a 45-minute discovery call.</li>
          <li>Short list of your executives with names + phones + service areas (for routing rules).</li>
        </ol>
      </section>

      <footer className="footer">
        <div>
          <strong>{BRAND.owner}</strong> · {BRAND.name} · {BRAND.location}
        </div>
        <div>
          {BRAND.email_primary} · {BRAND.email_alt} · {BRAND.phone}
        </div>
        <div className="fine">This brief is a working document for discussion. Final scope is confirmed via a signed one-page SOW before kickoff.</div>
      </footer>
    </div>
  );
}
