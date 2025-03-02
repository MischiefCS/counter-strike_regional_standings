### Roster Details<br />
Team Name: Metizport<br />
Roster: adamb, hampus, isak, L00m1, Plopski<br />
Global Rank: [36](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [27]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  1016.4<br />
<br />
Final Rank Value (1016.4) = Starting Rank Value (1099.9) + Head To Head Adjustments (-83.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.469[<sup>1</sup>](#table2)
- Bounty Collected: 0.338[<sup>2</sup>](#table1)
- Opponent Network: 0.172[<sup>2</sup>](#table1)
- LAN Wins: 0.442[<sup>2</sup>](#table1)

The average of these factors is 0.355<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1099.9
- 400 + ( ( 0.355 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 1099.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           42 |      314 | 2025-02-11 | HEROIC                      | L   | 1.000      | -            | -                | -                | -         |    -9.61 | adamb, hampus, isak, L00m1, Plopski |
|           41 |      322 | 2025-02-11 | Nemiga Gaming               | W   | 1.000      | 0.143        | 0.177 (0.025)    | -                | 0 (0.000) |    15.03 | adamb, hampus, isak, L00m1, Plopski |
|           40 |      342 | 2025-02-10 | GamerLegion                 | L   | 1.000      | -            | -                | -                | -         |    -1.24 | adamb, hampus, isak, L00m1, Plopski |
|           39 |      351 | 2025-02-10 | Nexus Gaming                | W   | 1.000      | 0.143        | 0.186 (0.027)    | 0.861 (0.123)    | 0 (0.000) |    12.85 | adamb, hampus, isak, L00m1, Plopski |
|           38 |      604 | 2025-02-05 | Ninjas in Pyjamas           | L   | 1.000      | -            | -                | -                | -         |   -28.72 | adamb, hampus, isak, L00m1, Plopski |
|           37 |      610 | 2025-02-05 | Passion UA                  | L   | 1.000      | -            | -                | -                | -         |   -14.60 | adamb, hampus, isak, L00m1, Plopski |
|           36 |      782 | 2025-01-15 | Team Vitality               | L   | 0.900      | -            | -                | -                | -         |    -0.22 | adamb, hampus, isak, L00m1, Plopski |
|           35 |     1004 | 2024-12-22 | P0RTUGAL                    | L   | 0.741      | -            | -                | -                | -         |   -17.02 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           34 |     1009 | 2024-12-22 | Zero Tenacity               | W   | 0.740      | 0.387        | 0.028 (0.008)    | 0.786 (0.225)    | -         |     6.45 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           33 |     1059 | 2024-12-21 | Insilio                     | W   | 0.733      | 0.387        | -                | 0.451 (0.128)    | -         |     2.67 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           32 |     1310 | 2024-12-14 | 9INE                        | L   | 0.686      | -            | -                | -                | -         |   -15.05 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           31 |     1407 | 2024-12-13 | Monte                       | W   | 0.678      | 0.435        | 0.029 (0.009)    | -                | -         |     6.44 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           30 |     1497 | 2024-12-11 | Insilio                     | W   | 0.665      | 0.435        | -                | 0.451 (0.130)    | -         |     2.32 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           29 |     1532 | 2024-12-10 | Chimera Esports             | L   | 0.658      | -            | -                | -                | -         |   -14.54 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           28 |     1623 | 2024-12-08 | FLuffy Gangsters            | W   | 0.644      | 0.435        | -                | 0.999 (0.280)    | -         |     4.85 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           27 |     1761 | 2024-12-05 | Fire Flux Esports           | W   | 0.625      | 0.435        | -                | 1.000 (0.272)    | -         |     6.61 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           26 |     1881 | 2024-12-03 | Wild Lotus                  | L   | 0.611      | -            | -                | -                | -         |   -15.94 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           25 |     2806 | 2024-11-17 | Partizan Esports            | L   | 0.505      | -            | -                | -                | -         |    -8.36 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           24 |     2833 | 2024-11-17 | Nexus Gaming                | L   | 0.504      | -            | -                | -                | -         |    -8.86 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           23 |     2887 | 2024-11-16 | The Huns Esports            | W   | 0.499      | 0.617        | 0.025 (0.008)    | 0.612 (0.188)    | 1 (0.499) |     4.12 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           22 |     2952 | 2024-11-15 | Homyno                      | W   | 0.492      | -            | -                | -                | 1 (0.492) |     1.48 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           21 |     2960 | 2024-11-15 | Team Norway                 | W   | 0.491      | -            | -                | -                | 1 (0.491) |     1.06 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           20 |     2978 | 2024-11-14 | Los kogutos                 | W   | 0.487      | 0.617        | 0.032 (0.010)    | 0.597 (0.180)    | 1 (0.487) |     4.02 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           19 |     3053 | 2024-11-13 | PCIFIC Espor                | L   | 0.479      | -            | -                | -                | -         |   -13.11 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           18 |     3056 | 2024-11-13 | Mindfreak (Australian team) | W   | 0.479      | -            | -                | -                | 1 (0.479) |     1.36 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           17 |     3262 | 2024-11-09 | Ninjas in Pyjamas           | W   | 0.453      | 0.428        | 0.025 (0.005)    | -                | 1 (0.453) |     3.32 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           16 |     3317 | 2024-11-08 | Johnny Speeds               | W   | 0.447      | 0.428        | 0.039 (0.008)    | -                | 1 (0.447) |     4.09 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           15 |     3355 | 2024-11-07 | Kappa Bar                   | W   | 0.441      | -            | -                | -                | 1 (0.441) |     1.58 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           14 |     3770 | 2024-10-31 | Johnny Speeds               | L   | 0.393      | -            | -                | -                | -         |    -8.96 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           13 |     3823 | 2024-10-30 | ECSTATIC                    | W   | 0.386      | 0.333        | 0.033 (0.004)    | 0.910 (0.117)    | -         |     2.99 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           12 |     3833 | 2024-10-30 | Iberian Soul                | W   | 0.386      | -            | -                | -                | -         |     2.29 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           11 |     4731 | 2024-10-12 | Aurora Gaming               | L   | 0.265      | -            | -                | -                | -         |    -6.70 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           10 |     4793 | 2024-10-10 | Fnatic                      | W   | 0.251      | 0.435        | 0.072 (0.008)    | -                | -         |     3.49 | adamb, L00m1, nilo, Plopski, SHiNE  |
|            9 |     4922 | 2024-10-08 | ALTERNATE aTTaX             | W   | 0.238      | -            | -                | -                | -         |     2.01 | adamb, L00m1, nilo, Plopski, SHiNE  |
|            8 |     4977 | 2024-10-07 | Monte                       | L   | 0.231      | -            | -                | -                | -         |    -5.67 | adamb, L00m1, nilo, Plopski, SHiNE  |
|            7 |     5135 | 2024-10-04 | CYBERSHOKE Esports          | W   | 0.213      | 0.435        | -                | 0.821 (0.076)    | -         |     1.50 | adamb, L00m1, nilo, Plopski, SHiNE  |
|            6 |     5306 | 2024-10-01 | G2 Ares                     | W   | 0.193      | -            | -                | -                | -         |     0.56 | adamb, L00m1, nilo, Plopski, SHiNE  |
|            5 |     5927 | 2024-09-23 | Wild Lotus                  | L   | 0.137      | -            | -                | -                | -         |    -3.77 | adamb, L00m1, nilo, Plopski, Sapec  |
|            4 |     6323 | 2024-09-16 | 9INE                        | W   | 0.091      | -            | -                | -                | -         |     0.38 | adamb, L00m1, nilo, Plopski, Sapec  |
|            3 |     6611 | 2024-09-11 | Zero Tenacity               | L   | 0.059      | -            | -                | -                | -         |    -1.50 | adamb, L00m1, nilo, Plopski, Sapec  |
|            2 |     6729 | 2024-09-09 | Zero Tenacity               | L   | 0.045      | -            | -                | -                | -         |    -1.15 | adamb, L00m1, nilo, Plopski, Sapec  |
|            1 |     7078 | 2024-09-04 | Team Sampi                  | W   | 0.012      | -            | -                | -                | -         |     0.07 | adamb, L00m1, nilo, Plopski, Sapec  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($24,940.54)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-22 |      0.741 | $6,518.90      | $4,827.61       |
| 2024-12-15 |      0.693 | $2,000.00      | $1,385.83       |
| 2024-11-17 |      0.506 | $15,000.00     | $7,593.75       |
| 2024-11-09 |      0.453 | $23,119.67     | $10,468.07      |
| 2024-10-13 |      0.273 | $2,000.00      | $545.79         |
| 2024-09-26 |      0.159 | $500.00        | $79.63          |
| 2024-09-14 |      0.080 | $500.00        | $39.86          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
