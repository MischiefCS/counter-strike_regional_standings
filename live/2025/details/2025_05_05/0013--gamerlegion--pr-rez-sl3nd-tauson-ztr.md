### Roster Details<br />
Team Name: GamerLegion<br />
Roster: PR, REZ, sl3nd, Tauson, ztr<br />
Global Rank: [13](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [11]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  1487.8<br />
<br />
Final Rank Value (1487.8) = Starting Rank Value (1466.6) + Head To Head Adjustments (21.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.562[<sup>1</sup>](#table2)
- Bounty Collected: 0.574[<sup>2</sup>](#table1)
- Opponent Network: 0.165[<sup>2</sup>](#table1)
- LAN Wins: 0.658[<sup>2</sup>](#table1)

The average of these factors is 0.490<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1466.6
- 400 + ( ( 0.490 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 1466.6


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
|           24 |      360 | 2025-02-10 | Metizport       | W   | 0.639      | 0.143        | 0.033 (0.003)    | 0.307 (0.028)    | -         |     0.40 | PR, REZ, sl3nd, Tauson, ztr      |
|           23 |      371 | 2025-02-10 | Hesta           | W   | 0.637      | 0.143        | -                | 0.362 (0.033)    | -         |     0.12 | PR, REZ, sl3nd, Tauson, ztr      |
|           22 |      470 | 2025-02-08 | PARIVISION      | L   | 0.623      | -            | -                | -                | -         |   -19.45 | PR, REZ, sl3nd, Tauson, ztr      |
|           21 |      573 | 2025-02-04 | Team Spirit     | L   | 0.598      | -            | -                | -                | -         |    -1.27 | PR, REZ, sl3nd, Tauson, ztr      |
|           20 |      582 | 2025-02-04 | Astralis        | W   | 0.597      | 1.000        | 0.973 (0.581)    | 1.000 (0.597)    | 1 (0.597) |    16.98 | PR, REZ, sl3nd, Tauson, ztr      |
|           19 |      592 | 2025-02-03 | The MongolZ     | L   | 0.590      | -            | -                | -                | -         |    -2.11 | PR, REZ, sl3nd, Tauson, ztr      |
|           18 |      612 | 2025-02-01 | MOUZ            | W   | 0.578      | 1.000        | 1.000 (0.578)    | 0.536 (0.310)    | 1 (0.578) |    17.12 | PR, REZ, sl3nd, Tauson, ztr      |
|           17 |      630 | 2025-01-30 | PaiN Gaming     | W   | 0.563      | 1.000        | 0.502 (0.283)    | 0.485 (0.273)    | 1 (0.563) |    12.84 | PR, REZ, sl3nd, Tauson, ztr      |
|           16 |      639 | 2025-01-29 | SAW             | W   | 0.557      | 1.000        | 0.384 (0.214)    | 0.311 (0.173)    | 1 (0.557) |     4.61 | PR, REZ, sl3nd, Tauson, ztr      |
|           15 |      679 | 2025-01-17 | PaiN Gaming     | L   | 0.476      | -            | -                | -                | -         |    -4.25 | PR, REZ, sl3nd, Tauson, ztr      |
|           14 |      998 | 2024-12-06 | Natus Vincere   | L   | 0.202      | -            | -                | -                | -         |    -2.48 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           13 |     1026 | 2024-12-05 | Wildcard        | W   | 0.195      | 1.000        | 0.249 (0.049)    | 0.349 (0.068)    | 1 (0.195) |     1.28 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           12 |     1052 | 2024-12-05 | Team Liquid     | L   | 0.189      | -            | -                | -                | -         |    -3.88 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           11 |     1060 | 2024-12-04 | Team Vitality   | L   | 0.188      | -            | -                | -                | -         |    -0.75 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           10 |     1121 | 2024-12-02 | Passion UA      | W   | 0.169      | 1.000        | 0.032 (0.005)    | 0.277 (0.047)    | 1 (0.169) |     0.22 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            9 |     1138 | 2024-12-01 | The MongolZ     | L   | 0.162      | -            | -                | -                | -         |    -0.54 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            8 |     1162 | 2024-11-30 | PaiN Gaming     | W   | 0.157      | 1.000        | 0.502 (0.079)    | 0.485 (0.076)    | 1 (0.157) |     3.58 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            7 |     1180 | 2024-11-29 | FURIA           | W   | 0.154      | 1.000        | 0.094 (0.014)    | 0.279 (0.043)    | 1 (0.154) |     0.90 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            6 |     1362 | 2024-11-20 | BetBoom Team    | W   | 0.090      | 0.143        | 0.110 (0.001)    | -                | 1 (0.090) |     0.13 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            5 |     1363 | 2024-11-20 | SINNERS Esports | W   | 0.089      | -            | -                | -                | 1 (0.089) |     0.06 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            4 |     1375 | 2024-11-19 | Team Falcons    | W   | 0.082      | -            | -                | -                | -         |     0.01 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            3 |     1386 | 2024-11-18 | UNiTY esports   | W   | 0.076      | -            | -                | -                | -         |     0.04 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            2 |     1408 | 2024-11-17 | Dynamo Eclot    | L   | 0.069      | -            | -                | -                | -         |    -2.10 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            1 |     1419 | 2024-11-16 | Team Vitality   | L   | 0.068      | -            | -                | -                | -         |    -0.27 | FL4MUS, sl3nd, Tauson, volt, ztr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($20,265.65)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.17) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-09 |      0.631 | $24,000.00     | $15,146.67      |
| 2024-12-15 |      0.256 | $20,000.00     | $5,118.98       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
