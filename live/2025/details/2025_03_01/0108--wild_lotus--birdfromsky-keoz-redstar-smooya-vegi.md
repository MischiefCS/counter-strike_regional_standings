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
|           44 |       41 | 2025-02-25 | Fire Flux Esports                         | L   | 1.000      | -            | -                | -                | -         |   -10.13 | birdfromsky, Keoz, REDSTAR, smooya, Vegi      |
|           43 |       56 | 2025-02-24 | Aurora Gaming                             | L   | 1.000      | -            | -                | -                | -         |   -14.89 | birdfromsky, Keoz, REDSTAR, smooya, Vegi      |
|           42 |      130 | 2025-02-21 | CYBERSHOKE Esports                        | L   | 1.000      | -            | -                | -                | -         |   -11.51 | birdfromsky, Keoz, REDSTAR, smooya, Vegi      |
|           41 |      141 | 2025-02-21 | GhoulsW                                   | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.19 | birdfromsky, Keoz, REDSTAR, smooya, Vegi      |
|           40 |      635 | 2025-01-29 | Copenhagen Wolves (American organization) | W   | 0.993      | 0.143        | -                | 0.665 (0.094)    | 0 (0.000) |    16.36 | Keoz, REDSTAR, reiko, sinnopsyy, smooya       |
|           39 |      644 | 2025-01-28 | Zero Tenacity                             | W   | 0.987      | 0.143        | 0.026 (0.004)    | 0.507 (0.071)    | 0 (0.000) |    16.53 | Keoz, REDSTAR, reiko, sinnopsyy, smooya       |
|           38 |      648 | 2025-01-27 | AMKAL ESPORTS                             | L   | 0.980      | -            | -                | -                | -         |   -18.34 | Keoz, REDSTAR, reiko, sinnopsyy, smooya       |
|           37 |      897 | 2024-12-13 | AMKAL ESPORTS                             | L   | 0.680      | -            | -                | -                | -         |   -12.14 | hAdji, Keoz, REDSTAR, sinnopsyy, smooya       |
|           36 |      960 | 2024-12-08 | 9INE                                      | W   | 0.647      | 0.435        | 0.037 (0.010)    | 0.895 (0.252)    | 0 (0.000) |    13.24 | Keoz, REDSTAR, reiko, sinnopsyy, smooya       |
|           35 |     1014 | 2024-12-06 | Endpoint                                  | W   | 0.633      | 0.435        | 0.009 (0.002)    | 0.233 (0.064)    | 0 (0.000) |     9.13 | hAdji, Keoz, REDSTAR, sinnopsyy, smooya       |
|           34 |     1097 | 2024-12-03 | Metizport                                 | W   | 0.611      | 0.435        | 0.074 (0.020)    | 0.654 (0.174)    | 0 (0.000) |    15.95 | hAdji, Keoz, REDSTAR, sinnopsyy, smooya       |
|           33 |     1606 | 2024-11-09 | ENCE                                      | L   | 0.452      | -            | -                | -                | -         |    -2.73 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           32 |     1626 | 2024-11-08 | Dynamo Eclot                              | L   | 0.444      | -            | -                | -                | -         |    -2.20 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           31 |     1651 | 2024-11-06 | 9INE                                      | W   | 0.432      | -            | -                | -                | 0 (0.000) |     6.45 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           30 |     1662 | 2024-11-05 | Nemiga Gaming                             | L   | 0.426      | -            | -                | -                | -         |    -2.40 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           29 |     1675 | 2024-11-04 | Rebels Gaming                             | L   | 0.418      | -            | -                | -                | -         |    -7.25 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           28 |     1708 | 2024-11-02 | 500                                       | W   | 0.406      | 0.143        | 0.086 (0.005)    | 1.000 (0.058)    | 0 (0.000) |     9.88 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           27 |     1715 | 2024-11-02 | Sashi Esport                              | W   | 0.405      | 0.143        | -                | 0.582 (0.034)    | 0 (0.000) |     9.34 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           26 |     1719 | 2024-11-02 | Los kogutos                               | W   | 0.405      | -            | -                | -                | 0 (0.000) |     9.05 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           25 |     1734 | 2024-11-01 | Insilio                                   | L   | 0.399      | -            | -                | -                | -         |    -9.00 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           24 |     1772 | 2024-10-30 | GUN5 Esports                              | W   | 0.385      | 0.371        | 0.099 (0.014)    | 0.503 (0.072)    | -         |     8.91 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           23 |     2298 | 2024-10-02 | Illuminar Gaming                          | L   | 0.198      | -            | -                | -                | -         |    -2.60 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           22 |     2360 | 2024-10-01 | Passion UA                                | L   | 0.190      | -            | -                | -                | -         |    -1.01 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           21 |     2394 | 2024-09-29 | Copenhagen Wolves (American organization) | L   | 0.178      | -            | -                | -                | -         |    -4.21 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           20 |     2421 | 2024-09-28 | Johnny Speeds                             | W   | 0.171      | 0.371        | 0.039 (0.002)    | -                | -         |     3.62 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           19 |     2447 | 2024-09-27 | ALTERNATE aTTaX                           | L   | 0.166      | -            | -                | -                | -         |    -1.59 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           18 |     2454 | 2024-09-27 | UNiTY esports                             | W   | 0.165      | -            | -                | -                | -         |     2.90 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           17 |     2477 | 2024-09-26 | ECSTATIC                                  | L   | 0.160      | -            | -                | -                | -         |    -1.63 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           16 |     2502 | 2024-09-26 | Aurora Gaming                             | L   | 0.158      | -            | -                | -                | -         |    -2.08 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           15 |     2597 | 2024-09-24 | Endpoint                                  | W   | 0.146      | -            | -                | -                | -         |     2.41 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           14 |     2606 | 2024-09-24 | Fnatic                                    | W   | 0.145      | 0.384        | 0.047 (0.003)    | 0.490 (0.027)    | -         |     3.85 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           13 |     2622 | 2024-09-24 | ALTERNATE aTTaX                           | L   | 0.144      | -            | -                | -                | -         |    -1.37 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           12 |     2661 | 2024-09-23 | Metizport                                 | W   | 0.137      | 0.384        | 0.074 (0.004)    | 0.654 (0.034)    | -         |     3.73 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           11 |     2707 | 2024-09-20 | 9Pandas                                   | L   | 0.120      | -            | -                | -                | -         |    -0.84 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|           10 |     2721 | 2024-09-20 | Dark Cloud Esports                        | W   | 0.118      | -            | -                | -                | -         |     1.95 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|            9 |     2725 | 2024-09-20 | 9INE                                      | L   | 0.117      | -            | -                | -                | -         |    -1.91 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|            8 |     2746 | 2024-09-19 | Team Sampi                                | W   | 0.113      | -            | -                | -                | -         |     2.08 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|            7 |     2783 | 2024-09-18 | AMKAL ESPORTS                             | L   | 0.104      | -            | -                | -                | -         |    -1.63 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|            6 |     2810 | 2024-09-17 | Sashi Esport                              | W   | 0.098      | -            | -                | -                | -         |     2.36 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|            5 |     2816 | 2024-09-17 | GUN5 Esports                              | W   | 0.098      | 0.443        | 0.099 (0.004)    | -                | -         |     2.27 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|            4 |     2982 | 2024-09-11 | EYEBALLERS                                | W   | 0.059      | -            | -                | -                | -         |     1.08 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|            3 |     2993 | 2024-09-11 | Rebels Gaming                             | L   | 0.058      | -            | -                | -                | -         |    -0.93 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|            2 |     3149 | 2024-09-05 | TEAM NEXT LEVEL                           | W   | 0.018      | -            | -                | -                | -         |     0.22 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |
|            1 |     3158 | 2024-09-05 | GamerLegion                               | W   | 0.017      | -            | -                | -                | -         |     0.25 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya |

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
