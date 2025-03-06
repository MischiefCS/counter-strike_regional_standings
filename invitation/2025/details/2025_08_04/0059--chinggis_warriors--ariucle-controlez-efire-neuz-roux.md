### Roster Details<br />
Team Name: Chinggis Warriors<br />
Roster: ariucle, controlez, efire, NEUZ, ROUX<br />
Global Rank: [59](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_08_04.md)<br />
Regional Rank: [7]( ../../standings_asia_2025_08_04.md)<br />
<br />
Final Rank Value:  407.6<br />
<br />
Final Rank Value (407.6) = Starting Rank Value (401.0) + Head To Head Adjustments (6.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 401.0
- 400 + ( ( 0.000 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 401.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |       29 | 2025-02-26 | HOTU                        | W   | 0.136      | 0.143        | 0.000 (0.000)    | 0.376 (0.007)    | 0 (0.000) |     2.14 | ariucle, controlez, efire, NEUZ, ROUX |
|            7 |       42 | 2025-02-25 | The Huns Esports            | W   | 0.130      | 0.143        | 0.000 (0.000)    | 0.368 (0.007)    | 0 (0.000) |     2.04 | ariucle, controlez, efire, NEUZ, ROUX |
|            6 |       63 | 2025-02-24 | The QUBE Esports            | W   | 0.123      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.93 | ariucle, controlez, efire, NEUZ, ROUX |
|            5 |      320 | 2025-02-11 | The Huns Esports            | L   | 0.041      | -            | -                | -                | -         |    -0.65 | ariucle, controlez, efire, NEUZ, ROUX |
|            4 |      380 | 2025-02-09 | Eruption                    | W   | 0.029      | 0.143        | 0.000 (0.000)    | 0.442 (0.002)    | 0 (0.000) |     0.45 | ariucle, controlez, efire, NEUZ, ROUX |
|            3 |      382 | 2025-02-09 | Believe.                    | W   | 0.028      | 0.143        | 0.000 (0.000)    | 0.022 (0.000)    | 0 (0.000) |     0.44 | ariucle, controlez, efire, NEUZ, ROUX |
|            2 |      415 | 2025-02-08 | Mindfreak (Australian team) | W   | 0.021      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.33 | ariucle, controlez, efire, NEUZ, ROUX |
|            1 |      507 | 2025-02-06 | Eruption                    | L   | 0.009      | -            | -                | -                | -         |    -0.14 | ariucle, controlez, efire, NEUZ, ROUX |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
