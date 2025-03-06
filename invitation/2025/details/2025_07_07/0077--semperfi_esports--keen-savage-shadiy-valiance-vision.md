### Roster Details<br />
Team Name: SemperFi Esports<br />
Roster: keen, SaVage, shadiy, Valiance, vision<br />
Global Rank: [77](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_07_07.md)<br />
Regional Rank: [8]( ../../standings_asia_2025_07_07.md)<br />
<br />
Final Rank Value:  423.1<br />
<br />
Final Rank Value (423.1) = Starting Rank Value (403.0) + Head To Head Adjustments (20.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.001<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 403.0
- 400 + ( ( 0.001 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 403.0


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
|            7 |       46 | 2025-02-25 | KZG                       | W   | 0.316      | 0.143        | 0.000 (0.000)    | 0.348 (0.016)    | 0 (0.000) |     4.73 | keen, SaVage, shadiy, Valiance, vision |
|            6 |       68 | 2025-02-24 | Only One Word             | W   | 0.309      | 0.143        | 0.000 (0.000)    | 0.377 (0.017)    | 0 (0.000) |     4.65 | keen, SaVage, shadiy, Valiance, vision |
|            5 |      253 | 2025-02-14 | Justice For Tomorrow      | W   | 0.249      | 0.143        | 0.000 (0.000)    | 0.198 (0.007)    | 0 (0.000) |     3.85 | keen, SaVage, shadiy, Valiance, vision |
|            4 |      255 | 2025-02-14 | DXA Esports               | W   | 0.248      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.83 | keen, SaVage, shadiy, Valiance, vision |
|            3 |      378 | 2025-02-10 | Rooster                   | L   | 0.216      | -            | -                | -                | -         |    -3.43 | keen, SaVage, shadiy, Valiance, vision |
|            2 |      412 | 2025-02-08 | Just Swing (Chinese team) | W   | 0.209      | 0.143        | 0.000 (0.000)    | 0.080 (0.002)    | 0 (0.000) |     3.25 | keen, SaVage, shadiy, Valiance, vision |
|            1 |      471 | 2025-02-08 | Rooster                   | W   | 0.203      | 0.143        | 0.000 (0.000)    | 0.251 (0.007)    | 0 (0.000) |     3.17 | keen, SaVage, shadiy, Valiance, vision |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
