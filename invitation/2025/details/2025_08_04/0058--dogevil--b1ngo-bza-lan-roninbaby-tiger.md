### Roster Details<br />
Team Name: DogEvil<br />
Roster: B1NGO, BZA, lan, Roninbaby, TiGeR<br />
Global Rank: [58](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_08_04.md)<br />
Regional Rank: [6]( ../../standings_asia_2025_08_04.md)<br />
<br />
Final Rank Value:  409.0<br />
<br />
Final Rank Value (409.0) = Starting Rank Value (401.8) + Head To Head Adjustments (7.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.001<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 401.8
- 400 + ( ( 0.001 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 401.8


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
|           11 |       17 | 2025-02-27 | Shika                | W   | 0.143      | 0.143        | 0.000 (0.000)    | 0.413 (0.008)    | 0 (0.000) |     2.22 | B1NGO, BZA, lan, Roninbaby, TiGeR  |
|           10 |       19 | 2025-02-26 | Change The Game      | W   | 0.142      | 0.143        | 0.000 (0.000)    | 0.389 (0.008)    | 0 (0.000) |     2.23 | B1NGO, BZA, lan, Roninbaby, TiGeR  |
|            9 |       30 | 2025-02-25 | Unsettled Resentment | W   | 0.135      | 0.143        | 0.000 (0.000)    | 0.279 (0.005)    | 0 (0.000) |     2.78 | B1NGO, BZA, lan, Roninbaby, TiGeR  |
|            8 |       43 | 2025-02-25 | Rare Atom            | L   | 0.129      | -            | -                | -                | -         |    -2.03 | B1NGO, BZA, lan, Roninbaby, TiGeR  |
|            7 |       70 | 2025-02-23 | FengDa Gaming        | W   | 0.122      | 0.143        | 0.000 (0.000)    | 0.192 (0.003)    | 0 (0.000) |     1.91 | B1NGO, BZA, lan, Roninbaby, TiGeR  |
|            6 |      381 | 2025-02-09 | Rare Atom            | L   | 0.029      | -            | -                | -                | -         |    -0.45 | B1NGO, BZA, heartZ, lan, Roninbaby |
|            5 |      384 | 2025-02-09 | JiJieHao             | W   | 0.028      | 0.143        | 0.000 (0.000)    | 0.413 (0.002)    | 0 (0.000) |     0.44 | B1NGO, BZA, heartZ, lan, Roninbaby |
|            4 |      418 | 2025-02-08 | Housebets            | W   | 0.021      | 0.143        | 0.000 (0.000)    | 0.193 (0.001)    | 0 (0.000) |     0.33 | B1NGO, BZA, heartZ, lan, Roninbaby |
|            3 |      468 | 2025-02-08 | TYLOO                | L   | 0.016      | -            | -                | -                | -         |    -0.26 | B1NGO, BZA, lan, Roninbaby, TiGeR  |
|            2 |      472 | 2025-02-08 | THE (Russian team)   | W   | 0.016      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.25 | B1NGO, BZA, lan, Roninbaby, TiGeR  |
|            1 |      478 | 2025-02-07 | Rare Atom            | L   | 0.015      | -            | -                | -                | -         |    -0.24 | B1NGO, BZA, heartZ, lan, Roninbaby |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
