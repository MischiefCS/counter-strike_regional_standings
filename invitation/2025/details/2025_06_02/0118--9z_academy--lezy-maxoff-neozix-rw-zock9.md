### Roster Details<br />
Team Name: 9z Academy<br />
Roster: lezy, MaxOff, neozix, rw, zock9<br />
Global Rank: [118](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_06_02.md)<br />
Regional Rank: [31]( ../../standings_americas_2025_06_02.md)<br />
<br />
Final Rank Value:  501.5<br />
<br />
Final Rank Value (501.5) = Starting Rank Value (504.5) + Head To Head Adjustments (-3.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.178[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.045<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 504.5
- 400 + ( ( 0.045 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 504.5


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
|            7 |      711 | 2025-01-09 | Elevate                  | L   | 0.237      | -            | -                | -                | -         |    -4.80 | lezy, MaxOff, neozix, rw, zock9  |
|            6 |      780 | 2024-12-21 | Players (Brazilian team) | W   | 0.111      | 0.384        | 0.005 (0.000)    | 0.412 (0.018)    | 0 (0.000) |     2.43 | lezy, MaxOff, neozix, rw, zock9  |
|            5 |      800 | 2024-12-19 | 20/70                    | W   | 0.098      | 0.384        | 0.000 (0.000)    | 0.009 (0.000)    | 0 (0.000) |     1.63 | lezy, MaxOff, neozix, rw, zock9  |
|            4 |      810 | 2024-12-18 | Team Solid               | L   | 0.093      | -            | -                | -                | -         |    -0.64 | lezy, MaxOff, neozix, rw, zock9  |
|            3 |      831 | 2024-12-16 | ShindeN                  | L   | 0.078      | -            | -                | -                | -         |    -1.57 | lezy, MaxOff, neozix, rw, zock9  |
|            2 |      865 | 2024-12-14 | Exceritus                | W   | 0.066      | 0.384        | 0.000 (0.000)    | 0.246 (0.006)    | 0 (0.000) |     0.74 | lezy, MaxOff, neozix, rw, zock9  |
|            1 |      910 | 2024-12-12 | 20/70                    | L   | 0.052      | -            | -                | -                | -         |    -0.77 | divine, lezy, MaxOff, neozix, rw |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
