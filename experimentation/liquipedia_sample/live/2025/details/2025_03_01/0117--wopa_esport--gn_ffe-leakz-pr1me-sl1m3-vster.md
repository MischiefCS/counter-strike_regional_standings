### Roster Details<br />
Team Name: WOPA Esport<br />
Roster: Gnøffe, Leakz, PR1mE, sL1m3, Vster<br />
Global Rank: [117](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [89]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  803.0<br />
<br />
Final Rank Value (803.0) = Starting Rank Value (819.6) + Head To Head Adjustments (-16.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.399[<sup>1</sup>](#table2)
- Bounty Collected: 0.295[<sup>2</sup>](#table1)
- Opponent Network: 0.157[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.213<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 819.6
- 400 + ( ( 0.213 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 819.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           65 |      822 | 2025-01-06 | BadGuys                   | L   | 0.838      | -            | -                | -                | -         |   -18.51 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           64 |      829 | 2025-01-05 | Wu-Tang Clan              | W   | 0.831      | -            | -                | -                | 0 (0.000) |     7.08 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           63 |      883 | 2024-12-29 | CS2NEWS                   | L   | 0.785      | -            | -                | -                | -         |   -20.70 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           62 |      927 | 2024-12-28 | EYEBALLERS                | L   | 0.778      | -            | -                | -                | -         |   -14.81 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           61 |      977 | 2024-12-25 | KONO.ECF                  | L   | 0.758      | -            | -                | -                | -         |    -9.85 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           60 |      985 | 2024-12-24 | ENCE Academy              | W   | 0.752      | 0.333        | 0.009 (0.002)    | 0.719 (0.180)    | 0 (0.000) |    10.08 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           59 |      989 | 2024-12-24 | ALASKA                    | L   | 0.751      | -            | -                | -                | -         |   -10.57 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           58 |      999 | 2024-12-23 | ESC Gaming                | W   | 0.745      | -            | -                | -                | 0 (0.000) |     4.37 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           57 |     1002 | 2024-12-23 | Heimo Esports             | W   | 0.744      | 0.333        | -                | 0.660 (0.164)    | 0 (0.000) |     7.95 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           56 |     1019 | 2024-12-22 | ADEPTS                    | W   | 0.739      | -            | -                | -                | 0 (0.000) |     6.23 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           55 |     1041 | 2024-12-22 | Astralis Talent           | W   | 0.738      | 0.333        | -                | 0.651 (0.160)    | 0 (0.000) |     9.76 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           54 |     1076 | 2024-12-21 | ALASKA                    | W   | 0.732      | 0.333        | 0.030 (0.007)    | 0.910 (0.222)    | 0 (0.000) |    13.72 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           53 |     1103 | 2024-12-21 | KONO.ECF                  | W   | 0.731      | 0.333        | 0.045 (0.011)    | 0.832 (0.203)    | 0 (0.000) |    13.58 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           52 |     1138 | 2024-12-20 | Heimo Esports             | L   | 0.725      | -            | -                | -                | -         |   -13.95 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           51 |     1176 | 2024-12-18 | Viperio                   | W   | 0.712      | 0.333        | -                | 0.426 (0.101)    | 0 (0.000) |     8.67 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           50 |     1179 | 2024-12-18 | ESC Gaming                | L   | 0.711      | -            | -                | -                | -         |   -17.96 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           49 |     1209 | 2024-12-16 | Lilmix                    | W   | 0.698      | -            | -                | -                | 0 (0.000) |     4.22 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           48 |     1372 | 2024-12-13 | LEON Esports              | L   | 0.680      | -            | -                | -                | -         |   -12.67 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           47 |     1453 | 2024-12-12 | GenOne                    | W   | 0.671      | 0.333        | 0.012 (0.003)    | 0.814 (0.182)    | -         |    11.11 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           46 |     1472 | 2024-12-11 | XPERION NXT               | W   | 0.667      | -            | -                | -                | -         |     6.28 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           45 |     1483 | 2024-12-11 | BRUTE                     | W   | 0.666      | -            | -                | -                | -         |     7.40 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           44 |     1610 | 2024-12-08 | Lilmix                    | W   | 0.645      | -            | -                | -                | -         |     4.36 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           43 |     1682 | 2024-12-07 | Lilmix                    | L   | 0.639      | -            | -                | -                | -         |   -16.17 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           42 |     1805 | 2024-12-04 | LEON Esports              | L   | 0.620      | -            | -                | -                | -         |   -11.15 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           41 |     1921 | 2024-12-02 | Sashi Academy             | W   | 0.607      | -            | -                | -                | -         |     6.09 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           40 |     1999 | 2024-12-01 | Dragon Esports Club       | W   | 0.600      | 0.333        | 0.007 (0.001)    | -                | -         |     6.41 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           39 |     2160 | 2024-11-29 | Betclic Apogee Esports    | L   | 0.587      | -            | -                | -                | -         |    -8.04 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           38 |     2192 | 2024-11-28 | Team Genesium             | W   | 0.580      | -            | -                | -                | -         |     5.61 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           37 |     2263 | 2024-11-27 | Anonymo Esports           | L   | 0.571      | -            | -                | -                | -         |    -9.05 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           36 |     2298 | 2024-11-26 | Insilio                   | W   | 0.567      | -            | -                | -                | -         |     4.65 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           35 |     2310 | 2024-11-26 | 9INE                      | W   | 0.566      | 0.354        | 0.011 (0.002)    | -                | -         |     7.64 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           34 |     2335 | 2024-11-25 | Natus Vincere Junior      | L   | 0.559      | -            | -                | -                | -         |    -4.58 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           33 |     2427 | 2024-11-23 | Astralis Talent           | W   | 0.547      | 0.339        | -                | 0.651 (0.121)    | -         |     7.83 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           32 |     2687 | 2024-11-20 | Anonymo Esports           | W   | 0.525      | 0.333        | 0.038 (0.007)    | 0.771 (0.135)    | -         |     8.65 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           31 |     2909 | 2024-11-16 | G2 Ares                   | L   | 0.497      | -            | -                | -                | -         |   -10.68 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           30 |     2966 | 2024-11-15 | HOTU                      | L   | 0.491      | -            | -                | -                | -         |   -10.57 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           29 |     2982 | 2024-11-14 | Astralis Talent           | W   | 0.487      | 0.339        | -                | 0.651 (0.107)    | -         |     6.47 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           28 |     2998 | 2024-11-14 | Denial (Danish team)      | W   | 0.486      | -            | -                | -                | -         |     4.77 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           27 |     3069 | 2024-11-13 | HOTU                      | W   | 0.477      | -            | -                | -                | -         |     4.89 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           26 |     3111 | 2024-11-12 | GenOne                    | L   | 0.471      | -            | -                | -                | -         |    -7.24 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           25 |     3145 | 2024-11-11 | Astralis Talent           | L   | 0.467      | -            | -                | -                | -         |    -9.07 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           24 |     3150 | 2024-11-11 | MASONIC                   | W   | 0.466      | -            | -                | -                | -         |     4.28 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           23 |     3463 | 2024-11-05 | Preasy Esport             | W   | 0.427      | 0.339        | 0.012 (0.002)    | -                | -         |     6.03 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           22 |     3526 | 2024-11-04 | XI Esport                 | W   | 0.420      | -            | -                | -                | -         |     2.21 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           21 |     3923 | 2024-10-28 | Copenhagen Wolves Academy | W   | 0.374      | -            | -                | -                | -         |     0.97 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           20 |     3931 | 2024-10-28 | Sashi Academy             | W   | 0.374      | -            | -                | -                | -         |     3.94 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           19 |     4149 | 2024-10-24 | Leo Team                  | L   | 0.345      | -            | -                | -                | -         |    -5.25 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           18 |     4191 | 2024-10-23 | Natus Vincere Junior      | L   | 0.339      | -            | -                | -                | -         |    -3.10 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           17 |     4246 | 2024-10-21 | Denial (Danish team)      | W   | 0.327      | -            | -                | -                | -         |     3.16 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           16 |     4324 | 2024-10-20 | ALASKA                    | W   | 0.318      | 0.333        | 0.030 (0.003)    | -                | -         |     8.14 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           15 |     4360 | 2024-10-19 | Ex-9INE Academy           | W   | 0.312      | -            | -                | -                | -         |     2.27 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           14 |     4527 | 2024-10-16 | Chimera Esports           | L   | 0.291      | -            | -                | -                | -         |    -4.32 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           13 |     4531 | 2024-10-16 | UNiTY esports             | W   | 0.291      | 0.333        | 0.025 (0.002)    | -                | -         |     5.13 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           12 |     4622 | 2024-10-14 | Lilmix                    | W   | 0.278      | -            | -                | -                | -         |     2.49 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           11 |     4925 | 2024-10-08 | Chimera Esports           | L   | 0.237      | -            | -                | -                | -         |    -3.42 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|           10 |     4948 | 2024-10-07 | Copenhagen Wolves Academy | W   | 0.233      | -            | -                | -                | -         |     0.66 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|            9 |     4954 | 2024-10-07 | Preasy Esport             | W   | 0.233      | -            | -                | -                | -         |     3.63 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|            8 |     4961 | 2024-10-07 | Denial (Danish team)      | L   | 0.233      | -            | -                | -                | -         |    -5.07 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|            7 |     5358 | 2024-09-30 | MASONIC                   | L   | 0.187      | -            | -                | -                | -         |    -3.91 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|            6 |     5371 | 2024-09-30 | Astralis Talent           | L   | 0.186      | -            | -                | -                | -         |    -3.58 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|            5 |     5760 | 2024-09-25 | ADEPTS                    | W   | 0.151      | -            | -                | -                | -         |     1.47 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|            4 |     5904 | 2024-09-23 | Sashi Academy             | L   | 0.140      | -            | -                | -                | -         |    -2.97 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|            3 |     5907 | 2024-09-23 | XI Esport                 | W   | 0.139      | -            | -                | -                | -         |     0.66 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|            2 |     5918 | 2024-09-23 | Anonymo Esports           | L   | 0.139      | -            | -                | -                | -         |    -2.10 | Gnøffe, Leakz, PR1mE, sL1m3, Vster |
|            1 |     7131 | 2024-09-03 | Viperio                   | L   | 0.006      | -            | -                | -                | -         |    -0.12 | Gnøffe, Leakz, sL1m3, Vster, zEden |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,536.36)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-25 |      0.758 | $3,000.00      | $2,274.79       |
| 2024-12-24 |      0.751 | $3,000.00      | $2,252.50       |
| 2024-12-15 |      0.692 | $1,500.00      | $1,038.33       |
| 2024-11-23 |      0.547 | $9,080.87      | $4,964.21       |
| 2024-09-04 |      0.013 | $500.00        | $6.53           |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
