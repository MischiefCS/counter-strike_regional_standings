### Roster Details<br />
Team Name: DogEvil<br />
Roster: B1NGO, BZA, lan, Roninbaby, TiGeR<br />
Global Rank: [176](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_04_07.md)<br />
Regional Rank: [21]( ../../standings_asia_2025_04_07.md)<br />
<br />
Final Rank Value:  596.3<br />
<br />
Final Rank Value (596.3) = Starting Rank Value (514.0) + Head To Head Adjustments (82.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.206[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.055<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 514.0
- 400 + ( ( 0.055 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 514.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |       17 | 2025-02-27 | Shika                | W   | 0.936      | 0.143        | 0.000 (0.000)    | 0.215 (0.029)    | 0 (0.000) |    12.10 | B1NGO, BZA, lan, Roninbaby, TiGeR  |
|           13 |       19 | 2025-02-26 | Change The Game      | W   | 0.935      | 0.143        | 0.000 (0.000)    | 0.149 (0.020)    | 0 (0.000) |    11.84 | B1NGO, BZA, lan, Roninbaby, TiGeR  |
|           12 |       30 | 2025-02-25 | Unsettled Resentment | W   | 0.929      | 0.143        | 0.002 (0.000)    | 0.215 (0.029)    | 0 (0.000) |    18.86 | B1NGO, BZA, lan, Roninbaby, TiGeR  |
|           11 |       43 | 2025-02-25 | Rare Atom            | L   | 0.923      | -            | -                | -                | -         |    -4.80 | B1NGO, BZA, lan, Roninbaby, TiGeR  |
|           10 |       70 | 2025-02-23 | FengDa Gaming        | W   | 0.915      | 0.143        | 0.000 (0.000)    | 0.075 (0.010)    | 0 (0.000) |     8.44 | B1NGO, BZA, lan, Roninbaby, TiGeR  |
|            9 |      381 | 2025-02-09 | Rare Atom            | L   | 0.822      | -            | -                | -                | -         |    -4.36 | B1NGO, BZA, heartZ, lan, Roninbaby |
|            8 |      384 | 2025-02-09 | JiJieHao             | W   | 0.821      | 0.143        | 0.000 (0.000)    | 0.282 (0.033)    | 0 (0.000) |    12.29 | B1NGO, BZA, heartZ, lan, Roninbaby |
|            7 |      418 | 2025-02-08 | Housebets            | W   | 0.814      | 0.143        | 0.000 (0.000)    | 0.143 (0.017)    | 0 (0.000) |    14.51 | B1NGO, BZA, heartZ, lan, Roninbaby |
|            6 |      468 | 2025-02-08 | TYLOO                | L   | 0.810      | -            | -                | -                | -         |    -6.38 | B1NGO, BZA, lan, Roninbaby, TiGeR  |
|            5 |      472 | 2025-02-08 | THE (Russian team)   | W   | 0.809      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     8.23 | B1NGO, BZA, lan, Roninbaby, TiGeR  |
|            4 |      478 | 2025-02-07 | Rare Atom            | L   | 0.809      | -            | -                | -                | -         |    -3.97 | B1NGO, BZA, heartZ, lan, Roninbaby |
|            3 |     1022 | 2024-12-06 | ATOX Esports         | L   | 0.382      | -            | -                | -                | -         |    -0.93 | BZA, Cate, lan, Roninbaby, twy     |
|            2 |     1051 | 2024-12-05 | Harizma              | W   | 0.376      | 0.333        | 0.001 (0.000)    | 0.056 (0.007)    | 0 (0.000) |     7.99 | BZA, Cate, lan, Roninbaby, twy     |
|            1 |     1057 | 2024-12-04 | Ex-GR Gaming         | W   | 0.375      | 0.333        | 0.007 (0.001)    | 0.035 (0.004)    | 0 (0.000) |     8.46 | BZA, Cate, lan, Roninbaby, twy     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
