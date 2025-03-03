### Roster Details<br />
Team Name: Wild Lotus<br />
Roster: birdfromsky, Keoz, REDSTAR, smooya, Vegi<br />
Global Rank: [117](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [82]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  767.3<br />
<br />
Final Rank Value (767.3) = Starting Rank Value (729.0) + Head To Head Adjustments (38.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.256[<sup>1</sup>](#table2)
- Bounty Collected: 0.318[<sup>2</sup>](#table1)
- Opponent Network: 0.099[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.168<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 729.0
- 400 + ( ( 0.168 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 729.0


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
|           48 |       41 | 2025-02-25 | Fire Flux Esports                         | L   | 1.000      | -            | -                | -                | -         |   -10.35 | birdfromsky, Keoz, REDSTAR, smooya, Vegi      |
|           47 |       56 | 2025-02-24 | Aurora Gaming                             | L   | 1.000      | -            | -                | -                | -         |   -14.54 | birdfromsky, Keoz, REDSTAR, smooya, Vegi      |
|           46 |      165 | 2025-02-21 | CYBERSHOKE Esports                        | L   | 1.000      | -            | -                | -                | -         |   -11.84 | birdfromsky, Keoz, REDSTAR, smooya, Vegi      |
|           45 |      176 | 2025-02-21 | GhoulsW                                   | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.97 | birdfromsky, Keoz, REDSTAR, smooya, Vegi      |
|           44 |      936 | 2025-01-29 | Copenhagen Wolves (American organization) | W   | 0.993      | 0.143        | -                | 0.865 (0.123)    | 0 (0.000) |    18.81 | Keoz, REDSTAR, reiko, sinnopsyy, smooya       |
|           43 |      945 | 2025-01-28 | Zero Tenacity                             | W   | 0.987      | 0.143        | 0.028 (0.004)    | 0.666 (0.094)    | 0 (0.000) |    18.31 | Keoz, REDSTAR, reiko, sinnopsyy, smooya       |
|           42 |      949 | 2025-01-27 | AMKAL ESPORTS                             | L   | 0.980      | -            | -                | -                | -         |   -13.30 | Keoz, REDSTAR, reiko, sinnopsyy, smooya       |
|           41 |     1530 | 2024-12-13 | AMKAL ESPORTS                             | L   | 0.680      | -            | -                | -                | -         |   -11.75 | hAdji, Keoz, REDSTAR, sinnopsyy, smooya       |
|           40 |     1678 | 2024-12-08 | 9INE                                      | W   | 0.647      | 0.435        | 0.037 (0.010)    | 1.000 (0.281)    | 0 (0.000) |    13.47 | Keoz, REDSTAR, reiko, sinnopsyy, smooya       |
|           39 |     1797 | 2024-12-06 | Endpoint                                  | W   | 0.633      | 0.435        | -                | 0.268 (0.074)    | 0 (0.000) |     9.67 | hAdji, Keoz, REDSTAR, sinnopsyy, smooya       |
|           38 |     1937 | 2024-12-03 | Metizport                                 | W   | 0.611      | 0.435        | 0.074 (0.020)    | 0.608 (0.161)    | 0 (0.000) |    16.15 | hAdji, Keoz, REDSTAR, sinnopsyy, smooya       |
|           37 |     2939 | 2024-11-09 | ENCE                                      | L   | 0.452      | -            | -                | -                | -         |    -2.67 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           36 |     3009 | 2024-11-08 | Dynamo Eclot                              | L   | 0.444      | -            | -                | -                | -         |    -2.15 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           35 |     3047 | 2024-11-06 | 9INE                                      | L   | 0.433      | -            | -                | -                | -         |    -6.98 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           34 |     3051 | 2024-11-06 | 9INE                                      | W   | 0.432      | 0.371        | -                | 0.203 (0.033)    | 0 (0.000) |     6.78 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           33 |     3077 | 2024-11-05 | Nemiga Gaming                             | L   | 0.426      | -            | -                | -                | -         |    -2.42 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           32 |     3105 | 2024-11-04 | Rebels Gaming                             | L   | 0.418      | -            | -                | -                | -         |    -7.47 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           31 |     3170 | 2024-11-03 | AMKAL ESPORTS                             | L   | 0.411      | -            | -                | -                | -         |    -6.83 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           30 |     3203 | 2024-11-02 | 500                                       | W   | 0.406      | 0.143        | 0.091 (0.005)    | 1.000 (0.058)    | 0 (0.000) |     9.76 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           29 |     3217 | 2024-11-02 | Sashi Esport                              | W   | 0.405      | 0.143        | -                | 0.565 (0.033)    | 0 (0.000) |     9.28 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           28 |     3222 | 2024-11-02 | Los kogutos                               | W   | 0.405      | -            | -                | -                | 0 (0.000) |     8.97 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           27 |     3260 | 2024-11-01 | Insilio                                   | L   | 0.399      | -            | -                | -                | -         |    -8.94 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           26 |     3268 | 2024-11-01 | Dynamo Eclot                              | L   | 0.398      | -            | -                | -                | -         |    -1.91 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           25 |     3331 | 2024-10-30 | Los kogutos                               | W   | 0.386      | 0.384        | 0.030 (0.004)    | 0.403 (0.060)    | -         |     8.73 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           24 |     3337 | 2024-10-30 | GUN5 Esports                              | W   | 0.385      | 0.371        | 0.101 (0.014)    | 0.541 (0.077)    | -         |     9.08 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           23 |     3913 | 2024-10-02 | Illuminar Gaming                          | L   | 0.198      | -            | -                | -                | -         |    -2.56 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           22 |     3975 | 2024-10-01 | Passion UA                                | L   | 0.190      | -            | -                | -                | -         |    -1.03 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           21 |     4009 | 2024-09-29 | Copenhagen Wolves (American organization) | L   | 0.178      | -            | -                | -                | -         |    -4.21 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           20 |     4036 | 2024-09-28 | Johnny Speeds                             | W   | 0.171      | 0.371        | 0.039 (0.002)    | -                | -         |     3.69 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           19 |     4062 | 2024-09-27 | ALTERNATE aTTaX                           | L   | 0.166      | -            | -                | -                | -         |    -1.57 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           18 |     4069 | 2024-09-27 | UNiTY esports                             | W   | 0.165      | -            | -                | -                | -         |     2.89 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           17 |     4092 | 2024-09-26 | ECSTATIC                                  | L   | 0.160      | -            | -                | -                | -         |    -1.59 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           16 |     4117 | 2024-09-26 | Aurora Gaming                             | L   | 0.158      | -            | -                | -                | -         |    -2.06 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           15 |     4212 | 2024-09-24 | Endpoint                                  | W   | 0.146      | -            | -                | -                | -         |     2.41 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           14 |     4221 | 2024-09-24 | Fnatic                                    | W   | 0.145      | 0.384        | 0.047 (0.003)    | -                | -         |     3.84 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           13 |     4237 | 2024-09-24 | ALTERNATE aTTaX                           | L   | 0.144      | -            | -                | -                | -         |    -1.35 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           12 |     4276 | 2024-09-23 | Metizport                                 | W   | 0.137      | 0.384        | 0.074 (0.004)    | -                | -         |     3.74 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           11 |     4330 | 2024-09-20 | 9Pandas                                   | L   | 0.120      | -            | -                | -                | -         |    -0.86 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           10 |     4346 | 2024-09-20 | Dark Cloud Esports                        | W   | 0.118      | -            | -                | -                | -         |     2.19 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|            9 |     4351 | 2024-09-20 | 9INE                                      | L   | 0.117      | -            | -                | -                | -         |    -1.82 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|            8 |     4373 | 2024-09-19 | Team Sampi                                | W   | 0.113      | -            | -                | -                | -         |     2.06 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|            7 |     4416 | 2024-09-18 | AMKAL ESPORTS                             | L   | 0.104      | -            | -                | -                | -         |    -1.58 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|            6 |     4446 | 2024-09-17 | Sashi Esport                              | W   | 0.098      | -            | -                | -                | -         |     2.39 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|            5 |     4453 | 2024-09-17 | GUN5 Esports                              | W   | 0.098      | 0.443        | 0.101 (0.004)    | -                | -         |     2.30 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|            4 |     4620 | 2024-09-11 | EYEBALLERS                                | W   | 0.059      | -            | -                | -                | -         |     1.08 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|            3 |     4631 | 2024-09-11 | Rebels Gaming                             | L   | 0.058      | -            | -                | -                | -         |    -0.94 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|            2 |     4787 | 2024-09-05 | TEAM NEXT LEVEL                           | W   | 0.018      | -            | -                | -                | -         |     0.23 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|            1 |     4796 | 2024-09-05 | GamerLegion                               | W   | 0.017      | -            | -                | -                | -         |     0.24 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($422.92)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-26 |      0.159 | $1,500.00      | $238.47         |
| 2024-09-24 |      0.145 | $1,000.00      | $144.72         |
| 2024-09-14 |      0.079 | $500.00        | $39.72          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
