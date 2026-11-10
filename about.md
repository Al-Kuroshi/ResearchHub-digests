---
layout: page
title: About
permalink: /about/
description: What ResearchHub Digest is, how each issue is made, and what to trust in it.
---

ResearchHub Digest is the public archive of the weekly digests made by
[ResearchHub]({{ site.project_url }}), a self-hosted research aggregator.

## How an issue is made

1. **Collected.** Every day ResearchHub checks the blogs (RSS), GitHub
   repositories (their releases) and YouTube channels it follows for anything
   new.
2. **Summarised.** Each new item is read once, in full (the article, the
   release notes, or the video's captions or a local transcription), and a
   language model writes a summary, key findings and why it matters. Only the
   summary is kept; the original stays where it was published.
3. **Compared.** Once a week the model reads all the summaries together and
   writes the issue's overview and insights: common themes, connections,
   emerging technologies, contradictions and important developments.
4. **Published.** The issue is posted to Discord and here.

## Reading an issue

Items are numbered. A pink number like <a class="cite" href="#">3</a> in an
insight points to item 3 further down the page, and every item's title links
to the original post, release or video. When an insight matters to you, read
the original: the summaries and insights are machine-written and can be
incomplete or wrong.

There can be several digests, each covering its own sources or topics. The
[issues page]({{ '/' | relative_url }}#archive) lists every issue by digest.

## The project

ResearchHub is open source under the AGPL-3.0 license:
[{{ site.project_url | remove: "https://" }}]({{ site.project_url }}). It runs
on a small home server, uses free models through OpenRouter, and keeps only
summaries, embeddings and links, never full articles or transcripts.

ResearchHub Digest isn't affiliated with the sources it summarises.
