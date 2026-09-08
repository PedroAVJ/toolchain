---
name: brief
description: Create or revise an authored natural-language brief with atomic ordered claims and visible explanations. Use for business, product, software, or implementation requirements, or when the user requests this format for other material.
---

# Brief

The active assistant authors and revises the brief directly. Brief owns its
structure and consistent editorial style. It does not automatically apply
`writing:impersonating`, sample private messages for style, or require another
model, Oracle, or a host planning mode. Follow the intended audience's language;
do not hardcode a language for every brief.

For requirements, also read [the requirements-library contract](references/requirements-library.md).
Use `toolchain:elicitation` to develop missing knowledge and `toolchain:analysis`
to resolve meaning as the brief evolves. A brief is authored source for agreement
and downstream work, rather than a summary that silently replaces its inputs.
For an essay or another requested use of the format, preserve the same hierarchy
without imposing the requirements-library workflow.

## Structure and style

Use the destination's native elements, or Markdown when none is specified:

1. One descriptive, bold title, normally a noun phrase, with one semantic emoji
   identifying the subject. Do not add a subtitle or duplicate the native title.
2. One short purpose paragraph establishing the subject, necessary domain terms,
   and why the work is needed. For business requirements, lead with the actual
   business driver. Use definitions to give the clauses shared vocabulary rather
   than repeating their claims or adding generic introductory prose.
3. A flat numbered sequence of clauses, without a heading before the list.

Each clause has one short, bold lead sentence stating an atomic claim, followed
by a separate, indented, visible gray paragraph explaining that same claim.
Every clause has this subordinate paragraph, or gloss. Keep it expanded.

```markdown
# 🧭 **Route planning**

Define the subject and the purpose in the audience's language.

1. **State one claim concisely.**

   Explain its terms, conditions, applicability, and necessary precision.
```

Write in plain, precise language with consistent cadence. The lead states the
claim; the gloss defines and qualifies it. Keep necessary uncertainty visible
beside the affected clause. A gloss may enumerate the parts of its claim, but an
independent claim belongs in another clause. Do not add arbitrary nested lists.
A definition supplies vocabulary; it cannot add unstated policies, permissions,
ownership, isolation rules, or other behavior. Shared context is not evidence for
an additional requirement. Do not add an umbrella clause when the following
clauses already fully express it. Merge duplicated claims and remove explanations
that merely repeat their lead without defining or qualifying it.

Compress leads without making them misleading. Keep leads roughly comparable in
length and glosses roughly comparable in length, treating these as editing
budgets rather than quotas. Preserve meaning over brevity. Read all leads alone
to check the argument, then each lead with its gloss to check accuracy and scope.
Order clauses by the subject's natural sequence: workflow, chronology, or the
progression of the argument.

Numbers express position and order, not stable identity. Renumber after moving
or inserting clauses. Use separate stable clause IDs only when explicitly
requested; internal revision tracking does not require stakeholder-visible IDs.
The number is already the clause marker, so do not add clause emojis.

## Semantic emoji

Choose the most precise existing emoji for the subject, not a generic category
symbol when it changes the meaning. When existing emoji are inadequate, use the
installed image-generation capability to create a simple emoji-style icon that
expresses the exact concept. Inspect the result before using it. This is the
brief's subject icon, not a new plugin or brand logo.

Use the destination capability to attach the asset as the native icon or title
image. Keep a generated asset in the requested workspace and provide a clickable
absolute file link when showing it to the user. Do not publicly publish private
imagery merely to obtain an icon URL. If generation or the destination's icon
support is unavailable, state the limitation and retain the closest accurate
available symbol rather than claiming the exact icon exists.

## Rendering

- In Notion, use the native page title and icon, one purpose paragraph, and native
  numbered items with bold leads. Give each item a separate indented gray child
  paragraph. Keep glosses expanded and visible; do not duplicate the title with
  a body H1. The native page title provides its own title emphasis.
- In Markdown, use one H1 with a bold title and one purpose paragraph, followed
  by numbered bold leads. Put a blank line and an indented paragraph under each.
  Preserve this hierarchy when text color is unavailable; do not add raw HTML
  solely to force gray text in a renderer that cannot support it.
- In X Articles, preserve the title, purpose, and sequence using bold leads and
  separate native blockquote blocks for glosses when color or indentation does
  not survive. This visual use of a blockquote is not attribution. Verify the
  saved preview rather than assuming pasted formatting survived.
- In another format, preserve the title, purpose, flat ordered leads, and visible
  subordinate explanations with native elements. Verify the saved result.

## Content and revision

Ground content in the supplied facts, relevant current evidence, and settled
decisions. Do not invent scope, metrics, owners, commitments, or acceptance.
Consult sources during drafting; neither a source mapping for every clause nor
visible clause citations is mandatory. Keep useful provenance internally when
requirements work needs it. Keep material unresolved meaning beside the affected
clause rather than collecting it in an unrelated closing section.

Do not add metadata tables, executive summaries, scope headings, stakeholder
sections, evidence sections, acceptance-criteria sections, risk sections,
timelines, or appendices unless requested. The format does not claim conformance
to a formal BRD or PRD standard. Internal records belong outside the stakeholder
body.

Present the brief directly. Do not wrap it in an authoring report, compliance
checklist, opening disclaimer, or concluding recap unless the user requests one.
Keep execution status and implementation discussion separate when those are
also part of the requested work.

Preserve accepted content unless its substantive revision is authorized. A
navigation, metadata, ownership, or format migration is not permission to rewrite
accepted titles, clauses, or explanations. Revise only the brief and other files
placed in scope. If the user explicitly requests voice imitation for another
use, compose the requested writing capability while retaining this structure;
requirements briefs use Brief's own style by default.
