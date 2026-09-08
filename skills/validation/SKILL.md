---
name: validation
description: Use when requirements or a specification must be reviewed with the user's boss or another authoritative stakeholder through a focused agenda that records agreement, corrections, deferrals, and open decisions.
---

# Requirements Validation

Validate that the analyzed requirements and proposed specification express what
the authoritative stakeholder actually needs. For the current workflow this is
usually a meeting with the user's boss; the participant may be different when
the user names another decision-maker.

## Prepare The Validation Session

Read the canonical evidence, `requirements.md`, `action-items.md`, and
`specification.md` when it exists. Prepare `validation-agenda.md` beside them
with the smallest useful meeting structure:

1. **Purpose and boundary** — what outcome is being validated and what is not
   being decided in this session.
2. **Requirements walkthrough** — the proposed behavior in stakeholder
   language, grouped only when that makes the conversation easier.
3. **Action items and ownership** — one-time obligations whose owner or timing
   needs confirmation.
4. **Conflicts, assumptions, and open questions** — the exact points requiring
   a decision or correction.
5. **Specification choices** — only consequential implementation choices the
   stakeholder can meaningfully validate.
6. **Decision record** — space to accept, change, defer, or reject items and to
   record owners for resulting follow-ups.

Keep the agenda short enough to drive a real conversation. Do not bury the
decision points under repository mechanics, issue IDs, code details, or a full
repetition of the source transcript.

## After Validation

Treat the meeting, call, or messages produced by validation as new source
evidence. Let the owning source plugin preserve and process it, then return to
`toolchain:elicitation`, `toolchain:analysis`, or `toolchain:specification` only
for the stages affected by
the new decisions.

Validation prepares and reconciles the human review; it does not schedule the
meeting, send an invitation or message, impersonate the user, implement the plan,
or mark anything approved without exact stakeholder evidence or the user's direct
decision.
