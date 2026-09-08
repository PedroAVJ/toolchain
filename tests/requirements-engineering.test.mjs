import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";
import test from "node:test";

const root = new URL("..", import.meta.url).pathname;
const plugin = root;

async function read(...parts) {
  return readFile(join(plugin, ...parts), "utf8");
}

async function json(...parts) {
  return JSON.parse(await read(...parts));
}

test("Toolchain 0.4.7 ships matching manifests and skills", async () => {
  const codex = await json(".codex-plugin", "plugin.json");
  const claude = await json(".claude-plugin", "plugin.json");
  assert.equal(codex.name, "toolchain");
  assert.equal(codex.version, "0.4.7");
  assert.equal(claude.version, codex.version);
  assert.equal(claude.description, codex.description);
  assert.deepEqual(claude.keywords, codex.keywords);
  assert.equal(claude.dependencies, undefined);
  assert.deepEqual(
    (await readdir(join(plugin, "skills"))).sort(),
    ["analysis", "delivery-verification", "elicitation", "engineering-invariants", "isolate-repository-work", "prd", "resource-hygiene", "specification", "validation"],
  );
});

test("delivery requires the final candidate to pass the real target-surface path", async () => {
  const skill = await read("skills", "delivery-verification", "SKILL.md");
  const isolation = await read("skills", "isolate-repository-work", "SKILL.md");
  assert.match(skill, /real entry point a user, operating system, or external caller invokes/i);
  assert.match(skill, /closest appropriate controllable target surface/i);
  assert.match(skill, /If an appropriate target surface is available or can be created safely, using\s+it is mandatory/is);
  assert.match(skill, /For system-owned UI, interact with the actual system surface/is);
  assert.match(skill, /direct intent calls/is);
  assert.match(skill, /do \*\*not\*\* satisfy target-surface\s+verification by themselves/is);
  assert.match(skill, /Fix the candidate and repeat the complete\s+target path after the final code change/is);
  assert.match(skill, /final candidate SHA and build, artifact, or deployment identity/is);
  assert.match(skill, /Do not merge or deploy a behavior-changing candidate until every required\s+target-surface path passes/is);
  assert.match(skill, /Do not waive the gate, substitute a lower-level\s+test, or describe the result as shipped/is);
  assert.match(skill, /Shipped.*target-surface verification.*requested release\s+boundary.*independently confirmed/is);
  assert.match(skill, /Physical-device acceptance remains a separate claim/is);
  assert.match(skill, /never excuses skipping a feasible simulator/is);
  assert.match(skill, /Do not gate OTA publication on whether Expo already\s+has a binary with the same fingerprint/is);
  assert.match(skill, /compute the production fingerprint\s+from that exact deployed commit/is);
  assert.match(skill, /compile exactly one signed IPA directly on\s+the user's operator-owned Mac with `eas build --local`/is);
  assert.match(skill, /must not compile or submit the\s+native binary/is);
  assert.match(skill, /Do not introduce a self-hosted GitHub runner/is);
  assert.match(skill, /Never cancel, retry, replace, or otherwise mutate an EAS build or submission\s+that the current task did not create/is);
  assert.match(skill, /source merge, OTA publication and runtime,\s+local IPA identity, TestFlight submission and Apple processing/is);
  assert.match(isolation, /apply\s+`toolchain:delivery-verification`/is);
  assert.match(isolation, /stop\s+before merge or deployment and do not call the work shipped/is);
});

test("repository writes use remote-backed ephemeral clones", async () => {
  const skill = await read("skills", "isolate-repository-work", "SKILL.md");
  assert.match(skill, /authoritative remote default branch as canonical source/i);
  assert.match(skill, /Do not require\s+or maintain a permanent source checkout under `~\/Developer`/i);
  assert.match(skill, /Installed plugin\s+caches are immutable runtime artifacts/i);
  assert.match(skill, /one independent, task-specific clone per repository/i);
  assert.match(skill, /create a unique task branch directly from\s+`origin\/<default-branch>`/i);
  assert.match(skill, /one separate ephemeral clone for each repository/i);
  assert.match(skill, /apply `toolchain:resource-hygiene`/i);
  assert.match(skill, /never general host-cleanup candidates/i);
  assert.match(skill, /apply `toolchain:engineering-invariants`/i);
  assert.match(skill, /Sentry Logs observability gate/is);
  assert.match(skill, /unrelated to stakeholder requirements/i);
  assert.match(skill, /active\s+task clone as the filesystem ownership boundary/i);
  assert.match(skill, /build and test output.*logs.*diagnostic\s+exports.*temporary files/is);
  assert.match(skill, /project-local ignored path.*`.git\/info\/exclude`/is);
  assert.match(skill, /Xcode\s+DerivedData.*Swift scratch paths.*under the task clone/is);
  assert.match(skill, /Do not point task-specific output\s+at `\/tmp`, `\/private\/tmp`, shared Xcode DerivedData/is);
  assert.match(skill, /one stable build root beneath the\s+exact task clone/is);
  assert.match(skill, /Reuse that same root for every build,\s+test, retry, configuration, and destination/is);
  assert.match(skill, /Do not create a new\s+random, hashed, timestamped, or per-command cache root/is);
  assert.match(skill, /For every Xcode invocation, pass an explicit clone-local path.*`-derivedDataPath/is);
  assert.match(skill, /For SwiftPM, pass an explicit\s+clone-local `--scratch-path`/is);
  assert.match(skill, /resolve each configured output path and verify it is a descendant of\s+the exact clone/is);
  assert.match(skill, /Never select, reconstruct, or reuse Xcode's workspace-hashed directories under\s+`~\/Library\/Developer\/Xcode\/DerivedData`/is);
  assert.match(skill, /Do not borrow another task's DerivedData,\s+SourcePackages, module cache, build products, or Swift scratch directory/is);
  assert.match(skill, /Repository documentation or scripts.*conflict\s+with this lifecycle.*Stop before building/is);
  assert.match(skill, /never silently follow the external example/i);
  assert.match(skill, /global CLI installation.*durable state/is);
  assert.match(skill, /record its exact\s+absolute path.*`.git\/codex-owned-artifacts`/is);
  assert.match(skill, /owns it through verified removal.*context compaction/is);
  assert.match(skill, /browser automation session.*daemon.*subprocess.*task-owned external artifact/is);
  assert.match(skill, /Detaching, unreferencing.*reconnection faster.*not a cleanup strategy/is);
  assert.match(skill, /unique task-specific session name.*`.git\/codex-owned-processes`/is);
  assert.match(skill, /tool, session name or PID, parent PID.*exact graceful stop operation/is);
  assert.match(skill, /`trap`,\s+`try\/finally`.*cross-turn recovery record/is);
  assert.match(skill, /succeeds, fails, is interrupted, retries, or changes direction/is);
  assert.match(skill, /exact-session close.*complete child process tree.*tool's list command/is);
  assert.match(skill, /Do not use global operations such as\s+`close-all` or `kill-all`/is);
  assert.match(skill, /explicitly authorized durable service.*stable\s+service identity.*handoff state/is);
  assert.match(skill, /Never blindly add untracked files/i);
  assert.match(skill, /reproduce the legitimate changes in an isolated\s+clone/is);
  assert.match(skill, /Verify the exact commit with `git ls-remote`/i);
  assert.match(skill, /Never stash, reset, clean, or delete uncertain\s+work/is);
  assert.match(skill, /ignored `.env` file is a disposable local projection, never the secret store/i);
  assert.match(skill, /vercel env run.*vercel env pull/is);
  assert.match(skill, /eas env:pull.*non-readable EAS secrets/is);
  assert.match(skill, /Azure Key Vault.*Azure DevOps variable group/is);
  assert.match(skill, /Regenerate task-scoped values.*ephemeral database branch IDs.*OIDC/is);
  assert.match(skill, /audit ignored paths.*compare variable\s+names.*without printing values/is);
  assert.match(skill, /external write needs\s+the same explicit authority.*credential change/is);
  assert.match(skill, /Ephemeral-clone cleanup is part of completing a shipped task/i);
  assert.match(skill, /shipping boundary has been independently verified/i);
  assert.match(skill, /not the home\s+directory, `~\/Developer`, the workspace root, or another broad directory/is);
  assert.match(skill, /`git status --porcelain=v1` is empty/i);
  assert.match(skill, /`HEAD` is reachable\s+from the exact remote default branch or explicit remote ref/is);
  assert.match(skill, /Read back the remote ref and exact commit SHA/i);
  assert.match(skill, /Read `.git\/codex-owned-processes`.*gracefully stop every remaining disposable/is);
  assert.match(skill, /Read the task's external-artifact inventory/is);
  assert.match(skill, /verify the clone, every disposable process, and every disposable external\s+target are absent/is);
  assert.match(skill, /permanently remove only that exact verified task clone/i);
  assert.match(skill, /preserve the clone in place/i);
  assert.doesNotMatch(skill, /Trash/i);
  assert.match(skill, /If any check fails, preserve the clone.*instead of\s+forcing deletion/is);
  assert.match(skill, /multi-repository task.*every clone/is);
  assert.match(skill, /Do not report the task fully complete.*task clone,\s+task-spawned process, or disposable external artifact remains/is);
});

test("resource hygiene owns cleanup eligibility without touching active work", async () => {
  const skill = await read("skills", "resource-hygiene", "SKILL.md");
  assert.match(skill, /MacBook plugin and other domain tools own live\s+measurement/i);
  assert.match(skill, /all of these are true/i);
  assert.match(skill, /active worktree is active work too/i);
  assert.match(skill, /Git-ignored\s+status, regenerability.*absence of an\s+open file handle does not make it disposable/is);
  assert.match(skill, /Do not recommend deleting cache state of any kind/i);
  assert.match(skill, /Do not use Trash as a destination/i);
  assert.match(skill, /remove it permanently and\s+directly/i);
  assert.match(skill, /running now, proven unrelated to intended work.*large enough/is);
  assert.match(skill, /Do not clutter the answer with small helpers/i);
  assert.match(skill, /Active worktrees and\s+anything below them are excluded/is);
  assert.match(skill, /target.*never relaxes the gates/is);
  assert.match(skill, /Storage candidates: none proven/);
  assert.match(skill, /Memory\/process candidates: none proven/);
});

test("production engineering invariants require Sentry Logs without mandating product analytics", async () => {
  const skill = await read("skills", "engineering-invariants", "SKILL.md");
  assert.match(skill, /standing constraints on production engineering work/i);
  assert.match(skill, /do not\s+come from stakeholder evidence and are not product requirements/i);
  assert.match(skill, /Sentry operational observability/i);
  assert.match(skill, /repository that bundles a plugin with an app or service is not exempt/i);
  assert.doesNotMatch(skill, /product analytics/i);
  assert.match(skill, /structured Sentry Logs must be explicitly enabled/i);
  assert.match(skill, /`captureException` and `captureMessage` do not create Sentry Logs/i);
  assert.match(skill, /meaningful state transitions and terminal outcomes/i);
  assert.match(skill, /query\s+the Sentry \*\*Logs\*\* dataset/is);
  assert.match(skill, /Checking Issues or Events is not log verification/i);
  assert.match(skill, /Do not silently defer the invariant or call the production release fully accepted/i);
});

test("stakeholder workflow artifacts do not absorb engineering invariants", async () => {
  const files = await Promise.all(
    ["elicitation", "analysis", "prd", "specification", "validation"].map((name) =>
      read("skills", name, "SKILL.md"),
    ),
  );
  assert.doesNotMatch(files.join("\n"), /\bSentry Logs\b/i);
});

test("elicitation composes source owners instead of duplicating acquisition", async () => {
  const skill = await read("skills", "elicitation", "SKILL.md");
  for (const source of [
    "WhatsApp",
    "Gmail",
    "Zoom",
    "Apple Voice Memo",
    "Apple phone or FaceTime call",
  ]) {
    assert.match(skill, new RegExp(source, "i"));
  }
  for (const owner of [
    "whatsapp:whatsapp",
    "gmail:gmail",
    "notes:process-recorded-call",
    "voice-memos:voice-memos",
  ]) {
    assert.match(skill, new RegExp(owner, "i"));
  }
  assert.doesNotMatch(skill, /google-drive:/i);
  assert.match(skill, /source plugin retains ownership/i);
});

test("analysis remains a two-file conversational interpretation", async () => {
  const skill = await read("skills", "analysis", "SKILL.md");
  assert.match(skill, /requirements\.md/);
  assert.match(skill, /action-items\.md/);
  assert.match(skill, /conflicts.*ambiguity|ambiguity.*conflicts/is);
  assert.match(skill, /same task/i);
  assert.doesNotMatch(skill, /Linear/i);
});

test("analysis artifacts contain only their prescribed headings and lists", async () => {
  const skill = await read("skills", "analysis", "SKILL.md");
  assert.match(skill, /Each artifact must contain only/i);
  assert.match(skill, /Do not add a document title/i);
  assert.match(skill, /first line of `requirements\.md` must be `## Requirements`/i);
  assert.match(skill, /first line of `action-items\.md` must be `## Action Items`/i);
  assert.match(skill, /conflicts and ambiguity.*conversation.*not.*artifact/is);
});

test("prd is the six-section business-facing agreement artifact", async () => {
  const skill = await read("skills", "prd", "SKILL.md");
  assert.match(skill, /named a \*\*Product Requirements Document \(PRD\)\*\*/i);
  assert.match(skill, /deliberately lean and business-facing/i);
  assert.match(skill, /after `toolchain:analysis`/i);
  assert.match(skill, /before `toolchain:specification`/i);
  const sections = [
    "Problem",
    "Objectives",
    "Business Requirements",
    "Scope",
    "Constraints and Assumptions",
    "Open Decisions and Sign-off",
  ];
  let cursor = -1;
  for (const section of sections) {
    const next = skill.indexOf(`**${section}**`, cursor + 1);
    assert.ok(next > cursor, `${section} is missing or out of order`);
    cursor = next;
  }
  assert.match(skill, /no other\s+top-level section may be added/is);
  assert.match(skill, /Target one readily reviewable page when the evidence fits/i);
  assert.match(skill, /Do not omit a real\s+requirement merely to meet a page count/is);
  assert.match(skill, /Do not resolve conflicts by guessing/i);
  assert.match(skill, /Never mark the PRD approved without exact stakeholder evidence/i);
  assert.match(skill, /does not authorize implementation/i);
  assert.match(skill, /native Google Doc.*document-owning\s+capability/is);
});

test("the completed Product Design outcome is the specification", async () => {
  const skill = await read("skills", "specification", "SKILL.md");
  assert.match(skill, /installed Product Design plugin as the (?:primary )?specification workflow/i);
  assert.match(skill, /completed\s+Product Design outcome.*is the specification/is);
  assert.match(skill, /account for every\s+settled\s+requirement/is);
  assert.match(skill, /including nonvisual and backend behavior.*hard constraint/is);
  assert.match(skill, /Do not create\s+or save a\s+separate `specification\.md`.*unless the user explicitly/is);
  assert.match(skill, /does not authorize edits to product source/is);
  assert.match(skill, /If Product Design is\s+unavailable.*report that boundary/is);
  assert.doesNotMatch(skill, /Plan mode/i);
});

test("specification presents one approval-gated artifact checkpoint at a time", async () => {
  const skill = await read("skills", "specification", "SKILL.md");
  assert.match(skill, /iterative, approval-gated sequence of artifact\s+checkpoints/is);
  assert.match(skill, /Product Design outcome and stop for the user's review/is);
  assert.match(skill, /After Product Design is approved.*architecture view/is);
  assert.match(skill, /After the architecture view is approved or found inapplicable.*conceptual entity-relationship view/is);
  assert.match(skill, /Present only the current checkpoint/is);
  assert.match(skill, /Do not preview, generate, or bundle a\s+later artifact/is);
  assert.match(skill, /revise and re-present only that\s+checkpoint/is);
  assert.match(skill, /Continue only after he explicitly approves it/is);
  assert.match(skill, /After the last applicable artifact is approved.*completion check/is);
});

test("specification adds architecture and conceptual ER views only when useful", async () => {
  const skill = await read("skills", "specification", "SKILL.md");
  assert.match(skill, /architecture diagram.*system\s+boundaries.*resources.*integrations/is);
  assert.match(skill, /conceptual entity-relationship diagram.*persistent\s+domain concepts.*cardinality/is);
  assert.match(skill, /visualization capability and Mermaid/i);
  assert.match(skill, /only enough unchanged context/i);
  assert.match(skill, /Omit either diagram.*not materially\s+improve/is);
  assert.match(skill, /views of the same specification, not a\s+separate phase/is);
  assert.match(skill, /conceptual.*physical table.*migration.*implementation plan/is);
  assert.match(skill, /minimum level of detail.*proposed boundary or flow/is);
  assert.match(skill, /does not mean implementation has started or authorize implementation/is);
  assert.match(skill, /plain domain names.*stakeholder would recognize/is);
  assert.match(skill, /not code symbols.*database-table names.*all-caps or snake-case/is);
  assert.match(skill, /one coherent domain.*split unrelated areas/is);
});

test("validation prepares a human agenda without outbound side effects", async () => {
  const skill = await read("skills", "validation", "SKILL.md");
  assert.match(skill, /validation-agenda\.md/);
  assert.match(skill, /boss|authoritative stakeholder/i);
  assert.match(skill, /accept, change, defer, or reject/i);
  assert.match(skill, /does not schedule.*send/is);
});

test("Toolchain contains no Symphony or Linear lifecycle", async () => {
  const files = [
    await read("README.md"),
    ...await Promise.all(
      ["elicitation", "analysis", "delivery-verification", "engineering-invariants", "isolate-repository-work", "prd", "resource-hygiene", "specification", "validation"].map((name) =>
        read("skills", name, "SKILL.md"),
      ),
    ),
  ];
  assert.doesNotMatch(files.join("\n"), /\b(?:Symphony|Linear)\b/i);
});
