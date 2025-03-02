### Roster Details<br />
Team Name: Betera Esports<br />
Roster: h1te, MaSvAl, synyx, tENZY, Vert<br />
Global Rank: [137](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [99]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  903.1<br />
<br />
Final Rank Value (903.1) = Starting Rank Value (777.8) + Head To Head Adjustments (125.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.404[<sup>2</sup>](#table1)
- Opponent Network: 0.353[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.189<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 777.8
- 400 + ( ( 0.189 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 777.8


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
|            8 |      109 | 2025-02-25 | Sashi Esport       | W   | 1.000      | 1.000        | 0.016 (0.016)    | 0.637 (0.637)    | 0 (0.000) |    26.52 | h1te, MaSvAl, synyx, tENZY, Vert |
|            7 |      145 | 2025-02-24 | 500                | L   | 1.000      | -            | -                | -                | -         |    -2.37 | h1te, MaSvAl, synyx, tENZY, Vert |
|            6 |      575 | 2025-02-08 | Ex-Daystar         | L   | 1.000      | -            | -                | -                | -         |   -22.31 | h1te, MaSvAl, synyx, tENZY, Vert |
|            5 |      598 | 2025-02-08 | Complexity         | W   | 1.000      | 1.000        | 0.091 (0.091)    | 0.126 (0.126)    | 0 (0.000) |    20.17 | h1te, MaSvAl, synyx, tENZY, Vert |
|            4 |      647 | 2025-02-07 | AMKAL ESPORTS      | W   | 1.000      | 1.000        | 0.002 (0.002)    | 0.533 (0.533)    | 0 (0.000) |    23.28 | h1te, MaSvAl, synyx, tENZY, Vert |
|            3 |      899 | 2025-01-27 | Fire Flux Esports  | W   | 0.987      | 1.000        | 0.009 (0.009)    | 1.000 (0.987)    | 0 (0.000) |    27.09 | h1te, MaSvAl, synyx, tENZY, Vert |
|            2 |      968 | 2025-01-23 | Nemiga Gaming      | W   | 0.960      | 1.000        | 0.212 (0.203)    | 0.455 (0.437)    | 0 (0.000) |    27.73 | h1te, MaSvAl, synyx, tENZY, Vert |
|            1 |     1025 | 2025-01-21 | CYBERSHOKE Esports | W   | 0.947      | 1.000        | 0.015 (0.014)    | 0.859 (0.813)    | 0 (0.000) |    25.18 | h1te, MaSvAl, synyx, tENZY, Vert |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
