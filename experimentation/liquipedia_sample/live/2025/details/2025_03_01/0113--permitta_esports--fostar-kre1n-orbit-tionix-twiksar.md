### Roster Details<br />
Team Name: Permitta Esports<br />
Roster: fostar, Kre1N, Orbit, Tionix, Twiksar<br />
Global Rank: [113](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [85]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  809.6<br />
<br />
Final Rank Value (809.6) = Starting Rank Value (763.4) + Head To Head Adjustments (46.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.346[<sup>1</sup>](#table2)
- Bounty Collected: 0.323[<sup>2</sup>](#table1)
- Opponent Network: 0.069[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.185<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 763.4
- 400 + ( ( 0.185 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 763.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |      525 | 2025-02-07 | Fnatic                                    | L   | 1.000      | -            | -                | -                | -         |    -5.78 | fostar, Kre1N, Orbit, Tionix, Twiksar  |
|           31 |     1108 | 2024-12-20 | Mission Possible                          | W   | 0.728      | 0.143        | -                | 0.273 (0.028)    | 0 (0.000) |     4.79 | fostar, Kre1N, Orbit, Tionix, Twiksar  |
|           30 |     1112 | 2024-12-20 | HyperSpirit                               | W   | 0.727      | -            | -                | -                | 0 (0.000) |     3.63 | fostar, Kre1N, Orbit, Tionix, Twiksar  |
|           29 |     1120 | 2024-12-20 | Ex-eClub Brugge                           | W   | 0.727      | -            | -                | -                | 0 (0.000) |     2.19 | fostar, Kre1N, Orbit, Tionix, Twiksar  |
|           28 |     1300 | 2024-12-14 | BIG                                       | W   | 0.686      | 0.338        | 0.246 (0.057)    | 0.616 (0.143)    | 0 (0.000) |    21.12 | Kre1N, Orbit, P4TriCK, Tionix, Twiksar |
|           27 |     1910 | 2024-12-02 | Partizan Esports                          | L   | 0.607      | -            | -                | -                | -         |    -3.45 | Kre1N, Orbit, P4TriCK, Tionix, Twiksar |
|           26 |     2113 | 2024-11-30 | Kubix Esports                             | W   | 0.593      | 0.372        | 0.045 (0.010)    | 0.573 (0.126)    | 0 (0.000) |    12.49 | Kre1N, Orbit, P4TriCK, Tionix, Twiksar |
|           25 |     2306 | 2024-11-26 | 1win                                      | L   | 0.566      | -            | -                | -                | -         |    -8.93 | Kre1N, Orbit, P4TriCK, Tionix, Twiksar |
|           24 |     2640 | 2024-11-20 | Grindas                                   | W   | 0.527      | -            | -                | -                | 0 (0.000) |     3.57 | Kre1N, Orbit, P4TriCK, Tionix, Twiksar |
|           23 |     2670 | 2024-11-20 | ALASKA                                    | W   | 0.526      | 0.372        | 0.030 (0.006)    | 0.910 (0.178)    | 0 (0.000) |    12.40 | Kre1N, Orbit, P4TriCK, Tionix, Twiksar |
|           22 |     2710 | 2024-11-19 | Haspers Team                              | W   | 0.520      | 0.372        | 0.013 (0.003)    | 0.166 (0.032)    | 0 (0.000) |     7.01 | Kre1N, Orbit, P4TriCK, Tionix, Twiksar |
|           21 |     3134 | 2024-11-11 | Reveal (German team)                      | L   | 0.467      | -            | -                | -                | -         |    -9.68 | Kre1N, Orbit, P4TriCK, Tionix, Twiksar |
|           20 |     3153 | 2024-11-11 | BIG SELECTA                               | W   | 0.466      | -            | -                | -                | 0 (0.000) |     3.57 | Kre1N, Orbit, P4TriCK, Tionix, Twiksar |
|           19 |     3192 | 2024-11-10 | ADEPTS                                    | L   | 0.460      | -            | -                | -                | -         |    -9.18 | Kre1N, Orbit, P4TriCK, Tionix, Twiksar |
|           18 |     3403 | 2024-11-06 | Kubix Esports                             | L   | 0.434      | -            | -                | -                | -         |    -4.32 | Kre1N, Orbit, P4TriCK, Tionix, Twiksar |
|           17 |     3574 | 2024-11-03 | ALTERNATE aTTaX                           | W   | 0.413      | 0.338        | 0.021 (0.003)    | 0.587 (0.082)    | 0 (0.000) |     8.84 | Kre1N, Orbit, P4TriCK, Tionix, Twiksar |
|           16 |     3591 | 2024-11-03 | XPERION NXT                               | W   | 0.412      | 0.338        | 0.002 (0.000)    | 0.188 (0.026)    | -         |     4.34 | Kre1N, Orbit, P4TriCK, Tionix, Twiksar |
|           15 |     3669 | 2024-11-02 | Wave Esports                              | W   | 0.406      | 0.338        | 0.001 (0.000)    | 0.124 (0.017)    | -         |     4.38 | Kre1N, Orbit, P4TriCK, Tionix, Twiksar |
|           14 |     3706 | 2024-11-01 | ALTERNATE aTTaX                           | L   | 0.400      | -            | -                | -                | -         |    -3.94 | Kre1N, Orbit, P4TriCK, Tionix, Twiksar |
|           13 |     3938 | 2024-10-28 | Wave Esports                              | W   | 0.374      | -            | -                | -                | -         |     3.94 | Kre1N, Orbit, P4TriCK, Tionix, Twiksar |
|           12 |     3951 | 2024-10-28 | PCIFIC Espor                              | W   | 0.373      | 0.372        | 0.004 (0.001)    | 0.279 (0.039)    | -         |     6.02 | Kre1N, Orbit, P4TriCK, Tionix, Twiksar |
|           11 |     4174 | 2024-10-23 | MYinsanity                                | W   | 0.340      | 0.338        | 0.002 (0.000)    | -                | -         |     3.99 | Kre1N, Orbit, P4TriCK, Tionix, Twiksar |
|           10 |     4180 | 2024-10-23 | Endpoint                                  | L   | 0.339      | -            | -                | -                | -         |    -5.05 | Kre1N, Orbit, P4TriCK, Tionix, Twiksar |
|            9 |     4249 | 2024-10-21 | XPERION NXT                               | W   | 0.327      | 0.338        | 0.002 (0.000)    | 0.188 (0.021)    | -         |     3.63 | Kre1N, Orbit, P4TriCK, Tionix, Twiksar |
|            8 |     4433 | 2024-10-17 | QUAZAR                                    | L   | 0.300      | -            | -                | -                | -         |    -5.33 | Kre1N, Orbit, P4TriCK, Tionix, Twiksar |
|            7 |     4500 | 2024-10-16 | Copenhagen Wolves (American organization) | L   | 0.293      | -            | -                | -                | -         |    -3.24 | Kre1N, Orbit, P4TriCK, Tionix, Twiksar |
|            6 |     4604 | 2024-10-14 | ALTERNATE aTTaX                           | L   | 0.280      | -            | -                | -                | -         |    -2.61 | Kre1N, Orbit, P4TriCK, Tionix, Twiksar |
|            5 |     4832 | 2024-10-09 | ESports Cologne                           | W   | 0.247      | -            | -                | -                | -         |     1.27 | Kre1N, Orbit, P4TriCK, Tionix, Twiksar |
|            4 |     5232 | 2024-10-02 | Regnum4Games                              | W   | 0.200      | -            | -                | -                | -         |     2.02 | Kre1N, Orbit, P4TriCK, Tionix, Twiksar |
|            3 |     5487 | 2024-09-28 | Betera Esports                            | L   | 0.173      | -            | -                | -                | -         |    -2.96 | Kre1N, Orbit, P4TriCK, Tionix, Twiksar |
|            2 |     6191 | 2024-09-18 | Sissi State Punks                         | W   | 0.106      | -            | -                | -                | -         |     0.95 | Kre1N, Orbit, P4TriCK, Tionix, Twiksar |
|            1 |     6689 | 2024-09-09 | SNOGARD Dragons                           | W   | 0.047      | -            | -                | -                | -         |     0.42 | Kre1N, Orbit, P4TriCK, Tionix, Twiksar |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,326.65)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-14 |      0.686 | $6,302.85      | $4,326.65       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
