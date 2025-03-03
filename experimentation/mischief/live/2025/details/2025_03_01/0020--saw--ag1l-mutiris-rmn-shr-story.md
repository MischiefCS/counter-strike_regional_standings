### Roster Details<br />
Team Name: SAW<br />
Roster: Ag1l, MUTiRiS, rmn, shr, story<br />
Global Rank: [20](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [15]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  1240.9<br />
<br />
Final Rank Value (1240.9) = Starting Rank Value (1291.1) + Head To Head Adjustments (-50.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.633[<sup>1</sup>](#table2)
- Bounty Collected: 0.443[<sup>2</sup>](#table1)
- Opponent Network: 0.144[<sup>2</sup>](#table1)
- LAN Wins: 0.604[<sup>2</sup>](#table1)

The average of these factors is 0.456<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1291.1
- 400 + ( ( 0.456 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 1291.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           28 |      163 | 2025-02-21 | FaZe Clan       | L   | 1.000      | -            | -                | -                | -         |    -0.85 | Ag1l, MUTiRiS, rmn, shr, story          |
|           27 |      219 | 2025-02-18 | 3DMAX           | W   | 1.000      | 1.000        | 0.295 (0.295)    | 0.582 (0.582)    | 1 (1.000) |    27.21 | Ag1l, MUTiRiS, rmn, shr, story          |
|           26 |      234 | 2025-02-17 | Complexity      | W   | 1.000      | 1.000        | 0.097 (0.097)    | 0.217 (0.217)    | 1 (1.000) |    12.54 | Ag1l, MUTiRiS, rmn, shr, story          |
|           25 |      287 | 2025-02-16 | FlyQuest        | W   | 1.000      | 1.000        | 0.105 (0.105)    | 0.285 (0.285)    | 1 (1.000) |    12.34 | Ag1l, MUTiRiS, rmn, shr, story          |
|           24 |      339 | 2025-02-15 | Astralis        | L   | 1.000      | -            | -                | -                | -         |    -1.81 | Ag1l, MUTiRiS, rmn, shr, story          |
|           23 |      405 | 2025-02-14 | FaZe Clan       | L   | 1.000      | -            | -                | -                | -         |    -0.77 | Ag1l, MUTiRiS, rmn, shr, story          |
|           22 |      696 | 2025-02-06 | 500             | L   | 1.000      | -            | -                | -                | -         |   -23.62 | Ag1l, MUTiRiS, rmn, shr, story          |
|           21 |      747 | 2025-02-05 | Eco Warriors    | W   | 1.000      | 0.143        | 0.022 (0.003)    | 0.178 (0.025)    | 0 (0.000) |     2.88 | Ag1l, MUTiRiS, rmn, shr, story          |
|           20 |      756 | 2025-02-05 | BC.Game Esports | L   | 1.000      | -            | -                | -                | -         |   -23.77 | Ag1l, MUTiRiS, rmn, shr, story          |
|           19 |      932 | 2025-01-30 | Virtus.pro      | L   | 0.998      | -            | -                | -                | -         |    -4.00 | Ag1l, MUTiRiS, rmn, shr, story          |
|           18 |      940 | 2025-01-29 | GamerLegion     | L   | 0.992      | -            | -                | -                | -         |    -4.87 | Ag1l, MUTiRiS, rmn, shr, story          |
|           17 |     1013 | 2025-01-15 | BIG             | L   | 0.899      | -            | -                | -                | -         |    -7.43 | Ag1l, MUTiRiS, rmn, shr, story          |
|           16 |     2511 | 2024-11-19 | BetBoom Team    | L   | 0.522      | -            | -                | -                | -         |   -12.97 | Ag1l, ewjerkz, MUTiRiS, rmn, story      |
|           15 |     2523 | 2024-11-18 | Natus Vincere   | L   | 0.516      | -            | -                | -                | -         |    -1.26 | Ag1l, ewjerkz, MUTiRiS, rmn, story      |
|           14 |     2540 | 2024-11-17 | Team Falcons    | W   | 0.510      | 0.143        | 0.008 (0.001)    | -                | 1 (0.510) |     0.78 | Ag1l, ewjerkz, MUTiRiS, rmn, story      |
|           13 |     2567 | 2024-11-17 | UNiTY esports   | W   | 0.505      | 0.143        | 0.025 (0.002)    | 0.164 (0.012)    | 1 (0.505) |     0.94 | Ag1l, ewjerkz, MUTiRiS, rmn, story      |
|           12 |     2607 | 2024-11-16 | SINNERS Esports | L   | 0.503      | -            | -                | -                | -         |   -14.20 | Ag1l, ewjerkz, MUTiRiS, rmn, story      |
|           11 |     3403 | 2024-10-27 | B8              | W   | 0.367      | 0.500        | 0.124 (0.023)    | 0.647 (0.119)    | 1 (0.367) |     2.60 | Ag1l, ewjerkz, MUTiRiS, rmn, story      |
|           10 |     3417 | 2024-10-27 | Monte           | W   | 0.365      | 0.500        | 0.029 (0.005)    | 0.211 (0.038)    | 1 (0.365) |     0.73 | Ag1l, ewjerkz, MUTiRiS, rmn, story      |
|            9 |     3502 | 2024-10-18 | 3DMAX           | L   | 0.306      | -            | -                | -                | -         |    -1.71 | Ag1l, ewjerkz, MUTiRiS, rmn, story      |
|            8 |     3520 | 2024-10-17 | 9Pandas         | W   | 0.299      | 0.500        | 0.085 (0.013)    | 0.564 (0.084)    | -         |     1.37 | Ag1l, ewjerkz, MUTiRiS, rmn, story      |
|            7 |     3548 | 2024-10-16 | HEROIC          | L   | 0.293      | -            | -                | -                | -         |    -6.99 | Ag1l, ewjerkz, MUTiRiS, rmn, story      |
|            6 |     3761 | 2024-10-06 | BIG             | L   | 0.226      | -            | -                | -                | -         |    -1.85 | arrozdoce, ewjerkz, MUTiRiS, rmn, story |
|            5 |     3784 | 2024-10-05 | BetBoom Team    | W   | 0.220      | 0.500        | 0.103 (0.011)    | 0.456 (0.050)    | 1 (0.220) |     1.28 | arrozdoce, ewjerkz, MUTiRiS, rmn, story |
|            4 |     3816 | 2024-10-04 | FlyQuest        | L   | 0.214      | -            | -                | -                | -         |    -5.06 | arrozdoce, ewjerkz, MUTiRiS, rmn, story |
|            3 |     3824 | 2024-10-04 | Rooster         | W   | 0.212      | 0.500        | -                | 0.264 (0.028)    | 1 (0.212) |     0.20 | arrozdoce, ewjerkz, MUTiRiS, rmn, story |
|            2 |     4596 | 2024-09-12 | Insilio         | L   | 0.064      | -            | -                | -                | -         |    -1.97 | arrozdoce, ewjerkz, MUTiRiS, rmn, story |
|            1 |     4655 | 2024-09-10 | TSM             | W   | 0.051      | -            | -                | -                | -         |     0.07 | arrozdoce, ewjerkz, MUTiRiS, rmn, story |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($88,312.18)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.26) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      1.000 | $62,500.00     | $62,500.00      |
| 2025-02-09 |      1.000 | $2,500.00      | $2,500.00       |
| 2024-10-27 |      0.367 | $50,000.00     | $18,328.70      |
| 2024-10-20 |      0.319 | $8,500.00      | $2,710.56       |
| 2024-10-06 |      0.227 | $10,000.00     | $2,272.92       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
