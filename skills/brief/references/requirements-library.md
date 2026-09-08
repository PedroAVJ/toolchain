# Requirements library

Use this contract when briefs express requirements. Scale it to the user's
request: authoring one brief does not authorize constructing a library, adding
repositories, changing permissions, contacting stakeholders, or implementing
software. Preserve explicit decisions and existing accepted content.

## Authored source and distinct questions

Treat requirements as maintained natural-language source that people can read,
revise, and accept and that agents can use to build and verify behavior. Plugins
hold reusable general knowledge; each brief expresses the particular domain,
intent, and agreements in scope. Record what is intended, not a transcription
of every implementation detail or a claim that every existing behavior is valid.

Keep these questions distinct while using the same brief format:

| Brief | Question it answers |
| --- | --- |
| Business | What does this initiative need to achieve, why, and under which business conditions? |
| Product | What capability must people have, for whom, and how does its behavior vary? |
| Software | What must the systems or modules do to realize those capabilities under the technical constraints? |
| Implementation | What concrete, separately authorized change will deliver the settled requirements, and how will it be verified? |

A business initiative may involve one or multiple organizations and their
respective stakeholders. Do not assume an initiative, organization, tenant,
product, system, and deployment are the same unit. Business requirements can
evolve within an existing initiative.

A capability may support several initiatives. Describe tenant-, role-, or
user-specific variations where they affect behavior. State who may customize
what when required, leaving its technical mechanism to software requirements.
Extract shared requirements when demonstrated reuse warrants it; do not erase a
validated local agreement to manufacture a general one.

Software may be shared, tenant-specific, separately deployed, or forked. A system
can implement several capabilities and a capability can require several systems.
Another tenant using the same system does not automatically need another brief.
Preserve real applicability and boundaries instead of imposing one organization
per document or one product per system. Existing code is evidence of current
behavior; accepting it as intended behavior requires a supported decision.

Implementation briefs are downstream plans, not business requirements or a new
authorization. They may name code, migration, test, and deployment details when
the requested work needs them. Keep ordinary implementation tasks separate from
one-time obligations explicitly assigned to stakeholders.

## One record and useful navigation

Give each brief one canonical record and relate it to its applicable initiatives,
capabilities, and systems as a many-to-many dependency graph. Views organize
navigation; they do not duplicate records or establish ownership of every linked
document. Keep product and software requirements discoverable together. Use
tenant views where helpful without forcing all documents beneath tenant pages.

When a Notion library is requested, use native initiative, capability, system,
source-registry, and archive navigation. The Notion capability owns authoring,
relations, snapshots, permissions, and verification mechanics; Toolchain owns
their requirements meaning. Another requested collaboration surface remains valid.
Do not create duplicate canonical copies on unrequested surfaces.

## Elicitation and references

Develop knowledge through direct conversation, source communications, documents,
observations, current software, and technical evidence. Ask consequential
questions, incorporate settled answers, and revise the brief iteratively. Do not
wait for a host planning mode or a fully closed evidence package before drafting
what is already known. Keep uncertain meaning with the affected clause.

Consult and reconcile relevant sources while drafting. Retain useful internal
provenance and meaningful feedback without requiring a source mapping for every
clause or adding visible clause citations. A requirement can originate in an
existing system or another initiative and later be adopted with changes. Do not
invent feedback from a tenant to make that origin appear locally elicited.

The source registry contains references, not elicitation material. Record the
source's existing location and enough dates, participants, versions, access
information, or precise locators to identify it. Original recordings, transcripts,
messages, documents, and repository evidence stay in their owning systems.
Source plugins own retrieval, attribution, synchronization, transcription, and
retention. This workflow does not migrate, duplicate, or manage their originals.

## Internal revisions and dependency review

When Notion authoring with private Git history is requested, preserve portable
snapshots in the appropriate verified private repository. Capture content,
applicability, dependency revisions, useful source references, and review
outcomes together. Link each snapshot to its Notion record internally. Keep the
underlying elicitation material in its source system. Verify the repository's
privacy before committing; public plugin repositories contain generic guidance
and synthetic examples, never a client's briefs or private evidence.

Revision identifiers and change history exist internally to compare meaning,
locate an agreement, and check dependencies. Do not display version numbers,
SemVer categories, release labels, or snapshot mechanics to stakeholders. Assess
changes by their actual effect on agreements, not by a stakeholder-facing
versioning ceremony. A clause's positional number is not its persistent identity.

Product briefs reference the relevant business revisions; software briefs
reference relevant product and technical inputs. When an upstream input changes,
inspect affected downstream briefs within their applicability and record whether
each remains valid or needs revision. Do not silently advance a dependency to the
latest revision, infer acceptance, or treat a requirements revision as a software
deployment. Preserve the previously reviewed relationship until its effect has
been assessed. Reopen only the affected agreement or design checkpoint.

## Stakeholder review

Keep the stakeholder roster separate from tags identifying whose sign-off is
needed. Use the established direct-conversation workflow. Preparing a brief or
review does not authorize sending a message, scheduling a meeting, or creating
automated review requests.

Record feedback, overall sign-off, exceptions, and deferrals against the internal
revision and applicability actually reviewed. Preserve the exact stakeholder
identity and organizational role supported by the evidence. Approval from one
person, organization, or tenant does not imply approval from another, and a
reviewer's involvement in one initiative does not confer authority in another.

When an agreement changes, assess which stakeholders are affected and update
their pending sign-off tags. Clear a tag only after an evidenced response resolves
that review; record rejection, deferral, or exceptions faithfully. Do not label
unresolved feedback accepted. Keep document-level status simple and store the
detailed outcomes internally. Do not introduce clause voting, calculated
clause-approval states, automatic requests, or approval inferred from reactions.

Preserve accepted wording during reorganizations and metadata-only changes.
Future substantive revisions follow the same impact assessment and review process.
The user's direct decision counts where the user has authority; do not demand a
second ceremonial approval for an already authorized action.

## Access, preservation, and completion

Before sharing, inspect content, linked records, and inherited permissions for
disclosure outside the intended audience. Filtered views are not access controls.
Keep internal source references and revision/review records private and separate
from stakeholder content. Grant access only
within the user's authorized scope.

Snapshot records before an authorized reorganization or archival operation, then
preserve canonical identities and history. Do not delete source material or
archive unrelated active work. Verify accepted bodies stayed unchanged when that
was required, relationships resolve to canonical records, applicability survives,
dependency changes were assessed, and pending sign-offs match the evidence.

Verify presentation in the saved destination, including the audience's language,
bold leads, visible subordinate glosses, and semantic icon. Confirm internal
versioning and source records have not leaked into the stakeholder body. Report
the actual work and any unresolved boundary; natural-language source is not proof
that implementation or deployment occurred. Separately authorized production work
still follows the repository's engineering and delivery-verification contracts.
