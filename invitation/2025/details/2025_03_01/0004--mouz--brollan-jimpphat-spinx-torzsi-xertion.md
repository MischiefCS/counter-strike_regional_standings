### Roster Details<br />
Team Name: MOUZ<br />
Roster: Brollan, Jimpphat, Spinx, torzsi, xertioN<br />
Global Rank: [4](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [3]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  1872.5<br />
<br />
Final Rank Value (1872.5) = Starting Rank Value (1986.3) + Head To Head Adjustments (-113.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.714[<sup>2</sup>](#table1)
- Opponent Network: 0.571[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.821<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1986.3
- 400 + ( ( 0.821 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1986.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           36 |       81 | 2025-02-23 | Team Falcons     | W   | 1.000      | 1.000        | 0.927 (0.927)    | 0.744 (0.744)    | 1 (1.000) |    14.74 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           35 |      113 | 2025-02-22 | Astralis         | W   | 1.000      | 1.000        | 0.609 (0.609)    | 1.000 (1.000)    | 1 (1.000) |     8.40 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           34 |      151 | 2025-02-21 | PaiN Gaming      | W   | 1.000      | 1.000        | 0.318 (0.318)    | 0.632 (0.632)    | 1 (1.000) |     6.32 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           33 |      173 | 2025-02-18 | Virtus.pro       | W   | 1.000      | 1.000        | 0.268 (0.268)    | 0.547 (0.547)    | 1 (1.000) |     6.28 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           32 |      201 | 2025-02-17 | Team Falcons     | L   | 1.000      | -            | -                | -                | -         |   -17.43 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           31 |      211 | 2025-02-16 | FaZe Clan        | L   | 1.000      | -            | -                | -                | -         |   -15.35 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           30 |      252 | 2025-02-15 | 3DMAX            | W   | 1.000      | 1.000        | 0.295 (0.295)    | 0.626 (0.626)    | 1 (1.000) |     4.79 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           29 |      282 | 2025-02-14 | BIG              | W   | 1.000      | 1.000        | 0.220 (0.220)    | 0.558 (0.558)    | 1 (1.000) |     1.55 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           28 |      593 | 2025-02-03 | Team Liquid      | L   | 1.000      | -            | -                | -                | -         |   -28.05 | Brollan, Jimpphat, torzsi, xelex, xertioN |
|           27 |      612 | 2025-02-01 | GamerLegion      | L   | 1.000      | -            | -                | -                | -         |   -27.21 | Brollan, Jimpphat, torzsi, xelex, xertioN |
|           26 |      677 | 2025-01-17 | BetBoom Team     | L   | 0.913      | -            | -                | -                | -         |   -28.62 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           25 |      884 | 2024-12-13 | Team Spirit      | L   | 0.683      | -            | -                | -                | -         |   -10.75 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           24 |      921 | 2024-12-11 | The MongolZ      | W   | 0.670      | 1.000        | 1.000 (0.670)    | 0.625 (0.419)    | 1 (0.670) |    10.34 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           23 |      972 | 2024-12-07 | MIBR             | W   | 0.643      | 1.000        | -                | 0.604 (0.388)    | 1 (0.643) |     1.06 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           22 |     1002 | 2024-12-06 | 3DMAX            | W   | 0.636      | 1.000        | 0.295 (0.188)    | 0.626 (0.398)    | 1 (0.636) |     2.01 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           21 |     1027 | 2024-12-05 | FaZe Clan        | L   | 0.629      | -            | -                | -                | -         |   -12.07 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           20 |     1046 | 2024-12-05 | The MongolZ      | L   | 0.624      | -            | -                | -                | -         |   -10.71 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           19 |     1059 | 2024-12-04 | PaiN Gaming      | W   | 0.623      | 1.000        | 0.318 (0.198)    | 0.632 (0.394)    | 1 (0.623) |     1.98 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           18 |     1389 | 2024-11-17 | Natus Vincere    | W   | 0.510      | -            | -                | -                | -         |     3.08 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           17 |     1405 | 2024-11-17 | HEROIC           | W   | 0.505      | -            | -                | -                | -         |     0.12 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           16 |     1418 | 2024-11-16 | Nemiga Gaming    | W   | 0.503      | -            | -                | -                | -         |     0.08 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           15 |     1740 | 2024-11-01 | Team Vitality    | L   | 0.397      | -            | -                | -                | -         |    -7.43 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           14 |     1756 | 2024-10-31 | Astralis         | L   | 0.391      | -            | -                | -                | -         |    -8.60 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           13 |     1775 | 2024-10-30 | FaZe Clan        | W   | 0.384      | 1.000        | 0.744 (0.286)    | -                | -         |     4.67 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           12 |     1971 | 2024-10-13 | Natus Vincere    | L   | 0.273      | -            | -                | -                | -         |    -7.05 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           11 |     1978 | 2024-10-12 | FURIA            | W   | 0.267      | -            | -                | -                | -         |     0.41 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           10 |     1989 | 2024-10-11 | Team Vitality    | W   | 0.260      | -            | -                | -                | -         |     3.27 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            9 |     2035 | 2024-10-09 | FaZe Clan        | W   | 0.247      | -            | -                | -                | -         |     3.04 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            8 |     2090 | 2024-10-08 | Complexity       | W   | 0.240      | -            | -                | -                | -         |     0.07 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            7 |     2124 | 2024-10-07 | FURIA            | L   | 0.233      | -            | -                | -                | -         |    -7.01 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            6 |     2133 | 2024-10-07 | PaiN Gaming      | W   | 0.232      | -            | -                | -                | -         |     0.87 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            5 |     2856 | 2024-09-15 | Complexity       | L   | 0.085      | -            | -                | -                | -         |    -2.64 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            4 |     2888 | 2024-09-14 | Fnatic           | W   | 0.078      | -            | -                | -                | -         |     0.01 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            3 |     2941 | 2024-09-12 | Complexity       | L   | 0.066      | -            | -                | -                | -         |    -2.07 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            2 |     2973 | 2024-09-11 | Imperial Esports | L   | 0.060      | -            | -                | -                | -         |    -1.88 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            1 |     3016 | 2024-09-10 | Rooster          | W   | 0.051      | -            | -                | -                | -         |     0.00 | Brollan, Jimpphat, siuhy, torzsi, xertioN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($488,590.09)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      1.000 | $400,000.00    | $400,000.00     |
| 2025-02-09 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-12-15 |      0.691 | $80,000.00     | $55,275.93      |
| 2024-11-03 |      0.411 | $25,000.00     | $10,270.83      |
| 2024-10-13 |      0.273 | $42,000.00     | $11,456.67      |
| 2024-09-22 |      0.132 | $12,000.00     | $1,586.67       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
