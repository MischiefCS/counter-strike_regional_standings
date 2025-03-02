### Roster Details<br />
Team Name: Wu-Tang Clan<br />
Roster: Maze, Q-Q, SeBreeZe, shushan, tvs<br />
Global Rank: [475](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [299]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  517.9<br />
<br />
Final Rank Value (517.9) = Starting Rank Value (502.5) + Head To Head Adjustments (15.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.204[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.052<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 502.5
- 400 + ( ( 0.052 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 502.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent              | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     3905 | 2024-10-29 | OG                    | L   | 0.378      | -            | -                | -                | -         |    -1.20 | Maze, Q-Q, SeBreeZe, shushan, tvs |
|            6 |     3957 | 2024-10-28 | Zero Tenacity         | L   | 0.371      | -            | -                | -                | -         |    -1.66 | Maze, Q-Q, SeBreeZe, shushan, tvs |
|            5 |     4254 | 2024-10-21 | ENJOY (Russian team)  | W   | 0.326      | 0.143        | 0.000 (0.000)    | 0.033 (0.002)    | 0 (0.000) |     5.06 | Maze, Q-Q, SeBreeZe, shushan, tvs |
|            4 |     4278 | 2024-10-20 | RUSH B (Russian team) | W   | 0.320      | 0.143        | 0.028 (0.001)    | 0.850 (0.039)    | 0 (0.000) |     9.21 | Maze, Q-Q, SeBreeZe, shushan, tvs |
|            3 |     4287 | 2024-10-20 | Taradzuri             | W   | 0.320      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.61 | Maze, Q-Q, SeBreeZe, shushan, tvs |
|            2 |     6905 | 2024-09-06 | Partizan Esports      | L   | 0.027      | -            | -                | -                | -         |    -0.03 | Maze, Q-Q, superflik, tvs, xicoz  |
|            1 |     6921 | 2024-09-06 | Built Different       | W   | 0.026      | 0.221        | 0.000 (0.000)    | 0.006 (0.000)    | 0 (0.000) |     0.43 | Maze, Q-Q, superflik, tvs, xicoz  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
