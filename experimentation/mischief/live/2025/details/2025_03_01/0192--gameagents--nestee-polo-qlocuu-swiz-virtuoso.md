### Roster Details<br />
Team Name: GameAgents<br />
Roster: nestee, POLO, Qlocuu, swiz, virtuoso<br />
Global Rank: [192](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [131]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  675.1<br />
<br />
Final Rank Value (675.1) = Starting Rank Value (669.0) + Head To Head Adjustments (6.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.286[<sup>1</sup>](#table2)
- Bounty Collected: 0.246[<sup>2</sup>](#table1)
- Opponent Network: 0.019[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.138<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 669.0
- 400 + ( ( 0.138 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 669.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           25 |      826 | 2025-02-04 | GardenGarage                              | L   | 1.000      | -            | -                | -                | -         |   -13.14 | nestee, POLO, Qlocuu, swiz, virtuoso |
|           24 |     3609 | 2024-10-11 | Ins (Polish team)                         | L   | 0.259      | -            | -                | -                | -         |    -4.64 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           23 |     3616 | 2024-10-10 | 500 Rush                                  | L   | 0.252      | -            | -                | -                | -         |    -5.00 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           22 |     3837 | 2024-10-04 | TSM                                       | L   | 0.210      | -            | -                | -                | -         |    -2.90 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           21 |     3866 | 2024-10-03 | Passion UA                                | L   | 0.204      | -            | -                | -                | -         |    -0.91 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           20 |     3891 | 2024-10-02 | Betera Esports                            | W   | 0.200      | 0.500        | 0.006 (0.001)    | 0.126 (0.013)    | 0 (0.000) |     2.94 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           19 |     3949 | 2024-10-01 | Rebels Gaming                             | W   | 0.193      | 0.500        | 0.009 (0.001)    | 0.296 (0.029)    | 0 (0.000) |     3.26 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           18 |     3972 | 2024-10-01 | TSM                                       | W   | 0.191      | 0.371        | 0.009 (0.001)    | 0.155 (0.011)    | 0 (0.000) |     3.43 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           17 |     4017 | 2024-09-29 | ALTERNATE aTTaX                           | W   | 0.177      | 0.371        | 0.020 (0.001)    | 0.326 (0.021)    | 0 (0.000) |     4.24 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           16 |     4074 | 2024-09-27 | ALASKA                                    | W   | 0.164      | 0.371        | 0.030 (0.002)    | 0.634 (0.039)    | 0 (0.000) |     4.42 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           15 |     4098 | 2024-09-26 | ARCRED                                    | W   | 0.160      | 0.143        | 0.018 (0.000)    | 0.474 (0.011)    | 0 (0.000) |     2.90 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           14 |     4103 | 2024-09-26 | Tricked Esport                            | W   | 0.159      | 0.143        | 0.033 (0.001)    | 0.694 (0.016)    | 0 (0.000) |     3.45 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           13 |     4215 | 2024-09-24 | Monte                                     | L   | 0.146      | -            | -                | -                | -         |    -1.63 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           12 |     4259 | 2024-09-23 | Illuminar Gaming                          | W   | 0.140      | -            | -                | -                | 0 (0.000) |     2.95 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           11 |     4272 | 2024-09-23 | Johnny Speeds                             | L   | 0.138      | -            | -                | -                | -         |    -1.04 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           10 |     4388 | 2024-09-19 | ALASKA                                    | W   | 0.110      | 0.371        | 0.030 (0.001)    | 0.634 (0.026)    | 0 (0.000) |     3.01 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            9 |     4473 | 2024-09-16 | Natus Vincere Junior                      | L   | 0.090      | -            | -                | -                | -         |    -0.51 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            8 |     4504 | 2024-09-15 | Astralis Talent                           | W   | 0.084      | 0.333        | -                | 0.404 (0.011)    | 0 (0.000) |     1.53 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            7 |     4538 | 2024-09-14 | ENCE Academy                              | W   | 0.077      | 0.333        | 0.009 (0.000)    | 0.545 (0.014)    | -         |     1.57 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            6 |     4554 | 2024-09-13 | Natus Vincere Junior                      | L   | 0.072      | -            | -                | -                | -         |    -0.40 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            5 |     4559 | 2024-09-13 | UNiTY esports                             | W   | 0.071      | 0.333        | 0.025 (0.001)    | -                | -         |     1.43 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            4 |     4590 | 2024-09-12 | Natus Vincere Junior                      | L   | 0.065      | -            | -                | -                | -         |    -0.36 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            3 |     4624 | 2024-09-11 | JiJieHao                                  | W   | 0.058      | -            | -                | -                | -         |     0.83 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            2 |     4661 | 2024-09-10 | Copenhagen Wolves (American organization) | W   | 0.050      | -            | -                | -                | -         |     0.49 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            1 |     4768 | 2024-09-05 | Team Space                                | W   | 0.020      | -            | -                | -                | -         |     0.17 | POLO, Prism, Qlocuu, swiz, virtuoso  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,066.67)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.319 | $1,000.00      | $318.89         |
| 2024-10-05 |      0.217 | $3,000.00      | $650.83         |
| 2024-09-17 |      0.097 | $1,000.00      | $96.94          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
