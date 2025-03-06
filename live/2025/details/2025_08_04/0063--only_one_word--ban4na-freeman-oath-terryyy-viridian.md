### Roster Details<br />
Team Name: Only One Word<br />
Roster: BaN4na, Freeman, Oath, Terryyy, viridian<br />
Global Rank: [63](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_08_04.md)<br />
Regional Rank: [10]( ../../standings_asia_2025_08_04.md)<br />
<br />
Final Rank Value:  405.3<br />
<br />
Final Rank Value (405.3) = Starting Rank Value (401.3) + Head To Head Adjustments (4.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 401.3
- 400 + ( ( 0.000 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 401.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |       31 | 2025-02-25 | KZG                  | W   | 0.135      | 0.143        | 0.000 (0.000)    | 0.486 (0.009)    | 0 (0.000) |     2.12 | BaN4na, Freeman, Oath, Terryyy, viridian |
|            5 |       34 | 2025-02-25 | Vantage Esports      | W   | 0.134      | 0.143        | 0.000 (0.000)    | 0.363 (0.007)    | 0 (0.000) |     2.12 | BaN4na, Freeman, Oath, Terryyy, viridian |
|            4 |       52 | 2025-02-24 | Justice For Tomorrow | W   | 0.127      | 0.143        | 0.000 (0.000)    | 0.195 (0.004)    | 0 (0.000) |     2.01 | BaN4na, Freeman, Oath, Terryyy, viridian |
|            3 |       68 | 2025-02-24 | SemperFi Esports     | L   | 0.122      | -            | -                | -                | -         |    -1.91 | BaN4na, Freeman, Oath, Terryyy, viridian |
|            2 |      417 | 2025-02-08 | Shika                | L   | 0.021      | -            | -                | -                | -         |    -0.33 | BaN4na, neo, Oath, Terryyy, viridian     |
|            1 |      481 | 2025-02-07 | Gods Reign           | L   | 0.015      | -            | -                | -                | -         |    -0.00 | BaN4na, neo, Oath, Terryyy, viridian     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
