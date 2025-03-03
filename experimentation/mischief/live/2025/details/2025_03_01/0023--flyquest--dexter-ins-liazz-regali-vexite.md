### Roster Details<br />
Team Name: FlyQuest<br />
Roster: dexter, INS, Liazz, regali, Vexite<br />
Global Rank: [23](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [3]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  1111.1<br />
<br />
Final Rank Value (1111.1) = Starting Rank Value (1085.3) + Head To Head Adjustments (25.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.505[<sup>1</sup>](#table2)
- Bounty Collected: 0.401[<sup>2</sup>](#table1)
- Opponent Network: 0.088[<sup>2</sup>](#table1)
- LAN Wins: 0.409[<sup>2</sup>](#table1)

The average of these factors is 0.351<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1085.3
- 400 + ( ( 0.351 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 1085.3


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
|           36 |      287 | 2025-02-16 | SAW                              | L   | 1.000      | -            | -                | -                | -         |   -12.34 | dexter, INS, Liazz, regali, Vexite   |
|           35 |      358 | 2025-02-15 | BIG                              | L   | 1.000      | -            | -                | -                | -         |    -7.40 | dexter, INS, Liazz, regali, Vexite   |
|           34 |      401 | 2025-02-14 | Team Falcons                     | L   | 1.000      | -            | -                | -                | -         |    -0.66 | dexter, INS, Liazz, regali, Vexite   |
|           33 |      930 | 2025-01-30 | Astralis                         | L   | 0.999      | -            | -                | -                | -         |    -0.94 | dexter, INS, Liazz, regali, Vexite   |
|           32 |      944 | 2025-01-29 | 3DMAX                            | L   | 0.991      | -            | -                | -                | -         |    -2.96 | dexter, INS, Liazz, regali, Vexite   |
|           31 |      988 | 2025-01-18 | Team Spirit                      | L   | 0.920      | -            | -                | -                | -         |    -0.27 | dexter, INS, Liazz, regali, Vexite   |
|           30 |     1018 | 2025-01-14 | MIBR                             | W   | 0.891      | 0.363        | 0.139 (0.045)    | 0.562 (0.182)    | -         |    23.91 | dexter, INS, Liazz, regali, Vexite   |
|           29 |     1955 | 2024-12-02 | MIBR                             | L   | 0.610      | -            | -                | -                | -         |    -2.90 | aliStair, dexter, INS, Liazz, Vexite |
|           28 |     2020 | 2024-12-01 | PaiN Gaming                      | L   | 0.603      | -            | -                | -                | -         |    -1.32 | aliStair, dexter, INS, Liazz, Vexite |
|           27 |     2080 | 2024-11-30 | Team Liquid                      | L   | 0.596      | -            | -                | -                | -         |    -1.81 | aliStair, dexter, INS, Liazz, Vexite |
|           26 |     2165 | 2024-11-30 | BIG                              | W   | 0.591      | 1.000        | 0.221 (0.131)    | 0.519 (0.307)    | 1 (0.591) |    16.45 | aliStair, dexter, INS, Liazz, Vexite |
|           25 |     2176 | 2024-11-29 | Complexity                       | W   | 0.590      | 1.000        | 0.097 (0.057)    | 0.217 (0.128)    | 1 (0.590) |    10.81 | aliStair, dexter, INS, Liazz, Vexite |
|           24 |     2770 | 2024-11-13 | Lynn Vision Gaming               | W   | 0.478      | 0.143        | 0.017 (0.001)    | 0.439 (0.030)    | 1 (0.478) |     4.29 | aliStair, dexter, INS, Liazz, Vexite |
|           23 |     2782 | 2024-11-12 | Adventurers                      | W   | 0.476      | -            | -                | -                | 1 (0.476) |     1.80 | aliStair, dexter, INS, Liazz, Vexite |
|           22 |     2820 | 2024-11-11 | Ex-GR Gaming                     | W   | 0.470      | 0.143        | 0.011 (0.001)    | -                | 1 (0.470) |     2.39 | aliStair, dexter, INS, Liazz, Vexite |
|           21 |     2839 | 2024-11-11 | TALON                            | L   | 0.465      | -            | -                | -                | -         |   -13.97 | aliStair, dexter, INS, Liazz, Vexite |
|           20 |     3467 | 2024-10-19 | Mindfreak (Australian team)      | W   | 0.316      | -            | -                | -                | -         |     1.08 | aliStair, dexter, INS, Liazz, Vexite |
|           19 |     3509 | 2024-10-18 | Mindfreak (Australian team)      | W   | 0.304      | -            | -                | -                | -         |     1.03 | aliStair, dexter, INS, Liazz, Vexite |
|           18 |     3670 | 2024-10-09 | Mindfreak (Australian team)      | L   | 0.244      | -            | -                | -                | -         |    -6.93 | aliStair, dexter, INS, Liazz, Vexite |
|           17 |     3673 | 2024-10-09 | Mindfreak (Australian team)      | L   | 0.244      | -            | -                | -                | -         |    -6.97 | aliStair, dexter, INS, Liazz, Vexite |
|           16 |     3758 | 2024-10-06 | BIG                              | W   | 0.227      | 0.500        | 0.221 (0.025)    | 0.519 (0.059)    | 1 (0.227) |     6.37 | aliStair, dexter, INS, Liazz, Vexite |
|           15 |     3766 | 2024-10-06 | Wildcard                         | W   | 0.225      | 0.500        | 0.176 (0.020)    | 0.491 (0.055)    | 1 (0.225) |     5.67 | aliStair, dexter, INS, Liazz, Vexite |
|           14 |     3816 | 2024-10-04 | SAW                              | W   | 0.214      | 0.500        | 0.262 (0.028)    | 0.364 (0.039)    | 1 (0.214) |     5.06 | aliStair, dexter, INS, Liazz, Vexite |
|           13 |     3826 | 2024-10-04 | BetBoom Team                     | W   | 0.212      | 0.500        | 0.103 (0.011)    | 0.456 (0.048)    | 1 (0.212) |     2.71 | aliStair, dexter, INS, Liazz, Vexite |
|           12 |     3997 | 2024-09-30 | Rooster                          | W   | 0.184      | 0.333        | -                | 0.264 (0.016)    | -         |     0.51 | aliStair, dexter, INS, Liazz, Vexite |
|           11 |     3998 | 2024-09-30 | Rooster                          | W   | 0.184      | 0.333        | -                | 0.264 (0.016)    | -         |     0.51 | aliStair, dexter, INS, Liazz, Vexite |
|           10 |     4075 | 2024-09-27 | Only One Word                    | W   | 0.164      | -            | -                | -                | -         |     0.37 | aliStair, dexter, INS, Liazz, Vexite |
|            9 |     4077 | 2024-09-27 | Only One Word                    | W   | 0.164      | -            | -                | -                | -         |     0.37 | aliStair, dexter, INS, Liazz, Vexite |
|            8 |     4120 | 2024-09-26 | Housebets                        | W   | 0.158      | -            | -                | -                | -         |     0.34 | aliStair, dexter, INS, Liazz, Vexite |
|            7 |     4123 | 2024-09-26 | Housebets                        | W   | 0.157      | -            | -                | -                | -         |     0.34 | aliStair, dexter, INS, Liazz, Vexite |
|            6 |     4178 | 2024-09-25 | Arcade Esports (Australian team) | W   | 0.151      | -            | -                | -                | -         |     0.26 | aliStair, dexter, INS, Liazz, Vexite |
|            5 |     4183 | 2024-09-25 | Arcade Esports (Australian team) | W   | 0.151      | -            | -                | -                | -         |     0.26 | aliStair, dexter, INS, Liazz, Vexite |
|            4 |     4724 | 2024-09-07 | HEROIC                           | L   | 0.031      | -            | -                | -                | -         |    -0.51 | aliStair, dexter, INS, Liazz, Vexite |
|            3 |     4745 | 2024-09-06 | Lynn Vision Gaming               | W   | 0.025      | 0.889        | 0.017 (0.000)    | -                | 1 (0.025) |     0.25 | aliStair, dexter, INS, Liazz, Vexite |
|            2 |     4814 | 2024-09-04 | FaZe Clan                        | L   | 0.012      | -            | -                | -                | -         |    -0.00 | aliStair, dexter, INS, Liazz, Vexite |
|            1 |     4855 | 2024-09-03 | Eternal Fire                     | L   | 0.005      | -            | -                | -                | -         |    -0.00 | aliStair, dexter, INS, Liazz, Vexite |

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
