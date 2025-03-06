### Roster Details<br />
Team Name: Familia Maquininha<br />
Roster: danoco, detr0ittJ, fREQ, mawth, tatazin<br />
Global Rank: [184](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_05_05.md)<br />
Regional Rank: [55]( ../../standings_americas_2025_05_05.md)<br />
<br />
Final Rank Value:  484.8<br />
<br />
Final Rank Value (484.8) = Starting Rank Value (500.0) + Head To Head Adjustments (-15.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.178[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.046<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 500.0
- 400 + ( ( 0.046 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 500.0


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
|            7 |      204 | 2025-02-16 | Players (Brazilian team) | L   | 0.679      | -            | -                | -                | -         |    -4.74 | danoco, detr0ittJ, fREQ, mawth, tatazin   |
|            6 |      284 | 2025-02-13 | Yawara E-Sports          | L   | 0.659      | -            | -                | -                | -         |    -7.62 | danoco, detr0ittJ, fREQ, mawth, tatazin   |
|            5 |      325 | 2025-02-11 | Nitro.GG                 | W   | 0.647      | 0.371        | 0.001 (0.000)    | 0.247 (0.059)    | 0 (0.000) |    13.31 | danoco, detr0ittJ, fREQ, mawth, tatazin   |
|            4 |      359 | 2025-02-10 | MIBR Academy             | L   | 0.639      | -            | -                | -                | -         |    -6.15 | danoco, detr0ittJ, fREQ, mawth, tatazin   |
|            3 |      522 | 2025-02-06 | Dusty Roots              | L   | 0.611      | -            | -                | -                | -         |    -4.42 | danoco, detr0ittJ, mawth, tatazin, urban0 |
|            2 |      547 | 2025-02-05 | Legacy                   | L   | 0.605      | -            | -                | -                | -         |    -3.06 | danoco, detr0ittJ, mawth, tatazin, urban0 |
|            1 |      703 | 2025-01-10 | Team Solid               | L   | 0.431      | -            | -                | -                | -         |    -2.53 | danoco, ksloks, mawth, RCF, tatazin       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
