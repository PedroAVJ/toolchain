---
name: analysis
description: Use when complete stakeholder evidence must be understood as straightforward Requirements and owner-grouped Action Items, with material conflicts or ambiguity iterated with the user in the same task.
---

# Requirements Analysis

Read the complete elicited evidence and produce two separate artifacts beside
the evidence when a writable bundle exists:

- `requirements.md` for durable, repeatable, checkable product or operational
  properties; and
- `action-items.md` for concrete one-time obligations explicitly assigned to a
  meeting participant.

Each artifact must contain only its prescribed Markdown heading structure and
lists. Do not add a document title, source or evidence note, preface, summary,
status, conclusion, conflict section, or any other prose outside those headings
and lists. Discuss conflicts and ambiguity with the user in the conversation, not
inside either artifact.

## Requirements

The first line of `requirements.md` must be `## Requirements`, followed only by
a normal Markdown ordered list. Each item is one straightforward sentence
describing what must remain true when the product or operational system is
used.

- Preserve the stakeholder's meaning, hedges, and scope.
- Consolidate duplicates without erasing distinct behavior.
- Do not invent precision, priorities, acceptance criteria, architecture, or
  implementation details.
- Do not turn a one-time setup action or a proposed mechanism into a durable
  requirement merely by rephrasing it.

## Action Items

The first line of `action-items.md` must be `## Action Items`. Follow it only
with one `### Owner` subsection per participant who has at least one assigned
action item, with a normal Markdown ordered list under each owner.

Action items are non-implementation obligations such as providing missing
examples or credentials, confirming a business rule, provisioning a named
account, or completing another explicitly promised handoff. Preserve the owner
from the evidence. Do not move another participant's promise onto the user.

Coding, technical design, tests, deployment, QA, and ordinary implementation
planning are not action items. They belong to the later specification or
implementation workflow.

## Conflicts And Iteration

After drafting the two files, call out only material conflicts, ambiguity,
missing prerequisites, or questionable readings. Discuss those points with
the user in this same task. Apply settled corrections to the files in place,
including splits, combinations, additions, deletions, and owner corrections.

Do not manufacture a conflict section when the evidence is clear. Do not turn
the analysis into a framework, issue list, data model, design document, or
implementation plan.

Analysis does not authorize task creation, reminders, messages, planning,
implementation, testing, merging, release, or deployment. Do not mutate the
source communications.
