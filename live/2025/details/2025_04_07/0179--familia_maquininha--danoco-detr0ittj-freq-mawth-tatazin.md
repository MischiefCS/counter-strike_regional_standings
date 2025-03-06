### Roster Details<br />
Team Name: Familia Maquininha<br />
Roster: danoco, detr0ittJ, fREQ, mawth, tatazin<br />
Global Rank: [179](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_04_07.md)<br />
Regional Rank: [51]( ../../standings_americas_2025_04_07.md)<br />
<br />
Final Rank Value:  591.6<br />
<br />
Final Rank Value (591.6) = Starting Rank Value (631.7) + Head To Head Adjustments (-40.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.249[<sup>1</sup>](#table2)
- Bounty Collected: 0.189[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.112<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 631.7
- 400 + ( ( 0.112 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 631.7


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
|           11 |      204 | 2025-02-16 | Players (Brazilian team) | L   | 0.866      | -            | -                | -                | -         |    -9.30 | danoco, detr0ittJ, fREQ, mawth, tatazin   |
|           10 |      284 | 2025-02-13 | Yawara E-Sports          | L   | 0.846      | -            | -                | -                | -         |   -12.25 | danoco, detr0ittJ, fREQ, mawth, tatazin   |
|            9 |      325 | 2025-02-11 | Nitro.GG                 | W   | 0.833      | 0.371        | 0.001 (0.000)    | 0.312 (0.096)    | 0 (0.000) |    14.01 | danoco, detr0ittJ, fREQ, mawth, tatazin   |
|            8 |      359 | 2025-02-10 | MIBR Academy             | L   | 0.825      | -            | -                | -                | -         |   -11.42 | danoco, detr0ittJ, fREQ, mawth, tatazin   |
|            7 |      522 | 2025-02-06 | Dusty Roots              | L   | 0.798      | -            | -                | -                | -         |    -8.65 | danoco, detr0ittJ, mawth, tatazin, urban0 |
|            6 |      547 | 2025-02-05 | Legacy                   | L   | 0.791      | -            | -                | -                | -         |    -6.78 | danoco, detr0ittJ, mawth, tatazin, urban0 |
|            5 |      703 | 2025-01-10 | Team Solid               | L   | 0.617      | -            | -                | -                | -         |    -5.80 | danoco, ksloks, mawth, RCF, tatazin       |
|            4 |     1923 | 2024-10-16 | Party Astronauts         | L   | 0.047      | -            | -                | -                | -         |    -0.64 | danoco, land1n, mawth, tatazin, w1        |
|            3 |     1950 | 2024-10-15 | Timbermen                | W   | 0.040      | 0.477        | 0.009 (0.000)    | 0.132 (0.003)    | 0 (0.000) |     0.75 | danoco, land1n, mawth, tatazin, w1        |
|            2 |     2013 | 2024-10-09 | Legacy                   | L   | 0.000      | -            | -                | -                | -         |    -0.00 | danoco, land1n, mawth, tatazin, w1        |
|            1 |     2020 | 2024-10-09 | Legacy                   | L   | 0.000      | -            | -                | -                | -         |     0.00 | danoco, land1n, mawth, tatazin, w1        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($218.33)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.073 | $3,000.00      | $218.33         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
