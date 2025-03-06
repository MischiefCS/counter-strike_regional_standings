### Roster Details<br />
Team Name: Game Hunters<br />
Roster: cerolzin, Lich, mello, pedrinzy, prt<br />
Global Rank: [214](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_04_07.md)<br />
Regional Rank: [64]( ../../standings_americas_2025_04_07.md)<br />
<br />
Final Rank Value:  498.1<br />
<br />
Final Rank Value (498.1) = Starting Rank Value (487.9) + Head To Head Adjustments (10.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.167[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.043<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 487.9
- 400 + ( ( 0.043 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 487.9


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
|            5 |     1206 | 2024-11-28 | Dusty Roots     | L   | 0.331      | -            | -                | -                | -         |    -2.11 | cerolzin, Lich, mello, pedrinzy, prt |
|            4 |     1238 | 2024-11-25 | Joga de terno   | W   | 0.313      | 0.371        | 0.000 (0.000)    | 0.069 (0.008)    | 0 (0.000) |     4.77 | cerolzin, Lich, mello, pedrinzy, prt |
|            3 |     1274 | 2024-11-23 | TROPA DO TACO   | L   | 0.299      | -            | -                | -                | -         |    -2.49 | cerolzin, Lich, mello, pedrinzy, prt |
|            2 |     1334 | 2024-11-21 | 20/70           | W   | 0.284      | 0.371        | 0.001 (0.000)    | 0.108 (0.011)    | 0 (0.000) |     5.90 | cerolzin, Lich, mello, pedrinzy, prt |
|            1 |     1385 | 2024-11-18 | VELOX Argentina | W   | 0.264      | 0.371        | 0.000 (0.000)    | 0.083 (0.008)    | 0 (0.000) |     4.11 | cerolzin, Lich, mello, pedrinzy, prt |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
