### Roster Details<br />
Team Name: Iberian Soul<br />
Roster: alex, dav1g, mopoz, sausol, stadodo<br />
Global Rank: [63](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [47]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  1118.8<br />
<br />
Final Rank Value (1118.8) = Starting Rank Value (1144.7) + Head To Head Adjustments (-25.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.371[<sup>1</sup>](#table2)
- Bounty Collected: 0.400[<sup>2</sup>](#table1)
- Opponent Network: 0.658[<sup>2</sup>](#table1)
- LAN Wins: 0.064[<sup>2</sup>](#table1)

The average of these factors is 0.373<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1144.7
- 400 + ( ( 0.373 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 1144.7


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
|           46 |        5 | 2025-02-28 | Fire Flux Esports                         | W   | 1.000      | 1.000        | -                | 1.000 (1.000)    | 0 (0.000) |    17.83 | alex, dav1g, mopoz, sausol, stadodo   |
|           45 |       16 | 2025-02-27 | SINNERS Esports                           | W   | 1.000      | 1.000        | 0.033 (0.033)    | 0.633 (0.633)    | 0 (0.000) |    15.76 | alex, dav1g, mopoz, sausol, stadodo   |
|           44 |       56 | 2025-02-26 | Team Spirit Academy                       | L   | 1.000      | -            | -                | -                | -         |    -9.17 | alex, dav1g, mopoz, sausol, stadodo   |
|           43 |      110 | 2025-02-25 | Aurora Gaming                             | L   | 1.000      | -            | -                | -                | -         |   -16.76 | alex, dav1g, mopoz, sausol, stadodo   |
|           42 |      142 | 2025-02-24 | OG                                        | W   | 1.000      | 1.000        | 0.074 (0.074)    | 0.718 (0.718)    | 0 (0.000) |    20.18 | alex, dav1g, mopoz, sausol, stadodo   |
|           41 |      146 | 2025-02-24 | Fire Flux Esports                         | W   | 1.000      | 1.000        | -                | 1.000 (1.000)    | 0 (0.000) |    19.21 | alex, dav1g, mopoz, sausol, stadodo   |
|           40 |      174 | 2025-02-23 | Alliance                                  | W   | 1.000      | 1.000        | 0.018 (0.018)    | 0.515 (0.515)    | 0 (0.000) |    16.83 | alex, dav1g, mopoz, sausol, stadodo   |
|           39 |      242 | 2025-02-20 | ECSTATIC                                  | W   | 1.000      | 1.000        | 0.039 (0.039)    | 0.860 (0.860)    | 0 (0.000) |    17.45 | alex, dav1g, mopoz, sausol, stadodo   |
|           38 |      260 | 2025-02-19 | B8                                        | L   | 1.000      | -            | -                | -                | -         |    -4.01 | alex, dav1g, mopoz, sausol, stadodo   |
|           37 |      266 | 2025-02-19 | 9INE                                      | L   | 1.000      | -            | -                | -                | -         |    -8.55 | alex, dav1g, mopoz, sausol, stadodo   |
|           36 |      530 | 2025-02-09 | Copenhagen Wolves (American organization) | L   | 1.000      | -            | -                | -                | -         |   -13.76 | alex, dav1g, mopoz, sausol, stadodo   |
|           35 |      616 | 2025-02-08 | UNiTY esports                             | W   | 1.000      | 1.000        | 0.030 (0.030)    | 0.447 (0.447)    | 0 (0.000) |    11.47 | alex, dav1g, mopoz, sausol, stadodo   |
|           34 |      667 | 2025-02-07 | QPT                                       | L   | 1.000      | -            | -                | -                | -         |    -7.45 | alex, dav1g, mopoz, sausol, stadodo   |
|           33 |      768 | 2025-02-05 | Ninjas in Pyjamas                         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.80 | alex, dav1g, mopoz, sausol, stadodo   |
|           32 |      781 | 2025-02-04 | UNiTY esports                             | L   | 1.000      | -            | -                | -                | -         |   -19.97 | alex, dav1g, mopoz, sausol, stadodo   |
|           31 |      921 | 2025-01-25 | ECSTATIC                                  | L   | 0.972      | -            | -                | -                | -         |   -13.84 | alex, dav1g, mopoz, sausol, stadodo   |
|           30 |      947 | 2025-01-24 | KONO.ECF                                  | L   | 0.965      | -            | -                | -                | -         |   -25.71 | alex, dav1g, mopoz, sausol, stadodo   |
|           29 |     1581 | 2024-12-14 | Chimera Esports                           | L   | 0.691      | -            | -                | -                | -         |   -10.50 | adamS, dav1g, mopoz, sausol, stadodo  |
|           28 |     1680 | 2024-12-13 | GUN5 Esports                              | L   | 0.684      | -            | -                | -                | -         |    -8.71 | adamS, dav1g, mopoz, sausol, stadodo  |
|           27 |     1743 | 2024-12-11 | Endpoint                                  | L   | 0.672      | -            | -                | -                | -         |   -17.06 | adamS, dav1g, mopoz, sausol, stadodo  |
|           26 |     1787 | 2024-12-10 | Team Spirit Academy                       | L   | 0.666      | -            | -                | -                | -         |    -8.88 | adamS, dav1g, mopoz, sausol, stadodo  |
|           25 |     1795 | 2024-12-10 | TSM                                       | W   | 0.664      | -            | -                | -                | 0 (0.000) |     3.32 | adamS, dav1g, mopoz, sausol, stadodo  |
|           24 |     1948 | 2024-12-07 | FAVBET Team                               | W   | 0.645      | 1.000        | 0.038 (0.024)    | 0.969 (0.625)    | -         |    10.59 | adamS, dav1g, mopoz, sausol, stadodo  |
|           23 |     1994 | 2024-12-06 | 9INE                                      | L   | 0.638      | -            | -                | -                | -         |    -8.50 | adamS, dav1g, mopoz, sausol, stadodo  |
|           22 |     2016 | 2024-12-05 | Betclic Apogee Esports                    | W   | 0.631      | -            | -                | -                | -         |    10.63 | adamS, dav1g, mopoz, sausol, stadodo  |
|           21 |     2062 | 2024-12-04 | Tricked Esport                            | W   | 0.625      | 1.000        | 0.040 (0.025)    | 0.628 (0.392)    | -         |     8.88 | adamS, dav1g, mopoz, sausol, stadodo  |
|           20 |     2266 | 2024-12-01 | Tricked Esport                            | W   | 0.604      | 1.000        | 0.040 (0.024)    | -                | -         |     9.08 | adamS, dav1g, mopoz, sausol, stadodo  |
|           19 |     2442 | 2024-11-28 | GUN5 Esports                              | L   | 0.586      | -            | -                | -                | -         |    -7.80 | adamS, dav1g, mopoz, sausol, stadodo  |
|           18 |     2471 | 2024-11-27 | Tricked Esport                            | L   | 0.579      | -            | -                | -                | -         |   -10.71 | adamS, dav1g, mopoz, sausol, stadodo  |
|           17 |     2480 | 2024-11-27 | TEAM NEXT LEVEL                           | W   | 0.578      | 1.000        | 0.047 (0.027)    | -                | -         |     6.92 | adamS, dav1g, mopoz, sausol, stadodo  |
|           16 |     2527 | 2024-11-26 | Tricked Esport                            | W   | 0.573      | 1.000        | 0.040 (0.023)    | -                | -         |     7.43 | adamS, dav1g, mopoz, sausol, stadodo  |
|           15 |     2564 | 2024-11-25 | 9INE                                      | W   | 0.565      | -            | -                | -                | -         |     4.37 | adamS, dav1g, mopoz, sausol, stadodo  |
|           14 |     2672 | 2024-11-23 | ENCE Academy                              | W   | 0.553      | 1.000        | -                | 0.703 (0.389)    | -         |     5.63 | adamS, dav1g, mopoz, sausol, stadodo  |
|           13 |     2771 | 2024-11-22 | JANO Esports                              | W   | 0.546      | -            | -                | -                | -         |     7.44 | adamS, dav1g, mopoz, sausol, stadodo  |
|           12 |     2923 | 2024-11-20 | ENCE Academy                              | L   | 0.532      | -            | -                | -                | -         |   -11.31 | adamS, dav1g, mopoz, sausol, stadodo  |
|           11 |     3055 | 2024-11-17 | Rhyno Esports                             | L   | 0.512      | -            | -                | -                | -         |   -11.47 | adamS, dav1g, deLonge, mopoz, stadodo |
|           10 |     3132 | 2024-11-16 | GOOFYBOYZ                                 | W   | 0.506      | -            | -                | -                | 1 (0.506) |     2.46 | adamS, dav1g, deLonge, mopoz, stadodo |
|            9 |     4060 | 2024-10-30 | ECSTATIC                                  | L   | 0.394      | -            | -                | -                | -         |    -5.95 | adamS, dav1g, JUST, mopoz, stadodo    |
|            8 |     4083 | 2024-10-30 | Illuminar Gaming                          | W   | 0.393      | -            | -                | -                | -         |     4.44 | adamS, dav1g, JUST, mopoz, stadodo    |
|            7 |     4095 | 2024-10-30 | Metizport                                 | L   | 0.392      | -            | -                | -                | -         |    -3.00 | adamS, dav1g, JUST, mopoz, stadodo    |
|            6 |     5401 | 2024-10-05 | Rhyno Esports                             | L   | 0.224      | -            | -                | -                | -         |    -6.35 | adamS, dav1g, JUST, mopoz, stadodo    |
|            5 |     5555 | 2024-10-02 | Natus Vincere Junior                      | L   | 0.206      | -            | -                | -                | -         |    -2.23 | adamS, dav1g, JUST, mopoz, stadodo    |
|            4 |     5630 | 2024-10-01 | Preasy Esport                             | W   | 0.199      | -            | -                | -                | -         |     1.52 | adamS, dav1g, JUST, mopoz, stadodo    |
|            3 |     7293 | 2024-09-06 | Wildcard                                  | L   | 0.033      | -            | -                | -                | -         |    -0.44 | adamS, dav1g, JUST, mopoz, stadodo    |
|            2 |     7415 | 2024-09-05 | The MongolZ                               | L   | 0.024      | -            | -                | -                | -         |    -0.02 | adamS, dav1g, JUST, mopoz, stadodo    |
|            1 |     7517 | 2024-09-03 | G2 Esports                                | L   | 0.013      | -            | -                | -                | -         |    -0.01 | adamS, dav1g, JUST, mopoz, stadodo    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,749.02)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-26 |      1.000 | $500.00        | $500.00         |
| 2024-11-27 |      0.578 | $5,000.00      | $2,891.55       |
| 2024-11-17 |      0.512 | $3,163.39      | $1,618.97       |
| 2024-10-06 |      0.231 | $1,098.17      | $253.93         |
| 2024-09-22 |      0.138 | $3,500.00      | $484.57         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
