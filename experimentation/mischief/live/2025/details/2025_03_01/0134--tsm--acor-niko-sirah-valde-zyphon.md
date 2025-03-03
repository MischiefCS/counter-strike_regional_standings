### Roster Details<br />
Team Name: TSM<br />
Roster: acoR, niko, sirah, valde, Zyphon<br />
Global Rank: [134](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [91]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  745.0<br />
<br />
Final Rank Value (745.0) = Starting Rank Value (730.4) + Head To Head Adjustments (14.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.329[<sup>1</sup>](#table2)
- Bounty Collected: 0.254[<sup>2</sup>](#table1)
- Opponent Network: 0.031[<sup>2</sup>](#table1)
- LAN Wins: 0.063[<sup>2</sup>](#table1)

The average of these factors is 0.169<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 730.4
- 400 + ( ( 0.169 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 730.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           29 |     1581 | 2024-12-12 | 9INE                 | L   | 0.671      | -            | -                | -                | -         |    -6.66 | acoR, niko, sirah, valde, Zyphon  |
|           28 |     1642 | 2024-12-10 | Iberian Soul         | L   | 0.658      | -            | -                | -                | -         |    -7.48 | acoR, niko, sirah, valde, Zyphon  |
|           27 |     1711 | 2024-12-08 | Illuminar Gaming     | W   | 0.644      | 0.371        | 0.007 (0.002)    | 0.301 (0.072)    | 0 (0.000) |    10.82 | acoR, niko, sirah, valde, Zyphon  |
|           26 |     1803 | 2024-12-06 | Natus Vincere Junior | L   | 0.632      | -            | -                | -                | -         |    -4.83 | acoR, niko, sirah, valde, Zyphon  |
|           25 |     1997 | 2024-12-02 | Endpoint             | W   | 0.605      | 0.371        | 0.009 (0.002)    | 0.268 (0.060)    | 0 (0.000) |    10.07 | acoR, niko, sirah, valde, Zyphon  |
|           24 |     2408 | 2024-11-22 | Ninjas in Pyjamas    | L   | 0.544      | -            | -                | -                | -         |    -6.11 | acoR, niko, sirah, valde, Zyphon  |
|           23 |     2461 | 2024-11-21 | PARIVISION           | W   | 0.537      | 0.143        | 0.006 (0.000)    | -                | 1 (0.537) |     7.93 | acoR, niko, sirah, valde, Zyphon  |
|           22 |     2477 | 2024-11-21 | Virtus.pro           | L   | 0.532      | -            | -                | -                | -         |    -0.11 | acoR, niko, sirah, valde, Zyphon  |
|           21 |     2487 | 2024-11-20 | 3DMAX                | L   | 0.530      | -            | -                | -                | -         |    -0.19 | acoR, niko, sirah, valde, Zyphon  |
|           20 |     3549 | 2024-10-16 | 9Pandas              | L   | 0.293      | -            | -                | -                | -         |    -2.12 | acoR, niko, sirah, valde, Zyphon  |
|           19 |     3572 | 2024-10-15 | 3DMAX                | L   | 0.286      | -            | -                | -                | -         |    -0.09 | acoR, niko, sirah, valde, Zyphon  |
|           18 |     3714 | 2024-10-08 | FAVBET Team          | L   | 0.239      | -            | -                | -                | -         |    -3.27 | acoR, niko, sirah, valde, Zyphon  |
|           17 |     3763 | 2024-10-06 | G2 Ares              | W   | 0.226      | 0.435        | -                | 0.125 (0.012)    | 0 (0.000) |     2.68 | acoR, niko, sirah, valde, Zyphon  |
|           16 |     3804 | 2024-10-05 | Passion UA           | L   | 0.217      | -            | -                | -                | -         |    -1.18 | acoR, niko, sirah, valde, Zyphon  |
|           15 |     3827 | 2024-10-04 | ECSTATIC             | L   | 0.212      | -            | -                | -                | -         |    -2.20 | acoR, niko, sirah, valde, Zyphon  |
|           14 |     3837 | 2024-10-04 | GameAgents           | W   | 0.210      | 0.371        | -                | 0.097 (0.008)    | 0 (0.000) |     2.90 | acoR, niko, sirah, valde, Zyphon  |
|           13 |     3858 | 2024-10-03 | ALTERNATE aTTaX      | L   | 0.206      | -            | -                | -                | -         |    -2.07 | acoR, niko, sirah, valde, Zyphon  |
|           12 |     3872 | 2024-10-03 | Illuminar Gaming     | W   | 0.204      | 0.371        | 0.007 (0.001)    | 0.301 (0.023)    | 0 (0.000) |     3.75 | acoR, niko, sirah, valde, Zyphon  |
|           11 |     3921 | 2024-10-02 | Tricked Esport       | W   | 0.197      | 0.371        | 0.033 (0.002)    | 0.694 (0.051)    | 0 (0.000) |     3.76 | acoR, niko, sirah, valde, Zyphon  |
|           10 |     3972 | 2024-10-01 | GameAgents           | L   | 0.191      | -            | -                | -                | -         |    -3.43 | acoR, niko, sirah, valde, Zyphon  |
|            9 |     3992 | 2024-09-30 | Adventurers          | W   | 0.185      | 0.435        | 0.004 (0.000)    | 0.111 (0.009)    | 0 (0.000) |     2.67 | acoR, niko, sirah, valde, Zyphon  |
|            8 |     4012 | 2024-09-29 | Illuminar Gaming     | W   | 0.178      | 0.371        | 0.007 (0.000)    | 0.301 (0.020)    | 0 (0.000) |     3.28 | acoR, niko, sirah, valde, Zyphon  |
|            7 |     4175 | 2024-09-25 | Tricked Esport       | W   | 0.151      | 0.371        | 0.033 (0.002)    | 0.694 (0.039)    | 0 (0.000) |     2.93 | acoR, niko, sirah, valde, Zyphon  |
|            6 |     4326 | 2024-09-21 | Los kogutos          | W   | 0.124      | 0.371        | 0.030 (0.001)    | 0.403 (0.018)    | -         |     2.95 | acoR, niko, sirah, valde, Zyphon  |
|            5 |     4588 | 2024-09-12 | Sashi Esport         | L   | 0.065      | -            | -                | -                | -         |    -0.47 | acoR, Altekz, niko, sirah, Zyphon |
|            4 |     4650 | 2024-09-10 | ALTERNATE aTTaX      | W   | 0.052      | 0.384        | 0.020 (0.000)    | -                | -         |     1.17 | acoR, Altekz, niko, valde, Zyphon |
|            3 |     4655 | 2024-09-10 | SAW                  | L   | 0.051      | -            | -                | -                | -         |    -0.07 | acoR, Altekz, niko, valde, Zyphon |
|            2 |     4823 | 2024-09-04 | Young Ninjas         | L   | 0.011      | -            | -                | -                | -         |    -0.28 | acoR, Altekz, niko, valde, Zyphon |
|            1 |     4851 | 2024-09-03 | B8                   | W   | 0.005      | -            | -                | -                | -         |     0.14 | acoR, Altekz, niko, valde, Zyphon |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,077.50)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.319 | $6,000.00      | $1,913.33       |
| 2024-10-05 |      0.217 | $5,000.00      | $1,084.72       |
| 2024-09-14 |      0.079 | $1,000.00      | $79.44          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
