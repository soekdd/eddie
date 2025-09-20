# Eddie rechnet: Warum die Vasa sinken musste

*Ich stehe gedanklich vor dem Rumpf, male mir ein Seitenschema hin und schreibe mir Variablen an den Rand. Dann mache ich nur das Nötige: Archimedes, Schwerpunkt, ein bisschen Geometrie. Keine Kunststücke.*

---

## 1) Minimal-Modell und Variablen

- \(\Delta_0\): Anfangsverdrängung (Masse des Schiffs im Moment der Ausfahrt).  
- \(T\): Anfangstiefgang (Wasserlinie → Kiel).  
- \(A_{\text{WL}}\): Fläche der Wasserlinie (von oben gesehen).  
- \(KG_0\): Höhe des Gesamtschwerpunkts über Kiel (ohne Zusatzballast).  
- \(KM(T)\): Höhe des Metazentrums über Kiel (funktioniert wie ein „Formbonus“ der Rumpfgeometrie).  
- \(GM = KM - KG\): metazentrische Höhe (Stabilitätsmaß; \(GM>0\) ist die Grundbedingung).  
- \(z_b\): Einbauhöhe des Ballasts über Kiel (Bilge → sehr klein).  
- \(\Delta m\): zusätzlich eingebauter Ballast (Masse).  
- \(F_0\): anfängliche Freibordhöhe der **unteren** Stückpforten über der Wasserlinie (aufrecht).  
- \(\rho\): Dichte von Wasser (≈ 1000 kg/m³).

**Vereinfachung 1:** Ich halte \(KM\) zunächst **konstant** \(= KM_0\). Real steigt \(KM\) mit mehr Tiefgang leicht an, das **würde** helfen. Wenn ich trotz dieser Nettigkeit ein „No-Go“ zeige, ist das Argument robust.

**Vereinfachung 2:** Kleine Änderungen → lineare Näherung für den Tiefgang:
\[
\Delta T \approx \frac{\Delta m}{\rho\,A_{\text{WL}}}.
\]

---

## 2) Schwerpunkt mit Zusatzballast

Neuer Schwerpunkt:
\[
KG(\Delta m) \;=\; \frac{KG_0\,\Delta_0 + z_b\,\Delta m}{\Delta_0 + \Delta m}.
\]

Stabilitätsforderung:
\[
GM(\Delta m) \;=\; KM_0 - KG(\Delta m) \;\ge\; 0.
\]

Einsetzen und umformen:
\[
(KM_0 - KG_0)\,\Delta_0 + (KM_0 - z_b)\,\Delta m \;\ge\; 0.
\]

Damit der **negative Start** (\(GM_0 = KM_0 - KG_0 < 0\)) geheilt wird, braucht es mindestens
\[
\Delta m_{\text{stab}} \;=\; \frac{\Delta_0\,(KG_0 - KM_0)}{\,KM_0 - z_b\,}.
\]

---

## 3) Freibord-Grenze der unteren Stückpforten

Mehr Ballast → größerer Tiefgang → weniger Freibord.  
Die Pforten bleiben trocken (aufrecht), solange
\[
F(\Delta m) \;=\; F_0 - \Delta T \;\ge\; 0 
\;\;\Rightarrow\;\; \Delta m \;\le\; \rho\,A_{\text{WL}}\,F_0.
\]

Das ist die **Obergrenze**:
\[
\Delta m_{\text{frei}} \;=\; \rho\,A_{\text{WL}}\,F_0.
\]

---

## 4) Der Kern-Vergleich

Wenn
\[
\Delta m_{\text{stab}} \;>\; \Delta m_{\text{frei}},
\]
dann existiert **kein** \(\Delta m\), das **gleichzeitig** \(GM\ge 0\) **und** „Pforten trocken“ erfüllt.  
Das Schiff ist dann logisch „gefangen“: Entweder **instabil** (kippt) oder **zu tief** (säuft über die Öffnungen).

---

## 5) Realistische Verschärfer (die mein Modell **nicht** einmal ausnutzt)

- **Krängung:** Schon bei \(10\!-\!15^\circ\) kippt auf einer Seite die untere Pforte unter. Effektiv bräuchten wir eine **Sicherheitsmarge** \(F(\phi)>0\), was \(\Delta m_{\text{frei}}\) **weiter verkleinert**.  
- **Freiflächen-Effekt:** Wasser, das in der Bilge schwappt, **senkt** \(GM\) zusätzlich. Ich habe es weggelassen (pro Schiff) – das macht das „No-Go“ nur deutlicher.

---

## 6) Fazit im Klartext

- Stabilität verlangt **viel** Ballast **tief unten** → \(\Delta m_{\text{stab}}\).  
- Trocken bleiben verlangt **wenig** Zusatzmasse, weil die **unteren Stückpforten** fies tief liegen → \(\Delta m_{\text{frei}}\).  
- Bei der Vasa-Geometrie ist \(\Delta m_{\text{stab}} > \Delta m_{\text{frei}}\) plausibel — selbst im „freundlichen“ Modell.  
⇒ **Entweder kippen oder absaufen.** Physik lässt sich nicht überreden.

---

## 7) Eddie-Ton

*Ich male mir die Wasserlinie wie einen Strichcode. Oben prunken die Decks, unten kauert die Bilge. „Runter mit dem Schwerpunkt“, denke ich und schiebe symbolisch Steine nach unten. Die Rechnung ist gemein einfach: So viel Gewicht brauche ich, damit \(GM\) überhaupt positiv wird. Und fast im selben Zug raubt mir genau dieses Gewicht das letzte bisschen Abstand zu den Stückpforten. Zwei Ungleichungen, die nicht gleichzeitig wahr sein wollen. Ich seufze. Man kann barocken Prunk auf ein Schiff nageln – aber nicht die Gravitation.*

