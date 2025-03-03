### Roster Details<br />
Team Name: 1win<br />
Roster: cronuss, HObbit, klain, oz1k, sh1geo<br />
Global Rank: [214](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [141]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  655.6<br />
<br />
Final Rank Value (655.6) = Starting Rank Value (657.8) + Head To Head Adjustments (-2.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.292[<sup>1</sup>](#table2)
- Bounty Collected: 0.226[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.132<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 657.8
- 400 + ( ( 0.132 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 657.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      178 | 2025-02-21 | Dark Cloud Esports                        | L   | 1.000      | -            | -                | -                | -         |    -9.92 | cronuss, HObbit, klain, oz1k, sh1geo |
|            6 |     2139 | 2024-11-30 | GenOne                                    | L   | 0.593      | -            | -                | -                | -         |    -7.16 | cronuss, HObbit, Jyo, lattykk, oz1k  |
|            5 |     2232 | 2024-11-28 | Copenhagen Wolves (American organization) | L   | 0.579      | -            | -                | -                | -         |    -5.87 | cronuss, HObbit, Jyo, lattykk, oz1k  |
|            4 |     2288 | 2024-11-26 | Permitta Esports                          | W   | 0.566      | 0.372        | 0.013 (0.003)    | 0.275 (0.058)    | 0 (0.000) |    10.73 | cronuss, HObbit, Jyo, lattykk, oz1k  |
|            3 |     3157 | 2024-11-03 | FLuffy Gangsters                          | W   | 0.412      | 0.143        | 0.013 (0.001)    | 0.560 (0.033)    | 0 (0.000) |     7.59 | cronuss, HObbit, Jyo, lattykk, oz1k  |
|            2 |     3201 | 2024-11-02 | RUSH B (Russian team)                     | L   | 0.407      | -            | -                | -                | -         |    -3.61 | cronuss, HObbit, Jyo, lattykk, oz1k  |
|            1 |     3290 | 2024-10-31 | QUAZAR                                    | W   | 0.393      | 0.143        | 0.005 (0.000)    | 0.105 (0.006)    | 0 (0.000) |     6.03 | cronuss, HObbit, Jyo, lattykk, oz1k  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,266.95)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      0.413 | $3,065.21      | $1,266.95       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
