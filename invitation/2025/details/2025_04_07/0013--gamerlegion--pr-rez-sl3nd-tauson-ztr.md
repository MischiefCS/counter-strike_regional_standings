### Roster Details<br />
Team Name: GamerLegion<br />
Roster: PR, REZ, sl3nd, Tauson, ztr<br />
Global Rank: [13](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [11]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  1518.1<br />
<br />
Final Rank Value (1518.1) = Starting Rank Value (1501.4) + Head To Head Adjustments (16.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.527[<sup>1</sup>](#table2)
- Bounty Collected: 0.594[<sup>2</sup>](#table1)
- Opponent Network: 0.257[<sup>2</sup>](#table1)
- LAN Wins: 0.754[<sup>2</sup>](#table1)

The average of these factors is 0.533<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1501.4
- 400 + ( ( 0.533 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 1501.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           25 |      360 | 2025-02-10 | Metizport       | W   | 0.825      | 0.143        | 0.056 (0.007)    | 0.473 (0.056)    | -         |     0.82 | PR, REZ, sl3nd, Tauson, ztr      |
|           24 |      371 | 2025-02-10 | Hesta           | W   | 0.824      | 0.143        | -                | 0.339 (0.040)    | -         |     0.14 | PR, REZ, sl3nd, Tauson, ztr      |
|           23 |      470 | 2025-02-08 | PARIVISION      | L   | 0.809      | -            | -                | -                | -         |   -25.29 | PR, REZ, sl3nd, Tauson, ztr      |
|           22 |      573 | 2025-02-04 | Team Spirit     | L   | 0.785      | -            | -                | -                | -         |    -2.18 | PR, REZ, sl3nd, Tauson, ztr      |
|           21 |      582 | 2025-02-04 | Astralis        | W   | 0.783      | 1.000        | 0.725 (0.568)    | 1.000 (0.783)    | 1 (0.783) |    20.23 | PR, REZ, sl3nd, Tauson, ztr      |
|           20 |      592 | 2025-02-03 | The MongolZ     | L   | 0.777      | -            | -                | -                | -         |    -2.53 | PR, REZ, sl3nd, Tauson, ztr      |
|           19 |      612 | 2025-02-01 | MOUZ            | W   | 0.765      | 1.000        | 1.000 (0.765)    | 0.571 (0.437)    | 1 (0.765) |    22.19 | PR, REZ, sl3nd, Tauson, ztr      |
|           18 |      630 | 2025-01-30 | PaiN Gaming     | W   | 0.750      | 1.000        | 0.368 (0.276)    | 0.545 (0.409)    | 1 (0.750) |    15.86 | PR, REZ, sl3nd, Tauson, ztr      |
|           17 |      639 | 2025-01-29 | SAW             | W   | 0.743      | 1.000        | 0.290 (0.216)    | 0.341 (0.253)    | 1 (0.743) |     4.55 | PR, REZ, sl3nd, Tauson, ztr      |
|           16 |      679 | 2025-01-17 | PaiN Gaming     | L   | 0.663      | -            | -                | -                | -         |    -7.07 | PR, REZ, sl3nd, Tauson, ztr      |
|           15 |      998 | 2024-12-06 | Natus Vincere   | L   | 0.388      | -            | -                | -                | -         |    -5.04 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           14 |     1026 | 2024-12-05 | Wildcard        | W   | 0.381      | 1.000        | 0.189 (0.072)    | 0.425 (0.162)    | 1 (0.381) |     2.68 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           13 |     1052 | 2024-12-05 | Team Liquid     | L   | 0.376      | -            | -                | -                | -         |    -7.34 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           12 |     1060 | 2024-12-04 | Team Vitality   | L   | 0.374      | -            | -                | -                | -         |    -1.44 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           11 |     1121 | 2024-12-02 | Passion UA      | W   | 0.356      | 1.000        | 0.028 (0.010)    | 0.328 (0.117)    | 1 (0.356) |     0.59 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           10 |     1138 | 2024-12-01 | The MongolZ     | L   | 0.349      | -            | -                | -                | -         |    -1.08 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            9 |     1162 | 2024-11-30 | PaiN Gaming     | W   | 0.343      | 1.000        | 0.368 (0.126)    | 0.545 (0.187)    | 1 (0.343) |     7.31 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            8 |     1180 | 2024-11-29 | FURIA           | W   | 0.341      | 1.000        | 0.078 (0.026)    | 0.370 (0.126)    | 1 (0.341) |     2.57 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            7 |     1362 | 2024-11-20 | BetBoom Team    | W   | 0.277      | 0.143        | 0.080 (0.003)    | -                | 1 (0.277) |     0.38 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            6 |     1363 | 2024-11-20 | SINNERS Esports | W   | 0.276      | -            | -                | -                | 1 (0.276) |     0.20 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            5 |     1375 | 2024-11-19 | Team Falcons    | W   | 0.269      | -            | -                | -                | -         |     0.04 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            4 |     1386 | 2024-11-18 | UNiTY esports   | W   | 0.263      | -            | -                | -                | -         |     0.11 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            3 |     1408 | 2024-11-17 | Dynamo Eclot    | L   | 0.256      | -            | -                | -                | -         |    -7.69 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            2 |     1419 | 2024-11-16 | Team Vitality   | L   | 0.254      | -            | -                | -                | -         |    -1.00 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            1 |     1992 | 2024-10-11 | GUN5 Esports    | L   | 0.011      | -            | -                | -                | -         |    -0.33 | FL4MUS, sl3nd, Tauson, volt, ztr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($28,478.98)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.13) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-09 |      0.818 | $24,000.00     | $19,626.67      |
| 2024-12-15 |      0.443 | $20,000.00     | $8,852.31       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
