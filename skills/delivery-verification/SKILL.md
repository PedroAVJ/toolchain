---
name: delivery-verification
description: Gate merge, release, deployment, and shipped status on exercising every materially changed behavior through its real user or system entry point on an appropriate controllable target surface. Use for separately authorized implementation, review, or shipping whenever observable runtime behavior changes.
---

# Delivery Verification

Treat target-surface verification as a release gate for separately authorized
implementation, review, and shipping. This contract constrains those actions; it
does not authorize source changes, merging, deployment, device access, or any
other external mutation by itself.

Apply this skill whenever a change can alter behavior observed through a user
interface, operating-system surface, extension, integration, API, command, job,
or other runtime entry point. Apply it before implementation scope is settled,
keep the gate open through the final candidate, and close it before merge or
deployment.

## Define the target paths before changing source

For every materially changed behavior, write down:

1. The real entry point a user, operating system, or external caller invokes.
2. The runtime path from that entry point to the expected observable outcome,
   including lifecycle transitions involved in the change or regression.
3. The closest appropriate controllable target surface: for example an iOS
   Simulator, Android emulator, supported browser, local service boundary,
   sandbox, or staging environment.
4. The exact final candidate identity that will be tested, such as its commit
   SHA, build number, artifact digest, or deployment identifier.

If an appropriate target surface is available or can be created safely, using
it is mandatory. Create a task-owned target when a pre-existing target belongs
to the user or another task. Do not skip a reachable system-owned surface merely
because a unit-test API or direct internal invocation is easier.

## Exercise the actual entry point

Install or deploy the final candidate on the selected target, then operate the
same entry point and transition sequence that the changed behavior uses in
production. For system-owned UI, interact with the actual system surface and
observe the product's downstream behavior. For an integration, cross the real
boundary in an authorized sandbox or staging environment rather than calling
the receiving function directly.

The following are useful supporting checks but do **not** satisfy target-surface
verification by themselves:

- compilation, linting, type checking, static or structural inspection;
- unit, snapshot, integration, or contract tests that bypass the real entry
  point;
- mocks, fixtures, previews, direct function calls, or direct intent calls;
- CI success, code review, screenshots of an unexercised state, provider
  submission, or store processing;
- launching the app without completing the exact changed interaction.

Test failure includes silence, a stranded transition, an unexpected detour, or
an outcome that cannot be observed. Fix the candidate and repeat the complete
target path after the final code change; evidence from an earlier candidate
does not carry forward.

## Keep Expo OTA deployment separate from native delivery

For an Expo iOS product that uses fingerprint runtime versions, EAS Update and
the signed native binary are two independent release stages:

1. Let the repository's declared CI or deployment command publish the
   production EAS Update. Do not gate OTA publication on whether Expo already
   has a binary with the same fingerprint. The runtime fingerprint limits the
   update to compatible binaries; when the runtime is new, the published update
   is provider-staged until a matching binary exists.
2. After the source and update deployment, compute the production fingerprint
   from that exact deployed commit and query Expo's finished binary inventory
   read-only. A matching binary closes the native-build decision without
   compiling another one.
3. When no compatible binary exists, compile exactly one signed IPA directly on
   the user's operator-owned Mac with `eas build --local`. Use Expo for managed
   signing credentials, submit the resulting local path with EAS Submit, and
   register the submitted IPA and fingerprint with `eas upload`.

CI may validate and publish OTA updates, but it must not compile or submit the
native binary. Do not introduce a self-hosted GitHub runner or substitute an EAS
cloud build unless the user explicitly requests that different infrastructure.
Never cancel, retry, replace, or otherwise mutate an EAS build or submission
that the current task did not create, even if it appears related.

Record these boundaries separately: source merge, OTA publication and runtime,
local IPA identity, TestFlight submission and Apple processing, and physical
device acceptance. An OTA published for a new runtime is not user-reachable
proof, and a submitted binary is not physical-device acceptance.

## Record auditable evidence

For each changed path, retain a compact record containing:

- final candidate SHA and build, artifact, or deployment identity;
- target type, runtime version, and task-owned target identifier;
- exact entry point and interaction sequence;
- expected observable outcome and actual observed outcome;
- pass or fail, plus the relevant screenshot, video, or bounded log when it
  materially helps another person verify the result.

Supporting automated suites still run according to the repository's own
instructions. They complement this evidence; they never replace it.

## Enforce the release boundary

Do not merge or deploy a behavior-changing candidate until every required
target-surface path passes. If the exact path cannot be exercised because the
target, credential, permission, system UI, or dependency is unavailable, stop
and report the precise blocker. Do not waive the gate, substitute a lower-level
test, or describe the result as shipped.

Keep these states distinct:

- **Implemented** means the source change exists.
- **Supporting checks passed** means compilation and automated suites passed.
- **Target-surface verified** means the final candidate passed every changed
  path through its real entry point on the named target.
- **Released** means the verified candidate reached its requested distribution
  or production boundary.
- **Shipped** means both target-surface verification and the requested release
  boundary are complete and independently confirmed.

A simulator or emulator verifies only the behavior available on that target.
Physical-device acceptance remains a separate claim for hardware-specific
behavior. That distinction never excuses skipping a feasible simulator,
emulator, browser, sandbox, or staging test before release.
