### Roster Details<br />
Team Name: HOTU<br />
Roster: kade0, lampada, mizu, Re1GN, youka<br />
Global Rank: [194](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [115]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  562.9<br />
<br />
Final Rank Value (562.9) = Starting Rank Value (531.5) + Head To Head Adjustments (31.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.243[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.064<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 531.5
- 400 + ( ( 0.064 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 531.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |       16 | 2025-02-27 | ATOX Esports            | L   | 0.936      | -            | -                | -                | -         |    -2.34 | kade0, lampada, mizu, Re1GN, youka      |
|            9 |       29 | 2025-02-26 | Chinggis Warriors       | L   | 0.929      | -            | -                | -                | -         |    -8.14 | kade0, lampada, mizu, Re1GN, youka      |
|            8 |       47 | 2025-02-25 | Nomads (Mongolian team) | W   | 0.922      | 0.143        | 0.000 (0.000)    | 0.074 (0.010)    | 0 (0.000) |    12.70 | kade0, lampada, mizu, Re1GN, youka      |
|            7 |       75 | 2025-02-23 | ATOX Esports            | W   | 0.914      | 0.143        | 0.052 (0.007)    | 0.683 (0.089)    | 0 (0.000) |    26.55 | kade0, lampada, mizu, Re1GN, youka      |
|            6 |     1437 | 2024-11-16 | Chimera Esports         | L   | 0.249      | -            | -                | -                | -         |    -1.54 | fineshine, kade0, lampada, mizu, Re1GN  |
|            5 |     1465 | 2024-11-15 | WOPA Esport             | W   | 0.242      | 0.143        | 0.025 (0.001)    | 0.434 (0.015)    | 0 (0.000) |     6.06 | fineshine, kade0, lampada, mizu, Re1GN  |
|            4 |     1500 | 2024-11-14 | Daystar                 | W   | 0.236      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.41 | fineshine, kade0, lampada, mizu, Re1GN  |
|            3 |     1527 | 2024-11-13 | WOPA Esport             | L   | 0.229      | -            | -                | -                | -         |    -1.49 | fineshine, kade0, lampada, mizu, Re1GN  |
|            2 |     1730 | 2024-11-01 | Chimera Esports         | L   | 0.151      | -            | -                | -                | -         |    -0.92 | anttzz, fineshine, lampada, mizu, Re1GN |
|            1 |     1812 | 2024-10-27 | 9INE                    | L   | 0.116      | -            | -                | -                | -         |    -1.96 | anttzz, fineshine, lampada, mizu, Re1GN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
