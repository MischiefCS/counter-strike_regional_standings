### Roster Details<br />
Team Name: RUSH B (Russian team)<br />
Roster: executor, kinqie, KIRO, tex1y, z1Nny<br />
Global Rank: [66](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [44]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  712.5<br />
<br />
Final Rank Value (712.5) = Starting Rank Value (752.3) + Head To Head Adjustments (-39.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.330[<sup>1</sup>](#table2)
- Bounty Collected: 0.220[<sup>2</sup>](#table1)
- Opponent Network: 0.033[<sup>2</sup>](#table1)
- LAN Wins: 0.024[<sup>2</sup>](#table1)

The average of these factors is 0.152<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 752.3
- 400 + ( ( 0.152 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 752.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |        6 | 2025-02-28 | FAVBET Team          | L   | 0.572      | -            | -                | -                | -         |    -9.19 | executor, kinqie, KIRO, tex1y, z1Nny |
|           19 |       14 | 2025-02-27 | ALASKA               | W   | 0.563      | 0.143        | 0.026 (0.002)    | 0.560 (0.045)    | 0 (0.000) |    13.29 | executor, kinqie, KIRO, tex1y, z1Nny |
|           18 |       23 | 2025-02-26 | FAVBET Team          | L   | 0.558      | -            | -                | -                | -         |    -8.86 | executor, kinqie, KIRO, tex1y, z1Nny |
|           17 |       58 | 2025-02-24 | PARIVISION           | L   | 0.544      | -            | -                | -                | -         |   -10.05 | executor, kinqie, KIRO, tex1y, z1Nny |
|           16 |       87 | 2025-02-23 | ESC Gaming           | W   | 0.538      | 0.143        | 0.000 (0.000)    | 0.231 (0.018)    | 0 (0.000) |     3.97 | executor, kinqie, KIRO, tex1y, z1Nny |
|           15 |      115 | 2025-02-22 | Rebels Gaming        | W   | 0.530      | 0.143        | 0.000 (0.000)    | 0.264 (0.020)    | 0 (0.000) |     2.67 | executor, kinqie, KIRO, tex1y, z1Nny |
|           14 |      123 | 2025-02-21 | Fire Flux Esports    | L   | 0.526      | -            | -                | -                | -         |    -7.92 | executor, kinqie, KIRO, tex1y, z1Nny |
|           13 |      137 | 2025-02-21 | Astralis Talent      | L   | 0.524      | -            | -                | -                | -         |   -12.86 | executor, kinqie, KIRO, tex1y, z1Nny |
|           12 |      171 | 2025-02-18 | Natus Vincere Junior | L   | 0.505      | -            | -                | -                | -         |    -6.84 | executor, kinqie, KIRO, tex1y, z1Nny |
|           11 |      202 | 2025-02-17 | Fnatic               | L   | 0.496      | -            | -                | -                | -         |   -10.01 | executor, kinqie, KIRO, tex1y, z1Nny |
|           10 |      240 | 2025-02-15 | KONO.ECF             | L   | 0.484      | -            | -                | -                | -         |   -11.70 | executor, kinqie, KIRO, tex1y, z1Nny |
|            9 |      271 | 2025-02-14 | GTZ.ESPORTS          | W   | 0.477      | 0.435        | 0.002 (0.000)    | 0.254 (0.053)    | 0 (0.000) |     7.27 | executor, kinqie, KIRO, tex1y, z1Nny |
|            8 |      363 | 2025-02-10 | Sashi Esport         | W   | 0.452      | 0.435        | 0.001 (0.000)    | 0.507 (0.099)    | 0 (0.000) |     6.75 | executor, kinqie, KIRO, tex1y, z1Nny |
|            7 |      404 | 2025-02-09 | OG                   | W   | 0.444      | 0.143        | 0.000 (0.000)    | 1.000 (0.063)    | 0 (0.000) |     4.33 | executor, kinqie, KIRO, tex1y, z1Nny |
|            6 |      465 | 2025-02-08 | Zero Tenacity        | W   | 0.437      | 0.143        | 0.002 (0.000)    | 0.391 (0.024)    | 0 (0.000) |     5.30 | executor, kinqie, KIRO, tex1y, z1Nny |
|            5 |      561 | 2025-02-05 | Adventurers          | W   | 0.417      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.61 | executor, kinqie, KIRO, tex1y, z1Nny |
|            4 |      572 | 2025-02-04 | Zero Tenacity        | L   | 0.412      | -            | -                | -                | -         |    -7.97 | executor, kinqie, KIRO, tex1y, z1Nny |
|            3 |      764 | 2024-12-22 | Zero Tenacity        | W   | 0.119      | 0.143        | 0.002 (0.000)    | 0.391 (0.007)    | 0 (0.000) |     1.51 | executor, kinqie, KIRO, tex1y, z1Nny |
|            2 |      770 | 2024-12-22 | P0RTUGAL             | L   | 0.117      | -            | -                | -                | -         |    -1.99 | executor, kinqie, KIRO, tex1y, z1Nny |
|            1 |      847 | 2024-12-15 | FORZE Reload         | W   | 0.071      | 0.143        | 0.004 (0.000)    | 0.018 (0.000)    | 1 (0.071) |     0.88 | executor, kinqie, KIRO, tex1y, z1Nny |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($826.84)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-22 |      0.119 | $2,607.56      | $310.01         |
| 2024-12-15 |      0.071 | $7,263.25      | $516.83         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
