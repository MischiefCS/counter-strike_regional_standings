### Roster Details<br />
Team Name: FaZe Clan<br />
Roster: broky, EliGE, frozen, karrigan, rain<br />
Global Rank: [6](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [5]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  1856.4<br />
<br />
Final Rank Value (1856.4) = Starting Rank Value (1909.4) + Head To Head Adjustments (-53.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.908[<sup>1</sup>](#table2)
- Bounty Collected: 0.703[<sup>2</sup>](#table1)
- Opponent Network: 0.310[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.730<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1909.4
- 400 + ( ( 0.730 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 1909.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           28 |       98 | 2025-02-23 | Astralis      | L   | 0.910      | -            | -                | -                | -         |   -19.39 | broky, EliGE, frozen, karrigan, rain |
|           27 |      106 | 2025-02-22 | Team Falcons  | L   | 0.905      | -            | -                | -                | -         |   -14.60 | broky, EliGE, frozen, karrigan, rain |
|           26 |      128 | 2025-02-21 | SAW           | W   | 0.898      | 1.000        | 0.290 (0.261)    | 0.341 (0.306)    | 1 (0.898) |     0.66 | broky, EliGE, frozen, karrigan, rain |
|           25 |      211 | 2025-02-16 | MOUZ          | W   | 0.864      | 1.000        | 1.000 (0.864)    | 0.571 (0.493)    | 1 (0.864) |    14.77 | broky, EliGE, frozen, karrigan, rain |
|           24 |      245 | 2025-02-15 | Eternal Fire  | W   | 0.857      | 1.000        | 0.672 (0.576)    | 0.648 (0.555)    | 1 (0.857) |    13.61 | broky, EliGE, frozen, karrigan, rain |
|           23 |      278 | 2025-02-14 | SAW           | W   | 0.850      | 1.000        | 0.290 (0.247)    | 0.341 (0.289)    | 1 (0.850) |     0.60 | broky, EliGE, frozen, karrigan, rain |
|           22 |      578 | 2025-02-04 | Eternal Fire  | L   | 0.784      | -            | -                | -                | -         |   -11.91 | broky, EliGE, frozen, karrigan, rain |
|           21 |      586 | 2025-02-03 | G2 Esports    | W   | 0.779      | 1.000        | 0.631 (0.491)    | 0.384 (0.299)    | 1 (0.779) |     4.92 | broky, EliGE, frozen, karrigan, rain |
|           20 |      597 | 2025-02-02 | Team Vitality | L   | 0.772      | -            | -                | -                | -         |   -12.92 | broky, EliGE, frozen, karrigan, rain |
|           19 |      614 | 2025-02-01 | BIG           | W   | 0.764      | 1.000        | 0.239 (0.183)    | 0.512 (0.391)    | 1 (0.764) |     1.56 | broky, EliGE, frozen, karrigan, rain |
|           18 |      674 | 2025-01-18 | PaiN Gaming   | L   | 0.671      | -            | -                | -                | -         |   -17.34 | broky, EliGE, frozen, karrigan, rain |
|           17 |      681 | 2025-01-16 | M80           | W   | 0.658      | -            | -                | -                | -         |     0.04 | broky, EliGE, frozen, karrigan, rain |
|           16 |      857 | 2024-12-15 | Team Spirit   | L   | 0.443      | -            | -                | -                | -         |    -5.87 | broky, frozen, karrigan, rain, ropz  |
|           15 |      880 | 2024-12-14 | G2 Esports    | W   | 0.436      | 1.000        | 0.631 (0.275)    | 0.384 (0.168)    | 1 (0.436) |     2.35 | broky, frozen, karrigan, rain, ropz  |
|           14 |      903 | 2024-12-13 | Team Vitality | W   | 0.430      | 1.000        | 1.000 (0.430)    | 0.509 (0.218)    | 1 (0.430) |     6.03 | broky, frozen, karrigan, rain, ropz  |
|           13 |      967 | 2024-12-08 | FURIA         | W   | 0.396      | -            | -                | -                | 1 (0.396) |     0.47 | broky, frozen, karrigan, rain, ropz  |
|           12 |     1003 | 2024-12-06 | G2 Esports    | L   | 0.388      | -            | -                | -                | -         |   -10.31 | broky, frozen, karrigan, rain, ropz  |
|           11 |     1027 | 2024-12-05 | MOUZ          | W   | 0.381      | 1.000        | 1.000 (0.381)    | 0.571 (0.218)    | 1 (0.381) |     7.49 | broky, frozen, karrigan, rain, ropz  |
|           10 |     1039 | 2024-12-05 | Team Falcons  | L   | 0.377      | -            | -                | -                | -         |    -5.81 | broky, frozen, karrigan, rain, ropz  |
|            9 |     1058 | 2024-12-04 | Wildcard      | W   | 0.375      | 1.000        | 0.189 (0.071)    | 0.425 (0.159)    | -         |     0.34 | broky, frozen, karrigan, rain, ropz  |
|            8 |     1374 | 2024-11-19 | Cloud9        | W   | 0.270      | -            | -                | -                | -         |     0.02 | broky, frozen, karrigan, rain, ropz  |
|            7 |     1376 | 2024-11-19 | Fnatic        | W   | 0.269      | -            | -                | -                | -         |     0.04 | broky, frozen, karrigan, rain, ropz  |
|            6 |     1387 | 2024-11-18 | Team Vitality | L   | 0.263      | -            | -                | -                | -         |    -4.77 | broky, frozen, karrigan, rain, ropz  |
|            5 |     1402 | 2024-11-17 | Team Falcons  | W   | 0.257      | -            | -                | -                | -         |     0.00 | broky, frozen, karrigan, rain, ropz  |
|            4 |     1417 | 2024-11-16 | Cloud9        | W   | 0.255      | -            | -                | -                | -         |     0.02 | broky, frozen, karrigan, rain, ropz  |
|            3 |     1736 | 2024-11-01 | Team Spirit   | L   | 0.150      | -            | -                | -                | -         |    -1.95 | broky, frozen, karrigan, rain, ropz  |
|            2 |     1758 | 2024-10-30 | Natus Vincere | W   | 0.142      | -            | -                | -                | -         |     0.57 | broky, frozen, karrigan, rain, ropz  |
|            1 |     1775 | 2024-10-30 | MOUZ          | L   | 0.136      | -            | -                | -                | -         |    -1.61 | broky, frozen, karrigan, rain, ropz  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($178,700.62)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.79) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      0.912 | $87,500.00     | $79,766.78      |
| 2025-02-09 |      0.818 | $24,000.00     | $19,626.67      |
| 2024-12-15 |      0.443 | $170,000.00    | $75,244.68      |
| 2024-11-03 |      0.163 | $25,000.00     | $4,062.50       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
