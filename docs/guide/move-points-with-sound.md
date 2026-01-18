# Punten Verplaatsen met Geluid en Noise

Nu we punten hebben (als texturen), kunnen we ze laten bewegen. We gebruiken hiervoor "Noise" (ruis) texturen. Elke pixel in de noise-texture zal een punt in onze 3D-vorm een duwtje geven. Door deze noise te manipuleren met geluid, "danst" de vorm op de muziek.

## Stap 1: Noise Texturen Maken

We maken een paar verschillende patronen om de beweging organisch te maken.

1.  Voeg drie **Noise TOPs** toe.
2. Variëer de instellingen:
    *   De eerste **Noise TOP**: Grote vormen (lage **Period**).
    *   De tweede **Noise TOP**: Veel kleur/detail.
    *   De derde **Noise TOP**: Hoog contrast.
3. Om de noise te laten bewegen, kun je bij de **Transform** tab, parameter **Translate Z**, een verwijzing maken naar audio-data (bijv. een CHOP kanaal). Experimenteer hiermee.

## Stap 2: Patronen Combineren

Om complexe bewegingen te krijgen, stapelen we de noises op elkaar.

1.  Gebruik een **Composite TOP** om de noises te combineren. Zet de **Operation** op bijvoorbeeld `Multiply` of `Difference`.
2.  Voeg een **Math TOP** toe na de eerste **Composite TOP** om de waarde te vermenigvuldigen met een waarde tussen 0 en 1. Dit zorgt ervoor dat de impact van de noise-texture minder duidelijk wordt.
2.  Gebruik nog een **Composite TOP** om het resultaat van de eerste compositie te combineren met de null. Experimenteer met verschillende **Operations**.
3.  Sluit de output van de laatste **Composite TOP** aan op een **Null TOP**. Dit is het signaal dat we straks gebruiken om de posities van de punten aan te passen.

## Stap 3: Rotatie Aansturen (Speed)

We willen dat het geheel ook ronddraait, en dat de snelheid hiervan reageert op de muziek (bijvoorbeeld de "kick").

1.  Voeg een **Speed CHOP** toe.
2.  Verbind hier je audio-analyse signaal aan (bijvoorbeeld een kick-detectie of gewoon het volume van de bas).
3.  De **Speed CHOP** telt continu op zolang er input is. Dit zorgt voor een oneindige, maar variërende rotatie.
4.  Deze waarde kun je later gebruiken in de **Rotate** parameters van je Geometry COMP.

## Resultaat

Je hebt nu een complexe textuur die continu verandert en reageert op input, plus een rotatie-signaal. In de volgende stappen koppelen we dit aan de 3D-punten.

::: details Klik hier voor de oplossing
![Oplossing van Punten Verplaatsen met Geluid](/images/move-points-with-sound-solution.png)
:::

