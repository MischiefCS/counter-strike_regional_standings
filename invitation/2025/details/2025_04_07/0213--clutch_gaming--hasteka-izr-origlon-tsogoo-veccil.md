### Roster Details<br />
Team Name: Clutch Gaming<br />
Roster: hasteka, IZR, ORIGLON, Tsogoo, Veccil<br />
Global Rank: [213](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_04_07.md)<br />
Regional Rank: [33]( ../../standings_asia_2025_04_07.md)<br />
<br />
Final Rank Value:  506.6<br />
<br />
Final Rank Value (506.6) = Starting Rank Value (507.2) + Head To Head Adjustments (-0.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.199[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.006[<sup>2</sup>](#table1)

The average of these factors is 0.052<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 507.2
- 400 + ( ( 0.052 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 507.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1643 | 2024-11-06 | IHC Esports       | L   | 0.189      | -            | -                | -                | -         |    -1.87 | hasteka, IZR, ORIGLON, Tsogoo, Veccil  |
|            5 |     1654 | 2024-11-06 | Gods Reign        | W   | 0.182      | 0.333        | 0.016 (0.001)    | 0.329 (0.020)    | 0 (0.000) |     5.25 | hasteka, IZR, ORIGLON, Tsogoo, Veccil  |
|            4 |     1656 | 2024-11-05 | DEWA United       | L   | 0.182      | -            | -                | -                | -         |    -3.69 | hasteka, IZR, ORIGLON, Tsogoo, Veccil  |
|            3 |     1917 | 2024-10-17 | ATOX Esports      | L   | 0.049      | -            | -                | -                | -         |    -0.46 | clouden, hasteka, IZR, ORIGLON, Tsogoo |
|            2 |     1947 | 2024-10-15 | The QUBE Esports  | W   | 0.042      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.042) |     0.47 | clouden, hasteka, IZR, ORIGLON, Tsogoo |
|            1 |     1965 | 2024-10-15 | Chinggis Warriors | L   | 0.036      | -            | -                | -                | -         |    -0.27 | clouden, hasteka, IZR, ORIGLON, Tsogoo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
