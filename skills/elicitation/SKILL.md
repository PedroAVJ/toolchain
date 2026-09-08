---
name: elicitation
description: Use when stakeholder evidence must be grounded from WhatsApp, Gmail, supplied Zoom artifacts, Apple call recordings in Notes, Voice Memos, or another exact source before requirements analysis.
---

# Requirements Elicitation

Establish the complete, attributable evidence envelope that requirements work
will interpret. Elicitation composes source-owning plugins; it does not
reimplement their storage, synchronization, transcription, cursor, retry, or
media-handling behavior.

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

## Evidence-Ready Contract

Before handing evidence to analysis, establish:

- the exact source and its stable identifier or canonical pointer;
- the complete relevant conversation, recording, transcript, or document;
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
and canonical media. When a destination repository has an evidence convention,
follow its `AGENTS.md` and store only durable pointers or artifacts allowed by
that repository. Never modify or delete app-managed source data.

## Handoff

Return a concise evidence envelope with source pointers and provenance limits.
Run `toolchain:analysis` only when the current request includes
understanding requirements or action items; elicitation alone does not invent
them.

Do not create issues, tasks, plans, reminders, messages, code, or deployments
from elicited evidence without a separate request. Never send or reply to a
source conversation during elicitation.
