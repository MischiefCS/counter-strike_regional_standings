### Roster Details<br />
Team Name: FaZe Clan<br />
Roster: broky, EliGE, frozen, karrigan, rain<br />
Global Rank: [6](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [6]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  1859.1<br />
<br />
Final Rank Value (1859.1) = Starting Rank Value (1862.6) + Head To Head Adjustments (-3.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.841[<sup>1</sup>](#table2)
- Bounty Collected: 0.467[<sup>2</sup>](#table1)
- Opponent Network: 0.064[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.593<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1862.6
- 400 + ( ( 0.593 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 1862.6


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
|           12 |       98 | 2025-02-23 | Astralis      | L   | 0.304      | -            | -                | -                | -         |    -3.92 | broky, EliGE, frozen, karrigan, rain |
|           11 |      106 | 2025-02-22 | Team Falcons  | L   | 0.299      | -            | -                | -                | -         |    -3.22 | broky, EliGE, frozen, karrigan, rain |
|           10 |      128 | 2025-02-21 | SAW           | W   | 0.292      | 1.000        | 0.399 (0.116)    | 0.384 (0.112)    | 1 (0.292) |     0.68 | broky, EliGE, frozen, karrigan, rain |
|            9 |      211 | 2025-02-16 | MOUZ          | W   | 0.257      | 1.000        | 1.000 (0.257)    | 0.651 (0.167)    | 1 (0.257) |     5.43 | broky, EliGE, frozen, karrigan, rain |
|            8 |      245 | 2025-02-15 | Eternal Fire  | W   | 0.250      | 1.000        | 0.765 (0.191)    | 0.649 (0.162)    | 1 (0.250) |     4.28 | broky, EliGE, frozen, karrigan, rain |
|            7 |      278 | 2025-02-14 | SAW           | W   | 0.243      | 1.000        | 0.399 (0.097)    | 0.384 (0.093)    | 1 (0.243) |     0.58 | broky, EliGE, frozen, karrigan, rain |
|            6 |      578 | 2025-02-04 | Eternal Fire  | L   | 0.177      | -            | -                | -                | -         |    -2.55 | broky, EliGE, frozen, karrigan, rain |
|            5 |      586 | 2025-02-03 | G2 Esports    | W   | 0.172      | 1.000        | 0.111 (0.019)    | 0.155 (0.027)    | 1 (0.172) |     0.07 | broky, EliGE, frozen, karrigan, rain |
|            4 |      597 | 2025-02-02 | Team Vitality | L   | 0.165      | -            | -                | -                | -         |    -3.45 | broky, EliGE, frozen, karrigan, rain |
|            3 |      614 | 2025-02-01 | BIG           | W   | 0.158      | 1.000        | 0.252 (0.040)    | 0.421 (0.066)    | 1 (0.158) |     0.29 | broky, EliGE, frozen, karrigan, rain |
|            2 |      674 | 2025-01-18 | PaiN Gaming   | L   | 0.064      | -            | -                | -                | -         |    -1.66 | broky, EliGE, frozen, karrigan, rain |
|            1 |      681 | 2025-01-16 | M80           | W   | 0.051      | 0.363        | 0.000 (0.000)    | 0.455 (0.008)    | 0 (0.000) |     0.00 | broky, EliGE, frozen, karrigan, rain |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($31,750.12)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.65) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      0.305 | $87,500.00     | $26,683.45      |
| 2025-02-09 |      0.211 | $24,000.00     | $5,066.67       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
