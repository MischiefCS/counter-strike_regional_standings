### Roster Details<br />
Team Name: BadGuys<br />
Roster: hAdji, Patti, Sapec, VLDN, Woro2k<br />
Global Rank: [222](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [144]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  651.2<br />
<br />
Final Rank Value (651.2) = Starting Rank Value (571.0) + Head To Head Adjustments (80.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.272[<sup>2</sup>](#table1)
- Opponent Network: 0.078[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.088<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 571.0
- 400 + ( ( 0.088 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 571.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     1037 | 2025-01-09 | KONO.ECF                   | L   | 0.859      | -            | -                | -                | -         |   -14.25 | hAdji, Patti, Sapec, VLDN, Woro2k |
|           11 |     1041 | 2025-01-08 | FLuffy Gangsters           | W   | 0.853      | 0.417        | 0.013 (0.005)    | 0.560 (0.199)    | 0 (0.000) |    16.12 | hAdji, Patti, Sapec, VLDN, Woro2k |
|           10 |     1049 | 2025-01-06 | WOPA Esport                | W   | 0.838      | 0.417        | 0.031 (0.011)    | 0.601 (0.210)    | 0 (0.000) |    18.55 | hAdji, Patti, Sapec, VLDN, Woro2k |
|            9 |     1052 | 2025-01-05 | Los kogutos                | L   | 0.832      | -            | -                | -                | -         |    -5.69 | hAdji, Patti, Sapec, VLDN, Woro2k |
|            8 |     1062 | 2025-01-03 | ECSTATIC                   | L   | 0.818      | -            | -                | -                | -         |    -4.70 | hAdji, Patti, Sapec, VLDN, Woro2k |
|            7 |     1118 | 2024-12-28 | GenOne                     | W   | 0.780      | 0.417        | 0.010 (0.003)    | 0.426 (0.139)    | 0 (0.000) |    16.68 | hAdji, Patti, Sapec, VLDN, Woro2k |
|            6 |     1286 | 2024-12-20 | Nuclear TigeRES            | W   | 0.728      | 0.143        | 0.004 (0.000)    | 0.344 (0.036)    | 0 (0.000) |    12.02 | hAdji, Kvem, Patti, VLDN, Woro2k  |
|            5 |     1294 | 2024-12-20 | NEVERMORE (Ukrainian team) | W   | 0.727      | 0.143        | 0.010 (0.001)    | 0.974 (0.101)    | 0 (0.000) |    17.01 | hAdji, Kvem, Patti, VLDN, Woro2k  |
|            4 |     1304 | 2024-12-20 | Dragon Esports Club        | W   | 0.727      | 0.143        | 0.007 (0.001)    | 0.344 (0.036)    | 0 (0.000) |    13.96 | hAdji, Kvem, Patti, VLDN, Woro2k  |
|            3 |     1528 | 2024-12-13 | Ex-GODSENT                 | L   | 0.680      | -            | -                | -                | -         |   -12.01 | hAdji, Kvem, Sapec, Topa, Woro2k  |
|            2 |     1532 | 2024-12-13 | Hesta                      | W   | 0.680      | 0.143        | 0.002 (0.000)    | 0.559 (0.054)    | 0 (0.000) |    14.01 | hAdji, Kvem, Sapec, Topa, Woro2k  |
|            1 |     1537 | 2024-12-13 | WW Team                    | W   | 0.680      | 0.143        | 0.000 (0.000)    | 0.033 (0.003)    | 0 (0.000) |     8.42 | hAdji, Kvem, Sapec, Topa, Woro2k  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
