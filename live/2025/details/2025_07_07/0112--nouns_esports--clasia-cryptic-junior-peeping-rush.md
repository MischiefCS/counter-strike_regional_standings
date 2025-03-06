### Roster Details<br />
Team Name: Nouns Esports<br />
Roster: CLASIA, Cryptic, junior, Peeping, RUSH<br />
Global Rank: [112](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_07_07.md)<br />
Regional Rank: [34]( ../../standings_americas_2025_07_07.md)<br />
<br />
Final Rank Value:  397.9<br />
<br />
Final Rank Value (397.9) = Starting Rank Value (401.4) + Head To Head Adjustments (-3.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.001<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 401.4
- 400 + ( ( 0.001 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 401.4


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
|            7 |      288 | 2025-02-13 | M80       | L   | 0.239      | -            | -                | -                | -         |    -3.63 | CLASIA, Cryptic, junior, Peeping, RUSH |
|            6 |      301 | 2025-02-12 | NRG       | L   | 0.234      | -            | -                | -                | -         |    -3.63 | CLASIA, Cryptic, junior, Peeping, RUSH |
|            5 |      304 | 2025-02-12 | BOSS      | W   | 0.233      | 0.143        | 0.000 (0.000)    | 0.280 (0.009)    | 0 (0.000) |     3.66 | CLASIA, Cryptic, junior, Peeping, RUSH |
|            4 |      322 | 2025-02-11 | Marsborne | W   | 0.227      | 0.143        | 0.000 (0.000)    | 0.249 (0.008)    | 0 (0.000) |     3.63 | CLASIA, Cryptic, junior, Peeping, RUSH |
|            3 |      326 | 2025-02-11 | BOSS      | L   | 0.226      | -            | -                | -                | -         |    -3.56 | CLASIA, Cryptic, junior, Peeping, RUSH |
|            2 |      419 | 2025-02-08 | Marsborne | L   | 0.207      | -            | -                | -                | -         |    -3.23 | CLASIA, Cryptic, junior, Peeping, RUSH |
|            1 |      422 | 2025-02-08 | Vagrants  | W   | 0.206      | 0.143        | 0.000 (0.000)    | 0.164 (0.005)    | 0 (0.000) |     3.27 | CLASIA, Cryptic, junior, Peeping, RUSH |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
