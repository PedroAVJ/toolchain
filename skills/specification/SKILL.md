---
name: specification
description: Use when settled requirements must become a product specification through approval-gated Product Design and, when useful, architecture and conceptual entity-relationship checkpoints, grounded in the current product and repository without implementing production code.
---

# Requirements Specification

Use the installed Product Design plugin as the primary specification workflow.
Give it the settled requirements and action items, their source pointers,
applicable product and repository instructions, and the current product. The
completed Product Design outcome together with any applicable system and data
views in the conversation is the specification. Do not create or save a
separate `specification.md` unless the user explicitly asks for a file copy. Before
treating the outcome as complete, explicitly account for every settled
requirement and identify any remaining material decision.

Run the specification as an iterative, approval-gated sequence of artifact
checkpoints:

1. Present the completed Product Design outcome and stop for the user's review.
2. After Product Design is approved, present the architecture view when it is
   applicable, then stop for review.
3. After the architecture view is approved or found inapplicable, present the
   conceptual entity-relationship view when it is applicable, then stop for
   review.

Present only the current checkpoint. Do not preview, generate, or bundle a
later artifact while the current one is unresolved, even when all inputs are
already settled. If the user requests changes, revise and re-present only that
checkpoint. Continue only after he explicitly approves it. When a conditional
view is not applicable, omit it and move to the next applicable checkpoint.
After the last applicable artifact is approved, perform the completion check;
if it exposes a material gap, reopen the affected checkpoint instead of adding
a separate specification section.

Treat every settled requirement, including nonvisual and backend behavior, as a
hard constraint in the Product Design brief. Let Product Design route among its
own workflows and determine which design artifacts are useful. Do not add an
independent technical-planning phase. Resolve cheap, reversible product details
from current truth and ask only about choices that materially change the
outcome.

Add concise system or data views only when they materially clarify the proposed
change:

- Include an architecture diagram when the change adds or alters system
  boundaries, resources, integrations, deployment topology, asynchronous
  behavior, or meaningful data flow.
- Include a conceptual entity-relationship diagram when the change adds or
  alters persistent domain concepts, identity, ownership, cardinality, or
  lifecycle.

Use the installed visualization capability and Mermaid for these static views.
Show the changed or added design and only enough unchanged context to locate it.

Keep an architecture view at the minimum level of detail needed to understand
the proposed boundary or flow. Its presence describes the specification; it
does not mean implementation has started or authorize implementation. Do not
add frameworks, jobs, tables, migration steps, deployment internals, or
operational controls unless they are settled requirements or are necessary to
explain material behavior.

Keep an entity-relationship view conceptual. Use plain domain names that a
stakeholder would recognize, not code symbols, database-table names, columns,
keys, or all-caps or snake-case physical identifiers. Keep one coherent domain
in each view and split unrelated areas rather than combining them. Include only
the essential entities, relationships, and cardinalities; do not turn the view
into a physical table, migration, or implementation plan unless settled
requirements already require that detail.

Omit either diagram when it would not materially improve the specification.
These are views of the same specification, not a separate phase.

Product Design may create its normal isolated design artifacts and prototypes.
It does not authorize edits to product source, issues, external messages,
deployment, or other implementation side effects. If Product Design is
unavailable in the current client, report that boundary instead of silently
substituting another specification workflow.
