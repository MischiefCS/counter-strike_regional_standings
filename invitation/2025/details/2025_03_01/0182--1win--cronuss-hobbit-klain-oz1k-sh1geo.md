### Roster Details<br />
Team Name: 1win<br />
Roster: cronuss, HObbit, klain, oz1k, sh1geo<br />
Global Rank: [182](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [117]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  642.9<br />
<br />
Final Rank Value (642.9) = Starting Rank Value (650.3) + Head To Head Adjustments (-7.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.292[<sup>1</sup>](#table2)
- Bounty Collected: 0.222[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.130<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 650.3
- 400 + ( ( 0.130 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 650.3


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
|            7 |      143 | 2025-02-21 | Dark Cloud Esports                        | L   | 1.000      | -            | -                | -                | -         |   -12.68 | cronuss, HObbit, klain, oz1k, sh1geo |
|            6 |     1157 | 2024-11-30 | GenOne                                    | L   | 0.593      | -            | -                | -                | -         |    -7.34 | cronuss, HObbit, Jyo, lattykk, oz1k  |
|            5 |     1207 | 2024-11-28 | Copenhagen Wolves (American organization) | L   | 0.579      | -            | -                | -                | -         |    -6.90 | cronuss, HObbit, Jyo, lattykk, oz1k  |
|            4 |     1232 | 2024-11-26 | ARROW (German team)                       | W   | 0.566      | 0.372        | 0.013 (0.003)    | 0.077 (0.016)    | 0 (0.000) |    10.89 | cronuss, HObbit, Jyo, lattykk, oz1k  |
|            3 |     1692 | 2024-11-03 | FLuffy Gangsters                          | W   | 0.412      | 0.143        | 0.005 (0.000)    | 0.419 (0.025)    | 0 (0.000) |     7.05 | cronuss, HObbit, Jyo, lattykk, oz1k  |
|            2 |     1706 | 2024-11-02 | RUSH B (Russian team)                     | L   | 0.407      | -            | -                | -                | -         |    -3.64 | cronuss, HObbit, Jyo, lattykk, oz1k  |
|            1 |     1747 | 2024-10-31 | QUAZAR                                    | W   | 0.393      | 0.143        | 0.002 (0.000)    | 0.006 (0.000)    | 0 (0.000) |     5.31 | cronuss, HObbit, Jyo, lattykk, oz1k  |

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
