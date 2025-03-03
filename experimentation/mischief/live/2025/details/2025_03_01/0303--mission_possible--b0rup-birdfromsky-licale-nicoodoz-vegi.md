### Roster Details<br />
Team Name: Mission Possible<br />
Roster: b0RUP, birdfromsky, Licale, nicoodoz, Vegi<br />
Global Rank: [303](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [173]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  547.6<br />
<br />
Final Rank Value (547.6) = Starting Rank Value (513.9) + Head To Head Adjustments (33.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.219[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.058<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 513.9
- 400 + ( ( 0.058 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 513.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      249 | 2025-02-17 | Leo Team            | L   | 1.000      | -            | -                | -                | -         |    -7.11 | b0RUP, birdfromsky, Licale, nicoodoz, Vegi |
|           14 |     1290 | 2024-12-20 | Permitta Esports    | L   | 0.728      | -            | -                | -                | -         |    -5.24 | aidKiT, b0RUP, birdfromsky, Licale, Vegi   |
|           13 |     1293 | 2024-12-20 | K27                 | W   | 0.727      | 0.143        | 0.005 (0.000)    | 0.428 (0.044)    | 0 (0.000) |    16.95 | aidKiT, b0RUP, birdfromsky, Licale, Vegi   |
|           12 |     1300 | 2024-12-20 | Ex-GODSENT          | W   | 0.727      | 0.143        | 0.000 (0.000)    | 0.169 (0.018)    | 0 (0.000) |    11.72 | aidKiT, b0RUP, birdfromsky, Licale, Vegi   |
|           11 |     2233 | 2024-11-28 | Chroma              | L   | 0.579      | -            | -                | -                | -         |    -5.70 | birdfromsky, Licale, m4tthi, SLY, Vegi     |
|           10 |     2531 | 2024-11-18 | ENTERPRISE Genesis  | L   | 0.514      | -            | -                | -                | -         |    -5.65 | b0RUP, birdfromsky, Licale, m4tthi, Vegi   |
|            9 |     2549 | 2024-11-17 | BRUTE               | W   | 0.507      | 0.278        | 0.004 (0.001)    | 0.290 (0.041)    | 0 (0.000) |    11.45 | b0RUP, birdfromsky, Licale, m4tthi, Vegi   |
|            8 |     2676 | 2024-11-15 | KUUSAMO.gg          | W   | 0.493      | 0.278        | 0.000 (0.000)    | 0.050 (0.007)    | 0 (0.000) |     5.20 | b0RUP, birdfromsky, Licale, m4tthi, Vegi   |
|            7 |     2723 | 2024-11-14 | Lazer Cats          | L   | 0.486      | -            | -                | -                | -         |    -4.12 | b0RUP, birdfromsky, Licale, m4tthi, Vegi   |
|            6 |     2830 | 2024-11-11 | Daystar             | W   | 0.467      | 0.278        | 0.000 (0.000)    | 0.033 (0.004)    | 0 (0.000) |     9.13 | b0RUP, birdfromsky, Licale, m4tthi, Vegi   |
|            5 |     3000 | 2024-11-08 | ENTERPRISE Genesis  | L   | 0.446      | -            | -                | -                | -         |    -4.84 | b0RUP, birdfromsky, Licale, m4tthi, Vegi   |
|            4 |     3097 | 2024-11-04 | Natus Vincere Youth | W   | 0.420      | 0.278        | 0.000 (0.000)    | 0.022 (0.003)    | 0 (0.000) |     5.96 | b0RUP, birdfromsky, Licale, m4tthi, Vegi   |
|            3 |     3585 | 2024-10-13 | Passion UA          | L   | 0.273      | -            | -                | -                | -         |    -0.48 | b0RUP, birdfromsky, Licale, m4tthi, Vegi   |
|            2 |     3594 | 2024-10-12 | Illuminar Gaming    | L   | 0.266      | -            | -                | -                | -         |    -1.46 | b0RUP, birdfromsky, Licale, m4tthi, Vegi   |
|            1 |     3597 | 2024-10-12 | Passion UA          | W   | 0.266      | 0.143        | 0.044 (0.002)    | 0.547 (0.021)    | 0 (0.000) |     7.94 | b0RUP, birdfromsky, Licale, m4tthi, Vegi   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
