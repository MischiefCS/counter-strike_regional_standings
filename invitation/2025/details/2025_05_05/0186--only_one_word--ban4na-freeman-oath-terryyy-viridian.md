### Roster Details<br />
Team Name: Only One Word<br />
Roster: BaN4na, Freeman, Oath, Terryyy, viridian<br />
Global Rank: [186](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_05_05.md)<br />
Regional Rank: [24]( ../../standings_asia_2025_05_05.md)<br />
<br />
Final Rank Value:  423.4<br />
<br />
Final Rank Value (423.4) = Starting Rank Value (403.5) + Head To Head Adjustments (19.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.002<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 403.5
- 400 + ( ( 0.002 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 403.5


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
|            6 |       31 | 2025-02-25 | KZG                  | W   | 0.742      | 0.143        | 0.000 (0.000)    | 0.238 (0.025)    | 0 (0.000) |    11.26 | BaN4na, Freeman, Oath, Terryyy, viridian |
|            5 |       34 | 2025-02-25 | Vantage Esports      | W   | 0.741      | 0.143        | 0.000 (0.000)    | 0.229 (0.024)    | 0 (0.000) |    12.19 | BaN4na, Freeman, Oath, Terryyy, viridian |
|            4 |       52 | 2025-02-24 | Justice For Tomorrow | W   | 0.734      | 0.143        | 0.000 (0.000)    | 0.149 (0.016)    | 0 (0.000) |    11.78 | BaN4na, Freeman, Oath, Terryyy, viridian |
|            3 |       68 | 2025-02-24 | SemperFi Esports     | L   | 0.729      | -            | -                | -                | -         |    -7.25 | BaN4na, Freeman, Oath, Terryyy, viridian |
|            2 |      417 | 2025-02-08 | Shika                | L   | 0.628      | -            | -                | -                | -         |    -7.38 | BaN4na, neo, Oath, Terryyy, viridian     |
|            1 |      481 | 2025-02-07 | Gods Reign           | L   | 0.621      | -            | -                | -                | -         |    -0.71 | BaN4na, neo, Oath, Terryyy, viridian     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
