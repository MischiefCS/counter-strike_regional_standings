### Roster Details<br />
Team Name: Wild Lotus<br />
Roster: birdfromsky, Keoz, REDSTAR, smooya, Vegi<br />
Global Rank: [122](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [93]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  792.2<br />
<br />
Final Rank Value (792.2) = Starting Rank Value (746.5) + Head To Head Adjustments (45.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.256[<sup>1</sup>](#table2)
- Bounty Collected: 0.326[<sup>2</sup>](#table1)
- Opponent Network: 0.121[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.176<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 746.5
- 400 + ( ( 0.176 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 746.5


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
|           47 |       46 | 2025-02-25 | Fire Flux Esports                         | L   | 1.000      | -            | -                | -                | -         |   -10.63 | birdfromsky, Keoz, REDSTAR, smooya, Vegi      |
|           46 |       60 | 2025-02-24 | Aurora Gaming                             | L   | 1.000      | -            | -                | -                | -         |   -14.07 | birdfromsky, Keoz, REDSTAR, smooya, Vegi      |
|           45 |      698 | 2025-01-29 | Copenhagen Wolves (American organization) | W   | 0.993      | 0.143        | -                | 1.000 (0.142)    | 0 (0.000) |    18.73 | Keoz, REDSTAR, reiko, sinnopsyy, smooya       |
|           44 |      714 | 2025-01-27 | AMKAL ESPORTS                             | L   | 0.980      | -            | -                | -                | -         |   -13.91 | Keoz, REDSTAR, reiko, sinnopsyy, smooya       |
|           43 |     1380 | 2024-12-13 | AMKAL ESPORTS                             | L   | 0.680      | -            | -                | -                | -         |   -10.66 | hAdji, Keoz, REDSTAR, sinnopsyy, smooya       |
|           42 |     1585 | 2024-12-08 | 9INE                                      | W   | 0.647      | 0.435        | 0.037 (0.010)    | 0.716 (0.201)    | 0 (0.000) |    12.88 | Keoz, REDSTAR, reiko, sinnopsyy, smooya       |
|           41 |     1729 | 2024-12-06 | Endpoint                                  | W   | 0.633      | 0.435        | -                | 0.423 (0.116)    | 0 (0.000) |     8.38 | hAdji, Keoz, REDSTAR, sinnopsyy, smooya       |
|           40 |     1881 | 2024-12-03 | Metizport                                 | W   | 0.611      | 0.435        | 0.074 (0.020)    | 0.564 (0.150)    | 0 (0.000) |    15.94 | hAdji, Keoz, REDSTAR, sinnopsyy, smooya       |
|           39 |     3273 | 2024-11-09 | ENCE                                      | L   | 0.452      | -            | -                | -                | -         |    -2.94 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           38 |     3348 | 2024-11-08 | Dynamo Eclot                              | L   | 0.444      | -            | -                | -                | -         |    -2.45 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           37 |     3424 | 2024-11-06 | 9INE                                      | L   | 0.433      | -            | -                | -                | -         |    -6.90 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           36 |     3433 | 2024-11-06 | 9INE                                      | W   | 0.432      | -            | -                | -                | 0 (0.000) |     6.86 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           35 |     3482 | 2024-11-05 | Nemiga Gaming                             | L   | 0.426      | -            | -                | -                | -         |    -2.11 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           34 |     3540 | 2024-11-04 | Rebels Gaming                             | L   | 0.418      | -            | -                | -                | -         |    -6.89 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           33 |     3613 | 2024-11-03 | AMKAL ESPORTS                             | L   | 0.411      | -            | -                | -                | -         |    -6.79 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           32 |     3653 | 2024-11-02 | 500                                       | W   | 0.406      | 0.358        | 0.094 (0.014)    | 1.000 (0.145)    | 0 (0.000) |     9.83 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           31 |     3671 | 2024-11-02 | Sashi Esport                              | W   | 0.405      | 0.427        | -                | 0.585 (0.101)    | 0 (0.000) |     9.10 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           30 |     3679 | 2024-11-02 | Los kogutos                               | W   | 0.405      | 0.427        | 0.032 (0.006)    | 0.597 (0.103)    | 0 (0.000) |     8.78 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           29 |     3728 | 2024-11-01 | Insilio                                   | L   | 0.399      | -            | -                | -                | -         |    -9.01 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           28 |     3736 | 2024-11-01 | Dynamo Eclot                              | L   | 0.398      | -            | -                | -                | -         |    -2.20 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           27 |     3837 | 2024-10-30 | Los kogutos                               | W   | 0.386      | 0.384        | 0.032 (0.005)    | 0.597 (0.089)    | 0 (0.000) |     8.54 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           26 |     3846 | 2024-10-30 | GUN5 Esports                              | W   | 0.385      | 0.371        | 0.104 (0.015)    | 0.575 (0.082)    | 0 (0.000) |     8.81 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           25 |     4056 | 2024-10-26 | Chimera Esports                           | W   | 0.358      | 0.371        | -                | 0.635 (0.084)    | -         |     6.98 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           24 |     4305 | 2024-10-20 | Johnny Speeds                             | W   | 0.319      | 0.358        | 0.039 (0.005)    | -                | -         |     7.06 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           23 |     4646 | 2024-10-13 | GUN5 Esports                              | L   | 0.272      | -            | -                | -                | -         |    -2.19 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           22 |     5258 | 2024-10-02 | Illuminar Gaming                          | L   | 0.198      | -            | -                | -                | -         |    -2.05 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           21 |     5342 | 2024-10-01 | Passion UA                                | L   | 0.191      | -            | -                | -                | -         |    -1.13 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           20 |     5426 | 2024-09-29 | Copenhagen Wolves (American organization) | L   | 0.179      | -            | -                | -                | -         |    -4.30 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           19 |     5513 | 2024-09-28 | Team Sampi                                | W   | 0.172      | -            | -                | -                | -         |     3.09 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           18 |     5526 | 2024-09-28 | Johnny Speeds                             | W   | 0.171      | -            | -                | -                | -         |     3.70 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           17 |     5572 | 2024-09-27 | ALTERNATE aTTaX                           | L   | 0.167      | -            | -                | -                | -         |    -1.48 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           16 |     5596 | 2024-09-27 | UNiTY esports                             | W   | 0.165      | -            | -                | -                | -         |     3.19 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           15 |     5638 | 2024-09-26 | ECSTATIC                                  | L   | 0.160      | -            | -                | -                | -         |    -1.63 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           14 |     5672 | 2024-09-26 | Aurora Gaming                             | L   | 0.158      | -            | -                | -                | -         |    -1.97 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           13 |     5813 | 2024-09-24 | Endpoint                                  | W   | 0.147      | -            | -                | -                | -         |     2.39 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           12 |     5835 | 2024-09-24 | Fnatic                                    | W   | 0.146      | 0.384        | 0.072 (0.004)    | -                | -         |     3.85 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           11 |     5851 | 2024-09-24 | ALTERNATE aTTaX                           | L   | 0.145      | -            | -                | -                | -         |    -1.27 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           10 |     5927 | 2024-09-23 | Metizport                                 | W   | 0.137      | 0.384        | 0.074 (0.004)    | -                | -         |     3.77 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|            9 |     6081 | 2024-09-20 | Anonymo Esports                           | W   | 0.118      | -            | -                | -                | -         |     2.28 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|            8 |     6125 | 2024-09-19 | Team Sampi                                | W   | 0.113      | -            | -                | -                | -         |     2.11 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|            7 |     6200 | 2024-09-18 | AMKAL ESPORTS                             | L   | 0.105      | -            | -                | -                | -         |    -1.49 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|            6 |     6264 | 2024-09-17 | Sashi Esport                              | W   | 0.099      | -            | -                | -                | -         |     2.40 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|            5 |     6276 | 2024-09-17 | GUN5 Esports                              | W   | 0.098      | 0.443        | 0.104 (0.004)    | -                | -         |     2.31 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|            4 |     6608 | 2024-09-11 | EYEBALLERS                                | W   | 0.059      | -            | -                | -                | -         |     1.08 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|            3 |     6627 | 2024-09-11 | Rebels Gaming                             | L   | 0.058      | -            | -                | -                | -         |    -0.81 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|            2 |     7020 | 2024-09-05 | TEAM NEXT LEVEL                           | W   | 0.018      | -            | -                | -                | -         |     0.24 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|            1 |     7032 | 2024-09-05 | GamerLegion                               | W   | 0.017      | -            | -                | -                | -         |     0.23 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($423.75)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-26 |      0.159 | $1,500.00      | $238.89         |
| 2024-09-24 |      0.145 | $1,000.00      | $145.00         |
| 2024-09-14 |      0.080 | $500.00        | $39.86          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
