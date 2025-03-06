### Roster Details<br />
Team Name: Rare Atom<br />
Roster: ChildKing, kaze, L1haNg, somebody, Summer<br />
Global Rank: [75](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_07_07.md)<br />
Regional Rank: [7]( ../../standings_asia_2025_07_07.md)<br />
<br />
Final Rank Value:  431.5<br />
<br />
Final Rank Value (431.5) = Starting Rank Value (406.7) + Head To Head Adjustments (24.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.003<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 406.7
- 400 + ( ( 0.003 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 406.7


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
|            8 |       26 | 2025-02-26 | Shika        | W   | 0.323      | 0.143        | 0.000 (0.000)    | 0.329 (0.015)    | 0 (0.000) |     4.83 | ChildKing, kaze, L1haNg, somebody, Summer |
|            7 |       43 | 2025-02-25 | DogEvil      | W   | 0.316      | 0.143        | 0.000 (0.000)    | 0.754 (0.034)    | 0 (0.000) |     4.77 | ChildKing, kaze, L1haNg, somebody, Summer |
|            6 |       73 | 2025-02-23 | T.Beast      | W   | 0.308      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.59 | ChildKing, kaze, L1haNg, somebody, Summer |
|            5 |      300 | 2025-02-12 | ATOX Esports | L   | 0.234      | -            | -                | -                | -         |    -2.56 | ChildKing, kaze, L1haNg, somebody, Summer |
|            4 |      346 | 2025-02-10 | TYLOO        | W   | 0.222      | 0.143        | 0.000 (0.000)    | 0.160 (0.005)    | 0 (0.000) |     3.40 | ChildKing, kaze, L1haNg, somebody, Summer |
|            3 |      381 | 2025-02-09 | DogEvil      | W   | 0.215      | 0.143        | 0.000 (0.000)    | 0.754 (0.023)    | 0 (0.000) |     3.33 | ChildKing, kaze, L1haNg, somebody, Summer |
|            2 |      414 | 2025-02-08 | JiJieHao     | W   | 0.209      | 0.143        | 0.000 (0.000)    | 0.329 (0.010)    | 0 (0.000) |     3.23 | ChildKing, kaze, L1haNg, somebody, Summer |
|            1 |      478 | 2025-02-07 | DogEvil      | W   | 0.202      | 0.143        | 0.000 (0.000)    | 0.754 (0.022)    | 0 (0.000) |     3.15 | ChildKing, kaze, L1haNg, somebody, Summer |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
