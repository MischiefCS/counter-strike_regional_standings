### Roster Details<br />
Team Name: Team Falcons<br />
Roster: degster, kyxsan, Magisk, NiKo, TeSeS<br />
Global Rank: [5](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [4]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  1870.1<br />
<br />
Final Rank Value (1870.1) = Starting Rank Value (1919.9) + Head To Head Adjustments (-49.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.685[<sup>2</sup>](#table1)
- Opponent Network: 0.337[<sup>2</sup>](#table1)
- LAN Wins: 0.919[<sup>2</sup>](#table1)

The average of these factors is 0.735<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1919.9
- 400 + ( ( 0.735 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 1919.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           30 |       81 | 2025-02-23 | MOUZ              | L   | 0.912      | -            | -                | -                | -         |   -13.01 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           29 |      106 | 2025-02-22 | FaZe Clan         | W   | 0.905      | 1.000        | 0.792 (0.717)    | 0.563 (0.510)    | 1 (0.905) |    14.60 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           28 |      145 | 2025-02-21 | Eternal Fire      | W   | 0.897      | 1.000        | 0.672 (0.603)    | 0.648 (0.581)    | 1 (0.897) |    14.14 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           27 |      201 | 2025-02-17 | MOUZ              | W   | 0.870      | 1.000        | 1.000 (0.870)    | 0.571 (0.496)    | 1 (0.870) |    15.65 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           26 |      214 | 2025-02-16 | Astralis          | W   | 0.863      | 1.000        | 0.725 (0.626)    | 1.000 (0.863)    | 1 (0.863) |    10.23 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           25 |      233 | 2025-02-15 | PaiN Gaming       | L   | 0.858      | -            | -                | -                | -         |   -21.21 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           24 |      276 | 2025-02-14 | FlyQuest          | W   | 0.850      | 1.000        | 0.080 (0.068)    | 0.113 (0.096)    | 1 (0.850) |     0.16 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           23 |      366 | 2025-02-10 | BetBoom Team      | W   | 0.824      | 0.143        | 0.080 (0.009)    | -                | -         |     0.18 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           22 |      376 | 2025-02-10 | TEAM NEXT LEVEL   | W   | 0.823      | -            | -                | -                | -         |     0.03 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           21 |      601 | 2025-02-02 | G2 Esports        | L   | 0.771      | -            | -                | -                | -         |   -19.46 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           20 |      618 | 2025-02-01 | Eternal Fire      | L   | 0.763      | -            | -                | -                | -         |   -11.68 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           19 |      671 | 2025-01-19 | Eternal Fire      | L   | 0.676      | -            | -                | -                | -         |   -11.23 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           18 |      685 | 2025-01-15 | ENCE              | W   | 0.651      | 0.363        | 0.071 (0.017)    | 0.351 (0.083)    | -         |     0.07 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           17 |      906 | 2024-12-12 | G2 Esports        | L   | 0.428      | -            | -                | -                | -         |   -11.28 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           16 |      970 | 2024-12-07 | Natus Vincere     | W   | 0.395      | 1.000        | 0.423 (0.167)    | 0.483 (0.191)    | 1 (0.395) |     1.62 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           15 |      997 | 2024-12-07 | Team Spirit       | L   | 0.389      | -            | -                | -                | -         |    -5.48 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           14 |     1023 | 2024-12-06 | The MongolZ       | L   | 0.382      | -            | -                | -                | -         |    -6.06 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           13 |     1039 | 2024-12-05 | FaZe Clan         | W   | 0.377      | 1.000        | 0.792 (0.298)    | 0.563 (0.212)    | 1 (0.377) |     5.81 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           12 |     1056 | 2024-12-04 | BIG               | W   | 0.375      | 1.000        | 0.239 (0.090)    | 0.512 (0.192)    | 1 (0.375) |     0.79 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           11 |     1294 | 2024-11-22 | Passion UA        | W   | 0.295      | -            | -                | -                | 1 (0.295) |     0.05 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           10 |     1326 | 2024-11-21 | Ninjas in Pyjamas | W   | 0.288      | -            | -                | -                | 1 (0.288) |     0.02 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            9 |     1336 | 2024-11-21 | BIG               | L   | 0.284      | -            | -                | -                | -         |    -8.36 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            8 |     1351 | 2024-11-20 | PARIVISION        | W   | 0.282      | -            | -                | -                | -         |     0.01 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            7 |     1686 | 2024-11-03 | The MongolZ       | L   | 0.165      | -            | -                | -                | -         |    -2.75 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            6 |     1709 | 2024-11-02 | OG                | W   | 0.158      | 0.934        | -                | 1.000 (0.147)    | -         |     0.01 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            5 |     1847 | 2024-10-20 | ENCE              | L   | 0.070      | -            | -                | -                | -         |    -2.21 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            4 |     1860 | 2024-10-19 | B8                | W   | 0.065      | -            | -                | -                | -         |     0.01 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            3 |     1909 | 2024-10-17 | ENCE              | W   | 0.050      | -            | -                | -                | -         |     0.00 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            2 |     1915 | 2024-10-17 | Rebels Gaming     | W   | 0.049      | -            | -                | -                | -         |     0.00 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            1 |     1983 | 2024-10-12 | Natus Vincere     | L   | 0.017      | -            | -                | -                | -         |    -0.48 | degster, kyxsan, NertZ, sjuush, TeSeS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($227,020.14)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      0.912 | $187,500.00    | $170,928.82     |
| 2025-02-09 |      0.818 | $10,000.00     | $8,177.78       |
| 2024-12-15 |      0.443 | $45,000.00     | $19,917.71      |
| 2024-11-03 |      0.165 | $150,000.00    | $24,687.50      |
| 2024-10-20 |      0.070 | $40,000.00     | $2,819.44       |
| 2024-10-13 |      0.024 | $20,000.00     | $488.89         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
