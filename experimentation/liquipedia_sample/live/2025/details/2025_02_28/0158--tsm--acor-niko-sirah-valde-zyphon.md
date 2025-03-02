### Roster Details<br />
Team Name: TSM<br />
Roster: acoR, niko, sirah, valde, Zyphon<br />
Global Rank: [158](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [112]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  782.8<br />
<br />
Final Rank Value (782.8) = Starting Rank Value (772.0) + Head To Head Adjustments (10.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.338[<sup>1</sup>](#table2)
- Bounty Collected: 0.263[<sup>2</sup>](#table1)
- Opponent Network: 0.051[<sup>2</sup>](#table1)
- LAN Wins: 0.068[<sup>2</sup>](#table1)

The average of these factors is 0.180<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 772.0
- 400 + ( ( 0.180 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 772.0


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
|           33 |     1715 | 2024-12-12 | 9INE                 | L   | 0.677      | -            | -                | -                | -         |    -6.15 | acoR, niko, sirah, valde, Zyphon  |
|           32 |     1795 | 2024-12-10 | Iberian Soul         | L   | 0.664      | -            | -                | -                | -         |    -6.76 | acoR, niko, sirah, valde, Zyphon  |
|           31 |     1891 | 2024-12-08 | Illuminar Gaming     | W   | 0.650      | 0.371        | 0.008 (0.002)    | 0.642 (0.155)    | 0 (0.000) |    12.28 | acoR, niko, sirah, valde, Zyphon  |
|           30 |     1995 | 2024-12-06 | Natus Vincere Junior | L   | 0.638      | -            | -                | -                | -         |    -3.66 | acoR, niko, sirah, valde, Zyphon  |
|           29 |     2183 | 2024-12-02 | Endpoint             | W   | 0.611      | 0.371        | 0.010 (0.002)    | 0.417 (0.094)    | 0 (0.000) |     9.55 | acoR, niko, sirah, valde, Zyphon  |
|           28 |     2719 | 2024-11-22 | Ninjas in Pyjamas    | L   | 0.550      | -            | -                | -                | -         |    -5.38 | acoR, niko, sirah, valde, Zyphon  |
|           27 |     2805 | 2024-11-21 | PARIVISION           | W   | 0.543      | 0.143        | 0.008 (0.001)    | -                | 1 (0.543) |     8.05 | acoR, niko, sirah, valde, Zyphon  |
|           26 |     2850 | 2024-11-21 | Virtus.pro           | L   | 0.538      | -            | -                | -                | -         |    -0.12 | acoR, niko, sirah, valde, Zyphon  |
|           25 |     2868 | 2024-11-20 | 3DMAX                | L   | 0.537      | -            | -                | -                | -         |    -0.24 | acoR, niko, sirah, valde, Zyphon  |
|           24 |     4302 | 2024-10-26 | Chimera Esports      | L   | 0.365      | -            | -                | -                | -         |    -4.10 | acoR, niko, sirah, valde, Zyphon  |
|           23 |     4733 | 2024-10-17 | HOTU                 | L   | 0.304      | -            | -                | -                | -         |    -5.45 | acoR, niko, sirah, valde, Zyphon  |
|           22 |     4779 | 2024-10-16 | 9Pandas              | L   | 0.299      | -            | -                | -                | -         |    -1.71 | acoR, niko, sirah, valde, Zyphon  |
|           21 |     4840 | 2024-10-15 | 3DMAX                | L   | 0.292      | -            | -                | -                | -         |    -0.13 | acoR, niko, sirah, valde, Zyphon  |
|           20 |     5209 | 2024-10-08 | FAVBET Team          | L   | 0.245      | -            | -                | -                | -         |    -2.65 | acoR, niko, sirah, valde, Zyphon  |
|           19 |     5308 | 2024-10-06 | G2 Ares              | W   | 0.232      | 0.435        | -                | 0.283 (0.029)    | 0 (0.000) |     2.88 | acoR, niko, sirah, valde, Zyphon  |
|           18 |     5413 | 2024-10-05 | Passion UA           | L   | 0.223      | -            | -                | -                | -         |    -1.89 | acoR, niko, sirah, valde, Zyphon  |
|           17 |     5458 | 2024-10-04 | ECSTATIC             | L   | 0.218      | -            | -                | -                | -         |    -2.17 | acoR, niko, sirah, valde, Zyphon  |
|           16 |     5474 | 2024-10-04 | GameAgents           | W   | 0.217      | 0.371        | -                | 0.183 (0.015)    | 0 (0.000) |     3.39 | acoR, niko, sirah, valde, Zyphon  |
|           15 |     5506 | 2024-10-03 | ALTERNATE aTTaX      | L   | 0.212      | -            | -                | -                | -         |    -1.81 | acoR, niko, sirah, valde, Zyphon  |
|           14 |     5521 | 2024-10-03 | Illuminar Gaming     | W   | 0.210      | 0.371        | 0.008 (0.001)    | 0.642 (0.050)    | 0 (0.000) |     4.44 | acoR, niko, sirah, valde, Zyphon  |
|           13 |     5588 | 2024-10-02 | Tricked Esport       | W   | 0.203      | 0.371        | 0.040 (0.003)    | 0.628 (0.047)    | 0 (0.000) |     3.86 | acoR, niko, sirah, valde, Zyphon  |
|           12 |     5660 | 2024-10-01 | GameAgents           | L   | 0.197      | -            | -                | -                | -         |    -3.15 | acoR, niko, sirah, valde, Zyphon  |
|           11 |     5714 | 2024-09-30 | Adventurers          | W   | 0.191      | 0.435        | 0.020 (0.002)    | 0.180 (0.015)    | 0 (0.000) |     3.23 | acoR, niko, sirah, valde, Zyphon  |
|           10 |     5761 | 2024-09-29 | Illuminar Gaming     | W   | 0.184      | 0.371        | -                | 0.642 (0.044)    | 0 (0.000) |     3.88 | acoR, niko, sirah, valde, Zyphon  |
|            9 |     6058 | 2024-09-25 | Astralis Talent      | L   | 0.160      | -            | -                | -                | -         |    -2.68 | acoR, niko, sirah, valde, Zyphon  |
|            8 |     6102 | 2024-09-25 | Tricked Esport       | W   | 0.157      | 0.371        | 0.040 (0.002)    | 0.628 (0.037)    | 0 (0.000) |     3.04 | acoR, niko, sirah, valde, Zyphon  |
|            7 |     6388 | 2024-09-21 | Los kogutos          | W   | 0.130      | 0.371        | 0.038 (0.002)    | 0.572 (0.028)    | -         |     3.42 | acoR, niko, sirah, valde, Zyphon  |
|            6 |     6932 | 2024-09-12 | Sashi Esport         | L   | 0.072      | -            | -                | -                | -         |    -0.44 | acoR, Altekz, niko, sirah, Zyphon |
|            5 |     7045 | 2024-09-10 | ALTERNATE aTTaX      | W   | 0.058      | 0.384        | 0.025 (0.001)    | -                | -         |     1.41 | acoR, Altekz, niko, valde, Zyphon |
|            4 |     7050 | 2024-09-10 | SAW                  | L   | 0.057      | -            | -                | -                | -         |    -0.05 | acoR, Altekz, niko, valde, Zyphon |
|            3 |     7478 | 2024-09-04 | Young Ninjas         | L   | 0.017      | -            | -                | -                | -         |    -0.45 | acoR, Altekz, niko, valde, Zyphon |
|            2 |     7538 | 2024-09-03 | B8                   | W   | 0.011      | 0.384        | 0.148 (0.001)    | -                | -         |     0.33 | acoR, Altekz, niko, valde, Zyphon |
|            1 |     7581 | 2024-09-02 | Wild Lotus           | W   | 0.003      | -            | -                | -                | -         |     0.05 | acoR, Altekz, niko, valde, Zyphon |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,152.22)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.325 | $6,000.00      | $1,950.69       |
| 2024-10-05 |      0.223 | $5,000.00      | $1,115.86       |
| 2024-09-14 |      0.086 | $1,000.00      | $85.67          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
