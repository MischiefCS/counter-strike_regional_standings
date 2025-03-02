### Roster Details<br />
Team Name: Ex-Daystar<br />
Roster: awks, BehinDx, Chill, giM, Matheos<br />
Global Rank: [411](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [257]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  601.3<br />
<br />
Final Rank Value (601.3) = Starting Rank Value (540.5) + Head To Head Adjustments (60.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.240[<sup>2</sup>](#table1)
- Opponent Network: 0.032[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.068<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 540.5
- 400 + ( ( 0.068 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 540.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      557 | 2025-02-08 | TEAM NEXT LEVEL   | L   | 1.000      | -            | -                | -                | -         |    -9.89 | awks, BehinDx, Chill, giM, Matheos |
|            4 |      569 | 2025-02-08 | Hesta             | L   | 1.000      | -            | -                | -                | -         |    -7.93 | awks, BehinDx, Chill, giM, Matheos |
|            3 |      575 | 2025-02-08 | Betera Esports    | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.293 (0.042)    | 0 (0.000) |    22.45 | awks, BehinDx, Chill, giM, Matheos |
|            2 |      597 | 2025-02-08 | FAVBET Team       | W   | 1.000      | 0.143        | 0.038 (0.005)    | 0.969 (0.138)    | 0 (0.000) |    27.32 | awks, BehinDx, Chill, giM, Matheos |
|            1 |      646 | 2025-02-07 | Fire Flux Esports | W   | 1.000      | 0.143        | 0.009 (0.001)    | 1.000 (0.143)    | 0 (0.000) |    28.88 | awks, BehinDx, Chill, giM, Matheos |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
