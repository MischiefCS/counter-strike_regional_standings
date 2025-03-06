### Roster Details<br />
Team Name: Team Novaq<br />
Roster: def1zer, forkyz, neaLaN, Pumpkin66, tasman<br />
Global Rank: [79](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [55]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  745.9<br />
<br />
Final Rank Value (745.9) = Starting Rank Value (776.1) + Head To Head Adjustments (-30.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.364[<sup>1</sup>](#table2)
- Bounty Collected: 0.226[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.099[<sup>2</sup>](#table1)

The average of these factors is 0.173<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 776.1
- 400 + ( ( 0.173 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 776.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |       92 | 2025-02-23 | Roler Coaster   | L   | 0.724      | -            | -                | -                | -         |   -17.82 | def1zer, forkyz, neaLaN, Pumpkin66, tasman |
|            7 |      452 | 2025-02-08 | Little Red Door | L   | 0.625      | -            | -                | -                | -         |   -15.90 | def1zer, forkyz, neaLaN, Pumpkin66, tasman |
|            6 |      854 | 2024-12-15 | AK BARS         | W   | 0.256      | 0.333        | 0.005 (0.000)    | 0.000 (0.000)    | 1 (0.256) |     1.89 | dako, def1zer, forkyz, Pumpkin66, tasman   |
|            5 |     1424 | 2024-11-16 | GTZ.ESPORTS     | L   | 0.065      | -            | -                | -                | -         |    -0.71 | dako, def1zer, demente, neaLaN, Pumpkin66  |
|            4 |     1441 | 2024-11-15 | KONO.ECF        | W   | 0.058      | 0.617        | 0.019 (0.001)    | 0.206 (0.007)    | 1 (0.058) |     0.80 | dako, def1zer, demente, neaLaN, Pumpkin66  |
|            3 |     1445 | 2024-11-15 | GnG x Amazigh   | W   | 0.057      | 0.617        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.057) |     0.19 | dako, def1zer, demente, neaLaN, Pumpkin66  |
|            2 |     1481 | 2024-11-14 | Team Latvia     | W   | 0.051      | 0.617        | 0.000 (0.000)    | 0.012 (0.000)    | 1 (0.051) |     0.31 | dako, def1zer, demente, neaLaN, Pumpkin66  |
|            1 |     1482 | 2024-11-14 | Nexus Gaming    | W   | 0.051      | 0.617        | 0.086 (0.003)    | 0.235 (0.007)    | 1 (0.051) |     1.03 | dako, def1zer, demente, neaLaN, Pumpkin66  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,172.57)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.256 | $5,000.00      | $1,281.94       |
| 2024-11-17 |      0.071 | $12,500.00     | $890.62         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
