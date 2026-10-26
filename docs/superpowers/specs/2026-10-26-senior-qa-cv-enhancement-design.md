# Design: Senior QA CV Text Enhancement

- **Date:** 2026-10-26
- **Topic:** senior-qa-cv-text-enhancement
- **Type:** Small change

## Intent and why

The portfolio CV (`cv.tmubarok.my.id`) currently presents experience in task-oriented
language, e.g. "Coordinated release planning and helped teams deliver features on
schedule."

For a Senior Recruitment Consultant, senior profiles are expected to communicate
ownership, scope, and outcome — not coordination tasks. The human partner wants the
current text enhanced to meet that bar, while staying strictly truthful.

## Goals / Non-goals / Anti-goals

- **Goals:**
  - Rewrite work-experience bullets into outcome language grounded only in facts
    already present in the source text.
  - Sharpen headline and summary positioning around a **Senior QA** target persona.
- **Non-goals:** no new metrics, employers, roles, or skills; no layout/section redesign.
- **Anti-goals:** inventing achievements, inflating seniority, or adding unverified claims.

## Constraints

- Source-only edits: `src/component/`, `src/scripts/app.js`, `src/index.html` meta/JSON-LD.
- Never touch `dist/`.
- English and Indonesian translations must be updated together (components + `textTranslations`).

## Approaches considered

1. **Impact-first rewrite of existing text (chosen).** Strengthen verbs and outcome
   framing using only what the text already implies; no invented facts.
2. Minimal wording polish (rejected) — would not move the CV to the senior bar.

## Decisions made with the human partner

- Target persona: **Senior QA**.
- Approach: **A — impact-first rewrite of existing text only, no invented facts.**

## Parts of the how (decided)

- Rewrite bullets per role, keeping the existing structure (role → bullets → optional
  project card).

## What's left to the builder

- Apply rewrites in components + translations; verify with formatter and production build.
- Pending human approval of this design doc.
