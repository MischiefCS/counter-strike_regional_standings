### Roster Details<br />
Team Name: Game Hunters<br />
Roster: cerolzin, Lich, mello, pedrinzy, prt<br />
Global Rank: [261](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [81]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  510.1<br />
<br />
Final Rank Value (510.1) = Starting Rank Value (489.9) + Head To Head Adjustments (20.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.179[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.047<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 489.9
- 400 + ( ( 0.047 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 489.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1206 | 2024-11-28 | Dusty Roots     | L   | 0.579      | -            | -                | -                | -         |    -3.74 | cerolzin, Lich, mello, pedrinzy, prt |
|            4 |     1238 | 2024-11-25 | Joga de terno   | W   | 0.561      | 0.371        | 0.000 (0.000)    | 0.111 (0.023)    | 0 (0.000) |     8.72 | cerolzin, Lich, mello, pedrinzy, prt |
|            3 |     1274 | 2024-11-23 | TROPA DO TACO   | L   | 0.547      | -            | -                | -                | -         |    -4.15 | cerolzin, Lich, mello, pedrinzy, prt |
|            2 |     1334 | 2024-11-21 | 20/70           | W   | 0.532      | 0.371        | 0.001 (0.000)    | 0.139 (0.027)    | 0 (0.000) |    11.03 | cerolzin, Lich, mello, pedrinzy, prt |
|            1 |     1385 | 2024-11-18 | VELOX Argentina | W   | 0.512      | 0.371        | 0.000 (0.000)    | 0.121 (0.023)    | 0 (0.000) |     8.35 | cerolzin, Lich, mello, pedrinzy, prt |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
