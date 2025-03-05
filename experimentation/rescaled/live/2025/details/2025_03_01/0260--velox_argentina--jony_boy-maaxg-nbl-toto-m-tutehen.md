### Roster Details<br />
Team Name: VELOX Argentina<br />
Roster: JonY BoY, maaxg, nbl, toto-m, tutehen<br />
Global Rank: [260](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [80]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  522.7<br />
<br />
Final Rank Value (522.7) = Starting Rank Value (513.9) + Head To Head Adjustments (8.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.215[<sup>2</sup>](#table1)
- Opponent Network: 0.025[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.060<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 513.9
- 400 + ( ( 0.060 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 513.9


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
|           11 |     1197 | 2024-11-28 | ODDIK               | L   | 0.581      | -            | -                | -                | -         |    -2.60 | JonY BoY, maaxg, nbl, toto-m, tutehen |
|           10 |     1224 | 2024-11-26 | Joga de terno       | W   | 0.567      | 0.608        | 0.000 (0.000)    | 0.111 (0.038)    | 0 (0.000) |     8.33 | JonY BoY, maaxg, nbl, toto-m, tutehen |
|            9 |     1250 | 2024-11-24 | MIBR Academy        | L   | 0.555      | -            | -                | -                | -         |    -5.32 | JonY BoY, maaxg, nbl, toto-m, tutehen |
|            8 |     1302 | 2024-11-22 | ShindeN             | W   | 0.541      | 0.587        | 0.005 (0.002)    | 0.377 (0.120)    | 0 (0.000) |    12.27 | JonY BoY, maaxg, nbl, toto-m, tutehen |
|            7 |     1361 | 2024-11-20 | PaiN Gaming Academy | W   | 0.526      | 0.589        | 0.000 (0.000)    | 0.088 (0.027)    | 0 (0.000) |     5.75 | JonY BoY, maaxg, nbl, toto-m, tutehen |
|            6 |     1385 | 2024-11-18 | Game Hunters        | L   | 0.512      | -            | -                | -                | -         |    -8.50 | JonY BoY, maaxg, nbl, toto-m, tutehen |
|            5 |     1658 | 2024-11-05 | Patins da Ferrari   | L   | 0.428      | -            | -                | -                | -         |    -7.04 | JonY BoY, maaxg, nbl, toto-m, tutehen |
|            4 |     1673 | 2024-11-04 | PaiN Gaming Academy | W   | 0.420      | 0.580        | 0.000 (0.000)    | 0.088 (0.022)    | 0 (0.000) |     4.53 | JonY BoY, maaxg, nbl, toto-m, tutehen |
|            3 |     1702 | 2024-11-02 | ShindeN             | L   | 0.407      | -            | -                | -                | -         |    -3.61 | JonY BoY, maaxg, nbl, toto-m, tutehen |
|            2 |     1744 | 2024-10-31 | UNO MILLE           | L   | 0.393      | -            | -                | -                | -         |    -3.14 | JonY BoY, maaxg, nbl, toto-m, tutehen |
|            1 |     1786 | 2024-10-29 | LaChampionsLiga     | W   | 0.379      | 0.533        | 0.003 (0.001)    | 0.199 (0.040)    | 0 (0.000) |     8.10 | JonY BoY, maaxg, nbl, toto-m, tutehen |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
