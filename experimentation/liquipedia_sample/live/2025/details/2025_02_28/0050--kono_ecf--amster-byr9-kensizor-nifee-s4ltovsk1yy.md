### Roster Details<br />
Team Name: KONO.ECF<br />
Roster: amster, byr9, kensizor, nifee, s4ltovsk1yy<br />
Global Rank: [50](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [38]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  994.3<br />
<br />
Final Rank Value (994.3) = Starting Rank Value (958.9) + Head To Head Adjustments (35.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.441[<sup>1</sup>](#table2)
- Bounty Collected: 0.375[<sup>2</sup>](#table1)
- Opponent Network: 0.205[<sup>2</sup>](#table1)
- LAN Wins: 0.062[<sup>2</sup>](#table1)

The average of these factors is 0.271<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 958.9
- 400 + ( ( 0.271 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 958.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           72 |     1110 | 2024-12-30 | Anonymo Esports                           | W   | 0.798      | 0.333        | 0.046 (0.012)    | 0.792 (0.211)    | 0 (0.000) |     9.66 | amster, byr9, kensizor, nifee, s4ltovsk1yy      |
|           71 |     1132 | 2024-12-29 | Los kogutos                               | W   | 0.791      | 0.333        | 0.038 (0.010)    | -                | 0 (0.000) |    10.64 | amster, byr9, kensizor, nifee, s4ltovsk1yy      |
|           70 |     1172 | 2024-12-28 | Kubix Esports                             | W   | 0.785      | 0.333        | 0.053 (0.014)    | -                | 0 (0.000) |    10.55 | amster, byr9, kensizor, nifee, s4ltovsk1yy      |
|           69 |     1225 | 2024-12-25 | WOPA Esport                               | W   | 0.764      | 0.333        | 0.037 (0.009)    | 0.845 (0.215)    | 0 (0.000) |     9.59 | amster, byr9, kensizor, nifee, s4ltovsk1yy      |
|           68 |     1246 | 2024-12-23 | TEAM NEXT LEVEL                           | L   | 0.751      | -            | -                | -                | -         |   -13.21 | amster, byr9, kensizor, nifee, s4ltovsk1yy      |
|           67 |     1251 | 2024-12-23 | ENCE Academy                              | W   | 0.750      | 0.333        | -                | 0.703 (0.176)    | 0 (0.000) |     7.97 | amster, byr9, kensizor, nifee, s4ltovsk1yy      |
|           66 |     1255 | 2024-12-22 | Monte                                     | W   | 0.747      | 0.371        | 0.053 (0.015)    | 0.867 (0.240)    | 0 (0.000) |    13.41 | amster, byr9, kensizor, nifee, s4ltovsk1yy      |
|           65 |     1266 | 2024-12-22 | TEAM NEXT LEVEL                           | W   | 0.746      | -            | -                | -                | 0 (0.000) |    11.21 | amster, byr9, kensizor, nifee, s4ltovsk1yy      |
|           64 |     1277 | 2024-12-22 | Nexus Gaming                              | W   | 0.745      | 0.371        | 0.221 (0.061)    | 0.873 (0.241)    | 0 (0.000) |    15.35 | amster, byr9, kensizor, nifee, s4ltovsk1yy      |
|           63 |     1314 | 2024-12-21 | JANO Esports                              | W   | 0.739      | 0.371        | 0.026 (0.007)    | -                | 0 (0.000) |    10.18 | amster, byr9, kensizor, nifee, s4ltovsk1yy      |
|           62 |     1337 | 2024-12-21 | ADEPTS                                    | W   | 0.738      | -            | -                | -                | -         |     5.50 | amster, byr9, kensizor, nifee, s4ltovsk1yy      |
|           61 |     1353 | 2024-12-21 | WOPA Esport                               | L   | 0.737      | -            | -                | -                | -         |   -14.06 | amster, byr9, kensizor, nifee, s4ltovsk1yy      |
|           60 |     1372 | 2024-12-20 | TEAM NEXT LEVEL                           | L   | 0.733      | -            | -                | -                | -         |   -12.23 | amster, byr9, kensizor, nifee, s4ltovsk1yy      |
|           59 |     1399 | 2024-12-19 | Nexus Gaming                              | W   | 0.727      | 0.371        | 0.221 (0.060)    | 0.873 (0.235)    | -         |    15.60 | amster, byr9, kensizor, nifee, s4ltovsk1yy      |
|           58 |     1405 | 2024-12-19 | Astralis Talent                           | W   | 0.725      | 0.333        | -                | 0.640 (0.155)    | -         |     7.52 | amster, byr9, kensizor, nifee, s4ltovsk1yy      |
|           57 |     1417 | 2024-12-19 | Preasy Esport                             | W   | 0.724      | -            | -                | -                | -         |     7.69 | amster, byr9, kensizor, nifee, s4ltovsk1yy      |
|           56 |     1436 | 2024-12-17 | Lazer Cats                                | W   | 0.713      | -            | -                | -                | -         |     7.51 | amster, byr9, kensizor, nifee, s4ltovsk1yy      |
|           55 |     1439 | 2024-12-17 | Anonymo Esports                           | L   | 0.713      | -            | -                | -                | -         |   -12.09 | amster, byr9, kensizor, nifee, s4ltovsk1yy      |
|           54 |     1456 | 2024-12-16 | Monte                                     | W   | 0.706      | 0.371        | 0.053 (0.014)    | 0.867 (0.227)    | -         |    14.69 | amster, byr9, kensizor, nifee, s4ltovsk1yy      |
|           53 |     1468 | 2024-12-16 | GenOne                                    | W   | 0.704      | 0.333        | -                | 0.839 (0.197)    | -         |    10.38 | amster, byr9, kensizor, nifee, s4ltovsk1yy      |
|           52 |     1699 | 2024-12-12 | Astralis Talent                           | W   | 0.679      | -            | -                | -                | -         |     8.41 | amster, byr9, kensizor, nifee, s4ltovsk1yy      |
|           51 |     1710 | 2024-12-12 | Lilmix                                    | W   | 0.678      | -            | -                | -                | -         |     3.80 | amster, byr9, kensizor, nifee, s4ltovsk1yy      |
|           50 |     1868 | 2024-12-08 | GODSENT                                   | W   | 0.652      | -            | -                | -                | -         |     5.75 | amster, byr9, kensizor, nifee, s4ltovsk1yy      |
|           49 |     1886 | 2024-12-08 | GenOne                                    | L   | 0.650      | -            | -                | -                | -         |    -9.13 | amster, byr9, kensizor, nifee, s4ltovsk1yy      |
|           48 |     2258 | 2024-12-01 | BC.Game Esports                           | L   | 0.606      | -            | -                | -                | -         |    -8.20 | amster, byr9, Dafra1D, kensizor, s4ltovsk1yy    |
|           47 |     2359 | 2024-11-30 | Betclic Apogee Esports                    | L   | 0.598      | -            | -                | -                | -         |    -8.25 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           46 |     2404 | 2024-11-29 | BC.Game Esports                           | L   | 0.591      | -            | -                | -                | -         |    -8.91 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           45 |     2522 | 2024-11-26 | ALTERNATE aTTaX                           | L   | 0.573      | -            | -                | -                | -         |    -7.11 | amster, byr9, Dafra1D, kensizor, s4ltovsk1yy    |
|           44 |     2570 | 2024-11-25 | Preasy Esport                             | W   | 0.564      | -            | -                | -                | -         |     6.08 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           43 |     2582 | 2024-11-24 | Copenhagen Wolves (American organization) | L   | 0.560      | -            | -                | -                | -         |    -8.83 | amster, byr9, Dafra1D, kensizor, s4ltovsk1yy    |
|           42 |     2657 | 2024-11-23 | RUSTEC                                    | L   | 0.553      | -            | -                | -                | -         |   -14.10 | amster, byr9, Dafra1D, kensizor, s4ltovsk1yy    |
|           41 |     2687 | 2024-11-23 | GenOne                                    | W   | 0.552      | 0.333        | -                | 0.839 (0.154)    | -         |     7.57 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           40 |     2785 | 2024-11-22 | FLuffy Gangsters                          | L   | 0.545      | -            | -                | -                | -         |    -9.64 | amster, byr9, Dafra1D, kensizor, s4ltovsk1yy    |
|           39 |     2823 | 2024-11-21 | Leo Team                                  | L   | 0.540      | -            | -                | -                | -         |    -8.82 | amster, byr9, Dafra1D, kensizor, s4ltovsk1yy    |
|           38 |     2841 | 2024-11-21 | RUSTEC                                    | W   | 0.539      | -            | -                | -                | -         |     2.18 | amster, byr9, Dafra1D, kensizor, s4ltovsk1yy    |
|           37 |     3196 | 2024-11-15 | QPT                                       | L   | 0.499      | -            | -                | -                | -         |    -2.87 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           36 |     3240 | 2024-11-14 | Team Latvia                               | L   | 0.493      | -            | -                | -                | -         |   -13.35 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           35 |     3249 | 2024-11-14 | Nexus Gaming                              | L   | 0.493      | -            | -                | -                | -         |    -4.72 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           34 |     3259 | 2024-11-14 | GnG x Amazigh                             | W   | 0.492      | -            | -                | -                | 1 (0.492) |     0.69 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           33 |     3647 | 2024-11-06 | Heimo Esports                             | W   | 0.440      | -            | -                | -                | -         |     3.85 | amster, byr9, Dafra1D, kensizor, s4ltovsk1yy    |
|           32 |     3660 | 2024-11-06 | QUAZAR                                    | W   | 0.439      | -            | -                | -                | -         |     3.49 | amster, byr9, Dafra1D, kensizor, s4ltovsk1yy    |
|           31 |     3810 | 2024-11-03 | Preasy Esport                             | L   | 0.420      | -            | -                | -                | -         |    -9.01 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           30 |     4087 | 2024-10-30 | Fire Flux Esports                         | L   | 0.393      | -            | -                | -                | -         |    -6.06 | amster, byr9, Dafra1D, kensizor, s4ltovsk1yy    |
|           29 |     4147 | 2024-10-29 | CYBERSHOKE Esports                        | W   | 0.386      | -            | -                | -                | -         |     5.00 | amster, byr9, Dafra1D, kensizor, s4ltovsk1yy    |
|           28 |     4242 | 2024-10-27 | MOUZ NXT                                  | W   | 0.372      | -            | -                | -                | -         |     1.38 | amster, byr9, Dafra1D, kensizor, s4ltovsk1yy    |
|           27 |     4415 | 2024-10-24 | Chimera Esports                           | L   | 0.350      | -            | -                | -                | -         |    -6.57 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           26 |     4492 | 2024-10-22 | Natus Vincere Junior                      | W   | 0.337      | 0.333        | 0.108 (0.012)    | -                | -         |     6.77 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           25 |     4516 | 2024-10-21 | Endpoint                                  | L   | 0.332      | -            | -                | -                | -         |    -7.49 | amster, byr9, Dafra1D, kensizor, s4ltovsk1yy    |
|           24 |     4603 | 2024-10-20 | Copenhagen Wolves (American organization) | W   | 0.323      | -            | -                | -                | -         |     4.67 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           23 |     4691 | 2024-10-18 | GenOne                                    | L   | 0.310      | -            | -                | -                | -         |    -6.13 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           22 |     4729 | 2024-10-17 | Illuminar Gaming                          | W   | 0.304      | -            | -                | -                | -         |     4.29 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           21 |     4867 | 2024-10-15 | Heimo Esports                             | W   | 0.290      | -            | -                | -                | -         |     2.47 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           20 |     4879 | 2024-10-14 | ALASKA                                    | W   | 0.286      | -            | -                | -                | -         |     6.73 | amster, byr9, Dafra1D, kensizor, s4ltovsk1yy    |
|           19 |     4902 | 2024-10-14 | Natus Vincere Junior                      | L   | 0.283      | -            | -                | -                | -         |    -3.35 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           18 |     4939 | 2024-10-13 | ADEPTS                                    | L   | 0.277      | -            | -                | -                | -         |    -7.14 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           17 |     5080 | 2024-10-10 | ENCE Academy                              | W   | 0.257      | -            | -                | -                | -         |     2.92 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           16 |     5157 | 2024-10-09 | Heimo Esports                             | W   | 0.250      | -            | -                | -                | -         |     2.12 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           15 |     5280 | 2024-10-07 | FAVBET Team                               | L   | 0.237      | -            | -                | -                | -         |    -4.24 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           14 |     5397 | 2024-10-05 | LOADING (French team)                     | W   | 0.224      | -            | -                | -                | -         |     0.60 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           13 |     5738 | 2024-09-29 | Leo Team                                  | L   | 0.186      | -            | -                | -                | -         |    -3.67 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           12 |     5756 | 2024-09-29 | TEAM NEXT LEVEL                           | W   | 0.185      | -            | -                | -                | -         |     2.38 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           11 |     5815 | 2024-09-28 | Iron Branch (Ukrainian team)              | W   | 0.179      | -            | -                | -                | -         |     0.40 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           10 |     6117 | 2024-09-25 | Los kogutos                               | L   | 0.157      | -            | -                | -                | -         |    -1.83 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|            9 |     6382 | 2024-09-21 | Tricked Esport                            | L   | 0.131      | -            | -                | -                | -         |    -2.63 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|            8 |     6642 | 2024-09-17 | Dynamo Eclot                              | L   | 0.104      | -            | -                | -                | -         |    -0.84 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|            7 |     6688 | 2024-09-16 | Leo Team                                  | W   | 0.098      | -            | -                | -                | -         |     1.13 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|            6 |     6738 | 2024-09-15 | Lazer Cats                                | L   | 0.091      | -            | -                | -                | -         |    -2.22 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|            5 |     6750 | 2024-09-15 | Ex-ENTERPRISE esports                     | W   | 0.090      | -            | -                | -                | -         |     0.66 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|            4 |     6828 | 2024-09-14 | Fragmatic                                 | W   | 0.084      | -            | -                | -                | -         |     0.18 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|            3 |     6899 | 2024-09-13 | Preasy Esport                             | W   | 0.077      | -            | -                | -                | -         |     0.78 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|            2 |     7007 | 2024-09-11 | Dynamo Eclot                              | L   | 0.063      | -            | -                | -                | -         |    -0.50 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|            1 |     7322 | 2024-09-06 | ALASKA                                    | W   | 0.031      | -            | -                | -                | -         |     0.78 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,397.31)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-30 |      0.798 | $6,000.00      | $4,787.36       |
| 2024-12-25 |      0.764 | $6,000.00      | $4,586.94       |
| 2024-12-23 |      0.751 | $5,000.00      | $3,756.83       |
| 2024-12-22 |      0.746 | $1,196.99      | $892.56         |
| 2024-10-24 |      0.350 | $3,000.00      | $1,049.51       |
| 2024-09-29 |      0.186 | $971.82        | $180.71         |
| 2024-09-18 |      0.110 | $1,000.00      | $109.84         |
| 2024-09-15 |      0.093 | $362.53        | $33.55          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
