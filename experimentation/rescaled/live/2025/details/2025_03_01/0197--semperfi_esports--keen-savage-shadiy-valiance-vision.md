### Roster Details<br />
Team Name: SemperFi Esports<br />
Roster: keen, SaVage, shadiy, Valiance, vision<br />
Global Rank: [197](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [26]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  629.4<br />
<br />
Final Rank Value (629.4) = Starting Rank Value (531.0) + Head To Head Adjustments (98.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.231[<sup>2</sup>](#table1)
- Opponent Network: 0.045[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.069<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 531.0
- 400 + ( ( 0.069 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 531.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |       46 | 2025-02-25 | KZG                         | W   | 1.000      | 0.388        | 0.001 (0.000)    | 0.211 (0.082)    | 0 (0.000) |    14.45 | keen, SaVage, shadiy, Valiance, vision |
|            9 |       68 | 2025-02-24 | Only One Word               | W   | 1.000      | 0.387        | 0.001 (0.000)    | 0.233 (0.090)    | 0 (0.000) |    15.13 | keen, SaVage, shadiy, Valiance, vision |
|            8 |      253 | 2025-02-14 | Justice For Tomorrow        | W   | 1.000      | 0.310        | 0.000 (0.000)    | 0.120 (0.037)    | 0 (0.000) |    11.96 | keen, SaVage, shadiy, Valiance, vision |
|            7 |      255 | 2025-02-14 | DXA Esports                 | W   | 1.000      | 0.310        | 0.000 (0.000)    | 0.035 (0.011)    | 0 (0.000) |    15.82 | keen, SaVage, shadiy, Valiance, vision |
|            6 |      378 | 2025-02-10 | Rooster                     | L   | 1.000      | -            | -                | -                | -         |   -12.09 | keen, SaVage, shadiy, Valiance, vision |
|            5 |      412 | 2025-02-08 | Just Swing (Chinese team)   | W   | 1.000      | 0.512        | 0.004 (0.002)    | 0.193 (0.099)    | 0 (0.000) |    20.84 | keen, SaVage, shadiy, Valiance, vision |
|            4 |      471 | 2025-02-08 | Rooster                     | W   | 1.000      | 0.511        | 0.003 (0.002)    | 0.219 (0.112)    | 0 (0.000) |    19.63 | keen, SaVage, shadiy, Valiance, vision |
|            3 |     2164 | 2024-10-05 | Only One Word               | W   | 0.223      | 0.143        | 0.001 (0.000)    | 0.233 (0.007)    | 0 (0.000) |     4.39 | keen, SaVage, shadiy, Valiance, vision |
|            2 |     2191 | 2024-10-04 | Mindfreak (Australian team) | W   | 0.216      | 0.143        | 0.002 (0.000)    | 0.092 (0.003)    | 0 (0.000) |     5.03 | keen, SaVage, shadiy, Valiance, vision |
|            1 |     2194 | 2024-10-04 | Vantage Esports             | W   | 0.216      | 0.143        | 0.000 (0.000)    | 0.180 (0.006)    | 0 (0.000) |     3.21 | keen, SaVage, shadiy, Valiance, vision |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
