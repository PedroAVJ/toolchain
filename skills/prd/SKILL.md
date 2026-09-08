---
name: prd
description: Turn grounded requirements into a reviewable product agreement through Brief, retaining the six-section PRD only when that formal artifact is explicitly requested.
---

# Product Requirements Document

This stage turns grounded evidence and analyzed requirements into the product
agreement. Use `toolchain:brief` by default. A product brief describes a capability
and its applicable behavior, linked to relevant business initiatives; it is not
an architecture plan or implementation backlog. Use the
[requirements-library contract](../brief/references/requirements-library.md) to
preserve the business, product, software, and implementation distinctions.

Read relevant evidence, existing requirements and action items, applicable current
product behavior, and settled conversation decisions. Preserve stakeholder
hedges, exceptions, scope, and applicability. Do not turn a one-time action into
a durable requirement or invent metrics, priorities, dates, owners, policies, or
acceptance. Put unresolved meaning beside the affected brief clause and iterate
consequential questions with the user. Do not force a fixed stage sequence when
an existing brief already supplies the needed agreement.

## Explicit formal PRD requests

When the user specifically requests the formal six-section PRD, preserve this
interface with the product name and these sections in order:

1. **Problem**: the business situation, affected people, and consequence.
2. **Objectives**: observable outcomes, using quantitative targets only when
   evidence supplies them.
3. **Business Requirements**: durable business needs independent of implementation
   mechanisms unless a mechanism is a settled constraint.
4. **Scope**: included responsibility and excluded adjacent responsibility.
5. **Constraints and Assumptions**: fixed conditions separated from assumptions
   that still require validation.
6. **Open Decisions and Sign-off**: only material choices and evidenced review
   outcomes, with owners where known.

Target one readily reviewable page when the evidence fits, without dropping real
requirements to meet a page count. A requested formal PRD does not change the
canonical brief format for other work. Do not impose these headings on a brief,
add them as a second mandatory agreement artifact, or rewrite an accepted
document solely to switch formats.

## Surface and review

Use the requested collaboration surface and its owning capability. A requested
repository PRD may be `prd.md`; a Word document or native Google Doc uses the
document-owning capability. Do not duplicate canonical copies on unrequested
surfaces. Keep version identifiers, dependency mechanics, and detailed review
records internal when presenting briefs to stakeholders.

Check evidence, scope, applicability, and visible unresolved meaning before
presenting the agreement. Record only actual stakeholder decisions. Never mark
the PRD approved without exact stakeholder evidence or a direct decision from
the user acting within their authority. Update affected pending sign-off tags
when the agreement changes; do not infer another stakeholder's approval.

A draft PRD does not authorize implementation, issues, task dispatch, tests,
merging, release, deployment, or changes to source communications. Continue
already authorized work without redundant approvals. Use `toolchain:specification`
when product, software, system, or data detail is needed to make the agreement
actionable.
