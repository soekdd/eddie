# Reis, Nudeln und Herr Fischers Gleichungen

```json
{
  "chapter": 1,
  "section": "Eddie rechnet",
  "title": "Reis, Nudeln und Herr Fischers Gleichungen",
  "mode": "appendix",
  "tags": [
    "Mathematik",
    "Eddie rechnet"
  ],
  "synopsis": "Diophantische Gleichungen: Busfahrt-Erklärung + Tampere-Beispiel (3 Säcke Reis + 4 Säcke Nudeln für 55 Kronen)."
}
```

> **Hinweis:** Dieses Kapitel gehört zu *„Eddie rechnet“*.
> Eddie erklärt hier launisch, schrittweise und gut nachvollziehbar.
> Platz für Beispiele, Skizzen, Mini-Beweise und kleine Seitenhiebe.

## alter Text, kein Eddie-Style

\### 1) Modell

Schreibe die Gleichung

A x + B y = X,

wobei x,y nichtnegative ganze Zahlen sind.

\### 2) Existenzbedingung

Berechne g=\\gcd(A,B).

Es gibt \*\*ganzzahlige\*\* Lösungen genau dann, wenn g teilt X (also
g\\mid X).

Wenn g\\nmid X --- keine Lösung.

\### 3) Eine partikuläre Lösung finden

Finde ganze Zahlen s,t mit

A s + B t = g

(z.B. mit dem erweiterten Euklidischen Algorithmus). Multipliziere mit
X/g. Dann ist

x_0 = s\\cdot\\frac{X}{g},\\qquad y_0 = t\\cdot\\frac{X}{g}

eine (möglicherweise negative) partikuläre Lösung der ursprünglichen
Gleichung.

\### 4) Allgemeine Lösung (alle ganzzahligen)

Alle ganzzahligen Lösungen sind

x = x_0 + \\frac{B}{g}\\,k,\\qquad y = y_0 - \\frac{A}{g}\\,k,

für beliebige ganze k.

\### 5) Auf nichtnegative Lösungen einschränken

Setze x\\ge0 und y\\ge0. Das ergibt die Ungleichungen für k:

k \\ge \\Big\\lceil -\\dfrac{x_0}{B/g}\\Big\\rceil

\\quad\\text{und}\\quad

k \\le \\Big\\lfloor \\dfrac{y_0}{A/g}\\Big\\rfloor.

Alle ganzen k in diesem Intervall geben genau die gewünschten
nichtnegativen Paare (x,y).

\## Kurzes Beispiel

Bauer hat X=100 Mark, Kuh kostet A=13, Schwein B=7.

1\. \\gcd(13,7)=1, also möglich.

2\. Erweiteter Euklid: -1\\cdot13 + 2\\cdot7 = 1. Also s=-1,\\; t=2.

Multipliziere mit 100: x_0=-100,\\; y_0=200.

3\. Allgemeine Lösung: x=-100+7k,\\; y=200-13k.

4\. Bedingungen: x\\ge0 \\Rightarrow k\\ge\\lceil100/7\\rceil=15.

y\\ge0 \\Rightarrow k\\le\\lfloor200/13\\rfloor=15.

Also einziges k ist 15. Das liefert x=5,\\; y=5.

Ergebnis: genau eine Möglichkeit --- 5 Kühe und 5 Schweine.

(Und als Gegenbeispiel: mit A=15,B=6,X=100 gilt \\gcd(15,6)=3\\nmid100
--- also \*\*keine\*\* Lösung.)

## Einstieg

Kurzer, lockerer Einstieg im Eddie-Ton.

## Idee / Strategie

Was ist das Grundprinzip? Wie denkt Eddie darüber?

## Schritt-für-Schritt

1. …
2. …
3. …

## Fallstricke & Tipps

- …
- …

## Fazit

Was soll hängen bleiben? Kleine Pointe erlaubt.
