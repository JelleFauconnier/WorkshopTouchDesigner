# Geometry naar Texture

In dit gedeelte leren we hoe we 3D-geometrie kunnen omzetten naar pixeldata (textures). Dit is een krachtige techniek, vaak gebruikt voor *point clouds* en *instancing* in TouchDesigner.

Het doel is om de XYZ-coördinaten van de punten van een 3D-model op te slaan in de RGB-kleurkanalen van een afbeelding.

## Stap 1: Geometrie Kiezen

We beginnen met een 3D-vorm.

1.  Zorg dat je een 3D-model hebt. Je kunt een **File In SOP** gebruiken om een bestand te laden (zoals `.obj` of `.fbx` die bij de workshop horen), of gebruik een simpele vorm zoals een **Sphere SOP** of **Torus SOP**.

## Stap 2: Punten Genereren (Sprinkle)

Om een mooie puntenwolk te krijgen, verdelen we punten over het oppervlak van ons model.

1.  Voeg een **Sprinkle SOP** toe en verbind je geometrie hieraan.
2.  Met de `Number of Points` parameter kun je bepalen hoeveel punten je wilt (bijvoorbeeld 1000 of meer).
3.  Sluit dit af met een **Null SOP**. Dit is ons referentiepunt voor de geometrie.

## Stap 3: Van SOP naar CHOP

Nu gaan we de data uit de geometrie halen. We willen de positie van elk punt weten.

1.  Voeg een **SOP to CHOP** toe.
2.  Sleep de **Null SOP** naar de **SOP** parameter van deze CHOP.
3.  Zorg dat bij `Position XYZ` in ieder geval aan staat. Standaard krijg je nu kanalen genaamd `tx`, `ty`, en `tz`.

Je ziet nu in de CHOP drie lijnen die de X, Y en Z posities van al je punten vertegenwoordigen.

## Stap 4: Van CHOP naar TOP

TouchDesigner is extreem snel met afbeeldingen (uitgevoerd op de grafische kaart). Daarom zetten we deze data om naar een textuur.

1.  Voeg een **CHOP to TOP** toe en verbind de vorige CHOP hieraan.
2.  Bij de parameters, zorg dat **Data Format** op `RGB` staat.
3.  Het resultaat is een afbeelding waarbij:
    *   **R**ood = X-positie
    *   **G**roen = Y-positie
    *   **B**lauw = Z-positie
4.  Eindig met een **Null TOP**.

## Resultaat

Je hebt nu je 3D-model "platgeslagen" in een afbeelding. Elke pixel in deze afbeelding staat voor één punt in de 3D-ruimte. Deze techniek is de basis voor geavanceerde effecten zoals GPU-particles en point cloud renders.

::: details Klik hier voor de oplossing
![Oplossing van Geometry naar Texture](/images/geometry-to-texture-solution.png)
:::

