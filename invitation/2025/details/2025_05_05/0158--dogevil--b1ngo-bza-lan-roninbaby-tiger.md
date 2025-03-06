### Roster Details<br />
Team Name: DogEvil<br />
Roster: B1NGO, BZA, lan, Roninbaby, TiGeR<br />
Global Rank: [158](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_05_05.md)<br />
Regional Rank: [18]( ../../standings_asia_2025_05_05.md)<br />
<br />
Final Rank Value:  541.0<br />
<br />
Final Rank Value (541.0) = Starting Rank Value (490.9) + Head To Head Adjustments (50.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.155[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.042<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 490.9
- 400 + ( ( 0.042 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 490.9


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
|           14 |       17 | 2025-02-27 | Shika                | W   | 0.749      | 0.143        | 0.000 (0.000)    | 0.232 (0.025)    | 0 (0.000) |    10.86 | B1NGO, BZA, lan, Roninbaby, TiGeR  |
|           13 |       19 | 2025-02-26 | Change The Game      | W   | 0.749      | 0.143        | 0.000 (0.000)    | 0.163 (0.017)    | 0 (0.000) |     8.32 | B1NGO, BZA, lan, Roninbaby, TiGeR  |
|           12 |       30 | 2025-02-25 | Unsettled Resentment | W   | 0.742      | 0.143        | 0.000 (0.000)    | 0.223 (0.024)    | 0 (0.000) |    12.51 | B1NGO, BZA, lan, Roninbaby, TiGeR  |
|           11 |       43 | 2025-02-25 | Rare Atom            | L   | 0.736      | -            | -                | -                | -         |    -3.42 | B1NGO, BZA, lan, Roninbaby, TiGeR  |
|           10 |       70 | 2025-02-23 | FengDa Gaming        | W   | 0.729      | 0.143        | 0.000 (0.000)    | 0.082 (0.008)    | 0 (0.000) |     8.03 | B1NGO, BZA, lan, Roninbaby, TiGeR  |
|            9 |      381 | 2025-02-09 | Rare Atom            | L   | 0.635      | -            | -                | -                | -         |    -2.90 | B1NGO, BZA, heartZ, lan, Roninbaby |
|            8 |      384 | 2025-02-09 | JiJieHao             | W   | 0.635      | 0.143        | 0.000 (0.000)    | 0.283 (0.026)    | 0 (0.000) |    10.46 | B1NGO, BZA, heartZ, lan, Roninbaby |
|            7 |      418 | 2025-02-08 | Housebets            | W   | 0.628      | 0.143        | 0.000 (0.000)    | 0.149 (0.013)    | 0 (0.000) |     7.19 | B1NGO, BZA, heartZ, lan, Roninbaby |
|            6 |      468 | 2025-02-08 | TYLOO                | L   | 0.623      | -            | -                | -                | -         |   -11.95 | B1NGO, BZA, lan, Roninbaby, TiGeR  |
|            5 |      472 | 2025-02-08 | THE (Russian team)   | W   | 0.623      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     7.15 | B1NGO, BZA, lan, Roninbaby, TiGeR  |
|            4 |      478 | 2025-02-07 | Rare Atom            | L   | 0.622      | -            | -                | -                | -         |    -2.78 | B1NGO, BZA, heartZ, lan, Roninbaby |
|            3 |     1022 | 2024-12-06 | ATOX Esports         | L   | 0.196      | -            | -                | -                | -         |    -0.41 | BZA, Cate, lan, Roninbaby, twy     |
|            2 |     1051 | 2024-12-05 | Harizma              | W   | 0.189      | 0.333        | 0.000 (0.000)    | 0.032 (0.002)    | 0 (0.000) |     3.14 | BZA, Cate, lan, Roninbaby, twy     |
|            1 |     1057 | 2024-12-04 | Ex-GR Gaming         | W   | 0.188      | 0.333        | 0.001 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     3.90 | BZA, Cate, lan, Roninbaby, twy     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
