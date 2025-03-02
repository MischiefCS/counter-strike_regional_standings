### Roster Details<br />
Team Name: The Suspect<br />
Roster: BledarD, deb0, gulito, HYPERI1, vAloN<br />
Global Rank: [245](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [165]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  752.1<br />
<br />
Final Rank Value (752.1) = Starting Rank Value (797.2) + Head To Head Adjustments (-45.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.288[<sup>1</sup>](#table2)
- Bounty Collected: 0.317[<sup>2</sup>](#table1)
- Opponent Network: 0.098[<sup>2</sup>](#table1)
- LAN Wins: 0.093[<sup>2</sup>](#table1)

The average of these factors is 0.199<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 797.2
- 400 + ( ( 0.199 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 797.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           39 |     1280 | 2024-12-22 | Kubix Esports          | L   | 0.745      | -            | -                | -                | -         |    -4.84 | BledarD, deb0, gulito, HYPERI1, vAloN     |
|           38 |     1321 | 2024-12-21 | MADNESS (Kosovar team) | W   | 0.739      | 1.000        | 0.003 (0.002)    | -                | 1 (0.739) |     5.34 | BledarD, deb0, gulito, HYPERI1, vAloN     |
|           37 |     1647 | 2024-12-13 | Megoshort              | L   | 0.686      | -            | -                | -                | -         |   -16.22 | BledarD, deb0, gulito, HYPERI1, vAloN     |
|           36 |     1652 | 2024-12-13 | RUSTEC                 | W   | 0.686      | 1.000        | -                | 0.134 (0.092)    | 0 (0.000) |     7.09 | BledarD, deb0, gulito, HYPERI1, vAloN     |
|           35 |     2682 | 2024-11-23 | HyperSpirit            | W   | 0.552      | 1.000        | 0.004 (0.002)    | 0.131 (0.072)    | 0 (0.000) |     7.30 | BledarD, Caleyy, cerber, HYPERI1, vAloN   |
|           34 |     2752 | 2024-11-22 | XP Academy             | L   | 0.547      | -            | -                | -                | -         |   -10.35 | BledarD, Caleyy, cerber, HYPERI1, vAloN   |
|           33 |     2816 | 2024-11-21 | HOTU                   | L   | 0.540      | -            | -                | -                | -         |    -6.18 | BledarD, Caleyy, cerber, HYPERI1, vAloN   |
|           32 |     2842 | 2024-11-21 | RoundsGG               | W   | 0.539      | 1.000        | -                | 0.066 (0.035)    | 0 (0.000) |     3.62 | BledarD, Caleyy, cerber, HYPERI1, vAloN   |
|           31 |     2901 | 2024-11-20 | Ex-Soul's Heart Esport | W   | 0.533      | 1.000        | 0.000 (0.000)    | 0.090 (0.048)    | 0 (0.000) |     6.23 | BledarD, Caleyy, cerber, HYPERI1, vAloN   |
|           30 |     3197 | 2024-11-15 | Team Chile             | L   | 0.499      | -            | -                | -                | -         |   -11.66 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|           29 |     3205 | 2024-11-15 | Team Hungary           | L   | 0.498      | -            | -                | -                | -         |    -6.34 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|           28 |     3264 | 2024-11-14 | GTZ.ESPORTS            | L   | 0.492      | -            | -                | -                | -         |    -0.56 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|           27 |     3268 | 2024-11-14 | ALTERNATE aTTaX        | L   | 0.491      | -            | -                | -                | -         |    -2.88 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|           26 |     3276 | 2024-11-14 | MAFE MA3LOM            | L   | 0.491      | -            | -                | -                | -         |   -12.36 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|           25 |     3763 | 2024-11-04 | Ex-9INE Academy        | W   | 0.427      | 1.000        | 0.000 (0.000)    | -                | 0 (0.000) |     3.73 | BledarD, Caleyy, cerber, HYPERI1, vAloN   |
|           24 |     4073 | 2024-10-30 | PCIFIC Espor           | L   | 0.393      | -            | -                | -                | -         |    -5.37 | BledarD, Caleyy, cerber, HYPERI1, vAloN   |
|           23 |     4438 | 2024-10-23 | Anonymo Esports        | L   | 0.346      | -            | -                | -                | -         |    -8.34 | BledarD, Caleyy, cerber, HYPERI1, vAloN   |
|           22 |     4507 | 2024-10-21 | FAVBET Team            | L   | 0.333      | -            | -                | -                | -         |    -1.26 | BledarD, Caleyy, cerber, HYPERI1, vAloN   |
|           21 |     4546 | 2024-10-20 | ENJOY (Russian team)   | L   | 0.326      | -            | -                | -                | -         |    -8.47 | BledarD, Caleyy, cerber, HYPERI1, vAloN   |
|           20 |     4568 | 2024-10-20 | Lazer Cats             | W   | 0.325      | 1.000        | 0.007 (0.002)    | 0.420 (0.137)    | 0 (0.000) |     5.34 | BledarD, Caleyy, cerber, HYPERI1, vAloN   |
|           19 |     4783 | 2024-10-16 | GTZ.ESPORTS            | W   | 0.299      | 1.000        | 0.095 (0.028)    | 0.655 (0.196)    | 0 (0.000) |     9.12 | BledarD, Caleyy, cerber, HYPERI1, vAloN   |
|           18 |     4789 | 2024-10-16 | Los kogutos            | W   | 0.298      | 1.000        | 0.038 (0.011)    | 0.572 (0.171)    | 0 (0.000) |     8.05 | BledarD, Caleyy, cerber, HYPERI1, vAloN   |
|           17 |     4835 | 2024-10-15 | Underrated             | L   | 0.293      | -            | -                | -                | -         |    -5.52 | BledarD, Caleyy, cerber, HYPERI1, vAloN   |
|           16 |     4848 | 2024-10-15 | 500                    | L   | 0.292      | -            | -                | -                | -         |    -0.47 | BledarD, Caleyy, cerber, HYPERI1, vAloN   |
|           15 |     5835 | 2024-09-28 | Kubix Esports          | L   | 0.178      | -            | -                | -                | -         |    -1.20 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|           14 |     5838 | 2024-09-28 | FLuffy Gangsters       | L   | 0.178      | -            | -                | -                | -         |    -1.63 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|           13 |     5949 | 2024-09-27 | Anonymo Esports        | W   | 0.170      | 1.000        | 0.046 (0.008)    | 0.792 (0.134)    | 0 (0.000) |     4.28 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|           12 |     6011 | 2024-09-26 | FLuffy Gangsters       | L   | 0.164      | -            | -                | -                | -         |    -1.50 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|           11 |     6496 | 2024-09-19 | ALTERNATE aTTaX        | L   | 0.118      | -            | -                | -                | -         |    -0.66 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|           10 |     6620 | 2024-09-17 | THE GENTLEMEN ESPORTS  | L   | 0.106      | -            | -                | -                | -         |    -1.92 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|            9 |     6624 | 2024-09-17 | 9Pandas                | L   | 0.106      | -            | -                | -                | -         |    -0.25 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|            8 |     6687 | 2024-09-16 | Lazer Cats             | L   | 0.098      | -            | -                | -                | -         |    -1.45 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|            7 |     6697 | 2024-09-16 | Insilio                | L   | 0.097      | -            | -                | -                | -         |    -1.64 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|            6 |     6822 | 2024-09-14 | TALON                  | W   | 0.084      | -            | -                | -                | -         |     0.83 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|            5 |     6918 | 2024-09-12 | Alliance               | W   | 0.073      | 1.000        | 0.018 (0.001)    | 0.515 (0.037)    | -         |     1.99 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|            4 |     6974 | 2024-09-11 | Nexus Gaming           | W   | 0.066      | 1.000        | 0.221 (0.015)    | 0.873 (0.057)    | -         |     1.97 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|            3 |     7037 | 2024-09-10 | Ex-Soul's Heart Esport | W   | 0.059      | -            | -                | -                | -         |     0.62 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|            2 |     7091 | 2024-09-09 | Team OWL               | W   | 0.052      | -            | -                | -                | -         |     0.24 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |
|            1 |     7359 | 2024-09-05 | ALTERNATE aTTaX Evo    | W   | 0.026      | -            | -                | -                | -         |     0.24 | BledarD, Caleyy, Dementor, HYPERI1, vAloN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($958.02)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-22 |      0.747 | $1,043.02      | $778.67         |
| 2024-09-28 |      0.179 | $558.41        | $100.11         |
| 2024-09-21 |      0.132 | $600.00        | $79.24          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
