### Roster Details<br />
Team Name: UNO MILLE<br />
Roster: bnc, Leomonster, realz1n, rem1x, zmb<br />
Global Rank: [163](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_05_05.md)<br />
Regional Rank: [41]( ../../standings_americas_2025_05_05.md)<br />
<br />
Final Rank Value:  527.1<br />
<br />
Final Rank Value (527.1) = Starting Rank Value (502.8) + Head To Head Adjustments (24.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.167[<sup>2</sup>](#table1)
- Opponent Network: 0.022[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.047<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 502.8
- 400 + ( ( 0.047 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 502.8


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
|           13 |      152 | 2025-02-20 | Legacy                 | L   | 0.707      | -            | -                | -                | -         |    -3.04 | bnc, Leomonster, realz1n, rem1x, zmb |
|           12 |      203 | 2025-02-16 | ShindeN                | W   | 0.680      | 0.371        | 0.000 (0.000)    | 0.290 (0.073)    | 0 (0.000) |    10.52 | bnc, Leomonster, realz1n, rem1x, zmb |
|           11 |      259 | 2025-02-14 | ODDIK                  | L   | 0.667      | -            | -                | -                | -         |    -4.38 | bnc, Leomonster, realz1n, rem1x, zmb |
|           10 |      307 | 2025-02-12 | KRÜ Esports            | W   | 0.652      | 0.371        | 0.000 (0.000)    | 0.144 (0.035)    | 0 (0.000) |     7.19 | bnc, Leomonster, realz1n, rem1x, zmb |
|            9 |      348 | 2025-02-10 | Bounty Hunters Esports | W   | 0.640      | 0.371        | 0.000 (0.000)    | 0.287 (0.068)    | 0 (0.000) |    11.07 | bnc, Leomonster, realz1n, rem1x, zmb |
|            8 |      486 | 2025-02-07 | Legacy                 | L   | 0.620      | -            | -                | -                | -         |    -3.00 | bnc, Leomonster, realz1n, rem1x, zmb |
|            7 |      709 | 2025-01-09 | Team Solid             | L   | 0.425      | -            | -                | -                | -         |    -2.66 | bnc, max, realz1n, rem1x, zmb        |
|            6 |      786 | 2024-12-20 | Patins da Ferrari      | W   | 0.292      | 0.384        | 0.000 (0.000)    | 0.092 (0.010)    | 0 (0.000) |     4.77 | bnc, max, realz1n, rem1x, zmb        |
|            5 |      815 | 2024-12-18 | Nitro.GG               | W   | 0.277      | 0.384        | 0.001 (0.000)    | 0.247 (0.026)    | 0 (0.000) |     5.68 | bnc, max, realz1n, rem1x, zmb        |
|            4 |      829 | 2024-12-16 | Bad News Chickens      | L   | 0.266      | -            | -                | -                | -         |    -3.04 | bnc, max, realz1n, rem1x, zmb        |
|            3 |      891 | 2024-12-13 | Galorys Academy        | W   | 0.246      | 0.384        | 0.000 (0.000)    | 0.030 (0.003)    | 0 (0.000) |     2.79 | bnc, max, realz1n, rem1x, zmb        |
|            2 |     1214 | 2024-11-27 | Nitro.GG               | L   | 0.138      | -            | -                | -                | -         |    -1.50 | lukiz, pancc, realz1n, rem1x, zmb    |
|            1 |     1633 | 2024-11-07 | ODDIK                  | L   | 0.005      | -            | -                | -                | -         |    -0.03 | lukiz, pancc, realz1n, rem1x, zmb    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
