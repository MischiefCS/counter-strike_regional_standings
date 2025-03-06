### Roster Details<br />
Team Name: AdalYamigos<br />
Roster: cass1n, ckzao, delboNi, f4stzin, SHOOWTiME<br />
Global Rank: [178](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_05_05.md)<br />
Regional Rank: [51]( ../../standings_americas_2025_05_05.md)<br />
<br />
Final Rank Value:  503.5<br />
<br />
Final Rank Value (503.5) = Starting Rank Value (501.7) + Head To Head Adjustments (1.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.178[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.047<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 501.7
- 400 + ( ( 0.047 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 501.7


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
|            8 |      228 | 2025-02-15 | MIBR Academy           | L   | 0.672      | -            | -                | -                | -         |    -7.22 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME |
|            7 |      293 | 2025-02-13 | Nitro.GG               | W   | 0.658      | 0.371        | 0.001 (0.000)    | 0.247 (0.060)    | 0 (0.000) |    12.80 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME |
|            6 |      328 | 2025-02-11 | Bounty Hunters Esports | L   | 0.646      | -            | -                | -                | -         |    -9.16 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME |
|            5 |      397 | 2025-02-09 | Game Hunters           | L   | 0.632      | -            | -                | -                | -         |    -7.74 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME |
|            4 |      494 | 2025-02-07 | Imperial Esports       | L   | 0.618      | -            | -                | -                | -         |    -2.16 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME |
|            3 |      510 | 2025-02-06 | Fake do Biru           | W   | 0.613      | 0.143        | 0.000 (0.000)    | 0.172 (0.015)    | 0 (0.000) |    10.49 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME |
|            2 |      537 | 2025-02-05 | Imperial Esports       | L   | 0.606      | -            | -                | -                | -         |    -2.05 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME |
|            1 |      544 | 2025-02-05 | KRÜ Esports            | W   | 0.605      | 0.143        | 0.000 (0.000)    | 0.144 (0.012)    | 0 (0.000) |     6.91 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
