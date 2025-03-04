### Roster Details<br />
Team Name: Monte<br />
Roster: DemQQ, dycha, hades, KEi, kRaSnaL<br />
Global Rank: [87](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [60]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  847.8<br />
<br />
Final Rank Value (847.8) = Starting Rank Value (802.5) + Head To Head Adjustments (45.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.395[<sup>1</sup>](#table2)
- Bounty Collected: 0.341[<sup>2</sup>](#table1)
- Opponent Network: 0.110[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.211<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 802.5
- 400 + ( ( 0.211 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 802.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |      832 | 2024-12-16 | Dynamo Eclot           | L   | 0.699      | -            | -                | -                | -         |    -4.18 | DemQQ, dycha, hades, KEi, kRaSnaL |
|           25 |      902 | 2024-12-13 | Metizport              | L   | 0.678      | -            | -                | -                | -         |    -4.74 | DemQQ, dycha, hades, KEi, kRaSnaL |
|           24 |      941 | 2024-12-10 | Aurora Gaming          | W   | 0.659      | 0.620        | 0.019 (0.008)    | 0.481 (0.197)    | 0 (0.000) |    11.57 | DemQQ, dycha, hades, KEi, kRaSnaL |
|           23 |      949 | 2024-12-09 | GUN5 Esports           | W   | 0.653      | 0.620        | 0.099 (0.040)    | 0.503 (0.204)    | 0 (0.000) |    13.13 | DemQQ, dycha, hades, KEi, kRaSnaL |
|           22 |     1258 | 2024-11-24 | ENCE                   | L   | 0.552      | -            | -                | -                | -         |    -3.84 | DemQQ, dycha, hades, KEi, kRaSnaL |
|           21 |     1586 | 2024-11-10 | FAVBET Team            | W   | 0.459      | 0.560        | 0.029 (0.008)    | 0.608 (0.156)    | 0 (0.000) |     7.99 | DemQQ, dycha, hades, KEi, kRaSnaL |
|           20 |     1637 | 2024-11-07 | 500                    | L   | 0.439      | -            | -                | -                | -         |    -2.54 | DemQQ, dycha, hades, KEi, kRaSnaL |
|           19 |     1650 | 2024-11-06 | Team Spirit Academy    | W   | 0.432      | 0.552        | 0.068 (0.016)    | 0.718 (0.171)    | 0 (0.000) |     9.42 | DemQQ, dycha, hades, KEi, kRaSnaL |
|           18 |     1811 | 2024-10-27 | SAW                    | L   | 0.365      | -            | -                | -                | -         |    -0.86 | DemQQ, dycha, hades, KEi, kRaSnaL |
|           17 |     1991 | 2024-10-11 | SINNERS Esports        | L   | 0.260      | -            | -                | -                | -         |    -2.96 | DemQQ, dycha, hades, KEi, kRaSnaL |
|           16 |     2139 | 2024-10-07 | Metizport              | W   | 0.231      | 0.590        | 0.074 (0.010)    | 0.654 (0.089)    | 0 (0.000) |     6.15 | DemQQ, dycha, hades, KEi, kRaSnaL |
|           15 |     2182 | 2024-10-05 | Adventurers            | W   | 0.218      | -            | -                | -                | 0 (0.000) |     1.24 | DemQQ, dycha, hades, KEi, kRaSnaL |
|           14 |     2246 | 2024-10-03 | Team Spirit Academy    | L   | 0.205      | -            | -                | -                | -         |    -2.16 | DemQQ, dycha, hades, KEi, kRaSnaL |
|           13 |     2370 | 2024-09-30 | ECSTATIC               | W   | 0.185      | 0.590        | 0.033 (0.004)    | 1.000 (0.109)    | 0 (0.000) |     3.73 | DemQQ, dycha, hades, KEi, kRaSnaL |
|           12 |     2510 | 2024-09-26 | 3DMAX                  | L   | 0.157      | -            | -                | -                | -         |    -0.06 | DemQQ, dycha, hades, KEi, kRaSnaL |
|           11 |     2598 | 2024-09-24 | Rebels Gaming          | W   | 0.146      | 0.343        | -                | 0.318 (0.016)    | 0 (0.000) |     1.95 | DemQQ, dycha, hades, KEi, kRaSnaL |
|           10 |     2600 | 2024-09-24 | Betclic Apogee Esports | W   | 0.146      | -            | -                | -                | 0 (0.000) |     1.49 | DemQQ, dycha, hades, KEi, kRaSnaL |
|            9 |     2620 | 2024-09-24 | BIG                    | W   | 0.145      | 0.870        | 0.220 (0.028)    | 0.558 (0.070)    | 0 (0.000) |     4.48 | DemQQ, dycha, hades, KEi, kRaSnaL |
|            8 |     2641 | 2024-09-23 | 4wb                    | W   | 0.141      | -            | -                | -                | -         |     0.41 | DemQQ, dycha, hades, KEi, kRaSnaL |
|            7 |     2658 | 2024-09-23 | PARIVISION             | W   | 0.138      | 0.870        | 0.006 (0.001)    | -                | -         |     1.63 | DemQQ, dycha, hades, KEi, kRaSnaL |
|            6 |     2755 | 2024-09-19 | Sashi Esport           | W   | 0.111      | 0.870        | 0.013 (0.001)    | 0.582 (0.056)    | -         |     2.81 | DemQQ, dycha, hades, KEi, kRaSnaL |
|            5 |     2812 | 2024-09-17 | EYEBALLERS             | W   | 0.098      | 0.870        | 0.019 (0.002)    | 0.360 (0.031)    | -         |     1.58 | DemQQ, dycha, hades, KEi, kRaSnaL |
|            4 |     2953 | 2024-09-12 | Nemiga Gaming          | L   | 0.065      | -            | -                | -                | -         |    -0.44 | DemQQ, dycha, hades, KEi, kRaSnaL |
|            3 |     3091 | 2024-09-07 | GamerLegion            | L   | 0.030      | -            | -                | -                | -         |    -0.62 | DemQQ, dycha, hades, KEi, kRaSnaL |
|            2 |     3157 | 2024-09-05 | SINNERS Esports        | W   | 0.017      | -            | -                | -                | -         |     0.37 | DemQQ, dycha, hades, KEi, kRaSnaL |
|            1 |     3184 | 2024-09-04 | PARIVISION             | L   | 0.011      | -            | -                | -                | -         |    -0.22 | DemQQ, dycha, hades, KEi, kRaSnaL |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,876.65)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-17 |      0.707 | $5,000.00      | $3,533.33       |
| 2024-11-24 |      0.552 | $4,262.60      | $2,353.90       |
| 2024-11-09 |      0.452 | $15.18         | $6.87           |
| 2024-10-27 |      0.367 | $10,000.00     | $3,665.74       |
| 2024-09-26 |      0.159 | $1,500.00      | $238.47         |
| 2024-09-08 |      0.039 | $2,000.00      | $78.33          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
