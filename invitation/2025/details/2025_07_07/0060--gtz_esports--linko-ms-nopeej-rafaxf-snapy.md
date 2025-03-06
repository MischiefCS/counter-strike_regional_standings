### Roster Details<br />
Team Name: GTZ.ESPORTS<br />
Roster: Linko, ms, NOPEEj, rafaxF, snapy<br />
Global Rank: [60](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [41]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  549.9<br />
<br />
Final Rank Value (549.9) = Starting Rank Value (558.9) + Head To Head Adjustments (-9.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.236[<sup>2</sup>](#table1)
- Opponent Network: 0.021[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.064<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 558.9
- 400 + ( ( 0.064 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 558.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |      197 | 2025-02-17 | Copenhagen Wolves (American organization) | L   | 0.264      | -            | -                | -                | -         |    -4.45 | Linko, ms, NOPEEj, rafaxF, snapy |
|            8 |      271 | 2025-02-14 | RUSH B (Russian team)                     | L   | 0.244      | -            | -                | -                | -         |    -4.03 | Linko, ms, NOPEEj, rafaxF, snapy |
|            7 |      296 | 2025-02-13 | 9INE                                      | L   | 0.237      | -            | -                | -                | -         |    -3.87 | Linko, ms, NOPEEj, rafaxF, snapy |
|            6 |      372 | 2025-02-10 | BC.Game Esports                           | W   | 0.217      | 0.435        | 0.062 (0.006)    | 1.000 (0.094)    | 0 (0.000) |     6.06 | Linko, ms, NOPEEj, rafaxF, snapy |
|            5 |      405 | 2025-02-09 | Alliance                                  | L   | 0.211      | -            | -                | -                | -         |    -3.48 | Linko, ms, NOPEEj, rafaxF, snapy |
|            4 |      462 | 2025-02-08 | Betclic Apogee Esports                    | L   | 0.204      | -            | -                | -                | -         |    -3.18 | Linko, ms, NOPEEj, rafaxF, snapy |
|            3 |      525 | 2025-02-06 | Fire Flux Esports                         | W   | 0.190      | 0.435        | 0.000 (0.000)    | 0.790 (0.065)    | 0 (0.000) |     2.99 | Linko, ms, NOPEEj, rafaxF, snapy |
|            2 |      588 | 2025-02-03 | ECSTATIC                                  | W   | 0.171      | 0.435        | 0.000 (0.000)    | 0.735 (0.055)    | 0 (0.000) |     2.49 | Linko, ms, NOPEEj, rafaxF, snapy |
|            1 |      608 | 2025-02-01 | SINNERS Esports                           | L   | 0.159      | -            | -                | -                | -         |    -1.52 | Linko, ms, NOPEEj, rafaxF, snapy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
