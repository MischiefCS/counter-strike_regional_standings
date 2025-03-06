### Roster Details<br />
Team Name: SemperFi Esports<br />
Roster: keen, SaVage, shadiy, Valiance, vision<br />
Global Rank: [60](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_08_04.md)<br />
Regional Rank: [8]( ../../standings_asia_2025_08_04.md)<br />
<br />
Final Rank Value:  407.4<br />
<br />
Final Rank Value (407.4) = Starting Rank Value (401.4) + Head To Head Adjustments (6.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.001<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 401.4
- 400 + ( ( 0.001 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 401.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |       46 | 2025-02-25 | KZG                       | W   | 0.129      | 0.143        | 0.000 (0.000)    | 0.486 (0.009)    | 0 (0.000) |     2.01 | keen, SaVage, shadiy, Valiance, vision |
|            6 |       68 | 2025-02-24 | Only One Word             | W   | 0.122      | 0.143        | 0.000 (0.000)    | 0.598 (0.010)    | 0 (0.000) |     1.91 | keen, SaVage, shadiy, Valiance, vision |
|            5 |      253 | 2025-02-14 | Justice For Tomorrow      | W   | 0.062      | 0.143        | 0.000 (0.000)    | 0.195 (0.002)    | 0 (0.000) |     0.97 | keen, SaVage, shadiy, Valiance, vision |
|            4 |      255 | 2025-02-14 | DXA Esports               | W   | 0.061      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.96 | keen, SaVage, shadiy, Valiance, vision |
|            3 |      378 | 2025-02-10 | Rooster                   | L   | 0.029      | -            | -                | -                | -         |    -0.46 | keen, SaVage, shadiy, Valiance, vision |
|            2 |      412 | 2025-02-08 | Just Swing (Chinese team) | W   | 0.022      | 0.143        | 0.000 (0.000)    | 0.023 (0.000)    | 0 (0.000) |     0.34 | keen, SaVage, shadiy, Valiance, vision |
|            1 |      471 | 2025-02-08 | Rooster                   | W   | 0.016      | 0.143        | 0.000 (0.000)    | 0.117 (0.000)    | 0 (0.000) |     0.25 | keen, SaVage, shadiy, Valiance, vision |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
