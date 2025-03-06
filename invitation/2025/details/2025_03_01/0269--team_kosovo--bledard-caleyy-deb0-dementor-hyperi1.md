### Roster Details<br />
Team Name: Team Kosovo<br />
Roster: BledarD, Caleyy, deb0, Dementor, HYPERI1<br />
Global Rank: [269](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [145]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  486.7<br />
<br />
Final Rank Value (486.7) = Starting Rank Value (505.0) + Head To Head Adjustments (-18.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.216[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.054<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 505.0
- 400 + ( ( 0.054 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 505.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     1442 | 2024-11-15 | Team Chile         | L   | 0.493      | -            | -                | -                | -         |    -8.45 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|           13 |     1448 | 2024-11-15 | Team Hungary       | L   | 0.492      | -            | -                | -                | -         |    -3.03 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|           12 |     1485 | 2024-11-14 | GTZ.ESPORTS        | L   | 0.486      | -            | -                | -                | -         |    -0.52 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|           11 |     1488 | 2024-11-14 | ALTERNATE aTTaX    | L   | 0.485      | -            | -                | -                | -         |    -1.77 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|           10 |     1494 | 2024-11-14 | Team Jordan        | L   | 0.485      | -            | -                | -                | -         |    -9.27 | BledarD, Caleyy, deb0, Dementor, HYPERI1  |
|            9 |     2414 | 2024-09-28 | FLuffy Gangsters   | L   | 0.172      | -            | -                | -                | -         |    -1.44 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|            8 |     2464 | 2024-09-27 | Dark Cloud Esports | W   | 0.164      | 0.143        | 0.027 (0.001)    | 0.320 (0.007)    | 0 (0.000) |     4.02 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|            7 |     2503 | 2024-09-26 | FLuffy Gangsters   | L   | 0.158      | -            | -                | -                | -         |    -1.30 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|            6 |     2753 | 2024-09-19 | ALTERNATE aTTaX    | L   | 0.111      | -            | -                | -                | -         |    -0.39 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|            5 |     2804 | 2024-09-17 | 9Pandas            | L   | 0.100      | -            | -                | -                | -         |    -0.24 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|            4 |     2833 | 2024-09-16 | Insilio            | L   | 0.090      | -            | -                | -                | -         |    -0.80 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|            3 |     2886 | 2024-09-14 | TALON              | W   | 0.078      | 0.143        | 0.000 (0.000)    | 0.127 (0.001)    | 0 (0.000) |     1.20 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|            2 |     2938 | 2024-09-12 | Alliance           | W   | 0.066      | 0.143        | 0.015 (0.000)    | 0.595 (0.006)    | 0 (0.000) |     1.85 | BledarD, cerber, Dementor, HYPERI1, vAloN |
|            1 |     2976 | 2024-09-11 | Nexus Gaming       | W   | 0.060      | 0.143        | 0.178 (0.002)    | 0.497 (0.004)    | 0 (0.000) |     1.82 | BledarD, cerber, Dementor, HYPERI1, vAloN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
