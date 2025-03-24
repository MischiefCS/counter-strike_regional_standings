### Roster Details<br />
Team Name: RED Canids<br />
Roster: coldzera, felps, HEN1, nyezin, venomzera<br />
Global Rank: [83](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [18]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  821.2<br />
<br />
Final Rank Value (821.2) = Starting Rank Value (838.0) + Head To Head Adjustments (-16.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.371[<sup>1</sup>](#table2)
- Bounty Collected: 0.311[<sup>2</sup>](#table1)
- Opponent Network: 0.046[<sup>2</sup>](#table1)
- LAN Wins: 0.179[<sup>2</sup>](#table1)

The average of these factors is 0.227<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 838.0
- 400 + ( ( 0.227 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 838.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           34 |      165 | 2025-02-19 | Team Solid       | L   | 1.000      | -            | -                | -                | -         |   -15.29 | coldzera, felps, HEN1, nyezin, venomzera    |
|           33 |      442 | 2025-02-08 | PaiN Gaming      | L   | 1.000      | -            | -                | -                | -         |    -0.50 | coldzera, felps, HEN1, nyezin, venomzera    |
|           32 |      485 | 2025-02-07 | Nitro.GG         | L   | 1.000      | -            | -                | -                | -         |   -23.74 | coldzera, felps, HEN1, nyezin, venomzera    |
|           31 |      497 | 2025-02-07 | Elevate          | W   | 1.000      | 0.143        | -                | 0.171 (0.024)    | 0 (0.000) |     4.70 | coldzera, felps, HEN1, nyezin, venomzera    |
|           30 |      535 | 2025-02-05 | 9z Team          | W   | 1.000      | 0.143        | 0.015 (0.002)    | -                | 0 (0.000) |    12.73 | coldzera, felps, HEN1, nyezin, venomzera    |
|           29 |      552 | 2025-02-05 | Elevate          | W   | 1.000      | 0.143        | -                | 0.171 (0.024)    | 0 (0.000) |     4.41 | coldzera, felps, HEN1, nyezin, venomzera    |
|           28 |     1467 | 2024-11-14 | Imperial Esports | L   | 0.490      | -            | -                | -                | -         |    -5.35 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           27 |     1496 | 2024-11-13 | Legacy           | W   | 0.484      | 0.143        | 0.033 (0.002)    | 0.669 (0.046)    | 1 (0.484) |     7.71 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           26 |     1526 | 2024-11-12 | Case Esports     | W   | 0.477      | -            | -                | -                | 1 (0.477) |     4.06 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           25 |     1542 | 2024-11-12 | M80              | L   | 0.472      | -            | -                | -                | -         |    -5.53 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           24 |     1556 | 2024-11-11 | 9z Team          | L   | 0.471      | -            | -                | -                | -         |    -8.96 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           23 |     1876 | 2024-10-18 | BESTIA           | L   | 0.307      | -            | -                | -                | -         |    -4.38 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           22 |     1902 | 2024-10-17 | Imperial Esports | W   | 0.300      | 0.450        | 0.067 (0.009)    | 0.702 (0.095)    | 0 (0.000) |     6.15 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           21 |     1927 | 2024-10-16 | MIBR             | L   | 0.294      | -            | -                | -                | -         |    -0.38 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           20 |     1953 | 2024-10-15 | BESTIA           | W   | 0.287      | 0.450        | 0.045 (0.006)    | 0.573 (0.074)    | -         |     5.04 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           19 |     2025 | 2024-10-09 | MIBR             | L   | 0.248      | -            | -                | -                | -         |    -0.31 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           18 |     2030 | 2024-10-09 | MIBR             | L   | 0.248      | -            | -                | -                | -         |    -0.31 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           17 |     2081 | 2024-10-08 | Dusty Roots      | W   | 0.241      | 0.450        | 0.008 (0.001)    | 0.422 (0.046)    | -         |     3.01 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           16 |     2086 | 2024-10-08 | Dusty Roots      | W   | 0.241      | 0.450        | 0.008 (0.001)    | 0.422 (0.046)    | -         |     3.07 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           15 |     2090 | 2024-10-08 | Team Solid       | L   | 0.241      | -            | -                | -                | -         |    -4.10 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           14 |     2093 | 2024-10-08 | Team Solid       | L   | 0.240      | -            | -                | -                | -         |    -4.18 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           13 |     2119 | 2024-10-07 | BESTIA           | L   | 0.235      | -            | -                | -                | -         |    -3.40 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           12 |     2120 | 2024-10-07 | BESTIA           | L   | 0.235      | -            | -                | -                | -         |    -3.47 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           11 |     2179 | 2024-10-05 | BESTIA           | W   | 0.218      | 0.143        | 0.045 (0.001)    | -                | 1 (0.218) |     3.70 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           10 |     2204 | 2024-10-04 | Imperial Esports | W   | 0.213      | 0.143        | 0.067 (0.002)    | 0.702 (0.021)    | 1 (0.213) |     4.31 | coldzera, dav1deuS, HEN1, nython, venomzera |
|            9 |     2272 | 2024-10-02 | PaiN Gaming      | L   | 0.200      | -            | -                | -                | -         |    -0.07 | coldzera, dav1deuS, HEN1, nython, venomzera |
|            8 |     2276 | 2024-10-02 | PaiN Gaming      | W   | 0.200      | 0.450        | 0.318 (0.029)    | 0.632 (0.057)    | -         |     6.24 | coldzera, dav1deuS, HEN1, nython, venomzera |
|            7 |     2523 | 2024-09-25 | Fluxo            | L   | 0.155      | -            | -                | -                | -         |    -1.97 | coldzera, dav1deuS, HEN1, nython, venomzera |
|            6 |     2530 | 2024-09-25 | Fluxo            | L   | 0.155      | -            | -                | -                | -         |    -2.00 | coldzera, dav1deuS, HEN1, nython, venomzera |
|            5 |     2848 | 2024-09-15 | FURIA            | L   | 0.085      | -            | -                | -                | -         |    -0.10 | coldzera, dav1deuS, HEN1, nython, venomzera |
|            4 |     2887 | 2024-09-14 | Team Falcons     | W   | 0.078      | -            | -                | -                | 1 (0.078) |     0.82 | coldzera, dav1deuS, HEN1, nython, venomzera |
|            3 |     2923 | 2024-09-12 | FURIA            | L   | 0.071      | -            | -                | -                | -         |    -0.08 | coldzera, dav1deuS, HEN1, nython, venomzera |
|            2 |     2949 | 2024-09-12 | ENCE             | W   | 0.065      | 0.889        | 0.134 (0.008)    | 0.410 (0.024)    | 1 (0.065) |     1.42 | coldzera, dav1deuS, HEN1, nython, venomzera |
|            1 |     3004 | 2024-09-10 | Virtus.pro       | L   | 0.053      | -            | -                | -                | -         |    -0.02 | coldzera, dav1deuS, HEN1, nython, venomzera |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,768.71)
- Divide that value by the 5th highest value among all rosters ($336,045.79)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.319 | $5,000.00      | $1,596.99       |
| 2024-10-05 |      0.218 | $16,491.66     | $3,598.39       |
| 2024-09-22 |      0.131 | $12,000.00     | $1,573.33       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
