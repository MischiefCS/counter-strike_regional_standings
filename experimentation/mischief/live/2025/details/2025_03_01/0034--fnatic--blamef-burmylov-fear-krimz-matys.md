### Roster Details<br />
Team Name: Fnatic<br />
Roster: blameF, Burmylov, fear, KRIMZ, matys<br />
Global Rank: [34](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [25]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  1026.1<br />
<br />
Final Rank Value (1026.1) = Starting Rank Value (1031.9) + Head To Head Adjustments (-5.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.430[<sup>1</sup>](#table2)
- Bounty Collected: 0.366[<sup>2</sup>](#table1)
- Opponent Network: 0.243[<sup>2</sup>](#table1)
- LAN Wins: 0.254[<sup>2</sup>](#table1)

The average of these factors is 0.323<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1031.9
- 400 + ( ( 0.323 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 1031.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           27 |      198 | 2025-02-20 | Dynamo Eclot           | L   | 1.000      | -            | -                | -                | -         |   -15.43 | blameF, Burmylov, fear, KRIMZ, matys |
|           26 |      257 | 2025-02-17 | RUSH B (Russian team)  | W   | 1.000      | 0.435        | 0.027 (0.012)    | 0.727 (0.316)    | 0 (0.000) |     8.81 | blameF, Burmylov, fear, KRIMZ, matys |
|           25 |      333 | 2025-02-15 | Monte                  | L   | 1.000      | -            | -                | -                | -         |   -22.04 | blameF, Burmylov, fear, KRIMZ, matys |
|           24 |      427 | 2025-02-13 | 500                    | W   | 1.000      | 0.435        | 0.091 (0.040)    | 1.000 (0.435)    | 0 (0.000) |    16.92 | blameF, Burmylov, fear, KRIMZ, matys |
|           23 |      449 | 2025-02-12 | Partizan Esports       | L   | 1.000      | -            | -                | -                | -         |   -17.49 | blameF, Burmylov, fear, KRIMZ, matys |
|           22 |      512 | 2025-02-10 | ECSTATIC               | W   | 1.000      | 0.435        | 0.033 (0.014)    | 0.943 (0.410)    | 0 (0.000) |     7.45 | blameF, Burmylov, fear, KRIMZ, matys |
|           21 |      678 | 2025-02-06 | Team Spirit Academy    | W   | 1.000      | 0.435        | 0.068 (0.030)    | 0.667 (0.290)    | 0 (0.000) |    13.24 | blameF, Burmylov, fear, KRIMZ, matys |
|           20 |      825 | 2025-02-04 | Betclic Apogee Esports | W   | 1.000      | 0.435        | 0.012 (0.005)    | 0.614 (0.267)    | -         |     9.85 | blameF, Burmylov, fear, KRIMZ, matys |
|           19 |      904 | 2025-02-01 | OG                     | W   | 1.000      | 0.435        | 0.062 (0.027)    | 0.930 (0.404)    | -         |     8.11 | blameF, Burmylov, fear, KRIMZ, matys |
|           18 |     1015 | 2025-01-14 | Team Spirit            | L   | 0.894      | -            | -                | -                | -         |    -0.13 | blameF, Burmylov, fear, KRIMZ, matys |
|           17 |     2079 | 2024-11-30 | Rare Atom              | L   | 0.597      | -            | -                | -                | -         |   -10.96 | blameF, bodyy, KRIMZ, matys, nawwk   |
|           16 |     2166 | 2024-11-30 | Cloud9                 | L   | 0.591      | -            | -                | -                | -         |   -12.60 | blameF, bodyy, KRIMZ, matys, nawwk   |
|           15 |     2173 | 2024-11-29 | Wildcard               | L   | 0.590      | -            | -                | -                | -         |    -3.26 | blameF, bodyy, KRIMZ, matys, nawwk   |
|           14 |     2510 | 2024-11-19 | Dynamo Eclot           | W   | 0.523      | 0.143        | 0.127 (0.010)    | 0.674 (0.050)    | 1 (0.523) |     8.51 | blameF, bodyy, KRIMZ, matys, nawwk   |
|           13 |     2521 | 2024-11-19 | FaZe Clan              | L   | 0.517      | -            | -                | -                | -         |    -0.14 | blameF, bodyy, KRIMZ, matys, nawwk   |
|           12 |     2539 | 2024-11-17 | BetBoom Team           | W   | 0.510      | 0.143        | 0.103 (0.008)    | 0.456 (0.033)    | 1 (0.510) |     7.86 | blameF, bodyy, KRIMZ, matys, nawwk   |
|           11 |     2580 | 2024-11-17 | Rebels Gaming          | W   | 0.505      | -            | -                | -                | 1 (0.505) |     2.44 | blameF, bodyy, KRIMZ, matys, nawwk   |
|           10 |     2612 | 2024-11-16 | Natus Vincere          | L   | 0.503      | -            | -                | -                | -         |    -0.33 | blameF, bodyy, KRIMZ, matys, nawwk   |
|            9 |     3483 | 2024-10-19 | Nemiga Gaming          | L   | 0.311      | -            | -                | -                | -         |    -5.14 | blameF, bodyy, KRIMZ, matys, nawwk   |
|            8 |     3523 | 2024-10-17 | PARIVISION             | W   | 0.299      | -            | -                | -                | 1 (0.299) |     1.45 | blameF, bodyy, KRIMZ, matys, nawwk   |
|            7 |     3545 | 2024-10-16 | BC.Game Esports        | W   | 0.293      | 0.624        | 0.077 (0.014)    | 1.000 (0.183)    | 1 (0.293) |     4.37 | blameF, bodyy, KRIMZ, matys, nawwk   |
|            6 |     3618 | 2024-10-10 | Metizport              | L   | 0.251      | -            | -                | -                | -         |    -3.56 | blameF, bodyy, KRIMZ, matys, nawwk   |
|            5 |     4221 | 2024-09-24 | Wild Lotus             | L   | 0.145      | -            | -                | -                | -         |    -3.84 | blameF, bodyy, KRIMZ, matys, nawwk   |
|            4 |     4526 | 2024-09-14 | MOUZ                   | L   | 0.078      | -            | -                | -                | -         |    -0.01 | afro, blameF, bodyy, KRIMZ, matys    |
|            3 |     4580 | 2024-09-12 | BIG                    | L   | 0.066      | -            | -                | -                | -         |    -0.16 | afro, blameF, bodyy, KRIMZ, matys    |
|            2 |     4615 | 2024-09-11 | M80                    | L   | 0.060      | -            | -                | -                | -         |    -1.27 | afro, blameF, bodyy, KRIMZ, matys    |
|            1 |     4653 | 2024-09-10 | Astralis               | W   | 0.051      | 0.889        | 0.609 (0.028)    | 0.938 (0.043)    | 1 (0.051) |     1.60 | afro, blameF, bodyy, KRIMZ, matys    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,822.15)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.691 | $10,000.00     | $6,909.49       |
| 2024-10-19 |      0.313 | $25,000.00     | $7,828.13       |
| 2024-09-26 |      0.159 | $1,000.00      | $158.98         |
| 2024-09-22 |      0.132 | $7,000.00      | $925.56         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
