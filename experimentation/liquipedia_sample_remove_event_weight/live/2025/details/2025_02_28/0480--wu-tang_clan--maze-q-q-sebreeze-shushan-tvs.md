### Roster Details<br />
Team Name: Wu-Tang Clan<br />
Roster: Maze, Q-Q, SeBreeZe, shushan, tvs<br />
Global Rank: [480](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [300]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  559.2<br />
<br />
Final Rank Value (559.2) = Starting Rank Value (541.4) + Head To Head Adjustments (17.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.252[<sup>2</sup>](#table1)
- Opponent Network: 0.032[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.071<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 541.4
- 400 + ( ( 0.071 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 541.4


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
|            7 |     4166 | 2024-10-29 | OG                    | L   | 0.384      | -            | -                | -                | -         |    -0.38 | Maze, Q-Q, SeBreeZe, shushan, tvs |
|            6 |     4223 | 2024-10-28 | Zero Tenacity         | L   | 0.378      | -            | -                | -                | -         |    -0.49 | Maze, Q-Q, SeBreeZe, shushan, tvs |
|            5 |     4522 | 2024-10-21 | ENJOY (Russian team)  | W   | 0.332      | 1.000        | 0.000 (0.000)    | 0.032 (0.011)    | 0 (0.000) |     5.03 | Maze, Q-Q, SeBreeZe, shushan, tvs |
|            4 |     4552 | 2024-10-20 | RUSH B (Russian team) | W   | 0.326      | 1.000        | 0.033 (0.011)    | 0.935 (0.305)    | 0 (0.000) |    10.05 | Maze, Q-Q, SeBreeZe, shushan, tvs |
|            3 |     4558 | 2024-10-20 | Taradzuri             | W   | 0.326      | 1.000        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.18 | Maze, Q-Q, SeBreeZe, shushan, tvs |
|            2 |     7291 | 2024-09-06 | Partizan Esports      | L   | 0.033      | -            | -                | -                | -         |    -0.01 | Maze, Q-Q, superflik, tvs, xicoz  |
|            1 |     7308 | 2024-09-06 | Built Different       | W   | 0.032      | 1.000        | 0.000 (0.000)    | 0.007 (0.000)    | 0 (0.000) |     0.47 | Maze, Q-Q, superflik, tvs, xicoz  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
