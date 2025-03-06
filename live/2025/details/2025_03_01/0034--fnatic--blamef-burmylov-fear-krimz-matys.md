### Roster Details<br />
Team Name: Fnatic<br />
Roster: blameF, Burmylov, fear, KRIMZ, matys<br />
Global Rank: [34](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [25]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  1013.5<br />
<br />
Final Rank Value (1013.5) = Starting Rank Value (1024.1) + Head To Head Adjustments (-10.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.430[<sup>1</sup>](#table2)
- Bounty Collected: 0.365[<sup>2</sup>](#table1)
- Opponent Network: 0.243[<sup>2</sup>](#table1)
- LAN Wins: 0.254[<sup>2</sup>](#table1)

The average of these factors is 0.323<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1024.1
- 400 + ( ( 0.323 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1024.1


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
|           27 |      158 | 2025-02-20 | Dynamo Eclot           | L   | 1.000      | -            | -                | -                | -         |   -15.28 | blameF, Burmylov, fear, KRIMZ, matys |
|           26 |      202 | 2025-02-17 | RUSH B (Russian team)  | W   | 1.000      | 0.435        | 0.027 (0.012)    | 0.569 (0.247)    | 0 (0.000) |     8.63 | blameF, Burmylov, fear, KRIMZ, matys |
|           25 |      229 | 2025-02-15 | Monte                  | L   | 1.000      | -            | -                | -                | -         |   -23.45 | blameF, Burmylov, fear, KRIMZ, matys |
|           24 |      294 | 2025-02-13 | 500                    | W   | 1.000      | 0.435        | 0.086 (0.038)    | 1.000 (0.435)    | 0 (0.000) |    15.99 | blameF, Burmylov, fear, KRIMZ, matys |
|           23 |      316 | 2025-02-12 | Partizan Esports       | L   | 1.000      | -            | -                | -                | -         |   -15.84 | blameF, Burmylov, fear, KRIMZ, matys |
|           22 |      377 | 2025-02-10 | ECSTATIC               | W   | 1.000      | 0.435        | 0.033 (0.014)    | 1.000 (0.435)    | 0 (0.000) |     7.00 | blameF, Burmylov, fear, KRIMZ, matys |
|           21 |      514 | 2025-02-06 | Team Spirit Academy    | W   | 1.000      | 0.435        | 0.068 (0.030)    | 0.718 (0.312)    | 0 (0.000) |    12.89 | blameF, Burmylov, fear, KRIMZ, matys |
|           20 |      580 | 2025-02-04 | Betclic Apogee Esports | W   | 1.000      | 0.435        | 0.012 (0.005)    | 0.661 (0.287)    | -         |     9.63 | blameF, Burmylov, fear, KRIMZ, matys |
|           19 |      619 | 2025-02-01 | OG                     | W   | 1.000      | 0.435        | 0.062 (0.027)    | 0.974 (0.423)    | -         |     8.53 | blameF, Burmylov, fear, KRIMZ, matys |
|           18 |      688 | 2025-01-14 | Team Spirit            | L   | 0.894      | -            | -                | -                | -         |    -0.13 | blameF, Burmylov, fear, KRIMZ, matys |
|           17 |     1140 | 2024-11-30 | Rare Atom              | L   | 0.597      | -            | -                | -                | -         |   -13.79 | blameF, bodyy, KRIMZ, matys, nawwk   |
|           16 |     1172 | 2024-11-30 | Cloud9                 | L   | 0.591      | -            | -                | -                | -         |   -12.52 | blameF, bodyy, KRIMZ, matys, nawwk   |
|           15 |     1175 | 2024-11-29 | Wildcard               | L   | 0.590      | -            | -                | -                | -         |    -3.24 | blameF, bodyy, KRIMZ, matys, nawwk   |
|           14 |     1368 | 2024-11-19 | Dynamo Eclot           | W   | 0.523      | 0.143        | 0.126 (0.009)    | 0.674 (0.050)    | 1 (0.523) |     8.58 | blameF, bodyy, KRIMZ, matys, nawwk   |
|           13 |     1376 | 2024-11-19 | FaZe Clan              | L   | 0.517      | -            | -                | -                | -         |    -0.14 | blameF, bodyy, KRIMZ, matys, nawwk   |
|           12 |     1390 | 2024-11-17 | BetBoom Team           | W   | 0.510      | 0.143        | 0.086 (0.006)    | 0.406 (0.030)    | 1 (0.510) |     6.86 | blameF, bodyy, KRIMZ, matys, nawwk   |
|           11 |     1406 | 2024-11-17 | Rebels Gaming          | W   | 0.505      | -            | -                | -                | 1 (0.505) |     2.58 | blameF, bodyy, KRIMZ, matys, nawwk   |
|           10 |     1420 | 2024-11-16 | Natus Vincere          | L   | 0.503      | -            | -                | -                | -         |    -0.33 | blameF, bodyy, KRIMZ, matys, nawwk   |
|            9 |     1868 | 2024-10-19 | Nemiga Gaming          | L   | 0.311      | -            | -                | -                | -         |    -5.15 | blameF, bodyy, KRIMZ, matys, nawwk   |
|            8 |     1908 | 2024-10-17 | PARIVISION             | W   | 0.299      | -            | -                | -                | 1 (0.299) |     1.47 | blameF, bodyy, KRIMZ, matys, nawwk   |
|            7 |     1930 | 2024-10-16 | BC.Game Esports        | W   | 0.293      | 0.624        | 0.077 (0.014)    | 0.912 (0.167)    | 1 (0.293) |     4.34 | blameF, bodyy, KRIMZ, matys, nawwk   |
|            6 |     2003 | 2024-10-10 | Metizport              | L   | 0.251      | -            | -                | -                | -         |    -3.62 | blameF, bodyy, KRIMZ, matys, nawwk   |
|            5 |     2606 | 2024-09-24 | Wild Lotus             | L   | 0.145      | -            | -                | -                | -         |    -3.85 | blameF, bodyy, KRIMZ, matys, nawwk   |
|            4 |     2888 | 2024-09-14 | MOUZ                   | L   | 0.078      | -            | -                | -                | -         |    -0.01 | afro, blameF, bodyy, KRIMZ, matys    |
|            3 |     2942 | 2024-09-12 | BIG                    | L   | 0.066      | -            | -                | -                | -         |    -0.16 | afro, blameF, bodyy, KRIMZ, matys    |
|            2 |     2977 | 2024-09-11 | M80                    | L   | 0.060      | -            | -                | -                | -         |    -1.26 | afro, blameF, bodyy, KRIMZ, matys    |
|            1 |     3015 | 2024-09-10 | Astralis               | W   | 0.051      | 0.889        | 0.609 (0.028)    | 1.000 (0.046)    | 1 (0.051) |     1.60 | afro, blameF, bodyy, KRIMZ, matys    |

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
