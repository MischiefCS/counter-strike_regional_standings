### Roster Details<br />
Team Name: Betera Esports<br />
Roster: h1te, MaSvAl, synyx, tENZY, Vert<br />
Global Rank: [150](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [111]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  759.5<br />
<br />
Final Rank Value (759.5) = Starting Rank Value (640.1) + Head To Head Adjustments (119.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.340[<sup>2</sup>](#table1)
- Opponent Network: 0.147[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.122<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 640.1
- 400 + ( ( 0.122 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 640.1


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
|            8 |       36 | 2025-02-25 | Sashi Esport       | W   | 1.000      | 0.500        | 0.013 (0.007)    | 0.585 (0.292)    | 0 (0.000) |    22.99 | h1te, MaSvAl, synyx, tENZY, Vert |
|            7 |       61 | 2025-02-24 | 500                | L   | 1.000      | -            | -                | -                | -         |    -4.18 | h1te, MaSvAl, synyx, tENZY, Vert |
|            6 |      431 | 2025-02-08 | Ex-Daystar         | L   | 1.000      | -            | -                | -                | -         |   -22.14 | h1te, MaSvAl, synyx, tENZY, Vert |
|            5 |      439 | 2025-02-08 | Complexity         | W   | 1.000      | 0.143        | 0.097 (0.014)    | 0.251 (0.036)    | 0 (0.000) |    28.12 | h1te, MaSvAl, synyx, tENZY, Vert |
|            4 |      501 | 2025-02-07 | AMKAL ESPORTS      | W   | 1.000      | 0.143        | 0.002 (0.000)    | 0.511 (0.073)    | 0 (0.000) |    20.66 | h1te, MaSvAl, synyx, tENZY, Vert |
|            3 |      715 | 2025-01-27 | Fire Flux Esports  | W   | 0.980      | 0.500        | 0.008 (0.004)    | 1.000 (0.490)    | 0 (0.000) |    24.33 | h1te, MaSvAl, synyx, tENZY, Vert |
|            2 |      749 | 2025-01-23 | Nemiga Gaming      | W   | 0.954      | 0.500        | 0.177 (0.084)    | 0.413 (0.197)    | 0 (0.000) |    26.88 | h1te, MaSvAl, synyx, tENZY, Vert |
|            1 |      763 | 2025-01-21 | CYBERSHOKE Esports | W   | 0.940      | 0.500        | 0.013 (0.006)    | 0.821 (0.386)    | 0 (0.000) |    22.77 | h1te, MaSvAl, synyx, tENZY, Vert |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
