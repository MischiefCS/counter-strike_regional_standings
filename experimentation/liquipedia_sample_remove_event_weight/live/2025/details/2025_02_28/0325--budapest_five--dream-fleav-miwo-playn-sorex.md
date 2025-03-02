### Roster Details<br />
Team Name: Budapest Five<br />
Roster: DreaM, fleav, miwo, playN, Sorex<br />
Global Rank: [325](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [212]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  680.1<br />
<br />
Final Rank Value (680.1) = Starting Rank Value (663.0) + Head To Head Adjustments (17.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.267[<sup>1</sup>](#table2)
- Bounty Collected: 0.195[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.058[<sup>2</sup>](#table1)

The average of these factors is 0.132<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 663.0
- 400 + ( ( 0.132 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 663.0


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
|            7 |     3496 | 2024-11-09 | Team Hungary                  | L   | 0.459      | -            | -                | -                | -         |    -4.30 | DreaM, fleav, miwo, playN, Sorex    |
|            6 |     3511 | 2024-11-09 | Békéscsabai E-Sport Egyesület | W   | 0.458      | 1.000        | 0.000 (0.000)    | 0.037 (0.017)    | 1 (0.458) |     5.70 | DreaM, fleav, miwo, playN, Sorex    |
|            5 |     3969 | 2024-11-01 | SKIBIDIES                     | W   | 0.406      | 1.000        | 0.001 (0.000)    | 0.057 (0.023)    | 0 (0.000) |     5.79 | DreaM, miwo, playN, Sorex, strong3r |
|            4 |     4066 | 2024-10-30 | Myztro Gaming                 | W   | 0.393      | 1.000        | 0.000 (0.000)    | 0.017 (0.007)    | 0 (0.000) |     4.66 | DreaM, miwo, playN, Sorex, strong3r |
|            3 |     4373 | 2024-10-25 | Team Hungary                  | L   | 0.359      | -            | -                | -                | -         |    -3.36 | DreaM, miwo, playN, Sorex, strong3r |
|            2 |     4428 | 2024-10-23 | Békéscsabai E-Sport Egyesület | W   | 0.346      | 1.000        | 0.000 (0.000)    | 0.037 (0.013)    | 0 (0.000) |     4.47 | DreaM, miwo, playN, Sorex, strong3r |
|            1 |     4575 | 2024-10-20 | ManageYself                   | W   | 0.325      | 1.000        | 0.000 (0.000)    | 0.020 (0.007)    | 0 (0.000) |     4.10 | DreaM, miwo, playN, Sorex, strong3r |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($518.88)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-09 |      0.459 | $658.32        | $302.19         |
| 2024-11-01 |      0.407 | $532.88        | $216.69         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
