### Roster Details<br />
Team Name: Gods Reign<br />
Roster: Bhavi, f1redup, Ph1NNN, R2B2, Rossi<br />
Global Rank: [9](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_08_04.md)<br />
Regional Rank: [2]( ../../standings_asia_2025_08_04.md)<br />
<br />
Final Rank Value:  1467.4<br />
<br />
Final Rank Value (1467.4) = Starting Rank Value (1471.4) + Head To Head Adjustments (-4.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.427[<sup>1</sup>](#table2)
- Bounty Collected: 0.206[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.409<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1471.4
- 400 + ( ( 0.409 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 1471.4


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
|            8 |        3 | 2025-03-01 | Victores Sumus          | W   | 0.156      | 0.143        | 0.027 (0.001)    | 0.458 (0.010)    | 1 (0.156) |     2.22 | Bhavi, f1redup, Ph1NNN, R2B2, Rossi |
|            7 |       11 | 2025-02-27 | Flashback Gaming        | W   | 0.148      | 0.143        | 0.009 (0.000)    | 0.214 (0.005)    | 1 (0.148) |     0.39 | Bhavi, f1redup, Ph1NNN, R2B2, Rossi |
|            6 |       15 | 2025-02-27 | Victores Sumus          | W   | 0.143      | 0.143        | 0.027 (0.001)    | 0.458 (0.009)    | 1 (0.143) |     2.06 | Bhavi, f1redup, Ph1NNN, R2B2, Rossi |
|            5 |       53 | 2025-02-24 | ATOX Esports            | L   | 0.127      | -            | -                | -                | -         |    -3.99 | Bhavi, f1redup, Ph1NNN, R2B2, Rossi |
|            4 |       72 | 2025-02-23 | Nomads (Mongolian team) | L   | 0.121      | -            | -                | -                | -         |    -3.81 | Bhavi, f1redup, Ph1NNN, R2B2, Rossi |
|            3 |      379 | 2025-02-09 | Unsettled Resentment    | L   | 0.029      | -            | -                | -                | -         |    -0.90 | Bhavi, f1redup, Ph1NNN, R2B2, Rossi |
|            2 |      413 | 2025-02-08 | Unsettled Resentment    | W   | 0.022      | 0.143        | 0.000 (0.000)    | 0.279 (0.001)    | 0 (0.000) |     0.00 | Bhavi, f1redup, Ph1NNN, R2B2, Rossi |
|            1 |      481 | 2025-02-07 | Only One Word           | W   | 0.015      | 0.143        | 0.000 (0.000)    | 0.598 (0.001)    | 0 (0.000) |     0.00 | Bhavi, f1redup, Ph1NNN, R2B2, Rossi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($446.51)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-01 |      0.156 | $2,863.20      | $446.51         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
