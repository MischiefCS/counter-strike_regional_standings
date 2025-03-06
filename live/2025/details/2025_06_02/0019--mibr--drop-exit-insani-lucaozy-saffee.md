### Roster Details<br />
Team Name: MIBR<br />
Roster: drop, exit, insani, Lucaozy, saffee<br />
Global Rank: [19](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_06_02.md)<br />
Regional Rank: [4]( ../../standings_americas_2025_06_02.md)<br />
<br />
Final Rank Value:  1143.5<br />
<br />
Final Rank Value (1143.5) = Starting Rank Value (1158.7) + Head To Head Adjustments (-15.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.551[<sup>1</sup>](#table2)
- Bounty Collected: 0.420[<sup>2</sup>](#table1)
- Opponent Network: 0.044[<sup>2</sup>](#table1)
- LAN Wins: 0.294[<sup>2</sup>](#table1)

The average of these factors is 0.327<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1158.7
- 400 + ( ( 0.327 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 1158.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |      199 | 2025-02-17 | Astralis         | L   | 0.497      | -            | -                | -                | -         |    -0.23 | drop, exit, insani, Lucaozy, saffee |
|           15 |      216 | 2025-02-16 | 3DMAX            | L   | 0.489      | -            | -                | -                | -         |    -1.90 | drop, exit, insani, Lucaozy, saffee |
|           14 |      244 | 2025-02-15 | Imperial Female  | W   | 0.484      | 1.000        | 0.089 (0.043)    | 0.000 (0.000)    | 1 (0.484) |     0.98 | drop, exit, insani, Lucaozy, saffee |
|           13 |      272 | 2025-02-14 | Wildcard         | L   | 0.477      | -            | -                | -                | -         |    -7.54 | drop, exit, insani, Lucaozy, saffee |
|           12 |      388 | 2025-02-09 | Imperial Esports | L   | 0.446      | -            | -                | -                | -         |   -11.54 | drop, exit, insani, Lucaozy, saffee |
|           11 |      400 | 2025-02-09 | Sharks Esports   | W   | 0.445      | 0.143        | 0.027 (0.002)    | 0.464 (0.029)    | 0 (0.000) |     1.71 | drop, exit, insani, Lucaozy, saffee |
|           10 |      448 | 2025-02-08 | Legacy           | W   | 0.438      | 0.143        | 0.027 (0.002)    | 0.668 (0.042)    | 0 (0.000) |     1.58 | drop, exit, insani, Lucaozy, saffee |
|            9 |      622 | 2025-01-31 | Virtus.pro       | L   | 0.384      | -            | -                | -                | -         |    -0.77 | drop, exit, insani, Lucaozy, saffee |
|            8 |      628 | 2025-01-30 | 3DMAX            | L   | 0.378      | -            | -                | -                | -         |    -1.71 | drop, exit, insani, Lucaozy, saffee |
|            7 |      640 | 2025-01-29 | Astralis         | W   | 0.370      | 1.000        | 1.000 (0.370)    | 1.000 (0.370)    | 1 (0.370) |    11.53 | drop, exit, insani, Lucaozy, saffee |
|            6 |      691 | 2025-01-14 | FlyQuest         | L   | 0.270      | -            | -                | -                | -         |    -7.29 | drop, exit, insani, Lucaozy, saffee |
|            5 |      972 | 2024-12-07 | MOUZ             | L   | 0.021      | -            | -                | -                | -         |    -0.01 | drop, exit, insani, Lucaozy, saffee |
|            4 |      999 | 2024-12-06 | Team Liquid      | L   | 0.015      | -            | -                | -                | -         |    -0.20 | drop, exit, insani, Lucaozy, saffee |
|            3 |     1025 | 2024-12-05 | Team Vitality    | L   | 0.008      | -            | -                | -                | -         |    -0.01 | drop, exit, insani, Lucaozy, saffee |
|            2 |     1044 | 2024-12-05 | Natus Vincere    | W   | 0.003      | 1.000        | 0.510 (0.002)    | 0.390 (0.001)    | 1 (0.003) |     0.08 | drop, exit, insani, Lucaozy, saffee |
|            1 |     1055 | 2024-12-04 | 3DMAX            | W   | 0.002      | 1.000        | 0.288 (0.000)    | 0.480 (0.001)    | 1 (0.002) |     0.05 | drop, exit, insani, Lucaozy, saffee |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,478.53)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.15) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      0.538 | $18,750.00     | $10,092.88      |
| 2025-02-09 |      0.444 | $4,500.00      | $2,000.00       |
| 2024-12-15 |      0.069 | $20,000.00     | $1,385.65       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
