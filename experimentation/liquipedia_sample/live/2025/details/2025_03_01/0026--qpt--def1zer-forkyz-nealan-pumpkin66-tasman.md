### Roster Details<br />
Team Name: QPT<br />
Roster: def1zer, forkyz, neaLaN, Pumpkin66, tasman<br />
Global Rank: [26](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [19]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  1095.9<br />
<br />
Final Rank Value (1095.9) = Starting Rank Value (1115.1) + Head To Head Adjustments (-19.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.397[<sup>1</sup>](#table2)
- Bounty Collected: 0.327[<sup>2</sup>](#table1)
- Opponent Network: 0.090[<sup>2</sup>](#table1)
- LAN Wins: 0.638[<sup>2</sup>](#table1)

The average of these factors is 0.363<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1115.1
- 400 + ( ( 0.363 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 1115.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           22 |      433 | 2025-02-08 | Little Red Door | L   | 1.000      | -            | -                | -                | -         |   -29.73 | def1zer, forkyz, neaLaN, Pumpkin66, tasman     |
|           21 |      449 | 2025-02-08 | Fnatic          | W   | 1.000      | 0.143        | 0.072 (0.010)    | 0.506 (0.072)    | -         |    13.83 | def1zer, forkyz, neaLaN, Pumpkin66, tasman     |
|           20 |      524 | 2025-02-07 | Iberian Soul    | W   | 1.000      | 0.143        | 0.017 (0.002)    | 0.556 (0.079)    | -         |     4.64 | def1zer, forkyz, neaLaN, Pumpkin66, tasman     |
|           19 |     1257 | 2024-12-15 | AK BARS         | W   | 0.691      | 0.333        | 0.008 (0.002)    | 0.233 (0.054)    | 1 (0.691) |     4.57 | dako, def1zer, forkyz, Pumpkin66, tasman       |
|           18 |     1268 | 2024-12-15 | AimAssassins    | W   | 0.691      | 0.333        | 0.004 (0.001)    | 0.264 (0.061)    | 1 (0.691) |     6.22 | dako, def1zer, forkyz, Pumpkin66, tasman       |
|           17 |     1325 | 2024-12-14 | Mix52           | W   | 0.684      | 0.333        | 0.002 (0.000)    | 0.070 (0.016)    | 1 (0.684) |     2.83 | dako, def1zer, forkyz, Pumpkin66, tasman       |
|           16 |     1337 | 2024-12-13 | DEPO            | W   | 0.684      | 0.333        | 0.006 (0.001)    | 0.326 (0.074)    | 1 (0.684) |     3.35 | dako, def1zer, forkyz, Pumpkin66, tasman       |
|           15 |     1395 | 2024-12-13 | AK BARS         | L   | 0.679      | -            | -                | -                | -         |   -17.31 | dako, def1zer, forkyz, Pumpkin66, tasman       |
|           14 |     1402 | 2024-12-13 | Mix52           | W   | 0.679      | 0.333        | 0.002 (0.000)    | 0.070 (0.016)    | 1 (0.679) |     2.47 | dako, def1zer, forkyz, Pumpkin66, tasman       |
|           13 |     1986 | 2024-12-01 | MYSKILL         | W   | 0.600      | 0.143        | 0.002 (0.000)    | -                | -         |     1.73 | dako, def1zer, forkyz, Pumpkin66, tasman       |
|           12 |     1996 | 2024-12-01 | ALLINNERS       | L   | 0.600      | -            | -                | -                | -         |   -17.03 | dako, def1zer, forkyz, Pumpkin66, tasman       |
|           11 |     2019 | 2024-12-01 | Mix52           | W   | 0.599      | -            | -                | -                | -         |     2.07 | dako, def1zer, forkyz, Pumpkin66, tasman       |
|           10 |     2872 | 2024-11-16 | GTZ.ESPORTS     | L   | 0.500      | -            | -                | -                | -         |    -7.74 | dako, def1zer, demente, neaLaN, Pumpkin66      |
|            9 |     2939 | 2024-11-15 | KONO.ECF        | W   | 0.493      | 0.617        | 0.045 (0.014)    | 0.832 (0.253)    | 1 (0.493) |     3.29 | dako, def1zer, demente, neaLaN, Pumpkin66      |
|            8 |     2949 | 2024-11-15 | GnG x Amazigh   | W   | 0.492      | -            | -                | -                | 1 (0.492) |     0.27 | dako, def1zer, demente, neaLaN, Pumpkin66      |
|            7 |     2993 | 2024-11-14 | Team Latvia     | W   | 0.486      | 0.617        | -                | 0.050 (0.015)    | 1 (0.486) |     0.77 | dako, def1zer, demente, neaLaN, Pumpkin66      |
|            6 |     3002 | 2024-11-14 | Nexus Gaming    | W   | 0.486      | 0.617        | 0.186 (0.056)    | 0.861 (0.258)    | 1 (0.486) |     6.02 | dako, def1zer, demente, neaLaN, Pumpkin66      |
|            5 |     6354 | 2024-09-15 | DEPO            | W   | 0.086      | -            | -                | -                | 1 (0.086) |     0.35 | BLVCKM4GIC, def1zer, forkyz, Pumpkin66, tasman |
|            4 |     6453 | 2024-09-14 | MYSKILL         | W   | 0.078      | -            | -                | -                | -         |     0.19 | BLVCKM4GIC, def1zer, forkyz, Pumpkin66, tasman |
|            3 |     6471 | 2024-09-14 | LostEverySense  | W   | 0.077      | -            | -                | -                | -         |     0.04 | BLVCKM4GIC, def1zer, forkyz, Pumpkin66, tasman |
|            2 |     6483 | 2024-09-13 | PodREDBULom     | W   | 0.073      | -            | -                | -                | -         |     0.04 | BLVCKM4GIC, def1zer, forkyz, Pumpkin66, tasman |
|            1 |     7021 | 2024-09-05 | Team Uzbekistan | W   | 0.018      | -            | -                | -                | -         |     0.01 | BLVCKM4GIC, def1zer, forkyz, Pumpkin66, tasman |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,165.41)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.691 | $5,000.00      | $3,456.94       |
| 2024-11-17 |      0.506 | $12,500.00     | $6,328.13       |
| 2024-09-22 |      0.133 | $175.00        | $23.28          |
| 2024-09-15 |      0.086 | $4,166.59      | $357.05         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
