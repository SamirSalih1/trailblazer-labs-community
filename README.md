# Trailblazer Labs — Community Agent Publishing

A community directory of Salesforce agents and assets, built by Trailblazers and shared straight from GitHub. MVPs, hobbyists, and independent developers publish free, open-source agents — no partner contract required.

**Live site:** https://samirsalih1.github.io/trailblazer-labs-community/

## What's inside

- **Directory** — searchable, filterable catalog of community assets. Each card links to the real GitHub source and a demo video.
- **How it works** — the four-step publishing path.
- **Publish** — submit your own asset by pull request.

## Publish your asset

Adding an asset is a pull request:

1. Fork this repo (or use the **Open a pull request** button on the site).
2. Add an entry to the `ASSETS` array in [`assets.js`](assets.js) with your repo URL, demo link, category, license, and description.
3. Open a PR. A maintainer reviews and merges it.

Once merged, your asset appears in the directory automatically — no build step.

## Contributor guidelines

- Repo must be **public** and carry an **open-source license** (MIT, Apache-2.0, BSD-3-Clause, etc.).
- Include a README, at least one screenshot, and a short demo video.
- Community assets are open source and community-supported.

## Design

Styled to the authoritative Trailhead brand palette (`brand.salesforce.com/guidelines/trailhead`): Purple Mountain `#741B89`, Dark Blue `#032E61`, Blue Sky `#8CD3F8`, Astro Turf `#009A44`, with the trail-marker-and-mountain logo mark. Bright, light layout. Everything is plain HTML/CSS/JS — no dependencies, no build.

## Run locally

```bash
python3 -m http.server 8000
# visit http://localhost:8000
```

© 2026 Salesforce, Inc.
