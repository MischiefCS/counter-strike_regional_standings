### Roster Details<br />
Team Name: LaChampionsLiga<br />
Roster: dott1, Hezz, lenci, pavv+, rzk<br />
Global Rank: [119](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_06_02.md)<br />
Regional Rank: [32]( ../../standings_americas_2025_06_02.md)<br />
<br />
Final Rank Value:  501.0<br />
<br />
Final Rank Value (501.0) = Starting Rank Value (499.9) + Head To Head Adjustments (1.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.171[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.043<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 499.9
- 400 + ( ( 0.043 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 499.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                 | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      429 | 2025-02-08 | Legacy                   | L   | 0.439      | -            | -                | -                | -         |    -2.26 | dott1, Hezz, lenci, pavv+, rzk   |
|            6 |      483 | 2025-02-07 | Tropa do KinGui          | W   | 0.433      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.94 | dott1, Hezz, lenci, pavv+, rzk   |
|            5 |      776 | 2024-12-21 | Game Hunters             | L   | 0.112      | -            | -                | -                | -         |    -1.85 | dott1, Hezz, lenci, nacho, pavv+ |
|            4 |      797 | 2024-12-19 | Team Solid               | L   | 0.099      | -            | -                | -                | -         |    -0.67 | dott1, Hezz, lenci, nacho, pavv+ |
|            3 |      812 | 2024-12-18 | Bad News Chickens        | L   | 0.091      | -            | -                | -                | -         |    -1.83 | dott1, Hezz, lenci, nacho, pavv+ |
|            2 |      828 | 2024-12-16 | 20/70                    | W   | 0.080      | 0.384        | 0.000 (0.000)    | 0.009 (0.000)    | 0 (0.000) |     1.34 | dott1, Hezz, lenci, nacho, pavv+ |
|            1 |      864 | 2024-12-14 | Players (Brazilian team) | W   | 0.066      | 0.384        | 0.005 (0.000)    | 0.412 (0.011)    | 0 (0.000) |     1.48 | dott1, Hezz, lenci, nacho, pavv+ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
