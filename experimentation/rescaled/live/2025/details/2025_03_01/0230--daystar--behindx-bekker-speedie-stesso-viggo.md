### Roster Details<br />
Team Name: Daystar<br />
Roster: BehinDx, bekker, Speedie, Stesso, Viggo<br />
Global Rank: [230](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [136]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  597.5<br />
<br />
Final Rank Value (597.5) = Starting Rank Value (614.7) + Head To Head Adjustments (-17.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.220[<sup>1</sup>](#table2)
- Bounty Collected: 0.227[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.113<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 614.7
- 400 + ( ( 0.113 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 614.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     1500 | 2024-11-14 | HOTU                                      | L   | 0.484      | -            | -                | -                | -         |    -6.04 | BehinDx, bekker, Speedie, Stesso, Viggo |
|            9 |     1522 | 2024-11-13 | G2 Ares                                   | L   | 0.478      | -            | -                | -                | -         |    -9.04 | BehinDx, mAnGo, Speedie, Stesso, Viggo  |
|            8 |     2559 | 2024-09-25 | HOTU                                      | L   | 0.151      | -            | -                | -                | -         |    -1.91 | BehinDx, bekker, Speedie, Stesso, Viggo |
|            7 |     2599 | 2024-09-24 | RUBY                                      | L   | 0.146      | -            | -                | -                | -         |    -2.95 | BehinDx, bekker, Speedie, Stesso, Viggo |
|            6 |     2909 | 2024-09-13 | Copenhagen Wolves (American organization) | L   | 0.073      | -            | -                | -                | -         |    -1.13 | BehinDx, bekker, Speedie, Stesso, Viggo |
|            5 |     2972 | 2024-09-11 | 500                                       | W   | 0.060      | 0.536        | 0.086 (0.003)    | 1.000 (0.032)    | 0 (0.000) |     1.81 | BehinDx, bekker, Speedie, Stesso, Viggo |
|            4 |     3007 | 2024-09-10 | Leo Team                                  | W   | 0.053      | 0.544        | 0.023 (0.001)    | 0.508 (0.015)    | 0 (0.000) |     1.20 | BehinDx, bekker, Speedie, Stesso, Viggo |
|            3 |     3068 | 2024-09-07 | Dark Cloud Esports                        | W   | 0.033      | 0.372        | 0.027 (0.000)    | 0.320 (0.004)    | 0 (0.000) |     0.72 | BehinDx, bekker, Speedie, Stesso, Viggo |
|            2 |     3125 | 2024-09-05 | FAVBET Team                               | L   | 0.020      | -            | -                | -                | -         |    -0.10 | BehinDx, bekker, Speedie, Stesso, Viggo |
|            1 |     3197 | 2024-09-03 | Passion UA                                | W   | 0.007      | 0.372        | 0.044 (0.000)    | 0.588 (0.001)    | 0 (0.000) |     0.20 | BehinDx, bekker, Speedie, Stesso, Viggo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($93.75)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-21 |      0.125 | $750.00        | $93.75          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
