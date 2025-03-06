### Roster Details<br />
Team Name: Iberian Soul<br />
Roster: alex, dav1g, mopoz, sausol, stadodo<br />
Global Rank: [63](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [44]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  821.8<br />
<br />
Final Rank Value (821.8) = Starting Rank Value (791.0) + Head To Head Adjustments (30.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.337[<sup>1</sup>](#table2)
- Bounty Collected: 0.282[<sup>2</sup>](#table1)
- Opponent Network: 0.099[<sup>2</sup>](#table1)
- LAN Wins: 0.038[<sup>2</sup>](#table1)

The average of these factors is 0.189<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 791.0
- 400 + ( ( 0.189 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 791.0


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
|           34 |        1 | 2025-03-01 | Alliance                                  | W   | 0.951      | 0.143        | 0.011 (0.002)    | 0.592 (0.080)    | 0 (0.000) |    14.19 | alex, dav1g, mopoz, sausol, stadodo   |
|           33 |        8 | 2025-02-28 | Fire Flux Esports                         | W   | 0.943      | 0.143        | -                | 0.959 (0.129)    | 0 (0.000) |    16.63 | alex, dav1g, mopoz, sausol, stadodo   |
|           32 |       37 | 2025-02-25 | Aurora Gaming                             | L   | 0.925      | -            | -                | -                | -         |   -16.42 | alex, dav1g, mopoz, sausol, stadodo   |
|           31 |       55 | 2025-02-24 | OG                                        | W   | 0.919      | 0.143        | 0.036 (0.005)    | 1.000 (0.131)    | 0 (0.000) |    17.49 | alex, dav1g, mopoz, sausol, stadodo   |
|           30 |       57 | 2025-02-24 | Fire Flux Esports                         | W   | 0.918      | 0.143        | -                | 0.959 (0.126)    | 0 (0.000) |    17.34 | alex, dav1g, mopoz, sausol, stadodo   |
|           29 |       99 | 2025-02-23 | Alliance                                  | W   | 0.910      | 0.143        | -                | 0.592 (0.077)    | 0 (0.000) |    15.97 | alex, dav1g, mopoz, sausol, stadodo   |
|           28 |      159 | 2025-02-20 | ECSTATIC                                  | W   | 0.890      | 0.143        | 0.025 (0.003)    | 0.919 (0.117)    | 0 (0.000) |    14.73 | alex, dav1g, mopoz, sausol, stadodo   |
|           27 |      168 | 2025-02-19 | 9INE                                      | L   | 0.884      | -            | -                | -                | -         |    -7.97 | alex, dav1g, mopoz, sausol, stadodo   |
|           26 |      407 | 2025-02-09 | Copenhagen Wolves (American organization) | L   | 0.817      | -            | -                | -                | -         |   -11.21 | alex, dav1g, mopoz, sausol, stadodo   |
|           25 |      476 | 2025-02-08 | UNiTY esports                             | W   | 0.809      | 0.143        | 0.018 (0.002)    | -                | 0 (0.000) |    10.56 | alex, dav1g, mopoz, sausol, stadodo   |
|           24 |      570 | 2025-02-05 | Ninjas in Pyjamas                         | W   | 0.789      | -            | -                | -                | 0 (0.000) |     6.52 | alex, dav1g, mopoz, sausol, stadodo   |
|           23 |      583 | 2025-02-04 | UNiTY esports                             | L   | 0.783      | -            | -                | -                | -         |   -14.14 | alex, dav1g, mopoz, sausol, stadodo   |
|           22 |      658 | 2025-01-25 | ECSTATIC                                  | L   | 0.717      | -            | -                | -                | -         |   -10.29 | alex, dav1g, mopoz, sausol, stadodo   |
|           21 |      664 | 2025-01-24 | KONO.ECF                                  | L   | 0.710      | -            | -                | -                | -         |   -16.21 | alex, dav1g, mopoz, sausol, stadodo   |
|           20 |      879 | 2024-12-14 | Chimera Esports                           | L   | 0.437      | -            | -                | -                | -         |    -6.45 | adamS, dav1g, mopoz, sausol, stadodo  |
|           19 |      905 | 2024-12-13 | GUN5 Esports                              | L   | 0.429      | -            | -                | -                | -         |    -5.40 | adamS, dav1g, mopoz, sausol, stadodo  |
|           18 |      928 | 2024-12-11 | Endpoint                                  | L   | 0.418      | -            | -                | -                | -         |    -8.39 | adamS, dav1g, mopoz, sausol, stadodo  |
|           17 |      940 | 2024-12-10 | Team Spirit Academy                       | L   | 0.411      | -            | -                | -                | -         |    -5.96 | adamS, dav1g, mopoz, sausol, stadodo  |
|           16 |      943 | 2024-12-10 | TSM                                       | W   | 0.410      | -            | -                | -                | 0 (0.000) |     4.26 | adamS, dav1g, mopoz, sausol, stadodo  |
|           15 |      990 | 2024-12-07 | FAVBET Team                               | W   | 0.391      | 0.435        | 0.021 (0.003)    | 0.447 (0.076)    | -         |     5.74 | adamS, dav1g, mopoz, sausol, stadodo  |
|           14 |     1017 | 2024-12-06 | 9INE                                      | L   | 0.383      | -            | -                | -                | -         |    -5.33 | adamS, dav1g, mopoz, sausol, stadodo  |
|           13 |     1041 | 2024-12-05 | Betclic Apogee Esports                    | W   | 0.377      | 0.371        | 0.011 (0.002)    | 0.636 (0.089)    | -         |     6.13 | adamS, dav1g, mopoz, sausol, stadodo  |
|           12 |     1074 | 2024-12-04 | Tricked Esport                            | W   | 0.370      | 0.435        | 0.027 (0.004)    | 0.583 (0.094)    | -         |     5.98 | adamS, dav1g, mopoz, sausol, stadodo  |
|           11 |     1133 | 2024-12-01 | Tricked Esport                            | W   | 0.350      | 0.371        | 0.027 (0.003)    | 0.583 (0.076)    | -         |     5.84 | adamS, dav1g, mopoz, sausol, stadodo  |
|           10 |     1204 | 2024-11-28 | GUN5 Esports                              | L   | 0.331      | -            | -                | -                | -         |    -4.24 | adamS, dav1g, mopoz, sausol, stadodo  |
|            9 |     1215 | 2024-11-27 | Tricked Esport                            | L   | 0.325      | -            | -                | -                | -         |    -5.15 | adamS, dav1g, mopoz, sausol, stadodo  |
|            8 |     1220 | 2024-11-27 | TEAM NEXT LEVEL                           | W   | 0.324      | 0.333        | 0.015 (0.002)    | -                | -         |     4.06 | adamS, dav1g, mopoz, sausol, stadodo  |
|            7 |     1229 | 2024-11-26 | Tricked Esport                            | W   | 0.318      | 0.333        | 0.027 (0.003)    | -                | -         |     5.06 | adamS, dav1g, mopoz, sausol, stadodo  |
|            6 |     1246 | 2024-11-25 | 9INE                                      | W   | 0.310      | -            | -                | -                | -         |     1.75 | adamS, dav1g, mopoz, sausol, stadodo  |
|            5 |     1399 | 2024-11-17 | Rhyno Esports                             | L   | 0.257      | -            | -                | -                | -         |    -4.25 | adamS, dav1g, deLonge, mopoz, stadodo |
|            4 |     1426 | 2024-11-16 | EXSAD Gaming                              | W   | 0.251      | -            | -                | -                | 1 (0.251) |     1.51 | adamS, dav1g, deLonge, mopoz, stadodo |
|            3 |     1760 | 2024-10-30 | ECSTATIC                                  | L   | 0.139      | -            | -                | -                | -         |    -2.02 | adamS, dav1g, JUST, mopoz, stadodo    |
|            2 |     1763 | 2024-10-30 | Illuminar Gaming                          | W   | 0.138      | -            | -                | -                | -         |     1.73 | adamS, dav1g, JUST, mopoz, stadodo    |
|            1 |     1767 | 2024-10-30 | Metizport                                 | L   | 0.138      | -            | -                | -                | -         |    -1.27 | adamS, dav1g, JUST, mopoz, stadodo    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,432.44)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-27 |      0.324 | $5,000.00      | $1,618.75       |
| 2024-11-17 |      0.257 | $3,163.39      | $813.69         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
