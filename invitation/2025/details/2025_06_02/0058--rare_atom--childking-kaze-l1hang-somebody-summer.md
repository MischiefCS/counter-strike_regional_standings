### Roster Details<br />
Team Name: Rare Atom<br />
Roster: ChildKing, kaze, L1haNg, somebody, Summer<br />
Global Rank: [58](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_06_02.md)<br />
Regional Rank: [9]( ../../standings_asia_2025_06_02.md)<br />
<br />
Final Rank Value:  731.8<br />
<br />
Final Rank Value (731.8) = Starting Rank Value (719.5) + Head To Head Adjustments (12.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.307[<sup>1</sup>](#table2)
- Bounty Collected: 0.172[<sup>2</sup>](#table1)
- Opponent Network: 0.021[<sup>2</sup>](#table1)
- LAN Wins: 0.051[<sup>2</sup>](#table1)

The average of these factors is 0.138<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 719.5
- 400 + ( ( 0.138 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 719.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |       26 | 2025-02-26 | Shika            | W   | 0.556      | 0.143        | 0.000 (0.000)    | 0.279 (0.022)    | 0 (0.000) |     2.58 | ChildKing, kaze, L1haNg, somebody, Summer |
|           10 |       43 | 2025-02-25 | DogEvil          | W   | 0.549      | 0.143        | 0.000 (0.000)    | 0.645 (0.051)    | 0 (0.000) |     2.68 | ChildKing, kaze, L1haNg, somebody, Summer |
|            9 |       73 | 2025-02-23 | T.Beast          | W   | 0.541      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.37 | ChildKing, kaze, L1haNg, somebody, Summer |
|            8 |      300 | 2025-02-12 | ATOX Esports     | L   | 0.468      | -            | -                | -                | -         |    -4.13 | ChildKing, kaze, L1haNg, somebody, Summer |
|            7 |      346 | 2025-02-10 | TYLOO            | W   | 0.455      | 0.143        | 0.000 (0.000)    | 0.159 (0.010)    | 0 (0.000) |     2.15 | ChildKing, kaze, L1haNg, somebody, Summer |
|            6 |      381 | 2025-02-09 | DogEvil          | W   | 0.449      | 0.143        | 0.000 (0.000)    | 0.645 (0.041)    | 0 (0.000) |     2.16 | ChildKing, kaze, L1haNg, somebody, Summer |
|            5 |      414 | 2025-02-08 | JiJieHao         | W   | 0.442      | 0.143        | 0.000 (0.000)    | 0.294 (0.019)    | 0 (0.000) |     3.11 | ChildKing, kaze, L1haNg, somebody, Summer |
|            4 |      478 | 2025-02-07 | DogEvil          | W   | 0.435      | 0.143        | 0.000 (0.000)    | 0.645 (0.040)    | 0 (0.000) |     2.02 | ChildKing, kaze, L1haNg, somebody, Summer |
|            3 |      740 | 2024-12-28 | ATOX Esports     | L   | 0.161      | -            | -                | -                | -         |    -1.37 | ChildKing, L1haNg, somebody, Summer, z8z  |
|            2 |      744 | 2024-12-28 | Eruption         | L   | 0.157      | -            | -                | -                | -         |    -1.81 | ChildKing, L1haNg, somebody, Summer, z8z  |
|            1 |      751 | 2024-12-27 | The Huns Esports | W   | 0.150      | 0.384        | 0.003 (0.000)    | 0.426 (0.024)    | 1 (0.150) |     2.57 | ChildKing, L1haNg, somebody, Summer, z8z  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($487.08)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-29 |      0.162 | $3,000.00      | $487.08         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
