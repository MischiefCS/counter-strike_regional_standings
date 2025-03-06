### Roster Details<br />
Team Name: Game Hunters<br />
Roster: abr, mello, nolkz, prt, slashzz<br />
Global Rank: [123](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_06_02.md)<br />
Regional Rank: [35]( ../../standings_americas_2025_06_02.md)<br />
<br />
Final Rank Value:  476.1<br />
<br />
Final Rank Value (476.1) = Starting Rank Value (485.4) + Head To Head Adjustments (-9.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.140[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.037<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 485.4
- 400 + ( ( 0.037 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 485.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                 | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      177 | 2025-02-17 | Players (Brazilian team) | L   | 0.500      | -            | -                | -                | -         |    -4.23 | abr, mello, nolkz, prt, slashzz  |
|           10 |      222 | 2025-02-15 | KRÜ Esports              | W   | 0.487      | 0.371        | 0.000 (0.000)    | 0.160 (0.029)    | 0 (0.000) |     5.84 | abr, mello, nolkz, prt, slashzz  |
|            9 |      270 | 2025-02-14 | ShindeN                  | L   | 0.478      | -            | -                | -                | -         |    -8.82 | abr, mello, nolkz, prt, slashzz  |
|            8 |      303 | 2025-02-12 | Team Solid               | L   | 0.467      | -            | -                | -                | -         |    -2.94 | abr, mello, nolkz, prt, slashzz  |
|            7 |      397 | 2025-02-09 | AdalYamigos              | W   | 0.445      | 0.371        | 0.000 (0.000)    | 0.239 (0.039)    | 0 (0.000) |     5.71 | abr, mello, nolkz, prt, slashzz  |
|            6 |      484 | 2025-02-07 | BESTIA                   | L   | 0.433      | -            | -                | -                | -         |    -1.97 | abr, mello, nolkz, prt, slashzz  |
|            5 |      707 | 2025-01-09 | Fake do Biru             | L   | 0.239      | -            | -                | -                | -         |    -3.48 | abr, mello, nolkz, pedrinzy, prt |
|            4 |      776 | 2024-12-21 | LaChampionsLiga          | W   | 0.112      | 0.384        | 0.000 (0.000)    | 0.105 (0.005)    | 0 (0.000) |     1.85 | abr, Lich, mello, pedrinzy, prt  |
|            3 |      787 | 2024-12-20 | Fake do Biru             | L   | 0.105      | -            | -                | -                | -         |    -1.54 | abr, Lich, mello, pedrinzy, prt  |
|            2 |      826 | 2024-12-17 | 20/70                    | W   | 0.084      | 0.384        | 0.000 (0.000)    | 0.009 (0.000)    | 0 (0.000) |     1.47 | abr, Lich, mello, pedrinzy, prt  |
|            1 |      900 | 2024-12-13 | Bad News Chickens        | L   | 0.057      | -            | -                | -                | -         |    -1.11 | abr, Lich, mello, pedrinzy, prt  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
