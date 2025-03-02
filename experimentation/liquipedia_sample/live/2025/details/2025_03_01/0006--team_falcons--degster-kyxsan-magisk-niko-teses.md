### Roster Details<br />
Team Name: Team Falcons<br />
Roster: degster, kyxsan, Magisk, NiKo, TeSeS<br />
Global Rank: [6](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [5]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  1841.1<br />
<br />
Final Rank Value (1841.1) = Starting Rank Value (1903.3) + Head To Head Adjustments (-62.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.968[<sup>1</sup>](#table2)
- Bounty Collected: 0.733[<sup>2</sup>](#table1)
- Opponent Network: 0.422[<sup>2</sup>](#table1)
- LAN Wins: 0.930[<sup>2</sup>](#table1)

The average of these factors is 0.763<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1903.3
- 400 + ( ( 0.763 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 1903.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           43 |       84 | 2025-02-23 | MOUZ               | L   | 1.000      | -            | -                | -                | -         |   -14.52 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           42 |       98 | 2025-02-22 | FaZe Clan          | W   | 1.000      | 1.000        | 0.744 (0.744)    | 0.529 (0.529)    | 1 (1.000) |    17.17 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           41 |      139 | 2025-02-21 | Eternal Fire       | W   | 1.000      | 1.000        | 0.591 (0.591)    | 0.562 (0.562)    | 1 (1.000) |    16.17 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           40 |      192 | 2025-02-17 | MOUZ               | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.519 (0.519)    | 1 (1.000) |    17.66 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           39 |      210 | 2025-02-16 | Astralis           | W   | 1.000      | 1.000        | 0.609 (0.609)    | 0.864 (0.864)    | 1 (1.000) |    11.18 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           38 |      224 | 2025-02-15 | PaiN Gaming        | L   | 1.000      | -            | -                | -                | -         |   -24.17 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           37 |      258 | 2025-02-14 | FlyQuest           | W   | 1.000      | 1.000        | 0.105 (0.105)    | 0.263 (0.263)    | 1 (1.000) |     0.73 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           36 |      348 | 2025-02-10 | BetBoom Team       | W   | 1.000      | -            | -                | -                | -         |     0.50 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           35 |      354 | 2025-02-10 | TEAM NEXT LEVEL    | W   | 1.000      | -            | -                | -                | -         |     0.07 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           34 |      647 | 2025-02-02 | G2 Esports         | L   | 1.000      | -            | -                | -                | -         |   -16.42 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           33 |      670 | 2025-02-01 | Eternal Fire       | L   | 1.000      | -            | -                | -                | -         |   -14.64 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           32 |      769 | 2025-01-19 | Eternal Fire       | L   | 0.925      | -            | -                | -                | -         |   -15.74 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           31 |      783 | 2025-01-15 | ENCE               | W   | 0.899      | -            | -                | -                | -         |     0.27 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           30 |     1422 | 2024-12-12 | G2 Esports         | L   | 0.677      | -            | -                | -                | -         |   -11.65 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           29 |     1631 | 2024-12-07 | Natus Vincere      | W   | 0.643      | 1.000        | 0.555 (0.357)    | 0.525 (0.338)    | 1 (0.643) |     5.67 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           28 |     1694 | 2024-12-07 | Team Spirit        | L   | 0.637      | -            | -                | -                | -         |    -8.19 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           27 |     1741 | 2024-12-06 | The MongolZ        | L   | 0.631      | -            | -                | -                | -         |    -8.05 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           26 |     1762 | 2024-12-05 | FaZe Clan          | W   | 0.625      | 1.000        | 0.744 (0.465)    | 0.529 (0.331)    | 1 (0.625) |    10.07 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           25 |     1781 | 2024-12-04 | BIG                | W   | 0.623      | 1.000        | 0.246 (0.153)    | 0.616 (0.384)    | 1 (0.623) |     1.89 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           24 |     2482 | 2024-11-22 | Passion UA         | W   | 0.544      | -            | -                | -                | 1 (0.544) |     0.14 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           23 |     2568 | 2024-11-21 | Ninjas in Pyjamas  | W   | 0.536      | -            | -                | -                | 1 (0.536) |     0.07 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           22 |     2605 | 2024-11-21 | BIG                | L   | 0.532      | -            | -                | -                | -         |   -15.24 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           21 |     2628 | 2024-11-20 | PARIVISION         | W   | 0.530      | -            | -                | -                | -         |     0.03 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           20 |     3578 | 2024-11-03 | The MongolZ        | L   | 0.413      | -            | -                | -                | -         |    -5.96 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           19 |     3658 | 2024-11-02 | OG                 | W   | 0.406      | 0.934        | -                | 0.636 (0.241)    | -         |     0.05 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           18 |     4039 | 2024-10-26 | Fnatic             | W   | 0.359      | -            | -                | -                | -         |     0.10 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           17 |     4162 | 2024-10-23 | Ninjas in Pyjamas  | W   | 0.341      | -            | -                | -                | -         |     0.04 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           16 |     4198 | 2024-10-23 | Legacy             | W   | 0.338      | 0.934        | -                | 0.598 (0.189)    | -         |     0.04 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           15 |     4309 | 2024-10-20 | ENCE               | L   | 0.319      | -            | -                | -                | -         |    -9.98 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           14 |     4345 | 2024-10-19 | B8                 | W   | 0.313      | -            | -                | -                | -         |     0.14 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           13 |     4447 | 2024-10-17 | ENCE               | W   | 0.299      | -            | -                | -                | -         |     0.06 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           12 |     4462 | 2024-10-17 | Rebels Gaming      | W   | 0.298      | -            | -                | -                | -         |     0.02 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           11 |     4704 | 2024-10-12 | Natus Vincere      | L   | 0.266      | -            | -                | -                | -         |    -6.32 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           10 |     4838 | 2024-10-09 | Team Vitality      | W   | 0.246      | 0.624        | 1.000 (0.154)    | -                | -         |     3.94 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            9 |     4898 | 2024-10-08 | Astralis           | W   | 0.240      | -            | -                | -                | -         |     3.16 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            8 |     4958 | 2024-10-07 | G2 Esports         | W   | 0.233      | 0.624        | 1.000 (0.145)    | -                | -         |     2.67 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            7 |     6202 | 2024-09-18 | MIBR               | L   | 0.105      | -            | -                | -                | -         |    -3.05 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            6 |     6272 | 2024-09-17 | Virtus.pro         | W   | 0.098      | -            | -                | -                | -         |     0.61 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            5 |     6765 | 2024-09-08 | HEROIC             | W   | 0.039      | -            | -                | -                | -         |     0.01 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            4 |     6838 | 2024-09-07 | Ninjas in Pyjamas  | W   | 0.032      | -            | -                | -                | -         |     0.00 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            3 |     6989 | 2024-09-05 | HEROIC             | L   | 0.020      | -            | -                | -                | -         |    -0.62 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            2 |     7060 | 2024-09-04 | Lynn Vision Gaming | W   | 0.013      | -            | -                | -                | -         |     0.00 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            1 |     7136 | 2024-09-03 | Ninjas in Pyjamas  | L   | 0.006      | -            | -                | -                | -         |    -0.18 | degster, kyxsan, NertZ, sjuush, TeSeS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($311,868.96)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.93) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      1.000 | $187,500.00    | $187,500.00     |
| 2025-02-09 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-12-15 |      0.691 | $45,000.00     | $31,092.71      |
| 2024-11-03 |      0.413 | $150,000.00    | $61,937.50      |
| 2024-10-20 |      0.319 | $40,000.00     | $12,763.89      |
| 2024-10-13 |      0.273 | $20,000.00     | $5,461.11       |
| 2024-09-22 |      0.133 | $23,500.00     | $3,113.75       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
