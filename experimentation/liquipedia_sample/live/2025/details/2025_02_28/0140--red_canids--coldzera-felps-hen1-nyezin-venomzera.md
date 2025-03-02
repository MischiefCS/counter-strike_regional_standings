### Roster Details<br />
Team Name: RED Canids<br />
Roster: coldzera, felps, HEN1, nyezin, venomzera<br />
Global Rank: [140](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_02_28.md)<br />
Regional Rank: [29]( ../../standings_americas_2025_02_28.md)<br />
<br />
Final Rank Value:  804.3<br />
<br />
Final Rank Value (804.3) = Starting Rank Value (820.5) + Head To Head Adjustments (-16.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.383[<sup>1</sup>](#table2)
- Bounty Collected: 0.320[<sup>2</sup>](#table1)
- Opponent Network: 0.092[<sup>2</sup>](#table1)
- LAN Wins: 0.020[<sup>2</sup>](#table1)

The average of these factors is 0.204<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 820.5
- 400 + ( ( 0.204 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 820.5


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
|           37 |      257 | 2025-02-19 | Team Solid       | L   | 1.000      | -            | -                | -                | -         |   -11.12 | coldzera, felps, HEN1, nyezin, venomzera    |
|           36 |      561 | 2025-02-08 | PaiN Gaming      | L   | 1.000      | -            | -                | -                | -         |    -0.66 | coldzera, felps, HEN1, nyezin, venomzera    |
|           35 |      633 | 2025-02-07 | Nitro.GG         | L   | 1.000      | -            | -                | -                | -         |   -21.68 | coldzera, felps, HEN1, nyezin, venomzera    |
|           34 |      676 | 2025-02-07 | Elevate          | W   | 1.000      | 0.143        | -                | 0.238 (0.034)    | 0 (0.000) |     8.23 | coldzera, felps, HEN1, nyezin, venomzera    |
|           33 |      725 | 2025-02-05 | 9z Team          | W   | 1.000      | 0.143        | 0.019 (0.003)    | -                | 0 (0.000) |    12.11 | coldzera, felps, HEN1, nyezin, venomzera    |
|           32 |      747 | 2025-02-05 | Elevate          | W   | 1.000      | 0.143        | -                | 0.238 (0.034)    | 0 (0.000) |     8.33 | coldzera, felps, HEN1, nyezin, venomzera    |
|           31 |      872 | 2025-01-28 | Yawara E-Sports  | W   | 0.995      | 0.450        | 0.002 (0.001)    | 0.537 (0.241)    | 0 (0.000) |     9.24 | coldzera, felps, HEN1, nyezin, venomzera    |
|           30 |      876 | 2025-01-28 | Yawara E-Sports  | W   | 0.994      | 0.450        | -                | 0.537 (0.240)    | 0 (0.000) |     9.95 | coldzera, felps, HEN1, nyezin, venomzera    |
|           29 |      960 | 2025-01-23 | Elevate          | W   | 0.961      | 0.450        | -                | 0.238 (0.103)    | 0 (0.000) |     9.29 | coldzera, felps, HEN1, nyezin, venomzera    |
|           28 |      962 | 2025-01-23 | Elevate          | L   | 0.961      | -            | -                | -                | -         |   -21.47 | coldzera, felps, HEN1, nyezin, venomzera    |
|           27 |     1019 | 2025-01-21 | UNO MILLE        | L   | 0.948      | -            | -                | -                | -         |   -14.17 | coldzera, felps, HEN1, nyezin, venomzera    |
|           26 |     1021 | 2025-01-21 | UNO MILLE        | L   | 0.948      | -            | -                | -                | -         |   -15.40 | coldzera, felps, HEN1, nyezin, venomzera    |
|           25 |     4654 | 2024-10-18 | BESTIA           | L   | 0.314      | -            | -                | -                | -         |    -3.97 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           24 |     4700 | 2024-10-17 | Imperial Esports | W   | 0.307      | 0.450        | 0.084 (0.012)    | 0.554 (0.077)    | 0 (0.000) |     6.35 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           23 |     4751 | 2024-10-16 | MIBR             | L   | 0.300      | -            | -                | -                | -         |    -1.40 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           22 |     4818 | 2024-10-15 | BESTIA           | W   | 0.294      | 0.450        | 0.083 (0.011)    | 0.462 (0.061)    | 0 (0.000) |     5.60 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           21 |     5102 | 2024-10-09 | MIBR             | L   | 0.254      | -            | -                | -                | -         |    -1.17 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           20 |     5110 | 2024-10-09 | MIBR             | L   | 0.254      | -            | -                | -                | -         |    -1.18 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           19 |     5173 | 2024-10-08 | Dusty Roots      | W   | 0.247      | 0.450        | 0.010 (0.001)    | 0.401 (0.045)    | -         |     3.67 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           18 |     5181 | 2024-10-08 | Dusty Roots      | W   | 0.247      | 0.450        | 0.010 (0.001)    | 0.401 (0.045)    | -         |     3.75 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           17 |     5190 | 2024-10-08 | Team Solid       | L   | 0.246      | -            | -                | -                | -         |    -3.29 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           16 |     5199 | 2024-10-08 | Team Solid       | L   | 0.246      | -            | -                | -                | -         |    -3.35 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           15 |     5235 | 2024-10-07 | BESTIA           | L   | 0.241      | -            | -                | -                | -         |    -3.10 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           14 |     5237 | 2024-10-07 | BESTIA           | L   | 0.240      | -            | -                | -                | -         |    -3.16 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           13 |     5370 | 2024-10-05 | BESTIA           | W   | 0.226      | 0.143        | 0.083 (0.003)    | -                | -         |     4.21 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           12 |     5439 | 2024-10-04 | Imperial Esports | W   | 0.220      | 0.143        | 0.084 (0.003)    | -                | -         |     4.51 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           11 |     5546 | 2024-10-02 | PaiN Gaming      | L   | 0.206      | -            | -                | -                | -         |    -0.13 | coldzera, dav1deuS, HEN1, nython, venomzera |
|           10 |     5551 | 2024-10-02 | PaiN Gaming      | W   | 0.206      | 0.450        | 0.327 (0.030)    | 0.433 (0.040)    | -         |     6.36 | coldzera, dav1deuS, HEN1, nython, venomzera |
|            9 |     5785 | 2024-09-28 | PaiN Gaming      | L   | 0.181      | -            | -                | -                | -         |    -0.11 | coldzera, dav1deuS, HEN1, nython, venomzera |
|            8 |     5792 | 2024-09-28 | Fluxo            | L   | 0.180      | -            | -                | -                | -         |    -1.55 | coldzera, dav1deuS, HEN1, nython, venomzera |
|            7 |     6041 | 2024-09-25 | Fluxo            | L   | 0.161      | -            | -                | -                | -         |    -1.43 | coldzera, dav1deuS, HEN1, nython, venomzera |
|            6 |     6047 | 2024-09-25 | Fluxo            | L   | 0.160      | -            | -                | -                | -         |    -1.44 | coldzera, dav1deuS, HEN1, nython, venomzera |
|            5 |     6723 | 2024-09-15 | FURIA            | L   | 0.092      | -            | -                | -                | -         |    -0.45 | coldzera, dav1deuS, HEN1, nython, venomzera |
|            4 |     6820 | 2024-09-14 | Team Falcons     | W   | 0.084      | -            | -                | -                | 1 (0.084) |     1.09 | coldzera, dav1deuS, HEN1, nython, venomzera |
|            3 |     6890 | 2024-09-13 | FURIA            | L   | 0.077      | -            | -                | -                | -         |    -0.38 | coldzera, dav1deuS, HEN1, nython, venomzera |
|            2 |     6929 | 2024-09-12 | ENCE             | W   | 0.072      | 0.889        | 0.162 (0.010)    | -                | 1 (0.072) |     1.76 | coldzera, dav1deuS, HEN1, nython, venomzera |
|            1 |     7031 | 2024-09-10 | Virtus.pro       | L   | 0.059      | -            | -                | -                | -         |    -0.01 | coldzera, dav1deuS, HEN1, nython, venomzera |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,012.62)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.326 | $5,000.00      | $1,631.83       |
| 2024-10-05 |      0.226 | $16,491.66     | $3,719.40       |
| 2024-09-22 |      0.138 | $12,000.00     | $1,661.39       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
