# Kartenspiel mit Ada

Heute rechne ich **wie Ada**. Keine Panik: Ich nehme dich an die Hand, Schritt
für Schritt, und wenn ich dabei zu schnell werde, pfeif mich einfach innerlich
zurück. Ich kann nämlich sehr gut zu schnell werden. Ada wollte damals mit Hilfe
von Charles Babbage Rechenmaschine eine Reihe magischer Zahlen, sogenannter
Bernoulli Zahlen ausrechnen.

## Was ist Adas „Computer“?

Adas Maschine heißt **Analytical Engine**. Sie ist nie ganz gebaut worden – das
ist der fiktive Teil. Aber die Idee ist glasklar: eine **universelle
Rechenmaschine**, ganz aus Zahnrädern. Zwei Hauptteile musst du dir merken:

- **Store** (Speicher): Stell dir ein Regal mit nummerierten Fächern vor. In jedes Fach passt eine Zahl. Ich sage später z. B. „V[0]“ – das ist Fach Nummer 0 im Store.
- **Mill** (Mühle): Das ist das Rechenwerk. Hier werden Zahlen aus dem Store hineingeholt, miteinander verrechnet, und das Ergebnis wieder ins Regal zurückgestellt. Wie eine Getreidemühle, nur mahlt sie Plus, Minus, Mal, Geteilt.

Und **wie sagt man so einer Maschine, was sie tun soll?** Mit **Lochkarten**.
Drei Sorten:

1. **Operationskarten**: „Addiere“, „Subtrahiere“, „Multipliziere“, „Dividiere“.
2. **Zahlkarten**: „Hier kommt die 2“, „hier die 3“, „hier die 1/6“…
3. **Variablenkarten**: „Lies V[0] aus dem Store“, „schreibe in V[1] zurück“.

Karten laufen der Reihe nach durch. Wie ein Musikstück auf einer Spieldose – nur
dass hier Rechnen „erklingt“. Und ja: Man kann sogar **Schleifen** und
**Abzweigungen** bauen, indem man Kartenschleifen legt oder verschiedene Pfade
wählt. Programmlogik – aber mit Pappe. Ich liebe das.

## Und was sind bitte Bernoulli-Zahlen?

Gute Frage. Kurz: eine geheimnisvolle Zahlenfolge B₀, B₁, B₂, …, die überall
auftaucht, wo Summen von Potenzen oder feine Krümmungen eine Rolle spielen. Zum
Beispiel, wenn man 1 + 2 + … + n oder 1² + 2² + … + n² **genau** als Formel
haben will, stecken Bernoulli-Zahlen in den Antworten. Sie sind nicht
„ausgedacht“, sondern über eine Regel definiert (eine Rekurrenz). Der Start ist:

- B₀ = 1
- dann gelten Gleichungen, die die nächsten Bₘ jeweils aus den vorherigen berechnen.

Klingt abstrakt? Lass mich’s **auf der Maschine** machen – dann wird’s handfest.

## Ich „programmiere“ Ada: die ersten Bernoullis

Ich stelle mir vor, ich sitze an einem Küchentisch (ja, meiner), vor mir drei
kleine Stapel Karteikarten. Ich will die ersten Bernoulli-Zahlen **B₀, B₁, B₂**
berechnen.

### Schritt 0 – Startwert setzen

Ich nehme eine **Zahlkarte** mit der „1“ und eine **Variablenkarte** „→ V[0]“.
*Aktion:* „Schreibe 1 in V[0].“ Jetzt gilt: **V[0] = B₀ = 1**.

### Schritt 1 – B₁ berechnen

Für m=1 lautet die Regel vereinfacht: B₀ + 2·B₁ = 0. Das ist eine kleine
Gleichung. Ich löse nach B₁ auf: B₁ = -B₀/2.

Mein Kartenstapel sagt:

1. **Variablenkarte** „hole V[0]“ (das ist B₀).
2. **Operationskarte** „Vorzeichen umdrehen“ (oder „0 − V[0]“ – je nach Maschinensprache).
3. **Zahlkarte** „2“.
4. **Operationskarte** „Dividiere“.
5. **Variablenkarte** „→ V[1]“.

Ergebnis im Store: **V[1] = B₁ = −1/2**.

### Schritt 2 – B₂ berechnen

Für m=2 kommt heraus: B₀ + 3·B₁ + 3·B₂ = 0. Also 3·B₂ = -B₀ - 3·B₁ und damit B₂
= (−B₀ − 3B₁)/3.

Mein Kartenplan:

1. **Zahlkarte** „3“.
2. **Variablenkarte** „hole V[1]“ (das ist B₁).
3. **Operationskarte** „Multipliziere“ → temporär T = 3·B₁.
4. **Variablenkarte** „hole V[0]“ (das ist B₀).
5. **Operationskarte** „Addiere“ → U = B₀ + T.
6. **Operationskarte** „Vorzeichen umdrehen“ → V = -U.
7. **Zahlkarte** „3“.
8. **Operationskarte** „Dividiere“ → Ergebnis in V[2].

Jetzt steht im Store: **V[2] = B₂ = 1/6**.

## Warum das nicht nur Zahlenspielerei ist

Nimm die einfache Summe 1 + 2 + … + n. Die kennst du als n(n+1)/2. Dahinter
steckt – versteckt – B₁. Für 1² + 2² + … + n² taucht B₂ auf. Je höher die
Potenzen, desto tiefer graben die Formeln, und da warten die Bernoullis wie
kleine Zahnräder, die alles zusammenklicken lassen. Ada hat das gesehen: **Mit
Karten kann man nicht nur Zahlen ausspucken, sondern Muster.** Und Muster sind
Sprache.

## Noch mal in superkurz

- **Store**: nummerierte Fächer für Zahlen → V[i].
- **Mill**: rechnet mit den aus dem Store geholten Zahlen.
- **Lochkarten**: Operation (Add/Sub/Mul/Div), Zahl (Konstanten), Variable (Read/Write V[i]).
- **Programmidee**: Folge von Karten = Folge von Rechenschritten. Schleifen/Abzweige sind möglich.
- **Bernoulli-Start**: B₀=1, daraus B₁=-1/2, B₂=1/6.

## Wenn ich das einem Kind erkläre (und mir selbst)

Ich tippe mit dem Finger auf den Tisch wie auf drei unsichtbare Stapel:
„Operation“, „Zahl“, „Variable“. Dann baue ich mein Programm wie Lego: Karte an
Karte. Fehler? Kein Drama: Ich stecke die falsche Karte zurück und nehme die
richtige. Das ist das Beruhigende an Adas Welt – **sie ist mechanisch fair**.
Wenn etwas nicht passt, klappert es hörbar.

Und ja, ich weiß: Wir tun so, als gäbe es die Maschine wirklich. Aber genau
dieses „Als-ob“ ist der Trick beim Denken. Ada macht mir Mut, weil sie sagt:
„Schau, Eddie, du kannst die Musik des Rechnens komponieren. Du brauchst nur
Ordnung, Geduld und ein paar gute Karten.“ Ich nicke. Ordnung und Geduld habe
ich. Karten finde ich.

# Eddie kürzt Brüche mit Ada

Brüche kürzen kann jeder – aber jetzt will ich, dass **Adas Computer** das
macht. Das Zauberwort heißt **gcd**, größter gemeinsamer Teiler. Beispiel: \[
\frac{48}{18} = \frac{8}{3}, \quad \text{weil gcd(48,18) = 6.} \]

## Algorithmus in Worte

1. Nimm zwei Zahlen a und b.
2. Solange b nicht null ist:
   - Teile a durch b.
   - Behalte nur den **Rest**.
   - Setze a := b, b := Rest.
3. Am Ende ist a der gcd.

---

## Jetzt in Karten

Ich will, dass die Maschine **gcd(48,18)** berechnet. Also:

### Start

- **Zahlkarte** „48“ → **V[a]**.
- **Zahlkarte** „18“ → **V[b]**.

### Schleife 1

1. **Variablenkarte** „hole V[a], V[b]“.
2. **Operationskarte** „Dividiere“ (48 ÷ 18).
3. **Operationskarte** „Rest bilden“ → Ergebnis **V[r] = 12**.
4. **Variablenkarte** „schreibe V[a] := V[b]“ (jetzt a=18).
5. **Variablenkarte** „schreibe V[b] := V[r]“ (jetzt b=12).

### Schleife 2

1. **hole V[a], V[b]** (18,12).
2. **Dividiere** (18 ÷ 12).
3. **Rest bilden** → V[r] = 6.
4. **a := b** (jetzt a=12).
5. **b := r** (jetzt b=6).

### Schleife 3

1. **hole V[a], V[b]** (12,6).
2. **Dividiere** (12 ÷ 6).
3. **Rest bilden** → V[r] = 0.
4. **a := b** (jetzt a=6).
5. **b := r** (jetzt b=0).

### Ende

Jetzt prüft die Maschine: b = 0 → fertig. Im Store steht **V[a] = 6**. Das ist
der gcd.

---

## Was wir gelernt haben

- **Lochkarten können Schleifen**: solange b≠0, wiederhole.
- Die Analytical Engine kann sogar „Modulo“ – also Rest nehmen.
- Damit kürzt sie automatisch jeden Bruch.
- Das Ergebnis fühlt sich sofort praktisch an: ich könnte mit Adas Computer jede Bruchrechnung schöner machen.
