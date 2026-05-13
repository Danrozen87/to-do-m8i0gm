---
generated_by: mote
mote_kind: contributing
---

# Contributing to this Mote-connected repo

This repository is the shared knowledge layer between Mote (a meeting
recorder + task manager used by your PMs, designers, researchers, and
ops teammates) and engineers reading code in their IDE. You don't
need to install Mote to contribute.

## Paths Mote manages

```
projects/<slug>/          ← project metadata, docs, notes
meetings/<date-slug>/     ← transcript, summary, notes per meeting
tasks/<id>.toml           ← one file per task
areas/<slug>.toml         ← one file per area (Things-3-style group)
.mote/                    ← machine bookkeeping (manifest, contracts)
```

Anything **outside** those folders is yours. Drop a `decisions/`
folder, a `RFCs/`, anything — Mote will never touch it.

Anything **inside** those folders is co-tenant: Mote owns the schema
but your hand-edits round-trip back into the app via the bilateral
merge. Loro CRDT handles concurrent text edits; HLC handles
concurrent structural edits. Last-writer-wins applies for set
membership.

## How to close a task without opening Mote

Two equally-supported gestures — pick whichever fits your workflow.

### 1. Toggle a markdown checkbox

Each project has a `projects/<slug>/tasks.md` that mirrors its tasks
as GitHub-Flavoured-Markdown checkboxes. Flip the checkbox in any
editor (VS Code with `Markdown All in One` toggles on `Ctrl+Shift+Enter`)
or in the GitHub PR review UI, commit, push. Mote picks it up on
the next cycle.

```markdown
- [x] [Q4-PLAN-12] Send design brief to engineering <!-- mote:t/abc -->
```

The `<!-- mote:t/<uuid> -->` anchor is the back-reference Mote uses
to find the task in SQLite. Don't delete it (the task becomes
orphaned in the markdown if you do).

### 2. Reference the task in a commit message

Use any of `closes`, `fixes`, `resolves`, `completes`, `done`, `did`
followed by the task's id:

```
Wire signup form. Closes Q4-PLAN-12.
```

The id prefix is per-project, set in `projects/<slug>/meta.toml`
under `mote_id_prefix`. Defaults to the project slug in upper case.

## How conflicts resolve

When two people edit the same field, Mote merges automatically:

- **Prose** (notes, summaries, doc bodies) → Loro CRDT character-level
  merge. Both edits survive in the merged text.
- **Structural fields** (title, due-date, tags, project assignment)
  → HLC tie-break by the `Mote-Hlc:` commit trailer. Most recent
  writer wins.
- **Set membership** (utterances, tasks, docs) → union by id;
  per-row text merges via Loro.

If Mote can't resolve, the conflicted entity surfaces in the app's
activity feed for the human to fix.

## How not to break things

- **Don't rename Mote-managed folders.** The slug in
  `projects/<slug>/` is presentational; Mote keys off the `id`
  inside `meta.toml`. Renaming the folder is OK; renaming the `id`
  field will orphan it.
- **Don't hand-edit `.mote/manifest.json`.** It tracks
  Mote-authored paths for collab-safe orphan cleanup. Touching it
  can cause your teammates' new files to be wrongly deleted on the
  next mirror cycle.
- **Don't edit `transcript.ndjson` by hand.** Each line is a
  diarised utterance with timestamps; manual edits will be
  overwritten on the next recording's diarisation pass.

## Where to ask

If you're the only engineer on the repo and the contract is
unclear, your teammates using Mote can see the activity feed of
everything that happened. Bring it up in your next standup — the
person who wrote the affected note is probably waiting to clarify.
