### Roster Details<br />
Team Name: FlyQuest<br />
Roster: dexter, INS, Liazz, regali, Vexite<br />
Global Rank: [34](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [4]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  1073.6<br />
<br />
Final Rank Value (1073.6) = Starting Rank Value (1026.6) + Head To Head Adjustments (47.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.505[<sup>1</sup>](#table2)
- Bounty Collected: 0.427[<sup>2</sup>](#table1)
- Opponent Network: 0.141[<sup>2</sup>](#table1)
- LAN Wins: 0.243[<sup>2</sup>](#table1)

The average of these factors is 0.329<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1026.6
- 400 + ( ( 0.329 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 1026.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |      210 | 2025-02-16 | SAW                              | L   | 1.000      | -            | -                | -                | -         |   -10.36 | dexter, INS, Liazz, regali, Vexite   |
|           31 |      251 | 2025-02-15 | BIG                              | L   | 1.000      | -            | -                | -                | -         |    -4.50 | dexter, INS, Liazz, regali, Vexite   |
|           30 |      276 | 2025-02-14 | Team Falcons                     | L   | 1.000      | -            | -                | -                | -         |    -0.53 | dexter, INS, Liazz, regali, Vexite   |
|           29 |      629 | 2025-01-30 | Astralis                         | L   | 0.999      | -            | -                | -                | -         |    -0.65 | dexter, INS, Liazz, regali, Vexite   |
|           28 |      643 | 2025-01-29 | 3DMAX                            | L   | 0.991      | -            | -                | -                | -         |    -2.00 | dexter, INS, Liazz, regali, Vexite   |
|           27 |      673 | 2025-01-18 | Team Spirit                      | L   | 0.920      | -            | -                | -                | -         |    -0.21 | dexter, INS, Liazz, regali, Vexite   |
|           26 |      691 | 2025-01-14 | MIBR                             | W   | 0.891      | 1.000        | 0.139 (0.124)    | 0.604 (0.538)    | 0 (0.000) |    24.80 | dexter, INS, Liazz, regali, Vexite   |
|           25 |     1101 | 2024-12-02 | MIBR                             | L   | 0.610      | -            | -                | -                | -         |    -2.27 | aliStair, dexter, INS, Liazz, Vexite |
|           24 |     1123 | 2024-12-01 | PaiN Gaming                      | L   | 0.603      | -            | -                | -                | -         |    -0.89 | aliStair, dexter, INS, Liazz, Vexite |
|           23 |     1141 | 2024-11-30 | Team Liquid                      | L   | 0.596      | -            | -                | -                | -         |    -1.48 | aliStair, dexter, INS, Liazz, Vexite |
|           22 |     1171 | 2024-11-30 | BIG                              | W   | 0.591      | 1.000        | 0.220 (0.130)    | 0.558 (0.330)    | 1 (0.591) |    17.47 | aliStair, dexter, INS, Liazz, Vexite |
|           21 |     1177 | 2024-11-29 | Complexity                       | W   | 0.590      | 1.000        | 0.097 (0.057)    | 0.233 (0.137)    | 1 (0.590) |    12.18 | aliStair, dexter, INS, Liazz, Vexite |
|           20 |     1852 | 2024-10-19 | Mindfreak (Australian team)      | W   | 0.316      | -            | -                | -                | 0 (0.000) |     1.38 | aliStair, dexter, INS, Liazz, Vexite |
|           19 |     1894 | 2024-10-18 | Mindfreak (Australian team)      | W   | 0.304      | -            | -                | -                | 0 (0.000) |     1.31 | aliStair, dexter, INS, Liazz, Vexite |
|           18 |     2055 | 2024-10-09 | Mindfreak (Australian team)      | L   | 0.244      | -            | -                | -                | -         |    -6.71 | aliStair, dexter, INS, Liazz, Vexite |
|           17 |     2058 | 2024-10-09 | Mindfreak (Australian team)      | L   | 0.244      | -            | -                | -                | -         |    -6.76 | aliStair, dexter, INS, Liazz, Vexite |
|           16 |     2143 | 2024-10-06 | BIG                              | W   | 0.227      | 0.886        | 0.220 (0.044)    | 0.558 (0.112)    | 1 (0.227) |     6.73 | aliStair, dexter, INS, Liazz, Vexite |
|           15 |     2151 | 2024-10-06 | Wildcard                         | W   | 0.225      | 0.886        | 0.176 (0.035)    | 0.528 (0.105)    | 1 (0.225) |     6.04 | aliStair, dexter, INS, Liazz, Vexite |
|           14 |     2201 | 2024-10-04 | SAW                              | W   | 0.214      | 0.886        | 0.262 (0.050)    | 0.391 (0.074)    | 1 (0.214) |     5.37 | aliStair, dexter, INS, Liazz, Vexite |
|           13 |     2211 | 2024-10-04 | BetBoom Team                     | W   | 0.212      | 0.886        | 0.086 (0.016)    | 0.406 (0.076)    | 1 (0.212) |     4.23 | aliStair, dexter, INS, Liazz, Vexite |
|           12 |     2382 | 2024-09-30 | Rooster                          | W   | 0.184      | 0.333        | 0.003 (0.000)    | 0.219 (0.013)    | -         |     0.62 | aliStair, dexter, INS, Liazz, Vexite |
|           11 |     2383 | 2024-09-30 | Rooster                          | W   | 0.184      | 0.333        | 0.003 (0.000)    | 0.219 (0.013)    | -         |     0.62 | aliStair, dexter, INS, Liazz, Vexite |
|           10 |     2460 | 2024-09-27 | Only One Word                    | W   | 0.164      | 0.333        | -                | 0.233 (0.013)    | -         |     0.48 | aliStair, dexter, INS, Liazz, Vexite |
|            9 |     2462 | 2024-09-27 | Only One Word                    | W   | 0.164      | -            | -                | -                | -         |     0.48 | aliStair, dexter, INS, Liazz, Vexite |
|            8 |     2505 | 2024-09-26 | Housebets                        | W   | 0.158      | -            | -                | -                | -         |     0.45 | aliStair, dexter, INS, Liazz, Vexite |
|            7 |     2508 | 2024-09-26 | Housebets                        | W   | 0.157      | -            | -                | -                | -         |     0.45 | aliStair, dexter, INS, Liazz, Vexite |
|            6 |     2563 | 2024-09-25 | Arcade Esports (Australian team) | W   | 0.151      | -            | -                | -                | -         |     0.35 | aliStair, dexter, INS, Liazz, Vexite |
|            5 |     2568 | 2024-09-25 | Arcade Esports (Australian team) | W   | 0.151      | -            | -                | -                | -         |     0.35 | aliStair, dexter, INS, Liazz, Vexite |
|            4 |     3086 | 2024-09-07 | HEROIC                           | L   | 0.031      | -            | -                | -                | -         |    -0.22 | aliStair, dexter, INS, Liazz, Vexite |
|            3 |     3107 | 2024-09-06 | Lynn Vision Gaming               | W   | 0.025      | 1.000        | 0.011 (0.000)    | -                | 1 (0.025) |     0.26 | aliStair, dexter, INS, Liazz, Vexite |
|            2 |     3176 | 2024-09-04 | FaZe Clan                        | L   | 0.012      | -            | -                | -                | -         |    -0.00 | aliStair, dexter, INS, Liazz, Vexite |
|            1 |     3217 | 2024-09-03 | Eternal Fire                     | L   | 0.005      | -            | -                | -                | -         |    -0.00 | aliStair, dexter, INS, Liazz, Vexite |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($35,227.89)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.10) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      1.000 | $12,500.00     | $12,500.00      |
| 2025-02-09 |      1.000 | $2,500.00      | $2,500.00       |
| 2024-12-15 |      0.691 | $10,000.00     | $6,909.49       |
| 2024-10-19 |      0.316 | $3,250.00      | $1,028.26       |
| 2024-10-06 |      0.227 | $50,000.00     | $11,364.58      |
| 2024-09-22 |      0.132 | $7,000.00      | $925.56         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
