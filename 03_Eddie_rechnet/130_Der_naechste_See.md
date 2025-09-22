---
# Eddie rechnet – Tag 3: Land der tausend Seen (Wie nah ist man am Wasser?)

```json
{
  "date": "1985-09-12",
  "daytime": "day",
  "place": "Vaasa, Küchentisch",
  "persons": ["Eddie"],
  "synopsis": "Abschätzung der Wahrscheinlichkeit, innerhalb von 1 km an einem See zu sein – mit geometrischer Flächen-Näherung.",
  "mood": "spielerisch, plausibilitätsliebend",
  "tense": "present, Eddies first-person perspective",
  "mode": "eddie-rechnet"
}
```

**Aufgabe (Sinis Zettel).**  
„Finnland hat sehr viele Seen. Wie groß ist grob die Wahrscheinlichkeit, dass ein **zufällig** gewählter Punkt in Finnland **höchstens 1 km** von einem Seeufer entfernt liegt?“

---

## Modell-Idee
Ich nutze eine Flächenabschätzung: Wenn Seen gemeinsam die Flächenfraktion \(w\) des Landes bedecken, dann ist die „1‑km‑Uferzone“ näherungsweise die **Minkowski‑Summe** der Wasserflächen mit einem 1‑km‑Kreis. Deren Fläche ist ungefähr
\[
A_{\text{Ufer}} \approx A_{\text{Wasser}} + P_{\text{Wasser}}\cdot r,
\]
wobei \(P_{\text{Wasser}}\) die gesamte Uferlänge und \(r=1\,\text{km}\) ist. Den zweiten Term nennt man „Randaufdickung“. Exakt bräuchte man die reale **Uferlänge** (küstenlinie‑artig), die sehr groß ist. Ich arbeite mit einer robusten Ober‑/Unterabschätzung.

- **Untergrenze:** Ignoriere den Randterm → \(\Pr(\le1\,\text{km})\ge w\).  
- **Obergrenze:** Binde den Randterm durch Isoperimetrie: Für gegebene Gesamtfläche ist der **Kreis** perimeter‑minimal. Also
\[
P_{\text{Wasser}} \ge 2\sqrt{\pi A_{\text{Wasser}}}.
\]
Das setzt eine **Untergrenze** für \(P\), aber ich brauche eine **Plausibilitätsgröße**. Real sind Seen stark zerklüftet, **also** ist der Randterm **viel größer** als beim Kreis – gut für Nähe zum Wasser.

Nehme konservativ \(w=0{,}1\) (≈ 10 % Wasser) und setze für die Uferlänge effektiv das **Doppelte** der Kreis‑Untergrenze an (sehr vorsichtig):
\[
P_{\text{eff}} \approx 2\cdot 2\sqrt{\pi A_{\text{Wasser}}} = 4\sqrt{\pi w A_{\text{Finnland}}}.
\]
Dann
\[
\frac{A_{\text{Ufer}}}{A_{\text{Finnland}}} \approx w + \frac{P_{\text{eff}} r}{A_{\text{Finnland}}}
= w + \frac{4\sqrt{\pi w A}}{A}\, r
= w + 4r\sqrt{\frac{\pi w}{A}}.
\]

Setze \(A = 338{,}000\,\text{km}^2\) (Finnlands Größenordnung), \(r=1\,\text{km}\), \(w=0{,}1\):
\[
\Pr \approx 0{,}1 + 4\cdot 1\cdot \sqrt{\frac{\pi\cdot 0{,}1}{338000}}
\approx 0{,}1 + 4\cdot \sqrt{\,9{,}3\cdot 10^{-7}\,}
\approx 0{,}1 + 4\cdot 9{,}6\cdot 10^{-4}
\approx 0{,}1 + 0{,}0038
= 0{,}1038.
\]

Das ist **zu konservativ**, denn reale Uferlängen sind um Größenordnungen größer als die Kreis‑Grenze. Nimmt man z. B. das **Zehnfache** der Kreis‑Schranke (immer noch moderat für „tausend Seen“), steigt der Randterm auf ca. **3,8 %**, also
\[
\Pr(\le 1\,\text{km}) \approx 14\%.
\]

---

## Ergebnis (plausibel, erzählbar)
Eine robuste Schätzung liegt zwischen **10 %** (nur Wasserfläche) und **≈ 15 %** (mit moderatem Randterm). Für „Land der tausend Seen“ ist **„jede/r Siebte bis Zehnte“** in 1 km‑Nähe zum See **plausibel**.

**Anmerkung.** Präzision braucht echte Geodaten (Uferlängen/Fraktaldimension). Aber als Frühstücksrechnung reicht die Geometrie mit Randaufdickung völlig aus – und erklärt *warum* Seenländer „wasser‑nah“ wirken.
