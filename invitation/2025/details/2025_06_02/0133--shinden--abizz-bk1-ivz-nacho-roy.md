### Roster Details<br />
Team Name: ShindeN<br />
Roster: abizz, BK1, ivz, nacho, roy<br />
Global Rank: [133](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_06_02.md)<br />
Regional Rank: [41]( ../../standings_americas_2025_06_02.md)<br />
<br />
Final Rank Value:  409.9<br />
<br />
Final Rank Value (409.9) = Starting Rank Value (402.7) + Head To Head Adjustments (7.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.001<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 402.7
- 400 + ( ( 0.001 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 402.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      179 | 2025-02-17 | Yawara E-Sports   | L   | 0.499      | -            | -                | -                | -         |    -8.03 | abizz, BK1, ivz, nacho, roy      |
|            9 |      203 | 2025-02-16 | UNO MILLE         | L   | 0.493      | -            | -                | -                | -         |    -7.75 | abizz, BK1, ivz, nacho, roy      |
|            8 |      270 | 2025-02-14 | Game Hunters      | W   | 0.478      | 0.371        | 0.000 (0.000)    | 0.205 (0.036)    | 0 (0.000) |     8.82 | abizz, BK1, ivz, nacho, roy      |
|            7 |      334 | 2025-02-11 | Atrix Esports     | W   | 0.458      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.80 | abizz, BK1, ivz, nacho, roy      |
|            6 |      487 | 2025-02-07 | Imperial Esports  | L   | 0.433      | -            | -                | -                | -         |    -0.99 | abizz, BK1, ivz, nacho, roy      |
|            5 |      698 | 2025-01-10 | Legacy            | L   | 0.246      | -            | -                | -                | -         |    -0.87 | abizz, BK1, ivz, relentless, roy |
|            4 |      706 | 2025-01-09 | Patins da Ferrari | W   | 0.240      | 0.384        | 0.000 (0.000)    | 0.049 (0.004)    | 0 (0.000) |     4.76 | abizz, BK1, ivz, relentless, roy |
|            3 |      811 | 2024-12-18 | Fake do Biru      | W   | 0.092      | 0.384        | 0.000 (0.000)    | 0.146 (0.005)    | 0 (0.000) |     1.87 | abizz, BK1, ivz, relentless, roy |
|            2 |      831 | 2024-12-16 | 9z Academy        | W   | 0.078      | 0.384        | 0.000 (0.000)    | 0.050 (0.001)    | 0 (0.000) |     1.57 | abizz, BK1, ivz, relentless, roy |
|            1 |      870 | 2024-12-14 | América eSports   | W   | 0.065      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.01 | abizz, BK1, ivz, relentless, roy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
