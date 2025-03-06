### Roster Details<br />
Team Name: MIGHT<br />
Roster: djay, Jared, Louie, Snakes, Voltage<br />
Global Rank: [151](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_05_05.md)<br />
Regional Rank: [37]( ../../standings_americas_2025_05_05.md)<br />
<br />
Final Rank Value:  554.6<br />
<br />
Final Rank Value (554.6) = Starting Rank Value (552.2) + Head To Head Adjustments (2.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.189[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.086[<sup>2</sup>](#table1)

The average of these factors is 0.070<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 552.2
- 400 + ( ( 0.070 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 552.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      285 | 2025-02-13 | Getting Info         | L   | 0.659      | -            | -                | -                | -         |   -14.87 | djay, Jared, Louie, Snakes, Voltage       |
|            9 |      351 | 2025-02-10 | Party Astronauts     | W   | 0.640      | 0.143        | 0.000 (0.000)    | 0.329 (0.030)    | 0 (0.000) |     9.99 | djay, Jared, Louie, Snakes, Voltage       |
|            8 |      357 | 2025-02-10 | Chicken Coop Esports | W   | 0.639      | 0.143        | 0.006 (0.001)    | 0.089 (0.008)    | 0 (0.000) |    12.40 | djay, Jared, Louie, Snakes, Voltage       |
|            7 |      396 | 2025-02-09 | LAG Gaming           | W   | 0.632      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.95 | djay, Jared, Louie, Snakes, Voltage       |
|            6 |      443 | 2025-02-08 | Party Astronauts     | L   | 0.625      | -            | -                | -                | -         |   -10.34 | djay, Jared, Louie, Snakes, Voltage       |
|            5 |      971 | 2024-12-07 | Undone               | L   | 0.208      | -            | -                | -                | -         |    -1.91 | djay, Louie, PwnAlone, REKMEISTER, Snakes |
|            4 |      979 | 2024-12-07 | ROOMBA PEEK          | W   | 0.207      | 0.384        | 0.000 (0.000)    | 0.022 (0.002)    | 1 (0.207) |     2.15 | djay, Louie, PwnAlone, REKMEISTER, Snakes |
|            3 |      988 | 2024-12-07 | Not Mythic           | W   | 0.205      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.205) |     1.93 | djay, Louie, PwnAlone, REKMEISTER, Snakes |
|            2 |     1010 | 2024-12-06 | Sharks Esports       | L   | 0.200      | -            | -                | -                | -         |    -0.81 | djay, Louie, PwnAlone, REKMEISTER, Snakes |
|            1 |     1083 | 2024-12-03 | Immigrants Peek      | L   | 0.181      | -            | -                | -                | -         |    -2.09 | djay, Jonji, louie, PwnAlone, Snakes      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
