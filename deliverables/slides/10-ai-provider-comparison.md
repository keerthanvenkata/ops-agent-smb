# Slide 10 — AI Provider Comparison

## Slide Title
Which AI model reads your messages — honest numbers, not hype

## Objective
Defuse the "which AI is best?" conversation with a short, grounded answer. Show that we've thought about it. Pick a primary and a fallback.

## Key Points (on slide)

We need three things from the AI for this use case:
1. Read short messages in **English, Hindi, Hinglish, Telugu** and produce a 1–2 line TLDR.
2. Classify intent (lead / booking / complaint / reschedule / pricing / info / other) and urgency.
3. Be **cheap and fast** — we call it on every inbound message.

### 2026 pricing (per 1 million tokens, source: each provider's pricing page, April 2026)

| Model | Input $/M | Output $/M | Indian-language quality | Speed | Good for this use case |
|---|---|---|---|---|---|
| **Gemini 2.5 Flash** | $0.15–$0.30 | $0.60–$3.50 | **Best-in-class** (Google's multilingual edge shows on Hindi / Telugu / Hinglish) | Fastest of the three | ✅ Primary choice |
| **Claude Haiku 4.5** | $1.00 | $5.00 | Good on English; weaker on Indic regional | Fast | ✅ Backup for English-heavy intent calls |
| **GPT-4o mini / GPT-5 Mini** | $0.15 | $0.60 | Good on Hindi; decent on Telugu | Fast | ✅ Viable alternative |
| Claude Sonnet 4.6 | $3.00 | $15.00 | Strong English | Medium | ❌ Overkill & pricier |
| Gemini 2.5 Pro | $1.25 | $10.00 | Strong multilingual | Medium | ❌ Only if deeper reasoning needed |

### What this means in ₹ for your volume
- **Assume 100 messages / day = ~3,000 messages / month.** Each round-trip uses ~1,000 tokens.
- On **Gemini 2.5 Flash**: ~₹50–₹150 / month.
- On **Claude Haiku 4.5**: ~₹500 / month.
- On **GPT-4o mini**: ~₹100 / month.

Realistic budget to promise the client: **₹500–₹1,500 / month** for AI — generous headroom for both classification + end-of-day digest generation.

### Recommendation
- **Primary: Gemini 2.5 Flash** — strongest on Indian languages per independent 2026 benchmarks, cheapest, fastest.
- **Fallback: Claude Haiku 4.5** — in case Gemini has downtime; our agent can route automatically.
- **Swappable**: the agent uses a provider-agnostic abstraction so we can switch in hours if pricing changes or a new model proves better.

## Visual
Simple three-row card layout: "Gemini Flash — Primary 🇮🇳 best for Indian languages, cheapest"; "Claude Haiku — Fallback 🛡️ reliability"; "GPT mini — Alternative 🔄 if Google has issues". Small price bar under each.

## Speaker Notes
"I've looked at all three major providers at current 2026 pricing. For your use case — short WhatsApp messages in mixed English, Hindi and Telugu — Google's Gemini Flash is both the cheapest and the best at Indian-language understanding. Anthropic's Claude Haiku is excellent but pricier and weaker on Telugu. OpenAI's smallest model is comparable in price to Gemini but slightly behind on regional languages. So: Gemini Flash as primary, Claude Haiku as fallback. If any of the three changes pricing or performance, we can swap — I keep that part modular, which is something a lot of people don't bother with until they regret it."

## Questions to Ask
- Any concerns about using a US-based AI provider? (Some businesses care; most don't.)
- What's your rough monthly message volume, so we can size API costs accurately?
- Do you want all messages processed in real time, or is "within a minute" acceptable?

## What to Capture
- Their volume estimate (feeds the AI cost projection).
- Any data-residency preferences.
- Whether they already have an OpenAI/Gemini/Anthropic account (rare for SMB, but if yes, we use it).

## Notes for you (not on slide)
- **Never quote raw USD**: always convert to INR at a conservative rate. Your client's mental model is INR.
- **Always include 18% GST** mentally when stating any Indian SaaS cost.
- **Prompt caching** (Anthropic, OpenAI) can cut costs ~90% for repeated system prompts — we use this from day one.
