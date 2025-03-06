### Roster Details<br />
Team Name: ShindeN<br />
Roster: abizz, BK1, ivz, nacho, roy<br />
Global Rank: [179](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_05_05.md)<br />
Regional Rank: [52]( ../../standings_americas_2025_05_05.md)<br />
<br />
Final Rank Value:  501.5<br />
<br />
Final Rank Value (501.5) = Starting Rank Value (488.9) + Head To Head Adjustments (12.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.153[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.041<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 488.9
- 400 + ( ( 0.041 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 488.9


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
|           14 |      179 | 2025-02-17 | Yawara E-Sports   | L   | 0.686      | -            | -                | -                | -         |    -8.26 | abizz, BK1, ivz, nacho, roy      |
|           13 |      203 | 2025-02-16 | UNO MILLE         | L   | 0.680      | -            | -                | -                | -         |   -10.52 | abizz, BK1, ivz, nacho, roy      |
|           12 |      270 | 2025-02-14 | Game Hunters      | W   | 0.664      | 0.371        | 0.000 (0.000)    | 0.208 (0.051)    | 0 (0.000) |    12.67 | abizz, BK1, ivz, nacho, roy      |
|           11 |      334 | 2025-02-11 | Atrix Esports     | W   | 0.644      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.99 | abizz, BK1, ivz, nacho, roy      |
|           10 |      487 | 2025-02-07 | Imperial Esports  | L   | 0.620      | -            | -                | -                | -         |    -1.99 | abizz, BK1, ivz, nacho, roy      |
|            9 |      698 | 2025-01-10 | Legacy            | L   | 0.433      | -            | -                | -                | -         |    -2.29 | abizz, BK1, ivz, relentless, roy |
|            8 |      706 | 2025-01-09 | Patins da Ferrari | W   | 0.426      | 0.384        | 0.000 (0.000)    | 0.092 (0.015)    | 0 (0.000) |     7.12 | abizz, BK1, ivz, relentless, roy |
|            7 |      811 | 2024-12-18 | Fake do Biru      | W   | 0.279      | 0.384        | 0.000 (0.000)    | 0.172 (0.018)    | 0 (0.000) |     4.91 | abizz, BK1, ivz, relentless, roy |
|            6 |      831 | 2024-12-16 | 9z Academy        | W   | 0.265      | 0.384        | 0.000 (0.000)    | 0.103 (0.010)    | 0 (0.000) |     4.42 | abizz, BK1, ivz, relentless, roy |
|            5 |      870 | 2024-12-14 | América eSports   | W   | 0.252      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.02 | abizz, BK1, ivz, relentless, roy |
|            4 |     1244 | 2024-11-25 | 20/70             | L   | 0.125      | -            | -                | -                | -         |    -1.73 | abizz, BK1, ivz, relentless, roy |
|            3 |     1302 | 2024-11-22 | VELOX Argentina   | L   | 0.106      | -            | -                | -                | -         |    -2.07 | abizz, BK1, ivz, relentless, roy |
|            2 |     1333 | 2024-11-21 | Nitro.GG          | L   | 0.098      | -            | -                | -                | -         |    -1.03 | abizz, BK1, ivz, relentless, roy |
|            1 |     1383 | 2024-11-18 | LaChampionsLiga   | W   | 0.079      | 0.371        | 0.000 (0.000)    | 0.138 (0.004)    | 0 (0.000) |     1.32 | abizz, BK1, ivz, relentless, roy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
