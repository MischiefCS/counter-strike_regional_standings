### Roster Details<br />
Team Name: Patins da Ferrari<br />
Roster: CSO, CutzMeretz, land1n, lub, perez<br />
Global Rank: [216](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_04_07.md)<br />
Regional Rank: [66]( ../../standings_americas_2025_04_07.md)<br />
<br />
Final Rank Value:  482.5<br />
<br />
Final Rank Value (482.5) = Starting Rank Value (485.4) + Head To Head Adjustments (-2.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.163[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.041<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 485.4
- 400 + ( ( 0.041 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 485.4


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
|           10 |     1233 | 2024-11-26 | 20/70                    | L   | 0.318      | -            | -                | -                | -         |    -3.35 | CSO, CutzMeretz, land1n, lub, perez |
|            9 |     1300 | 2024-11-22 | Joga de terno            | L   | 0.293      | -            | -                | -                | -         |    -4.73 | CSO, CutzMeretz, land1n, lub, perez |
|            8 |     1357 | 2024-11-20 | BeBold.gg                | W   | 0.280      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.32 | CSO, CutzMeretz, land1n, lub, perez |
|            7 |     1373 | 2024-11-19 | Nitro.GG                 | L   | 0.271      | -            | -                | -                | -         |    -2.60 | CSO, CutzMeretz, land1n, lub, perez |
|            6 |     1645 | 2024-11-06 | Team Solid               | L   | 0.186      | -            | -                | -                | -         |    -1.02 | CSO, CutzMeretz, Lcm, lub, perez    |
|            5 |     1658 | 2024-11-05 | VELOX Argentina          | W   | 0.180      | 0.371        | 0.000 (0.000)    | 0.083 (0.005)    | 0 (0.000) |     2.82 | CSO, CutzMeretz, Lcm, lub, perez    |
|            4 |     1672 | 2024-11-04 | Players (Brazilian team) | L   | 0.172      | -            | -                | -                | -         |    -1.17 | CSO, CutzMeretz, Lcm, lub, perez    |
|            3 |     1724 | 2024-11-01 | Yawara E-Sports          | W   | 0.152      | 0.371        | 0.001 (0.000)    | 0.270 (0.015)    | 0 (0.000) |     3.38 | CSO, CutzMeretz, Lcm, lub, perez    |
|            2 |     1761 | 2024-10-30 | BeBold.gg                | W   | 0.139      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.67 | CSO, CutzMeretz, Lcm, lub, perez    |
|            1 |     1790 | 2024-10-28 | Game Hunters             | L   | 0.126      | -            | -                | -                | -         |    -1.18 | CSO, CutzMeretz, Lcm, lub, perez    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
