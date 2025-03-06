### Roster Details<br />
Team Name: Familia Maquininha<br />
Roster: danoco, detr0ittJ, fREQ, mawth, tatazin<br />
Global Rank: [145](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_06_02.md)<br />
Regional Rank: [45]( ../../standings_americas_2025_06_02.md)<br />
<br />
Final Rank Value:  390.0<br />
<br />
Final Rank Value (390.0) = Starting Rank Value (401.9) + Head To Head Adjustments (-11.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.001<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 401.9
- 400 + ( ( 0.001 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 401.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                 | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      204 | 2025-02-16 | Players (Brazilian team) | L   | 0.493      | -            | -                | -                | -         |    -2.89 | danoco, detr0ittJ, fREQ, mawth, tatazin   |
|            6 |      284 | 2025-02-13 | Yawara E-Sports          | L   | 0.473      | -            | -                | -                | -         |    -7.35 | danoco, detr0ittJ, fREQ, mawth, tatazin   |
|            5 |      325 | 2025-02-11 | Nitro.GG                 | W   | 0.460      | 0.371        | 0.000 (0.000)    | 0.190 (0.032)    | 0 (0.000) |     7.55 | danoco, detr0ittJ, fREQ, mawth, tatazin   |
|            4 |      359 | 2025-02-10 | MIBR Academy             | L   | 0.452      | -            | -                | -                | -         |    -4.63 | danoco, detr0ittJ, fREQ, mawth, tatazin   |
|            3 |      522 | 2025-02-06 | Dusty Roots              | L   | 0.425      | -            | -                | -                | -         |    -2.11 | danoco, detr0ittJ, mawth, tatazin, urban0 |
|            2 |      547 | 2025-02-05 | Legacy                   | L   | 0.418      | -            | -                | -                | -         |    -1.40 | danoco, detr0ittJ, mawth, tatazin, urban0 |
|            1 |      703 | 2025-01-10 | Team Solid               | L   | 0.244      | -            | -                | -                | -         |    -1.03 | danoco, ksloks, mawth, RCF, tatazin       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
