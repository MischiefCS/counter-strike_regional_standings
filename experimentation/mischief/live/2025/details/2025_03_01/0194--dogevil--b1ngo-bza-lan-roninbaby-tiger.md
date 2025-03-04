### Roster Details<br />
Team Name: DogEvil<br />
Roster: B1NGO, BZA, lan, Roninbaby, TiGeR<br />
Global Rank: [194](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [24]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  626.2<br />
<br />
Final Rank Value (626.2) = Starting Rank Value (517.4) + Head To Head Adjustments (108.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.224[<sup>2</sup>](#table1)
- Opponent Network: 0.019[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.061<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 517.4
- 400 + ( ( 0.061 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 517.4


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
|           14 |       17 | 2025-02-27 | Shika                | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.180 (0.026)    | 0 (0.000) |    11.91 | B1NGO, BZA, lan, Roninbaby, TiGeR  |
|           13 |       19 | 2025-02-26 | Change The Game      | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.120 (0.017)    | 0 (0.000) |    11.48 | B1NGO, BZA, lan, Roninbaby, TiGeR  |
|           12 |       30 | 2025-02-25 | Unsettled Resentment | W   | 1.000      | 0.143        | 0.004 (0.001)    | 0.239 (0.034)    | 0 (0.000) |    22.04 | B1NGO, BZA, lan, Roninbaby, TiGeR  |
|           11 |       43 | 2025-02-25 | Rare Atom            | L   | 1.000      | -            | -                | -                | -         |    -5.26 | B1NGO, BZA, lan, Roninbaby, TiGeR  |
|           10 |       70 | 2025-02-23 | FengDa Gaming        | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.060 (0.009)    | 0 (0.000) |     8.21 | B1NGO, BZA, lan, Roninbaby, TiGeR  |
|            9 |      381 | 2025-02-09 | Rare Atom            | L   | 1.000      | -            | -                | -                | -         |    -5.57 | B1NGO, BZA, heartZ, lan, Roninbaby |
|            8 |      384 | 2025-02-09 | JiJieHao             | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.261 (0.037)    | 0 (0.000) |    18.51 | B1NGO, BZA, heartZ, lan, Roninbaby |
|            7 |      418 | 2025-02-08 | Housebets            | W   | 1.000      | 0.143        | 0.001 (0.000)    | 0.144 (0.021)    | 0 (0.000) |    17.27 | B1NGO, BZA, heartZ, lan, Roninbaby |
|            6 |      468 | 2025-02-08 | TYLOO                | L   | 1.000      | -            | -                | -                | -         |    -4.20 | B1NGO, BZA, lan, Roninbaby, TiGeR  |
|            5 |      472 | 2025-02-08 | THE (Russian team)   | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     9.43 | B1NGO, BZA, lan, Roninbaby, TiGeR  |
|            4 |      478 | 2025-02-07 | Rare Atom            | L   | 1.000      | -            | -                | -                | -         |    -5.01 | B1NGO, BZA, heartZ, lan, Roninbaby |
|            3 |     1022 | 2024-12-06 | ATOX Esports         | L   | 0.631      | -            | -                | -                | -         |    -1.34 | BZA, Cate, lan, Roninbaby, twy     |
|            2 |     1051 | 2024-12-05 | Harizma              | W   | 0.624      | 0.333        | 0.002 (0.000)    | 0.112 (0.023)    | 0 (0.000) |    15.72 | BZA, Cate, lan, Roninbaby, twy     |
|            1 |     1057 | 2024-12-04 | Ex-GR Gaming         | W   | 0.623      | 0.333        | 0.011 (0.002)    | 0.096 (0.020)    | 0 (0.000) |    15.60 | BZA, Cate, lan, Roninbaby, twy     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
