### Roster Details<br />
Team Name: VELOX Argentina<br />
Roster: JonY BoY, maaxg, nbl, toto-m, tutehen<br />
Global Rank: [259](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [80]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  515.6<br />
<br />
Final Rank Value (515.6) = Starting Rank Value (507.3) + Head To Head Adjustments (8.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.206[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.056<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 507.3
- 400 + ( ( 0.056 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 507.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |     1197 | 2024-11-28 | ODDIK               | L   | 0.581      | -            | -                | -                | -         |    -3.51 | JonY BoY, maaxg, nbl, toto-m, tutehen |
|           10 |     1224 | 2024-11-26 | Joga de terno       | W   | 0.567      | 0.371        | 0.000 (0.000)    | 0.111 (0.023)    | 0 (0.000) |     8.46 | JonY BoY, maaxg, nbl, toto-m, tutehen |
|            9 |     1250 | 2024-11-24 | MIBR Academy        | L   | 0.555      | -            | -                | -                | -         |    -5.52 | JonY BoY, maaxg, nbl, toto-m, tutehen |
|            8 |     1302 | 2024-11-22 | ShindeN             | W   | 0.541      | 0.371        | 0.005 (0.001)    | 0.377 (0.076)    | 0 (0.000) |    12.31 | JonY BoY, maaxg, nbl, toto-m, tutehen |
|            7 |     1361 | 2024-11-20 | PaiN Gaming Academy | W   | 0.526      | 0.371        | 0.000 (0.000)    | 0.088 (0.017)    | 0 (0.000) |     5.86 | JonY BoY, maaxg, nbl, toto-m, tutehen |
|            6 |     1385 | 2024-11-18 | Game Hunters        | L   | 0.512      | -            | -                | -                | -         |    -8.35 | JonY BoY, maaxg, nbl, toto-m, tutehen |
|            5 |     1658 | 2024-11-05 | Patins da Ferrari   | L   | 0.428      | -            | -                | -                | -         |    -6.91 | JonY BoY, maaxg, nbl, toto-m, tutehen |
|            4 |     1673 | 2024-11-04 | PaiN Gaming Academy | W   | 0.420      | 0.371        | 0.000 (0.000)    | 0.088 (0.014)    | 0 (0.000) |     4.64 | JonY BoY, maaxg, nbl, toto-m, tutehen |
|            3 |     1702 | 2024-11-02 | ShindeN             | L   | 0.407      | -            | -                | -                | -         |    -3.56 | JonY BoY, maaxg, nbl, toto-m, tutehen |
|            2 |     1744 | 2024-10-31 | UNO MILLE           | L   | 0.393      | -            | -                | -                | -         |    -3.30 | JonY BoY, maaxg, nbl, toto-m, tutehen |
|            1 |     1786 | 2024-10-29 | LaChampionsLiga     | W   | 0.379      | 0.371        | 0.003 (0.000)    | 0.199 (0.028)    | 0 (0.000) |     8.13 | JonY BoY, maaxg, nbl, toto-m, tutehen |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
