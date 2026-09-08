---
name: elicitation
description: Develop grounded requirements knowledge through iterative conversation, documents, observations, current software, and technical evidence while composing the capability that owns each source.
---

# Requirements Elicitation

Develop the domain knowledge and intended behavior expressed in
`toolchain:brief`. Elicitation is conversational and iterative: ask consequential
questions, incorporate answers, and revise what is known. Use the host's
request-input capability when it is available and helpful, or ordinary dialogue.
No host planning-mode toggle or external author is required.

Read the [requirements-library contract](../brief/references/requirements-library.md)
for initiative, capability, system, evidence, revision, and review boundaries.
Compose source-owning plugins for exact evidence; do not reimplement their
storage, synchronization, transcription, cursor, retry, or media handling.

## Source Routing

Use the installed skill that owns the source:

| Evidence source | Owning capability |
| --- | --- |
| WhatsApp messages, exchanges, media, or voice notes | `whatsapp:whatsapp` |
| Gmail message thread or attachment | `gmail:gmail` or `gmail:gmail-cli` |
| Zoom recording, transcript, chat export, or screenshot supplied directly | The installed document or media capability that owns its format |
| Apple phone or FaceTime call recording | `notes:process-recorded-call`, using `notes:notes` for source access |
| Apple Voice Memo | `voice-memos:voice-memos` |
| Exact transcript, document, audio, video, or screenshot supplied directly | The installed source, document, or media capability that owns its format |

A Zoom notification or invitation is not the recording, transcript, or chat
artifact. Resolve the exact supplied artifact and preserve its provenance
instead of treating a filename or notification as the meeting evidence.

## Ground the relevant evidence

For each source used to support a material interpretation, establish:

- the exact source and its stable identifier or canonical pointer;
- the complete relevant bounded conversation, recording, transcript, or document;
- the date and known participants or speakers;
- transcript and media provenance, including attribution, truncation, noise,
  missing artifacts, or other material limitations; and
- the uniquely resolved destination repository when the evidence clearly
  belongs to one.

Use metadata-first discovery and stay within the exact source scope the user
named. Read the complete bounded evidence once identified. If a material source
artifact, speaker identity, time boundary, or destination remains unclear, ask
the smallest useful question instead of guessing.

The source plugin retains ownership of its cursor, claim, retry, resolution,
and canonical media. Follow destination repository instructions for durable
pointers and internal authored records. A repository evidence convention does
not authorize copying original elicitation material into the requirements
library. Original migration or duplication requires its own explicit scope.
Never modify or delete app-managed source data.

## Draft and iterate

Conversations, observations, current software, and technical evidence are also
valid inputs. Distinguish observed behavior from intended behavior. Retain
meaningful feedback and adoption decisions without inventing stakeholder evidence.

Draft supported clauses through `toolchain:brief` while material open meaning
remains beside the affected clause. Do not stall all drafting until unrelated
unknowns are closed. Use `toolchain:analysis` to resolve implications, conflicts,
and one-time obligations when those are within the current request. Incorporate
settled corrections and show the revised brief normally.

For source-only requests, return a concise evidence envelope with pointers and
provenance limits without inventing requirements. A source registry stores only
references; original evidence remains with its source owner. Ground clauses
during drafting without a mandatory per-clause source map or visible citations.

Elicitation alone does not authorize issues, tasks, implementation plans,
reminders, outbound messages, code, or deployment. Continue work already included
in the user's request without asking for redundant authorization. Never send or reply to a
source conversation during elicitation.
