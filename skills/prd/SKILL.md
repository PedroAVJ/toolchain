---
name: prd
description: Use when settled stakeholder evidence or analyzed requirements must become a concise, business-facing Product Requirements Document before detailed specification or implementation.
---

# Product Requirements Document

Create the agreement artifact between requirements analysis and detailed
specification. The artifact is named a **Product Requirements Document (PRD)**,
but its content is deliberately lean and business-facing: it states the
business problem, desired outcomes, required capabilities, boundary, operating
conditions, and decisions needed for approval. It is not a technical product
specification, design brief, architecture plan, or implementation backlog.

Use this skill after `toolchain:analysis` when the available evidence is mature
enough to propose a coherent product boundary. A PRD may expose decisions that
must be resolved before `toolchain:specification`; it does not need to pretend
that every point is already settled.

## Inputs And Grounding

Read the complete elicited evidence, `requirements.md`, `action-items.md`, the
current product state when relevant, and any stakeholder decisions already made
in the conversation.

- Ground every business requirement in those sources.
- Preserve stakeholder hedges, exceptions, and scope boundaries.
- Consolidate duplicates without erasing distinct behavior.
- Do not convert a one-time action item into a durable requirement.
- Do not resolve conflicts by guessing. Put a material unresolved choice in the
  sixth section with its owner or needed approver.
- Do not invent metrics, priorities, dates, owners, policies, or acceptance.

## Artifact Contract

Use the title **Product Requirements Document** together with the product name.
The six top-level sections must appear in this exact order and no other
top-level section may be added:

1. **Problem**
2. **Objectives**
3. **Business Requirements**
4. **Scope**
5. **Constraints and Assumptions**
6. **Open Decisions and Sign-off**

A short title block or metadata line may precede the sections. Nested labels
such as **In scope** and **Out of scope** may be used inside Scope when they make
the boundary easier to review.

Target one readily reviewable page when the evidence fits. Do not omit a real
requirement merely to meet a page count; concise multi-page PRDs are acceptable
when the business scope genuinely requires them.

### 1. Problem

State the current business situation, affected users, and material consequence.
Describe the problem without prescribing a screen, service, data model, or
implementation.

### 2. Objectives

List the business outcomes the product must enable. Use observable language.
Include a quantitative target only when the evidence supplies one.

### 3. Business Requirements

Write concise, durable statements of what the business needs to remain true.
Use stable identifiers such as `BR-01` when they help review and traceability.
Keep requirements independent of visual layout, frameworks, jobs, storage,
schemas, and other implementation mechanisms unless a mechanism is itself a
settled business constraint.

### 4. Scope

State both the included product responsibility and the excluded adjacent
responsibility. Do not let contextual data ownership silently expand into
ownership of the upstream or downstream workflow.

### 5. Constraints And Assumptions

Record fixed operating conditions separately from assumptions that still need
validation. Preserve uncertainty rather than presenting an assumption as fact.

### 6. Open Decisions And Sign-off

List only decisions that materially affect the product boundary or a business
requirement. Name the decision owner or required approver when the evidence does
so. Include a compact approval record when the PRD is meant for stakeholder
agreement. Never mark the PRD approved without exact stakeholder evidence.

## Output Surface

Create the PRD in the collaboration surface the user requested. When he requests a
Word document or native Google Doc, compose the installed document-owning
capability and follow its authoring, import, sharing, and visual-verification
contract. When he requests a repository artifact and a writable evidence bundle
exists, write `prd.md` beside the evidence. Do not create duplicate canonical
copies on unrequested surfaces.

## Review Gate And Boundary

Before presenting the PRD, check that all six sections are present in order,
every requirement is evidence-backed, scope includes explicit exclusions, and
unsettled material choices remain visible. Also check that implementation
details, architecture, UI prescriptions, task tracking, and ordinary coding
acceptance criteria have not leaked into the document.

Present the PRD for the user's or the authoritative stakeholder's review. A draft
PRD does not authorize implementation, issue creation, task dispatch, tests,
merge, release, deployment, or changes to source communications. After the PRD
is accepted, use `toolchain:specification` only when detailed product, system,
or data design is actually needed.
