### Roster Details<br />
Team Name: Team Falcons<br />
Roster: degster, kyxsan, Magisk, NiKo, TeSeS<br />
Global Rank: [4](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [4]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  1902.0<br />
<br />
Final Rank Value (1902.0) = Starting Rank Value (1910.0) + Head To Head Adjustments (-8.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.585[<sup>2</sup>](#table1)
- Opponent Network: 0.150[<sup>2</sup>](#table1)
- LAN Wins: 0.871[<sup>2</sup>](#table1)

The average of these factors is 0.652<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1910.0
- 400 + ( ( 0.652 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 1910.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |       81 | 2025-02-23 | MOUZ            | L   | 0.538      | -            | -                | -                | -         |    -7.20 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           18 |      106 | 2025-02-22 | FaZe Clan       | W   | 0.532      | 1.000        | 0.792 (0.421)    | 0.483 (0.257)    | 1 (0.532) |     8.35 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           17 |      145 | 2025-02-21 | Eternal Fire    | W   | 0.524      | 1.000        | 0.927 (0.486)    | 0.724 (0.379)    | 1 (0.524) |     9.32 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           16 |      201 | 2025-02-17 | MOUZ            | W   | 0.496      | 1.000        | 1.000 (0.496)    | 0.567 (0.282)    | 1 (0.496) |     9.35 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           15 |      214 | 2025-02-16 | Astralis        | W   | 0.490      | 1.000        | 1.000 (0.490)    | 1.000 (0.490)    | 1 (0.490) |     8.23 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           14 |      233 | 2025-02-15 | PaiN Gaming     | L   | 0.485      | -            | -                | -                | -         |   -12.73 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           13 |      276 | 2025-02-14 | FlyQuest        | W   | 0.477      | 1.000        | 0.089 (0.043)    | 0.049 (0.023)    | 1 (0.477) |     0.04 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           12 |      366 | 2025-02-10 | BetBoom Team    | W   | 0.451      | 0.143        | 0.100 (0.006)    | 0.350 (0.023)    | 0 (0.000) |     0.06 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           11 |      376 | 2025-02-10 | TEAM NEXT LEVEL | W   | 0.449      | 0.143        | -                | 0.159 (0.010)    | 0 (0.000) |     0.01 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           10 |      601 | 2025-02-02 | G2 Esports      | L   | 0.398      | -            | -                | -                | -         |   -12.26 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|            9 |      618 | 2025-02-01 | Eternal Fire    | L   | 0.390      | -            | -                | -                | -         |    -5.17 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|            8 |      671 | 2025-01-19 | Eternal Fire    | L   | 0.303      | -            | -                | -                | -         |    -4.10 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|            7 |      685 | 2025-01-15 | ENCE            | W   | 0.278      | 0.363        | 0.032 (0.003)    | 0.268 (0.027)    | -         |     0.01 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|            6 |      906 | 2024-12-12 | G2 Esports      | L   | 0.055      | -            | -                | -                | -         |    -1.70 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            5 |      970 | 2024-12-07 | Natus Vincere   | W   | 0.022      | 1.000        | 0.510 (0.011)    | 0.390 (0.008)    | 1 (0.022) |     0.06 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            4 |      997 | 2024-12-07 | Team Spirit     | L   | 0.016      | -            | -                | -                | -         |    -0.21 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            3 |     1023 | 2024-12-06 | The MongolZ     | L   | 0.009      | -            | -                | -                | -         |    -0.18 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            2 |     1039 | 2024-12-05 | FaZe Clan       | W   | 0.003      | 1.000        | 0.792 (0.003)    | 0.483 (0.002)    | 1 (0.003) |     0.05 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            1 |     1056 | 2024-12-04 | BIG             | W   | 0.002      | 1.000        | 0.295 (0.000)    | -                | 1 (0.002) |     0.00 | degster, kyxsan, NertZ, sjuush, TeSeS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($108,490.97)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      0.538 | $187,500.00    | $100,928.82     |
| 2025-02-09 |      0.444 | $10,000.00     | $4,444.44       |
| 2024-12-15 |      0.069 | $45,000.00     | $3,117.71       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
