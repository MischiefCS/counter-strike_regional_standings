### Roster Details<br />
Team Name: M80<br />
Roster: Lake, reck, s1n, slaxz-, Swisher<br />
Global Rank: [130](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_05_05.md)<br />
Regional Rank: [30]( ../../standings_americas_2025_05_05.md)<br />
<br />
Final Rank Value:  624.4<br />
<br />
Final Rank Value (624.4) = Starting Rank Value (547.3) + Head To Head Adjustments (77.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.228[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.027[<sup>2</sup>](#table1)

The average of these factors is 0.068<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 547.3
- 400 + ( ( 0.068 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 547.3


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
|           13 |      261 | 2025-02-14 | BOSS               | W   | 0.666      | 0.143        | 0.004 (0.000)    | 0.304 (0.029)    | 0 (0.000) |    14.67 | Lake, reck, s1n, slaxz-, Swisher |
|           12 |      267 | 2025-02-14 | NRG                | W   | 0.665      | 0.143        | 0.029 (0.003)    | 0.413 (0.039)    | 0 (0.000) |    17.65 | Lake, reck, s1n, slaxz-, Swisher |
|           11 |      288 | 2025-02-13 | Nouns Esports      | W   | 0.659      | 0.143        | 0.004 (0.000)    | 0.308 (0.029)    | 0 (0.000) |    14.65 | Lake, reck, s1n, slaxz-, Swisher |
|           10 |      350 | 2025-02-10 | Marsborne          | W   | 0.640      | 0.143        | 0.000 (0.000)    | 0.210 (0.019)    | 0 (0.000) |     9.19 | Lake, reck, s1n, slaxz-, Swisher |
|            9 |      389 | 2025-02-09 | Marsborne          | W   | 0.633      | 0.143        | 0.000 (0.000)    | 0.210 (0.019)    | 0 (0.000) |     9.31 | Lake, reck, s1n, slaxz-, Swisher |
|            8 |      442 | 2025-02-08 | Bad News Capybaras | W   | 0.625      | 0.143        | 0.000 (0.000)    | 0.076 (0.007)    | 0 (0.000) |     9.08 | Lake, reck, s1n, slaxz-, Swisher |
|            7 |      681 | 2025-01-16 | FaZe Clan          | L   | 0.471      | -            | -                | -                | -         |    -0.01 | k1to, Lake, s1n, slaxz-, Swisher |
|            6 |     1456 | 2024-11-15 | FURIA              | L   | 0.057      | -            | -                | -                | -         |    -0.04 | Lake, reck, s1n, slaxz-, Swisher |
|            5 |     1468 | 2024-11-14 | BESTIA             | W   | 0.054      | 0.143        | 0.046 (0.000)    | 0.430 (0.003)    | 1 (0.054) |     1.37 | Lake, reck, s1n, slaxz-, Swisher |
|            4 |     1503 | 2024-11-13 | Complexity         | L   | 0.049      | -            | -                | -                | -         |    -0.10 | Lake, reck, s1n, slaxz-, Swisher |
|            3 |     1534 | 2024-11-12 | Legacy             | W   | 0.041      | 0.143        | 0.032 (0.000)    | 0.598 (0.004)    | 1 (0.041) |     1.03 | Lake, reck, s1n, slaxz-, Swisher |
|            2 |     1545 | 2024-11-12 | RED Canids         | W   | 0.037      | 0.143        | 0.000 (0.000)    | 0.146 (0.001)    | 1 (0.037) |     0.52 | Lake, reck, s1n, slaxz-, Swisher |
|            1 |     1560 | 2024-11-11 | BOSS               | L   | 0.035      | -            | -                | -                | -         |    -0.24 | Lake, reck, s1n, slaxz-, Swisher |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
