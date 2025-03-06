### Roster Details<br />
Team Name: Team Novaq<br />
Roster: def1zer, forkyz, neaLaN, Pumpkin66, tasman<br />
Global Rank: [67](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [47]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  817.9<br />
<br />
Final Rank Value (817.9) = Starting Rank Value (854.7) + Head To Head Adjustments (-36.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.382[<sup>1</sup>](#table2)
- Bounty Collected: 0.276[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.211[<sup>2</sup>](#table1)

The average of these factors is 0.220<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 854.7
- 400 + ( ( 0.220 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 854.7


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
|            8 |       92 | 2025-02-23 | Roler Coaster   | L   | 0.911      | -            | -                | -                | -         |   -24.00 | def1zer, forkyz, neaLaN, Pumpkin66, tasman |
|            7 |      452 | 2025-02-08 | Little Red Door | L   | 0.812      | -            | -                | -                | -         |   -22.13 | def1zer, forkyz, neaLaN, Pumpkin66, tasman |
|            6 |      854 | 2024-12-15 | AK BARS         | W   | 0.443      | 0.333        | 0.006 (0.001)    | 0.000 (0.000)    | 1 (0.443) |     2.14 | dako, def1zer, forkyz, Pumpkin66, tasman   |
|            5 |     1424 | 2024-11-16 | GTZ.ESPORTS     | L   | 0.251      | -            | -                | -                | -         |    -2.42 | dako, def1zer, demente, neaLaN, Pumpkin66  |
|            4 |     1441 | 2024-11-15 | KONO.ECF        | W   | 0.244      | 0.617        | 0.017 (0.003)    | 0.272 (0.041)    | 1 (0.244) |     2.61 | dako, def1zer, demente, neaLaN, Pumpkin66  |
|            3 |     1445 | 2024-11-15 | GnG x Amazigh   | W   | 0.244      | 0.617        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.244) |     0.54 | dako, def1zer, demente, neaLaN, Pumpkin66  |
|            2 |     1481 | 2024-11-14 | Team Latvia     | W   | 0.238      | 0.617        | 0.000 (0.000)    | 0.039 (0.006)    | 1 (0.238) |     1.13 | dako, def1zer, demente, neaLaN, Pumpkin66  |
|            1 |     1482 | 2024-11-14 | Nexus Gaming    | W   | 0.237      | 0.617        | 0.140 (0.021)    | 0.362 (0.053)    | 1 (0.237) |     5.33 | dako, def1zer, demente, neaLaN, Pumpkin66  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,439.24)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.443 | $5,000.00      | $2,215.28       |
| 2024-11-17 |      0.258 | $12,500.00     | $3,223.96       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
