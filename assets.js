/*
 * Trailblazer Labs — community asset directory
 * ---------------------------------------------
 * This is the single source of truth for every listing on the site.
 * To add your asset: add an object to the ASSETS array below and open a
 * pull request. Fields:
 *
 *   name        Asset name (required)
 *   author      Your name / handle (required)
 *   icon        A single emoji shown in the card tile
 *   color       Tile background — one of: purple, blue, sky, green, mauve, navy
 *   category    One of: "Service Agents", "Sales & RevOps",
 *               "Developer Tools", "Data & Analytics"
 *   builtWith   e.g. "Agentforce Vibes", "Flow", "Apex", "Flow + Apex"
 *   license     e.g. "MIT", "Apache-2.0", "BSD-3-Clause"
 *   repo        Full https://github.com/... URL to the public repo (required)
 *   demo        Full https URL to a demo video (YouTube, Vidyard, Loom…)
 *   description Short one-line summary shown on the card (required)
 *   about       Longer paragraph shown in the detail view
 */

const ASSETS = [
  {
    name: "Case Deflection Companion",
    author: "Priya Nayar",
    icon: "🛎️",
    color: "navy",
    category: "Service Agents",
    builtWith: "Agentforce Vibes",
    license: "MIT",
    repo: "https://github.com/pnayar/case-deflection-companion",
    demo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description: "Suggests knowledge articles inline before a case is created.",
    about: "Watches the case-creation form and surfaces the top three relevant knowledge articles inline, cutting new-case volume. Ships as unmanaged metadata."
  },
  {
    name: "Renewal Reminder Agent",
    author: "Diego Fuentes",
    icon: "🧾",
    color: "blue",
    category: "Sales & RevOps",
    builtWith: "Flow + Apex",
    license: "Apache-2.0",
    repo: "https://github.com/dfuentes/renewal-reminder",
    demo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description: "Scans contracts and drafts renewal outreach 90/60/30 days out.",
    about: "Automates renewal nudges with configurable cadences using scheduled Flow and a small Apex helper. Community-supported via GitHub Issues."
  },
  {
    name: "Apex Test Generator",
    author: "Sam Okoro",
    icon: "🧪",
    color: "green",
    category: "Developer Tools",
    builtWith: "Agentforce Vibes",
    license: "MIT",
    repo: "https://github.com/sokoro/apex-test-gen",
    demo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description: "Generates Apex test classes from a highlighted method.",
    about: "Point it at a class and it drafts a test class with assertions and bulk cases. A favorite in the developer community."
  },
  {
    name: "Report Summarizer",
    author: "Lena Toma",
    icon: "📊",
    color: "blue",
    category: "Data & Analytics",
    builtWith: "Agentforce Vibes",
    license: "MIT",
    repo: "https://github.com/ltoma/report-summarizer",
    demo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description: "Turns any Salesforce report into a plain-language digest.",
    about: "Reads a report and returns a narrated summary with callouts on outliers. Handy for exec updates."
  },
  {
    name: "Field History Explorer",
    author: "Marcus Webb",
    icon: "🔌",
    color: "navy",
    category: "Developer Tools",
    builtWith: "Apex",
    license: "BSD-3-Clause",
    repo: "https://github.com/mwebb/field-history-explorer",
    demo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description: "Traces and explains field-history changes in natural language.",
    about: "Answers “who changed this field and when” in natural language. Read-only — no data leaves the org."
  },
  {
    name: "Compliance Checklist Agent",
    author: "Trailblazer Labs",
    icon: "✅",
    color: "purple",
    category: "Service Agents",
    builtWith: "Flow",
    license: "MIT",
    repo: "https://github.com/trailblazer-labs/compliance-checklist-agent",
    demo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description: "Validates org configuration against a compliance checklist.",
    about: "Runs a configurable checklist against org settings and flags gaps with remediation guidance."
  }
];
