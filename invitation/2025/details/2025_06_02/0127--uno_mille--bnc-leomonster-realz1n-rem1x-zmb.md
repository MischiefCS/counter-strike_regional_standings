### Roster Details<br />
Team Name: UNO MILLE<br />
Roster: bnc, Leomonster, realz1n, rem1x, zmb<br />
Global Rank: [127](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_06_02.md)<br />
Regional Rank: [37]( ../../standings_americas_2025_06_02.md)<br />
<br />
Final Rank Value:  429.1<br />
<br />
Final Rank Value (429.1) = Starting Rank Value (408.1) + Head To Head Adjustments (21.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.003<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 408.1
- 400 + ( ( 0.003 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 408.1


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
|           11 |      152 | 2025-02-20 | Legacy                 | L   | 0.520      | -            | -                | -                | -         |    -1.64 | bnc, Leomonster, realz1n, rem1x, zmb |
|           10 |      203 | 2025-02-16 | ShindeN                | W   | 0.493      | 0.371        | 0.000 (0.000)    | 0.256 (0.047)    | 0 (0.000) |     7.75 | bnc, Leomonster, realz1n, rem1x, zmb |
|            9 |      259 | 2025-02-14 | ODDIK                  | L   | 0.480      | -            | -                | -                | -         |    -2.32 | bnc, Leomonster, realz1n, rem1x, zmb |
|            8 |      307 | 2025-02-12 | KRÜ Esports            | W   | 0.465      | 0.371        | 0.000 (0.000)    | 0.160 (0.028)    | 0 (0.000) |     6.93 | bnc, Leomonster, realz1n, rem1x, zmb |
|            7 |      348 | 2025-02-10 | Bounty Hunters Esports | W   | 0.453      | 0.371        | 0.000 (0.000)    | 0.335 (0.056)    | 0 (0.000) |     9.63 | bnc, Leomonster, realz1n, rem1x, zmb |
|            6 |      486 | 2025-02-07 | Legacy                 | L   | 0.433      | -            | -                | -                | -         |    -1.42 | bnc, Leomonster, realz1n, rem1x, zmb |
|            5 |      709 | 2025-01-09 | Team Solid             | L   | 0.238      | -            | -                | -                | -         |    -1.06 | bnc, max, realz1n, rem1x, zmb        |
|            4 |      786 | 2024-12-20 | Patins da Ferrari      | W   | 0.106      | 0.384        | 0.000 (0.000)    | 0.049 (0.002)    | 0 (0.000) |     2.10 | bnc, max, realz1n, rem1x, zmb        |
|            3 |      815 | 2024-12-18 | Nitro.GG               | W   | 0.091      | 0.384        | 0.000 (0.000)    | 0.190 (0.007)    | 0 (0.000) |     1.40 | bnc, max, realz1n, rem1x, zmb        |
|            2 |      829 | 2024-12-16 | Bad News Chickens      | L   | 0.079      | -            | -                | -                | -         |    -1.27 | bnc, max, realz1n, rem1x, zmb        |
|            1 |      891 | 2024-12-13 | Galorys Academy        | W   | 0.059      | 0.384        | 0.000 (0.000)    | 0.015 (0.000)    | 0 (0.000) |     0.91 | bnc, max, realz1n, rem1x, zmb        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
