---
slug: website-architecture
title: Website Architecture
pubDate: 2025-09-12
description: How is this website built?
tags:
 - website
 - software
 - llm-collaboration
 - ai
---

As a techy, I love to know what frameworks my favourite websites use, so I can consider using them myself. Whilst this is a minimal static site, I thought I'd share some details on how I built it anyway.

---

## How was it built?

### What process was used?

Whilst I could just do-it-all-myself, I've been working on ways to build AI into my default coding workflow.

So I built this site with a collaboration with Copilot, trialling the [Socratic Shell](https://socratic-shell.github.io/socratic-shell/introduction.html) methodology, which I learnt from [Niko Matsakis](https://smallcultfollowing.com/babysteps/blog/2025/07/24/collaborative-ai-prompting/).

As both a senior engineer with a taste for detail, and a technical manager of many years - used to mentoring others and delegating tasks - it can feel frustrating to give up control to a tool which hallucinates and goes off and does silly things without sense checking. I knew I needed to adjust the approach to collaborate more constructively, allowing us both to apply our skills best.

I've been exploring different strategies, and the persona from the Socratic Shell prompts seems to click with me. The prompt seems to result in a more natural interaction, similar to a planning meeting with a peer or senior developer in my team. It gives the agent space to understand, propose, challenge, and plan collaboratively, before rushing off to just do things. There are still bouts of over-confident hallucination, but it seems much less likely to go off on its own, leaving me to clean up the mess.


### What tech stack does it use?

It's a simple static site, built with [Astro](https://astro.build/) and deployed to github pages.

Honestly, using Astro feels great for static site generation.

It feels minimal but it works beautifully. The boilerplate is tiny, the abstractions are clear, the magic is very limited. Markdown and Tailwind feel like first-class citizens. I don't even need a javascript UI framework.

### How did you choose the aesthetic?

Minimalism appeals.

### Why now?

Better late than never! I've been wanting a space to share my projects, thoughts and news with the world for a long time[^to-do]. Now I have a space to do this.

[^to-do]: 7 years, quite a record for a to-do list item

This site is quite minimalistic, but it's better than "Coming Soon..." for 2 years followed by a year of a picture of my face, and link to my github.
