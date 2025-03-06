### Roster Details<br />
Team Name: MIGHT<br />
Roster: djay, Jared, Louie, Snakes, Voltage<br />
Global Rank: [130](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_04_07.md)<br />
Regional Rank: [32]( ../../standings_americas_2025_04_07.md)<br />
<br />
Final Rank Value:  678.2<br />
<br />
Final Rank Value (678.2) = Starting Rank Value (687.4) + Head To Head Adjustments (-9.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.223[<sup>1</sup>](#table2)
- Bounty Collected: 0.200[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.128[<sup>2</sup>](#table1)

The average of these factors is 0.139<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 687.4
- 400 + ( ( 0.139 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 687.4


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
|           12 |      285 | 2025-02-13 | Getting Info         | L   | 0.846      | -            | -                | -                | -         |   -20.37 | djay, Jared, Louie, Snakes, Voltage       |
|           11 |      351 | 2025-02-10 | Party Astronauts     | W   | 0.827      | 0.143        | 0.002 (0.000)    | 0.339 (0.040)    | 0 (0.000) |    13.53 | djay, Jared, Louie, Snakes, Voltage       |
|           10 |      357 | 2025-02-10 | Chicken Coop Esports | W   | 0.826      | 0.143        | 0.006 (0.001)    | 0.095 (0.011)    | 0 (0.000) |    11.25 | djay, Jared, Louie, Snakes, Voltage       |
|            9 |      396 | 2025-02-09 | LAG Gaming           | W   | 0.819      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     8.56 | djay, Jared, Louie, Snakes, Voltage       |
|            8 |      443 | 2025-02-08 | Party Astronauts     | L   | 0.812      | -            | -                | -                | -         |   -12.60 | djay, Jared, Louie, Snakes, Voltage       |
|            7 |      971 | 2024-12-07 | Undone               | L   | 0.394      | -            | -                | -                | -         |    -5.44 | djay, Louie, PwnAlone, REKMEISTER, Snakes |
|            6 |      979 | 2024-12-07 | ROOMBA PEEK          | W   | 0.393      | 0.384        | 0.000 (0.000)    | 0.031 (0.005)    | 1 (0.393) |     3.64 | djay, Louie, PwnAlone, REKMEISTER, Snakes |
|            5 |      988 | 2024-12-07 | Not Mythic           | W   | 0.392      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.392) |     2.12 | djay, Louie, PwnAlone, REKMEISTER, Snakes |
|            4 |     1010 | 2024-12-06 | Sharks Esports       | L   | 0.387      | -            | -                | -                | -         |    -2.47 | djay, Louie, PwnAlone, REKMEISTER, Snakes |
|            3 |     1083 | 2024-12-03 | Immigrants Peek      | L   | 0.367      | -            | -                | -                | -         |    -6.48 | djay, Jonji, louie, PwnAlone, Snakes      |
|            2 |     1844 | 2024-10-20 | Timbermen            | L   | 0.071      | -            | -                | -                | -         |    -1.33 | djay, Jonji, louie, PwnAlone, Snakes      |
|            1 |     1856 | 2024-10-19 | Amped Esports        | W   | 0.067      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.067) |     0.35 | djay, Jonji, louie, PwnAlone, Snakes      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($72.85)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.073 | $1,000.00      | $72.85          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
