### Roster Details<br />
Team Name: ManageYself<br />
Roster: cruly, gbk, Sc0rchzz, v1z3r, zs0lt1<br />
Global Rank: [456](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [284]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  582.5<br />
<br />
Final Rank Value (582.5) = Starting Rank Value (592.2) + Head To Head Adjustments (-9.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.212[<sup>1</sup>](#table2)
- Bounty Collected: 0.172[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.096<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 592.2
- 400 + ( ( 0.096 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 592.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3956 | 2024-11-01 | Békéscsabai E-Sport Egyesület | W   | 0.407      | 1.000        | 0.000 (0.000)    | 0.037 (0.015)    | 0 (0.000) |     7.00 | cruly, gbk, Sc0rchzz, v1z3r, zs0lt1 |
|            4 |     4064 | 2024-10-30 | Team Hungary                  | L   | 0.393      | -            | -                | -                | -         |    -2.42 | cruly, gbk, Sc0rchzz, v1z3r, zs0lt1 |
|            3 |     4354 | 2024-10-25 | SKIBIDIES                     | L   | 0.359      | -            | -                | -                | -         |    -4.67 | cruly, gbk, Sc0rchzz, v1z3r, zs0lt1 |
|            2 |     4450 | 2024-10-23 | Myztro Gaming                 | L   | 0.345      | -            | -                | -                | -         |    -5.50 | cruly, gbk, Sc0rchzz, v1z3r, zs0lt1 |
|            1 |     4575 | 2024-10-20 | Budapest Five                 | L   | 0.325      | -            | -                | -                | -         |    -4.10 | cruly, gbk, Sc0rchzz, v1z3r, zs0lt1 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($54.17)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-01 |      0.407 | $133.22        | $54.17          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
