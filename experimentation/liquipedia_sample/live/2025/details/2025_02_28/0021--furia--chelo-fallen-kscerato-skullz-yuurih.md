### Roster Details<br />
Team Name: FURIA<br />
Roster: chelo, FalleN, KSCERATO, skullz, yuurih<br />
Global Rank: [21](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_02_28.md)<br />
Regional Rank: [3]( ../../standings_americas_2025_02_28.md)<br />
<br />
Final Rank Value:  1172.6<br />
<br />
Final Rank Value (1172.6) = Starting Rank Value (1123.7) + Head To Head Adjustments (48.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.454[<sup>1</sup>](#table2)
- Bounty Collected: 0.466[<sup>2</sup>](#table1)
- Opponent Network: 0.097[<sup>2</sup>](#table1)
- LAN Wins: 0.384[<sup>2</sup>](#table1)

The average of these factors is 0.350<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1123.7
- 400 + ( ( 0.350 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1123.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |      790 | 2025-02-03 | Astralis        | L   | 1.000      | -            | -                | -                | -         |    -0.97 | chelo, FalleN, KSCERATO, skullz, yuurih |
|           16 |      813 | 2025-02-01 | Natus Vincere   | L   | 1.000      | -            | -                | -                | -         |    -1.28 | chelo, FalleN, KSCERATO, skullz, yuurih |
|           15 |      839 | 2025-01-31 | Wildcard        | W   | 1.000      | 1.000        | 0.160 (0.160)    | 0.299 (0.299)    | 1 (1.000) |    15.14 | chelo, FalleN, KSCERATO, skullz, yuurih |
|           14 |      853 | 2025-01-29 | Imperial Female | W   | 0.999      | 1.000        | 0.159 (0.159)    | 0.229 (0.229)    | 1 (0.999) |    13.83 | chelo, FalleN, KSCERATO, skullz, yuurih |
|           13 |     1038 | 2025-01-19 | BetBoom Team    | L   | 0.932      | -            | -                | -                | -         |   -15.86 | chelo, FalleN, KSCERATO, skullz, yuurih |
|           12 |     1046 | 2025-01-17 | Nemiga Gaming   | W   | 0.919      | 0.363        | 0.212 (0.071)    | 0.455 (0.152)    | 0 (0.000) |    13.09 | chelo, FalleN, KSCERATO, skullz, yuurih |
|           11 |     4969 | 2024-10-12 | MOUZ            | L   | 0.273      | -            | -                | -                | -         |    -0.09 | chelo, FalleN, KSCERATO, skullz, yuurih |
|           10 |     5128 | 2024-10-09 | Natus Vincere   | W   | 0.252      | 0.624        | 0.613 (0.097)    | 0.464 (0.073)    | 1 (0.252) |     7.64 | chelo, FalleN, KSCERATO, skullz, yuurih |
|            9 |     5249 | 2024-10-07 | MOUZ            | W   | 0.239      | 0.624        | 1.000 (0.149)    | 0.441 (0.066)    | 1 (0.239) |     7.47 | chelo, FalleN, KSCERATO, skullz, yuurih |
|            8 |     5275 | 2024-10-07 | FaZe Clan       | W   | 0.238      | 0.624        | 0.467 (0.069)    | 0.420 (0.062)    | 1 (0.238) |     7.34 | chelo, FalleN, KSCERATO, skullz, yuurih |
|            7 |     6632 | 2024-09-17 | Team Spirit     | L   | 0.105      | -            | -                | -                | -         |    -0.03 | chelo, FalleN, KSCERATO, skullz, yuurih |
|            6 |     6723 | 2024-09-15 | RED Canids      | W   | 0.092      | 0.889        | 0.025 (0.002)    | 0.209 (0.017)    | 1 (0.092) |     0.45 | chelo, FalleN, KSCERATO, skullz, yuurih |
|            5 |     6793 | 2024-09-14 | ATOX Esports    | W   | 0.085      | 0.889        | 0.076 (0.006)    | 0.727 (0.055)    | 1 (0.085) |     1.67 | chelo, FalleN, KSCERATO, skullz, yuurih |
|            4 |     6853 | 2024-09-13 | Virtus.pro      | L   | 0.080      | -            | -                | -                | -         |    -0.10 | chelo, FalleN, KSCERATO, skullz, yuurih |
|            3 |     6890 | 2024-09-13 | RED Canids      | W   | 0.077      | 0.889        | 0.025 (0.002)    | 0.209 (0.014)    | 1 (0.077) |     0.38 | chelo, FalleN, KSCERATO, skullz, yuurih |
|            2 |     6928 | 2024-09-12 | Team Vitality   | L   | 0.072      | -            | -                | -                | -         |    -0.03 | chelo, FalleN, KSCERATO, skullz, yuurih |
|            1 |     6993 | 2024-09-11 | Team Falcons    | W   | 0.064      | 0.889        | 0.012 (0.001)    | 0.029 (0.002)    | 1 (0.064) |     0.23 | chelo, FalleN, KSCERATO, skullz, yuurih |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($18,002.95)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-09 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-10-13 |      0.279 | $20,000.00     | $5,580.09       |
| 2024-09-22 |      0.138 | $17,500.00     | $2,422.86       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
