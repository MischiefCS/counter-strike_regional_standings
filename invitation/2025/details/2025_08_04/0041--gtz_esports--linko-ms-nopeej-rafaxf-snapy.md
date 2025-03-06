### Roster Details<br />
Team Name: GTZ.ESPORTS<br />
Roster: Linko, ms, NOPEEj, rafaxF, snapy<br />
Global Rank: [41](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [28]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  534.3<br />
<br />
Final Rank Value (534.3) = Starting Rank Value (537.3) + Head To Head Adjustments (-3.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.208[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.052<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 537.3
- 400 + ( ( 0.052 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 537.3


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
|            7 |      197 | 2025-02-17 | Copenhagen Wolves (American organization) | L   | 0.077      | -            | -                | -                | -         |    -1.33 | Linko, ms, NOPEEj, rafaxF, snapy |
|            6 |      271 | 2025-02-14 | RUSH B (Russian team)                     | L   | 0.058      | -            | -                | -                | -         |    -0.92 | Linko, ms, NOPEEj, rafaxF, snapy |
|            5 |      296 | 2025-02-13 | 9INE                                      | L   | 0.050      | -            | -                | -                | -         |    -0.85 | Linko, ms, NOPEEj, rafaxF, snapy |
|            4 |      372 | 2025-02-10 | BC.Game Esports                           | W   | 0.030      | 0.435        | 0.121 (0.002)    | 1.000 (0.013)    | 0 (0.000) |     0.85 | Linko, ms, NOPEEj, rafaxF, snapy |
|            3 |      405 | 2025-02-09 | Alliance                                  | L   | 0.024      | -            | -                | -                | -         |    -0.52 | Linko, ms, NOPEEj, rafaxF, snapy |
|            2 |      462 | 2025-02-08 | Betclic Apogee Esports                    | L   | 0.017      | -            | -                | -                | -         |    -0.37 | Linko, ms, NOPEEj, rafaxF, snapy |
|            1 |      525 | 2025-02-06 | Fire Flux Esports                         | W   | 0.004      | 0.435        | 0.000 (0.000)    | 0.763 (0.001)    | 0 (0.000) |     0.06 | Linko, ms, NOPEEj, rafaxF, snapy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
