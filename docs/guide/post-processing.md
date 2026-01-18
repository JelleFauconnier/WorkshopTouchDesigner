# Post-processing en Finishing Touches

Nu we een mooie render hebben, kunnen we het beeld nog levendiger maken. Dit doen we met **Post-processing**. We voegen "trails" toe, laten felle kleuren gloeien (Bloom) en voegen wat textuur toe.

## Stap 1: De Feedback Loop

Een van de krachtigste technieken in TouchDesigner is de Feedback Loop. Hiermee gebruik je het beeld van het *vorige* frame en meng je dat met het *huidige* frame.

**Hoe werkt het?**
Een Feedback TOP kijkt naar een operator verderop in je netwerk (die je instelt als 'Target'). Hierdoor ontstaat een lus. Als je in die lus de positie iets verandert (Transform) of de kleur iets aanpast (Level/Math), krijg je "trails" of "echo's" van je beweging.

1.  **Feedback TOP**: Plaats een `Feedback TOP` na je Render.
2.  **Aanpassingen**:
    *   Voeg een **Transform TOP** toe na de feedback. Zet de *Scale* op `0.99` of `0.98`. Dit zorgt ervoor dat het oude beeld langzaam kleiner wordt (of naar binnen wordt gezogen).
    *   Voeg eventueel een **Math TOP** of **Level TOP** toe om de helderheid iets te verminderen (`Multiply` < 1), zodat het spoor langzaam uitdooft.
3.  **Samenvoegen (Comp)**:
    *   Plaats een **Comp TOP**.
    *   Sluit je **originele Render** aan op de eerste input.
    *   Sluit het einde van je feedback-keten (na de Transform/Math) aan op de tweede input.
    *   Zet de 'Operation' op **Add** of **Maximum** (of experimenteer met anderen).
4.  **De Cirkel Sluiten**:
    *   Sleep de **Comp TOP** naar de **Feedback TOP** en laat los.
    *   De `Target TOP` parameter van de **Feedback TOP** moet nu naar de **Comp TOP** verwijzen.

## Stap 2: Bloom (Optioneel)

De **Bloom** zorgt voor die typische "gloed" om felle lichten, waardoor het beeld er minder plat en digitaal uitziet.

*   Open de **Palette Browser** (Alt+L).
*   Ga naar **Image Filters** en sleep `bloom` in je netwerk.
*   Sluit de output van je feedback resultaat aan op de bloom.
*   Speel met de parameters (Threshold, Intensity) om de juiste sfeer te vinden.

## Stap 3: Film Grain (Optioneel)

Om het af te maken voegen we wat "film grain" toe voor textuur.

**Film Grain (Ruis)**:
*   Maak een **Noise TOP**. Zet 'Type' op 'Random' (GPU) en zet 'Monochrome' aan.
*   Sluit de output van je feedback resultaat aan op de noise.
*   Gebruik een **Level TOP** om de ruis heel donker/transparant te maken.
*   Mix dit heel subtiel over je eindbeeld heen. Dit haalt de "gladde" digitale look weg.


## Stap 4: Movie File Out
    
Uiteindelijk willen we het eindresultaat ook visueel zien in het project. Hiervoor gebruiken we een **Movie File Out TOP**.

*   Maak een **Movie File Out TOP**.
*   Sluit de output van je uiteindelijke compositie aan op de Movie File Out TOP.

## Resultaat

Je hebt nu een volledig geanimeerd, 3D en nabewerkt kunstwerk dat reageert op geluid!

::: details Klik hier voor de oplossing
![Oplossing van Post-processing](/images/post-processing-solution.png)
:::


