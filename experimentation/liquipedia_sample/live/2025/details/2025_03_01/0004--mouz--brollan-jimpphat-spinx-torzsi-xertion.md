### Roster Details<br />
Team Name: MOUZ<br />
Roster: Brollan, Jimpphat, Spinx, torzsi, xertioN<br />
Global Rank: [4](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [3]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  1883.5<br />
<br />
Final Rank Value (1883.5) = Starting Rank Value (2000.0) + Head To Head Adjustments (-116.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.716[<sup>2</sup>](#table1)
- Opponent Network: 0.534[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.812<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 2000.0
- 400 + ( ( 0.812 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 2000.0


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
|           36 |       84 | 2025-02-23 | Team Falcons     | W   | 1.000      | 1.000        | 0.927 (0.927)    | 0.674 (0.674)    | 1 (1.000) |    14.52 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           35 |      106 | 2025-02-22 | Astralis         | W   | 1.000      | 1.000        | 0.609 (0.609)    | 0.864 (0.864)    | 1 (1.000) |     8.48 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           34 |      145 | 2025-02-21 | PaiN Gaming      | W   | 1.000      | 1.000        | 0.318 (0.318)    | 0.610 (0.610)    | 1 (1.000) |     6.40 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           33 |      178 | 2025-02-18 | Virtus.pro       | W   | 1.000      | 1.000        | 0.268 (0.268)    | 0.482 (0.482)    | 1 (1.000) |     5.99 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           32 |      192 | 2025-02-17 | Team Falcons     | L   | 1.000      | -            | -                | -                | -         |   -17.66 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           31 |      205 | 2025-02-16 | FaZe Clan        | L   | 1.000      | -            | -                | -                | -         |   -15.50 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           30 |      234 | 2025-02-15 | 3DMAX            | W   | 1.000      | 1.000        | 0.295 (0.295)    | 0.587 (0.587)    | 1 (1.000) |     4.47 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           29 |      264 | 2025-02-14 | BIG              | W   | 1.000      | 1.000        | 0.246 (0.246)    | 0.616 (0.616)    | 1 (1.000) |     1.55 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           28 |      638 | 2025-02-03 | Team Liquid      | L   | 1.000      | -            | -                | -                | -         |   -28.10 | Brollan, Jimpphat, torzsi, xelex, xertioN |
|           27 |      660 | 2025-02-01 | GamerLegion      | L   | 1.000      | -            | -                | -                | -         |   -27.30 | Brollan, Jimpphat, torzsi, xelex, xertioN |
|           26 |      775 | 2025-01-17 | BetBoom Team     | L   | 0.913      | -            | -                | -                | -         |   -28.58 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           25 |     1339 | 2024-12-13 | Team Spirit      | L   | 0.683      | -            | -                | -                | -         |   -11.19 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           24 |     1456 | 2024-12-11 | The MongolZ      | W   | 0.670      | 1.000        | 1.000 (0.670)    | 0.636 (0.426)    | 1 (0.670) |    10.24 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           23 |     1636 | 2024-12-07 | MIBR             | W   | 0.643      | 1.000        | -                | 0.507 (0.326)    | 1 (0.643) |     0.94 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           22 |     1707 | 2024-12-06 | 3DMAX            | W   | 0.636      | 1.000        | 0.295 (0.188)    | 0.587 (0.373)    | 1 (0.636) |     1.83 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           21 |     1746 | 2024-12-05 | FaZe Clan        | L   | 0.629      | -            | -                | -                | -         |   -12.16 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           20 |     1770 | 2024-12-05 | The MongolZ      | L   | 0.624      | -            | -                | -                | -         |   -10.83 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           19 |     1783 | 2024-12-04 | PaiN Gaming      | W   | 0.623      | 1.000        | 0.318 (0.198)    | 0.610 (0.380)    | 1 (0.623) |     2.04 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           18 |     2771 | 2024-11-17 | Natus Vincere    | W   | 0.510      | -            | -                | -                | -         |     3.00 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           17 |     2812 | 2024-11-17 | HEROIC           | W   | 0.505      | -            | -                | -                | -         |     0.12 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           16 |     2852 | 2024-11-16 | Nemiga Gaming    | W   | 0.503      | -            | -                | -                | -         |     0.11 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           15 |     3739 | 2024-11-01 | Team Vitality    | L   | 0.397      | -            | -                | -                | -         |    -7.59 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           14 |     3783 | 2024-10-31 | Astralis         | L   | 0.391      | -            | -                | -                | -         |    -8.57 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           13 |     3852 | 2024-10-30 | FaZe Clan        | W   | 0.384      | 1.000        | 0.744 (0.286)    | -                | -         |     4.62 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           12 |     4631 | 2024-10-13 | Natus Vincere    | L   | 0.273      | -            | -                | -                | -         |    -7.10 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           11 |     4688 | 2024-10-12 | FURIA            | W   | 0.267      | -            | -                | -                | -         |     0.34 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           10 |     4749 | 2024-10-11 | Team Vitality    | W   | 0.260      | -            | -                | -                | -         |     3.17 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            9 |     4826 | 2024-10-09 | FaZe Clan        | W   | 0.247      | -            | -                | -                | -         |     3.00 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            8 |     4888 | 2024-10-08 | Complexity       | W   | 0.240      | -            | -                | -                | -         |     0.07 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            7 |     4944 | 2024-10-07 | FURIA            | L   | 0.233      | -            | -                | -                | -         |    -7.07 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            6 |     4968 | 2024-10-07 | PaiN Gaming      | W   | 0.232      | -            | -                | -                | -         |     0.82 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            5 |     6367 | 2024-09-15 | Complexity       | L   | 0.085      | -            | -                | -                | -         |    -2.65 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            4 |     6449 | 2024-09-14 | Fnatic           | W   | 0.078      | -            | -                | -                | -         |     0.01 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            3 |     6545 | 2024-09-12 | Complexity       | L   | 0.067      | -            | -                | -                | -         |    -2.08 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            2 |     6595 | 2024-09-11 | Imperial Esports | L   | 0.060      | -            | -                | -                | -         |    -1.88 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            1 |     6672 | 2024-09-10 | Rooster          | W   | 0.052      | -            | -                | -                | -         |     0.00 | Brollan, Jimpphat, siuhy, torzsi, xertioN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($488,605.09)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      1.000 | $400,000.00    | $400,000.00     |
| 2025-02-09 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-12-15 |      0.691 | $80,000.00     | $55,275.93      |
| 2024-11-03 |      0.411 | $25,000.00     | $10,270.83      |
| 2024-10-13 |      0.273 | $42,000.00     | $11,468.33      |
| 2024-09-22 |      0.133 | $12,000.00     | $1,590.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
