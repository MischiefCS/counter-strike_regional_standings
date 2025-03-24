### Roster Details<br />
Team Name: Wild Lotus<br />
Roster: birdfromsky, Keoz, REDSTAR, smooya, Vegi<br />
Global Rank: [108](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [75]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  753.3<br />
<br />
Final Rank Value (753.3) = Starting Rank Value (718.9) + Head To Head Adjustments (34.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.256[<sup>1</sup>](#table2)
- Bounty Collected: 0.316[<sup>2</sup>](#table1)
- Opponent Network: 0.088[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.165<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 718.9
- 400 + ( ( 0.165 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 718.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           44 |       40 | 2025-02-25 | Fire Flux Esports                         | L   | 1.000      | -            | -                | -                | -         |   -10.13 | birdfromsky, Keoz, REDSTAR, smooya, Vegi      |
|           43 |       55 | 2025-02-24 | Aurora Gaming                             | L   | 1.000      | -            | -                | -                | -         |   -14.89 | birdfromsky, Keoz, REDSTAR, smooya, Vegi      |
|           42 |      134 | 2025-02-21 | GhoulsW                                   | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.38 | birdfromsky, Keoz, REDSTAR, smooya, Vegi      |
|           41 |      139 | 2025-02-21 | CYBERSHOKE Esports                        | L   | 1.000      | -            | -                | -                | -         |   -11.68 | birdfromsky, Keoz, REDSTAR, smooya, Vegi      |
|           40 |      635 | 2025-01-29 | Copenhagen Wolves (American organization) | W   | 0.993      | 0.143        | -                | 0.665 (0.094)    | 0 (0.000) |    16.36 | Keoz, REDSTAR, reiko, sinnopsyy, smooya       |
|           39 |      644 | 2025-01-28 | Zero Tenacity                             | W   | 0.988      | 0.143        | 0.026 (0.004)    | 0.507 (0.072)    | 0 (0.000) |    16.54 | Keoz, REDSTAR, reiko, sinnopsyy, smooya       |
|           38 |      648 | 2025-01-27 | AMKAL ESPORTS                             | L   | 0.980      | -            | -                | -                | -         |   -18.34 | Keoz, REDSTAR, reiko, sinnopsyy, smooya       |
|           37 |      894 | 2024-12-13 | AMKAL ESPORTS                             | L   | 0.680      | -            | -                | -                | -         |   -12.14 | hAdji, Keoz, REDSTAR, sinnopsyy, smooya       |
|           36 |      960 | 2024-12-08 | 9INE                                      | W   | 0.647      | 0.435        | 0.037 (0.010)    | 0.895 (0.252)    | 0 (0.000) |    13.24 | Keoz, REDSTAR, reiko, sinnopsyy, smooya       |
|           35 |     1014 | 2024-12-06 | Endpoint                                  | W   | 0.632      | 0.435        | 0.009 (0.002)    | 0.233 (0.064)    | 0 (0.000) |     9.12 | hAdji, Keoz, REDSTAR, sinnopsyy, smooya       |
|           34 |     1099 | 2024-12-02 | Metizport                                 | W   | 0.610      | 0.435        | 0.074 (0.020)    | 0.654 (0.173)    | 0 (0.000) |    15.95 | hAdji, Keoz, REDSTAR, sinnopsyy, smooya       |
|           33 |     1607 | 2024-11-09 | ENCE                                      | L   | 0.452      | -            | -                | -                | -         |    -2.73 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           32 |     1627 | 2024-11-07 | Dynamo Eclot                              | L   | 0.444      | -            | -                | -                | -         |    -2.20 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           31 |     1651 | 2024-11-06 | 9INE                                      | W   | 0.431      | -            | -                | -                | 0 (0.000) |     6.44 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           30 |     1661 | 2024-11-05 | Nemiga Gaming                             | L   | 0.426      | -            | -                | -                | -         |    -2.40 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           29 |     1675 | 2024-11-04 | Rebels Gaming                             | L   | 0.418      | -            | -                | -                | -         |    -7.25 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           28 |     1710 | 2024-11-02 | 500                                       | W   | 0.406      | 0.143        | 0.086 (0.005)    | 1.000 (0.058)    | 0 (0.000) |     9.87 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           27 |     1715 | 2024-11-02 | Sashi Esport                              | W   | 0.405      | 0.143        | -                | 0.582 (0.034)    | 0 (0.000) |     9.33 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           26 |     1718 | 2024-11-02 | Los kogutos                               | W   | 0.405      | -            | -                | -                | 0 (0.000) |     9.05 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           25 |     1734 | 2024-11-01 | Insilio                                   | L   | 0.398      | -            | -                | -                | -         |    -8.99 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           24 |     1773 | 2024-10-30 | GUN5 Esports                              | W   | 0.384      | 0.371        | 0.099 (0.014)    | 0.503 (0.072)    | -         |     8.90 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           23 |     2300 | 2024-10-02 | Illuminar Gaming                          | L   | 0.198      | -            | -                | -                | -         |    -2.60 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           22 |     2360 | 2024-09-30 | Passion UA                                | L   | 0.190      | -            | -                | -                | -         |    -1.01 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           21 |     2393 | 2024-09-29 | Copenhagen Wolves (American organization) | L   | 0.178      | -            | -                | -                | -         |    -4.21 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           20 |     2421 | 2024-09-27 | Johnny Speeds                             | W   | 0.171      | 0.371        | 0.039 (0.002)    | -                | -         |     3.62 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           19 |     2447 | 2024-09-27 | ALTERNATE aTTaX                           | L   | 0.166      | -            | -                | -                | -         |    -1.59 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           18 |     2452 | 2024-09-27 | UNiTY esports                             | W   | 0.165      | -            | -                | -                | -         |     2.90 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           17 |     2478 | 2024-09-26 | ECSTATIC                                  | L   | 0.160      | -            | -                | -                | -         |    -1.63 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           16 |     2505 | 2024-09-25 | Aurora Gaming                             | L   | 0.157      | -            | -                | -                | -         |    -2.07 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           15 |     2598 | 2024-09-24 | Endpoint                                  | W   | 0.146      | -            | -                | -                | -         |     2.41 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           14 |     2612 | 2024-09-24 | Fnatic                                    | W   | 0.145      | 0.384        | 0.047 (0.003)    | 0.490 (0.027)    | -         |     3.85 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           13 |     2621 | 2024-09-23 | ALTERNATE aTTaX                           | L   | 0.144      | -            | -                | -                | -         |    -1.37 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           12 |     2661 | 2024-09-22 | Metizport                                 | W   | 0.137      | 0.384        | 0.074 (0.004)    | 0.654 (0.034)    | -         |     3.73 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           11 |     2707 | 2024-09-20 | 9Pandas                                   | L   | 0.120      | -            | -                | -                | -         |    -0.85 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           10 |     2720 | 2024-09-20 | 9INE                                      | L   | 0.118      | -            | -                | -                | -         |    -1.94 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|            9 |     2722 | 2024-09-19 | Dark Cloud Esports                        | W   | 0.118      | -            | -                | -                | -         |     1.94 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|            8 |     2743 | 2024-09-19 | Team Sampi                                | W   | 0.113      | -            | -                | -                | -         |     2.08 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|            7 |     2786 | 2024-09-17 | AMKAL ESPORTS                             | L   | 0.104      | -            | -                | -                | -         |    -1.62 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|            6 |     2810 | 2024-09-17 | Sashi Esport                              | W   | 0.098      | -            | -                | -                | -         |     2.35 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|            5 |     2815 | 2024-09-16 | GUN5 Esports                              | W   | 0.098      | 0.443        | 0.099 (0.004)    | -                | -         |     2.27 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|            4 |     2984 | 2024-09-11 | EYEBALLERS                                | W   | 0.058      | -            | -                | -                | -         |     1.07 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|            3 |     2993 | 2024-09-10 | Rebels Gaming                             | L   | 0.057      | -            | -                | -                | -         |    -0.92 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|            2 |     3150 | 2024-09-05 | TEAM NEXT LEVEL                           | W   | 0.018      | -            | -                | -                | -         |     0.22 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|            1 |     3158 | 2024-09-04 | GamerLegion                               | W   | 0.017      | -            | -                | -                | -         |     0.24 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($422.36)
- Divide that value by the 5th highest value among all rosters ($336,045.79)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-26 |      0.159 | $1,500.00      | $238.47         |
| 2024-09-24 |      0.144 | $1,000.00      | $144.35         |
| 2024-09-14 |      0.079 | $500.00        | $39.54          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
