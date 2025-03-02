### Roster Details<br />
Team Name: Betera Esports<br />
Roster: h1te, MaSvAl, synyx, tENZY, Vert<br />
Global Rank: [160](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [114]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  778.9<br />
<br />
Final Rank Value (778.9) = Starting Rank Value (658.9) + Head To Head Adjustments (120.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.348[<sup>2</sup>](#table1)
- Opponent Network: 0.153[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.125<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 658.9
- 400 + ( ( 0.125 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 658.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      109 | 2025-02-25 | Sashi Esport       | W   | 1.000      | 0.500        | 0.016 (0.008)    | 0.637 (0.318)    | 0 (0.000) |    24.28 | h1te, MaSvAl, synyx, tENZY, Vert |
|            7 |      145 | 2025-02-24 | 500                | L   | 1.000      | -            | -                | -                | -         |    -3.66 | h1te, MaSvAl, synyx, tENZY, Vert |
|            6 |      575 | 2025-02-08 | Ex-Daystar         | L   | 1.000      | -            | -                | -                | -         |   -22.45 | h1te, MaSvAl, synyx, tENZY, Vert |
|            5 |      598 | 2025-02-08 | Complexity         | W   | 1.000      | 0.143        | 0.091 (0.013)    | 0.126 (0.018)    | 0 (0.000) |    24.80 | h1te, MaSvAl, synyx, tENZY, Vert |
|            4 |      647 | 2025-02-07 | AMKAL ESPORTS      | W   | 1.000      | 0.143        | 0.002 (0.000)    | 0.533 (0.076)    | 0 (0.000) |    20.95 | h1te, MaSvAl, synyx, tENZY, Vert |
|            3 |      899 | 2025-01-27 | Fire Flux Esports  | W   | 0.987      | 0.500        | 0.009 (0.005)    | 1.000 (0.493)    | 0 (0.000) |    25.32 | h1te, MaSvAl, synyx, tENZY, Vert |
|            2 |      968 | 2025-01-23 | Nemiga Gaming      | W   | 0.960      | 0.500        | 0.212 (0.102)    | 0.455 (0.219)    | 0 (0.000) |    27.42 | h1te, MaSvAl, synyx, tENZY, Vert |
|            1 |     1025 | 2025-01-21 | CYBERSHOKE Esports | W   | 0.947      | 0.500        | 0.015 (0.007)    | 0.859 (0.406)    | 0 (0.000) |    23.34 | h1te, MaSvAl, synyx, tENZY, Vert |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
