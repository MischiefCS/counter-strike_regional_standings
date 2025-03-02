### Roster Details<br />
Team Name: TSM<br />
Roster: acoR, niko, sirah, valde, Zyphon<br />
Global Rank: [161](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [116]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  854.5<br />
<br />
Final Rank Value (854.5) = Starting Rank Value (819.5) + Head To Head Adjustments (34.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.338[<sup>1</sup>](#table2)
- Bounty Collected: 0.298[<sup>2</sup>](#table1)
- Opponent Network: 0.137[<sup>2</sup>](#table1)
- LAN Wins: 0.068[<sup>2</sup>](#table1)

The average of these factors is 0.210<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 819.5
- 400 + ( ( 0.210 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 819.5


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
|           33 |     1715 | 2024-12-12 | 9INE                 | L   | 0.677      | -            | -                | -                | -         |    -2.71 | acoR, niko, sirah, valde, Zyphon  |
|           32 |     1795 | 2024-12-10 | Iberian Soul         | L   | 0.664      | -            | -                | -                | -         |    -3.32 | acoR, niko, sirah, valde, Zyphon  |
|           31 |     1891 | 2024-12-08 | Illuminar Gaming     | W   | 0.650      | 1.000        | 0.008 (0.005)    | 0.642 (0.418)    | 0 (0.000) |    14.51 | acoR, niko, sirah, valde, Zyphon  |
|           30 |     1995 | 2024-12-06 | Natus Vincere Junior | L   | 0.638      | -            | -                | -                | -         |    -1.83 | acoR, niko, sirah, valde, Zyphon  |
|           29 |     2183 | 2024-12-02 | Endpoint             | W   | 0.611      | 1.000        | 0.010 (0.006)    | 0.417 (0.255)    | 0 (0.000) |    11.29 | acoR, niko, sirah, valde, Zyphon  |
|           28 |     2719 | 2024-11-22 | Ninjas in Pyjamas    | L   | 0.550      | -            | -                | -                | -         |    -5.30 | acoR, niko, sirah, valde, Zyphon  |
|           27 |     2805 | 2024-11-21 | PARIVISION           | W   | 0.543      | 1.000        | 0.008 (0.004)    | 0.066 (0.036)    | 1 (0.543) |     7.61 | acoR, niko, sirah, valde, Zyphon  |
|           26 |     2850 | 2024-11-21 | Virtus.pro           | L   | 0.538      | -            | -                | -                | -         |    -0.16 | acoR, niko, sirah, valde, Zyphon  |
|           25 |     2868 | 2024-11-20 | 3DMAX                | L   | 0.537      | -            | -                | -                | -         |    -0.22 | acoR, niko, sirah, valde, Zyphon  |
|           24 |     4302 | 2024-10-26 | Chimera Esports      | L   | 0.365      | -            | -                | -                | -         |    -2.79 | acoR, niko, sirah, valde, Zyphon  |
|           23 |     4733 | 2024-10-17 | HOTU                 | L   | 0.304      | -            | -                | -                | -         |    -4.27 | acoR, niko, sirah, valde, Zyphon  |
|           22 |     4779 | 2024-10-16 | 9Pandas              | L   | 0.299      | -            | -                | -                | -         |    -0.88 | acoR, niko, sirah, valde, Zyphon  |
|           21 |     4840 | 2024-10-15 | 3DMAX                | L   | 0.292      | -            | -                | -                | -         |    -0.12 | acoR, niko, sirah, valde, Zyphon  |
|           20 |     5209 | 2024-10-08 | FAVBET Team          | L   | 0.245      | -            | -                | -                | -         |    -1.17 | acoR, niko, sirah, valde, Zyphon  |
|           19 |     5308 | 2024-10-06 | G2 Ares              | W   | 0.232      | 1.000        | -                | 0.283 (0.066)    | 0 (0.000) |     3.29 | acoR, niko, sirah, valde, Zyphon  |
|           18 |     5413 | 2024-10-05 | Passion UA           | L   | 0.223      | -            | -                | -                | -         |    -1.00 | acoR, niko, sirah, valde, Zyphon  |
|           17 |     5458 | 2024-10-04 | ECSTATIC             | L   | 0.218      | -            | -                | -                | -         |    -1.00 | acoR, niko, sirah, valde, Zyphon  |
|           16 |     5474 | 2024-10-04 | GameAgents           | W   | 0.217      | 1.000        | -                | 0.183 (0.040)    | 0 (0.000) |     3.48 | acoR, niko, sirah, valde, Zyphon  |
|           15 |     5506 | 2024-10-03 | ALTERNATE aTTaX      | L   | 0.212      | -            | -                | -                | -         |    -1.51 | acoR, niko, sirah, valde, Zyphon  |
|           14 |     5521 | 2024-10-03 | Illuminar Gaming     | W   | 0.210      | 1.000        | 0.008 (0.002)    | 0.642 (0.135)    | 0 (0.000) |     5.16 | acoR, niko, sirah, valde, Zyphon  |
|           13 |     5588 | 2024-10-02 | Tricked Esport       | W   | 0.203      | 1.000        | 0.040 (0.008)    | 0.628 (0.128)    | 0 (0.000) |     4.61 | acoR, niko, sirah, valde, Zyphon  |
|           12 |     5660 | 2024-10-01 | GameAgents           | L   | 0.197      | -            | -                | -                | -         |    -3.06 | acoR, niko, sirah, valde, Zyphon  |
|           11 |     5714 | 2024-09-30 | Adventurers          | W   | 0.191      | 1.000        | 0.020 (0.004)    | -                | 0 (0.000) |     3.47 | acoR, niko, sirah, valde, Zyphon  |
|           10 |     5761 | 2024-09-29 | Illuminar Gaming     | W   | 0.184      | 1.000        | 0.008 (0.001)    | 0.642 (0.118)    | 0 (0.000) |     4.52 | acoR, niko, sirah, valde, Zyphon  |
|            9 |     6058 | 2024-09-25 | Astralis Talent      | L   | 0.160      | -            | -                | -                | -         |    -2.01 | acoR, niko, sirah, valde, Zyphon  |
|            8 |     6102 | 2024-09-25 | Tricked Esport       | W   | 0.157      | 1.000        | 0.040 (0.006)    | 0.628 (0.099)    | 0 (0.000) |     3.63 | acoR, niko, sirah, valde, Zyphon  |
|            7 |     6388 | 2024-09-21 | Los kogutos          | W   | 0.130      | 1.000        | 0.038 (0.005)    | 0.572 (0.074)    | -         |     3.48 | acoR, niko, sirah, valde, Zyphon  |
|            6 |     6932 | 2024-09-12 | Sashi Esport         | L   | 0.072      | -            | -                | -                | -         |    -0.17 | acoR, Altekz, niko, sirah, Zyphon |
|            5 |     7045 | 2024-09-10 | ALTERNATE aTTaX      | W   | 0.058      | -            | -                | -                | -         |     1.48 | acoR, Altekz, niko, valde, Zyphon |
|            4 |     7050 | 2024-09-10 | SAW                  | L   | 0.057      | -            | -                | -                | -         |    -0.05 | acoR, Altekz, niko, valde, Zyphon |
|            3 |     7478 | 2024-09-04 | Young Ninjas         | L   | 0.017      | -            | -                | -                | -         |    -0.47 | acoR, Altekz, niko, valde, Zyphon |
|            2 |     7538 | 2024-09-03 | B8                   | W   | 0.011      | 1.000        | 0.148 (0.002)    | -                | -         |     0.35 | acoR, Altekz, niko, valde, Zyphon |
|            1 |     7581 | 2024-09-02 | Wild Lotus           | W   | 0.003      | -            | -                | -                | -         |     0.07 | acoR, Altekz, niko, valde, Zyphon |

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
