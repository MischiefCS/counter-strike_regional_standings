### Roster Details<br />
Team Name: MIGHT<br />
Roster: djay, Jared, Louie, Snakes, Voltage<br />
Global Rank: [113](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_06_02.md)<br />
Regional Rank: [28]( ../../standings_americas_2025_06_02.md)<br />
<br />
Final Rank Value:  506.5<br />
<br />
Final Rank Value (506.5) = Starting Rank Value (502.9) + Head To Head Adjustments (3.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.162[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.013[<sup>2</sup>](#table1)

The average of these factors is 0.044<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 502.9
- 400 + ( ( 0.044 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 502.9


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
|            9 |      285 | 2025-02-13 | Getting Info         | L   | 0.473      | -            | -                | -                | -         |    -9.77 | djay, Jared, Louie, Snakes, Voltage       |
|            8 |      351 | 2025-02-10 | Party Astronauts     | W   | 0.453      | 0.143        | 0.000 (0.000)    | 0.335 (0.022)    | 0 (0.000) |     7.35 | djay, Jared, Louie, Snakes, Voltage       |
|            7 |      357 | 2025-02-10 | Chicken Coop Esports | W   | 0.452      | 0.143        | 0.001 (0.000)    | 0.080 (0.005)    | 0 (0.000) |     7.82 | djay, Jared, Louie, Snakes, Voltage       |
|            6 |      396 | 2025-02-09 | LAG Gaming           | W   | 0.446      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.03 | djay, Jared, Louie, Snakes, Voltage       |
|            5 |      443 | 2025-02-08 | Party Astronauts     | L   | 0.439      | -            | -                | -                | -         |    -6.95 | djay, Jared, Louie, Snakes, Voltage       |
|            4 |      971 | 2024-12-07 | Undone               | L   | 0.021      | -            | -                | -                | -         |    -0.22 | djay, Louie, PwnAlone, REKMEISTER, Snakes |
|            3 |      979 | 2024-12-07 | ROOMBA PEEK          | W   | 0.020      | 0.384        | 0.000 (0.000)    | 0.003 (0.000)    | 1 (0.020) |     0.23 | djay, Louie, PwnAlone, REKMEISTER, Snakes |
|            2 |      988 | 2024-12-07 | Not Mythic           | W   | 0.018      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.018) |     0.21 | djay, Louie, PwnAlone, REKMEISTER, Snakes |
|            1 |     1010 | 2024-12-06 | Sharks Esports       | L   | 0.013      | -            | -                | -                | -         |    -0.07 | djay, Louie, PwnAlone, REKMEISTER, Snakes |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
