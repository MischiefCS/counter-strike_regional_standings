### Roster Details<br />
Team Name: Viperio<br />
Roster: dezt, shyyne, Skrimo, swicher, zodi<br />
Global Rank: [131](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [90]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  620.2<br />
<br />
Final Rank Value (620.2) = Starting Rank Value (632.7) + Head To Head Adjustments (-12.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.262[<sup>1</sup>](#table2)
- Bounty Collected: 0.165[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.107<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 632.7
- 400 + ( ( 0.107 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 632.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      805 | 2024-12-19 | Astralis Talent  | L   | 0.283      | -            | -                | -                | -         |    -3.81 | dezt, shyyne, Skrimo, swicher, zodi  |
|            9 |      817 | 2024-12-18 | WOPA Esport      | L   | 0.277      | -            | -                | -                | -         |    -2.88 | dezt, shyyne, Skrimo, swicher, zodi  |
|            8 |     1093 | 2024-12-03 | FORZE Reload     | L   | 0.177      | -            | -                | -                | -         |    -2.15 | dezt, shyyne, Skrimo, swicher, zodi  |
|            7 |     1114 | 2024-12-02 | Illuminar Gaming | W   | 0.170      | 0.333        | 0.002 (0.000)    | 0.077 (0.004)    | 0 (0.000) |     2.95 | dezt, shyyne, Skrimo, swicher, zodi  |
|            6 |     1128 | 2024-12-01 | ALTERNATE aTTaX  | L   | 0.165      | -            | -                | -                | -         |    -1.84 | dezt, shyyne, Skrimo, swicher, zodi  |
|            5 |     1217 | 2024-11-27 | BC.Game Esports  | L   | 0.138      | -            | -                | -                | -         |    -1.55 | dezt, shyyne, Skrimo, swicher, zodi  |
|            4 |     1266 | 2024-11-24 | Tricked Esport   | L   | 0.116      | -            | -                | -                | -         |    -1.19 | dezt, Silence, Skrimo, swicher, zodi |
|            3 |     1313 | 2024-11-22 | Chimera Esports  | L   | 0.104      | -            | -                | -                | -         |    -1.08 | dezt, Silence, Skrimo, swicher, zodi |
|            2 |     1528 | 2024-11-13 | GenOne           | L   | 0.043      | -            | -                | -                | -         |    -0.50 | dezt, Silence, Skrimo, swicher, zodi |
|            1 |     1547 | 2024-11-12 | Leo Team         | L   | 0.037      | -            | -                | -                | -         |    -0.44 | dezt, Silence, Skrimo, swicher, zodi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($184.58)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-04 |      0.185 | $1,000.00      | $184.58         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
