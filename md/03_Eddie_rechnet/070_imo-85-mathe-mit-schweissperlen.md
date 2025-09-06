# IMO 85 – Mathe mit Schweißperlen

```json
{
  "chapter": 6,
  "section": "Eddie rechnet",
  "title": "IMO 85 – Mathe mit Schweißperlen",
  "mode": "appendix",
  "tags": [
    "Mathematik",
    "Eddie rechnet"
  ],
  "synopsis": "Aufgabe 4: ausführlich und nachvollziehbar (Eddies lange Erklärung)."
}
```

> **Hinweis:** Dieses Kapitel gehört zu *„Eddie rechnet“*.
> Eddie erklärt hier launisch, schrittweise und gut nachvollziehbar.
> Platz für Beispiele, Skizzen, Mini-Beweise und kleine Seitenhiebe.

---

Ich sitze da, schiebe mein Heft zurecht und atme einmal tief durch. **Keine Panik** – wir gehen das **zusammen** an. Ich rede, du nickst (oder runzelst die Stirn), und wenn's holpert, atmen wir erneut durch. Deal?

Heute: **Aufgabe 4 der IMO 1985**. Kurzform: In einer Menge $M$ aus **1985 verschiedenen positiven Zahlen**, deren **Primteiler** alle $\le 26$ sind, gibt es **vier Zahlen**, deren Produkt eine **vierte Potenz** ist. Klingt groß, ist aber ein Trick mit Schubladen und Sockensortieren. Wirklich. 🙂

---

## 1) Worum geht's *eigentlich*?

Wir wollen zeigen, **dass es solche vier Zahlen immer gibt** – egal, welche 1985 Zahlen mit erlaubten Primteiler du auswählst. Wir müssen nichts **Konkretes ausrechnen** (weil $M$ nicht konkret gegeben ist), sondern **verstehen**, *warum* das zwangsläufig klappt. Mathe nennt das einen **Existenzbeweis**.

Der Plan in drei Häppchen:

1. Mini‑Crashkurs: **Primzahlen**, **Quadrate** und **vierte Potenzen** (ohne Kopfweh).
2. Ein Trick namens **quadratfreier Kern** (klingt nerdig, ist einfach).
3. **Schubfachprinzip**: Zu viele Socken für zu wenige Schubladen => *irgendwo* liegen vier gleiche „Kerne“. Dann macht ihr Produkt *plopp* und wird eine **vierte Potenz**.

---

## 2) Mini‑Crashkurs: Primzahlen & Co

**Primzahl** heißt: Nur durch $1$ und sich selbst teilbar.
Bis $26$ sind das:
$$
2,\;3,\;5,\;7,\;11,\;13,\;17,\;19,\;23.
$$

> Achtung, Klassiker: **$1$ ist *keine* Primzahl.**

**Primfaktorzerlegung** heißt: Jede Zahl schreibt man als Produkt von Primzahlen, z.B.
$$
24 = 2^3\cdot 3,\qquad 54 = 2\cdot 3^3.
$$

**Quadrat** (also eine zweite Potenz) bedeutet: *Alle* Exponenten in der Primfaktorzerlegung sind **gerade**.
Beispiele:

- $36 = 2^2\cdot 3^2$ ist ein Quadrat.
- $72 = 2^3\cdot 3^2$ ist **kein** Quadrat (weil $2^3$ ungerader Exponent hat).

**Vierte Potenz** bedeutet: *Alle* Exponenten sind **Vielfache von 4** (also $0,4,8,\dots$).
Beispiel:
$$
16 = 2^4 \quad\text{ist eine vierte Potenz,}\qquad
2^8 3^4 \quad\text{ist auch eine vierte Potenz.}
$$

---

## 3) Der „quadratfreie Kern“ (und warum er Gold wert ist)

**Idee:** Jede Zahl $x$ lässt sich eindeutig in zwei Schichten splitten
$$
x = q \cdot r^2,
$$
wobei

- $q$ **quadratfrei** ist (in $q$ kommen Primzahlen **höchstens einmal** vor: Exponenten nur $0$ oder $1$),
- $r^2$ der **Quadrat‑Anteil** ist (alles, was in $x$ mit geraden Exponenten vorkommt).

> Merkhilfe: $q$ ist der „Stachel“ (nur ungerade Reste), $r^2$ ist der „Flausch“ (glattes Quadrat).

**Beispiele:**

- $24 = 2^3\cdot 3 = (2\cdot 3)\cdot (2^2)$ => $q=6,\; r=2$.
- $54 = 2\cdot 3^3 = (2\cdot 3)\cdot(3^2)$ => $q=6,\; r=3$.
- $216 = 2^3\cdot 3^3 = (2\cdot 3)\cdot(2\cdot 3)^2$ => $q=6,\; r=6$.

> Siehst du: **Viele Zahlen teilen sich denselben Kern $q$**, hier immer $q=6$. Das ist gleich unser Joker.

### Wie viele verschiedene Kerne $q$ gibt es?

Wir haben **9** erlaubte Primzahlen. Jede darf in $q$ **entweder** vorkommen **oder nicht**.
Also gibt es höchstens
$$
2^9 = 512
$$
verschiedene Kerne. (Für jede Primzahl eine Ein/Aus‑Entscheidung → $2\cdot 2\cdots 2$ neunmal.)

---

## 4) Schubfachprinzip: Socken vs. Schubladen

Stell dir **512 Schubladen** vor (die möglichen Kerne $q$) und **1985 Socken** (unsere Zahlen).
Wenn jede Schublade höchstens **3** Socken bekäme, wären das **maximal** $3\cdot512=1536$ Socken.
Aber wir haben **1985** – das ist **mehr** als $1536$.

$$
1985 > 3\cdot512 = 1536.
$$

**Folgerung:** Mindestens **eine** Schublade (also ein bestimmter Kern $q$) enthält **mindestens 4** Zahlen.
Nennen wir sie
$$
a = q r_1^2,\quad b = q r_2^2,\quad c = q r_3^2,\quad d = q r_4^2.
$$

---

## 5) Warum werden diese vier zu einer **vierten Potenz**?

Erst das **Paar‑Trick** (ich liebe den):
$$
ab = (q r_1^2)(q r_2^2) = \bigl(q r_1 r_2\bigr)^2 \quad\text{(ein Quadrat)},
$$
$$
cd = (q r_3^2)(q r_4^2) = \bigl(q r_3 r_4\bigr)^2 \quad\text{(auch ein Quadrat)}.
$$

Und dann **Quadrat · Quadrat = vierte Potenz**:
$$
(ab)(cd) = \bigl(q r_1 r_2\bigr)^2\cdot\bigl(q r_3 r_4\bigr)^2
= \bigl(q r_1 r_2 r_3 r_4\bigr)^4.
$$

**Voilà:** eine **vierte Potenz**. Ganz ohne konkrete Zahlen – nur mit Struktur.

---

## 6) Von‑Hand‑Beispiel (zum Anfassen)

Nehmen wir
$$
M'=\{6,\,24,\,54,\,216,\,8,\,75\}.
$$

Primfaktoren und $q,r$:

| Zahl | Primfaktoren           | $q$  | $r$ |
|-----:|------------------------|-----:|----:|
| 6    | $2\cdot 3$             | $6$  | $1$ |
| 24   | $2^3\cdot 3$           | $6$  | $2$ |
| 54   | $2\cdot 3^3$           | $6$  | $3$ |
| 216  | $2^3\cdot 3^3$         | $6$  | $6$ |
| 8    | $2^3$                  | $2$  | $2$ |
| 75   | $3\cdot 5^2$           | $3\cdot 5$ | $5$ |

Hier gibt es direkt **vier** mit Kern $q=6$: $6,24,54,216$.
Ihr Produkt ist (wie oben gezeigt) tatsächlich eine **vierte Potenz**:
$$
6\cdot24\cdot54\cdot216 = 36^4.
$$

> Warum klappt das so hübsch? Weil die $r$‑Werte $1,2,3,6$ zusammen $36=6^2$ ergeben. Dann ist $(36)^2=36^2$ ein Quadrat – und Quadrat · Quadrat = vierte Potenz.

---

## 7) „Kochrezept“ (Checkliste) – auch ohne Taschenrechner

So würde **ich** vorgehen – und **wir** können das gemeinsam mit Papier und Stift machen:

1. **Prüfe die Primteiler‑Regel:** Jede Zahl darf nur Primteiler $\le 26$ haben.
2. **Zerlege** jede Zahl in Primfaktoren (nur die 9 erlaubten Primzahlen nötig).
3. **Ziehe Quadrate ab:** Schreibe $x = q\cdot r^2$, wobei $q$ quadratfrei ist (nur Exponenten $0$ oder $1$ übrig lassen).
4. **Sortiere nach $q$:** Gleiche $q$ in eine Gruppe („Schublade“).
5. **Suche eine 4er‑Gruppe** in einer Schublade. Die gibt es *zwangsläufig*, wenn es insgesamt $1985$ Zahlen sind.
6. **Fertig:** Das Produkt dieser vier ist eine **vierte Potenz** (mit dem Paar‑Trick).

> Profi‑Tipp: Beim Zerlegen reicht es, die **Parität** der Exponenten zu tracken (gerade/ungerade). Wir merken uns also nur, **ob** eine Primzahl im Kern $q$ auftaucht (ungerade), nicht **wie oft** insgesamt.

---

## 8) Häufige Stolpersteine (und wie wir drüber steigen)

- **„Ist $1$ erlaubt?“** Ja – sie hat keine Primteiler, stört nicht. Ihr Kern ist $q=1$.
- **„Was, wenn eine Zahl doch einen Primteiler > 26 hat?“** Dann passt sie **nicht** zur Aufgabenbedingung.
- **„Müssen die vier Zahlen verschieden sein?“** Ja, die Aufgabenstellung verlangt **verschiedene** Zahlen in $M$.
- **„Kann ich die vier konkret finden?“** Nur wenn $M$ **konkret** gegeben ist. Der Beweis zeigt die **Existenz**, nicht die **Auswahl**. (Mit gegebener Liste geht es per Hand/Programm, s. Checkliste.)

---

## 9) Mini‑Übungen (mit kurzen Lösungen)

**(A)** Zerlege in $q\cdot r^2$: $x=300 = 2^2\cdot 3\cdot 5^2$.
> Lösung: $q=3,\ r=10$ (weil $300=(3)\cdot(10^2)$).

**(B)** Quadrat oder nicht? $x=2^5\cdot 3^2$
> Lösung: **Kein** Quadrat (wegen $2^5$).

**(C)** Vierte Potenz? $x=2^8\cdot 5^4$
> Lösung: **Ja** (alle Exponenten durch 4 teilbar).

**(D)** Finde in $\{6,\,24,\,54,\,75,\,8,\,216\}$ eine 4er‑Gruppe mit gleichem Kern.
> Lösung: $\{6,24,54,216\}$ mit Kern $q=6$.

---

## 10) Warum ich diesen Beweis mag (kurz philosophisch)

Er ist wie ein gutes Versteckspiel: Wir rechnen **nichts Schweres**, wir **organisieren** nur klug – und *zwingen* das Ergebnis heraus.
Das ist die Kunst. Nicht das Melken der „Mathe‑Kuh“, sondern das **richtige Halfter**. 😉

---

**Fazit:** Mit Primfaktoren, „quadratfreiem Kern“ und dem Schubfachprinzip haben wir gezeigt: In *jeder* solchen 1985er‑Menge gibt es vier Zahlen, deren Produkt eine **vierte Potenz** ist. Ganz ohne Drama – na gut, ein bisschen Drama gehört bei mir immer dazu. 😅
