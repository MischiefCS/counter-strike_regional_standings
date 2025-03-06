### Roster Details<br />
Team Name: Nouns Esports<br />
Roster: CLASIA, Cryptic, junior, Peeping, RUSH<br />
Global Rank: [87](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_04.md)<br />
Regional Rank: [23]( ../../standings_americas_2025_08_04.md)<br />
<br />
Final Rank Value:  399.3<br />
<br />
Final Rank Value (399.3) = Starting Rank Value (400.2) + Head To Head Adjustments (-0.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.2
- 400 + ( ( 0.000 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 400.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      288 | 2025-02-13 | M80       | L   | 0.052      | -            | -                | -                | -         |    -0.81 | CLASIA, Cryptic, junior, Peeping, RUSH |
|            6 |      301 | 2025-02-12 | NRG       | L   | 0.047      | -            | -                | -                | -         |    -0.74 | CLASIA, Cryptic, junior, Peeping, RUSH |
|            5 |      304 | 2025-02-12 | BOSS      | W   | 0.046      | 0.143        | 0.000 (0.000)    | 0.227 (0.001)    | 0 (0.000) |     0.73 | CLASIA, Cryptic, junior, Peeping, RUSH |
|            4 |      322 | 2025-02-11 | Marsborne | W   | 0.041      | 0.143        | 0.000 (0.000)    | 0.109 (0.001)    | 0 (0.000) |     0.64 | CLASIA, Cryptic, junior, Peeping, RUSH |
|            3 |      326 | 2025-02-11 | BOSS      | L   | 0.040      | -            | -                | -                | -         |    -0.62 | CLASIA, Cryptic, junior, Peeping, RUSH |
|            2 |      419 | 2025-02-08 | Marsborne | L   | 0.020      | -            | -                | -                | -         |    -0.32 | CLASIA, Cryptic, junior, Peeping, RUSH |
|            1 |      422 | 2025-02-08 | Vagrants  | W   | 0.020      | 0.143        | 0.000 (0.000)    | 0.067 (0.000)    | 0 (0.000) |     0.31 | CLASIA, Cryptic, junior, Peeping, RUSH |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
