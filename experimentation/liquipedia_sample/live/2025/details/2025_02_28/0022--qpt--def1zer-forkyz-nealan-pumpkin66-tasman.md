### Roster Details<br />
Team Name: QPT<br />
Roster: def1zer, forkyz, neaLaN, Pumpkin66, tasman<br />
Global Rank: [22](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [17]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  1165.4<br />
<br />
Final Rank Value (1165.4) = Starting Rank Value (1191.7) + Head To Head Adjustments (-26.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.409[<sup>1</sup>](#table2)
- Bounty Collected: 0.334[<sup>2</sup>](#table1)
- Opponent Network: 0.092[<sup>2</sup>](#table1)
- LAN Wins: 0.698[<sup>2</sup>](#table1)

The average of these factors is 0.383<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1191.7
- 400 + ( ( 0.383 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1191.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           23 |      576 | 2025-02-08 | Little Red Door  | L   | 1.000      | -            | -                | -                | -         |   -30.20 | def1zer, forkyz, neaLaN, Pumpkin66, tasman     |
|           22 |      588 | 2025-02-08 | Fnatic           | W   | 1.000      | 0.143        | 0.061 (0.009)    | 0.528 (0.075)    | -         |    14.48 | def1zer, forkyz, neaLaN, Pumpkin66, tasman     |
|           21 |      667 | 2025-02-07 | Iberian Soul     | W   | 1.000      | 0.143        | 0.020 (0.003)    | 0.642 (0.092)    | -         |     4.16 | def1zer, forkyz, neaLaN, Pumpkin66, tasman     |
|           20 |     1511 | 2024-12-15 | AK BARS          | W   | 0.698      | 0.333        | 0.010 (0.002)    | 0.228 (0.053)    | 1 (0.698) |     4.00 | dako, def1zer, forkyz, Pumpkin66, tasman       |
|           19 |     1521 | 2024-12-15 | AimAssassins     | W   | 0.697      | 0.333        | 0.005 (0.001)    | 0.258 (0.060)    | 1 (0.697) |     5.76 | dako, def1zer, forkyz, Pumpkin66, tasman       |
|           18 |     1586 | 2024-12-14 | Mix52            | W   | 0.691      | 0.333        | 0.002 (0.001)    | 0.068 (0.016)    | 1 (0.691) |     2.36 | dako, def1zer, forkyz, Pumpkin66, tasman       |
|           17 |     1597 | 2024-12-13 | DEPO             | W   | 0.690      | 0.333        | 0.007 (0.002)    | 0.322 (0.074)    | 1 (0.690) |     2.77 | dako, def1zer, forkyz, Pumpkin66, tasman       |
|           16 |     1657 | 2024-12-13 | AK BARS          | L   | 0.686      | -            | -                | -                | -         |   -18.09 | dako, def1zer, forkyz, Pumpkin66, tasman       |
|           15 |     1664 | 2024-12-13 | Mix52            | W   | 0.685      | 0.333        | 0.002 (0.001)    | 0.068 (0.016)    | 1 (0.685) |     2.03 | dako, def1zer, forkyz, Pumpkin66, tasman       |
|           14 |     2222 | 2024-12-01 | MYSKILL          | W   | 0.607      | 0.143        | 0.003 (0.000)    | -                | -         |     1.31 | dako, def1zer, forkyz, Pumpkin66, tasman       |
|           13 |     2235 | 2024-12-01 | ALLINNERS        | L   | 0.606      | -            | -                | -                | -         |   -17.67 | dako, def1zer, forkyz, Pumpkin66, tasman       |
|           12 |     2254 | 2024-12-01 | Mix52            | W   | 0.606      | -            | -                | -                | -         |     1.69 | dako, def1zer, forkyz, Pumpkin66, tasman       |
|           11 |     3127 | 2024-11-16 | GTZ.ESPORTS      | L   | 0.506      | -            | -                | -                | -         |    -7.05 | dako, def1zer, demente, neaLaN, Pumpkin66      |
|           10 |     3196 | 2024-11-15 | KONO.ECF         | W   | 0.499      | 0.617        | 0.054 (0.017)    | 0.816 (0.251)    | 1 (0.499) |     2.87 | dako, def1zer, demente, neaLaN, Pumpkin66      |
|            9 |     3202 | 2024-11-15 | GnG x Amazigh    | W   | 0.498      | -            | -                | -                | 1 (0.498) |     0.18 | dako, def1zer, demente, neaLaN, Pumpkin66      |
|            8 |     3250 | 2024-11-14 | Team Latvia      | W   | 0.493      | 0.617        | -                | 0.049 (0.015)    | 1 (0.493) |     0.57 | dako, def1zer, demente, neaLaN, Pumpkin66      |
|            7 |     3258 | 2024-11-14 | Nexus Gaming     | W   | 0.492      | 0.617        | 0.221 (0.067)    | 0.873 (0.265)    | 1 (0.492) |     5.77 | dako, def1zer, demente, neaLaN, Pumpkin66      |
|            6 |     6610 | 2024-09-17 | Partizan Esports | L   | 0.106      | -            | -                | -                | -         |    -1.78 | BLVCKM4GIC, def1zer, forkyz, Pumpkin66, tasman |
|            5 |     6727 | 2024-09-15 | DEPO             | W   | 0.092      | -            | -                | -                | 1 (0.092) |     0.30 | BLVCKM4GIC, def1zer, forkyz, Pumpkin66, tasman |
|            4 |     6826 | 2024-09-14 | MYSKILL          | W   | 0.084      | -            | -                | -                | -         |     0.15 | BLVCKM4GIC, def1zer, forkyz, Pumpkin66, tasman |
|            3 |     6845 | 2024-09-13 | LostEverySense   | W   | 0.083      | -            | -                | -                | -         |     0.03 | BLVCKM4GIC, def1zer, forkyz, Pumpkin66, tasman |
|            2 |     6859 | 2024-09-13 | PodREDBULom      | W   | 0.079      | -            | -                | -                | -         |     0.03 | BLVCKM4GIC, def1zer, forkyz, Pumpkin66, tasman |
|            1 |     7410 | 2024-09-05 | Team Uzbekistan  | W   | 0.024      | -            | -                | -                | -         |     0.01 | BLVCKM4GIC, def1zer, forkyz, Pumpkin66, tasman |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,300.21)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.698 | $5,000.00      | $3,488.08       |
| 2024-11-17 |      0.512 | $12,500.00     | $6,405.96       |
| 2024-09-22 |      0.139 | $175.00        | $24.33          |
| 2024-09-15 |      0.092 | $4,166.59      | $381.84         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
