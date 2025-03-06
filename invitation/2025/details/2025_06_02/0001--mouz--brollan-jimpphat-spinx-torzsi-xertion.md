### Roster Details<br />
Team Name: MOUZ<br />
Roster: Brollan, Jimpphat, Spinx, torzsi, xertioN<br />
Global Rank: [1](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [1]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  1966.7<br />
<br />
Final Rank Value (1966.7) = Starting Rank Value (2000.0) + Head To Head Adjustments (-33.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.578[<sup>2</sup>](#table1)
- Opponent Network: 0.184[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.691<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 2000.0
- 400 + ( ( 0.691 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 2000.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |       81 | 2025-02-23 | Team Falcons | W   | 0.538      | 1.000        | 1.000 (0.538)    | 0.676 (0.364)    | 1 (0.538) |     7.20 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           17 |      113 | 2025-02-22 | Astralis     | W   | 0.531      | 1.000        | 1.000 (0.531)    | 1.000 (0.531)    | 1 (0.531) |     6.72 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           16 |      151 | 2025-02-21 | PaiN Gaming  | W   | 0.522      | 1.000        | 0.481 (0.251)    | 0.453 (0.237)    | 1 (0.522) |     2.11 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           15 |      173 | 2025-02-18 | Virtus.pro   | W   | 0.504      | 1.000        | 0.420 (0.211)    | 0.458 (0.231)    | 1 (0.504) |     2.26 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           14 |      201 | 2025-02-17 | Team Falcons | L   | 0.496      | -            | -                | -                | -         |    -9.35 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           13 |      211 | 2025-02-16 | FaZe Clan    | L   | 0.490      | -            | -                | -                | -         |    -9.18 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           12 |      252 | 2025-02-15 | 3DMAX        | W   | 0.482      | 1.000        | 0.288 (0.139)    | 0.480 (0.231)    | 1 (0.482) |     1.02 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           11 |      282 | 2025-02-14 | BIG          | W   | 0.476      | 1.000        | 0.295 (0.140)    | 0.449 (0.213)    | 1 (0.476) |     0.40 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           10 |      593 | 2025-02-03 | Team Liquid  | L   | 0.403      | -            | -                | -                | -         |   -12.54 | Brollan, Jimpphat, torzsi, xelex, xertioN |
|            9 |      612 | 2025-02-01 | GamerLegion  | L   | 0.392      | -            | -                | -                | -         |   -11.92 | Brollan, Jimpphat, torzsi, xelex, xertioN |
|            8 |      677 | 2025-01-17 | BetBoom Team | L   | 0.292      | -            | -                | -                | -         |    -9.17 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            7 |      884 | 2024-12-13 | Team Spirit  | L   | 0.062      | -            | -                | -                | -         |    -1.07 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            6 |      921 | 2024-12-11 | The MongolZ  | W   | 0.048      | 1.000        | 0.823 (0.040)    | 0.490 (0.024)    | 1 (0.048) |     0.39 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            5 |      972 | 2024-12-07 | MIBR         | W   | 0.021      | 1.000        | 0.153 (0.003)    | 0.317 (0.007)    | 1 (0.021) |     0.01 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            4 |     1002 | 2024-12-06 | 3DMAX        | W   | 0.014      | 1.000        | 0.288 (0.004)    | 0.480 (0.007)    | 1 (0.014) |     0.02 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            3 |     1027 | 2024-12-05 | FaZe Clan    | L   | 0.008      | -            | -                | -                | -         |    -0.15 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            2 |     1046 | 2024-12-05 | The MongolZ  | L   | 0.003      | -            | -                | -                | -         |    -0.06 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            1 |     1059 | 2024-12-04 | PaiN Gaming  | W   | 0.001      | 1.000        | 0.481 (0.001)    | 0.453 (0.001)    | 1 (0.001) |     0.00 | Brollan, Jimpphat, siuhy, torzsi, xertioN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($225,301.85)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      0.538 | $400,000.00    | $215,314.81     |
| 2025-02-09 |      0.444 | $10,000.00     | $4,444.44       |
| 2024-12-15 |      0.069 | $80,000.00     | $5,542.59       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
