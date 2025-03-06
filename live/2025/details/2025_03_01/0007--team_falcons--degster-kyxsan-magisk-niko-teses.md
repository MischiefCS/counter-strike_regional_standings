### Roster Details<br />
Team Name: Team Falcons<br />
Roster: degster, kyxsan, Magisk, NiKo, TeSeS<br />
Global Rank: [7](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [6]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  1835.0<br />
<br />
Final Rank Value (1835.0) = Starting Rank Value (1898.5) + Head To Head Adjustments (-63.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.968[<sup>1</sup>](#table2)
- Bounty Collected: 0.732[<sup>2</sup>](#table1)
- Opponent Network: 0.473[<sup>2</sup>](#table1)
- LAN Wins: 0.930[<sup>2</sup>](#table1)

The average of these factors is 0.776<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1898.5
- 400 + ( ( 0.776 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1898.5


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
|           40 |       81 | 2025-02-23 | MOUZ               | L   | 1.000      | -            | -                | -                | -         |   -14.74 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           39 |      106 | 2025-02-22 | FaZe Clan          | W   | 1.000      | 1.000        | 0.744 (0.744)    | 0.618 (0.618)    | 1 (1.000) |    17.06 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           38 |      145 | 2025-02-21 | Eternal Fire       | W   | 1.000      | 1.000        | 0.588 (0.588)    | 0.635 (0.635)    | 1 (1.000) |    16.60 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           37 |      201 | 2025-02-17 | MOUZ               | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.606 (0.606)    | 1 (1.000) |    17.43 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           36 |      214 | 2025-02-16 | Astralis           | W   | 1.000      | 1.000        | 0.609 (0.609)    | 1.000 (1.000)    | 1 (1.000) |    10.84 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           35 |      233 | 2025-02-15 | PaiN Gaming        | L   | 1.000      | -            | -                | -                | -         |   -24.46 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           34 |      276 | 2025-02-14 | FlyQuest           | W   | 1.000      | 1.000        | 0.105 (0.105)    | 0.223 (0.223)    | 1 (1.000) |     0.46 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           33 |      366 | 2025-02-10 | BetBoom Team       | W   | 1.000      | -            | -                | -                | -         |     0.40 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           32 |      376 | 2025-02-10 | TEAM NEXT LEVEL    | W   | 1.000      | -            | -                | -                | -         |     0.05 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           31 |      601 | 2025-02-02 | G2 Esports         | L   | 1.000      | -            | -                | -                | -         |   -16.74 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           30 |      618 | 2025-02-01 | Eternal Fire       | L   | 1.000      | -            | -                | -                | -         |   -14.14 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           29 |      671 | 2025-01-19 | Eternal Fire       | L   | 0.925      | -            | -                | -                | -         |   -15.16 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           28 |      685 | 2025-01-15 | ENCE               | W   | 0.899      | -            | -                | -                | -         |     0.24 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           27 |      906 | 2024-12-12 | G2 Esports         | L   | 0.677      | -            | -                | -                | -         |   -11.89 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           26 |      970 | 2024-12-07 | Natus Vincere      | W   | 0.643      | 1.000        | 0.555 (0.357)    | 0.613 (0.395)    | 1 (0.643) |     5.63 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           25 |      997 | 2024-12-07 | Team Spirit        | L   | 0.637      | -            | -                | -                | -         |    -7.97 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           24 |     1023 | 2024-12-06 | The MongolZ        | L   | 0.631      | -            | -                | -                | -         |    -8.15 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           23 |     1039 | 2024-12-05 | FaZe Clan          | W   | 0.625      | 1.000        | 0.744 (0.465)    | 0.618 (0.386)    | 1 (0.625) |     9.96 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           22 |     1056 | 2024-12-04 | BIG                | W   | 0.623      | 1.000        | 0.220 (0.137)    | 0.558 (0.348)    | 1 (0.623) |     1.87 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           21 |     1294 | 2024-11-22 | Passion UA         | W   | 0.544      | -            | -                | -                | 1 (0.544) |     0.16 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           20 |     1326 | 2024-11-21 | Ninjas in Pyjamas  | W   | 0.536      | -            | -                | -                | 1 (0.536) |     0.05 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           19 |     1336 | 2024-11-21 | BIG                | L   | 0.532      | -            | -                | -                | -         |   -15.26 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           18 |     1351 | 2024-11-20 | PARIVISION         | W   | 0.530      | -            | -                | -                | -         |     0.03 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           17 |     1686 | 2024-11-03 | The MongolZ        | L   | 0.413      | -            | -                | -                | -         |    -6.03 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           16 |     1709 | 2024-11-02 | OG                 | W   | 0.406      | 0.934        | -                | 0.974 (0.370)    | -         |     0.04 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           15 |     1847 | 2024-10-20 | ENCE               | L   | 0.319      | -            | -                | -                | -         |    -9.98 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           14 |     1860 | 2024-10-19 | B8                 | W   | 0.313      | -            | -                | -                | -         |     0.08 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           13 |     1909 | 2024-10-17 | ENCE               | W   | 0.299      | -            | -                | -                | -         |     0.06 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           12 |     1915 | 2024-10-17 | Rebels Gaming      | W   | 0.297      | -            | -                | -                | -         |     0.01 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           11 |     1983 | 2024-10-12 | Natus Vincere      | L   | 0.266      | -            | -                | -                | -         |    -6.33 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           10 |     2039 | 2024-10-09 | Team Vitality      | W   | 0.246      | 0.624        | 1.000 (0.154)    | -                | -         |     3.95 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            9 |     2096 | 2024-10-08 | Astralis           | W   | 0.240      | 0.624        | -                | 1.000 (0.150)    | -         |     3.05 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            8 |     2128 | 2024-10-07 | G2 Esports         | W   | 0.233      | 0.624        | 1.000 (0.145)    | -                | -         |     2.56 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            7 |     2784 | 2024-09-18 | MIBR               | L   | 0.104      | -            | -                | -                | -         |    -3.06 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            6 |     2813 | 2024-09-17 | Virtus.pro         | W   | 0.098      | -            | -                | -                | -         |     0.58 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            5 |     3049 | 2024-09-08 | HEROIC             | W   | 0.039      | -            | -                | -                | -         |     0.01 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            4 |     3080 | 2024-09-07 | Ninjas in Pyjamas  | W   | 0.032      | -            | -                | -                | -         |     0.00 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            3 |     3134 | 2024-09-05 | HEROIC             | L   | 0.020      | -            | -                | -                | -         |    -0.61 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            2 |     3171 | 2024-09-04 | Lynn Vision Gaming | W   | 0.013      | -            | -                | -                | -         |     0.00 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            1 |     3210 | 2024-09-03 | Ninjas in Pyjamas  | L   | 0.005      | -            | -                | -                | -         |    -0.17 | degster, kyxsan, NertZ, sjuush, TeSeS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($311,845.76)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.93) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      1.000 | $187,500.00    | $187,500.00     |
| 2025-02-09 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-12-15 |      0.691 | $45,000.00     | $31,092.71      |
| 2024-11-03 |      0.413 | $150,000.00    | $61,937.50      |
| 2024-10-20 |      0.319 | $40,000.00     | $12,752.78      |
| 2024-10-13 |      0.273 | $20,000.00     | $5,455.56       |
| 2024-09-22 |      0.132 | $23,500.00     | $3,107.22       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
