### Roster Details<br />
Team Name: AMKAL ESPORTS<br />
Roster: Forester, Krad, nota, topo-, TRAVIS<br />
Global Rank: [102](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [73]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  741.2<br />
<br />
Final Rank Value (741.2) = Starting Rank Value (717.5) + Head To Head Adjustments (23.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.353[<sup>1</sup>](#table2)
- Bounty Collected: 0.243[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.154<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 717.5
- 400 + ( ( 0.154 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 717.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      782 | 2024-12-21 | Monte                | W   | 0.484      | 0.333        | 0.015 (0.002)    | 0.434 (0.070)    | 0 (0.000) |     9.28 | Forester, Krad, nota, topo-, TRAVIS |
|            5 |      793 | 2024-12-20 | FORZE Reload         | W   | 0.477      | 0.333        | 0.015 (0.002)    | 0.096 (0.015)    | 0 (0.000) |     7.12 | Forester, Krad, nota, topo-, TRAVIS |
|            4 |      807 | 2024-12-19 | BC.Game Esports      | W   | 0.470      | 0.333        | 0.019 (0.003)    | 0.212 (0.033)    | 0 (0.000) |     8.07 | Forester, Krad, nota, topo-, TRAVIS |
|            3 |      869 | 2024-12-14 | ENCE                 | L   | 0.438      | -            | -                | -                | -         |    -4.01 | Forester, Krad, nota, topo-, TRAVIS |
|            2 |      897 | 2024-12-13 | Wild Lotus           | W   | 0.432      | 0.435        | 0.000 (0.000)    | 0.350 (0.066)    | 0 (0.000) |     4.74 | Forester, Krad, nota, topo-, TRAVIS |
|            1 |     1665 | 2024-11-05 | Natus Vincere Junior | L   | 0.176      | -            | -                | -                | -         |    -1.46 | Forester, Krad, nota, topo-, TRAVIS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,307.92)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-21 |      0.484 | $5,000.00      | $2,418.75       |
| 2024-12-15 |      0.445 | $2,000.00      | $889.17         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
