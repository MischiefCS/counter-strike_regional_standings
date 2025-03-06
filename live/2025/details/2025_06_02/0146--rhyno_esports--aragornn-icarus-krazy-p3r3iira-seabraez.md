### Roster Details<br />
Team Name: Rhyno Esports<br />
Roster: aragornN, Icarus, krazy, P3R3IIRA, seabraez<br />
Global Rank: [146](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [79]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  389.1<br />
<br />
Final Rank Value (389.1) = Starting Rank Value (400.7) + Head To Head Adjustments (-11.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.7
- 400 + ( ( 0.000 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 400.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |       18 | 2025-02-27 | BC.Game Esports        | L   | 0.563      | -            | -                | -                | -         |    -0.68 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            9 |       28 | 2025-02-26 | Alliance               | L   | 0.556      | -            | -                | -                | -         |    -4.75 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            8 |      162 | 2025-02-20 | Betclic Apogee Esports | L   | 0.516      | -            | -                | -                | -         |    -1.92 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            7 |      169 | 2025-02-19 | PARIVISION             | L   | 0.510      | -            | -                | -                | -         |    -3.14 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            6 |      196 | 2025-02-17 | Mercenaires            | L   | 0.497      | -            | -                | -                | -         |    -7.91 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            5 |      712 | 2025-01-09 | Insilio                | L   | 0.237      | -            | -                | -                | -         |    -2.63 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            4 |      720 | 2025-01-06 | FLuffy Gangsters       | W   | 0.218      | 0.417        | 0.000 (0.000)    | 0.073 (0.007)    | 0 (0.000) |     4.20 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            3 |      730 | 2025-01-04 | CS2NEWS                | W   | 0.203      | 0.417        | 0.000 (0.000)    | 0.030 (0.003)    | 0 (0.000) |     4.15 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            2 |      732 | 2025-01-03 | KONO.ECF               | L   | 0.198      | -            | -                | -                | -         |    -2.02 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            1 |      745 | 2024-12-28 | BRUTE                  | W   | 0.156      | 0.417        | 0.000 (0.000)    | 0.037 (0.002)    | 0 (0.000) |     3.16 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
