### Roster Details<br />
Team Name: Rare Atom<br />
Roster: ChildKing, kaze, L1haNg, somebody, Summer<br />
Global Rank: [57](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_08_04.md)<br />
Regional Rank: [5]( ../../standings_asia_2025_08_04.md)<br />
<br />
Final Rank Value:  409.2<br />
<br />
Final Rank Value (409.2) = Starting Rank Value (402.1) + Head To Head Adjustments (7.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.001<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 402.1
- 400 + ( ( 0.001 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 402.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |       26 | 2025-02-26 | Shika        | W   | 0.136      | 0.143        | 0.000 (0.000)    | 0.413 (0.008)    | 0 (0.000) |     2.13 | ChildKing, kaze, L1haNg, somebody, Summer |
|            7 |       43 | 2025-02-25 | DogEvil      | W   | 0.129      | 0.143        | 0.000 (0.000)    | 0.914 (0.017)    | 0 (0.000) |     2.03 | ChildKing, kaze, L1haNg, somebody, Summer |
|            6 |       73 | 2025-02-23 | T.Beast      | W   | 0.121      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.89 | ChildKing, kaze, L1haNg, somebody, Summer |
|            5 |      300 | 2025-02-12 | ATOX Esports | L   | 0.048      | -            | -                | -                | -         |    -0.49 | ChildKing, kaze, L1haNg, somebody, Summer |
|            4 |      346 | 2025-02-10 | TYLOO        | W   | 0.035      | 0.143        | 0.000 (0.000)    | 0.049 (0.000)    | 0 (0.000) |     0.55 | ChildKing, kaze, L1haNg, somebody, Summer |
|            3 |      381 | 2025-02-09 | DogEvil      | W   | 0.029      | 0.143        | 0.000 (0.000)    | 0.914 (0.004)    | 0 (0.000) |     0.45 | ChildKing, kaze, L1haNg, somebody, Summer |
|            2 |      414 | 2025-02-08 | JiJieHao     | W   | 0.022      | 0.143        | 0.000 (0.000)    | 0.413 (0.001)    | 0 (0.000) |     0.34 | ChildKing, kaze, L1haNg, somebody, Summer |
|            1 |      478 | 2025-02-07 | DogEvil      | W   | 0.015      | 0.143        | 0.000 (0.000)    | 0.914 (0.002)    | 0 (0.000) |     0.24 | ChildKing, kaze, L1haNg, somebody, Summer |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
