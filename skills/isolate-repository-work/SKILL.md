---
name: isolate-repository-work
description: Keep Git repository writes, disposable task artifacts, and task-spawned processes in a task-specific lifecycle backed by the repository's authoritative remote. Use before repository implementation, testing, documentation, catalog changes, releases, or other work that may change source or generate task-scoped build, test, log, diagnostic, process, browser-session, or temporary output.
---

# Isolate Repository Work

Treat the authoritative remote default branch as canonical source and the active
task clone as the filesystem ownership boundary for repository work. Do not require
or maintain a permanent source checkout under `~/Developer`. Installed plugin
caches are immutable runtime artifacts and are never authoring surfaces.

Apply `toolchain:resource-hygiene` whenever deciding whether a file, directory,
application, or process may be cleaned up. An active task clone, everything
generated beneath it, and every task-owned process remain active work until this
skill's closeout succeeds. They are never general host-cleanup candidates merely
because they are ignored, regenerable, idle, old, or have no open handle.

Apply this contract before the first repository write, disposable local
artifact, or long-lived process created for that work:

1. Resolve the exact repository, remote provider, remote URL, and default branch.
   Read its root `AGENTS.md`, `README.md`, and any relevant instructions from a
   read-only source such as the remote, an existing checkout, or a fresh clone.
   GitHub is authoritative for GitHub repositories; use the configured Azure
   DevOps remote for repositories whose source is hosted there.
2. Check for an existing clone that belongs to the same active task. Reuse it
   only when its repository identity, task ownership, branch, and local state are
   unambiguous. Never overwrite, repurpose, or remove another active task's clone.
3. Otherwise create one independent, task-specific clone per repository inside
   the current task workspace, preferably with `--filter=blob:none` when the
   remote supports partial clone. A normal clone is the safe fallback. Do not
   create a persistent `~/Developer` checkout merely to anchor a linked worktree.
4. Fetch the remote default branch and create a unique task branch directly from
   `origin/<default-branch>` before writing, for example
   `codex/YYYYMMDD-short-task-name`. Independent clones may use the same branch
   names as unrelated local clones without Git's linked-worktree collision.
5. Make every authored content change, stage, commit, integration, publication
   step, and task-created filesystem artifact inside that ephemeral clone unless
   the tool or operating system genuinely requires an external location. Give
   every task-spawned browser session, server, watcher, daemon, and worker an
   explicit owner and bounded lifetime. When a task changes multiple
   repositories, use one separate ephemeral clone for each repository.
6. Preserve credentials, unrelated user files, active clones, and pre-existing
   local state. Never blindly add untracked files: classify secrets, caches,
   generated junk, and legitimate source before staging anything.

If the authoritative remote, default branch, or safe task clone cannot be
resolved, stop before writing and report the exact blocker.

## Gate delivery on target-surface verification

For separately authorized implementation, review, merging, release, or
deployment that changes observable runtime behavior, apply
`toolchain:delivery-verification` after resolving the repository and before
settling implementation scope. Keep its exact-entry-point target-surface gate
open through the final candidate and requested production boundary.

Compilation, automated suites, CI, structural checks, direct internal calls,
and provider submission support delivery but do not replace this gate. If the
changed path cannot be exercised on an appropriate controllable target, stop
before merge or deployment and do not call the work shipped. This routing does
not authorize implementation, release, deployment, or target access by itself.

## Apply production engineering invariants

For separately authorized implementation, review, or shipping of a production
application or service, apply `toolchain:engineering-invariants` after resolving
the repository and before deciding the complete implementation scope. Keep its
Sentry Logs observability gate open through deployed
verification. A missing integration is part of the authorized production work,
not an optional follow-up.

These invariants are unrelated to stakeholder requirements and do not belong in
requirements, action-item, specification, or validation artifacts. This routing
does not authorize implementation or deployment by itself. Skip it for pure
requirements artifacts, documentation-only changes, local experiments, tests, and
plugin-only, skill-only, or developer-only tooling that does not ship a production
runtime. Repositories that bundle plugins with production apps or services are not
exempt.

## Keep disposable artifacts inside the clone

Repository isolation owns generated work as well as tracked source. Keep local
dependencies, build and test output, compiler scratch data, logs, diagnostic
exports, downloaded copies, screenshots, and temporary files under the active
task clone whenever their location can be controlled. Prefer an existing
project-local ignored path. Otherwise create one clone-local artifact directory
and exclude it only for that clone through `.git/info/exclude`; do not modify the
project's tracked `.gitignore` merely to support a temporary agent workflow.

Explicitly redirect tools that accept an output root. For example, point Xcode
DerivedData, Swift scratch paths, result bundles, and similar clean-build output
at an ignored directory under the task clone. Do not point task-specific output
at `/tmp`, `/private/tmp`, shared Xcode DerivedData, a sibling workspace, or a
home-directory scratch folder by default. A clean `git status` does not prove
that external generated output was cleaned.

### Bound native build caches to the clone

Before the first local native build, choose one stable build root beneath the
exact task clone, such as `.codex-artifacts/native-build`, and exclude it only
for that clone through `.git/info/exclude`. Reuse that same root for every build,
test, retry, configuration, and destination in the task. Do not create a new
random, hashed, timestamped, or per-command cache root. Concurrent tasks remain
isolated because each task already owns a separate clone.

For every Xcode invocation, pass an explicit clone-local path such as
`-derivedDataPath "$build_root/DerivedData"`. For SwiftPM, pass an explicit
clone-local `--scratch-path`. Keep result bundles, archives, exports, and other
controllable native output beneath the same build root. Before launching the
command, resolve each configured output path and verify it is a descendant of
the exact clone; a relative-looking path is insufficient when the command's
working directory is uncertain.

Never select, reconstruct, or reuse Xcode's workspace-hashed directories under
`~/Library/Developer/Xcode/DerivedData`. Do not borrow another task's DerivedData,
SourcePackages, module cache, build products, or Swift scratch directory to make
a build faster or to avoid dependency setup. Fetch dependencies into the active
clone's build root or use the repository's authorized cloud build path instead.

Repository documentation or scripts that direct task output to `/tmp`,
`/private/tmp`, shared DerivedData, or another external scratch location conflict
with this lifecycle. Stop before building and report the exact conflict. Fix or
override that path only when the current task authorizes the necessary repository
change; never silently follow the external example.

Some effects legitimately live outside the clone. An explicitly authorized
global CLI installation, provider authentication, remote branch or deployment,
Keychain item, and platform-managed shared cache are durable state owned by
their respective systems, not disposable task garbage. This skill does not
authorize creating or removing that state; follow the owning workflow and the
user's scope.

If disposable output genuinely cannot live under the clone, record its exact
absolute path immediately in a durable task inventory inside the clone, such as
`.git/codex-owned-artifacts`. Use one resolved target per entry; never record a
broad directory, unresolved variable, glob, home directory, or workspace root.
The task that creates an external artifact owns it through verified removal,
including across retries, context compaction, release waiting, and later turns.

## Own every spawned process through shutdown

A browser automation session, development server, file watcher, simulator,
daemon, worker, or subprocess that can outlive the command that started it is a
task-owned external artifact even when its executable and state live in a shared
cache. Detaching, unreferencing, preserving a session name, or making a later
reconnection faster does not transfer ownership and is not a cleanup strategy.

Before starting one, choose a unique task-specific session name when the tool
supports it and record the exact identity immediately in
`.git/codex-owned-processes`. Record enough to distinguish it from pre-existing
user work: the tool, session name or PID, parent PID when available, purpose,
and exact graceful stop operation. Never claim a generic process name, shared
browser profile, or every instance of a tool as task-owned. Use `trap`,
`try/finally`, or the tool's lifecycle API in authored automation when
available, with the inventory as the cross-turn recovery record.

Stop each owned process as soon as its last required check finishes, whether the
task succeeds, fails, is interrupted, retries, or changes direction. Prefer the
tool's exact-session close or shutdown command, then verify both its registry
entry and complete child process tree are gone with the tool's list command and
`ps`, `pgrep`, or `lsof` as appropriate. Do not use global operations such as
`close-all` or `kill-all` when they could affect a user's browser, server, or
another task. Escalate from graceful shutdown only for an exactly identified
owned process after the graceful path fails.

An explicitly authorized durable service is not disposable. Record its stable
service identity, configuration owner, and handoff state, then remove it from
the task-owned process inventory. Do not silently reinterpret a verification
browser or helper daemon as durable merely because it remains useful or cheap
to reconnect.

## Preserve unfinished local work

Local work may be removed only after its legitimate history is durably present
on the authoritative remote. For an existing dirty checkout or local-only
branch, inspect every changed and untracked path, exclude credentials and
disposable artifacts, then reproduce the legitimate changes in an isolated
clone. Commit them to a clearly named remote branch such as
`wip/YYYYMMDD-short-task-name` or `archive/local-snapshot-YYYYMMDD-short-name`.

Verify the exact commit with `git ls-remote` or the provider's API before
removing local state. If the work cannot safely be published, preserve it
locally and report the blocker. Never stash, reset, clean, or delete uncertain
work merely to make a checkout look clean.

## Materialize repository environments from their authority

An ignored `.env` file is a disposable local projection, never the secret store.
Resolve each project's environment authority and fetch only what the task needs:

- For Vercel projects, prefer `vercel env run -- <command>` so secrets never
  land on disk. When a framework requires a dotenv file, link the exact project
  inside the task clone and use `vercel env pull <ignored-file>
  --environment=development`.
- For Expo projects, use EAS Environment Variables and materialize local
  development values with `eas env:pull --environment development --path
  <ignored-file>`. Keep non-readable EAS secrets in remote build, update, or
  workflow jobs instead of weakening their visibility so they can be downloaded.
- For Azure-hosted workloads, use the project's Azure Key Vault, App Service
  configuration, or Azure DevOps variable group according to its instructions.
- Keep personal operator credentials in the owning provider's authenticated CLI
  store or, only when no provider store exists, macOS Keychain. Do not inject a
  GitHub, Vercel, or other operator token into an app environment unless the
  deployed runtime genuinely needs that credential.
- Regenerate task-scoped values such as ephemeral database branch IDs and OIDC
  tokens. Do not preserve them as durable secrets.

Before retiring a legacy checkout, audit ignored paths and compare variable
names with the authoritative provider without printing values. Migrate only a
missing value that is both durable and still required; that external write needs
the same explicit authority as any other credential change. The materialized
file must be ignored by Git, live only inside the active task clone, and disappear
when that clone is removed.

## Remove completed task clones, processes, and artifacts

Ephemeral-clone cleanup is part of completing a shipped task, and disposable
process and artifact cleanup are part of the same boundary. After the requested
shipping boundary has been independently verified:

1. Verify the exact clone path belongs to the current task and is not the home
   directory, `~/Developer`, the workspace root, or another broad directory.
2. Read `.git/codex-owned-processes`, gracefully stop every remaining disposable
   exact session or process, and verify its registry entry and complete process
   tree are absent. Preserve and report any explicitly handed-off durable
   service. Do not substitute a global close or kill operation.
3. Verify `git status --porcelain=v1` is empty and no Git operation or relevant
   process has a working directory or open file in the clone or any registered
   external artifact. Use process and `lsof` checks when build ownership is not
   already certain.
4. Fetch the authoritative remote and verify the clone's `HEAD` is reachable
   from the exact remote default branch or explicit remote ref that preserves
   the work. Read back the remote ref and exact commit SHA.
5. Read the task's external-artifact inventory. Preserve durable requested state;
   for every disposable entry, resolve and validate the exact target again,
   verify it is inactive, permanently remove only that target, and verify it is
   absent. If provenance or ownership is uncertain, preserve it in place and
   report the blocker.
6. Permanently remove only that exact verified task clone. If any prerequisite
   remains uncertain, preserve the clone in place.
7. Verify the clone, every disposable process, and every disposable external
   target are absent. For
   storage-material output, confirm physical reclamation with the filesystem's
   free-space measurement rather than logical file sizes alone.
8. For a multi-repository task, apply this closeout independently to every clone
   and its owned processes and artifacts.

If any check fails, preserve the clone and report the exact blocker instead of
forcing deletion. Do not report the task fully complete while a safely removable
task clone, task-spawned process, or disposable external artifact remains.
