# Budget app review: meeting summary

**Source meeting:** *Fyra separata budgetsektioner för projektet* (~72 min, Swedish)
**Meeting ID:** `3dbbafa0-5f1d-44e0-8993-0d3207aae20f`
**Project:** RK Travel Group

A working session reviewing a finance/budget app: structure, naming, workflow, version control, and UX bugs.

---

## Big decisions

- Split the budget into **four sections**: revenue, COGS, personnel costs, other costs (each owned by a different stakeholder). Drill-down by section / product / department.
- Rename **"baseline" → "budget proposal"**, **"draft" → "budget draft"**.
- Insert a new **"waiting to be approved"** status between *submitted* and *approved*; drop the separate "locked" step (approval becomes the lock).
- The app's language should be **English throughout**; translate remaining Swedish UI.
- Add **version snapshots** (e.g. "eleventh November version") with Excel export per version.

## Open questions worth flagging

- How to allocate **COGS to specific products** when some costs are product-specific and others are general.
- Whether **travel costs** belong under personnel costs or other costs, and how to display them.
- How to handle **row-level locking**: who locks, who unlocks, what's reversible.
- How to handle **notifications** for the new "waiting to be approved" step.
- How **version numbers and dates** should be displayed to avoid confusion between drafts and finals.

## Operational gripes (UX / bugs)

- **Wrong fiscal year** shown on dashboard (2026 vs 2027); needs to be synced everywhere.
- **Cost centers not clickable** (19 active, but no navigation).
- **Audit log** has timestamps + user IDs but no descriptive entries; bad for traceability.
- **Copy-row** should duplicate the marked row without extra prompts.
- **Add-line** should behave like Excel: quick row insertion.
- **No undo** (Ctrl-Z) for accidental edits/deletions.
- **App freezes** on large datasets; performance concern.
- A blue notification box in the budget tab still needs translation to English.
- A "global adjustment" setting is set to 28 with no clear purpose; needs clarification.

---

*Generated from the meeting's auto-summary on 2026-05-13.*
