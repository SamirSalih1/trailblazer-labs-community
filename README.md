# Trailblazer Labs — Community Agent Publishing

A single-page prototype for **Trailblazer Labs**, a lightweight community publishing lane on Agent Exchange. It lets individual Trailblazers — MVPs, hobbyists, and independent developers — share Salesforce agents and assets straight from a public GitHub repo, no partner contract required.

**Live page:** https://SamirSalihTrailblazerLabs.github.io/trailblazer-labs-community/ *(update to match the account/repo once Pages is enabled)*

## What's inside

- **Community asset catalog** — a card grid of GitHub-hosted agents plus one managed-package pilot, each with detail modals.
- **Publishing wizard** — a 5-step flow: Source → Details → Media → Security Scan → Review.
- **Simulated security scan** — an animated Salesforce Code Analyzer + Graph Engine run with pass / advisory / blocked verdicts.
- **The Trailblazer Labs framework** — the three Phase Zero pillars: low barrier to entry, automated trust, and a graduation path.

## Design

Restyled to match **Trailhead** branding — Salesforce navy (`#032d60`) and bright blue (`#1b96ff`), trail-green accents (`#4bca81`), badge gold, Salesforce Sans, and a trail-path hero motif. Everything is inline in `index.html`; no build step, no dependencies.

## Run locally

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Status

Community prototype · Trailblazer Labs Phase Zero. Not an official Salesforce product page. Pilot target milestone: Dreamforce 2026.
