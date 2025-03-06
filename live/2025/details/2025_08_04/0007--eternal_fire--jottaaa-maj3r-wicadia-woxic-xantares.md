### Roster Details<br />
Team Name: Eternal Fire<br />
Roster: jottAAA, MAJ3R, Wicadia, woxic, XANTARES<br />
Global Rank: [7](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [6]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  1660.6<br />
<br />
Final Rank Value (1660.6) = Starting Rank Value (1660.9) + Head To Head Adjustments (-0.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.937[<sup>1</sup>](#table2)
- Bounty Collected: 0.313[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.671[<sup>2</sup>](#table1)

The average of these factors is 0.481<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1660.9
- 400 + ( ( 0.481 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 1660.9


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
|            6 |      145 | 2025-02-21 | Team Falcons    | L   | 0.104      | -            | -                | -                | -         |    -0.45 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|            5 |      198 | 2025-02-17 | 3DMAX           | W   | 0.077      | 1.000        | 0.378 (0.029)    | 0.282 (0.022)    | 1 (0.077) |     0.32 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|            4 |      217 | 2025-02-16 | BIG             | W   | 0.069      | 1.000        | 0.378 (0.026)    | 0.256 (0.018)    | 1 (0.069) |     0.31 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|            3 |      245 | 2025-02-15 | FaZe Clan       | L   | 0.064      | -            | -                | -                | -         |    -0.33 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|            2 |      268 | 2025-02-14 | Imperial Female | W   | 0.058      | 1.000        | 0.151 (0.009)    | 0.000 (0.000)    | 1 (0.058) |     0.01 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|            1 |      498 | 2025-02-07 | The MongolZ     | L   | 0.011      | -            | -                | -                | -         |    -0.15 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,370.72)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.86) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      0.118 | $62,500.00     | $7,392.94       |
| 2025-02-09 |      0.024 | $40,000.00     | $977.78         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
