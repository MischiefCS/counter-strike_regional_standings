### Roster Details<br />
Team Name: TSM<br />
Roster: acoR, niko, sirah, valde, Zyphon<br />
Global Rank: [158](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [117]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  750.8<br />
<br />
Final Rank Value (750.8) = Starting Rank Value (740.3) + Head To Head Adjustments (10.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.329[<sup>1</sup>](#table2)
- Bounty Collected: 0.251[<sup>2</sup>](#table1)
- Opponent Network: 0.048[<sup>2</sup>](#table1)
- LAN Wins: 0.063[<sup>2</sup>](#table1)

The average of these factors is 0.173<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 740.3
- 400 + ( ( 0.173 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 740.3


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
|           30 |     1455 | 2024-12-12 | 9INE                 | L   | 0.671      | -            | -                | -                | -         |    -6.49 | acoR, niko, sirah, valde, Zyphon  |
|           29 |     1530 | 2024-12-10 | Iberian Soul         | L   | 0.658      | -            | -                | -                | -         |    -6.97 | acoR, niko, sirah, valde, Zyphon  |
|           28 |     1624 | 2024-12-08 | Illuminar Gaming     | W   | 0.644      | 0.371        | 0.007 (0.002)    | 0.669 (0.160)    | 0 (0.000) |    12.17 | acoR, niko, sirah, valde, Zyphon  |
|           27 |     1735 | 2024-12-06 | Natus Vincere Junior | L   | 0.632      | -            | -                | -                | -         |    -4.04 | acoR, niko, sirah, valde, Zyphon  |
|           26 |     1942 | 2024-12-02 | Endpoint             | W   | 0.605      | 0.371        | 0.009 (0.002)    | 0.423 (0.095)    | 0 (0.000) |     9.53 | acoR, niko, sirah, valde, Zyphon  |
|           25 |     2481 | 2024-11-22 | Ninjas in Pyjamas    | L   | 0.544      | -            | -                | -                | -         |    -5.48 | acoR, niko, sirah, valde, Zyphon  |
|           24 |     2566 | 2024-11-21 | PARIVISION           | W   | 0.537      | 0.143        | 0.006 (0.000)    | -                | 1 (0.537) |     8.16 | acoR, niko, sirah, valde, Zyphon  |
|           23 |     2607 | 2024-11-21 | Virtus.pro           | L   | 0.532      | -            | -                | -                | -         |    -0.12 | acoR, niko, sirah, valde, Zyphon  |
|           22 |     2625 | 2024-11-20 | 3DMAX                | L   | 0.530      | -            | -                | -                | -         |    -0.21 | acoR, niko, sirah, valde, Zyphon  |
|           21 |     4460 | 2024-10-17 | HOTU                 | L   | 0.298      | -            | -                | -                | -         |    -5.23 | acoR, niko, sirah, valde, Zyphon  |
|           20 |     4504 | 2024-10-16 | 9Pandas              | L   | 0.293      | -            | -                | -                | -         |    -1.92 | acoR, niko, sirah, valde, Zyphon  |
|           19 |     4567 | 2024-10-15 | 3DMAX                | L   | 0.286      | -            | -                | -                | -         |    -0.11 | acoR, niko, sirah, valde, Zyphon  |
|           18 |     4906 | 2024-10-08 | FAVBET Team          | L   | 0.239      | -            | -                | -                | -         |    -2.58 | acoR, niko, sirah, valde, Zyphon  |
|           17 |     5001 | 2024-10-06 | G2 Ares              | W   | 0.226      | 0.435        | -                | 0.287 (0.028)    | 0 (0.000) |     2.91 | acoR, niko, sirah, valde, Zyphon  |
|           16 |     5103 | 2024-10-05 | Passion UA           | L   | 0.217      | -            | -                | -                | -         |    -1.18 | acoR, niko, sirah, valde, Zyphon  |
|           15 |     5146 | 2024-10-04 | ECSTATIC             | L   | 0.212      | -            | -                | -                | -         |    -2.11 | acoR, niko, sirah, valde, Zyphon  |
|           14 |     5163 | 2024-10-04 | GameAgents           | W   | 0.211      | 0.371        | 0.005 (0.000)    | 0.182 (0.014)    | 0 (0.000) |     3.38 | acoR, niko, sirah, valde, Zyphon  |
|           13 |     5192 | 2024-10-03 | ALTERNATE aTTaX      | L   | 0.206      | -            | -                | -                | -         |    -1.86 | acoR, niko, sirah, valde, Zyphon  |
|           12 |     5209 | 2024-10-03 | Illuminar Gaming     | W   | 0.204      | 0.371        | 0.007 (0.001)    | 0.669 (0.051)    | 0 (0.000) |     4.43 | acoR, niko, sirah, valde, Zyphon  |
|           11 |     5336 | 2024-10-01 | GameAgents           | L   | 0.191      | -            | -                | -                | -         |    -3.01 | acoR, niko, sirah, valde, Zyphon  |
|           10 |     5388 | 2024-09-30 | Adventurers          | W   | 0.185      | 0.435        | 0.017 (0.001)    | 0.182 (0.015)    | 0 (0.000) |     3.15 | acoR, niko, sirah, valde, Zyphon  |
|            9 |     5436 | 2024-09-29 | Illuminar Gaming     | W   | 0.178      | 0.371        | 0.007 (0.000)    | 0.669 (0.044)    | 0 (0.000) |     3.83 | acoR, niko, sirah, valde, Zyphon  |
|            8 |     5717 | 2024-09-25 | Astralis Talent      | L   | 0.154      | -            | -                | -                | -         |    -2.48 | acoR, niko, sirah, valde, Zyphon  |
|            7 |     5759 | 2024-09-25 | Tricked Esport       | W   | 0.151      | 0.371        | 0.033 (0.002)    | 0.639 (0.036)    | 0 (0.000) |     2.93 | acoR, niko, sirah, valde, Zyphon  |
|            6 |     6036 | 2024-09-21 | Los kogutos          | W   | 0.124      | 0.371        | 0.032 (0.001)    | 0.597 (0.027)    | 0 (0.000) |     3.19 | acoR, niko, sirah, valde, Zyphon  |
|            5 |     6557 | 2024-09-12 | Sashi Esport         | L   | 0.066      | -            | -                | -                | -         |    -0.46 | acoR, Altekz, niko, sirah, Zyphon |
|            4 |     6668 | 2024-09-10 | ALTERNATE aTTaX      | W   | 0.052      | 0.384        | 0.021 (0.000)    | 0.587 (0.012)    | -         |     1.23 | acoR, Altekz, niko, valde, Zyphon |
|            3 |     6675 | 2024-09-10 | SAW                  | L   | 0.051      | -            | -                | -                | -         |    -0.06 | acoR, Altekz, niko, valde, Zyphon |
|            2 |     7088 | 2024-09-04 | Young Ninjas         | L   | 0.011      | -            | -                | -                | -         |    -0.29 | acoR, Altekz, niko, valde, Zyphon |
|            1 |     7141 | 2024-09-03 | B8                   | W   | 0.005      | -            | -                | -                | -         |     0.15 | acoR, Altekz, niko, valde, Zyphon |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,080.83)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.319 | $6,000.00      | $1,915.00       |
| 2024-10-05 |      0.217 | $5,000.00      | $1,086.11       |
| 2024-09-14 |      0.080 | $1,000.00      | $79.72          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
