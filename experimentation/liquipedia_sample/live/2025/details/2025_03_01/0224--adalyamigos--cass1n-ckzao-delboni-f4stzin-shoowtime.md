### Roster Details<br />
Team Name: AdalYamigos<br />
Roster: cass1n, ckzao, delboNi, f4stzin, SHOOWTiME<br />
Global Rank: [224](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [41]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  690.1<br />
<br />
Final Rank Value (690.1) = Starting Rank Value (692.2) + Head To Head Adjustments (-2.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.296[<sup>1</sup>](#table2)
- Bounty Collected: 0.259[<sup>2</sup>](#table1)
- Opponent Network: 0.038[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.148<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 692.2
- 400 + ( ( 0.148 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 692.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      222 | 2025-02-15 | MIBR Academy     | L   | 1.000      | -            | -                | -                | -         |   -15.94 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME |
|           13 |      275 | 2025-02-13 | Nitro.GG         | W   | 1.000      | 0.371        | 0.002 (0.001)    | 0.518 (0.192)    | 0 (0.000) |    13.26 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME |
|           12 |      378 | 2025-02-09 | Game Hunters     | L   | 1.000      | -            | -                | -                | -         |   -15.94 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME |
|           11 |      529 | 2025-02-07 | Imperial Esports | L   | 1.000      | -            | -                | -                | -         |    -5.28 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME |
|           10 |      552 | 2025-02-06 | Fake do Biru     | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.167 (0.024)    | 0 (0.000) |    11.48 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME |
|            9 |      578 | 2025-02-05 | Imperial Esports | L   | 1.000      | -            | -                | -                | -         |    -5.25 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME |
|            8 |      596 | 2025-02-05 | KRÜ Esports      | W   | 1.000      | 0.143        | 0.001 (0.000)    | 0.145 (0.021)    | 0 (0.000) |    15.13 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME |
|            7 |     3835 | 2024-10-30 | Sharks Esports   | L   | 0.386      | -            | -                | -                | -         |    -1.78 | cass1n, delboNi, f4stzin, iDk, pesadelo    |
|            6 |     3859 | 2024-10-29 | UNO MILLE        | W   | 0.382      | 0.311        | 0.010 (0.001)    | 0.546 (0.065)    | 0 (0.000) |     6.70 | cass1n, delboNi, f4stzin, iDk, pesadelo    |
|            5 |     3912 | 2024-10-28 | Intense Game     | L   | 0.375      | -            | -                | -                | -         |    -6.18 | cass1n, delboNi, f4stzin, iDk, Kaos        |
|            4 |     4015 | 2024-10-26 | ODDIK            | L   | 0.360      | -            | -                | -                | -         |    -3.75 | cass1n, delboNi, f4stzin, iDk, pesadelo    |
|            3 |     4426 | 2024-10-17 | BESTIA           | L   | 0.301      | -            | -                | -                | -         |    -2.13 | cass1n, delboNi, f4stzin, iDk, shz         |
|            2 |     4480 | 2024-10-16 | PaiN Gaming      | L   | 0.294      | -            | -                | -                | -         |    -0.05 | cass1n, delboNi, f4stzin, iDk, shz         |
|            1 |     4543 | 2024-10-15 | Imperial Esports | W   | 0.288      | 0.450        | 0.091 (0.012)    | 0.619 (0.080)    | 0 (0.000) |     7.65 | cass1n, delboNi, f4stzin, iDk, shz         |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,411.29)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-27 |      0.367 | $1,226.46      | $450.04         |
| 2024-10-20 |      0.320 | $3,000.00      | $961.25         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
