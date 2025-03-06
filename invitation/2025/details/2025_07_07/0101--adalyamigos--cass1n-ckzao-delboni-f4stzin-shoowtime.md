### Roster Details<br />
Team Name: AdalYamigos<br />
Roster: cass1n, ckzao, delboNi, f4stzin, SHOOWTiME<br />
Global Rank: [101](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_07_07.md)<br />
Regional Rank: [27]( ../../standings_americas_2025_07_07.md)<br />
<br />
Final Rank Value:  401.3<br />
<br />
Final Rank Value (401.3) = Starting Rank Value (401.3) + Head To Head Adjustments (0.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.001<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 401.3
- 400 + ( ( 0.001 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 401.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      228 | 2025-02-15 | MIBR Academy           | L   | 0.252      | -            | -                | -                | -         |    -2.85 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME |
|            7 |      293 | 2025-02-13 | Nitro.GG               | W   | 0.238      | 0.371        | 0.000 (0.000)    | 0.160 (0.014)    | 0 (0.000) |     3.75 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME |
|            6 |      328 | 2025-02-11 | Bounty Hunters Esports | L   | 0.226      | -            | -                | -                | -         |    -2.49 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME |
|            5 |      397 | 2025-02-09 | Game Hunters           | L   | 0.212      | -            | -                | -                | -         |    -3.38 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME |
|            4 |      494 | 2025-02-07 | Imperial Esports       | L   | 0.198      | -            | -                | -                | -         |    -0.45 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME |
|            3 |      510 | 2025-02-06 | Fake do Biru           | W   | 0.193      | 0.143        | 0.000 (0.000)    | 0.078 (0.002)    | 0 (0.000) |     3.02 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME |
|            2 |      537 | 2025-02-05 | Imperial Esports       | L   | 0.186      | -            | -                | -                | -         |    -0.42 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME |
|            1 |      544 | 2025-02-05 | KRÜ Esports            | W   | 0.185      | 0.143        | 0.000 (0.000)    | 0.162 (0.004)    | 0 (0.000) |     2.90 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
