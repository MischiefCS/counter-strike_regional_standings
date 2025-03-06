### Roster Details<br />
Team Name: HOTU<br />
Roster: kade0, lampada, mizu, Re1GN, youka<br />
Global Rank: [149](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [100]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  556.8<br />
<br />
Final Rank Value (556.8) = Starting Rank Value (533.1) + Head To Head Adjustments (23.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.236[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.061<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 533.1
- 400 + ( ( 0.061 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 533.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |       16 | 2025-02-27 | ATOX Esports            | L   | 0.749      | -            | -                | -                | -         |    -2.01 | kade0, lampada, mizu, Re1GN, youka     |
|            7 |       29 | 2025-02-26 | Chinggis Warriors       | L   | 0.742      | -            | -                | -                | -         |    -6.95 | kade0, lampada, mizu, Re1GN, youka     |
|            6 |       47 | 2025-02-25 | Nomads (Mongolian team) | W   | 0.736      | 0.143        | 0.000 (0.000)    | 0.081 (0.008)    | 0 (0.000) |    10.57 | kade0, lampada, mizu, Re1GN, youka     |
|            5 |       75 | 2025-02-23 | ATOX Esports            | W   | 0.727      | 0.143        | 0.055 (0.006)    | 0.667 (0.069)    | 0 (0.000) |    21.00 | kade0, lampada, mizu, Re1GN, youka     |
|            4 |     1437 | 2024-11-16 | Chimera Esports         | L   | 0.063      | -            | -                | -                | -         |    -0.44 | fineshine, kade0, lampada, mizu, Re1GN |
|            3 |     1465 | 2024-11-15 | WOPA Esport             | W   | 0.056      | 0.143        | 0.024 (0.000)    | 0.346 (0.003)    | 0 (0.000) |     1.38 | fineshine, kade0, lampada, mizu, Re1GN |
|            2 |     1500 | 2024-11-14 | Daystar                 | W   | 0.049      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.50 | fineshine, kade0, lampada, mizu, Re1GN |
|            1 |     1527 | 2024-11-13 | WOPA Esport             | L   | 0.043      | -            | -                | -                | -         |    -0.29 | fineshine, kade0, lampada, mizu, Re1GN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
