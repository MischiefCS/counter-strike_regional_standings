### Roster Details<br />
Team Name: Clutch Gaming<br />
Roster: hasteka, IZR, sergelen19k, shigeru, Tsogoo<br />
Global Rank: [308](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [55]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  525.3<br />
<br />
Final Rank Value (525.3) = Starting Rank Value (538.2) + Head To Head Adjustments (-12.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.218[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.058[<sup>2</sup>](#table1)

The average of these factors is 0.071<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 538.2
- 400 + ( ( 0.071 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 538.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     1193 | 2024-12-23 | The QUBE Esports  | L   | 0.750      | -            | -                | -                | -         |   -10.45 | hasteka, IZR, sergelen19k, shigeru, Tsogoo |
|           13 |     1195 | 2024-12-23 | The Huns Esports  | L   | 0.749      | -            | -                | -                | -         |    -2.24 | hasteka, IZR, sergelen19k, shigeru, Tsogoo |
|           12 |     3035 | 2024-11-06 | IHC Esports       | L   | 0.437      | -            | -                | -                | -         |    -4.78 | hasteka, IZR, ORIGLON, Tsogoo, Veccil      |
|           11 |     3056 | 2024-11-06 | Gods Reign        | W   | 0.431      | 0.333        | 0.018 (0.003)    | 0.440 (0.063)    | 0 (0.000) |    12.26 | hasteka, IZR, ORIGLON, Tsogoo, Veccil      |
|           10 |     3058 | 2024-11-05 | DEWA United       | L   | 0.430      | -            | -                | -                | -         |    -5.71 | hasteka, IZR, ORIGLON, Tsogoo, Veccil      |
|            9 |     3532 | 2024-10-17 | ATOX Esports      | L   | 0.297      | -            | -                | -                | -         |    -2.04 | clouden, hasteka, IZR, ORIGLON, Tsogoo     |
|            8 |     3562 | 2024-10-15 | The QUBE Esports  | W   | 0.290      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.290) |     4.14 | clouden, hasteka, IZR, ORIGLON, Tsogoo     |
|            7 |     3580 | 2024-10-15 | Chinggis Warriors | L   | 0.284      | -            | -                | -                | -         |    -0.61 | clouden, hasteka, IZR, ORIGLON, Tsogoo     |
|            6 |     3832 | 2024-10-04 | ATOX Esports      | L   | 0.211      | -            | -                | -                | -         |    -0.32 | clouden, hasteka, IZR, ORIGLON, Tsogoo     |
|            5 |     3839 | 2024-10-03 | The QUBE Esports  | W   | 0.209      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.209) |     2.12 | clouden, hasteka, IZR, ORIGLON, Tsogoo     |
|            4 |     3902 | 2024-10-02 | Gods Reign        | L   | 0.198      | -            | -                | -                | -         |    -0.53 | hasteka, IIIMAGINEEE, IZR, Tsogoo, Veccil  |
|            3 |     3907 | 2024-10-02 | Gods Reign        | L   | 0.198      | -            | -                | -                | -         |    -0.53 | hasteka, IIIMAGINEEE, IZR, Tsogoo, Veccil  |
|            2 |     4220 | 2024-09-24 | -72C              | L   | 0.145      | -            | -                | -                | -         |    -2.08 | hasteka, IIIMAGINEEE, IZR, Tsogoo, Veccil  |
|            1 |     4230 | 2024-09-24 | -72C              | L   | 0.145      | -            | -                | -                | -         |    -2.10 | hasteka, IIIMAGINEEE, IZR, Tsogoo, Veccil  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
