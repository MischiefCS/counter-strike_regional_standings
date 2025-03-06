### Roster Details<br />
Team Name: FaZe Clan<br />
Roster: broky, EliGE, frozen, karrigan, rain<br />
Global Rank: [6](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [6]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  1886.9<br />
<br />
Final Rank Value (1886.9) = Starting Rank Value (1905.9) + Head To Head Adjustments (-19.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.908[<sup>1</sup>](#table2)
- Bounty Collected: 0.558[<sup>2</sup>](#table1)
- Opponent Network: 0.134[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.650<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1905.9
- 400 + ( ( 0.650 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 1905.9


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
|           20 |       98 | 2025-02-23 | Astralis      | L   | 0.537      | -            | -                | -                | -         |    -8.75 | broky, EliGE, frozen, karrigan, rain |
|           19 |      106 | 2025-02-22 | Team Falcons  | L   | 0.532      | -            | -                | -                | -         |    -8.35 | broky, EliGE, frozen, karrigan, rain |
|           18 |      128 | 2025-02-21 | SAW           | W   | 0.525      | 1.000        | 0.396 (0.208)    | 0.347 (0.182)    | 1 (0.525) |     0.63 | broky, EliGE, frozen, karrigan, rain |
|           17 |      211 | 2025-02-16 | MOUZ          | W   | 0.490      | 1.000        | 1.000 (0.490)    | 0.567 (0.278)    | 1 (0.490) |     9.18 | broky, EliGE, frozen, karrigan, rain |
|           16 |      245 | 2025-02-15 | Eternal Fire  | W   | 0.484      | 1.000        | 0.927 (0.448)    | 0.724 (0.350)    | 1 (0.484) |     8.90 | broky, EliGE, frozen, karrigan, rain |
|           15 |      278 | 2025-02-14 | SAW           | W   | 0.476      | 1.000        | 0.396 (0.188)    | 0.347 (0.165)    | 1 (0.476) |     0.59 | broky, EliGE, frozen, karrigan, rain |
|           14 |      578 | 2025-02-04 | Eternal Fire  | L   | 0.411      | -            | -                | -                | -         |    -5.28 | broky, EliGE, frozen, karrigan, rain |
|           13 |      586 | 2025-02-03 | G2 Esports    | W   | 0.405      | 1.000        | 0.214 (0.087)    | 0.245 (0.099)    | 1 (0.405) |     0.29 | broky, EliGE, frozen, karrigan, rain |
|           12 |      597 | 2025-02-02 | Team Vitality | L   | 0.398      | -            | -                | -                | -         |    -8.26 | broky, EliGE, frozen, karrigan, rain |
|           11 |      614 | 2025-02-01 | BIG           | W   | 0.391      | 1.000        | 0.295 (0.115)    | 0.449 (0.175)    | 1 (0.391) |     0.59 | broky, EliGE, frozen, karrigan, rain |
|           10 |      674 | 2025-01-18 | PaiN Gaming   | L   | 0.297      | -            | -                | -                | -         |    -7.94 | broky, EliGE, frozen, karrigan, rain |
|            9 |      681 | 2025-01-16 | M80           | W   | 0.284      | 0.363        | -                | 0.422 (0.044)    | -         |     0.00 | broky, EliGE, frozen, karrigan, rain |
|            8 |      857 | 2024-12-15 | Team Spirit   | L   | 0.069      | -            | -                | -                | -         |    -0.91 | broky, frozen, karrigan, rain, ropz  |
|            7 |      880 | 2024-12-14 | G2 Esports    | W   | 0.063      | 1.000        | 0.214 (0.013)    | 0.245 (0.015)    | 1 (0.063) |     0.04 | broky, frozen, karrigan, rain, ropz  |
|            6 |      903 | 2024-12-13 | Team Vitality | W   | 0.056      | 1.000        | 1.000 (0.056)    | 0.431 (0.024)    | 1 (0.056) |     0.58 | broky, frozen, karrigan, rain, ropz  |
|            5 |      967 | 2024-12-08 | FURIA         | W   | 0.023      | 1.000        | 0.066 (0.001)    | -                | 1 (0.023) |     0.01 | broky, frozen, karrigan, rain, ropz  |
|            4 |     1003 | 2024-12-06 | G2 Esports    | L   | 0.014      | -            | -                | -                | -         |    -0.44 | broky, frozen, karrigan, rain, ropz  |
|            3 |     1027 | 2024-12-05 | MOUZ          | W   | 0.008      | 1.000        | 1.000 (0.008)    | 0.567 (0.004)    | 1 (0.008) |     0.15 | broky, frozen, karrigan, rain, ropz  |
|            2 |     1039 | 2024-12-05 | Team Falcons  | L   | 0.003      | -            | -                | -                | -         |    -0.05 | broky, frozen, karrigan, rain, ropz  |
|            1 |     1058 | 2024-12-04 | Wildcard      | W   | 0.001      | -            | -                | -                | -         |     0.00 | broky, frozen, karrigan, rain, ropz  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($69,544.79)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.79) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      0.538 | $87,500.00     | $47,100.12      |
| 2025-02-09 |      0.444 | $24,000.00     | $10,666.67      |
| 2024-12-15 |      0.069 | $170,000.00    | $11,778.01      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
