---
name: resource-hygiene
description: Decide whether files, worktrees, applications, or running process trees are legitimate cleanup candidates without touching active work, caches, or insignificant processes. Use whenever proposing what the user should delete, permanently remove, quit, restart, or stop to recover storage or memory.
---

# Resource Hygiene

Own cleanup **eligibility**. The MacBook plugin and other domain tools own live
measurement; this skill decides whether a measured item may appear in the
recommendation at all.

This skill does not authorize deletion, quitting, restarting, or stopping.
Recommendations remain read-only until the user authorizes the exact action.

## Candidate gates

An item qualifies only when all of these are true:

1. The exact file, directory, application, or process tree exists now.
2. Its owner and purpose are known.
3. It is proven irrelevant to the user's current and intended workload.
4. Its removal or shutdown is material enough to matter, or it is clearly
   broken, runaway, or duplicated.
5. The exact action and user-visible impact are understood.

Failure of any gate means exclusion, not a lower ranking. A target, percentage,
pressure level, or desire to produce a non-empty answer never relaxes the gates.
If nothing qualifies, return no candidates.

## Preserve active work

Exclude every active repository, clone, worktree, build, simulator, bridge,
remote-control path, service, application, and its task-owned descendants.
Generated output inside an active worktree is active work too. Git-ignored
status, regenerability, age, low CPU, a version mismatch, or the absence of an
open file handle does not make it disposable.

Do not recommend deleting cache state of any kind, including global, shared,
application, package-manager, build-system, dependency, or project-local
caches. Do not measure caches to fill a storage shortfall.

Do not use Trash as a destination, staging area, archive, or recommendation.
For an explicitly authorized exact disposable target, remove it permanently and
directly. If ownership, relevance, publication, or authorization is uncertain,
preserve the item in place and report the uncertainty.

## Running processes

Inspect actual running processes and aggregate the complete owner tree. A
process candidate must be running now, proven unrelated to intended work, and
large enough in aggregate to materially improve usable memory, unless it is
clearly broken or runaway.

User-confirmed applications, simulators, bridges, agents, browsers, remote
sessions, and services are intended work. Do not list them because they are old,
idle, numerous, or large. Do not clutter the answer with small helpers or
ordinary operating-system daemons whose removal would not materially help.

Prefer one graceful operation on the exact owning application or root process.
Never turn a diagnostic request into a quit, restart, or kill without current
authorization.

## Storage

Use the owning measurement capability to establish current free space, the
selected target, and the exact shortfall. Then list only non-cache, inactive,
proven-disposable targets that pass every candidate gate. Active worktrees and
anything below them are excluded from general storage recommendations.

Logical size is only a projection. After authorized permanent removal, verify
physical reclamation with the filesystem's free-space measurement and stop at
the selected target. If eligible targets do not cover the shortfall, report the
exact remaining gap; do not pad the list with active, uncertain, or cached data.

## Task-owned resources

The task that creates a clone, build tree, temporary artifact, browser session,
server, watcher, or worker owns it until closeout. While that task remains
active, the resource is not a host-cleanup candidate. After the task's requested
shipping boundary is verified, use `toolchain:isolate-repository-work` to close
the exact owned processes and permanently remove the exact verified disposable
footprint.

## Answer shape

Return only qualifying actions. When none qualify, say so directly:

```text
Storage candidates: none proven.
Memory/process candidates: none proven.
```

When candidates qualify, include the exact target or process owner, measured
size or aggregate RSS, proof of irrelevance, exact action, and impact.
