---
generated_by: mote
mote_kind: internals
---

# `.mote/` — internals

This folder holds Mote's machine bookkeeping for the colocated Git
clone. You don't need to touch anything here.

## `manifest.json`

The set of paths Mote authored in the last mirror cycle, sorted,
forward-slash relative to the repo root. Read at the start of each
cycle; rewritten atomically at the end.

Purpose: collab-safe orphan cleanup. Mote will only delete files
listed in the prior manifest. Files you (or a teammate) added by
hand — `decisions/`, `RFCs/`, anything outside the Mote schema —
are never in the manifest and therefore never touched.

## Commit message trailers

Every Mote commit carries a structured trailer block. Grep-friendly,
human-readable.

```
Mote-Principal: <user>            (UI-driven write)
Mote-Principal: <user>/<agent>    (MCP / agent write — Claude, etc.)
Mote-Action: notes-edit | task-mutation | merge-from-remote | ...
Mote-Snapshot-Id: <blake3>        (dedup; identical snapshots short-circuit)
Mote-Hlc: <ms>:<counter>:<peer>   (hybrid logical clock for merge tie-break)
Mote-Project-Id: <uuid>
Mote-Project-Slug: <slug>
Mote-Task-Ids: <comma-separated>
Mote-Meeting-Ids: <comma-separated>
Mote-Schema-Version: 1
```

`git log --pretty='%H %s%n%(trailers:key=Mote-Principal,valueonly)'`
gives you the actor for every commit at a glance.

## Bilateral merge

When a teammate (or you, via hand-edit) commits a change to a
Mote-managed file, Mote's next mirror cycle:

1. Fetches the remote.
2. Reads the remote tree via `git show <branch>:<path>` and parses
   it back into a Snapshot (the inverse of materialise).
3. Merges remote vs local: Loro for prose, HLC for structural, union
   for set membership.
4. Applies the merged result to SQLite.
5. Re-materialises and pushes.

If the push is rejected (another commit landed in between), the
cycle retries up to 5 times with exponential backoff. After that,
the chip in Mote surfaces an actionable error.
