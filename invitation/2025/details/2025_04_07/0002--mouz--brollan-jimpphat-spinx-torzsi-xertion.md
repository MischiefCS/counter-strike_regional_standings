### Roster Details<br />
Team Name: MOUZ<br />
Roster: Brollan, Jimpphat, Spinx, torzsi, xertioN<br />
Global Rank: [2](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [2]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  1917.9<br />
<br />
Final Rank Value (1917.9) = Starting Rank Value (2000.0) + Head To Head Adjustments (-82.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.680[<sup>2</sup>](#table1)
- Opponent Network: 0.416[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.774<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 2000.0
- 400 + ( ( 0.774 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 2000.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           27 |       81 | 2025-02-23 | Team Falcons  | W   | 0.912      | 1.000        | 1.000 (0.912)    | 0.696 (0.634)    | 1 (0.912) |    13.01 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           26 |      113 | 2025-02-22 | Astralis      | W   | 0.904      | 1.000        | 0.725 (0.656)    | 1.000 (0.904)    | 1 (0.904) |     7.96 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           25 |      151 | 2025-02-21 | PaiN Gaming   | W   | 0.896      | 1.000        | 0.368 (0.329)    | 0.545 (0.488)    | 1 (0.896) |     5.16 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           24 |      173 | 2025-02-18 | Virtus.pro    | W   | 0.877      | 1.000        | 0.314 (0.276)    | 0.484 (0.424)    | 1 (0.877) |     3.98 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           23 |      201 | 2025-02-17 | Team Falcons  | L   | 0.870      | -            | -                | -                | -         |   -15.65 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           22 |      211 | 2025-02-16 | FaZe Clan     | L   | 0.864      | -            | -                | -                | -         |   -14.77 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           21 |      252 | 2025-02-15 | 3DMAX         | W   | 0.856      | 1.000        | 0.278 (0.238)    | 0.517 (0.442)    | 1 (0.856) |     2.71 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           20 |      282 | 2025-02-14 | BIG           | W   | 0.849      | 1.000        | 0.239 (0.203)    | 0.512 (0.435)    | 1 (0.849) |     0.96 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           19 |      593 | 2025-02-03 | Team Liquid   | L   | 0.777      | -            | -                | -                | -         |   -23.23 | Brollan, Jimpphat, torzsi, xelex, xertioN |
|           18 |      612 | 2025-02-01 | GamerLegion   | L   | 0.765      | -            | -                | -                | -         |   -22.19 | Brollan, Jimpphat, torzsi, xelex, xertioN |
|           17 |      677 | 2025-01-17 | BetBoom Team  | L   | 0.665      | -            | -                | -                | -         |   -20.88 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           16 |      884 | 2024-12-13 | Team Spirit   | L   | 0.435      | -            | -                | -                | -         |    -7.54 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           15 |      921 | 2024-12-11 | The MongolZ   | W   | 0.422      | 1.000        | 1.000 (0.422)    | 0.566 (0.238)    | 1 (0.422) |     5.34 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           14 |      972 | 2024-12-07 | MIBR          | W   | 0.394      | 1.000        | -                | 0.472 (0.186)    | 1 (0.394) |     0.37 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           13 |     1002 | 2024-12-06 | 3DMAX         | W   | 0.388      | 1.000        | 0.278 (0.108)    | 0.517 (0.200)    | 1 (0.388) |     0.84 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           12 |     1027 | 2024-12-05 | FaZe Clan     | L   | 0.381      | -            | -                | -                | -         |    -7.49 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           11 |     1046 | 2024-12-05 | The MongolZ   | L   | 0.376      | -            | -                | -                | -         |    -7.43 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           10 |     1059 | 2024-12-04 | PaiN Gaming   | W   | 0.375      | 1.000        | 0.368 (0.138)    | 0.545 (0.204)    | 1 (0.375) |     1.30 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            9 |     1389 | 2024-11-17 | Natus Vincere | W   | 0.262      | -            | -                | -                | -         |     0.68 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            8 |     1405 | 2024-11-17 | HEROIC        | W   | 0.257      | -            | -                | -                | -         |     0.03 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            7 |     1418 | 2024-11-16 | Nemiga Gaming | W   | 0.255      | -            | -                | -                | -         |     0.01 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            6 |     1740 | 2024-11-01 | Team Vitality | L   | 0.149      | -            | -                | -                | -         |    -3.27 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            5 |     1756 | 2024-10-31 | Astralis      | L   | 0.143      | -            | -                | -                | -         |    -3.04 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            4 |     1775 | 2024-10-30 | FaZe Clan     | W   | 0.136      | 1.000        | 0.792 (0.107)    | -                | -         |     1.61 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            3 |     1971 | 2024-10-13 | Natus Vincere | L   | 0.024      | -            | -                | -                | -         |    -0.71 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            2 |     1978 | 2024-10-12 | FURIA         | W   | 0.018      | -            | -                | -                | -         |     0.01 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            1 |     1989 | 2024-10-11 | Team Vitality | W   | 0.011      | -            | -                | -                | -         |     0.11 | Brollan, Jimpphat, siuhy, torzsi, xertioN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($413,324.35)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      0.912 | $400,000.00    | $364,648.15     |
| 2025-02-09 |      0.818 | $10,000.00     | $8,177.78       |
| 2024-12-15 |      0.443 | $80,000.00     | $35,409.26      |
| 2024-11-03 |      0.163 | $25,000.00     | $4,062.50       |
| 2024-10-13 |      0.024 | $42,000.00     | $1,026.67       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
