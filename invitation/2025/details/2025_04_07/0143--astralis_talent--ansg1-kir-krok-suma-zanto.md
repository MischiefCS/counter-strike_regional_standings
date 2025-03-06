### Roster Details<br />
Team Name: Astralis Talent<br />
Roster: ANSG1, kiR, kroK, suma, Zanto<br />
Global Rank: [143](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [95]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  660.0<br />
<br />
Final Rank Value (660.0) = Starting Rank Value (701.0) + Head To Head Adjustments (-41.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.268[<sup>1</sup>](#table2)
- Bounty Collected: 0.248[<sup>2</sup>](#table1)
- Opponent Network: 0.022[<sup>2</sup>](#table1)
- LAN Wins: 0.045[<sup>2</sup>](#table1)

The average of these factors is 0.146<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 701.0
- 400 + ( ( 0.146 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 701.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           24 |      129 | 2025-02-21 | Minsk House                               | L   | 0.898      | -            | -                | -                | -         |   -20.03 | ANSG1, kiR, kroK, suma, Zanto   |
|           23 |      137 | 2025-02-21 | RUSH B (Russian team)                     | W   | 0.898      | 0.143        | 0.024 (0.003)    | 0.615 (0.079)    | 0 (0.000) |    19.40 | ANSG1, kiR, kroK, suma, Zanto   |
|           22 |      239 | 2025-02-15 | ALGO                                      | L   | 0.858      | -            | -                | -                | -         |   -19.50 | ANSG1, kiR, kroK, suma, Zanto   |
|           21 |      772 | 2024-12-22 | ESC Gaming                                | L   | 0.490      | -            | -                | -                | -         |   -10.73 | ANSG1, kiR, Rytter, suma, Zanto |
|           20 |      775 | 2024-12-22 | WOPA Esport                               | L   | 0.489      | -            | -                | -                | -         |    -6.13 | ANSG1, kiR, Rytter, suma, Zanto |
|           19 |      784 | 2024-12-21 | Dark Cloud Esports                        | W   | 0.483      | 0.333        | 0.021 (0.003)    | 0.283 (0.046)    | 0 (0.000) |     8.53 | ANSG1, kiR, kroK, suma, Zanto   |
|           18 |      795 | 2024-12-20 | Preasy Esport                             | W   | 0.477      | 0.333        | 0.006 (0.001)    | 0.209 (0.033)    | 0 (0.000) |     7.15 | ANSG1, kiR, kroK, suma, Zanto   |
|           17 |      802 | 2024-12-19 | KONO.ECF                                  | L   | 0.471      | -            | -                | -                | -         |    -6.64 | ANSG1, kiR, kroK, suma, Zanto   |
|           16 |      805 | 2024-12-19 | Viperio                                   | W   | 0.470      | 0.333        | 0.002 (0.000)    | 0.034 (0.005)    | 0 (0.000) |     5.98 | ANSG1, kiR, kroK, suma, Zanto   |
|           15 |      819 | 2024-12-18 | Heimo Esports                             | L   | 0.463      | -            | -                | -                | -         |    -7.45 | ANSG1, kiR, kroK, suma, Zanto   |
|           14 |     1190 | 2024-11-29 | ENCE Academy                              | L   | 0.338      | -            | -                | -                | -         |    -4.38 | ANSG1, kiR, kroK, suma, Zanto   |
|           13 |     1209 | 2024-11-28 | GenOne                                    | L   | 0.329      | -            | -                | -                | -         |    -4.75 | ANSG1, kiR, kroK, sSen, suma    |
|           12 |     1236 | 2024-11-26 | Betclic Apogee Esports                    | L   | 0.317      | -            | -                | -                | -         |    -3.47 | ANSG1, kiR, kroK, sSen, suma    |
|           11 |     1262 | 2024-11-24 | GenOne                                    | W   | 0.303      | 0.333        | 0.007 (0.001)    | 0.362 (0.037)    | 0 (0.000) |     5.30 | ANSG1, kiR, kroK, sSen, suma    |
|           10 |     1277 | 2024-11-23 | WOPA Esport                               | L   | 0.298      | -            | -                | -                | -         |    -3.85 | ANSG1, kiR, kroK, sSen, suma    |
|            9 |     1285 | 2024-11-23 | Denial (Danish team)                      | W   | 0.297      | 0.143        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.297) |     2.60 | ANSG1, kiR, kroK, sSen, suma    |
|            8 |     1309 | 2024-11-22 | Leo Team                                  | L   | 0.291      | -            | -                | -                | -         |    -4.03 | ANSG1, kiR, kroK, sSen, suma    |
|            7 |     1427 | 2024-11-16 | Fire Flux Esports                         | L   | 0.251      | -            | -                | -                | -         |    -2.92 | ANSG1, kiR, kroK, sSen, suma    |
|            6 |     1444 | 2024-11-15 | EYEBALLERS                                | W   | 0.244      | 0.143        | 0.016 (0.001)    | 0.275 (0.010)    | 0 (0.000) |     4.51 | ANSG1, kiR, kroK, sSen, suma    |
|            5 |     1491 | 2024-11-14 | GenOne                                    | L   | 0.237      | -            | -                | -                | -         |    -3.27 | ANSG1, kiR, kroK, sSen, suma    |
|            4 |     1521 | 2024-11-13 | Copenhagen Wolves (American organization) | W   | 0.230      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.12 | ANSG1, kiR, kroK, sSen, suma    |
|            3 |     1556 | 2024-11-12 | CS2NEWS                                   | W   | 0.223      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.08 | ANSG1, kiR, kroK, sSen, suma    |
|            2 |     1575 | 2024-11-11 | EYEBALLERS                                | L   | 0.217      | -            | -                | -                | -         |    -2.82 | ANSG1, kiR, kroK, sSen, suma    |
|            1 |     1613 | 2024-11-09 | Illuminar Gaming                          | W   | 0.203      | 0.333        | 0.004 (0.000)    | 0.161 (0.011)    | 0 (0.000) |     3.30 | ANSG1, kiR, kroK, sSen, suma    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($416.79)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-23 |      0.298 | $1,397.06      | $416.79         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
