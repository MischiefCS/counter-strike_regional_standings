### Roster Details<br />
Team Name: ShindeN<br />
Roster: abizz, BK1, ivz, nacho, roy<br />
Global Rank: [106](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_07_07.md)<br />
Regional Rank: [31]( ../../standings_americas_2025_07_07.md)<br />
<br />
Final Rank Value:  399.7<br />
<br />
Final Rank Value (399.7) = Starting Rank Value (401.0) + Head To Head Adjustments (-1.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 401.0
- 400 + ( ( 0.000 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 401.0


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
|            7 |      179 | 2025-02-17 | Yawara E-Sports   | L   | 0.266      | -            | -                | -                | -         |    -4.19 | abizz, BK1, ivz, nacho, roy      |
|            6 |      203 | 2025-02-16 | UNO MILLE         | L   | 0.260      | -            | -                | -                | -         |    -4.06 | abizz, BK1, ivz, nacho, roy      |
|            5 |      270 | 2025-02-14 | Game Hunters      | W   | 0.244      | 0.371        | 0.000 (0.000)    | 0.183 (0.017)    | 0 (0.000) |     3.83 | abizz, BK1, ivz, nacho, roy      |
|            4 |      334 | 2025-02-11 | Atrix Esports     | W   | 0.224      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.49 | abizz, BK1, ivz, nacho, roy      |
|            3 |      487 | 2025-02-07 | Imperial Esports  | L   | 0.200      | -            | -                | -                | -         |    -0.44 | abizz, BK1, ivz, nacho, roy      |
|            2 |      698 | 2025-01-10 | Legacy            | L   | 0.013      | -            | -                | -                | -         |    -0.05 | abizz, BK1, ivz, relentless, roy |
|            1 |      706 | 2025-01-09 | Patins da Ferrari | W   | 0.006      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.10 | abizz, BK1, ivz, relentless, roy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
