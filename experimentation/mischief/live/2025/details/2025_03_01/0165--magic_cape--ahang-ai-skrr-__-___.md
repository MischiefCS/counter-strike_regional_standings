### Roster Details<br />
Team Name: Magic Cape<br />
Roster: AHang, AI, skrr, 夜岚, 金闪火<br />
Global Rank: [165](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [19]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  705.3<br />
<br />
Final Rank Value (705.3) = Starting Rank Value (673.7) + Head To Head Adjustments (31.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.294[<sup>1</sup>](#table2)
- Bounty Collected: 0.246[<sup>2</sup>](#table1)
- Opponent Network: 0.021[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.140<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 673.7
- 400 + ( ( 0.140 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 673.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent              | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |      258 | 2025-02-17 | Boring Players        | L   | 1.000      | -            | -                | -                | -         |   -22.36 | AHang, AI, skrr, 夜岚, 金闪火       |
|            8 |      260 | 2025-02-16 | TakeMeAway Gaming     | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.111 (0.016)    | 0 (0.000) |     4.89 | AHang, AI, skrr, 夜岚, 金闪火       |
|            7 |      269 | 2025-02-16 | FengDa Gaming         | W   | 1.000      | 0.143        | 0.008 (0.001)    | 0.636 (0.091)    | 0 (0.000) |    15.25 | AHang, AI, skrr, 夜岚, 金闪火       |
|            6 |     1146 | 2024-12-28 | FengDa Gaming         | W   | 0.777      | 0.143        | 0.008 (0.001)    | 0.636 (0.071)    | 0 (0.000) |    13.04 | AHang, AI, skrr, 夜岚, 金闪火       |
|            5 |     1238 | 2024-12-22 | Change The Game       | W   | 0.737      | 0.143        | 0.061 (0.006)    | 0.263 (0.028)    | 0 (0.000) |    14.69 | AHang, AI, skrr, 夜岚, 金闪火       |
|            4 |     2899 | 2024-11-10 | Win New Star          | L   | 0.457      | -            | -                | -                | -         |    -8.22 | AHang, skrr, 深渊之王, 野玫瑰の幻想, 金闪火 |
|            3 |     2902 | 2024-11-09 | WITS                  | W   | 0.456      | 0.143        | 0.000 (0.000)    | 0.050 (0.003)    | 0 (0.000) |     5.42 | AHang, skrr, 深渊之王, 野玫瑰の幻想, 金闪火 |
|            2 |     2971 | 2024-11-08 | Secret (Chinese team) | W   | 0.450      | 0.143        | 0.000 (0.000)    | 0.025 (0.002)    | 0 (0.000) |     5.10 | AHang, skrr, 深渊之王, 野玫瑰の幻想, 金闪火 |
|            1 |     2977 | 2024-11-08 | Znynn                 | W   | 0.450      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.82 | AHang, skrr, 深渊之王, 野玫瑰の幻想, 金闪火 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,319.61)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-28 |      0.777 | $1,370.09      | $1,064.86       |
| 2024-11-10 |      0.457 | $557.16        | $254.75         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
