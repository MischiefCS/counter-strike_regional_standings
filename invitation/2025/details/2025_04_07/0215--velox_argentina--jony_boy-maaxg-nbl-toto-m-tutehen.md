### Roster Details<br />
Team Name: VELOX Argentina<br />
Roster: JonY BoY, maaxg, nbl, toto-m, tutehen<br />
Global Rank: [215](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_04_07.md)<br />
Regional Rank: [65]( ../../standings_americas_2025_04_07.md)<br />
<br />
Final Rank Value:  490.7<br />
<br />
Final Rank Value (490.7) = Starting Rank Value (485.7) + Head To Head Adjustments (5.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.160[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.041<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 485.7
- 400 + ( ( 0.041 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 485.7


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
|           11 |     1197 | 2024-11-28 | ODDIK               | L   | 0.332      | -            | -                | -                | -         |    -1.91 | JonY BoY, maaxg, nbl, toto-m, tutehen |
|           10 |     1224 | 2024-11-26 | Joga de terno       | W   | 0.319      | 0.371        | 0.000 (0.000)    | 0.069 (0.008)    | 0 (0.000) |     4.90 | JonY BoY, maaxg, nbl, toto-m, tutehen |
|            9 |     1250 | 2024-11-24 | MIBR Academy        | L   | 0.306      | -            | -                | -                | -         |    -2.85 | JonY BoY, maaxg, nbl, toto-m, tutehen |
|            8 |     1302 | 2024-11-22 | ShindeN             | W   | 0.292      | 0.371        | 0.000 (0.000)    | 0.343 (0.037)    | 0 (0.000) |     6.32 | JonY BoY, maaxg, nbl, toto-m, tutehen |
|            7 |     1361 | 2024-11-20 | PaiN Gaming Academy | W   | 0.277      | 0.371        | 0.000 (0.000)    | 0.059 (0.006)    | 0 (0.000) |     3.35 | JonY BoY, maaxg, nbl, toto-m, tutehen |
|            6 |     1385 | 2024-11-18 | Game Hunters        | L   | 0.264      | -            | -                | -                | -         |    -4.11 | JonY BoY, maaxg, nbl, toto-m, tutehen |
|            5 |     1658 | 2024-11-05 | Patins da Ferrari   | L   | 0.180      | -            | -                | -                | -         |    -2.82 | JonY BoY, maaxg, nbl, toto-m, tutehen |
|            4 |     1673 | 2024-11-04 | PaiN Gaming Academy | W   | 0.171      | 0.371        | 0.000 (0.000)    | 0.059 (0.004)    | 0 (0.000) |     2.06 | JonY BoY, maaxg, nbl, toto-m, tutehen |
|            3 |     1702 | 2024-11-02 | ShindeN             | L   | 0.159      | -            | -                | -                | -         |    -1.58 | JonY BoY, maaxg, nbl, toto-m, tutehen |
|            2 |     1744 | 2024-10-31 | UNO MILLE           | L   | 0.145      | -            | -                | -                | -         |    -1.17 | JonY BoY, maaxg, nbl, toto-m, tutehen |
|            1 |     1786 | 2024-10-29 | LaChampionsLiga     | W   | 0.131      | 0.371        | 0.000 (0.000)    | 0.173 (0.008)    | 0 (0.000) |     2.81 | JonY BoY, maaxg, nbl, toto-m, tutehen |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
