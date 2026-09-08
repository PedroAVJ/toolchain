---
name: engineering-invariants
description: "Enforce the user's standing production engineering invariant during authorized implementation, review, and shipping of apps and services: privacy-conscious structured Sentry Logs operational observability, verified end to end."
---

# Engineering Invariants

Apply these as standing constraints on production engineering work. They do not
come from stakeholder evidence and are not product requirements. Never add them
to business, product, or software briefs, `requirements.md`, `action-items.md`,
a Product Design specification, or a validation agenda, and never ask a
stakeholder to approve them. Implementation briefs may reference the applicable
engineering gate as a delivery constraint without presenting it as stakeholder
intent.

This skill does not authorize implementation, provider changes, release, or
deployment. Once the user has separately authorized implementation or shipping of
a production product, satisfying the applicable invariants is part of that work,
not an optional follow-up or a new product decision.

Apply the audit to production applications and services, including the affected
runtime as a whole when a task changes product behavior. Skip pure requirements
artifacts, documentation-only changes, local experiments, test fixtures, and
plugin-only, skill-only, or developer-only tooling that does not ship a production
runtime. A repository that bundles a plugin with an app or service is not exempt.

## Sentry operational observability

Every production application and service must use Sentry for operational
diagnostics. Error events and tracing remain useful, but they do not satisfy this
invariant by themselves: structured Sentry Logs must be explicitly enabled and
used. `captureException` and `captureMessage` do not create Sentry Logs.

Use the installed Sentry plugin when available for platform-specific setup,
instrumentation, querying, and verification. Its absence does not waive the
invariant; use the project's established SDK integration and authoritative Sentry
guidance, then report the missing helper capability.

Instrument a small set of privacy-safe, structured, trace-connected logs that let
an engineer reconstruct the last known operational state without reproducing the
incident. Cover the material points that exist in the changed runtime:

- meaningful state transitions and terminal outcomes;
- runtime routing or policy decisions that change behavior;
- retries, recovery, cancellation, timeout, and fallback decisions;
- external dependency attempts and sanitized outcomes; and
- summaries of multi-step or asynchronous operations.

Use stable event names and attributes across the product. Include useful release,
environment, trace, attempt, outcome, and state context when available. Capture
unhandled failures as Sentry errors, timing and call structure as spans, and numeric
current-state snapshots as metrics rather than forcing every signal into a log.

Never log credentials, tokens, raw request or response bodies, message or transcript
text, audio, clipboard contents, filenames, device identifiers, or other personal
content. Prefer opaque internal identifiers and coarse operational categories.

Exercise a real code path that emits each material new or changed log, then query
the Sentry **Logs** dataset in the correct project, environment, release, and time
window. Checking Issues or Events is not log verification. When the task ships the
product, confirm the deployed runtime emits the expected logs and that their fields
are sufficient to understand the transition and outcome.

## Completion gate

Before declaring authorized production shipping complete:

1. Report Sentry Logs as enabled, materially instrumented, and live-verified in the
   Logs dataset.
2. Name the provider project/environment and the real paths exercised without
   exposing tokens or sensitive payloads.
3. Report the privacy checks and any deliberately disabled automatic collection.

If provider access, credentials, deployment, or live ingestion prevents
verification, preserve the implementation and report the exact blocker.
Do not silently defer the invariant or call the production release fully accepted.
