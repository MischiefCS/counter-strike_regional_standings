### Roster Details<br />
Team Name: ZennoX<br />
Roster: Blackchaser, fazery, kjuK, Levko, MahaR<br />
Global Rank: [304](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [201]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  694.5<br />
<br />
Final Rank Value (694.5) = Starting Rank Value (670.7) + Head To Head Adjustments (23.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.242[<sup>1</sup>](#table2)
- Bounty Collected: 0.254[<sup>2</sup>](#table1)
- Opponent Network: 0.047[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.136<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 670.7
- 400 + ( ( 0.136 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 670.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1784 | 2024-12-10 | XPERION NXT     | L   | 0.666      | -            | -                | -                | -         |   -10.29 | Blackchaser, fazery, kjuK, Levko, MahaR |
|            4 |     1842 | 2024-12-08 | Rhyno Esports   | W   | 0.653      | 1.000        | 0.016 (0.010)    | 0.431 (0.282)    | 0 (0.000) |    17.14 | Blackchaser, fazery, kjuK, Levko, MahaR |
|            3 |     2101 | 2024-12-03 | Chimera Esports | L   | 0.619      | -            | -                | -                | -         |    -2.08 | Blackchaser, fazery, kjuK, Levko, MahaR |
|            2 |     2312 | 2024-11-30 | Back2TheGame    | W   | 0.600      | 1.000        | 0.002 (0.001)    | 0.245 (0.147)    | 0 (0.000) |    12.03 | Blackchaser, fazery, kjuK, Levko, MahaR |
|            1 |     2433 | 2024-11-28 | Fragmatic       | W   | 0.586      | 1.000        | 0.000 (0.000)    | 0.075 (0.044)    | 0 (0.000) |     6.94 | Blackchaser, fazery, kjuK, Levko, MahaR |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($209.53)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.698 | $300.00        | $209.53         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
