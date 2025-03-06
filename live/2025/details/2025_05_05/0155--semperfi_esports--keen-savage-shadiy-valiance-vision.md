### Roster Details<br />
Team Name: SemperFi Esports<br />
Roster: keen, SaVage, shadiy, Valiance, vision<br />
Global Rank: [155](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_05_05.md)<br />
Regional Rank: [16]( ../../standings_asia_2025_05_05.md)<br />
<br />
Final Rank Value:  542.8<br />
<br />
Final Rank Value (542.8) = Starting Rank Value (500.8) + Head To Head Adjustments (42.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.176[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.046<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 500.8
- 400 + ( ( 0.046 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 500.8


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
|            7 |       46 | 2025-02-25 | KZG                       | W   | 0.736      | 0.143        | 0.000 (0.000)    | 0.238 (0.025)    | 0 (0.000) |     7.34 | keen, SaVage, shadiy, Valiance, vision |
|            6 |       68 | 2025-02-24 | Only One Word             | W   | 0.729      | 0.143        | 0.000 (0.000)    | 0.246 (0.026)    | 0 (0.000) |     7.25 | keen, SaVage, shadiy, Valiance, vision |
|            5 |      253 | 2025-02-14 | Justice For Tomorrow      | W   | 0.669      | 0.143        | 0.000 (0.000)    | 0.149 (0.014)    | 0 (0.000) |     7.29 | keen, SaVage, shadiy, Valiance, vision |
|            4 |      255 | 2025-02-14 | DXA Esports               | W   | 0.668      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     7.15 | keen, SaVage, shadiy, Valiance, vision |
|            3 |      378 | 2025-02-10 | Rooster                   | L   | 0.636      | -            | -                | -                | -         |   -10.22 | keen, SaVage, shadiy, Valiance, vision |
|            2 |      412 | 2025-02-08 | Just Swing (Chinese team) | W   | 0.629      | 0.143        | 0.002 (0.000)    | 0.122 (0.011)    | 0 (0.000) |    13.60 | keen, SaVage, shadiy, Valiance, vision |
|            1 |      471 | 2025-02-08 | Rooster                   | W   | 0.623      | 0.143        | 0.000 (0.000)    | 0.211 (0.019)    | 0 (0.000) |     9.58 | keen, SaVage, shadiy, Valiance, vision |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
