### Roster Details<br />
Team Name: 20/70<br />
Roster: Demonos, lealziNho, Roz, swarmyzz, voltera<br />
Global Rank: [234](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [70]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  585.1<br />
<br />
Final Rank Value (585.1) = Starting Rank Value (629.5) + Head To Head Adjustments (-44.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.257[<sup>1</sup>](#table2)
- Bounty Collected: 0.205[<sup>2</sup>](#table1)
- Opponent Network: 0.020[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.121<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 629.5
- 400 + ( ( 0.121 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 629.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                 | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |      800 | 2024-12-19 | 9z Academy               | L   | 0.720      | -            | -                | -                | -         |   -13.75 | Demonos, lealziNho, Roz, swarmyzz, voltera |
|           12 |      826 | 2024-12-17 | Game Hunters             | L   | 0.706      | -            | -                | -                | -         |    -9.47 | Demonos, lealziNho, Roz, swarmyzz, voltera |
|           11 |      828 | 2024-12-16 | LaChampionsLiga          | L   | 0.701      | -            | -                | -                | -         |   -10.66 | Demonos, lealziNho, Roz, swarmyzz, voltera |
|           10 |      890 | 2024-12-13 | Players (Brazilian team) | L   | 0.681      | -            | -                | -                | -         |    -7.38 | Demonos, lealziNho, Roz, swarmyzz, voltera |
|            9 |      910 | 2024-12-12 | 9z Academy               | W   | 0.674      | 0.322        | 0.000 (0.000)    | 0.210 (0.046)    | 0 (0.000) |     7.49 | Demonos, lealziNho, Roz, swarmyzz, voltera |
|            8 |     1201 | 2024-11-28 | Sharks Esports           | L   | 0.580      | -            | -                | -                | -         |    -1.84 | Demonos, lealziNho, Roz, swarmyzz, voltera |
|            7 |     1233 | 2024-11-26 | Patins da Ferrari        | W   | 0.566      | 0.460        | 0.000 (0.000)    | 0.115 (0.030)    | 0 (0.000) |     6.05 | Demonos, lealziNho, Roz, swarmyzz, voltera |
|            6 |     1244 | 2024-11-25 | ShindeN                  | W   | 0.560      | 0.460        | 0.005 (0.001)    | 0.377 (0.097)    | 0 (0.000) |    10.21 | Demonos, lealziNho, Roz, swarmyzz, voltera |
|            5 |     1284 | 2024-11-23 | Players (Brazilian team) | L   | 0.546      | -            | -                | -                | -         |    -6.01 | Demonos, lealziNho, Roz, swarmyzz, voltera |
|            4 |     1334 | 2024-11-21 | Game Hunters             | L   | 0.532      | -            | -                | -                | -         |   -11.07 | Demonos, lealziNho, Roz, swarmyzz, voltera |
|            3 |     1370 | 2024-11-19 | Joga de terno            | W   | 0.522      | 0.460        | 0.000 (0.000)    | 0.111 (0.027)    | 0 (0.000) |     5.37 | Demonos, lealziNho, Roz, swarmyzz, voltera |
|            2 |     1593 | 2024-11-09 | Yawara E-Sports          | L   | 0.454      | -            | -                | -                | -         |    -6.61 | Demonos, kln, proSHOW, Roz, voltera        |
|            1 |     1729 | 2024-11-01 | Intense Game             | L   | 0.400      | -            | -                | -                | -         |    -6.68 | Demonos, proSHOW, Roz, suNday, voltera     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($433.72)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-13 |      0.681 | $333.50        | $227.05         |
| 2024-11-03 |      0.413 | $500.00        | $206.67         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
