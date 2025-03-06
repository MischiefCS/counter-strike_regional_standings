### Roster Details<br />
Team Name: Gods Reign<br />
Roster: Bhavi, f1redup, Ph1NNN, R2B2, Rossi<br />
Global Rank: [20](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_06_02.md)<br />
Regional Rank: [3]( ../../standings_asia_2025_06_02.md)<br />
<br />
Final Rank Value:  1057.6<br />
<br />
Final Rank Value (1057.6) = Starting Rank Value (1082.3) + Head To Head Adjustments (-24.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.369[<sup>1</sup>](#table2)
- Bounty Collected: 0.216[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.585[<sup>2</sup>](#table1)

The average of these factors is 0.294<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1082.3
- 400 + ( ( 0.294 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 1082.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |        3 | 2025-03-01 | Victores Sumus          | W   | 0.576      | 0.143        | 0.011 (0.001)    | 0.208 (0.017)    | 1 (0.576) |     6.16 | Bhavi, f1redup, Ph1NNN, R2B2, Rossi |
|            9 |       11 | 2025-02-27 | Flashback Gaming        | W   | 0.568      | 0.143        | 0.004 (0.000)    | 0.102 (0.008)    | 1 (0.568) |     3.39 | Bhavi, f1redup, Ph1NNN, R2B2, Rossi |
|            8 |       15 | 2025-02-27 | Victores Sumus          | W   | 0.563      | 0.143        | 0.011 (0.001)    | 0.208 (0.017)    | 1 (0.563) |     6.21 | Bhavi, f1redup, Ph1NNN, R2B2, Rossi |
|            7 |       53 | 2025-02-24 | ATOX Esports            | L   | 0.547      | -            | -                | -                | -         |   -12.22 | Bhavi, f1redup, Ph1NNN, R2B2, Rossi |
|            6 |       72 | 2025-02-23 | Nomads (Mongolian team) | L   | 0.541      | -            | -                | -                | -         |   -16.29 | Bhavi, f1redup, Ph1NNN, R2B2, Rossi |
|            5 |      379 | 2025-02-09 | Unsettled Resentment    | L   | 0.449      | -            | -                | -                | -         |   -13.51 | Bhavi, f1redup, Ph1NNN, R2B2, Rossi |
|            4 |      413 | 2025-02-08 | Unsettled Resentment    | W   | 0.442      | 0.143        | 0.000 (0.000)    | 0.263 (0.017)    | 0 (0.000) |     0.59 | Bhavi, f1redup, Ph1NNN, R2B2, Rossi |
|            3 |      481 | 2025-02-07 | Only One Word           | W   | 0.435      | 0.143        | 0.000 (0.000)    | 0.301 (0.019)    | 0 (0.000) |     0.30 | Bhavi, f1redup, Ph1NNN, R2B2, Rossi |
|            2 |      883 | 2024-12-14 | Big W                   | W   | 0.062      | 0.262        | 0.004 (0.000)    | 0.011 (0.000)    | 0 (0.000) |     0.11 | Bhavi, f1redup, Ph1NNN, R2B2, Rossi |
|            1 |      886 | 2024-12-13 | Victores Sumus          | W   | 0.062      | 0.262        | 0.011 (0.000)    | 0.208 (0.003)    | 0 (0.000) |     0.59 | Bhavi, f1redup, Ph1NNN, R2B2, Rossi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,711.37)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-01 |      0.576 | $2,863.20      | $1,649.06       |
| 2024-12-14 |      0.062 | $1,000.00      | $62.31          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
