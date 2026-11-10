---
name: ResearchHub Digest
description: Weekly AI research digests printed as a numbered two-ink risograph bulletin.
colors:
  pink: "#FF48B0"
  pink-deep: "#E0137E"
  blue: "#0078BF"
  blue-text: "#00639F"
  overprint: "#002284"
  paper: "#F6F6F1"
  ink: "#1D2340"
  ink-soft: "#3D4466"
  knockout: "#FFFFFF"
  rule: "rgba(29, 35, 64, .16)"
  pink-wash: "rgba(255, 72, 176, .13)"
typography:
  display:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(44px, 6.6vw, 96px)"
    fontWeight: 900
    lineHeight: 0.86
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 118"
  numeral:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "44px"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 70"
    fontFeature: "'tnum'"
  headline:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(32px, 3.6vw, 50px)"
    fontWeight: 800
    lineHeight: 1.06
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 106"
  section:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(22px, 2vw, 27px)"
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 112"
  title:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: 1.28
    letterSpacing: "-0.005em"
  lede:
    fontFamily: "Literata, Georgia, serif"
    fontSize: "19.5px"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Literata, Georgia, serif"
    fontSize: "17.5px"
    fontWeight: 400
    lineHeight: 1.62
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "11.5px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.14em"
  meta:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "12.5px"
    fontWeight: 500
    lineHeight: 1.5
rounded:
  none: "0px"
  code: "2px"
spacing:
  gutter: "clamp(20px, 4vw, 56px)"
  column: "680px"
  rail: "210px"
  hang: "88px"
  row-top: "34px"
  page-max: "1440px"
components:
  masthead:
    backgroundColor: "{colors.pink}"
    textColor: "{colors.overprint}"
    typography: "{typography.display}"
    padding: "clamp(22px, 3vw, 34px) clamp(20px, 4vw, 56px)"
  issue-band:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.knockout}"
    typography: "{typography.meta}"
    padding: "11px clamp(20px, 4vw, 56px)"
  cite:
    backgroundColor: "{colors.pink}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 .32em"
  cite-hover:
    backgroundColor: "{colors.overprint}"
    textColor: "{colors.knockout}"
  topic-head:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.knockout}"
    rounded: "{rounded.none}"
    padding: "9px 14px"
  button-read:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.knockout}"
    rounded: "{rounded.none}"
    padding: "13px 18px"
  button-read-hover:
    backgroundColor: "{colors.pink}"
    textColor: "{colors.ink}"
  stamp:
    textColor: "{colors.blue-text}"
    rounded: "{rounded.none}"
    padding: "8px 14px"
  type-tag:
    textColor: "{colors.blue-text}"
    rounded: "{rounded.none}"
    padding: "1px 7px"
  footer:
    backgroundColor: "{colors.pink}"
    textColor: "{colors.ink}"
    padding: "34px clamp(20px, 4vw, 56px) 40px"
---

# Design System: ResearchHub Digest

## Overview

**Creative North Star: "The Two-Ink Bulletin"**

Every page is a sheet off a small risograph press that owns exactly two drums: fluorescent pink and riso blue. Ink is spent loudly in the frame (a pink flood masthead, a dense blue issue band, blue topic floods, a pink back cover) and sparingly in the reading column, which stays calm paper and dark ink so a week of research can be read in minutes. Where the two inks meet they overprint, so the blue issue numeral multiplies to deep navy on the pink flood.

The system is about traceability as much as color. Items are numbered in a strict hanging margin; every insight cites them with pink ink blocks; following a citation prints a registration mark on the item. States are printed marks (a rotated stamp, a struck line, a registration mark), never new hues or soft UI chrome.

All styling lives in one stylesheet (`assets/css/site.css`) as custom properties on `:root`; new pages reuse its classes and tokens, never local colors.

**Key Characteristics:**
- Two inks plus paper and ink; overprint (multiply) is the only blending.
- Floods in the frame, calm in the column.
- Numbers are first-class: big condensed Archivo numerals, tabular figures everywhere.
- Square corners, solid rules, no shadows for elevation.
- One load motion (masthead misregistration settle) and one interaction motion (registration mark); both off under reduced motion.

## Colors

Two fluorescent-and-process inks on bright bond paper, with dark blue-black text.

### Primary
- **Fluorescent Pink** (pink): the first ink. Masthead and footer floods, citation blocks, the current-section square in the contents rail, findings markers, link underlines, selection. Text on it is always ink, never white.
- **Heavy Pink** (pink-deep): pink printed heavy for numerals on paper (item numbers, issue numbers in the archive, margin reference numbers), where flat pink would fail contrast.

### Secondary
- **Riso Blue** (blue): the second ink. Issue band, topic heads, the primary "read" button, the margin column's left rule, focus outline, and the masthead issue numeral (multiplied over pink).
- **Blue Text** (blue-text): blue where it sets small text on paper: section headings, mono labels, metadata, counts, stamp and tag borders.
- **Overprint Navy** (overprint): blue over pink as the press would print it. The masthead and footer title, and the citation hover state.

### Neutral
- **Bond Paper** (paper): page ground everywhere outside the floods.
- **Ink** (ink): body text, heavy 2px section rules, text on pink.
- **Soft Ink** (ink-soft): secondary prose (margin notes, "why it matters", suggestion reasons, colophon).
- **Knockout White** (knockout): text knocked out of blue floods (band, topic heads, read button).
- **Hairline** (rule) and **Pink Wash** (pink-wash): 1px dividers between list rows; the hover tint on archive rows and the :target item gradient.

### Named Rules
**The Two Drums Rule.** Pink and blue are the only chromatic inks. A new color is a new drum the press doesn't have; express new meaning with a mark, a flood or an overprint instead.

**The Ink-on-Pink Rule.** Text on a pink flood is ink (#1D2340) or overprint navy; numerals on paper use pink-deep, never flat pink.

**The Overprint Rule.** Where blue sits on pink it uses `mix-blend-mode: multiply` (masthead numeral, favicon letter) or the precomputed overprint navy; never an arbitrary purple.

## Typography

**Display Font:** Archivo variable (wdth 62–125%, wt 100–900), fallback Arial Narrow
**Body Font:** Literata (roman and italic), fallback Georgia
**Label/Mono Font:** JetBrains Mono, fallback ui-monospace

All three are self-hosted woff2 under OFL in `assets/fonts/`; Archivo and Literata are preloaded.

**Character:** Archivo's width axis does the poster work: stretched wide (106–118%) for titles and headings, squeezed condensed (70–75%) for numerals. Literata keeps the reading column bookish and calm; JetBrains Mono carries every label, count and date like press marks.

### Hierarchy
- **Display** (900, clamp 44–96px, 0.86, wdth 118): the masthead title only; 38px under 640px.
- **Numeral** (900, 44px item / 34px archive / 26px margin ref, wdth 70–75, tabular): item and issue numbers. The masthead numeral is the same face at clamp(150px, 21vw, 300px), wdth 72.
- **Headline** (800, clamp 32–50px, 1.06, wdth 106, balanced): one h1 per page.
- **Section** (900, clamp 22–27px, uppercase, wdth 112, blue-text): insight sections, "Items", "All issues", about-page h2s.
- **Title** (650–700, 18–20px): entry, item, suggestion and archive titles; topic heads are 800 16px uppercase on blue.
- **Body** (400, 17.5px, 1.62; 17px under 640px): reading column, capped at 64–68ch. Lede is 19.5px.
- **Label** (mono 700, 11.5px, 0.14em, uppercase): aside and rail headings. **Meta** (mono 500, 12–12.5px): source, type, date, counts.

### Named Rules
**The Width-Axis Rule.** Hierarchy comes from Archivo's width and weight, not from more families: wide for words, condensed for numbers.

**The Tabular Rule.** Every number that can sit in a column (items, issues, counts, citations) uses `font-variant-numeric: tabular-nums`.

## Layout

Max width 1440px, side gutter clamp(20px, 4vw, 56px). Issue pages run three columns: a 210px contents rail (sticky), then rows of a 680px reading column beside a margin column (min 220px, sticky, 1px blue left rule). Each row opens with a 2px ink rule and 34px top padding; the lead row has none.

The items list hangs its numbers in an 88px margin: numbers right-aligned in a 68px box, content indented 88px, topic floods indented to align with content. Home and About reuse the same `row` / `col` / `margin` grid without the rail.

Breakpoints: at 1180px the rail becomes a folded horizontal contents strip between 2px rules; at 900px the margin column drops under the column with a top blue rule; at 640px the masthead numeral shrinks to 60px top-right, item numbers sit inline above titles, and the hang collapses to 0.

## Elevation & Depth

Flat. Depth is ink layering: floods behind content, and multiply where the two inks overlap. The only shadow is the masthead title's misregistration offset (`text-shadow: 2px 1px 0 rgba(0,120,191,.38)`), a printing artifact rather than elevation, which settles from a larger offset once at load. There is no grain or texture.

### Named Rules
**The Flat Press Rule.** Nothing floats. No box-shadows, no blur; separate things with rules, floods and space.

## Shapes

Square corners throughout (0px): floods, citations, buttons, stamps, tags. The only radius is 2px on inline `code`. Lines are solid: 2px ink for section breaks, 1px hairline between list rows, 1–2.5px blue-text for stamps and tags. The rail marker is a 9px square (outlined, filled pink when current); the findings marker is a small pink square.

## Components

### Masthead
Pink flood, title in overprint navy (Display) with its misregistration settle, mono uppercase nav top right (ink, 2px underline for hover and current page). On issue pages and home only, the issue numeral is set huge in blue with multiply at the bottom-right edge, cropped by the flood. Other pages omit the numeral.

### Issue band
Blue flood directly under the masthead, a `dl` of every fact (digest, issue, period, items and sources, types, topics) in mono 12.5px knockout white, uppercase tracked terms, bold values. Dense on purpose; it wraps rather than truncates.

### Citation
Inline pink ink block with the item number in mono 700 ink, square, tabular, linking to `#item-n`. Hover turns it overprint navy with white numerals. Use it for every reference to an item, in insights and prose alike.

### Item
Hanging pink-deep numeral, Archivo title linking to the original with a small inline-SVG external arrow, mono blue-text meta line, Literata summary, pink-square findings list, "Why it matters" with a mono uppercase lead-in. On `:target` it gets a pink-wash gradient and a pink registration mark (crosshair circle, multiply) that stamps in with a scale-and-rotate settle.

### Margin column
Mono label heading, then either a source tally (name and blue-text count between hairlines) or cited references (condensed pink-deep number, Archivo title, mono meta).

### Buttons and links
- **Read button:** blue flood, knockout white Archivo 800 uppercase, square, 13px 18px; hover swaps to pink with ink text and nudges the arrow 4px.
- **Links:** inherit color with a 1.5px pink underline that thickens to 3px on hover; title links show no underline until hover.
- **Focus:** 3px solid blue outline, 2px offset, everywhere.

### Printed states
- **Stamp:** blue-text 2.5px border, mono 800 uppercase, rotated -1.5deg. For "no insights" and "nothing new".
- **Struck line:** mono soft-ink text with a 3px pink line-through. For "N more items not shown".
- **Registration mark:** the :target state above.

### Navigation aids
Contents rail (sticky, current section marked by script with `aria-current="location"`), pager (previous / all issues / next between 2px rules), archive rows (pink-deep numeral, mono dates, Archivo title, count; pink-wash hover).

### Footer
The back cover: pink flood, overprint navy name, plain-language machine-made disclaimer, mono uppercase nav.

## Do's and Don'ts

### Do:
- **Do** take every color from the `:root` tokens; pink and blue are the only inks.
- **Do** set numerals on paper in pink-deep (#E0137E) and small blue text in blue-text (#00639F).
- **Do** express states as printed marks (stamp, strike, registration mark) rather than new colors.
- **Do** open new sections with a 2px ink rule and an uppercase Archivo section heading in blue-text.
- **Do** keep the reading column at 64–68ch in Literata, and floods outside it.
- **Do** wrap any new motion in the existing reduced-motion override.

### Don't:
- **Don't** add a third chromatic color, gradients beyond the pink-wash target fade, or a grain texture.
- **Don't** set flat pink text or numerals on paper, or white text on pink.
- **Don't** round corners or add drop shadows.
- **Don't** animate the reading column beyond short hover transitions (0.15–0.2s) and the registration mark.
- **Don't** hide citations or source links; every item number and source stays visible and linked.
