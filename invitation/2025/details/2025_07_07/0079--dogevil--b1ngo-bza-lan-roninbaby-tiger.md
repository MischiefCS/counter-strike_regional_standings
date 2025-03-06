### Roster Details<br />
Team Name: DogEvil<br />
Roster: B1NGO, BZA, lan, Roninbaby, TiGeR<br />
Global Rank: [79](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_07_07.md)<br />
Regional Rank: [10]( ../../standings_asia_2025_07_07.md)<br />
<br />
Final Rank Value:  420.7<br />
<br />
Final Rank Value (420.7) = Starting Rank Value (403.8) + Head To Head Adjustments (16.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.002<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 403.8
- 400 + ( ( 0.002 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 403.8


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
|           11 |       17 | 2025-02-27 | Shika                | W   | 0.329      | 0.143        | 0.000 (0.000)    | 0.329 (0.015)    | 0 (0.000) |     5.01 | B1NGO, BZA, lan, Roninbaby, TiGeR  |
|           10 |       19 | 2025-02-26 | Change The Game      | W   | 0.329      | 0.143        | 0.000 (0.000)    | 0.249 (0.012)    | 0 (0.000) |     5.11 | B1NGO, BZA, lan, Roninbaby, TiGeR  |
|            9 |       30 | 2025-02-25 | Unsettled Resentment | W   | 0.322      | 0.143        | 0.000 (0.000)    | 0.293 (0.013)    | 0 (0.000) |     6.68 | B1NGO, BZA, lan, Roninbaby, TiGeR  |
|            8 |       43 | 2025-02-25 | Rare Atom            | L   | 0.316      | -            | -                | -                | -         |    -4.77 | B1NGO, BZA, lan, Roninbaby, TiGeR  |
|            7 |       70 | 2025-02-23 | FengDa Gaming        | W   | 0.309      | 0.143        | 0.000 (0.000)    | 0.124 (0.005)    | 0 (0.000) |     4.79 | B1NGO, BZA, lan, Roninbaby, TiGeR  |
|            6 |      381 | 2025-02-09 | Rare Atom            | L   | 0.215      | -            | -                | -                | -         |    -3.33 | B1NGO, BZA, heartZ, lan, Roninbaby |
|            5 |      384 | 2025-02-09 | JiJieHao             | W   | 0.215      | 0.143        | 0.000 (0.000)    | 0.329 (0.010)    | 0 (0.000) |     3.35 | B1NGO, BZA, heartZ, lan, Roninbaby |
|            4 |      418 | 2025-02-08 | Housebets            | W   | 0.208      | 0.143        | 0.000 (0.000)    | 0.197 (0.006)    | 0 (0.000) |     3.24 | B1NGO, BZA, heartZ, lan, Roninbaby |
|            3 |      468 | 2025-02-08 | TYLOO                | L   | 0.203      | -            | -                | -                | -         |    -3.19 | B1NGO, BZA, lan, Roninbaby, TiGeR  |
|            2 |      472 | 2025-02-08 | THE (Russian team)   | W   | 0.203      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.18 | B1NGO, BZA, lan, Roninbaby, TiGeR  |
|            1 |      478 | 2025-02-07 | Rare Atom            | L   | 0.202      | -            | -                | -                | -         |    -3.15 | B1NGO, BZA, heartZ, lan, Roninbaby |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
