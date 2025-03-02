### Roster Details<br />
Team Name: Vizora Esports<br />
Roster: Koxa, OCEANA, Paine, viscera, xetN<br />
Global Rank: [522](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_02_28.md)<br />
Regional Rank: [82]( ../../standings_asia_2025_02_28.md)<br />
<br />
Final Rank Value:  506.5<br />
<br />
Final Rank Value (506.5) = Starting Rank Value (498.0) + Head To Head Adjustments (8.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.193[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.049<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 498.0
- 400 + ( ( 0.049 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 498.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      612 | 2025-02-08 | The Huns Esports   | L   | 1.000      | -            | -                | -                | -         |    -0.88 | Koxa, OCEANA, Paine, viscera, xetN  |
|            5 |      680 | 2025-02-07 | 2SPACE             | W   | 1.000      | 1.000        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    11.15 | Koxa, OCEANA, Paine, viscera, xetN  |
|            4 |     2060 | 2024-12-04 | THE (Russian team) | L   | 0.625      | -            | -                | -                | -         |    -1.85 | Kaine, OCEANA, Paine, viscera, xetN |
|            3 |     2109 | 2024-12-03 | SUBUTAI            | W   | 0.618      | 1.000        | 0.001 (0.001)    | 0.062 (0.039)    | 0 (0.000) |    10.46 | Kaine, OCEANA, Paine, viscera, xetN |
|            2 |     2196 | 2024-12-02 | The Huns Esports   | L   | 0.610      | -            | -                | -                | -         |    -0.38 | Echko, OCEANA, Paine, viscera, xetN |
|            1 |     3098 | 2024-11-16 | MOLEGAN            | L   | 0.510      | -            | -                | -                | -         |   -10.04 | Echko, OCEANA, Paine, viscera, xetN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
