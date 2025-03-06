### Roster Details<br />
Team Name: Iberian Soul<br />
Roster: alex, dav1g, mopoz, sausol, stadodo<br />
Global Rank: [63](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [43]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  781.7<br />
<br />
Final Rank Value (781.7) = Starting Rank Value (755.7) + Head To Head Adjustments (26.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.320[<sup>1</sup>](#table2)
- Bounty Collected: 0.254[<sup>2</sup>](#table1)
- Opponent Network: 0.066[<sup>2</sup>](#table1)
- LAN Wins: 0.013[<sup>2</sup>](#table1)

The average of these factors is 0.163<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 755.7
- 400 + ( ( 0.163 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 755.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           31 |        1 | 2025-03-01 | Alliance                                  | W   | 0.764      | 0.143        | 0.006 (0.001)    | 0.572 (0.062)    | 0 (0.000) |    11.32 | alex, dav1g, mopoz, sausol, stadodo   |
|           30 |        8 | 2025-02-28 | Fire Flux Esports                         | W   | 0.757      | 0.143        | 0.006 (0.001)    | 0.866 (0.094)    | 0 (0.000) |    13.46 | alex, dav1g, mopoz, sausol, stadodo   |
|           29 |       37 | 2025-02-25 | Aurora Gaming                             | L   | 0.738      | -            | -                | -                | -         |   -13.74 | alex, dav1g, mopoz, sausol, stadodo   |
|           28 |       55 | 2025-02-24 | OG                                        | W   | 0.732      | 0.143        | -                | 1.000 (0.105)    | 0 (0.000) |    11.47 | alex, dav1g, mopoz, sausol, stadodo   |
|           27 |       57 | 2025-02-24 | Fire Flux Esports                         | W   | 0.731      | 0.143        | -                | 0.866 (0.090)    | 0 (0.000) |    13.66 | alex, dav1g, mopoz, sausol, stadodo   |
|           26 |       99 | 2025-02-23 | Alliance                                  | W   | 0.724      | 0.143        | -                | 0.572 (0.059)    | 0 (0.000) |    12.09 | alex, dav1g, mopoz, sausol, stadodo   |
|           25 |      159 | 2025-02-20 | ECSTATIC                                  | W   | 0.704      | 0.143        | 0.021 (0.002)    | 0.858 (0.086)    | 0 (0.000) |    11.94 | alex, dav1g, mopoz, sausol, stadodo   |
|           24 |      168 | 2025-02-19 | 9INE                                      | L   | 0.698      | -            | -                | -                | -         |    -6.85 | alex, dav1g, mopoz, sausol, stadodo   |
|           23 |      407 | 2025-02-09 | Copenhagen Wolves (American organization) | L   | 0.630      | -            | -                | -                | -         |    -8.62 | alex, dav1g, mopoz, sausol, stadodo   |
|           22 |      476 | 2025-02-08 | UNiTY esports                             | W   | 0.623      | 0.143        | 0.013 (0.001)    | -                | 0 (0.000) |     8.60 | alex, dav1g, mopoz, sausol, stadodo   |
|           21 |      570 | 2025-02-05 | Ninjas in Pyjamas                         | W   | 0.603      | 0.143        | -                | 0.567 (0.049)    | 0 (0.000) |     5.16 | alex, dav1g, mopoz, sausol, stadodo   |
|           20 |      583 | 2025-02-04 | UNiTY esports                             | L   | 0.597      | -            | -                | -                | -         |   -10.40 | alex, dav1g, mopoz, sausol, stadodo   |
|           19 |      658 | 2025-01-25 | ECSTATIC                                  | L   | 0.530      | -            | -                | -                | -         |    -7.35 | alex, dav1g, mopoz, sausol, stadodo   |
|           18 |      664 | 2025-01-24 | KONO.ECF                                  | L   | 0.524      | -            | -                | -                | -         |   -11.89 | alex, dav1g, mopoz, sausol, stadodo   |
|           17 |      879 | 2024-12-14 | Chimera Esports                           | L   | 0.250      | -            | -                | -                | -         |    -3.78 | adamS, dav1g, mopoz, sausol, stadodo  |
|           16 |      905 | 2024-12-13 | GUN5 Esports                              | L   | 0.242      | -            | -                | -                | -         |    -2.76 | adamS, dav1g, mopoz, sausol, stadodo  |
|           15 |      928 | 2024-12-11 | Endpoint                                  | L   | 0.231      | -            | -                | -                | -         |    -4.40 | adamS, dav1g, mopoz, sausol, stadodo  |
|           14 |      940 | 2024-12-10 | Team Spirit Academy                       | L   | 0.225      | -            | -                | -                | -         |    -2.98 | adamS, dav1g, mopoz, sausol, stadodo  |
|           13 |      943 | 2024-12-10 | TSM                                       | W   | 0.223      | -            | -                | -                | 0 (0.000) |     1.43 | adamS, dav1g, mopoz, sausol, stadodo  |
|           12 |      990 | 2024-12-07 | FAVBET Team                               | W   | 0.204      | 0.435        | 0.021 (0.002)    | 0.364 (0.032)    | -         |     3.22 | adamS, dav1g, mopoz, sausol, stadodo  |
|           11 |     1017 | 2024-12-06 | 9INE                                      | L   | 0.197      | -            | -                | -                | -         |    -2.50 | adamS, dav1g, mopoz, sausol, stadodo  |
|           10 |     1041 | 2024-12-05 | Betclic Apogee Esports                    | W   | 0.190      | 0.371        | 0.011 (0.001)    | 0.582 (0.041)    | -         |     3.32 | adamS, dav1g, mopoz, sausol, stadodo  |
|            9 |     1074 | 2024-12-04 | Tricked Esport                            | W   | 0.183      | 0.435        | 0.021 (0.002)    | 0.467 (0.037)    | -         |     2.99 | adamS, dav1g, mopoz, sausol, stadodo  |
|            8 |     1133 | 2024-12-01 | Tricked Esport                            | W   | 0.163      | 0.371        | 0.021 (0.001)    | -                | -         |     2.70 | adamS, dav1g, mopoz, sausol, stadodo  |
|            7 |     1204 | 2024-11-28 | GUN5 Esports                              | L   | 0.145      | -            | -                | -                | -         |    -1.64 | adamS, dav1g, mopoz, sausol, stadodo  |
|            6 |     1215 | 2024-11-27 | Tricked Esport                            | L   | 0.138      | -            | -                | -                | -         |    -2.13 | adamS, dav1g, mopoz, sausol, stadodo  |
|            5 |     1220 | 2024-11-27 | TEAM NEXT LEVEL                           | W   | 0.137      | 0.333        | 0.015 (0.001)    | -                | -         |     1.92 | adamS, dav1g, mopoz, sausol, stadodo  |
|            4 |     1229 | 2024-11-26 | Tricked Esport                            | W   | 0.132      | 0.333        | 0.021 (0.001)    | -                | -         |     2.13 | adamS, dav1g, mopoz, sausol, stadodo  |
|            3 |     1246 | 2024-11-25 | 9INE                                      | W   | 0.124      | -            | -                | -                | -         |     0.47 | adamS, dav1g, mopoz, sausol, stadodo  |
|            2 |     1399 | 2024-11-17 | Rhyno Esports                             | L   | 0.071      | -            | -                | -                | -         |    -1.27 | adamS, dav1g, deLonge, mopoz, stadodo |
|            1 |     1426 | 2024-11-16 | EXSAD Gaming                              | W   | 0.064      | -            | -                | -                | 1 (0.064) |     0.45 | adamS, dav1g, deLonge, mopoz, stadodo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($908.61)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-27 |      0.137 | $5,000.00      | $685.42         |
| 2024-11-17 |      0.071 | $3,163.39      | $223.19         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
