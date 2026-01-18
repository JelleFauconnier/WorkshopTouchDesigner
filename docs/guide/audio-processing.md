# Audio Processing

In dit deel van de workshop gaan we een netwerk bouwen om audio te analyseren. We willen de lage, midden en hoge tonen scheiden zodat we deze los van elkaar kunnen gebruiken om visuele elementen aan te sturen.

Dit is het doel: we splitsen het audiosignaal op in **Low**, **Mid** en **High**.

## Stap 1: Audio Input

We hebben eerst geluid nodig.

1.  Voeg een **Audio Device In CHOP** toe. Dit gebruikt je microfoon.
2.  (Optioneel) Wil je testen met een audiobestand? Gebruik dan een **Audio File In CHOP**.
3.  Verbind dit naar een **Math CHOP** als je het volume wilt aanpassen, maar dit is optioneel.
4.  Verbind de input ook naar een **Audio Device Out CHOP** als je het geluid wilt horen via je speakers. *Pas op voor feedback loops als je een microfoon gebruikt!*

## Stap 2: Audio Analysis Component

TouchDesigner heeft een ingebouwde tool die veel werk voor ons doet.

1.  Open het **Palette** (Shortcut: `Alt + L` of klik op het icoon linksboven 'Palette').
2.  Ga naar de map **Tools**.
3.  Sleep het **audioAnalysis** component in je netwerk.
4.  Verbind je audiobron (bijv. de audio in of de math) met de *eerste input* van de **audioAnalysis**.
5.  Tip: Dit component heeft een ingebouwde audiofile. Deze kan ook gebruikt worden om te testen.

Dit component analyseert het geluid en berekent volumes voor verschillende frequentiebanden (bas, kick, snare, vocals, etc.).

## Stap 3: Signaal Schoonmaken

We plaatsen een **Null CHOP** na de analysis om het netwerk netjes te houden.

1.  Verbind de output van **audioAnalysis** met een nieuwe **Null CHOP**.

## Stap 4: Kanalen Selecteren

Nu gaan we de specifieke frequenties isoleren. We maken drie vertakkingen: één voor laag, één voor midden, en één voor hoog.

### Low (Lage Tonen / Bas)
1.  Maak een **Select CHOP** en verbind de vorige **Null CHOP** hieraan.
2.  In de parameters van de Select CHOP, kies bij `Channel Names` voor het kanaal dat de lage tonen vertegenwoordigt (vaak `low` of `kick_detection` afhankelijk van de settings).
3.  Voeg een **Math CHOP** toe. Hiermee kun je het signaal versterken (bijv. `Multiply` op 2 zetten).
4.  Voeg een **Filter CHOP** toe. Dit maakt de beweging soepeler.
5.  Eindig met een **Null CHOP** en noem deze bijvoorbeeld `low_out`.

### Mid (Midden Tonen)
1.  Maak een nieuwe aftakking van de eerste **Null CHOP** met een **Select CHOP**.
2.  Kies het `mid` kanaal.
3.  Voeg een **Math CHOP** toe voor scaling.
4.  Voeg een **Filter CHOP** toe voor smoothing.
5.  Eindig met een **Null CHOP**.

### High (Hoge Tonen)
1.  Herhaal de stappen voor de hoge tonen met een **Select CHOP**.
2.  Kies het `high` kanaal.
3.  Voeg weer een **Math** en **Filter** toe.
4.  Eindig met een **Null CHOP**.

## Resultaat

Je hebt nu drie schone signalen (de **Null CHOPs** aan het einde) die reageren op de muziek. Je kunt deze nulls nu gebruiken om parameters van je visuals te exporteren!

::: details Klik hier voor de oplossing
![Oplossing van het netwerk](/images/audio-processing-solution.png)
:::
