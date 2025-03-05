### Roster Details<br />
Team Name: Clutch Gaming<br />
Roster: hasteka, IZR, ORIGLON, Tsogoo, Veccil<br />
Global Rank: [255](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [37]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  533.8<br />
<br />
Final Rank Value (533.8) = Starting Rank Value (535.0) + Head To Head Adjustments (-1.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.219[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.058[<sup>2</sup>](#table1)

The average of these factors is 0.071<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 535.0
- 400 + ( ( 0.071 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 535.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     1643 | 2024-11-06 | IHC Esports       | L   | 0.437      | -            | -                | -                | -         |    -4.76 | hasteka, IZR, ORIGLON, Tsogoo, Veccil     |
|           11 |     1654 | 2024-11-06 | Gods Reign        | W   | 0.431      | 0.445        | 0.014 (0.003)    | 0.360 (0.069)    | 0 (0.000) |    12.26 | hasteka, IZR, ORIGLON, Tsogoo, Veccil     |
|           10 |     1656 | 2024-11-05 | DEWA United       | L   | 0.430      | -            | -                | -                | -         |    -6.36 | hasteka, IZR, ORIGLON, Tsogoo, Veccil     |
|            9 |     1917 | 2024-10-17 | ATOX Esports      | L   | 0.297      | -            | -                | -                | -         |    -2.13 | clouden, hasteka, IZR, ORIGLON, Tsogoo    |
|            8 |     1947 | 2024-10-15 | The QUBE Esports  | W   | 0.290      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.290) |     4.15 | clouden, hasteka, IZR, ORIGLON, Tsogoo    |
|            7 |     1965 | 2024-10-15 | Chinggis Warriors | L   | 0.284      | -            | -                | -                | -         |    -1.03 | clouden, hasteka, IZR, ORIGLON, Tsogoo    |
|            6 |     2217 | 2024-10-04 | ATOX Esports      | L   | 0.211      | -            | -                | -                | -         |    -0.23 | clouden, hasteka, IZR, ORIGLON, Tsogoo    |
|            5 |     2224 | 2024-10-03 | The QUBE Esports  | W   | 0.209      | 0.660        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.209) |     2.15 | clouden, hasteka, IZR, ORIGLON, Tsogoo    |
|            4 |     2287 | 2024-10-02 | Gods Reign        | L   | 0.198      | -            | -                | -                | -         |    -0.54 | hasteka, IIIMAGINEEE, IZR, Tsogoo, Veccil |
|            3 |     2292 | 2024-10-02 | Gods Reign        | L   | 0.198      | -            | -                | -                | -         |    -0.54 | hasteka, IIIMAGINEEE, IZR, Tsogoo, Veccil |
|            2 |     2605 | 2024-09-24 | -72C              | L   | 0.145      | -            | -                | -                | -         |    -2.09 | hasteka, IIIMAGINEEE, IZR, Tsogoo, Veccil |
|            1 |     2615 | 2024-09-24 | -72C              | L   | 0.145      | -            | -                | -                | -         |    -2.11 | hasteka, IIIMAGINEEE, IZR, Tsogoo, Veccil |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
