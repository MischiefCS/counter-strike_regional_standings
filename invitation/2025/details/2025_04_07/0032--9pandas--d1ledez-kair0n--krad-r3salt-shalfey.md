### Roster Details<br />
Team Name: 9Pandas<br />
Roster: d1Ledez, KaiR0N-, Krad, r3salt, shalfey<br />
Global Rank: [32](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [24]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  944.1<br />
<br />
Final Rank Value (944.1) = Starting Rank Value (906.0) + Head To Head Adjustments (38.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.467[<sup>1</sup>](#table2)
- Bounty Collected: 0.339[<sup>2</sup>](#table1)
- Opponent Network: 0.087[<sup>2</sup>](#table1)
- LAN Wins: 0.087[<sup>2</sup>](#table1)

The average of these factors is 0.245<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 906.0
- 400 + ( ( 0.245 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 906.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           28 |      100 | 2025-02-23 | B8                   | L   | 0.910      | -            | -                | -                | -         |   -12.04 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey         |
|           27 |      118 | 2025-02-22 | Dynamo Eclot         | W   | 0.902      | 0.435        | 0.103 (0.040)    | 0.500 (0.196)    | 0 (0.000) |    14.72 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey         |
|           26 |      161 | 2025-02-20 | Sashi Esport         | W   | 0.890      | 0.435        | 0.007 (0.003)    | 0.545 (0.211)    | 0 (0.000) |    11.97 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey         |
|           25 |      287 | 2025-02-13 | 500                  | L   | 0.845      | -            | -                | -                | -         |   -10.56 | d1Ledez, Krad, mo0N, r3salt, shalfey            |
|           24 |      689 | 2025-01-14 | Team Liquid          | L   | 0.645      | -            | -                | -                | -         |    -1.25 | Alv, d1Ledez, Krad, r3salt, shalfey             |
|           23 |      693 | 2025-01-12 | Wildcard             | L   | 0.631      | -            | -                | -                | -         |    -2.72 | Alv, d1Ledez, Krad, r3salt, shalfey             |
|           22 |      697 | 2025-01-11 | EYEBALLERS           | W   | 0.624      | 0.417        | 0.016 (0.004)    | 0.275 (0.071)    | 0 (0.000) |     6.01 | Alv, d1Ledez, Krad, r3salt, shalfey             |
|           21 |      704 | 2025-01-10 | GenOne               | W   | 0.617      | 0.417        | -                | 0.362 (0.093)    | 0 (0.000) |     5.04 | Alv, d1Ledez, Krad, r3salt, shalfey             |
|           20 |     1269 | 2024-11-23 | Ninjas in Pyjamas    | L   | 0.301      | -            | -                | -                | -         |    -6.64 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           19 |     1298 | 2024-11-22 | Aurora Gaming        | W   | 0.294      | -            | -                | -                | 1 (0.294) |     2.40 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           18 |     1328 | 2024-11-21 | Virtus.pro           | L   | 0.288      | -            | -                | -                | -         |    -0.22 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           17 |     1341 | 2024-11-21 | G2 Esports           | L   | 0.283      | -            | -                | -                | -         |    -0.23 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           16 |     1350 | 2024-11-20 | Astralis             | W   | 0.282      | 0.143        | 0.725 (0.029)    | 1.000 (0.040)    | 1 (0.282) |     8.83 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           15 |     1579 | 2024-11-11 | Dynamo Eclot         | W   | 0.216      | 0.371        | 0.103 (0.008)    | -                | 0 (0.000) |     3.79 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           14 |     1585 | 2024-11-10 | Dynamo Eclot         | W   | 0.212      | 0.384        | 0.103 (0.008)    | 0.500 (0.041)    | 0 (0.000) |     3.79 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           13 |     1603 | 2024-11-09 | Tricked Esport       | W   | 0.204      | 0.384        | 0.027 (0.002)    | 0.583 (0.046)    | 0 (0.000) |     2.07 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           12 |     1608 | 2024-11-09 | Natus Vincere Junior | W   | 0.203      | 0.371        | 0.068 (0.005)    | 0.744 (0.056)    | 0 (0.000) |     3.13 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           11 |     1623 | 2024-11-08 | Fire Flux Esports    | W   | 0.196      | 0.384        | -                | 0.959 (0.072)    | -         |     2.08 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|           10 |     1635 | 2024-11-07 | Aurora Gaming        | L   | 0.191      | -            | -                | -                | -         |    -4.39 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|            9 |     1638 | 2024-11-07 | Dynamo Eclot         | W   | 0.190      | 0.371        | 0.103 (0.007)    | -                | -         |     3.42 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|            8 |     1660 | 2024-11-05 | Insilio              | W   | 0.178      | -            | -                | -                | -         |     0.66 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|            7 |     1664 | 2024-11-05 | Los kogutos          | W   | 0.177      | -            | -                | -                | -         |     1.91 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|            6 |     1713 | 2024-11-02 | Endpoint             | W   | 0.157      | -            | -                | -                | -         |     1.25 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|            5 |     1735 | 2024-11-01 | Natus Vincere Junior | W   | 0.150      | 0.371        | 0.068 (0.004)    | 0.744 (0.041)    | -         |     2.34 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|            4 |     1795 | 2024-10-28 | ALASKA               | W   | 0.123      | -            | -                | -                | -         |     2.34 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|            3 |     1905 | 2024-10-17 | SAW                  | L   | 0.051      | -            | -                | -                | -         |    -0.20 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|            2 |     1934 | 2024-10-16 | TSM                  | W   | 0.044      | -            | -                | -                | -         |     0.29 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |
|            1 |     1959 | 2024-10-15 | Zero Tenacity        | W   | 0.038      | -            | -                | -                | -         |     0.38 | d1Ledez, glowiing, iDISBALANCE, r3salt, shalfey |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($16,309.39)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      0.911 | $5,000.00      | $4,557.41       |
| 2025-01-12 |      0.631 | $10,000.00     | $6,305.56       |
| 2024-11-11 |      0.216 | $11,000.00     | $2,374.17       |
| 2024-11-10 |      0.212 | $12,500.00     | $2,645.83       |
| 2024-11-09 |      0.204 | $15.18         | $3.10           |
| 2024-10-20 |      0.071 | $6,000.00      | $423.33         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
