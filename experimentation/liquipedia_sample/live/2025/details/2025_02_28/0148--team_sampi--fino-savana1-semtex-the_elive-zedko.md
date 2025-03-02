### Roster Details<br />
Team Name: Team Sampi<br />
Roster: fino, sAvana1, semtex, The eLiVe, ZEDKO<br />
Global Rank: [148](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [104]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  794.0<br />
<br />
Final Rank Value (794.0) = Starting Rank Value (839.8) + Head To Head Adjustments (-45.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.354[<sup>1</sup>](#table2)
- Bounty Collected: 0.269[<sup>2</sup>](#table1)
- Opponent Network: 0.020[<sup>2</sup>](#table1)
- LAN Wins: 0.210[<sup>2</sup>](#table1)

The average of these factors is 0.213<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 839.8
- 400 + ( ( 0.213 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 839.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           29 |     1956 | 2024-12-07 | CYBERSHOKE Esports     | L   | 0.645      | -            | -                | -                | -         |    -7.65 | fino, sAvana1, semtex, The eLiVe, ZEDKO  |
|           28 |     2007 | 2024-12-05 | Insilio                | L   | 0.633      | -            | -                | -                | -         |   -13.29 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           27 |     2021 | 2024-12-05 | Tricked Esport         | L   | 0.630      | -            | -                | -                | -         |    -6.95 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           26 |     2045 | 2024-12-04 | FLuffy Gangsters       | L   | 0.626      | -            | -                | -                | -         |    -8.11 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           25 |     2273 | 2024-12-01 | Betclic Apogee Esports | L   | 0.604      | -            | -                | -                | -         |    -7.12 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           24 |     2618 | 2024-11-24 | BRUTE                  | W   | 0.557      | 0.143        | 0.005 (0.000)    | 0.371 (0.030)    | 1 (0.557) |     6.21 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           23 |     2715 | 2024-11-23 | UNiTY esports          | L   | 0.550      | -            | -                | -                | -         |    -7.54 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           22 |     2770 | 2024-11-22 | ENTERPRISE Genesis     | W   | 0.546      | 0.143        | 0.002 (0.000)    | 0.193 (0.015)    | 1 (0.546) |     4.76 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           21 |     3862 | 2024-11-03 | Los kogutos            | L   | 0.417      | -            | -                | -                | -         |    -4.52 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           20 |     4163 | 2024-10-29 | 9INE                   | L   | 0.385      | -            | -                | -                | -         |    -6.57 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           19 |     4386 | 2024-10-25 | Los kogutos            | W   | 0.357      | 0.371        | 0.038 (0.005)    | 0.572 (0.076)    | 0 (0.000) |     8.00 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           18 |     5020 | 2024-10-12 | Los kogutos            | L   | 0.271      | -            | -                | -                | -         |    -2.14 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           17 |     5384 | 2024-10-05 | Dynamo Eclot           | L   | 0.225      | -            | -                | -                | -         |    -1.15 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           16 |     5412 | 2024-10-05 | Tricked Esport         | L   | 0.223      | -            | -                | -                | -         |    -3.45 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           15 |     5457 | 2024-10-04 | Dynamo Eclot           | W   | 0.218      | 0.143        | 0.151 (0.005)    | 0.759 (0.024)    | 1 (0.218) |     5.79 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           14 |     5518 | 2024-10-03 | AVEZ                   | W   | 0.210      | 0.143        | -                | 0.003 (0.000)    | 1 (0.210) |     0.53 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           13 |     5847 | 2024-09-28 | Wild Lotus             | L   | 0.178      | -            | -                | -                | -         |    -3.25 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           12 |     6311 | 2024-09-22 | SINNERS Esports        | L   | 0.138      | -            | -                | -                | -         |    -1.18 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           11 |     6376 | 2024-09-21 | Dynamo Eclot           | W   | 0.131      | 0.143        | 0.151 (0.003)    | 0.759 (0.014)    | 1 (0.131) |     3.51 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|           10 |     6430 | 2024-09-20 | UNiTY esports          | L   | 0.125      | -            | -                | -                | -         |    -1.79 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|            9 |     6483 | 2024-09-19 | Wild Lotus             | L   | 0.119      | -            | -                | -                | -         |    -2.26 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|            8 |     6698 | 2024-09-16 | B8                     | W   | 0.097      | 0.384        | 0.148 (0.005)    | 0.828 (0.031)    | 0 (0.000) |     2.70 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|            7 |     6942 | 2024-09-12 | OG                     | L   | 0.070      | -            | -                | -                | -         |    -0.81 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|            6 |     7054 | 2024-09-10 | MOUZ NXT               | W   | 0.057      | 0.384        | 0.000 (0.000)    | -                | 0 (0.000) |     0.24 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|            5 |     7096 | 2024-09-09 | SINNERS Esports        | L   | 0.052      | -            | -                | -                | -         |    -0.43 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|            4 |     7392 | 2024-09-05 | ENTERPRISE Genesis     | W   | 0.025      | 0.143        | 0.002 (0.000)    | 0.193 (0.001)    | 0 (0.000) |     0.21 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|            3 |     7421 | 2024-09-05 | Tricked Esport         | W   | 0.024      | 0.384        | 0.040 (0.000)    | 0.628 (0.006)    | 0 (0.000) |     0.39 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|            2 |     7469 | 2024-09-04 | Metizport              | L   | 0.018      | -            | -                | -                | -         |    -0.08 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|            1 |     7550 | 2024-09-03 | Ex-ENTERPRISE esports  | W   | 0.010      | 0.384        | 0.004 (0.000)    | 0.093 (0.000)    | -         |     0.12 | fino, manguss, sAvana1, The eLiVe, ZEDKO |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,258.47)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      0.558 | $4,932.95      | $2,752.75       |
| 2024-10-05 |      0.225 | $5,490.86      | $1,234.55       |
| 2024-09-22 |      0.139 | $1,336.22      | $185.49         |
| 2024-09-14 |      0.086 | $1,000.00      | $85.67          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
