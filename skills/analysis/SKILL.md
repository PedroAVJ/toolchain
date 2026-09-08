---
name: analysis
description: Interpret grounded evidence into durable requirements and separate owner-attributed action items, iterating consequential questions and corrections into the current brief.
---

# Requirements Analysis

Read the relevant complete bounded evidence, current requirements, and decisions
already made in the conversation. Use `toolchain:brief` and its
[requirements-library contract](../brief/references/requirements-library.md) for
authored requirements. Classify the question as business intent, product
capability, software behavior, or implementation before deciding where a claim
belongs. Preserve applicability across organizations, tenants, roles, and users.

## Requirements and action items

Requirements state durable, repeatable, checkable properties. Preserve meaning,
hedges, exceptions, and scope; consolidate duplicates without erasing distinct
behavior. Do not invent precision, priority, metrics, owners, or acceptance. An
observed mechanism is not automatically an intended requirement. A technical
constraint belongs at the appropriate level when the evidence makes it binding.

Action items are concrete one-time obligations explicitly assigned to a
participant, such as supplying examples, confirming a rule, provisioning an
account, or completing a promised handoff. Preserve the evidenced owner. Do not
transfer someone else's promise onto the user or rephrase setup as a durable
requirement. Coding, technical design, tests, deployment, QA, and ordinary
implementation planning belong to downstream work, not stakeholder action items.

Revise the canonical brief in the requested surface. Do not require a parallel
`requirements.md` or action-item document for every brief. When the user asks for
the standalone two-file analysis, write `requirements.md` and `action-items.md`
beside a writable evidence bundle: use `## Requirements` with an ordered list,
and `## Action Items` with `### Owner` subsections and ordered lists. Keep that
requested extraction concise. Respect an existing accepted artifact format rather
than silently converting it or duplicating its canonical content.

## Conflicts and iteration

Ask only about material conflicts, ambiguity, missing prerequisites, or
questionable readings. Discuss them in this same task and use the available
request-input capability when it improves the exchange; no host planning-mode
toggle is required. Apply settled corrections in place, including splits,
combinations, additions, deletions, and owner corrections, then show the revision.
Keep unresolved meaning beside the affected brief clause. In a requested compact
two-file extraction, discuss it in the conversation rather than inventing a new
section. Do not manufacture questions when the evidence is clear.

Ground drafting in sources without requiring a source mapping for every clause
or visible citations. Keep useful provenance internally and originals with their
source owner. Preserve validated wording during a reorganization unless the user
authorized substantive revision. Assess dependencies and affected sign-offs when
an actual agreement changes.

Analysis alone does not authorize task creation, reminders, messages,
implementation, tests, merging, release, or deployment. Continue stages already
authorized by the user's request; do not manufacture a new approval gate merely
because the work crosses skill boundaries. Never mutate source communications.
