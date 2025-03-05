### Roster Details<br />
Team Name: Patins da Ferrari<br />
Roster: CSO, CutzMeretz, land1n, lub, perez<br />
Global Rank: [267](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [83]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  492.6<br />
<br />
Final Rank Value (492.6) = Starting Rank Value (489.9) + Head To Head Adjustments (2.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.182[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.047<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 489.9
- 400 + ( ( 0.047 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 489.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                 | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     1233 | 2024-11-26 | 20/70                    | L   | 0.566      | -            | -                | -                | -         |    -5.94 | CSO, CutzMeretz, land1n, lub, perez |
|           11 |     1300 | 2024-11-22 | Joga de terno            | L   | 0.542      | -            | -                | -                | -         |    -8.68 | CSO, CutzMeretz, land1n, lub, perez |
|           10 |     1357 | 2024-11-20 | BeBold.gg                | W   | 0.528      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.89 | CSO, CutzMeretz, land1n, lub, perez |
|            9 |     1373 | 2024-11-19 | Nitro.GG                 | L   | 0.519      | -            | -                | -                | -         |    -4.57 | CSO, CutzMeretz, land1n, lub, perez |
|            8 |     1645 | 2024-11-06 | Team Solid               | L   | 0.434      | -            | -                | -                | -         |    -1.57 | CSO, CutzMeretz, Lcm, lub, perez    |
|            7 |     1658 | 2024-11-05 | VELOX Argentina          | W   | 0.428      | 0.371        | 0.000 (0.000)    | 0.121 (0.019)    | 0 (0.000) |     7.00 | CSO, CutzMeretz, Lcm, lub, perez    |
|            6 |     1672 | 2024-11-04 | Players (Brazilian team) | L   | 0.421      | -            | -                | -                | -         |    -2.73 | CSO, CutzMeretz, Lcm, lub, perez    |
|            5 |     1724 | 2024-11-01 | Yawara E-Sports          | W   | 0.401      | 0.371        | 0.002 (0.000)    | 0.321 (0.048)    | 0 (0.000) |     9.04 | CSO, CutzMeretz, Lcm, lub, perez    |
|            4 |     1761 | 2024-10-30 | BeBold.gg                | W   | 0.387      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.48 | CSO, CutzMeretz, Lcm, lub, perez    |
|            3 |     1790 | 2024-10-28 | Game Hunters             | L   | 0.374      | -            | -                | -                | -         |    -3.39 | CSO, CutzMeretz, Lcm, lub, perez    |
|            2 |     2432 | 2024-09-27 | Dusty Roots              | L   | 0.168      | -            | -                | -                | -         |    -0.90 | CSO, CutzMeretz, jz, Lcm, perez     |
|            1 |     2442 | 2024-09-27 | KRÜ Esports              | W   | 0.167      | 0.143        | 0.001 (0.000)    | 0.169 (0.004)    | 0 (0.000) |     4.04 | CSO, CutzMeretz, jz, Lcm, perez     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
