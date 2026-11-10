## Scope

The digest site: the issue page (one digest) and the home page (latest issue +
archive grouped by digest), plus a short About page. Mode: Read.

## Audience and job

The owner, public readers following AI/software research, and people
evaluating ResearchHub. Job: get the week in minutes, follow any [n] to the item
and its original source, find past issues by digest and date.

## Direction contract

THESIS: Each digest is a numbered two-ink risograph bulletin; the citations are
printed in the second ink. Refuses the newsletter-archive default (white page,
one column, list of posts) and the editorial-hairline journal look.

OWN-WORLD: Fluorescent pink #FF48B0 and riso blue #0078BF as the only two inks,
overprinting (multiply) to purple where they meet; bright bond ground #F6F6F1;
ink #1D2340 for text. Riso grain only in ink floods. Archivo (wide, black) for
the masthead and openers, Literata for the reading column, JetBrains Mono for
labels, counts and [n] marks. Raised from orizuru: item numbers sit in a strict
margin column, each [n] has a fixed address. Raised from obi: one dense blue
issue band carries every fact (digest, dates, counts, types, topics) against the
calm column. Raised from seedbed: the masthead is one ink at full flood. Raised
from bench: states are printed marks (a stamp for "no insights", a struck mark
for items not shown), not hues.

STORY: The reader sees which issue this is and what the week was about in one
look, reads the overview and insights, taps any [n] to land on the item with
its source, and can move to the previous issue or the archive.

FIRST VIEWPORT: Pink flood masthead with "ResearchHub Digest" knocked out in
paper and the issue number huge in blue overprint at right; nav top right. Under
it the blue issue band. Then three columns: contents rail (230px, current
section marked in pink), the reading column (680px: headline, overview, first
insight section), and the margin column listing the items cited nearby with
their numbers in pink overprint.

FORM: Riso small-press bulletin, list position 7 of 7. seed:2c9107e7d42524af

Signature interaction: clicking an [n] scrolls to the item and prints a pink
registration mark beside it (target highlight); the margin column follows the
section being read. Motion: a single slight misregistration settle on the
masthead at load, none in the column; reduced motion disables it.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Constraints

Static Jekyll on GitHub Pages, no plugins outside the whitelist, no JS
dependency for reading (small progressive enhancement only). Content is
machine-generated summaries: always attribute and link the original. No
private data (local UI address, approve/reject commands).

## Unresolved

Site feed (RSS), per-topic pages, search.
