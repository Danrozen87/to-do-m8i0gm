<h1>Budget app review — meeting summary</h1>
<p><strong>Source meeting:</strong> <em>Fyra separata budgetsektioner för projektet</em> (~72 min, Swedish)<br><strong>Meeting ID:</strong> <code>3dbbafa0-5f1d-44e0-8993-0d3207aae20f</code><br><strong>Project:</strong> RK Travel Group</p>
<p>A working session reviewing a finance/budget app — structure, naming, workflow, version control, and UX bugs.</p>
<hr>
<h2>Big decisions</h2>
<ul>
<li>Split the budget into <strong>four sections</strong>: revenue, COGS, personnel costs, other costs — each owned by a different stakeholder. Drill-down by section / product / department.</li>
<li>Rename <strong>"baseline" → "budget proposal"</strong>, <strong>"draft" → "budget draft"</strong>.</li>
<li>Insert a new <strong>"waiting to be approved"</strong> status between <em>submitted</em> and <em>approved</em>; drop the separate "locked" step (approval becomes the lock).</li>
<li>The app's language should be <strong>English throughout</strong> — translate remaining Swedish UI.</li>
<li>Add <strong>version snapshots</strong> (e.g. "eleventh November version") with Excel export per version.</li>
</ul>
<h2>Open questions worth flagging</h2>
<ul>
<li>How to allocate <strong>COGS to specific products</strong> when some costs are product-specific and others are general.</li>
<li>Whether <strong>travel costs</strong> belong under personnel costs or other costs, and how to display them.</li>
<li>How to handle <strong>row-level locking</strong> — who locks, who unlocks, what's reversible.</li>
<li>How to handle <strong>notifications</strong> for the new "waiting to be approved" step.</li>
<li>How <strong>version numbers and dates</strong> should be displayed to avoid confusion between drafts and finals.</li>
</ul>
<h2>Operational gripes (UX / bugs)</h2>
<ul>
<li><strong>Wrong fiscal year</strong> shown on dashboard (2026 vs 2027) — needs to be synced everywhere.</li>
<li><strong>Cost centers not clickable</strong> (19 active, but no navigation).</li>
<li><strong>Audit log</strong> has timestamps + user IDs but no descriptive entries — bad for traceability.</li>
<li><strong>Copy-row</strong> should duplicate the marked row without extra prompts.</li>
<li><strong>Add-line</strong> should behave like Excel — quick row insertion.</li>
<li><strong>No undo</strong> (Ctrl-Z) for accidental edits/deletions.</li>
<li><strong>App freezes</strong> on large datasets — performance concern.</li>
<li>A blue notification box in the budget tab still needs translation to English.</li>
<li>A "global adjustment" setting is set to 28 with no clear purpose — needs clarification.</li>
</ul>
<hr>
<p><em>Generated from the meeting's auto-summary on 2026-05-13.</em></p>
