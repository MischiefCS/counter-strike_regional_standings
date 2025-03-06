### Roster Details<br />
Team Name: FURIA<br />
Roster: chelo, FalleN, KSCERATO, skullz, yuurih<br />
Global Rank: [22](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_06_02.md)<br />
Regional Rank: [5]( ../../standings_americas_2025_06_02.md)<br />
<br />
Final Rank Value:  1031.1<br />
<br />
Final Rank Value (1031.1) = Starting Rank Value (1026.7) + Head To Head Adjustments (4.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.459[<sup>1</sup>](#table2)
- Bounty Collected: 0.344[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.264[<sup>2</sup>](#table1)

The average of these factors is 0.270<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1026.7
- 400 + ( ( 0.270 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 1026.7


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
|           11 |      590 | 2025-02-03 | Astralis        | L   | 0.404      | -            | -                | -                | -         |    -0.08 | chelo, FalleN, KSCERATO, skullz, yuurih |
|           10 |      611 | 2025-02-01 | Natus Vincere   | L   | 0.392      | -            | -                | -                | -         |    -0.80 | chelo, FalleN, KSCERATO, skullz, yuurih |
|            9 |      624 | 2025-01-31 | Wildcard        | W   | 0.383      | 1.000        | 0.212 (0.081)    | 0.291 (0.112)    | 1 (0.383) |     8.21 | chelo, FalleN, KSCERATO, skullz, yuurih |
|            8 |      636 | 2025-01-29 | Imperial Female | W   | 0.371      | 1.000        | 0.089 (0.033)    | 0.000 (0.000)    | 1 (0.371) |     1.51 | chelo, FalleN, KSCERATO, skullz, yuurih |
|            7 |      670 | 2025-01-19 | BetBoom Team    | L   | 0.304      | -            | -                | -                | -         |    -6.33 | chelo, FalleN, KSCERATO, skullz, yuurih |
|            6 |      678 | 2025-01-17 | Nemiga Gaming   | W   | 0.291      | 0.363        | 0.011 (0.001)    | 0.243 (0.026)    | 0 (0.000) |     1.51 | chelo, FalleN, KSCERATO, skullz, yuurih |
|            5 |      967 | 2024-12-08 | FaZe Clan       | L   | 0.023      | -            | -                | -                | -         |    -0.01 | chelo, FalleN, KSCERATO, skullz, yuurih |
|            4 |      996 | 2024-12-07 | PaiN Gaming     | W   | 0.016      | 1.000        | 0.481 (0.008)    | 0.453 (0.007)    | 1 (0.016) |     0.48 | chelo, FalleN, KSCERATO, skullz, yuurih |
|            3 |     1029 | 2024-12-05 | Team Liquid     | L   | 0.007      | -            | -                | -                | -         |    -0.06 | chelo, FalleN, KSCERATO, skullz, yuurih |
|            2 |     1053 | 2024-12-05 | Team Vitality   | L   | 0.002      | -            | -                | -                | -         |    -0.00 | chelo, FalleN, KSCERATO, skullz, yuurih |
|            1 |     1061 | 2024-12-04 | Team Spirit     | W   | 0.001      | 1.000        | 1.000 (0.001)    | 0.634 (0.001)    | 1 (0.001) |     0.04 | chelo, FalleN, KSCERATO, skullz, yuurih |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,830.09)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-09 |      0.444 | $10,000.00     | $4,444.44       |
| 2024-12-15 |      0.069 | $20,000.00     | $1,385.65       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
