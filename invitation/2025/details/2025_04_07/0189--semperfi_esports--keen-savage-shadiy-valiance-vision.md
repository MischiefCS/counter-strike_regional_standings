### Roster Details<br />
Team Name: SemperFi Esports<br />
Roster: keen, SaVage, shadiy, Valiance, vision<br />
Global Rank: [189](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_04_07.md)<br />
Regional Rank: [24]( ../../standings_asia_2025_04_07.md)<br />
<br />
Final Rank Value:  577.0<br />
<br />
Final Rank Value (577.0) = Starting Rank Value (503.2) + Head To Head Adjustments (73.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.188[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.050<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 503.2
- 400 + ( ( 0.050 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 503.2


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
|            7 |       46 | 2025-02-25 | KZG                       | W   | 0.922      | 0.143        | 0.000 (0.000)    | 0.219 (0.029)    | 0 (0.000) |    14.56 | keen, SaVage, shadiy, Valiance, vision |
|            6 |       68 | 2025-02-24 | Only One Word             | W   | 0.916      | 0.143        | 0.000 (0.000)    | 0.225 (0.029)    | 0 (0.000) |    15.07 | keen, SaVage, shadiy, Valiance, vision |
|            5 |      253 | 2025-02-14 | Justice For Tomorrow      | W   | 0.855      | 0.143        | 0.000 (0.000)    | 0.139 (0.017)    | 0 (0.000) |    11.76 | keen, SaVage, shadiy, Valiance, vision |
|            4 |      255 | 2025-02-14 | DXA Esports               | W   | 0.854      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     8.62 | keen, SaVage, shadiy, Valiance, vision |
|            3 |      378 | 2025-02-10 | Rooster                   | L   | 0.822      | -            | -                | -                | -         |    -9.95 | keen, SaVage, shadiy, Valiance, vision |
|            2 |      412 | 2025-02-08 | Just Swing (Chinese team) | W   | 0.815      | 0.143        | 0.003 (0.000)    | 0.165 (0.019)    | 0 (0.000) |    17.76 | keen, SaVage, shadiy, Valiance, vision |
|            1 |      471 | 2025-02-08 | Rooster                   | W   | 0.809      | 0.143        | 0.000 (0.000)    | 0.199 (0.023)    | 0 (0.000) |    15.96 | keen, SaVage, shadiy, Valiance, vision |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
