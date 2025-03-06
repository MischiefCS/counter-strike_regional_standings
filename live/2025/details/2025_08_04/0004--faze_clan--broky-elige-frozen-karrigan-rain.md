### Roster Details<br />
Team Name: FaZe Clan<br />
Roster: broky, EliGE, frozen, karrigan, rain<br />
Global Rank: [4](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [4]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  1949.5<br />
<br />
Final Rank Value (1949.5) = Starting Rank Value (1950.3) + Head To Head Adjustments (-0.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.383[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.970[<sup>2</sup>](#table1)

The average of these factors is 0.592<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1950.3
- 400 + ( ( 0.592 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 1950.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |       98 | 2025-02-23 | Astralis     | L   | 0.117      | -            | -                | -                | -         |    -1.73 | broky, EliGE, frozen, karrigan, rain |
|            5 |      106 | 2025-02-22 | Team Falcons | L   | 0.112      | -            | -                | -                | -         |    -1.57 | broky, EliGE, frozen, karrigan, rain |
|            4 |      128 | 2025-02-21 | SAW          | W   | 0.105      | 1.000        | 0.756 (0.079)    | 0.349 (0.037)    | 1 (0.105) |     0.61 | broky, EliGE, frozen, karrigan, rain |
|            3 |      211 | 2025-02-16 | MOUZ         | W   | 0.070      | 1.000        | 1.000 (0.070)    | 0.802 (0.056)    | 1 (0.070) |     1.26 | broky, EliGE, frozen, karrigan, rain |
|            2 |      245 | 2025-02-15 | Eternal Fire | W   | 0.064      | 1.000        | 0.856 (0.054)    | 0.308 (0.020)    | 1 (0.064) |     0.33 | broky, EliGE, frozen, karrigan, rain |
|            1 |      278 | 2025-02-14 | SAW          | W   | 0.056      | 1.000        | 0.756 (0.042)    | 0.349 (0.020)    | 1 (0.056) |     0.33 | broky, EliGE, frozen, karrigan, rain |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,350.12)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      0.118 | $87,500.00     | $10,350.12      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
