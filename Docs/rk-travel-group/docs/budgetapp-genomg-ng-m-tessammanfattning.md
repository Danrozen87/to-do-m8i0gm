# Budgetapp-genomgång: mötessammanfattning

**Källmöte:** *Fyra separata budgetsektioner för projektet* (~72 min, svenska)
**Mötes-ID:** `3dbbafa0-5f1d-44e0-8993-0d3207aae20f`
**Projekt:** RK Travel Group

Ett arbetspass där teamet gick igenom en ekonomi- och budgetapp: struktur, namngivning, arbetsflöde, versionshantering och UX-buggar.

---

## Stora beslut

- Dela upp budgeten i **fyra sektioner**: intäkter, COGS, personalkostnader och övriga kostnader (varje sektion ägs av olika intressenter). Drill-down per sektion, produkt eller avdelning.
- Döp om **"baseline" → "budget proposal"** och **"draft" → "budget draft"**.
- Lägg till en ny status **"waiting to be approved"** mellan *submitted* och *approved*; ta bort det separata "locked"-steget (approval blir låsningen).
- Appens språk ska vara **engelska genomgående**; det svenska som finns kvar i UI:et ska översättas.
- Lägg till **versions-snapshots** (t.ex. "version elfte november") med Excel-export per version.

## Öppna frågor värda att flagga

- Hur **COGS ska fördelas på specifika produkter** när vissa kostnader är produktspecifika och andra generella.
- Om **resekostnader** hör hemma under personalkostnader eller övriga kostnader, och hur de ska visas.
- Hur **låsning på radnivå** ska fungera: vem låser, vem låser upp, vad är reversibelt.
- Hur **notifikationer** ska hanteras för det nya "waiting to be approved"-steget.
- Hur **versionsnummer och datum** ska visas för att undvika förväxling mellan utkast och slutversioner.

## Operativa anmärkningar (UX och buggar)

- **Fel räkenskapsår** visas på dashboarden (2026 mot 2027); måste synkas överallt.
- **Cost centers är inte klickbara** (19 aktiva, men ingen navigering).
- **Audit-loggen** har tidsstämplar och user-id:n men inga beskrivande poster; dåligt för spårbarheten.
- **Copy-row** ska kopiera den markerade raden utan extra frågor.
- **Add-line** ska bete sig som Excel: snabb radinmatning.
- **Inget undo** (Ctrl-Z) för oavsiktliga ändringar eller raderingar.
- **Appen fryser** vid stora dataset; prestandaproblem.
- En blå notifikationsruta i budget-fliken behöver fortfarande översättas till engelska.
- En "global adjustment"-inställning är satt till 28 utan tydligt syfte; behöver klargöras.
