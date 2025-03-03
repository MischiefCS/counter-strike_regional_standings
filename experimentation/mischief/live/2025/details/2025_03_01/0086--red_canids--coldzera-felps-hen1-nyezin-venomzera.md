### Roster Details<br />
Team Name: RED Canids<br />
Roster: coldzera, felps, HEN1, nyezin, venomzera<br />
Global Rank: [86](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [18]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  830.4<br />
<br />
Final Rank Value (830.4) = Starting Rank Value (843.3) + Head To Head Adjustments (-13.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.371[<sup>1</sup>](#table2)
- Bounty Collected: 0.311[<sup>2</sup>](#table1)
- Opponent Network: 0.046[<sup>2</sup>](#table1)
- LAN Wins: 0.179[<sup>2</sup>](#table1)

The average of these factors is 0.227<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 843.3
- 400 + ( ( 0.227 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 843.3


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
|           34 |      208 | 2025-02-19 | Team Solid       | L   | 1.000      | -            | -                | -                | -         |   -14.28 | coldzera, felps, HEN1, nyezin, venomzera    |
|           33 |      580 | 2025-02-08 | PaiN Gaming      | L   | 1.000      | -            | -                | -                | -         |    -0.51 | coldzera, felps, HEN1, nyezin, venomzera    |
|           32 |      628 | 2025-02-07 | Nitro.GG         | L   | 1.000      | -            | -                | -                | -         |   -23.88 | coldzera, felps, HEN1, nyezin, venomzera    |
|           31 |      644 | 2025-02-07 | Elevate          | W   | 1.000      | 0.143        | -                | 0.271 (0.039)    | 0 (0.000) |     5.71 | coldzera, felps, HEN1, nyezin, venomzera    |
|           30 |      719 | 2025-02-05 | 9z Team          | W   | 1.000      | 0.143        | 0.015 (0.002)    | -                | 0 (0.000) |    12.72 | coldzera, felps, HEN1, nyezin, venomzera    |
|           29 |      739 | 2025-02-05 | Elevate          | W   | 1.000      | 0.143        | -                | 0.271 (0.039)    | 0 (0.000) |     5.42 | coldzera, felps, HEN1, nyezin, venomzera    |
|           28 |     2706 | 2024-11-14 | Imperial Esports | L   | 0.490      | -            | -                | -                | -         |    -5.30 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           27 |     2739 | 2024-11-14 | Legacy           | W   | 0.484      | 0.143        | 0.033 (0.002)    | 0.622 (0.043)    | 1 (0.484) |     7.80 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           26 |     2773 | 2024-11-13 | Case Esports     | W   | 0.477      | -            | -                | -                | 1 (0.477) |     4.03 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           25 |     2799 | 2024-11-12 | M80              | L   | 0.472      | -            | -                | -                | -         |    -5.57 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           24 |     2816 | 2024-11-11 | 9z Team          | L   | 0.470      | -            | -                | -                | -         |    -8.98 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           23 |     3491 | 2024-10-18 | BESTIA           | L   | 0.307      | -            | -                | -                | -         |    -4.31 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           22 |     3517 | 2024-10-17 | Imperial Esports | W   | 0.301      | 0.450        | 0.067 (0.009)    | 0.652 (0.088)    | 0 (0.000) |     6.19 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           21 |     3540 | 2024-10-16 | MIBR             | L   | 0.294      | -            | -                | -                | -         |    -0.36 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           20 |     3567 | 2024-10-15 | BESTIA           | W   | 0.287      | 0.450        | 0.045 (0.006)    | 0.532 (0.069)    | -         |     5.11 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           19 |     3637 | 2024-10-09 | MIBR             | L   | 0.248      | -            | -                | -                | -         |    -0.30 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           18 |     3644 | 2024-10-09 | MIBR             | L   | 0.247      | -            | -                | -                | -         |    -0.30 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           17 |     3691 | 2024-10-08 | Dusty Roots      | W   | 0.241      | 0.450        | 0.008 (0.001)    | 0.392 (0.043)    | -         |     3.05 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           16 |     3699 | 2024-10-08 | Dusty Roots      | W   | 0.241      | 0.450        | 0.008 (0.001)    | 0.392 (0.043)    | -         |     3.11 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           15 |     3706 | 2024-10-08 | Team Solid       | L   | 0.240      | -            | -                | -                | -         |    -3.98 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           14 |     3709 | 2024-10-08 | Team Solid       | L   | 0.240      | -            | -                | -                | -         |    -4.05 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           13 |     3734 | 2024-10-07 | BESTIA           | L   | 0.234      | -            | -                | -                | -         |    -3.34 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           12 |     3736 | 2024-10-07 | BESTIA           | L   | 0.234      | -            | -                | -                | -         |    -3.40 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           11 |     3789 | 2024-10-05 | BESTIA           | W   | 0.219      | 0.143        | 0.045 (0.001)    | -                | 1 (0.219) |     3.78 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           10 |     3817 | 2024-10-04 | Imperial Esports | W   | 0.214      | 0.143        | 0.067 (0.002)    | 0.652 (0.020)    | 1 (0.214) |     4.35 | coldzera, dav1deuS, HEN1, nython, venomzera |
|            9 |     3889 | 2024-10-02 | PaiN Gaming      | L   | 0.200      | -            | -                | -                | -         |    -0.07 | coldzera, dav1deuS, HEN1, nython, venomzera |
|            8 |     3892 | 2024-10-02 | PaiN Gaming      | W   | 0.200      | 0.450        | 0.318 (0.029)    | 0.587 (0.053)    | -         |     6.22 | coldzera, dav1deuS, HEN1, nython, venomzera |
|            7 |     4140 | 2024-09-25 | Fluxo            | L   | 0.154      | -            | -                | -                | -         |    -1.93 | coldzera, dav1deuS, HEN1, nython, venomzera |
|            6 |     4145 | 2024-09-25 | Fluxo            | L   | 0.154      | -            | -                | -                | -         |    -1.95 | coldzera, dav1deuS, HEN1, nython, venomzera |
|            5 |     4488 | 2024-09-15 | FURIA            | L   | 0.085      | -            | -                | -                | -         |    -0.10 | coldzera, dav1deuS, HEN1, nython, venomzera |
|            4 |     4525 | 2024-09-14 | Team Falcons     | W   | 0.078      | -            | -                | -                | 1 (0.078) |     0.82 | coldzera, dav1deuS, HEN1, nython, venomzera |
|            3 |     4560 | 2024-09-13 | FURIA            | L   | 0.071      | -            | -                | -                | -         |    -0.08 | coldzera, dav1deuS, HEN1, nython, venomzera |
|            2 |     4586 | 2024-09-12 | ENCE             | W   | 0.065      | 0.889        | 0.136 (0.008)    | 0.382 (0.022)    | 1 (0.065) |     1.44 | coldzera, dav1deuS, HEN1, nython, venomzera |
|            1 |     4642 | 2024-09-10 | Virtus.pro       | L   | 0.053      | -            | -                | -                | -         |    -0.02 | coldzera, dav1deuS, HEN1, nython, venomzera |

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
