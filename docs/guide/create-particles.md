# Particle Instantie Creëren

In dit deel gaan we een eenvoudig deeltjessysteem (particle system) opzetten dat we later kunnen gebruiken voor instancing.

## Stap 1: Een Bronpunt Maken

Alles begint met een bron. We hebben een punt nodig waaruit de particles kunnen ontstaan.

1.  Voeg een **Add SOP** toe aan je netwerk.
2.  Zorg ervoor dat in de parameters van de Add SOP het eerste punt geactiveerd is (meestal onder de tab 'Points' -> 'Point 0'). Dit creëert één enkel punt in de ruimte op `0, 0, 0`.

## Stap 2: Particles Genereren

Nu we een bron hebben, kunnen we particles laten ontstaan.

1.  Voeg een **Particle SOP** toe en verbind de **Add SOP** aan de eerste input.

## Stap 3: Afsluiten

Zoals altijd in TouchDesigner, is het goed om je keten af te sluiten met een Null operator, zodat je later gemakkelijk referenties kunt maken zonder de keten te breken.

1.  Sluit de output van de **Particle SOP** aan op een nieuwe **Null SOP**.

## Resultaat

Het resultaat is uiteindelijk één partikel. Deze wordt uiteindelijk geïnstanceerd op de punten van de vorige stap. Dit betekent dat we straks op elk punt van onze 3D-geometrie (uit de texture) dit partikel-effect zullen zien.

::: details Klik hier voor de oplossing
![Oplossing van Particle Instantie](/images/particle-instance-solution.png)
:::


