# Eddie rechnet – Tag 2: Depots & Rentiere (Das leichte Depot‑Problem)

**Aufgabe (Sinis Zettel).** „Eine Wanderin in Lappland kann pro Tag **1 Ration**
verbrauchen und höchstens **3 Rationen** tragen. Am Startpunkt liegt unbegrenzt
Vorrat. Wie weit kann sie maximal **hin und wieder zurück** in die Wildnis
vordringen, wenn sie unterwegs Depots anlegt? (Gehgeschwindigkeit sei **20
km/Tag**, Depots kosten keine Zeit.)“

---

## Idee

Ohne Depots (nur 3 Rationen) schafft man **1,5 Tage** hin (dann bleiben 1,5 fürs
Zurück) → **30 km** Gesamtweg, **15 km** einfach. Mit Depots kann man den Hinweg
länger machen, weil man Teile der Ladung vorzieht, ablegt, zurückkehrt
(*Shuttling*).

Ich löse die **einfachste sinnvolle Strategie**: ein einziges Depot bei Distanz
\(x\) vom Start. Ablauf:

1. Mit voller Ladung (3 Rationen) zum Punkt \(x\), dort etwas ablegen, zurück zum Start, wieder vorgehen – bis am Depot genug für den langen Vorstoß liegt.
2. Am Ende ein letzter „Durchstoß“: Start → Depot auffüllen → weiter bis zur Wendestelle → zurück (unter Nutzung der Depots).

---

## Rechnung (eine Depotstufe)

Nenne \(C=3\) die Traglast, Verbrauch \(1\) Pro Tag, Tempo \(v=20\) km/Tag. Ein
Hin‑ und Rückshuttle von Länge \(x\) kostet **2x/v** Tage und verbraucht
**2x/v** Rationen. Wenn ich pro Shuttle **eine Ration** am Depot ablegen will,
muss ich **(1 + 2x/v)** Rationen aus dem Start mitnehmen. Wegen Traglast \(C=3\)
gilt \[ 1 + \frac{2x}{v} \le C = 3 \quad\Rightarrow\quad \frac{2x}{v} \le 2
\;\Rightarrow\; x \le v = 20\,\text{km}. \] Mit Traglast 3 kann ich also mit
einem Depot **bis 20 km** effizient shutteln und pro Shuttle **1 Ration** am
Depot lassen.

Wie viele Shuttles? Ich brauche am Depot so viel, dass der *Durchstoß* klappt.
Sei \(D\) die **einfache** Enddistanz. Der Durchstoß besteht aus zwei Phasen:

- **Start → Depot (x)**: kostet \(x/v\) Rationen.
- **Depot → D → Depot** (hin und zurück): kostet \(2(D-x)/v\) Rationen.

Diese Summe muss von einer Mischung aus **am Depot gelagerter Menge** plus
**mitgebrachter Restladung** gedeckt werden. Beim Losgehen zum Durchstoß trage
ich wieder \(C=3\), wovon \(x/v\) bis zum Depot verbraucht ist; am Depot habe
ich also \(3 - x/v\) auf dem Rücken **plus** die **Lagermenge L**.

**Lagermenge L durch Shuttles:** Jeder Shuttle legt **1 Ration** ab. Wie oft
kann ich shutteln, bis mein Zeit-/Verbrauchsbudget unsinnig wird? Praktisch
lohnt ein paar Mal; nehmen wir **k Shuttles**, ergeben **L = k**.

**Bedarf im Durchstoß ab Depot:** \(2(D-x)/v\). Verfügbar: \(L + (3 - x/v)\).
Forderung: \[ 2\frac{D-x}{v} \le L + 3 - \frac{x}{v}. \] Mit \(x =
20\,\text{km}, v=20\,\text{km/Tag}\) wird \(x/v = 1\). Dann: \[ 2(D-20)/20 \le L
- 3 - 1 \quad\Rightarrow\quad \frac{D-20}{10} \le L + 2. \] Also \(D \le 20 +
10(L+2) = 40 + 10L\).

**Wie groß darf L sein?** Jeder Shuttle kostet Zeit/Rationen: **2x/v = 2**
Rationen reiner Transport + 1 Ration Ablage = **3 Rationen**, und ich kann
jeweils genau mit **3** starten: Es passt knapp. Realistisch schaffe ich **k =
2** oder **3** Shuttles, bevor es ineffizient wird (mehr bringt kaum Gewinn,
weil ich nur trage, was ich vorher selbst verbrauche).

- Für **k = 2** → \(L=2\): \(D \le 40 + 20 = 60\,\text{km}\).
- Für **k = 3** → \(L=3\): \(D \le 40 + 30 = 70\,\text{km}\).

Damit ist die **einfache** (eine‑Depot) Strategie gut für **\(D≈60\)–\(70\)
km**. Ohne Depots waren es nur **15 km**. Gewinn enorm.

---

## Ergebnis (runde, praxisnah)

Mit einem Depot bei **20 km** und **2–3 Shuttles** erreiche ich **≈ 60–70 km**
maximale Entfernung (hin), bevor ich wenden muss, um sicher zurückzukehren.

**Anmerkung.** Die exakte Optimierung führt zum klassischen „Jeep/Camel Problem“
und nutzt Stückweise‑Strategien mit fallenden effektiven Verbrauchsfaktoren
(harmonische Reihen). Meine „light“-Lösung bleibt bewusst bei **einer
Depotstufe**, die sich sauber rechnen und erzählen lässt.
