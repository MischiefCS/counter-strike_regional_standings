### Roster Details<br />
Team Name: Gameinside<br />
Roster: Falcon, goldfer, Kleepok, s1zen, Shleper<br />
Global Rank: [238](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [162]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  703.6<br />
<br />
Final Rank Value (703.6) = Starting Rank Value (707.6) + Head To Head Adjustments (-4.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.299[<sup>1</sup>](#table2)
- Bounty Collected: 0.190[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.106[<sup>2</sup>](#table1)

The average of these factors is 0.149<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 707.6
- 400 + ( ( 0.149 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 707.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     3995 | 2024-10-31 | NightRaid   | L   | 0.403      | -            | -                | -                | -         |    -6.31 | Falcon, goldfer, Kleepok, s1zen, Shleper |
|            7 |     4532 | 2024-10-21 | SEight      | L   | 0.331      | -            | -                | -                | -         |    -5.53 | Falcon, fiR3, goldfer, Kleepok, Shleper  |
|            6 |     4540 | 2024-10-20 | REMBAZA     | W   | 0.329      | 0.143        | 0.005 (0.000)    | 0.051 (0.002)    | 1 (0.329) |     5.73 | Falcon, fiR3, goldfer, Kleepok, Shleper  |
|            5 |     5077 | 2024-10-10 | REMBAZA     | W   | 0.257      | 0.143        | 0.005 (0.000)    | 0.051 (0.002)    | 1 (0.257) |     4.58 | Falcon, fiR3, goldfer, Kleepok, Shleper  |
|            4 |     5083 | 2024-10-10 | Purple Haze | W   | 0.257      | 0.143        | 0.004 (0.000)    | 0.000 (0.000)    | 1 (0.257) |     2.39 | Falcon, fiR3, goldfer, Kleepok, Shleper  |
|            3 |     5778 | 2024-09-28 | REMBAZA     | L   | 0.183      | -            | -                | -                | -         |    -2.55 | Falcon, fiR3, goldfer, Kleepok, Shleper  |
|            2 |     6570 | 2024-09-18 | SEight      | L   | 0.110      | -            | -                | -                | -         |    -1.81 | dera, Falcon, goldfer, Kleepok, Shleper  |
|            1 |     7281 | 2024-09-06 | NightRaid   | L   | 0.036      | -            | -                | -                | -         |    -0.56 | dera, Falcon, goldfer, Kleepok, Shleper  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,302.27)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-01 |      0.404 | $898.27        | $363.15         |
| 2024-10-21 |      0.331 | $1,033.78      | $341.84         |
| 2024-10-10 |      0.257 | $1,165.30      | $299.88         |
| 2024-09-29 |      0.184 | $898.93        | $165.41         |
| 2024-09-18 |      0.111 | $890.67        | $98.57          |
| 2024-09-07 |      0.037 | $901.71        | $33.42          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
