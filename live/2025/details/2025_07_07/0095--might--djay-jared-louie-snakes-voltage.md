### Roster Details<br />
Team Name: MIGHT<br />
Roster: djay, Jared, Louie, Snakes, Voltage<br />
Global Rank: [95](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_07_07.md)<br />
Regional Rank: [24]( ../../standings_americas_2025_07_07.md)<br />
<br />
Final Rank Value:  404.0<br />
<br />
Final Rank Value (404.0) = Starting Rank Value (400.8) + Head To Head Adjustments (3.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.8
- 400 + ( ( 0.000 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 400.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      285 | 2025-02-13 | Getting Info         | L   | 0.239      | -            | -                | -                | -         |    -3.87 | djay, Jared, Louie, Snakes, Voltage |
|            4 |      351 | 2025-02-10 | Party Astronauts     | W   | 0.220      | 0.143        | 0.000 (0.000)    | 0.327 (0.010)    | 0 (0.000) |     3.55 | djay, Jared, Louie, Snakes, Voltage |
|            3 |      357 | 2025-02-10 | Chicken Coop Esports | W   | 0.219      | 0.143        | 0.000 (0.000)    | 0.081 (0.003)    | 0 (0.000) |     3.43 | djay, Jared, Louie, Snakes, Voltage |
|            2 |      396 | 2025-02-09 | LAG Gaming           | W   | 0.212      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.33 | djay, Jared, Louie, Snakes, Voltage |
|            1 |      443 | 2025-02-08 | Party Astronauts     | L   | 0.205      | -            | -                | -                | -         |    -3.23 | djay, Jared, Louie, Snakes, Voltage |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
