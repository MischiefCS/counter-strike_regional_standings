### Roster Details<br />
Team Name: KZG<br />
Roster: Estate, foggers, Hassie, Kras, Samuukxs<br />
Global Rank: [86](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_08_04.md)<br />
Regional Rank: [17]( ../../standings_asia_2025_08_04.md)<br />
<br />
Final Rank Value:  399.5<br />
<br />
Final Rank Value (399.5) = Starting Rank Value (400.6) + Head To Head Adjustments (-1.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.6
- 400 + ( ( 0.000 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 400.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |       31 | 2025-02-25 | Only One Word        | L   | 0.135      | -            | -                | -                | -         |    -2.12 | Estate, foggers, Hassie, Kras, Samuukxs |
|            6 |       36 | 2025-02-25 | MANTRA               | W   | 0.133      | 0.143        | 0.000 (0.000)    | 0.293 (0.006)    | 0 (0.000) |     2.10 | Estate, foggers, Hassie, Kras, Samuukxs |
|            5 |       46 | 2025-02-25 | SemperFi Esports     | L   | 0.129      | -            | -                | -                | -         |    -2.01 | Estate, foggers, Hassie, Kras, Samuukxs |
|            4 |       71 | 2025-02-23 | Justice For Tomorrow | W   | 0.122      | 0.143        | 0.000 (0.000)    | 0.195 (0.003)    | 0 (0.000) |     1.93 | Estate, foggers, Hassie, Kras, Samuukxs |
|            3 |      219 | 2025-02-15 | Housebets            | L   | 0.068      | -            | -                | -                | -         |    -1.07 | Estate, foggers, Hassie, Kras, Samuukxs |
|            2 |      220 | 2025-02-15 | DXA Esports          | W   | 0.068      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.07 | Estate, foggers, Hassie, Kras, Samuukxs |
|            1 |      256 | 2025-02-14 | Justice For Tomorrow | L   | 0.061      | -            | -                | -                | -         |    -0.96 | Estate, foggers, Hassie, Kras, Samuukxs |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
