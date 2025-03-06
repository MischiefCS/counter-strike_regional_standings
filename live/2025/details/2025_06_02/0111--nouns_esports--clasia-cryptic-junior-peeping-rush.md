### Roster Details<br />
Team Name: Nouns Esports<br />
Roster: CLASIA, Cryptic, junior, Peeping, RUSH<br />
Global Rank: [111](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_06_02.md)<br />
Regional Rank: [27]( ../../standings_americas_2025_06_02.md)<br />
<br />
Final Rank Value:  509.7<br />
<br />
Final Rank Value (509.7) = Starting Rank Value (506.9) + Head To Head Adjustments (2.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.160[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.020[<sup>2</sup>](#table1)

The average of these factors is 0.046<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 506.9
- 400 + ( ( 0.046 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 506.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      288 | 2025-02-13 | M80              | L   | 0.472      | -            | -                | -                | -         |    -7.02 | CLASIA, Cryptic, junior, Peeping, RUSH  |
|           13 |      301 | 2025-02-12 | NRG              | L   | 0.467      | -            | -                | -                | -         |    -3.52 | CLASIA, Cryptic, junior, Peeping, RUSH  |
|           12 |      304 | 2025-02-12 | BOSS             | W   | 0.466      | 0.143        | 0.001 (0.000)    | 0.267 (0.018)    | 0 (0.000) |     9.87 | CLASIA, Cryptic, junior, Peeping, RUSH  |
|           11 |      322 | 2025-02-11 | Marsborne        | W   | 0.461      | 0.143        | 0.000 (0.000)    | 0.242 (0.016)    | 0 (0.000) |     7.20 | CLASIA, Cryptic, junior, Peeping, RUSH  |
|           10 |      326 | 2025-02-11 | BOSS             | L   | 0.460      | -            | -                | -                | -         |    -4.56 | CLASIA, Cryptic, junior, Peeping, RUSH  |
|            9 |      419 | 2025-02-08 | Marsborne        | L   | 0.440      | -            | -                | -                | -         |    -7.03 | CLASIA, Cryptic, junior, Peeping, RUSH  |
|            8 |      422 | 2025-02-08 | Vagrants         | W   | 0.440      | 0.143        | 0.000 (0.000)    | 0.161 (0.010)    | 0 (0.000) |     6.83 | CLASIA, Cryptic, junior, Peeping, RUSH  |
|            7 |      840 | 2024-12-15 | Timbermen        | L   | 0.073      | -            | -                | -                | -         |    -0.67 | cJ-dA-K1nG, junior, nicx, Peeping, RUSH |
|            6 |      862 | 2024-12-14 | Vagrants         | W   | 0.066      | 0.303        | 0.000 (0.000)    | 0.161 (0.003)    | 0 (0.000) |     1.02 | cJ-dA-K1nG, junior, nicx, Peeping, RUSH |
|            5 |      959 | 2024-12-08 | BOSS             | L   | 0.026      | -            | -                | -                | -         |    -0.26 | cJ-dA-K1nG, junior, nicx, Peeping, RUSH |
|            4 |      962 | 2024-12-08 | Undone           | W   | 0.025      | 0.384        | 0.000 (0.000)    | 0.041 (0.000)    | 1 (0.025) |     0.52 | cJ-dA-K1nG, junior, nicx, Peeping, RUSH |
|            3 |      976 | 2024-12-07 | Sharks Esports   | L   | 0.021      | -            | -                | -                | -         |    -0.10 | cJ-dA-K1nG, junior, nicx, Peeping, RUSH |
|            2 |      983 | 2024-12-07 | Party Astronauts | W   | 0.019      | 0.384        | 0.000 (0.000)    | 0.335 (0.002)    | 1 (0.019) |     0.29 | cJ-dA-K1nG, junior, nicx, Peeping, RUSH |
|            1 |     1007 | 2024-12-06 | Fisher College   | W   | 0.014      | 0.384        | 0.000 (0.000)    | 0.003 (0.000)    | 1 (0.014) |     0.16 | cJ-dA-K1nG, junior, nicx, Peeping, RUSH |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
