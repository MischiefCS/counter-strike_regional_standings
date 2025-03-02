### Roster Details<br />
Team Name: Los kogutos<br />
Roster: maaryy, mASKED, Melavi, tein, tomiko<br />
Global Rank: [105](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [75]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  875.7<br />
<br />
Final Rank Value (875.7) = Starting Rank Value (1071.1) + Head To Head Adjustments (-195.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.414[<sup>1</sup>](#table2)
- Bounty Collected: 0.318[<sup>2</sup>](#table1)
- Opponent Network: 0.076[<sup>2</sup>](#table1)
- LAN Wins: 0.491[<sup>2</sup>](#table1)

The average of these factors is 0.325<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1071.1
- 400 + ( ( 0.325 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1071.1


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
|           88 |     1083 | 2025-01-08 | EYEBALLERS                                | L   | 0.859      | -            | -                | -                | -         |   -16.03 | maaryy, mASKED, Melavi, tein, tomiko |
|           87 |     1085 | 2025-01-07 | Insilio                                   | L   | 0.853      | -            | -                | -                | -         |   -19.11 | maaryy, mASKED, Melavi, tein, tomiko |
|           86 |     1092 | 2025-01-05 | BadGuys                                   | W   | 0.838      | 0.417        | -                | 0.302 (0.105)    | -         |     5.62 | maaryy, mASKED, Melavi, tein, tomiko |
|           85 |     1097 | 2025-01-03 | FLuffy Gangsters                          | L   | 0.826      | -            | -                | -                | -         |   -14.01 | maaryy, mASKED, Melavi, tein, tomiko |
|           84 |     1132 | 2024-12-29 | KONO.ECF                                  | L   | 0.791      | -            | -                | -                | -         |   -10.64 | kRaSnaL, maaryy, mASKED, mhL, tomiko |
|           83 |     1177 | 2024-12-28 | VOLT (European team)                      | W   | 0.784      | -            | -                | -                | -         |     6.33 | kRaSnaL, maaryy, mASKED, mhL, tomiko |
|           82 |     2676 | 2024-11-23 | HyperSpirit                               | L   | 0.553      | -            | -                | -                | -         |   -14.18 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           81 |     2777 | 2024-11-22 | RoundsGG                                  | L   | 0.546      | -            | -                | -                | -         |   -15.88 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           80 |     2845 | 2024-11-21 | 1win                                      | W   | 0.538      | 0.372        | -                | 0.304 (0.061)    | -         |     4.79 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           79 |     2913 | 2024-11-20 | Ex-Soul's Heart Esport                    | W   | 0.533      | -            | -                | -                | -         |     2.40 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           78 |     2922 | 2024-11-20 | TEAM NEXT LEVEL                           | W   | 0.532      | -            | -                | -                | -         |     3.20 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           77 |     3141 | 2024-11-16 | Partizan Esports                          | L   | 0.505      | -            | -                | -                | -         |    -4.13 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           76 |     3207 | 2024-11-15 | Mindfreak (Australian team)               | W   | 0.498      | -            | -                | -                | 1 (0.498) |     3.81 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           75 |     3220 | 2024-11-15 | PCIFIC Espor                              | W   | 0.498      | 0.617        | -                | 0.275 (0.084)    | 1 (0.498) |     4.95 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           74 |     3230 | 2024-11-14 | Metizport                                 | L   | 0.493      | -            | -                | -                | -         |    -3.83 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           73 |     3306 | 2024-11-13 | Homyno                                    | W   | 0.485      | 0.617        | -                | 0.208 (0.062)    | 1 (0.485) |     3.63 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           72 |     3309 | 2024-11-13 | Team Norway                               | W   | 0.485      | -            | -                | -                | 1 (0.485) |     2.28 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           71 |     3581 | 2024-11-08 | Rebels Gaming                             | L   | 0.451      | -            | -                | -                | -         |    -9.61 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           70 |     3648 | 2024-11-06 | PCIFIC Espor                              | W   | 0.440      | -            | -                | -                | -         |     4.35 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           69 |     3678 | 2024-11-06 | SINNERS Esports                           | W   | 0.437      | 0.371        | 0.033 (0.005)    | 0.633 (0.103)    | -         |     8.35 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           68 |     3708 | 2024-11-05 | OG                                        | L   | 0.433      | -            | -                | -                | -         |    -6.59 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           67 |     3732 | 2024-11-05 | 9Pandas                                   | L   | 0.431      | -            | -                | -                | -         |    -4.27 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           66 |     3841 | 2024-11-03 | Soul's Heart Esport                       | L   | 0.418      | -            | -                | -                | -         |   -11.99 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           65 |     3862 | 2024-11-03 | Team Sampi                                | W   | 0.417      | -            | -                | -                | -         |     4.52 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           64 |     3910 | 2024-11-02 | Zero Tenacity                             | L   | 0.412      | -            | -                | -                | -         |    -8.01 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           63 |     3930 | 2024-11-02 | Wild Lotus                                | L   | 0.411      | -            | -                | -                | -         |    -9.22 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           62 |     3988 | 2024-11-01 | Sashi Esport                              | L   | 0.404      | -            | -                | -                | -         |    -5.56 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           61 |     4099 | 2024-10-30 | Wild Lotus                                | L   | 0.392      | -            | -                | -                | -         |    -8.98 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           60 |     4156 | 2024-10-29 | Partizan Esports                          | L   | 0.385      | -            | -                | -                | -         |    -3.55 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           59 |     4244 | 2024-10-27 | Illuminar Gaming                          | W   | 0.372      | -            | -                | -                | 1 (0.372) |     4.60 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           58 |     4254 | 2024-10-27 | Passion UA                                | W   | 0.372      | -            | -                | -                | 1 (0.372) |     5.74 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           57 |     4288 | 2024-10-26 | Illuminar Gaming                          | L   | 0.365      | -            | -                | -                | -         |    -6.98 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           56 |     4313 | 2024-10-26 | Ex-ENTERPRISE esports                     | L   | 0.364      | -            | -                | -                | -         |    -9.08 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           55 |     4325 | 2024-10-26 | AgenciUSB                                 | W   | 0.364      | -            | -                | -                | 1 (0.364) |     0.71 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           54 |     4386 | 2024-10-25 | Team Sampi                                | L   | 0.357      | -            | -                | -                | -         |    -8.00 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           53 |     4445 | 2024-10-23 | GODSENT                                   | L   | 0.345      | -            | -                | -                | -         |    -9.41 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           52 |     4454 | 2024-10-23 | Ex-9INE Academy                           | W   | 0.345      | -            | -                | -                | -         |     1.03 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           51 |     4489 | 2024-10-22 | Lausanne-Sport Esports                    | L   | 0.338      | -            | -                | -                | -         |    -9.89 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           50 |     4521 | 2024-10-21 | Haspers Team                              | L   | 0.332      | -            | -                | -                | -         |    -8.82 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           49 |     4626 | 2024-10-19 | Nexus Gaming                              | L   | 0.319      | -            | -                | -                | -         |    -3.64 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           48 |     4732 | 2024-10-17 | Dynamo Eclot                              | W   | 0.304      | 0.384        | 0.151 (0.018)    | 0.759 (0.089)    | -         |     6.08 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           47 |     4789 | 2024-10-16 | The Suspect                               | L   | 0.298      | -            | -                | -                | -         |    -7.85 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           46 |     4875 | 2024-10-14 | Back2TheGame                              | W   | 0.287      | -            | -                | -                | -         |     1.55 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           45 |     4945 | 2024-10-12 | MYinsanity                                | W   | 0.276      | -            | -                | -                | 1 (0.276) |     1.04 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           44 |     4963 | 2024-10-12 | Lausanne-Sport Esports                    | W   | 0.273      | -            | -                | -                | 1 (0.273) |     0.61 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           43 |     4970 | 2024-10-12 | Ins (Polish team)                         | W   | 0.273      | -            | -                | -                | -         |     1.18 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           42 |     4971 | 2024-10-12 | Ex-Soul's Heart Esport                    | L   | 0.272      | -            | -                | -                | -         |    -7.74 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           41 |     5000 | 2024-10-12 | Addicted Esports Swiss                    | W   | 0.271      | -            | -                | -                | 1 (0.271) |     0.24 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           40 |     5020 | 2024-10-12 | Team Sampi                                | W   | 0.271      | -            | -                | -                | -         |     2.14 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           39 |     5059 | 2024-10-10 | 500 Rush                                  | W   | 0.259      | -            | -                | -                | -         |     0.96 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           38 |     5065 | 2024-10-10 | Ins (Polish team)                         | W   | 0.259      | -            | -                | -                | -         |     1.04 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           37 |     5071 | 2024-10-10 | GUN5 Esports                              | W   | 0.258      | 0.384        | 0.123 (0.012)    | 0.623 (0.062)    | -         |     3.78 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           36 |     5365 | 2024-10-05 | 500                                       | L   | 0.226      | -            | -                | -                | -         |    -3.38 | bnox, maaryy, Markoś, mASKED, tomiko |
|           35 |     5393 | 2024-10-05 | Passion UA                                | L   | 0.224      | -            | -                | -                | -         |    -4.19 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           34 |     5476 | 2024-10-04 | G2 Ares                                   | L   | 0.217      | -            | -                | -                | -         |    -5.92 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           33 |     5501 | 2024-10-03 | SINNERS Esports                           | W   | 0.213      | 0.435        | 0.033 (0.003)    | -                | -         |     3.07 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           32 |     5511 | 2024-10-03 | ENCE Academy                              | L   | 0.212      | -            | -                | -                | -         |    -5.07 | bnox, maaryy, Markoś, mASKED, tomiko |
|           31 |     5562 | 2024-10-02 | GUN5 Esports                              | L   | 0.205      | -            | -                | -                | -         |    -3.69 | bnox, maaryy, Markoś, mASKED, tomiko |
|           30 |     5575 | 2024-10-02 | Nexus Gaming                              | W   | 0.204      | 0.333        | 0.221 (0.015)    | 0.873 (0.059)    | -         |     4.31 | bnox, maaryy, Markoś, mASKED, tomiko |
|           29 |     5591 | 2024-10-02 | Adventurers                               | L   | 0.203      | -            | -                | -                | -         |    -5.06 | bnox, maaryy, Markoś, mASKED, tomiko |
|           28 |     5640 | 2024-10-01 | Chimera Esports                           | W   | 0.198      | -            | -                | -                | -         |     1.72 | bnox, maaryy, Markoś, mASKED, tomiko |
|           27 |     5664 | 2024-10-01 | Johnny Speeds                             | W   | 0.197      | 0.384        | 0.047 (0.004)    | -                | -         |     2.10 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           26 |     5708 | 2024-09-30 | CYBERSHOKE Esports                        | W   | 0.191      | 0.435        | -                | 0.859 (0.071)    | -         |     1.96 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           25 |     5755 | 2024-09-29 | FAVBET Team                               | L   | 0.185      | -            | -                | -                | -         |    -4.00 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           24 |     5757 | 2024-09-29 | Devils.one                                | L   | 0.184      | -            | -                | -                | -         |    -5.17 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           23 |     5849 | 2024-09-28 | Monte                                     | W   | 0.178      | 0.435        | 0.053 (0.004)    | 0.867 (0.067)    | -         |     2.36 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           22 |     6012 | 2024-09-26 | Tricked Esport                            | L   | 0.164      | -            | -                | -                | -         |    -3.85 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           21 |     6085 | 2024-09-25 | TALON                                     | W   | 0.158      | -            | -                | -                | -         |     0.32 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           20 |     6117 | 2024-09-25 | KONO.ECF                                  | W   | 0.157      | 0.371        | 0.054 (0.003)    | -                | -         |     1.83 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           19 |     6155 | 2024-09-24 | Kubix Esports                             | L   | 0.153      | -            | -                | -                | -         |    -3.11 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           18 |     6170 | 2024-09-24 | Anonymo Esports                           | W   | 0.152      | -            | -                | -                | -         |     1.22 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           17 |     6204 | 2024-09-24 | AMKAL ESPORTS                             | L   | 0.150      | -            | -                | -                | -         |    -3.84 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           16 |     6236 | 2024-09-23 | Ex-ENTERPRISE esports                     | L   | 0.146      | -            | -                | -                | -         |    -3.94 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           15 |     6251 | 2024-09-23 | Back2TheGame                              | W   | 0.146      | -            | -                | -                | -         |     0.72 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           14 |     6347 | 2024-09-21 | U Neptuna                                 | W   | 0.133      | -            | -                | -                | -         |     0.10 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           13 |     6373 | 2024-09-21 | ECSTATIC                                  | L   | 0.131      | -            | -                | -                | -         |    -2.86 | bnox, maaryy, Markoś, mASKED, tomiko |
|           12 |     6388 | 2024-09-21 | TSM                                       | L   | 0.130      | -            | -                | -                | -         |    -3.42 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|           11 |     6441 | 2024-09-20 | Insilio                                   | L   | 0.123      | -            | -                | -                | -         |    -3.41 | bnox, maaryy, Markoś, mASKED, tomiko |
|           10 |     6557 | 2024-09-18 | CYBERSHOKE Esports                        | L   | 0.112      | -            | -                | -                | -         |    -3.20 | bnox, maaryy, Markoś, mASKED, tomiko |
|            9 |     6686 | 2024-09-16 | 9Pandas                                   | W   | 0.098      | 0.435        | 0.104 (0.004)    | -                | -         |     1.49 | bnox, maaryy, Markoś, mASKED, tomiko |
|            8 |     6740 | 2024-09-15 | Partizan Esports                          | W   | 0.091      | 0.384        | 0.097 (0.003)    | -                | -         |     1.82 | bnox, maaryy, Markoś, mASKED, tomiko |
|            7 |     7151 | 2024-09-08 | Team Spirit Academy                       | L   | 0.044      | -            | -                | -                | -         |    -0.81 | bnox, DGL, maaryy, mASKED, tomiko    |
|            6 |     7265 | 2024-09-07 | Copenhagen Wolves (American organization) | L   | 0.037      | -            | -                | -                | -         |    -1.11 | bnox, DGL, maaryy, mASKED, tomiko    |
|            5 |     7328 | 2024-09-06 | Team Space                                | W   | 0.031      | -            | -                | -                | -         |     0.04 | bnox, maaryy, Markoś, mASKED, tomiko |
|            4 |     7370 | 2024-09-05 | Nemiga Gaming                             | L   | 0.026      | -            | -                | -                | -         |    -0.34 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|            3 |     7539 | 2024-09-03 | Team Space                                | W   | 0.011      | -            | -                | -                | -         |     0.01 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|            2 |     7553 | 2024-09-03 | Team Spirit Academy                       | W   | 0.010      | -            | -                | -                | -         |     0.13 | bnox, DGL, maaryy, mASKED, tomiko    |
|            1 |     7573 | 2024-09-02 | Alliance                                  | L   | 0.005      | -            | -                | -                | -         |    -0.10 | bnox, fr3nd, maaryy, mASKED, tomiko  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,949.33)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-30 |      0.798 | $1,000.00      | $797.89         |
| 2024-11-17 |      0.512 | $12,500.00     | $6,405.96       |
| 2024-10-27 |      0.372 | $4,979.65      | $1,854.11       |
| 2024-10-26 |      0.366 | $248.98        | $91.06          |
| 2024-10-12 |      0.276 | $2,916.41      | $805.59         |
| 2024-10-06 |      0.233 | $2,000.00      | $465.37         |
| 2024-10-03 |      0.212 | $2,500.00      | $529.34         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
