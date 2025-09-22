# Eddie rechnet: Warum die Vasa sinken musste

*Ich stehe gedanklich vor dem Rumpf, male mir ein Seitenschema hin und schreibe
mir Variablen an den Rand. Dann mache ich nur das Nötige: Archimedes,
Schwerpunkt, ein bisschen Geometrie. Keine Kunststücke.*

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

---

## 2) Schwerpunkt mit Zusatzballast

Neuer Schwerpunkt: \[ KG(\Delta m) \;=\; \frac{KG_0\,\Delta_0 + z_b\,\Delta
m}{\Delta_0 + \Delta m}. \]

Stabilitätsforderung: \[ GM(\Delta m) \;=\; KM_0 - KG(\Delta m) \;\ge\; 0. \]

Daraus folgt ein Mindestwert: \[ \Delta m_{\text{stab}} \;=\;
\frac{\Delta_0\,(KG_0 - KM_0)}{\,KM_0 - z_b\,}. \]

---

## 3) Freibord-Grenze der unteren Stückpforten

Mehr Ballast → größerer Tiefgang → weniger Freibord. Die Pforten bleiben trocken
(aufrecht), solange \[ F(\Delta m) \;=\; F_0 - \Delta T \;\ge\; 0
\;\;\Rightarrow\;\; \Delta m \;\le\; \rho\,A_{\text{WL}}\,F_0. \]

---

## 4) Der Kern-Vergleich

Wenn \[ \Delta m_{\text{stab}} \;>\; \Delta m_{\text{frei}}, \] dann existiert
**kein** \(\Delta m\), das **gleichzeitig** \(GM\ge 0\) **und** „Pforten
trocken“ erfüllt. Das Schiff ist dann logisch „gefangen“: Entweder **instabil**
(kippt) oder **zu tief** (säuft über die Öffnungen).

---

## 5) Historische Notiz mit realen Daten

- **Verdrängung (ausgerüstet):** ~**1 200 t**, **Tiefgang:** ~**4,8 m**, **Länge:** ~**69 m**, **Breite:** ~**11,7 m**.   
- **Ballast an Bord:** nur ~**120 t** Steine. Experten schätzen, es wären **mehr als doppelt so viel** nötig gewesen, um die Tenderheit zu heilen. Das hätte **zusätzliche ~120 t** bedeutet.   
- **Unterste Stückpforten:** nur „**wenige Fuß**“ über der Wasserlinie; bei schon **10–15° Krängung** tauchten sie ein.   
- **„30-Mann-Test“:** Vor Auslaufen ließ man 30 Männer über Deck laufen; das Schiff schwankte so stark, dass der Test abgebrochen wurde.   

**Ergebnis:**
- Erforderlich zur Stabilisierung: ≥ **+120 t** Zusatzballast.  
- Praktisch möglich, ohne Pforten nass zu machen: fast **0 t** (wegen minimalem Freibord).  
- Damit ist die Ungleichung \(\Delta m_{\text{stab}} > \Delta m_{\text{frei}}\) mit historischen Daten **tatsächlich erfüllt**.

---

## 6) Fazit im Klartext

- Stabilität verlangt **viel** Ballast **tief unten** → \(\Delta m_{\text{stab}}\).  
- Trocken bleiben verlangt **wenig** Zusatzmasse, weil die **unteren Stückpforten** fies tief liegen → \(\Delta m_{\text{frei}}\).  
- Bei der Vasa-Geometrie war \(\Delta m_{\text{stab}} > \Delta m_{\text{frei}}\).  
⇒ **Entweder kippen oder absaufen.** Physik lässt sich nicht überreden.

---

## 7) Eddie-Ton

*Ich male mir die Wasserlinie wie einen Strichcode. Oben prunken die Decks,
unten kauert die Bilge. „Runter mit dem Schwerpunkt“, denke ich und schiebe
symbolisch Steine nach unten. Die Rechnung ist gemein einfach: So viel Gewicht
brauche ich, damit \(GM\) überhaupt positiv wird. Und fast im selben Zug raubt
mir genau dieses Gewicht das letzte bisschen Abstand zu den Stückpforten. Zwei
Ungleichungen, die nicht gleichzeitig wahr sein wollen. Ich seufze. Man kann
barocken Prunk auf ein Schiff nageln – aber nicht die Gravitation.*