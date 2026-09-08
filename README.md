# Toolchain

the user's requirements workflow and repository-work guardrail. It turns grounded
stakeholder evidence into requirements, action items, a business-facing Product
Requirements Document, a Product Design specification
with applicable system and data views, and a human-validation
agenda without turning those artifacts into implementation authorization. For
separately authorized production work, it also enforces the user's Sentry Logs
observability invariant and gates delivery on running
the final candidate through every changed real entry point on an appropriate
target surface. It creates temporary
remote-backed clones, keeps disposable task output inside those clones whenever
possible, owns every task-spawned process through verified shutdown, and removes
the complete task footprint after the work is safely published. It also owns the
standing eligibility rules for storage and memory cleanup recommendations.

## Skills

- `elicitation` obtains complete, attributable evidence by composing the
  plugin that owns its source.
- `analysis` writes `requirements.md` and `action-items.md`, then iterates with
  the user over conflicts, ambiguity, and questionable readings.
- `prd` turns settled evidence into a concise Product Requirements Document
  with six fixed business-facing sections: Problem, Objectives, Business
  Requirements, Scope, Constraints and Assumptions, and Open Decisions and
  Sign-off. It preserves open decisions and excludes detailed design and
  implementation mechanics.
- `specification` composes Product Design over settled requirements, then adds
  architecture or conceptual entity-relationship views only when the proposed
  change materially benefits from them, presenting one approval-gated artifact
  checkpoint at a time; that completed outcome is the specification.
- `validation` prepares `validation-agenda.md` for a boss or other authoritative
  stakeholder and routes resulting evidence back through the workflow.
- `engineering-invariants` audits and enforces privacy-conscious structured Sentry
  Logs operational observability during separately
  authorized implementation, review, and shipping. These are standing engineering
  constraints, not stakeholder requirements or specification content.
- `delivery-verification` requires the final candidate to pass every materially
  changed path through its actual user, system, integration, or runtime entry
  point on a named controllable target before merge, deployment, or shipped
  status. Compilation, automated tests, CI, direct internal calls, and provider
  submission are supporting evidence, not substitutes. For fingerprinted Expo
  iOS products, it also keeps OTA publication independent from the
  post-deployment native decision: CI publishes the update, while a missing
  compatible fingerprint is built once on the user's Mac with `eas build --local`
  and the local IPA is submitted through Expo.
- `resource-hygiene` decides whether measured storage or running processes may
  be recommended for cleanup. It excludes active worktrees and their generated
  output, caches, intended workloads, and insignificant processes; exact
  authorized disposal is permanent and direct.
- `isolate-repository-work` treats the remote default branch as canonical,
  creates an independent task-specific clone before any repository write, and
  never requires a permanent `~/Developer` checkout. After the requested
  shipping boundary is verified, it removes each clean clone whose exact `HEAD`
  is safely reachable on the authoritative remote plus every disposable
  external artifact and process the task had to create. Named browser sessions,
  servers, watchers, daemons, and workers receive explicit ownership and bounded
  lifetimes; exact-session graceful shutdown and process-tree absence are
  verified without touching pre-existing user work. Build output, compiler
  scratch, logs, diagnostics, and temporary copies stay under the clone by
  default so clone cleanup removes them together, while uncertain or
  unpublished local state is preserved. Ignored repository environments are
  materialized from Vercel, Expo EAS, Azure, or another owning provider only
  inside the active task clone.

## Source Ownership

This plugin does not read application stores or implement source-specific
capture mechanics. WhatsApp owns WhatsApp exchanges and media, Gmail owns email
messages and attachments, Notes owns Apple call recordings, and Voice Memos
owns Voice Memo identity, audio, transcription, provenance, and event state.
Supplied Zoom artifacts are handled by the installed document or media
capability that owns their format. Elicitation composes those capabilities and
checks that their evidence is ready for analysis.

Sentry owns its platform-specific SDK, Logs dataset, and verification mechanics.
Toolchain owns the non-optional engineering gate and composes those mechanisms.
Each product and platform owns its runnable target surface. Toolchain owns the
non-optional exact-entry-point delivery gate and the evidence required to close
it; physical-device acceptance remains a separate claim when hardware behavior
is involved.
MacBook owns live macOS pressure, process, and APFS measurement. Toolchain owns
the cleanup eligibility decision over those measurements.

## Boundary

Toolchain owns understanding, agreement, repository isolation, resource hygiene,
target-surface delivery verification, and the user's standing production
engineering invariants. It does not authorize
issue tracking, task creation, coding-agent dispatch, implementation, tests,
code review, merging, release, or deployment. A specification remains design
work until the user separately authorizes implementation. Isolated Product Design
artifacts and prototypes remain specification work rather than product
implementation. Repository isolation, delivery verification, and engineering
invariants constrain separately authorized work; they never authorize that work
by themselves.
