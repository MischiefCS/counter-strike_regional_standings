### Roster Details<br />
Team Name: Team Hungary<br />
Roster: Aaron, coolio, kory, noleN, xavi<br />
Global Rank: [115](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [87]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  805.5<br />
<br />
Final Rank Value (805.5) = Starting Rank Value (778.3) + Head To Head Adjustments (27.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.274[<sup>1</sup>](#table2)
- Bounty Collected: 0.206[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.276[<sup>2</sup>](#table1)

The average of these factors is 0.192<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 778.3
- 400 + ( ( 0.192 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 778.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     2936 | 2024-11-15 | ALTERNATE aTTaX               | L   | 0.493      | -            | -                | -                | -         |    -5.42 | Aaron, coolio, kory, noleN, xavi  |
|           11 |     2946 | 2024-11-15 | The Suspect                   | W   | 0.492      | 0.617        | 0.003 (0.001)    | 0.224 (0.068)    | 1 (0.492) |     5.55 | Aaron, coolio, kory, noleN, xavi  |
|           10 |     3006 | 2024-11-14 | Team Chile                    | W   | 0.486      | 0.617        | 0.000 (0.000)    | 0.051 (0.015)    | 1 (0.486) |     3.04 | Aaron, coolio, kory, noleN, xavi  |
|            9 |     3012 | 2024-11-14 | MAFE MA3LOM                   | W   | 0.485      | 0.617        | 0.000 (0.000)    | 0.025 (0.007)    | 1 (0.485) |     2.87 | Aaron, coolio, kory, noleN, xavi  |
|            8 |     3019 | 2024-11-14 | GTZ.ESPORTS                   | L   | 0.485      | -            | -                | -                | -         |    -2.02 | Aaron, coolio, kory, noleN, xavi  |
|            7 |     3261 | 2024-11-09 | Budapest Five                 | W   | 0.453      | 0.270        | 0.002 (0.000)    | 0.080 (0.010)    | 1 (0.453) |     4.53 | Aaron, balage, Kamion, kory, xavi |
|            6 |     3286 | 2024-11-09 | SKIBIDIES                     | W   | 0.451      | 0.270        | 0.001 (0.000)    | 0.058 (0.007)    | 1 (0.451) |     3.84 | Aaron, balage, Kamion, kory, xavi |
|            5 |     3807 | 2024-10-30 | ManageYself                   | W   | 0.387      | 0.270        | 0.000 (0.000)    | 0.021 (0.002)    | 0 (0.000) |     2.67 | Aaron, coolio, Kamion, kory, xavi |
|            4 |     3828 | 2024-10-30 | Myztro Gaming                 | W   | 0.386      | 0.270        | 0.000 (0.000)    | 0.017 (0.002)    | 0 (0.000) |     2.77 | Aaron, coolio, Kamion, kory, xavi |
|            3 |     4111 | 2024-10-25 | Budapest Five                 | W   | 0.353      | 0.270        | 0.002 (0.000)    | 0.080 (0.008)    | 0 (0.000) |     3.54 | Aaron, coolio, Kamion, kory, xavi |
|            2 |     4166 | 2024-10-23 | SKIBIDIES                     | W   | 0.340      | 0.270        | 0.001 (0.000)    | 0.058 (0.005)    | 0 (0.000) |     3.19 | Aaron, coolio, Kamion, kory, xavi |
|            1 |     4276 | 2024-10-20 | Békéscsabai E-Sport Egyesület | W   | 0.320      | 0.270        | 0.000 (0.000)    | 0.038 (0.003)    | 0 (0.000) |     2.61 | Aaron, coolio, Kamion, kory, xavi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($743.66)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-09 |      0.453 | $1,053.31      | $476.94         |
| 2024-11-01 |      0.400 | $666.10        | $266.72         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
