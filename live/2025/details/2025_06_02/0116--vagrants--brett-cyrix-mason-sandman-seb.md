### Roster Details<br />
Team Name: Vagrants<br />
Roster: brett, Cyrix, mason, Sandman, Seb<br />
Global Rank: [116](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_06_02.md)<br />
Regional Rank: [30]( ../../standings_americas_2025_06_02.md)<br />
<br />
Final Rank Value:  503.8<br />
<br />
Final Rank Value (503.8) = Starting Rank Value (497.8) + Head To Head Adjustments (5.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.167[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.042<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 497.8
- 400 + ( ( 0.042 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 497.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      352 | 2025-02-10 | Immigrants Peek | L   | 0.453      | -            | -                | -                | -         |    -4.89 | brett, Cyrix, mason, Sandman, Seb |
|            4 |      393 | 2025-02-09 | Alter Iron Club | W   | 0.446      | 0.143        | 0.001 (0.000)    | 0.113 (0.007)    | 0 (0.000) |     9.52 | brett, Cyrix, mason, Sandman, Seb |
|            3 |      422 | 2025-02-08 | Nouns Esports   | L   | 0.440      | -            | -                | -                | -         |    -6.83 | brett, Cyrix, mason, Sandman, Seb |
|            2 |      441 | 2025-02-08 | Immigrants Peek | W   | 0.439      | 0.143        | 0.000 (0.000)    | 0.246 (0.015)    | 0 (0.000) |     9.16 | brett, Cyrix, mason, Sandman, Seb |
|            1 |      862 | 2024-12-14 | Nouns Esports   | L   | 0.066      | -            | -                | -                | -         |    -1.02 | Cyrix, mason, micro, Sandman, Seb |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
