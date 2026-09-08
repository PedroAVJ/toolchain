---
name: specification
description: Specify product or software requirements as authored briefs, adding Product Design and system or conceptual data views when they clarify consequential behavior without implementing production code.
---

# Requirements Specification

Develop the product and software detail needed to make the grounded agreement
actionable. Use `toolchain:brief` and its
[requirements-library contract](../brief/references/requirements-library.md).
Product briefs describe capabilities and user-visible variations; software
briefs describe systems, modules, technical constraints, and how they realize
those capabilities. Preserve the many-to-many relationships, shared behavior,
tenant-specific applicability, and real deployments or forks. Do not collapse
these questions into a screen design or an implementation backlog.

Read the applicable upstream brief revisions, current product and repository,
source references, and settled decisions. Account for every settled requirement,
including nonvisual and backend behavior. Keep unresolved material meaning
beside its clause. A requested software brief is itself an authored artifact;
do not force a separate `specification.md` or design prototype for every change.

Use the installed Product Design plugin as the primary visual specification
workflow when product interactions, appearance, or experience need design, or
when the user requests that workflow. Give it the settled requirements and
applicable source and repository context. The completed Product Design outcome
and any applicable system and data views supplement the same requirements;
they do not silently replace or rewrite an accepted brief. For an explicitly
requested design-only specification, that completed outcome is the specification.

When these design artifacts are needed, use an iterative, approval-gated sequence
of artifact checkpoints:

1. Present the completed Product Design outcome when applicable and stop for the
   user's review.
2. After Product Design is approved or found inapplicable, present the architecture view when it is
   applicable, then stop for review.
3. After the architecture view is approved or found inapplicable, present the
   conceptual entity-relationship view when it is applicable, then stop for
   review.

Present only the current checkpoint. Do not preview, generate, or bundle a
later artifact while the current one is unresolved, even when all inputs are
already settled. If the user requests changes, revise and re-present only that
checkpoint. Continue after the user explicitly approves that checkpoint, including an
approval already given in the current request; do not demand it twice. When a conditional
view is not applicable, omit it and move to the next applicable checkpoint.
After the last applicable artifact is approved, perform the completion check;
if it exposes a material gap, reopen the affected checkpoint instead of adding
a separate specification section.

Treat every settled requirement, including nonvisual and backend behavior, as a
hard constraint in the Product Design brief. Let Product Design route among its
own workflows and determine which design artifacts are useful. Keep implementation planning downstream and separately authorized. Resolve cheap, reversible product details
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
needed but unavailable in the current client, report that boundary instead of
silently substituting a different visual workflow. It does not block independent
requirements drafting that is already authorized.

When an upstream brief changes, assess affected software requirements and design
views at the relevant applicability. Record whether each remains valid or needs
revision before advancing its internal dependency revision. Reopen only affected
checkpoints and sign-offs. A requirements revision is not a software deployment.
