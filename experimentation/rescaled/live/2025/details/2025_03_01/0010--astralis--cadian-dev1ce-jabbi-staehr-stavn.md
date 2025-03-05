### Roster Details<br />
Team Name: Astralis<br />
Roster: cadiaN, dev1ce, jabbi, Staehr, stavn<br />
Global Rank: [10](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [9]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  1737.5<br />
<br />
Final Rank Value (1737.5) = Starting Rank Value (1888.3) + Head To Head Adjustments (-150.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.823[<sup>1</sup>](#table2)
- Bounty Collected: 0.702[<sup>2</sup>](#table1)
- Opponent Network: 0.604[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.782<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1888.3
- 400 + ( ( 0.782 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 1888.3


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
|           41 |       98 | 2025-02-23 | FaZe Clan       | W   | 1.000      | 1.000        | 0.744 (0.744)    | 0.618 (0.618)    | 1 (1.000) |    21.05 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           40 |      113 | 2025-02-22 | MOUZ            | L   | 1.000      | -            | -                | -                | -         |   -10.33 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           39 |      148 | 2025-02-21 | The MongolZ     | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.625 (0.625)    | 1 (1.000) |    23.43 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           38 |      160 | 2025-02-20 | HEROIC          | L   | 1.000      | -            | -                | -                | -         |   -27.99 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           37 |      176 | 2025-02-18 | BIG             | W   | 1.000      | 1.000        | 0.220 (0.220)    | 0.558 (0.558)    | 1 (1.000) |     5.16 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           36 |      199 | 2025-02-17 | MIBR            | W   | 1.000      | 1.000        | 0.139 (0.139)    | 0.604 (0.604)    | 1 (1.000) |     4.62 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           35 |      214 | 2025-02-16 | Team Falcons    | L   | 1.000      | -            | -                | -                | -         |   -12.39 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           34 |      235 | 2025-02-15 | SAW             | W   | 1.000      | 1.000        | 0.262 (0.262)    | -                | 1 (1.000) |     1.71 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           33 |      273 | 2025-02-14 | PaiN Gaming     | L   | 1.000      | -            | -                | -                | -         |   -21.83 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           32 |      331 | 2025-02-11 | BetBoom Team    | W   | 1.000      | -            | -                | -                | -         |     1.22 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           31 |      339 | 2025-02-11 | Zero Tenacity   | W   | 1.000      | 1.000        | -                | 0.507 (0.507)    | -         |     0.23 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           30 |      365 | 2025-02-10 | BC.Game Esports | L   | 1.000      | -            | -                | -                | -         |   -29.08 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           29 |      373 | 2025-02-10 | OG              | W   | 1.000      | 1.000        | -                | 0.974 (0.974)    | -         |     0.44 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           28 |      401 | 2025-02-09 | PARIVISION      | W   | 1.000      | -            | -                | -                | -         |     0.42 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           27 |      406 | 2025-02-09 | 500             | W   | 1.000      | 0.542        | -                | 1.000 (0.542)    | -         |     1.28 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           26 |      463 | 2025-02-08 | 9INE            | W   | 1.000      | 0.540        | -                | 0.895 (0.483)    | -         |     0.56 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           25 |      582 | 2025-02-04 | GamerLegion     | L   | 1.000      | -            | -                | -                | -         |   -22.91 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           24 |      590 | 2025-02-03 | FURIA           | W   | 1.000      | 1.000        | -                | 0.493 (0.493)    | 1 (1.000) |     4.27 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           23 |      604 | 2025-02-02 | Team Spirit     | L   | 1.000      | -            | -                | -                | -         |    -7.87 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           22 |      620 | 2025-01-31 | PaiN Gaming     | W   | 1.000      | 1.000        | 0.318 (0.318)    | 0.632 (0.632)    | 1 (1.000) |     8.38 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           21 |      629 | 2025-01-30 | FlyQuest        | W   | 0.999      | -            | -                | -                | 1 (0.999) |     0.61 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           20 |      640 | 2025-01-29 | MIBR            | L   | 0.992      | -            | -                | -                | -         |   -27.36 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           19 |      672 | 2025-01-18 | Natus Vincere   | L   | 0.920      | -            | -                | -                | -         |   -18.08 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           18 |      687 | 2025-01-15 | Wildcard        | W   | 0.898      | 1.000        | 0.176 (0.158)    | -                | -         |     1.87 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           17 |     1268 | 2024-11-23 | Passion UA      | L   | 0.550      | -            | -                | -                | -         |   -16.84 | br0, cadiaN, jabbi, Staehr, stavn    |
|           16 |     1290 | 2024-11-23 | Eternal Fire    | W   | 0.544      | 1.000        | 0.588 (0.320)    | -                | 1 (0.544) |     9.21 | br0, cadiaN, jabbi, Staehr, stavn    |
|           15 |     1319 | 2024-11-22 | B8              | W   | 0.538      | -            | -                | -                | 1 (0.538) |     0.48 | br0, cadiaN, jabbi, Staehr, stavn    |
|           14 |     1339 | 2024-11-21 | Sashi Esport    | L   | 0.532      | -            | -                | -                | -         |   -16.51 | br0, cadiaN, jabbi, Staehr, stavn    |
|           13 |     1350 | 2024-11-20 | 9Pandas         | L   | 0.530      | -            | -                | -                | -         |   -16.45 | br0, cadiaN, jabbi, Staehr, stavn    |
|           12 |     1716 | 2024-11-02 | Team Spirit     | L   | 0.405      | -            | -                | -                | -         |    -4.51 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           11 |     1756 | 2024-10-31 | MOUZ            | W   | 0.391      | 1.000        | 1.000 (0.391)    | -                | -         |     7.51 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           10 |     1776 | 2024-10-29 | Natus Vincere   | W   | 0.383      | 1.000        | 0.555 (0.213)    | -                | -         |     4.21 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            9 |     2041 | 2024-10-09 | Virtus.pro      | L   | 0.245      | -            | -                | -                | -         |    -6.08 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            8 |     2096 | 2024-10-08 | Team Falcons    | L   | 0.240      | -            | -                | -                | -         |    -3.58 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            7 |     2125 | 2024-10-07 | Eternal Fire    | W   | 0.233      | -            | -                | -                | -         |     4.04 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            6 |     2494 | 2024-09-26 | Team Spirit     | L   | 0.159      | -            | -                | -                | -         |    -1.74 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            5 |     2544 | 2024-09-25 | Team Vitality   | L   | 0.152      | -            | -                | -                | -         |    -2.11 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            4 |     2879 | 2024-09-14 | Complexity      | L   | 0.079      | -            | -                | -                | -         |    -2.44 | br0, dev1ce, jabbi, Staehr, stavn    |
|            3 |     2917 | 2024-09-13 | Rooster         | W   | 0.072      | -            | -                | -                | -         |     0.00 | br0, dev1ce, jabbi, Staehr, stavn    |
|            2 |     2980 | 2024-09-11 | Complexity      | L   | 0.059      | -            | -                | -                | -         |    -1.82 | br0, dev1ce, jabbi, Staehr, stavn    |
|            1 |     3015 | 2024-09-10 | Fnatic          | L   | 0.051      | -            | -                | -                | -         |    -1.59 | br0, dev1ce, jabbi, Staehr, stavn    |

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
