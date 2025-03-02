### Roster Details<br />
Team Name: Wu-Tang Clan<br />
Roster: m4tthi, Maze, Q-Q, zaNNN, zewts<br />
Global Rank: [291](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [197]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  668.8<br />
<br />
Final Rank Value (668.8) = Starting Rank Value (659.6) + Head To Head Adjustments (9.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.253[<sup>1</sup>](#table2)
- Bounty Collected: 0.230[<sup>2</sup>](#table1)
- Opponent Network: 0.020[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.126<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 659.6
- 400 + ( ( 0.126 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 659.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     1093 | 2025-01-05 | WOPA Esport            | L   | 0.837      | -            | -                | -                | -         |    -7.29 | m4tthi, Maze, Q-Q, zaNNN, zewts      |
|           13 |     1127 | 2024-12-29 | GenOne                 | L   | 0.792      | -            | -                | -                | -         |    -7.32 | m4tthi, Maze, Q-Q, zaNNN, zewts      |
|           12 |     1167 | 2024-12-28 | FLuffy Gangsters       | L   | 0.785      | -            | -                | -                | -         |    -6.37 | m4tthi, Maze, Q-Q, zaNNN, zewts      |
|           11 |     1406 | 2024-12-19 | Anonymo Esports        | L   | 0.725      | -            | -                | -                | -         |    -5.91 | m4tthi, Maze, Q-Q, SeBreeZe, zewts   |
|           10 |     1461 | 2024-12-16 | VOLT (European team)   | W   | 0.705      | 0.303        | 0.003 (0.001)    | 0.175 (0.037)    | 0 (0.000) |    11.97 | m4tthi, Maze, Q-Q, SeBreeZe, zewts   |
|            9 |     1481 | 2024-12-15 | AMKAL ESPORTS          | L   | 0.700      | -            | -                | -                | -         |    -5.92 | Maze, Q-Q, SeBreeZe, woozzzi, zewts  |
|            8 |     1504 | 2024-12-15 | C.S.D.E                | W   | 0.698      | 0.303        | 0.008 (0.002)    | 0.166 (0.035)    | 0 (0.000) |    11.64 | m4tthi, MahaR, Maze, Q-Q, T4gg3D     |
|            7 |     1629 | 2024-12-13 | G2 Ares                | W   | 0.687      | 0.274        | 0.001 (0.000)    | 0.283 (0.053)    | 0 (0.000) |    12.09 | Maze, Q-Q, SeBreeZe, woozzzi, zewts  |
|            6 |     1651 | 2024-12-13 | Megoshort              | L   | 0.686      | -            | -                | -                | -         |   -15.45 | m4tthi, MahaR, Maze, SeBreeZe, zewts |
|            5 |     1693 | 2024-12-12 | SHOO7ERS               | W   | 0.680      | 0.274        | 0.001 (0.000)    | 0.202 (0.038)    | 0 (0.000) |    10.17 | Maze, Q-Q, SeBreeZe, woozzzi, zewts  |
|            4 |     1735 | 2024-12-11 | ENRAGE                 | W   | 0.673      | 0.274        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.29 | Maze, Q-Q, SeBreeZe, woozzzi, zewts  |
|            3 |     1776 | 2024-12-10 | Perfect Storm          | W   | 0.667      | 0.274        | 0.009 (0.002)    | 0.125 (0.023)    | 0 (0.000) |    11.58 | Maze, Q-Q, SeBreeZe, woozzzi, zewts  |
|            2 |     2233 | 2024-12-01 | Minsk House            | L   | 0.606      | -            | -                | -                | -         |   -13.67 | Maze, Q-Q, SeBreeZe, woozzzi, zewts  |
|            1 |     2246 | 2024-12-01 | Lausanne-Sport Esports | W   | 0.606      | 0.143        | 0.000 (0.000)    | 0.136 (0.012)    | 0 (0.000) |     7.45 | Maze, Q-Q, SeBreeZe, woozzzi, zewts  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($315.02)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.700 | $450.00        | $315.02         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
