### Roster Details<br />
Team Name: Astralis<br />
Roster: cadiaN, dev1ce, jabbi, Staehr, stavn<br />
Global Rank: [10](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [9]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  1698.3<br />
<br />
Final Rank Value (1698.3) = Starting Rank Value (1841.7) + Head To Head Adjustments (-143.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.823[<sup>1</sup>](#table2)
- Bounty Collected: 0.686[<sup>2</sup>](#table1)
- Opponent Network: 0.442[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.738<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1841.7
- 400 + ( ( 0.738 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 1841.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           41 |      105 | 2025-02-23 | FaZe Clan       | W   | 1.000      | 1.000        | 0.744 (0.744)    | 0.575 (0.575)    | 1 (1.000) |    22.64 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           40 |      139 | 2025-02-22 | MOUZ            | L   | 1.000      | -            | -                | -                | -         |    -8.55 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           39 |      183 | 2025-02-21 | The MongolZ     | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.633 (0.633)    | 1 (1.000) |    25.19 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           38 |      200 | 2025-02-20 | HEROIC          | L   | 1.000      | -            | -                | -                | -         |   -29.65 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           37 |      220 | 2025-02-18 | BIG             | W   | 1.000      | 1.000        | 0.221 (0.221)    | 0.519 (0.519)    | 1 (1.000) |     4.21 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           36 |      253 | 2025-02-17 | MIBR            | W   | 1.000      | 1.000        | 0.139 (0.139)    | 0.562 (0.562)    | 1 (1.000) |     4.82 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           35 |      296 | 2025-02-16 | Team Falcons    | L   | 1.000      | -            | -                | -                | -         |   -10.90 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           34 |      339 | 2025-02-15 | SAW             | W   | 1.000      | 1.000        | 0.262 (0.262)    | 0.364 (0.364)    | 1 (1.000) |     1.81 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           33 |      395 | 2025-02-14 | PaiN Gaming     | L   | 1.000      | -            | -                | -                | -         |   -21.65 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           32 |      464 | 2025-02-11 | BetBoom Team    | W   | 1.000      | -            | -                | -                | -         |     0.91 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           31 |      472 | 2025-02-11 | Zero Tenacity   | W   | 1.000      | -            | -                | -                | -         |     0.21 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           30 |      499 | 2025-02-10 | BC.Game Esports | L   | 1.000      | -            | -                | -                | -         |   -30.68 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           29 |      508 | 2025-02-10 | OG              | W   | 1.000      | -            | -                | -                | -         |     0.23 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           28 |      542 | 2025-02-09 | PARIVISION      | W   | 1.000      | -            | -                | -                | -         |     0.18 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           27 |      547 | 2025-02-09 | 500             | W   | 1.000      | -            | -                | -                | -         |     0.74 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           26 |      606 | 2025-02-08 | 9INE            | W   | 1.000      | -            | -                | -                | -         |     0.35 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           25 |      836 | 2025-02-04 | GamerLegion     | L   | 1.000      | -            | -                | -                | -         |   -22.03 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           24 |      864 | 2025-02-03 | FURIA           | W   | 1.000      | 1.000        | 0.094 (0.094)    | 0.458 (0.458)    | 1 (1.000) |     4.66 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           23 |      881 | 2025-02-02 | Team Spirit     | L   | 1.000      | -            | -                | -                | -         |    -6.73 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           22 |      919 | 2025-01-31 | PaiN Gaming     | W   | 1.000      | 1.000        | 0.318 (0.318)    | 0.587 (0.587)    | 1 (1.000) |     8.56 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           21 |      930 | 2025-01-30 | FlyQuest        | W   | 0.999      | 1.000        | 0.105 (0.105)    | 0.285 (0.285)    | 1 (0.999) |     0.94 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           20 |      941 | 2025-01-29 | MIBR            | L   | 0.992      | -            | -                | -                | -         |   -27.08 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           19 |      987 | 2025-01-18 | Natus Vincere   | L   | 0.920      | -            | -                | -                | -         |   -17.91 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           18 |     1014 | 2025-01-15 | Wildcard        | W   | 0.898      | -            | -                | -                | -         |     1.94 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           17 |     2345 | 2024-11-23 | Passion UA      | L   | 0.550      | -            | -                | -                | -         |   -17.08 | br0, cadiaN, jabbi, Staehr, stavn    |
|           16 |     2402 | 2024-11-23 | Eternal Fire    | W   | 0.544      | -            | -                | -                | 1 (0.544) |     9.29 | br0, cadiaN, jabbi, Staehr, stavn    |
|           15 |     2456 | 2024-11-22 | B8              | W   | 0.538      | -            | -                | -                | 1 (0.538) |     0.23 | br0, cadiaN, jabbi, Staehr, stavn    |
|           14 |     2479 | 2024-11-21 | Sashi Esport    | L   | 0.532      | -            | -                | -                | -         |   -16.64 | br0, cadiaN, jabbi, Staehr, stavn    |
|           13 |     2490 | 2024-11-20 | 9Pandas         | L   | 0.530      | -            | -                | -                | -         |   -16.52 | br0, cadiaN, jabbi, Staehr, stavn    |
|           12 |     3218 | 2024-11-02 | Team Spirit     | L   | 0.405      | -            | -                | -                | -         |    -3.84 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           11 |     3300 | 2024-10-31 | MOUZ            | W   | 0.391      | 1.000        | 1.000 (0.391)    | 0.564 (0.220)    | -         |     8.51 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           10 |     3343 | 2024-10-29 | Natus Vincere   | W   | 0.383      | 1.000        | 0.555 (0.213)    | 0.570 (0.219)    | -         |     4.22 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            9 |     3656 | 2024-10-09 | Virtus.pro      | L   | 0.245      | -            | -                | -                | -         |    -5.70 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            8 |     3711 | 2024-10-08 | Team Falcons    | L   | 0.240      | -            | -                | -                | -         |    -3.06 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            7 |     3740 | 2024-10-07 | Eternal Fire    | W   | 0.233      | -            | -                | -                | -         |     4.08 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            6 |     4109 | 2024-09-26 | Team Spirit     | L   | 0.159      | -            | -                | -                | -         |    -1.46 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            5 |     4159 | 2024-09-25 | Team Vitality   | L   | 0.152      | -            | -                | -                | -         |    -1.91 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            4 |     4517 | 2024-09-14 | Complexity      | L   | 0.079      | -            | -                | -                | -         |    -2.43 | br0, dev1ce, jabbi, Staehr, stavn    |
|            3 |     4555 | 2024-09-13 | Rooster         | W   | 0.072      | -            | -                | -                | -         |     0.00 | br0, dev1ce, jabbi, Staehr, stavn    |
|            2 |     4618 | 2024-09-11 | Complexity      | L   | 0.059      | -            | -                | -                | -         |    -1.82 | br0, dev1ce, jabbi, Staehr, stavn    |
|            1 |     4653 | 2024-09-10 | Fnatic          | L   | 0.051      | -            | -                | -                | -         |    -1.60 | br0, dev1ce, jabbi, Staehr, stavn    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($204,996.39)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.61) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      1.000 | $150,000.00    | $150,000.00     |
| 2025-02-09 |      1.000 | $16,000.00     | $16,000.00      |
| 2024-11-03 |      0.411 | $85,000.00     | $34,920.83      |
| 2024-10-13 |      0.273 | $5,000.00      | $1,363.89       |
| 2024-09-29 |      0.179 | $10,000.00     | $1,786.11       |
| 2024-09-22 |      0.132 | $7,000.00      | $925.56         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
