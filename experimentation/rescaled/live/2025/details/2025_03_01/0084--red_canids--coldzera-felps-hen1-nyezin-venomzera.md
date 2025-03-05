### Roster Details<br />
Team Name: RED Canids<br />
Roster: coldzera, felps, HEN1, nyezin, venomzera<br />
Global Rank: [84](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [18]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  884.6<br />
<br />
Final Rank Value (884.6) = Starting Rank Value (902.2) + Head To Head Adjustments (-17.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.371[<sup>1</sup>](#table2)
- Bounty Collected: 0.356[<sup>2</sup>](#table1)
- Opponent Network: 0.149[<sup>2</sup>](#table1)
- LAN Wins: 0.179[<sup>2</sup>](#table1)

The average of these factors is 0.264<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 902.2
- 400 + ( ( 0.264 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 902.2


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
|           34 |      165 | 2025-02-19 | Team Solid       | L   | 1.000      | -            | -                | -                | -         |   -15.37 | coldzera, felps, HEN1, nyezin, venomzera    |
|           33 |      437 | 2025-02-08 | PaiN Gaming      | L   | 1.000      | -            | -                | -                | -         |    -0.56 | coldzera, felps, HEN1, nyezin, venomzera    |
|           32 |      485 | 2025-02-07 | Nitro.GG         | L   | 1.000      | -            | -                | -                | -         |   -24.88 | coldzera, felps, HEN1, nyezin, venomzera    |
|           31 |      496 | 2025-02-07 | Elevate          | W   | 1.000      | 0.645        | -                | 0.171 (0.111)    | 0 (0.000) |     3.85 | coldzera, felps, HEN1, nyezin, venomzera    |
|           30 |      535 | 2025-02-05 | 9z Team          | W   | 1.000      | 0.642        | 0.015 (0.010)    | -                | 0 (0.000) |    11.41 | coldzera, felps, HEN1, nyezin, venomzera    |
|           29 |      549 | 2025-02-05 | Elevate          | W   | 1.000      | 0.642        | -                | 0.171 (0.110)    | 0 (0.000) |     3.56 | coldzera, felps, HEN1, nyezin, venomzera    |
|           28 |     1467 | 2024-11-14 | Imperial Esports | L   | 0.490      | -            | -                | -                | -         |    -3.88 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           27 |     1496 | 2024-11-14 | Legacy           | W   | 0.484      | 0.920        | 0.033 (0.015)    | 0.669 (0.298)    | 1 (0.484) |     9.06 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           26 |     1525 | 2024-11-13 | Case Esports     | W   | 0.477      | -            | -                | -                | 1 (0.477) |     3.31 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           25 |     1545 | 2024-11-12 | M80              | L   | 0.472      | -            | -                | -                | -         |    -5.41 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           24 |     1559 | 2024-11-11 | 9z Team          | L   | 0.470      | -            | -                | -                | -         |    -9.61 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           23 |     1876 | 2024-10-18 | BESTIA           | L   | 0.307      | -            | -                | -                | -         |    -4.25 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           22 |     1902 | 2024-10-17 | Imperial Esports | W   | 0.301      | 0.975        | 0.067 (0.020)    | 0.701 (0.206)    | 0 (0.000) |     7.13 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           21 |     1925 | 2024-10-16 | MIBR             | L   | 0.294      | -            | -                | -                | -         |    -0.42 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           20 |     1952 | 2024-10-15 | BESTIA           | W   | 0.287      | 0.984        | 0.045 (0.013)    | 0.572 (0.162)    | -         |     5.19 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           19 |     2022 | 2024-10-09 | MIBR             | L   | 0.248      | -            | -                | -                | -         |    -0.35 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           18 |     2029 | 2024-10-09 | MIBR             | L   | 0.247      | -            | -                | -                | -         |    -0.35 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           17 |     2076 | 2024-10-08 | Dusty Roots      | W   | 0.241      | 0.979        | 0.008 (0.002)    | 0.422 (0.100)    | -         |     2.46 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           16 |     2084 | 2024-10-08 | Dusty Roots      | W   | 0.241      | 0.979        | 0.008 (0.002)    | 0.422 (0.100)    | -         |     2.51 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           15 |     2091 | 2024-10-08 | Team Solid       | L   | 0.240      | -            | -                | -                | -         |    -4.01 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           14 |     2094 | 2024-10-08 | Team Solid       | L   | 0.240      | -            | -                | -                | -         |    -4.09 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           13 |     2119 | 2024-10-07 | BESTIA           | L   | 0.234      | -            | -                | -                | -         |    -3.27 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           12 |     2121 | 2024-10-07 | BESTIA           | L   | 0.234      | -            | -                | -                | -         |    -3.33 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           11 |     2174 | 2024-10-05 | BESTIA           | W   | 0.219      | 1.000        | 0.045 (0.010)    | 0.572 (0.126)    | 1 (0.219) |     3.84 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           10 |     2202 | 2024-10-04 | Imperial Esports | W   | 0.214      | 1.000        | 0.067 (0.014)    | 0.701 (0.150)    | 1 (0.214) |     5.06 | coldzera, dav1deuS, HEN1, nython, venomzera |
|            9 |     2274 | 2024-10-02 | PaiN Gaming      | L   | 0.200      | -            | -                | -                | -         |    -0.08 | coldzera, dav1deuS, HEN1, nython, venomzera |
|            8 |     2277 | 2024-10-02 | PaiN Gaming      | W   | 0.200      | 1.000        | 0.318 (0.063)    | 0.632 (0.126)    | -         |     6.22 | coldzera, dav1deuS, HEN1, nython, venomzera |
|            7 |     2525 | 2024-09-25 | Fluxo            | L   | 0.154      | -            | -                | -                | -         |    -1.62 | coldzera, dav1deuS, HEN1, nython, venomzera |
|            6 |     2530 | 2024-09-25 | Fluxo            | L   | 0.154      | -            | -                | -                | -         |    -1.64 | coldzera, dav1deuS, HEN1, nython, venomzera |
|            5 |     2850 | 2024-09-15 | FURIA            | L   | 0.085      | -            | -                | -                | -         |    -0.12 | coldzera, dav1deuS, HEN1, nython, venomzera |
|            4 |     2887 | 2024-09-14 | Team Falcons     | W   | 0.078      | -            | -                | -                | 1 (0.078) |     0.74 | coldzera, dav1deuS, HEN1, nython, venomzera |
|            3 |     2922 | 2024-09-13 | FURIA            | L   | 0.071      | -            | -                | -                | -         |    -0.10 | coldzera, dav1deuS, HEN1, nython, venomzera |
|            2 |     2948 | 2024-09-12 | ENCE             | W   | 0.065      | 0.889        | 0.134 (0.008)    | -                | 1 (0.065) |     1.48 | coldzera, dav1deuS, HEN1, nython, venomzera |
|            1 |     3004 | 2024-09-10 | Virtus.pro       | L   | 0.053      | -            | -                | -                | -         |    -0.03 | coldzera, dav1deuS, HEN1, nython, venomzera |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,804.07)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.320 | $5,000.00      | $1,600.69       |
| 2024-10-05 |      0.219 | $16,491.66     | $3,616.71       |
| 2024-09-22 |      0.132 | $12,000.00     | $1,586.67       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
