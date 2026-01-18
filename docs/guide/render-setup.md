# Render Setup en Instancing

Nu we al onze data hebben (de vorm van de partikels en de posities in een texture), gaan we dit samenbrengen in een render-netwerk. Hier maken we van data weer beeld.

## Stap 1: Het Materiaal (Point Sprite)

We willen dat onze punten er niet uitzien als saaie stippen, maar als "sprites" (afbeeldingen die altijd naar de camera wijzen).

1.  Voeg een **Point Sprite MAT** toe.
2.  Je kunt hier later een texture aan toevoegen om de vorm van het puntje te veranderen (bijvoorbeeld een cirkel of rook-wolkje).

## Stap 2: De Geometry Container (Geo)

Dit is het hart van de render. Hier koppelen we de vorm aan de posities.

1. **Input Linken**: Voeg een **Geometry Container** toe en koppel deze aan de **Point Sprite MAT**.
    *   *Uitleg*: De manier om dit te doen is door van de pointsprite weg te slepen en dan op TAB te drukken. Hiermee krijg je het operator-menu en kan je in **COMP** kiezen om een nieuwe geometry COMP toe te voegen.
2. **Materiaal Linken**: Sleep de **Point Sprite MAT** naar de **Geometry Container** en kies "Material", of vul de naam van de **Point Sprite MAT** in bij de parameter **Material** op de `Render` tab van de **Geometry Container**.
3. **Instancing Aanzetten**:
    *   Ga naar de **Instance** tab van de **Geometry Container**.
    *   Zet de schakelaar **Instancing** op `On`.
    *   Sleep je uiteindelijke positie-texture (van de stap "Punten Verplaatsen", bijv. de eind-null of de gecombineerde positie-top) naar het veld **Translate OP** (onder Instance 2 tab).
    *   Koppel de kanalen: `TX` -> `r`, `TY` -> `g`, `TZ` -> `b`.

Nu wordt voor elke pixel in je texture, één kopie van je particle getekend op die specifieke XYZ-positie.

## Stap 3: Camera en Licht

Om iets te kunnen zien, hebben we een virtuele camera en licht nodig.

1.  Voeg een **Camera COMP** toe. Plaats deze op een positie (bijv. Z = 5) zodat je naar het midden kijkt.
2.  Voeg een **Light COMP** toe. Hoewel Point Sprites vaak geen licht nodig hebben (ze geven zelf licht in "Constant" mode), is het goed om er een te hebben voor andere materialen.

## Stap 4: Renderen

De laatste stap is het maken van het 2D-plaatje.

1.  Voeg een **Render TOP** toe.
2.  Standaard pakt deze automatisch de **Geometry Container**, **Camera** en **Light** als ze in hetzelfde netwerk staan. Controleer of je geometrie zichtbaar is in de Render TOP.
3.  Zet eventueel de resolutie van de Render TOP op `1920x1080` (of `1280x720` voor betere performance).

## Resultaat

Je ziet nu je 3D-vorm, opgebouwd uit duizenden puntjes die bewegen op de muziek!

::: details Klik hier voor de oplossing
![Oplossing van Render Setup](/images/render-setup-solution.png)
:::

