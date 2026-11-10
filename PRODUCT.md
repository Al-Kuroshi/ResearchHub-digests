# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Jekyll, built by GitHub Pages itself (no Actions build, no plugins beyond the
GitHub Pages whitelist). Handwritten layouts, includes and CSS; no stock theme.
Each digest is pushed by the ResearchHub API as structured data (front matter /
data files) that the layouts render. The design lives in this repository
(`Al-Kuroshi/ResearchHub-digests`); the ResearchHub code repo only pushes
content.

## Users

- **The owner**, reading their own weekly digest: a calmer, better-organised
  read than the Discord post, and an archive to look back through.
- **Public readers** following AI and software research, who come back weekly
  to see what was worth knowing.
- **People evaluating the project** (employers, peers): the digests are proof
  of what ResearchHub produces, and the site credits and links back to the
  project (github.com/Al-Kuroshi/ResearchHub).

## Product Purpose

ResearchHub Digest is the public home of ResearchHub's weekly digests. Each
week ResearchHub collects posts, releases and videos from followed sources,
summarises them with LLMs, and writes combined insights across them. The site
presents each digest and keeps an archive. Success: a reader gets the week in a
few minutes, can follow any claim to the item and original source behind it,
and wants to come back.

## Positioning

Not a link roundup or a newsletter written by a person: every digest is
generated from summaries of the actual items, and every insight cites the
numbered items it comes from, which link to the original sources.

## Operating Context

- New digests arrive about weekly per digest profile (currently "All sources"
  and "Gaming"; more can be added). A digest is named after its profile.
- Content per digest: period (start–end dates), item and source counts, topic
  and source-type counts; an overview paragraph; insight sections (Common
  themes, Connections, Emerging technologies, Contradictions, Important
  developments), each entry a title + description citing item numbers [n];
  research directions (plain list); items numbered [1]…[n], grouped by primary
  topic, each with title (link to original), source name, source type (blog,
  GitHub release, YouTube video), date, summary, key findings, "why it
  matters", other topics; optionally "…and N more items not shown"; suggested
  sources (name, link, type, reason).
- A digest can lack insights (the LLM call failed or too few items); it still
  publishes with its items.
- Published automatically by the API after the digest is sent to Discord.

## Capabilities and Constraints

- Static site only; GitHub Pages limits (no server code, whitelisted Jekyll
  plugins only).
- Content is LLM-generated summaries of other people's work: always link and
  attribute the original source; never present it as original writing.
- No private data: no local UI addresses, no approve/reject commands, no
  webhook or internal ids beyond item numbers.
- Undecided: RSS/Atom feed for the site, search, per-topic pages.

## Brand Commitments

- Name: **ResearchHub Digest**.
- Project name ResearchHub, licensed AGPL-3.0, by Al-Kuroshi.

## Evidence on Hand

- Real digests exist in the ResearchHub database (digest_runs); real topics,
  sources (Fireship, Two Minute Papers, GameStop, SpiritOfTheLaw).
- No logo, no imagery, no testimonials or subscriber numbers. Do not invent
  any.

## Product Principles

1. Every claim traces to a source: citations and links are first-class, never
   hidden.
2. The week in minutes: overview first, detail on demand.
3. Honest about being machine-made: say plainly that digests are generated.
4. The archive is part of the product: past digests stay findable by digest
   and date.

## Accessibility & Inclusion

No product-specific requirement established; meet WCAG 2.2 AA as the floor.
