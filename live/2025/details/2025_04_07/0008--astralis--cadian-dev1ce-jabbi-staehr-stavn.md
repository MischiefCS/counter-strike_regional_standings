### Roster Details<br />
Team Name: Astralis<br />
Roster: cadiaN, dev1ce, jabbi, Staehr, stavn<br />
Global Rank: [8](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [7]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  1746.4<br />
<br />
Final Rank Value (1746.4) = Starting Rank Value (1868.8) + Head To Head Adjustments (-122.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.878[<sup>1</sup>](#table2)
- Bounty Collected: 0.643[<sup>2</sup>](#table1)
- Opponent Network: 0.321[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.710<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1868.8
- 400 + ( ( 0.710 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 1868.8


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
|           32 |       98 | 2025-02-23 | FaZe Clan       | W   | 0.910      | 1.000        | 0.792 (0.721)    | 0.563 (0.513)    | 1 (0.910) |    19.39 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           31 |      113 | 2025-02-22 | MOUZ            | L   | 0.904      | -            | -                | -                | -         |    -7.96 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           30 |      148 | 2025-02-21 | The MongolZ     | W   | 0.896      | 1.000        | 1.000 (0.896)    | 0.566 (0.507)    | 1 (0.896) |    20.19 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           29 |      160 | 2025-02-20 | HEROIC          | L   | 0.890      | -            | -                | -                | -         |   -27.31 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           28 |      176 | 2025-02-18 | BIG             | W   | 0.876      | 1.000        | 0.239 (0.209)    | 0.512 (0.449)    | 1 (0.876) |     2.62 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           27 |      199 | 2025-02-17 | MIBR            | W   | 0.871      | 1.000        | 0.135 (0.117)    | 0.472 (0.411)    | 1 (0.871) |     2.29 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           26 |      214 | 2025-02-16 | Team Falcons    | L   | 0.863      | -            | -                | -                | -         |   -10.23 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           25 |      235 | 2025-02-15 | SAW             | W   | 0.858      | 1.000        | 0.290 (0.249)    | 0.341 (0.292)    | 1 (0.858) |     1.13 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           24 |      273 | 2025-02-14 | PaiN Gaming     | L   | 0.851      | -            | -                | -                | -         |   -19.27 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           23 |      331 | 2025-02-11 | BetBoom Team    | W   | 0.832      | -            | -                | -                | -         |     0.30 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           22 |      339 | 2025-02-11 | Zero Tenacity   | W   | 0.830      | -            | -                | -                | -         |     0.08 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           21 |      365 | 2025-02-10 | BC.Game Esports | L   | 0.825      | -            | -                | -                | -         |   -25.64 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           20 |      373 | 2025-02-10 | OG              | W   | 0.823      | 0.143        | -                | 1.000 (0.118)    | -         |     0.12 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           19 |      401 | 2025-02-09 | PARIVISION      | W   | 0.818      | -            | -                | -                | -         |     0.06 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           18 |      406 | 2025-02-09 | 500             | W   | 0.817      | 0.143        | -                | 1.000 (0.117)    | -         |     0.32 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           17 |      463 | 2025-02-08 | 9INE            | W   | 0.810      | 0.143        | -                | 0.895 (0.104)    | -         |     0.15 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           16 |      582 | 2025-02-04 | GamerLegion     | L   | 0.783      | -            | -                | -                | -         |   -20.23 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           15 |      590 | 2025-02-03 | FURIA           | W   | 0.777      | 1.000        | 0.078 (0.060)    | 0.370 (0.287)    | 1 (0.777) |     1.39 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           14 |      604 | 2025-02-02 | Team Spirit     | L   | 0.770      | -            | -                | -                | -         |    -6.94 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           13 |      620 | 2025-01-31 | PaiN Gaming     | W   | 0.758      | 1.000        | 0.368 (0.279)    | 0.545 (0.413)    | 1 (0.758) |     5.82 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           12 |      629 | 2025-01-30 | FlyQuest        | W   | 0.751      | 1.000        | 0.080 (0.060)    | -                | 1 (0.751) |     0.17 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           11 |      640 | 2025-01-29 | MIBR            | L   | 0.743      | -            | -                | -                | -         |   -21.89 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           10 |      672 | 2025-01-18 | Natus Vincere   | L   | 0.672      | -            | -                | -                | -         |   -17.44 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            9 |      687 | 2025-01-15 | Wildcard        | W   | 0.650      | -            | -                | -                | -         |     0.79 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            8 |     1268 | 2024-11-23 | Passion UA      | L   | 0.301      | -            | -                | -                | -         |    -9.43 | br0, cadiaN, jabbi, Staehr, stavn    |
|            7 |     1290 | 2024-11-23 | Eternal Fire    | W   | 0.296      | -            | -                | -                | 1 (0.296) |     4.86 | br0, cadiaN, jabbi, Staehr, stavn    |
|            6 |     1319 | 2024-11-22 | B8              | W   | 0.289      | -            | -                | -                | 1 (0.289) |     0.07 | br0, cadiaN, jabbi, Staehr, stavn    |
|            5 |     1339 | 2024-11-21 | Sashi Esport    | L   | 0.283      | -            | -                | -                | -         |    -8.89 | br0, cadiaN, jabbi, Staehr, stavn    |
|            4 |     1350 | 2024-11-20 | 9Pandas         | L   | 0.282      | -            | -                | -                | -         |    -8.83 | br0, cadiaN, jabbi, Staehr, stavn    |
|            3 |     1716 | 2024-11-02 | Team Spirit     | L   | 0.157      | -            | -                | -                | -         |    -1.79 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            2 |     1756 | 2024-10-31 | MOUZ            | W   | 0.143      | 1.000        | 1.000 (0.143)    | -                | -         |     3.04 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            1 |     1776 | 2024-10-29 | Natus Vincere   | W   | 0.135      | 1.000        | 0.423 (0.057)    | -                | -         |     0.66 | cadiaN, dev1ce, jabbi, Staehr, stavn |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($163,640.00)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.73) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      0.912 | $150,000.00    | $136,743.06     |
| 2025-02-09 |      0.818 | $16,000.00     | $13,084.44      |
| 2024-11-03 |      0.163 | $85,000.00     | $13,812.50      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
