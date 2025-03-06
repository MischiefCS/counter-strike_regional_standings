### Roster Details<br />
Team Name: RED Canids<br />
Roster: coldzera, felps, HEN1, nyezin, venomzera<br />
Global Rank: [94](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_07_07.md)<br />
Regional Rank: [23]( ../../standings_americas_2025_07_07.md)<br />
<br />
Final Rank Value:  404.9<br />
<br />
Final Rank Value (404.9) = Starting Rank Value (400.6) + Head To Head Adjustments (4.3)<br />

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
- 400 + ( ( 0.000 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 400.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      165 | 2025-02-19 | Team Solid  | L   | 0.279      | -            | -                | -                | -         |    -1.37 | coldzera, felps, HEN1, nyezin, venomzera |
|            5 |      437 | 2025-02-08 | PaiN Gaming | L   | 0.205      | -            | -                | -                | -         |    -0.01 | coldzera, felps, HEN1, nyezin, venomzera |
|            4 |      485 | 2025-02-07 | Nitro.GG    | L   | 0.200      | -            | -                | -                | -         |    -3.22 | coldzera, felps, HEN1, nyezin, venomzera |
|            3 |      496 | 2025-02-07 | Elevate     | W   | 0.198      | 0.143        | 0.000 (0.000)    | 0.153 (0.004)    | 0 (0.000) |     3.09 | coldzera, felps, HEN1, nyezin, venomzera |
|            2 |      535 | 2025-02-05 | 9z Team     | W   | 0.186      | 0.143        | 0.000 (0.000)    | 0.073 (0.002)    | 0 (0.000) |     2.92 | coldzera, felps, HEN1, nyezin, venomzera |
|            1 |      549 | 2025-02-05 | Elevate     | W   | 0.185      | 0.143        | 0.000 (0.000)    | 0.153 (0.004)    | 0 (0.000) |     2.90 | coldzera, felps, HEN1, nyezin, venomzera |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
