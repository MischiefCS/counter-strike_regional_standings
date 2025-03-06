### Roster Details<br />
Team Name: Eternal Fire<br />
Roster: jottAAA, MAJ3R, Wicadia, woxic, XANTARES<br />
Global Rank: [3](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [3]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  1919.6<br />
<br />
Final Rank Value (1919.6) = Starting Rank Value (1954.1) + Head To Head Adjustments (-34.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.980[<sup>1</sup>](#table2)
- Bounty Collected: 0.636[<sup>2</sup>](#table1)
- Opponent Network: 0.237[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.713<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1954.1
- 400 + ( ( 0.713 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 1954.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |      145 | 2025-02-21 | Team Falcons    | L   | 0.711      | -            | -                | -                | -         |   -12.56 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           20 |      198 | 2025-02-17 | 3DMAX           | W   | 0.684      | 1.000        | 0.310 (0.212)    | 0.471 (0.322)    | 1 (0.684) |     1.85 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           19 |      217 | 2025-02-16 | BIG             | W   | 0.676      | 1.000        | 0.327 (0.221)    | 0.474 (0.320)    | 1 (0.676) |     0.77 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           18 |      245 | 2025-02-15 | FaZe Clan       | L   | 0.670      | -            | -                | -                | -         |   -11.18 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           17 |      268 | 2025-02-14 | Imperial Female | W   | 0.665      | 1.000        | 0.141 (0.094)    | -                | 1 (0.665) |     0.05 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           16 |      498 | 2025-02-07 | The MongolZ     | L   | 0.617      | -            | -                | -                | -         |   -12.36 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           15 |      578 | 2025-02-04 | FaZe Clan       | W   | 0.598      | 1.000        | 1.000 (0.598)    | 0.508 (0.303)    | 1 (0.598) |     8.64 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           14 |      587 | 2025-02-03 | 3DMAX           | W   | 0.592      | 1.000        | 0.310 (0.184)    | 0.471 (0.279)    | 1 (0.592) |     1.38 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           13 |      600 | 2025-02-02 | Virtus.pro      | L   | 0.584      | -            | -                | -                | -         |   -15.92 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           12 |      618 | 2025-02-01 | Team Falcons    | W   | 0.577      | 1.000        | 1.000 (0.577)    | 0.654 (0.377)    | 1 (0.577) |     7.63 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           11 |      626 | 2025-01-30 | HEROIC          | W   | 0.565      | 1.000        | -                | 0.481 (0.272)    | 1 (0.565) |     0.11 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           10 |      634 | 2025-01-29 | Complexity      | W   | 0.558      | 1.000        | 0.145 (0.081)    | 0.125 (0.070)    | 1 (0.558) |     0.09 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|            9 |      653 | 2025-01-26 | Team Spirit     | L   | 0.537      | -            | -                | -                | -         |    -7.94 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|            8 |      657 | 2025-01-25 | G2 Esports      | W   | 0.531      | 0.769        | 0.327 (0.134)    | 0.307 (0.125)    | 1 (0.531) |     0.73 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|            7 |      663 | 2025-01-24 | Team Vitality   | W   | 0.524      | 0.769        | 1.000 (0.403)    | 0.457 (0.184)    | 1 (0.524) |     5.19 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|            6 |      671 | 2025-01-19 | Team Falcons    | W   | 0.490      | 0.363        | 1.000 (0.178)    | 0.654 (0.116)    | -         |     6.75 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|            5 |      682 | 2025-01-16 | Fluxo           | W   | 0.470      | -            | -                | -                | -         |     0.03 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|            4 |     1290 | 2024-11-23 | Astralis        | L   | 0.109      | -            | -                | -                | -         |    -1.78 | Calyx, MAJ3R, Wicadia, woxic, XANTARES   |
|            3 |     1327 | 2024-11-21 | Sashi Esport    | L   | 0.101      | -            | -                | -                | -         |    -3.19 | Calyx, MAJ3R, Wicadia, woxic, XANTARES   |
|            2 |     1338 | 2024-11-21 | 3DMAX           | L   | 0.097      | -            | -                | -                | -         |    -2.83 | Calyx, MAJ3R, Wicadia, woxic, XANTARES   |
|            1 |     1353 | 2024-11-20 | Aurora Gaming   | W   | 0.095      | -            | -                | -                | -         |     0.00 | Calyx, MAJ3R, Wicadia, woxic, XANTARES   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($116,577.49)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.95) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      0.725 | $62,500.00     | $45,309.61      |
| 2025-02-09 |      0.631 | $40,000.00     | $25,244.44      |
| 2025-01-26 |      0.537 | $85,625.00     | $46,023.44      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
