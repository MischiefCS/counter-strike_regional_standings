### Roster Details<br />
Team Name: LaChampionsLiga<br />
Roster: dott1, Hezz, lenci, pavv+, rzk<br />
Global Rank: [173](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_05_05.md)<br />
Regional Rank: [47]( ../../standings_americas_2025_05_05.md)<br />
<br />
Final Rank Value:  514.2<br />
<br />
Final Rank Value (514.2) = Starting Rank Value (510.9) + Head To Head Adjustments (3.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.198[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.051<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 510.9
- 400 + ( ( 0.051 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 510.9


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
|           10 |      429 | 2025-02-08 | Legacy                   | L   | 0.626      | -            | -                | -                | -         |    -3.13 | dott1, Hezz, lenci, pavv+, rzk   |
|            9 |      483 | 2025-02-07 | Tropa do KinGui          | W   | 0.620      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.70 | dott1, Hezz, lenci, pavv+, rzk   |
|            8 |      776 | 2024-12-21 | Game Hunters             | L   | 0.299      | -            | -                | -                | -         |    -3.60 | dott1, Hezz, lenci, nacho, pavv+ |
|            7 |      797 | 2024-12-19 | Team Solid               | L   | 0.286      | -            | -                | -                | -         |    -1.84 | dott1, Hezz, lenci, nacho, pavv+ |
|            6 |      812 | 2024-12-18 | Bad News Chickens        | L   | 0.278      | -            | -                | -                | -         |    -3.32 | dott1, Hezz, lenci, nacho, pavv+ |
|            5 |      828 | 2024-12-16 | 20/70                    | W   | 0.266      | 0.384        | 0.001 (0.000)    | 0.064 (0.007)    | 0 (0.000) |     4.40 | dott1, Hezz, lenci, nacho, pavv+ |
|            4 |      864 | 2024-12-14 | Players (Brazilian team) | W   | 0.253      | 0.384        | 0.009 (0.001)    | 0.473 (0.046)    | 0 (0.000) |     6.13 | dott1, Hezz, lenci, nacho, pavv+ |
|            3 |     1310 | 2024-11-22 | BESTIA Academy           | W   | 0.104      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.15 | dott1, Hezz, lenci, pavv+, rzk   |
|            2 |     1360 | 2024-11-20 | Joga de terno            | L   | 0.092      | -            | -                | -                | -         |    -1.87 | dott1, Hezz, lenci, pavv+, rzk   |
|            1 |     1383 | 2024-11-18 | ShindeN                  | L   | 0.079      | -            | -                | -                | -         |    -1.32 | dott1, Hezz, lenci, pavv+, rzk   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
