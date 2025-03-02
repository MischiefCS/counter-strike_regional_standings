### Roster Details<br />
Team Name: Fluxo<br />
Roster: arT, history, kye, nicks, piriajr<br />
Global Rank: [44](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_02_28.md)<br />
Regional Rank: [9]( ../../standings_americas_2025_02_28.md)<br />
<br />
Final Rank Value:  1020.0<br />
<br />
Final Rank Value (1020.0) = Starting Rank Value (997.9) + Head To Head Adjustments (22.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.459[<sup>1</sup>](#table2)
- Bounty Collected: 0.349[<sup>2</sup>](#table1)
- Opponent Network: 0.172[<sup>2</sup>](#table1)
- LAN Wins: 0.177[<sup>2</sup>](#table1)

The average of these factors is 0.289<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 997.9
- 400 + ( ( 0.289 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 997.9


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
|           62 |      180 | 2025-02-22 | Imperial Esports       | L   | 1.000      | -            | -                | -                | -         |   -15.31 | arT, history, kye, nicks, piriajr |
|           61 |      205 | 2025-02-21 | Team Solid             | W   | 1.000      | 0.371        | 0.027 (0.010)    | 0.653 (0.242)    | 0 (0.000) |    10.97 | arT, history, kye, nicks, piriajr |
|           60 |      422 | 2025-02-12 | Legacy                 | L   | 1.000      | -            | -                | -                | -         |   -16.26 | arT, history, kye, nicks, piriajr |
|           59 |      426 | 2025-02-12 | Sharks Esports         | W   | 1.000      | 0.143        | 0.065 (0.009)    | 0.726 (0.104)    | 0 (0.000) |    16.84 | arT, history, kye, nicks, piriajr |
|           58 |      443 | 2025-02-11 | Legacy                 | L   | 1.000      | -            | -                | -                | -         |   -16.98 | arT, history, kye, nicks, piriajr |
|           57 |      449 | 2025-02-11 | Imperial Esports       | W   | 1.000      | 0.143        | 0.084 (0.012)    | -                | 0 (0.000) |    16.07 | arT, history, kye, nicks, piriajr |
|           56 |      599 | 2025-02-08 | Imperial Esports       | L   | 1.000      | -            | -                | -                | -         |   -18.12 | arT, history, kye, nicks, piriajr |
|           55 |      871 | 2025-01-28 | UNO MILLE              | W   | 0.995      | 0.450        | -                | 0.631 (0.283)    | 0 (0.000) |     7.03 | arT, history, kye, nicks, piriajr |
|           54 |      875 | 2025-01-28 | UNO MILLE              | L   | 0.994      | -            | -                | -                | -         |   -24.85 | arT, history, kye, nicks, piriajr |
|           53 |      927 | 2025-01-24 | Yawara E-Sports        | W   | 0.968      | 0.450        | -                | 0.537 (0.234)    | 0 (0.000) |     3.02 | arT, history, kye, nicks, piriajr |
|           52 |      928 | 2025-01-24 | Yawara E-Sports        | W   | 0.968      | 0.450        | -                | 0.537 (0.234)    | 0 (0.000) |     3.12 | arT, history, kye, nicks, piriajr |
|           51 |     1050 | 2025-01-16 | Eternal Fire           | L   | 0.912      | -            | -                | -                | -         |    -0.28 | arT, history, kye, nicks, piriajr |
|           50 |     2284 | 2024-11-30 | ODDIK                  | W   | 0.601      | 0.371        | 0.034 (0.008)    | 0.579 (0.129)    | 0 (0.000) |     6.29 | arT, kye, nicks, piriajr, zevy    |
|           49 |     2335 | 2024-11-30 | Team Solid             | W   | 0.599      | 0.371        | -                | 0.653 (0.145)    | -         |     5.97 | arT, kye, nicks, piriajr, zevy    |
|           48 |     2380 | 2024-11-29 | TROPA DO TACO          | W   | 0.594      | -            | -                | -                | -         |     3.81 | arT, kye, nicks, piriajr, zevy    |
|           47 |     2458 | 2024-11-27 | Yawara E-Sports        | W   | 0.581      | 0.371        | -                | 0.537 (0.116)    | -         |     2.79 | arT, kye, nicks, piriajr, zevy    |
|           46 |     2580 | 2024-11-24 | Team Solid             | W   | 0.560      | -            | -                | -                | 1 (0.560) |     5.73 | arT, kye, nicks, piriajr, zevy    |
|           45 |     2734 | 2024-11-22 | Sharks Esports         | W   | 0.548      | -            | -                | -                | 1 (0.548) |    10.11 | arT, kye, nicks, piriajr, zevy    |
|           44 |     3468 | 2024-11-09 | Sharks Esports         | W   | 0.461      | 0.371        | 0.065 (0.011)    | 0.726 (0.124)    | -         |     8.87 | arT, kye, nicks, piriajr, zevy    |
|           43 |     3475 | 2024-11-09 | ODDIK                  | W   | 0.460      | -            | -                | -                | -         |     5.48 | arT, kye, nicks, piriajr, zevy    |
|           42 |     3550 | 2024-11-08 | TROPA DO TACO          | W   | 0.454      | -            | -                | -                | -         |     2.85 | arT, kye, nicks, piriajr, zevy    |
|           41 |     3671 | 2024-11-06 | 9z Academy             | W   | 0.439      | -            | -                | -                | -         |     2.21 | arT, kye, nicks, piriajr, zevy    |
|           40 |     3695 | 2024-11-05 | Bounty Hunters Esports | W   | 0.434      | -            | -                | -                | -         |     2.91 | arT, kye, nicks, piriajr, zevy    |
|           39 |     3742 | 2024-11-04 | Galorys Academy        | W   | 0.428      | -            | -                | -                | -         |     1.52 | arT, kye, nicks, piriajr, zevy    |
|           38 |     3808 | 2024-11-03 | América eSports        | W   | 0.421      | -            | -                | -                | -         |     1.29 | arT, kye, nicks, piriajr, zevy    |
|           37 |     3878 | 2024-11-02 | AdalYamigos            | W   | 0.414      | -            | -                | -                | -         |     2.28 | arT, kye, nicks, piriajr, zevy    |
|           36 |     3940 | 2024-11-01 | Sharks Esports         | L   | 0.409      | -            | -                | -                | -         |    -4.57 | arT, kye, nicks, piriajr, zevy    |
|           35 |     4005 | 2024-10-31 | UNO MILLE              | W   | 0.401      | -            | -                | -                | -         |     3.07 | arT, kye, nicks, piriajr, zevy    |
|           34 |     4076 | 2024-10-30 | Intense Game           | W   | 0.393      | -            | -                | -                | -         |     1.95 | arT, kye, nicks, piriajr, zevy    |
|           33 |     4116 | 2024-10-29 | ODDIK                  | W   | 0.388      | -            | -                | -                | -         |     4.58 | arT, kye, nicks, piriajr, zevy    |
|           32 |     4169 | 2024-10-28 | Team Solid             | L   | 0.382      | -            | -                | -                | -         |    -8.11 | arT, kye, nicks, piriajr, zevy    |
|           31 |     4278 | 2024-10-26 | Sharks Esports         | L   | 0.367      | -            | -                | -                | -         |    -4.15 | arT, kye, nicks, piriajr, zevy    |
|           30 |     4688 | 2024-10-18 | Nemiga Gaming          | L   | 0.310      | -            | -                | -                | -         |    -3.18 | arT, kye, nicks, piriajr, zevy    |
|           29 |     4728 | 2024-10-17 | HEROIC                 | L   | 0.304      | -            | -                | -                | -         |    -3.19 | arT, kye, nicks, piriajr, zevy    |
|           28 |     4809 | 2024-10-16 | Aurora Gaming          | W   | 0.297      | 0.624        | -                | 0.599 (0.111)    | 1 (0.297) |     2.99 | arT, kye, nicks, piriajr, zevy    |
|           27 |     5174 | 2024-10-08 | InSanitY Sports        | L   | 0.247      | -            | -                | -                | -         |    -6.29 | arT, kye, nicks, piriajr, zevy    |
|           26 |     5182 | 2024-10-08 | InSanitY Sports        | L   | 0.247      | -            | -                | -                | -         |    -6.37 | arT, kye, nicks, piriajr, zevy    |
|           25 |     5431 | 2024-10-04 | MIBR                   | W   | 0.221      | 0.450        | 0.119 (0.012)    | -                | -         |     4.75 | arT, kye, nicks, piriajr, zevy    |
|           24 |     5433 | 2024-10-04 | MIBR                   | L   | 0.220      | -            | -                | -                | -         |    -2.22 | arT, kye, nicks, piriajr, zevy    |
|           23 |     5534 | 2024-10-02 | PaiN Gaming            | W   | 0.207      | 0.450        | 0.327 (0.030)    | -                | -         |     6.16 | arT, kye, nicks, piriajr, zevy    |
|           22 |     5540 | 2024-10-02 | PaiN Gaming            | W   | 0.207      | 0.450        | 0.327 (0.030)    | -                | -         |     6.18 | arT, kye, nicks, piriajr, zevy    |
|           21 |     5671 | 2024-09-30 | Imperial Esports       | W   | 0.194      | 0.450        | 0.084 (0.007)    | -                | -         |     2.51 | arT, kye, nicks, piriajr, zevy    |
|           20 |     5674 | 2024-09-30 | Imperial Esports       | W   | 0.194      | 0.450        | 0.084 (0.007)    | -                | -         |     2.54 | arT, kye, nicks, piriajr, zevy    |
|           19 |     5729 | 2024-09-29 | PaiN Gaming            | L   | 0.187      | -            | -                | -                | -         |    -0.29 | arT, kye, nicks, piriajr, zevy    |
|           18 |     5784 | 2024-09-28 | Team Solid             | W   | 0.181      | -            | -                | -                | -         |     1.95 | arT, kye, nicks, piriajr, zevy    |
|           17 |     5792 | 2024-09-28 | RED Canids             | W   | 0.180      | -            | -                | -                | -         |     1.55 | arT, kye, nicks, piriajr, zevy    |
|           16 |     5876 | 2024-09-27 | Dusty Roots            | W   | 0.174      | -            | -                | -                | -         |     1.53 | arT, kye, nicks, piriajr, zevy    |
|           15 |     5881 | 2024-09-27 | Hype Esports           | W   | 0.174      | -            | -                | -                | -         |     0.87 | arT, kye, nicks, piriajr, zevy    |
|           14 |     5892 | 2024-09-27 | Floripa Stars          | W   | 0.173      | -            | -                | -                | -         |     0.79 | arT, kye, nicks, piriajr, zevy    |
|           13 |     6041 | 2024-09-25 | RED Canids             | W   | 0.161      | -            | -                | -                | -         |     1.43 | arT, kye, nicks, piriajr, zevy    |
|           12 |     6047 | 2024-09-25 | RED Canids             | W   | 0.160      | -            | -                | -                | -         |     1.44 | arT, kye, nicks, piriajr, zevy    |
|           11 |     6134 | 2024-09-24 | KRÜ Esports            | L   | 0.154      | -            | -                | -                | -         |    -4.11 | arT, kye, nicks, piriajr, zevy    |
|           10 |     6140 | 2024-09-24 | KRÜ Esports            | L   | 0.154      | -            | -                | -                | -         |    -4.13 | arT, kye, nicks, piriajr, zevy    |
|            9 |     6159 | 2024-09-24 | RED Canids             | L   | 0.153      | -            | -                | -                | -         |    -3.98 | arT, kye, nicks, piriajr, zevy    |
|            8 |     6177 | 2024-09-24 | InSanitY Sports        | W   | 0.152      | -            | -                | -                | -         |     0.94 | arT, kye, nicks, piriajr, zevy    |
|            7 |     6219 | 2024-09-23 | ODDIK                  | W   | 0.147      | -            | -                | -                | -         |     1.71 | arT, kye, nicks, piriajr, zevy    |
|            6 |     6221 | 2024-09-23 | ODDIK                  | W   | 0.147      | -            | -                | -                | -         |     1.73 | arT, kye, nicks, piriajr, zevy    |
|            5 |     6253 | 2024-09-23 | RED Canids             | L   | 0.146      | -            | -                | -                | -         |    -3.82 | arT, kye, nicks, piriajr, zevy    |
|            4 |     7429 | 2024-09-04 | ODDIK                  | W   | 0.021      | -            | -                | -                | -         |     0.25 | arT, kye, Lucaozy, nicks, zevy    |
|            3 |     7455 | 2024-09-04 | BESTIA                 | W   | 0.019      | -            | -                | -                | -         |     0.20 | arT, kye, Lucaozy, nicks, zevy    |
|            2 |     7499 | 2024-09-03 | Galorys                | W   | 0.014      | -            | -                | -                | -         |     0.03 | arT, kye, Lucaozy, nicks, zevy    |
|            1 |     7587 | 2024-09-01 | Patins da Ferrari      | W   | 0.000      | -            | -                | -                | -         |     0.00 | arT, kye, Lucaozy, nicks, zevy    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($18,970.53)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-22 |      1.000 | $1,500.00      | $1,500.00       |
| 2024-11-30 |      0.601 | $10,000.00     | $6,008.80       |
| 2024-11-24 |      0.560 | $10,342.97     | $5,791.59       |
| 2024-11-09 |      0.461 | $10,000.00     | $4,610.65       |
| 2024-10-27 |      0.373 | $1,226.46      | $457.68         |
| 2024-10-20 |      0.326 | $1,200.00      | $391.64         |
| 2024-09-04 |      0.021 | $10,000.00     | $210.19         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
