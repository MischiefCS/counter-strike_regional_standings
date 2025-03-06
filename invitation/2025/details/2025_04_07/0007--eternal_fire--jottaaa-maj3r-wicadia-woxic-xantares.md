### Roster Details<br />
Team Name: Eternal Fire<br />
Roster: jottAAA, MAJ3R, Wicadia, woxic, XANTARES<br />
Global Rank: [7](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [6]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  1853.0<br />
<br />
Final Rank Value (1853.0) = Starting Rank Value (1886.3) + Head To Head Adjustments (-33.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.853[<sup>1</sup>](#table2)
- Bounty Collected: 0.680[<sup>2</sup>](#table1)
- Opponent Network: 0.343[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.719<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1886.3
- 400 + ( ( 0.719 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 1886.3


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
|           21 |      145 | 2025-02-21 | Team Falcons    | L   | 0.897      | -            | -                | -                | -         |   -14.14 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           20 |      198 | 2025-02-17 | 3DMAX           | W   | 0.871      | 1.000        | 0.278 (0.242)    | 0.517 (0.450)    | 1 (0.871) |     3.61 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           19 |      217 | 2025-02-16 | BIG             | W   | 0.862      | 1.000        | 0.239 (0.206)    | 0.512 (0.442)    | 1 (0.862) |     1.30 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           18 |      245 | 2025-02-15 | FaZe Clan       | L   | 0.857      | -            | -                | -                | -         |   -13.61 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           17 |      268 | 2025-02-14 | Imperial Female | W   | 0.851      | 1.000        | 0.134 (0.114)    | -                | 1 (0.851) |     0.13 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           16 |      498 | 2025-02-07 | The MongolZ     | L   | 0.804      | -            | -                | -                | -         |   -12.16 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           15 |      578 | 2025-02-04 | FaZe Clan       | W   | 0.784      | 1.000        | 0.792 (0.621)    | 0.563 (0.442)    | 1 (0.784) |    11.91 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           14 |      587 | 2025-02-03 | 3DMAX           | W   | 0.778      | 1.000        | 0.278 (0.216)    | 0.517 (0.402)    | 1 (0.778) |     2.82 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           13 |      600 | 2025-02-02 | Virtus.pro      | L   | 0.771      | -            | -                | -                | -         |   -20.39 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           12 |      618 | 2025-02-01 | Team Falcons    | W   | 0.763      | 1.000        | 1.000 (0.763)    | 0.696 (0.531)    | 1 (0.763) |    11.68 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           11 |      626 | 2025-01-30 | HEROIC          | W   | 0.752      | 1.000        | 0.109 (0.082)    | 0.488 (0.367)    | 1 (0.752) |     0.23 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           10 |      634 | 2025-01-29 | Complexity      | W   | 0.745      | 1.000        | -                | 0.182 (0.136)    | 1 (0.745) |     0.20 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|            9 |      653 | 2025-01-26 | Team Spirit     | L   | 0.724      | -            | -                | -                | -         |    -8.86 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|            8 |      657 | 2025-01-25 | G2 Esports      | W   | 0.718      | 0.769        | 0.631 (0.348)    | 0.384 (0.212)    | 1 (0.718) |     4.15 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|            7 |      663 | 2025-01-24 | Team Vitality   | W   | 0.711      | 0.769        | 1.000 (0.546)    | 0.509 (0.278)    | 1 (0.711) |    10.33 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|            6 |      671 | 2025-01-19 | Team Falcons    | W   | 0.676      | 0.363        | 1.000 (0.245)    | 0.696 (0.171)    | -         |    11.23 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|            5 |      682 | 2025-01-16 | Fluxo           | W   | 0.657      | -            | -                | -                | -         |     0.08 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|            4 |     1290 | 2024-11-23 | Astralis        | L   | 0.296      | -            | -                | -                | -         |    -4.86 | Calyx, MAJ3R, Wicadia, woxic, XANTARES   |
|            3 |     1327 | 2024-11-21 | Sashi Esport    | L   | 0.288      | -            | -                | -                | -         |    -9.04 | Calyx, MAJ3R, Wicadia, woxic, XANTARES   |
|            2 |     1338 | 2024-11-21 | 3DMAX           | L   | 0.283      | -            | -                | -                | -         |    -7.95 | Calyx, MAJ3R, Wicadia, woxic, XANTARES   |
|            1 |     1353 | 2024-11-20 | Aurora Gaming   | W   | 0.282      | -            | -                | -                | -         |     0.01 | Calyx, MAJ3R, Wicadia, woxic, XANTARES   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($151,694.16)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.67) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      0.912 | $62,500.00     | $56,976.27      |
| 2025-02-09 |      0.818 | $40,000.00     | $32,711.11      |
| 2025-01-26 |      0.724 | $85,625.00     | $62,006.77      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
