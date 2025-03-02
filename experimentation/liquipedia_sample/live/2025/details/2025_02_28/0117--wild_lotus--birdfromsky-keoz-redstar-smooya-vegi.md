### Roster Details<br />
Team Name: Wild Lotus<br />
Roster: birdfromsky, Keoz, REDSTAR, smooya, Vegi<br />
Global Rank: [117](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [87]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  838.4<br />
<br />
Final Rank Value (838.4) = Starting Rank Value (762.5) + Head To Head Adjustments (75.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.262[<sup>1</sup>](#table2)
- Bounty Collected: 0.330[<sup>2</sup>](#table1)
- Opponent Network: 0.110[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.176<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 762.5
- 400 + ( ( 0.176 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 762.5


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
|           52 |      124 | 2025-02-25 | Fire Flux Esports                         | L   | 1.000      | -            | -                | -                | -         |   -10.59 | birdfromsky, Keoz, REDSTAR, smooya, Vegi      |
|           51 |      143 | 2025-02-24 | Aurora Gaming                             | L   | 1.000      | -            | -                | -                | -         |   -14.69 | birdfromsky, Keoz, REDSTAR, smooya, Vegi      |
|           50 |      852 | 2025-01-29 | Copenhagen Wolves (American organization) | W   | 0.999      | 0.143        | -                | 1.000 (0.143)    | 0 (0.000) |    17.73 | Keoz, REDSTAR, reiko, sinnopsyy, smooya       |
|           49 |      877 | 2025-01-28 | Zero Tenacity                             | W   | 0.993      | 0.143        | 0.033 (0.005)    | 0.842 (0.119)    | 0 (0.000) |    19.34 | Keoz, REDSTAR, reiko, sinnopsyy, smooya       |
|           48 |      895 | 2025-01-27 | AMKAL ESPORTS                             | L   | 0.987      | -            | -                | -                | -         |   -13.48 | Keoz, REDSTAR, reiko, sinnopsyy, smooya       |
|           47 |     1642 | 2024-12-13 | AMKAL ESPORTS                             | L   | 0.686      | -            | -                | -                | -         |   -10.32 | hAdji, Keoz, REDSTAR, sinnopsyy, smooya       |
|           46 |     1853 | 2024-12-08 | 9INE                                      | W   | 0.653      | 0.435        | 0.044 (0.012)    | 0.747 (0.212)    | 0 (0.000) |    13.57 | Keoz, REDSTAR, reiko, sinnopsyy, smooya       |
|           45 |     1989 | 2024-12-06 | Endpoint                                  | W   | 0.639      | 0.435        | -                | 0.417 (0.116)    | 0 (0.000) |     8.51 | hAdji, Keoz, REDSTAR, sinnopsyy, smooya       |
|           44 |     2122 | 2024-12-03 | Metizport                                 | W   | 0.617      | 0.435        | 0.088 (0.024)    | 0.553 (0.148)    | 0 (0.000) |    16.57 | hAdji, Keoz, REDSTAR, sinnopsyy, smooya       |
|           43 |     3505 | 2024-11-09 | ENCE                                      | L   | 0.458      | -            | -                | -                | -         |    -2.82 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           42 |     3586 | 2024-11-08 | Dynamo Eclot                              | L   | 0.450      | -            | -                | -                | -         |    -2.15 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           41 |     3667 | 2024-11-06 | 9INE                                      | L   | 0.439      | -            | -                | -                | -         |    -7.04 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           40 |     3675 | 2024-11-06 | 9INE                                      | W   | 0.438      | 0.371        | -                | 0.242 (0.039)    | 0 (0.000) |     6.92 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           39 |     3726 | 2024-11-05 | Nemiga Gaming                             | L   | 0.432      | -            | -                | -                | -         |    -1.85 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           38 |     3788 | 2024-11-04 | Rebels Gaming                             | L   | 0.425      | -            | -                | -                | -         |    -6.92 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           37 |     3863 | 2024-11-03 | AMKAL ESPORTS                             | L   | 0.417      | -            | -                | -                | -         |    -6.52 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           36 |     3903 | 2024-11-02 | 500                                       | W   | 0.413      | 0.143        | 0.111 (0.007)    | 1.000 (0.059)    | 0 (0.000) |    10.41 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           35 |     3921 | 2024-11-02 | Sashi Esport                              | W   | 0.412      | -            | -                | -                | 0 (0.000) |     9.59 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           34 |     3930 | 2024-11-02 | Los kogutos                               | W   | 0.411      | -            | -                | -                | 0 (0.000) |     9.22 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           33 |     3981 | 2024-11-01 | Insilio                                   | L   | 0.405      | -            | -                | -                | -         |    -9.31 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           32 |     3991 | 2024-11-01 | Dynamo Eclot                              | L   | 0.404      | -            | -                | -                | -         |    -1.91 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           31 |     4099 | 2024-10-30 | Los kogutos                               | W   | 0.392      | 0.384        | 0.038 (0.006)    | 0.572 (0.086)    | 0 (0.000) |     8.98 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           30 |     4106 | 2024-10-30 | GUN5 Esports                              | W   | 0.391      | 0.371        | 0.123 (0.018)    | 0.623 (0.090)    | -         |     9.32 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           29 |     4323 | 2024-10-26 | Chimera Esports                           | W   | 0.364      | 0.371        | 0.030 (0.004)    | 0.641 (0.087)    | -         |     7.29 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           28 |     4573 | 2024-10-20 | Johnny Speeds                             | W   | 0.325      | -            | -                | -                | -         |     7.35 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           27 |     4925 | 2024-10-13 | GUN5 Esports                              | L   | 0.278      | -            | -                | -                | -         |    -1.97 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           26 |     5317 | 2024-10-06 | Nexus Gaming                              | W   | 0.231      | 0.143        | 0.221 (0.007)    | -                | -         |     6.54 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           25 |     5579 | 2024-10-02 | Illuminar Gaming                          | L   | 0.204      | -            | -                | -                | -         |    -2.07 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           24 |     5665 | 2024-10-01 | Passion UA                                | L   | 0.197      | -            | -                | -                | -         |    -1.68 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           23 |     5753 | 2024-09-29 | Copenhagen Wolves (American organization) | L   | 0.185      | -            | -                | -                | -         |    -4.47 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           22 |     5847 | 2024-09-28 | Team Sampi                                | W   | 0.178      | -            | -                | -                | -         |     3.25 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           21 |     5861 | 2024-09-28 | Johnny Speeds                             | W   | 0.177      | -            | -                | -                | -         |     3.91 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           20 |     5907 | 2024-09-27 | ALTERNATE aTTaX                           | L   | 0.173      | -            | -                | -                | -         |    -1.32 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           19 |     5928 | 2024-09-27 | UNiTY esports                             | W   | 0.171      | -            | -                | -                | -         |     3.46 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           18 |     5974 | 2024-09-26 | ECSTATIC                                  | L   | 0.166      | -            | -                | -                | -         |    -1.57 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           17 |     6010 | 2024-09-26 | Aurora Gaming                             | L   | 0.164      | -            | -                | -                | -         |    -1.94 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           16 |     6160 | 2024-09-24 | Endpoint                                  | W   | 0.153      | -            | -                | -                | -         |     2.58 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           15 |     6182 | 2024-09-24 | Fnatic                                    | W   | 0.152      | -            | -                | -                | -         |     4.18 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           14 |     6201 | 2024-09-24 | ALTERNATE aTTaX                           | L   | 0.151      | -            | -                | -                | -         |    -1.13 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           13 |     6280 | 2024-09-23 | Metizport                                 | W   | 0.143      | 0.384        | 0.088 (0.005)    | -                | -         |     4.05 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           12 |     6413 | 2024-09-20 | 9Pandas                                   | L   | 0.126      | -            | -                | -                | -         |    -0.68 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           11 |     6436 | 2024-09-20 | Anonymo Esports                           | W   | 0.124      | -            | -                | -                | -         |     2.48 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           10 |     6443 | 2024-09-20 | 9INE                                      | L   | 0.123      | -            | -                | -                | -         |    -1.89 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|            9 |     6483 | 2024-09-19 | Team Sampi                                | W   | 0.119      | -            | -                | -                | -         |     2.26 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|            8 |     6563 | 2024-09-18 | AMKAL ESPORTS                             | L   | 0.111      | -            | -                | -                | -         |    -1.48 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|            7 |     6634 | 2024-09-17 | Sashi Esport                              | W   | 0.105      | -            | -                | -                | -         |     2.68 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|            6 |     6644 | 2024-09-17 | GUN5 Esports                              | W   | 0.104      | 0.443        | 0.123 (0.006)    | -                | -         |     2.57 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|            5 |     6985 | 2024-09-11 | EYEBALLERS                                | W   | 0.065      | -            | -                | -                | -         |     1.22 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|            4 |     7003 | 2024-09-11 | Rebels Gaming                             | L   | 0.064      | -            | -                | -                | -         |    -0.85 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|            3 |     7413 | 2024-09-05 | TEAM NEXT LEVEL                           | W   | 0.024      | -            | -                | -                | -         |     0.32 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|            2 |     7423 | 2024-09-05 | GamerLegion                               | W   | 0.023      | -            | -                | -                | -         |     0.32 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|            1 |     7581 | 2024-09-02 | TSM                                       | L   | 0.003      | -            | -                | -                | -         |    -0.05 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($441.60)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-26 |      0.165 | $1,500.00      | $247.81         |
| 2024-09-24 |      0.151 | $1,000.00      | $150.95         |
| 2024-09-14 |      0.086 | $500.00        | $42.84          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
