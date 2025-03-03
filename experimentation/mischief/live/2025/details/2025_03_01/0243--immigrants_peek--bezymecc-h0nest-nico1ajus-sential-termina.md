### Roster Details<br />
Team Name: Immigrants Peek<br />
Roster: bezymecc, H0NeST, nico1ajus, sential, Termina<br />
Global Rank: [243](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [153]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  632.4<br />
<br />
Final Rank Value (632.4) = Starting Rank Value (641.7) + Head To Head Adjustments (-9.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.260[<sup>1</sup>](#table2)
- Bounty Collected: 0.210[<sup>2</sup>](#table1)
- Opponent Network: 0.024[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.124<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 641.7
- 400 + ( ( 0.124 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 641.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      148 | 2025-02-21 | Wanted Goons    | L   | 1.000      | -            | -                | -                | -         |   -20.20 | bezymecc, H0NeST, nico1ajus, sential, Termina   |
|           13 |      190 | 2025-02-20 | Vireo.pro       | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.16 | bezymecc, H0NeST, nico1ajus, sential, Termina   |
|           12 |      267 | 2025-02-16 | Straight2Killin | L   | 1.000      | -            | -                | -                | -         |   -22.67 | bezymecc, H0NeST, nico1ajus, sential, Termina   |
|           11 |      417 | 2025-02-13 | BOSS            | L   | 1.000      | -            | -                | -                | -         |    -7.90 | bezymecc, H0NeST, myline, nico1ajus, Termina    |
|           10 |      485 | 2025-02-10 | Vagrants        | W   | 1.000      | 0.143        | 0.001 (0.000)    | 0.276 (0.039)    | 0 (0.000) |    16.32 | bezymecc, H0NeST, myline, nico1ajus, Termina    |
|            9 |      489 | 2025-02-10 | Alter Iron Club | W   | 1.000      | 0.143        | 0.008 (0.001)    | 0.308 (0.044)    | 0 (0.000) |    17.75 | bezymecc, H0NeST, myline, nico1ajus, Termina    |
|            8 |      521 | 2025-02-09 | Mythic          | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.027 (0.004)    | 0 (0.000) |     9.34 | bezymecc, H0NeST, myline, nico1ajus, Termina    |
|            7 |      584 | 2025-02-08 | Vagrants        | L   | 1.000      | -            | -                | -                | -         |   -14.28 | bezymecc, H0NeST, myline, nico1ajus, Termina    |
|            6 |      665 | 2025-02-06 | Blahaj          | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.172 (0.025)    | 0 (0.000) |    11.71 | bezymecc, H0NeST, myline, nico1ajus, Termina    |
|            5 |      667 | 2025-02-06 | Team Aether     | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.111 (0.016)    | 0 (0.000) |     9.67 | bezymecc, H0NeST, myline, nico1ajus, Termina    |
|            4 |     1509 | 2024-12-13 | MarcaRegistrada | L   | 0.682      | -            | -                | -                | -         |   -11.44 | bezymecc, H0NeST, marekiew, nico1ajus, Valter0k |
|            3 |     1857 | 2024-12-04 | Alter Iron Club | L   | 0.622      | -            | -                | -                | -         |    -8.69 | bezymecc, H0NeST, nico1ajus, Termina, Valter0k  |
|            2 |     1902 | 2024-12-03 | MIGHT           | W   | 0.616      | 0.372        | 0.002 (0.000)    | 0.492 (0.113)    | 0 (0.000) |    12.00 | bezymecc, H0NeST, nico1ajus, Termina, Valter0k  |
|            1 |     2428 | 2024-11-22 | Make Your Mind  | L   | 0.542      | -            | -                | -                | -         |    -7.13 | bezymecc, H0NeST, nico1ajus, Termina, Valter0k  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($486.77)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-08 |      0.649 | $750.00        | $486.77         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
