### Roster Details<br />
Team Name: Tricked Esport<br />
Roster: Nodios, Queenix, roeJ, salazar, valde<br />
Global Rank: [77](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [58]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  1075.4<br />
<br />
Final Rank Value (1075.4) = Starting Rank Value (1001.2) + Head To Head Adjustments (74.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.417[<sup>1</sup>](#table2)
- Bounty Collected: 0.392[<sup>2</sup>](#table1)
- Opponent Network: 0.396[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.301<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1001.2
- 400 + ( ( 0.301 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 1001.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           68 |        8 | 2025-02-28 | ESC Gaming             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.16 | Nodios, Queenix, roeJ, salazar, valde    |
|           67 |      129 | 2025-02-25 | Ninjas in Pyjamas      | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.73 | Nodios, Queenix, roeJ, salazar, valde    |
|           66 |      152 | 2025-02-24 | OG                     | L   | 1.000      | -            | -                | -                | -         |    -9.93 | Nodios, Queenix, roeJ, salazar, valde    |
|           65 |     1823 | 2024-12-09 | Betclic Apogee Esports | L   | 0.658      | -            | -                | -                | -         |    -7.90 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           64 |     1960 | 2024-12-07 | Fire Flux Esports      | L   | 0.644      | -            | -                | -                | -         |    -7.31 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           63 |     2011 | 2024-12-05 | Chimera Esports        | L   | 0.632      | -            | -                | -                | -         |   -10.73 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           62 |     2021 | 2024-12-05 | Team Sampi             | W   | 0.630      | 1.000        | 0.015 (0.009)    | -                | 0 (0.000) |     4.58 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           61 |     2062 | 2024-12-04 | Iberian Soul           | L   | 0.625      | -            | -                | -                | -         |    -8.88 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           60 |     2266 | 2024-12-01 | Iberian Soul           | L   | 0.604      | -            | -                | -                | -         |    -9.08 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           59 |     2333 | 2024-11-30 | Betclic Apogee Esports | W   | 0.599      | 1.000        | -                | 0.551 (0.330)    | 0 (0.000) |    11.70 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           58 |     2395 | 2024-11-29 | Natus Vincere Junior   | W   | 0.592      | 1.000        | 0.108 (0.064)    | 1.000 (0.592)    | 0 (0.000) |    13.46 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           57 |     2406 | 2024-11-29 | BC.Game Esports        | L   | 0.590      | -            | -                | -                | -         |   -10.37 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           56 |     2431 | 2024-11-28 | GUN5 Esports           | W   | 0.586      | 1.000        | 0.123 (0.072)    | 0.623 (0.365)    | 0 (0.000) |    11.69 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           55 |     2456 | 2024-11-28 | Chimera Esports        | W   | 0.584      | 1.000        | 0.030 (0.018)    | 0.641 (0.374)    | 0 (0.000) |     8.68 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           54 |     2468 | 2024-11-27 | Betclic Apogee Esports | L   | 0.580      | -            | -                | -                | -         |    -6.37 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           53 |     2471 | 2024-11-27 | Iberian Soul           | W   | 0.579      | 1.000        | 0.020 (0.012)    | 0.642 (0.372)    | 0 (0.000) |    10.71 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           52 |     2487 | 2024-11-27 | Betclic Apogee Esports | W   | 0.577      | 1.000        | -                | 0.551 (0.318)    | 0 (0.000) |    12.18 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           51 |     2527 | 2024-11-26 | Iberian Soul           | L   | 0.573      | -            | -                | -                | -         |    -7.43 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           50 |     2545 | 2024-11-26 | Leo Team               | W   | 0.570      | 1.000        | 0.031 (0.018)    | 0.618 (0.353)    | 0 (0.000) |     9.24 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           49 |     2557 | 2024-11-25 | Fire Flux Esports      | W   | 0.566      | 1.000        | -                | 1.000 (0.566)    | -         |    12.63 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           48 |     2617 | 2024-11-24 | Viperio                | W   | 0.557      | -            | -                | -                | -         |     5.38 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           47 |     2801 | 2024-11-22 | Betclic Apogee Esports | L   | 0.544      | -            | -                | -                | -         |    -5.17 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           46 |     3013 | 2024-11-18 | GenOne                 | W   | 0.519      | 1.000        | -                | 0.839 (0.435)    | -         |     8.31 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           45 |     3345 | 2024-11-12 | G2 Ares                | W   | 0.478      | -            | -                | -                | -         |     3.17 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           44 |     3425 | 2024-11-10 | Zero Tenacity          | L   | 0.466      | -            | -                | -                | -         |    -5.55 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           43 |     3501 | 2024-11-09 | 9Pandas                | L   | 0.459      | -            | -                | -                | -         |    -2.98 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           42 |     3622 | 2024-11-07 | AMKAL ESPORTS          | W   | 0.445      | 1.000        | 0.020 (0.009)    | -                | -         |     5.79 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           41 |     3631 | 2024-11-07 | 9INE                   | W   | 0.444      | -            | -                | -                | -         |     4.91 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           40 |     3848 | 2024-11-03 | 9Pandas                | L   | 0.418      | -            | -                | -                | -         |    -2.82 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           39 |     3983 | 2024-11-01 | HOTU                   | W   | 0.405      | 1.000        | -                | 0.637 (0.258)    | -         |     3.53 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           38 |     4028 | 2024-10-31 | ECSTATIC               | L   | 0.399      | -            | -                | -                | -         |    -4.25 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           37 |     4142 | 2024-10-29 | Johnny Speeds          | W   | 0.386      | 1.000        | 0.047 (0.018)    | -                | -         |     6.91 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           36 |     4152 | 2024-10-29 | Endpoint               | W   | 0.386      | -            | -                | -                | -         |     4.69 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           35 |     4225 | 2024-10-28 | Rebels Gaming          | W   | 0.377      | -            | -                | -                | -         |     3.79 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           34 |     4252 | 2024-10-27 | AMKAL ESPORTS          | W   | 0.372      | -            | -                | -                | -         |     5.76 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           33 |     4326 | 2024-10-26 | Natus Vincere Junior   | L   | 0.364      | -            | -                | -                | -         |    -2.37 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           32 |     4461 | 2024-10-23 | Dynamo Eclot           | W   | 0.344      | -            | -                | -                | -         |     1.61 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           31 |     4586 | 2024-10-20 | FAVBET Team            | L   | 0.325      | -            | -                | -                | -         |    -3.24 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           30 |     4631 | 2024-10-19 | 9INE                   | W   | 0.318      | -            | -                | -                | -         |     3.25 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           29 |     4866 | 2024-10-15 | GUN5 Esports           | W   | 0.290      | 1.000        | 0.123 (0.036)    | -                | -         |     6.62 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           28 |     4993 | 2024-10-12 | GTZ.ESPORTS            | W   | 0.271      | 1.000        | 0.095 (0.026)    | -                | -         |     7.83 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           27 |     5052 | 2024-10-11 | HOTU                   | W   | 0.264      | -            | -                | -                | -         |     2.98 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           26 |     5076 | 2024-10-10 | CYBERSHOKE Esports     | W   | 0.257      | -            | -                | -                | -         |     5.50 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           25 |     5412 | 2024-10-05 | Team Sampi             | W   | 0.223      | -            | -                | -                | -         |     2.58 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           24 |     5563 | 2024-10-02 | ENCE Academy           | L   | 0.205      | -            | -                | -                | -         |    -3.22 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           23 |     5586 | 2024-10-02 | HOTU                   | L   | 0.203      | -            | -                | -                | -         |    -4.06 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           22 |     5588 | 2024-10-02 | TSM                    | L   | 0.203      | -            | -                | -                | -         |    -4.61 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           21 |     5717 | 2024-09-30 | Johnny Speeds          | W   | 0.191      | -            | -                | -                | -         |     3.38 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           20 |     5860 | 2024-09-28 | Nexus Gaming           | L   | 0.177      | -            | -                | -                | -         |    -0.88 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           19 |     5873 | 2024-09-27 | Passion UA             | L   | 0.176      | -            | -                | -                | -         |    -1.70 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           18 |     5986 | 2024-09-26 | GameAgents             | L   | 0.165      | -            | -                | -                | -         |    -3.86 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           17 |     6012 | 2024-09-26 | Los kogutos            | W   | 0.164      | -            | -                | -                | -         |     3.40 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           16 |     6068 | 2024-09-25 | Zero Tenacity          | W   | 0.160      | -            | -                | -                | -         |     3.36 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           15 |     6102 | 2024-09-25 | TSM                    | L   | 0.157      | -            | -                | -                | -         |    -3.63 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           14 |     6382 | 2024-09-21 | KONO.ECF               | W   | 0.131      | -            | -                | -                | -         |     2.95 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           13 |     6747 | 2024-09-15 | GamerLegion            | L   | 0.090      | -            | -                | -                | -         |    -2.31 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           12 |     6842 | 2024-09-14 | ECSTATIC               | W   | 0.083      | -            | -                | -                | -         |     1.85 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           11 |     6894 | 2024-09-13 | Cloud9                 | W   | 0.077      | -            | -                | -                | -         |     0.79 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|           10 |     7055 | 2024-09-10 | Chimera Esports        | W   | 0.057      | -            | -                | -                | -         |     0.95 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|            9 |     7101 | 2024-09-09 | FAVBET Team            | L   | 0.051      | -            | -                | -                | -         |    -0.43 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|            8 |     7206 | 2024-09-07 | Team Spirit Academy    | L   | 0.039      | -            | -                | -                | -         |    -0.28 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|            7 |     7295 | 2024-09-06 | Passion UA             | L   | 0.033      | -            | -                | -                | -         |    -0.31 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|            6 |     7407 | 2024-09-05 | BetBoom Team           | L   | 0.025      | -            | -                | -                | -         |    -0.18 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|            5 |     7421 | 2024-09-05 | Team Sampi             | L   | 0.024      | -            | -                | -                | -         |    -0.49 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|            4 |     7424 | 2024-09-05 | Revenant Esports       | W   | 0.023      | -            | -                | -                | -         |     0.05 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|            3 |     7472 | 2024-09-04 | Rhyno Esports          | W   | 0.018      | -            | -                | -                | -         |     0.10 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|            2 |     7547 | 2024-09-03 | SINNERS Esports        | W   | 0.011      | -            | -                | -                | -         |     0.26 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|            1 |     7583 | 2024-09-02 | Alliance               | W   | 0.003      | -            | -                | -                | -         |     0.07 | kraghen, nicoodoz, Nodios, Queenix, roeJ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,406.05)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-30 |      0.599 | $12,000.00     | $7,191.39       |
| 2024-11-29 |      0.590 | $3,000.00      | $1,771.18       |
| 2024-11-27 |      0.578 | $1,000.00      | $578.31         |
| 2024-11-12 |      0.479 | $500.00        | $239.42         |
| 2024-11-10 |      0.466 | $2,500.00      | $1,165.57       |
| 2024-09-15 |      0.092 | $5,000.00      | $460.19         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
