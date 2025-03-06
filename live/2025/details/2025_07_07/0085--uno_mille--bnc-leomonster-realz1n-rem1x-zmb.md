### Roster Details<br />
Team Name: UNO MILLE<br />
Roster: bnc, Leomonster, realz1n, rem1x, zmb<br />
Global Rank: [85](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_07_07.md)<br />
Regional Rank: [20]( ../../standings_americas_2025_07_07.md)<br />
<br />
Final Rank Value:  412.8<br />
<br />
Final Rank Value (412.8) = Starting Rank Value (403.8) + Head To Head Adjustments (9.1)<br />

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


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      152 | 2025-02-20 | Legacy                 | L   | 0.287      | -            | -                | -                | -         |    -1.14 | bnc, Leomonster, realz1n, rem1x, zmb |
|            6 |      203 | 2025-02-16 | ShindeN                | W   | 0.260      | 0.371        | 0.000 (0.000)    | 0.187 (0.018)    | 0 (0.000) |     4.06 | bnc, Leomonster, realz1n, rem1x, zmb |
|            5 |      259 | 2025-02-14 | ODDIK                  | L   | 0.247      | -            | -                | -                | -         |    -1.12 | bnc, Leomonster, realz1n, rem1x, zmb |
|            4 |      307 | 2025-02-12 | KRÜ Esports            | W   | 0.232      | 0.371        | 0.000 (0.000)    | 0.162 (0.014)    | 0 (0.000) |     3.57 | bnc, Leomonster, realz1n, rem1x, zmb |
|            3 |      348 | 2025-02-10 | Bounty Hunters Esports | W   | 0.220      | 0.371        | 0.000 (0.000)    | 0.358 (0.029)    | 0 (0.000) |     4.53 | bnc, Leomonster, realz1n, rem1x, zmb |
|            2 |      486 | 2025-02-07 | Legacy                 | L   | 0.200      | -            | -                | -                | -         |    -0.81 | bnc, Leomonster, realz1n, rem1x, zmb |
|            1 |      709 | 2025-01-09 | Team Solid             | L   | 0.005      | -            | -                | -                | -         |    -0.02 | bnc, max, realz1n, rem1x, zmb        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
