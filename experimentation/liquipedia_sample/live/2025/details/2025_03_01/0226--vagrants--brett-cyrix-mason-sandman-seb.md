### Roster Details<br />
Team Name: Vagrants<br />
Roster: brett, Cyrix, mason, Sandman, Seb<br />
Global Rank: [226](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [43]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  689.4<br />
<br />
Final Rank Value (689.4) = Starting Rank Value (655.5) + Head To Head Adjustments (33.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.257[<sup>1</sup>](#table2)
- Bounty Collected: 0.233[<sup>2</sup>](#table1)
- Opponent Network: 0.021[<sup>2</sup>](#table1)
- LAN Wins: 0.008[<sup>2</sup>](#table1)

The average of these factors is 0.130<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 655.5
- 400 + ( ( 0.130 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 655.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           24 |      332 | 2025-02-10 | Immigrants Peek        | L   | 1.000      | -            | -                | -                | -         |   -18.46 | brett, Cyrix, mason, Sandman, Seb |
|           23 |      375 | 2025-02-09 | Alter Iron Club        | W   | 1.000      | 0.143        | 0.009 (0.001)    | 0.391 (0.056)    | 0 (0.000) |    16.02 | brett, Cyrix, mason, Sandman, Seb |
|           22 |      406 | 2025-02-08 | Nouns Esports          | L   | 1.000      | -            | -                | -                | -         |    -8.98 | brett, Cyrix, mason, Sandman, Seb |
|           21 |      422 | 2025-02-08 | Immigrants Peek        | W   | 1.000      | 0.143        | 0.001 (0.000)    | 0.248 (0.035)    | 0 (0.000) |    11.83 | brett, Cyrix, mason, Sandman, Seb |
|           20 |      485 | 2025-02-07 | Chicken Coop Esports   | W   | 1.000      | 0.143        | 0.006 (0.001)    | 0.173 (0.025)    | 0 (0.000) |    14.25 | brett, Cyrix, mason, Sandman, Seb |
|           19 |     1277 | 2024-12-14 | Nouns Esports          | L   | 0.688      | -            | -                | -                | -         |    -5.82 | Cyrix, mason, micro, Sandman, Seb |
|           18 |     1349 | 2024-12-13 | Akimbo Esports         | W   | 0.682      | 0.143        | 0.003 (0.000)    | 0.258 (0.025)    | 0 (0.000) |    10.30 | Cyrix, mason, micro, Sandman, Seb |
|           17 |     1351 | 2024-12-13 | MarcaRegistrada        | W   | 0.682      | 0.143        | 0.000 (0.000)    | 0.086 (0.008)    | 0 (0.000) |     9.32 | Cyrix, mason, micro, Sandman, Seb |
|           16 |     1354 | 2024-12-13 | Get Fked               | W   | 0.682      | 0.143        | 0.000 (0.000)    | -                | 0 (0.000) |     4.07 | Cyrix, mason, micro, Sandman, Seb |
|           15 |     4803 | 2024-10-09 | Timbermen              | L   | 0.249      | -            | -                | -                | -         |    -3.35 | Cyrix, DJF, Sandman, Seb, Tender  |
|           14 |     4808 | 2024-10-09 | Timbermen              | W   | 0.249      | 0.477        | 0.011 (0.001)    | 0.175 (0.021)    | 0 (0.000) |     4.56 | Cyrix, DJF, Sandman, Seb, Tender  |
|           13 |     4864 | 2024-10-08 | Mythic                 | W   | 0.242      | 0.477        | -                | 0.025 (0.003)    | 0 (0.000) |     2.28 | Cyrix, DJF, Sandman, Seb, Tender  |
|           12 |     4870 | 2024-10-08 | Mythic                 | W   | 0.242      | 0.477        | -                | 0.025 (0.003)    | -         |     2.32 | Cyrix, DJF, Sandman, Seb, Tender  |
|           11 |     5168 | 2024-10-03 | Legacy                 | L   | 0.209      | -            | -                | -                | -         |    -1.36 | Cyrix, DJF, Sandman, Seb, Tender  |
|           10 |     5171 | 2024-10-03 | Legacy                 | L   | 0.209      | -            | -                | -                | -         |    -1.37 | Cyrix, DJF, Sandman, Seb, Tender  |
|            9 |     5275 | 2024-10-01 | Bad News Capybaras     | W   | 0.196      | 0.477        | 0.001 (0.000)    | 0.127 (0.012)    | -         |     3.12 | Cyrix, DJF, Sandman, Seb, Tender  |
|            8 |     5281 | 2024-10-01 | Bad News Capybaras     | L   | 0.195      | -            | -                | -                | -         |    -3.08 | Cyrix, DJF, Sandman, Seb, Tender  |
|            7 |     5690 | 2024-09-25 | BOSS                   | L   | 0.156      | -            | -                | -                | -         |    -1.02 | Cyrix, DJF, Sandman, Seb, Tender  |
|            6 |     5695 | 2024-09-25 | BOSS                   | W   | 0.155      | 0.477        | 0.014 (0.001)    | 0.308 (0.023)    | -         |     3.91 | Cyrix, DJF, Sandman, Seb, Tender  |
|            5 |     5935 | 2024-09-22 | Jahsdnmasjdm v2        | L   | 0.135      | -            | -                | -                | -         |    -3.04 | Andrew, Cyrix, DJF, Sandman, Seb  |
|            4 |     6106 | 2024-09-19 | Chill Guys             | L   | 0.114      | -            | -                | -                | -         |    -1.79 | Andrew, Cyrix, DJF, Sandman, Seb  |
|            3 |     6749 | 2024-09-08 | Nouns Esports          | L   | 0.040      | -            | -                | -                | -         |    -0.52 | Cyrix, DJF, Sandman, Seb, Wolffe  |
|            2 |     6792 | 2024-09-07 | LAG Gaming             | W   | 0.035      | 0.333        | 0.001 (0.000)    | -                | 1 (0.035) |     0.49 | Cyrix, DJF, Sandman, Seb, Wolffe  |
|            1 |     6824 | 2024-09-07 | Kraken (American team) | W   | 0.033      | -            | -                | -                | 1 (0.033) |     0.20 | Cyrix, DJF, Sandman, Seb, Wolffe  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($427.75)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.321 | $1,200.00      | $385.67         |
| 2024-09-08 |      0.042 | $1,000.00      | $42.08          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
