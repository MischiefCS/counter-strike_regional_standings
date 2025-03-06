### Roster Details<br />
Team Name: UNO MILLE<br />
Roster: bnc, Leomonster, realz1n, rem1x, zmb<br />
Global Rank: [71](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_04.md)<br />
Regional Rank: [16]( ../../standings_americas_2025_08_04.md)<br />
<br />
Final Rank Value:  402.2<br />
<br />
Final Rank Value (402.2) = Starting Rank Value (400.5) + Head To Head Adjustments (1.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.5
- 400 + ( ( 0.000 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 400.5


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
|            6 |      152 | 2025-02-20 | Legacy                 | L   | 0.100      | -            | -                | -                | -         |    -0.41 | bnc, Leomonster, realz1n, rem1x, zmb |
|            5 |      203 | 2025-02-16 | ShindeN                | W   | 0.073      | 0.371        | 0.000 (0.000)    | 0.143 (0.004)    | 0 (0.000) |     1.16 | bnc, Leomonster, realz1n, rem1x, zmb |
|            4 |      259 | 2025-02-14 | ODDIK                  | L   | 0.060      | -            | -                | -                | -         |    -0.23 | bnc, Leomonster, realz1n, rem1x, zmb |
|            3 |      307 | 2025-02-12 | KRÜ Esports            | W   | 0.045      | 0.371        | 0.000 (0.000)    | 0.059 (0.001)    | 0 (0.000) |     0.71 | bnc, Leomonster, realz1n, rem1x, zmb |
|            2 |      348 | 2025-02-10 | Bounty Hunters Esports | W   | 0.033      | 0.371        | 0.000 (0.000)    | 0.247 (0.003)    | 0 (0.000) |     0.53 | bnc, Leomonster, realz1n, rem1x, zmb |
|            1 |      486 | 2025-02-07 | Legacy                 | L   | 0.013      | -            | -                | -                | -         |    -0.05 | bnc, Leomonster, realz1n, rem1x, zmb |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
