---
name: validation
description: Prepare and reconcile direct stakeholder review of requirements, recording evidenced document-level outcomes and affected pending sign-offs against internal revisions and applicability.
---

# Requirements Validation

Validate that the requirements express what the authoritative stakeholders need.
Use `toolchain:brief` and its
[requirements-library contract](../brief/references/requirements-library.md).
Read the canonical briefs, relevant evidence, applicable upstream revisions,
existing review records, and any specification views. Legacy `requirements.md`,
`action-items.md`, or `specification.md` remain valid inputs when they exist;
do not require creating them beside every brief.

## Prepare direct review

Identify the actual stakeholders and their organizations or roles from evidence.
Do not default every review to one boss, transfer authority between initiatives,
or infer one tenant's acceptance from another's. Keep the stakeholder roster
separate from tags identifying whose sign-off is needed. When requirements
change, assess effects on agreements and update the affected stakeholders' tags.

Use the user's established direct conversations. If a meeting agenda is
requested or useful for a requested meeting preparation, create the smallest
useful `validation-agenda.md` or native equivalent with:

1. Purpose and boundary.
2. Requirements and consequential specification choices to review.
3. One-time obligations whose ownership or timing needs confirmation.
4. Material conflicts, assumptions, and open questions.
5. Space to accept, change, defer, or reject, with any exceptions and owners.

Do not require an agenda for ordinary conversational review or add review
scaffolding to the stakeholder brief. Keep version identifiers, dependency
mechanics, source registries, and detailed review records internal. Do not
introduce clause voting, automated review requests, calculated clause-approval
states, or approval inferred from reactions or resolved discussion threads.

## Record and reconcile outcomes

Record feedback, overall sign-off, exceptions, and deferrals against the internal
revision and applicability actually reviewed. Use exact stakeholder evidence or
the user's direct decision within their authority. Never mark another person
approved by inference. Clear a pending tag only when an evidenced response
resolves that review; unresolved objections and deferrals remain accurately
represented. Preserve simple document-level status and detailed internal outcomes.

The resulting conversation, call, or messages are new source evidence. Let the
owning source plugin preserve and process it, then return to `toolchain:elicitation`,
`toolchain:analysis`, or `toolchain:specification` only for affected stages. Keep
original evidence in its source system and register useful references only.
Update the brief, its internal snapshot and dependency assessment, and affected
sign-offs when the authorized agreement changes. Preserve accepted bodies during
metadata-only reorganization.

Validation does not schedule meetings, send invitations or messages, impersonate
the user, implement a plan, or invent approval. A separately authorized action
remains authorized across stage boundaries; do not request it again merely
because this skill was applied.
