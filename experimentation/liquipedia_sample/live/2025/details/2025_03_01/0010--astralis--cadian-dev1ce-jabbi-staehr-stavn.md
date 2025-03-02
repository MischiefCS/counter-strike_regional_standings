### Roster Details<br />
Team Name: Astralis<br />
Roster: cadiaN, dev1ce, jabbi, Staehr, stavn<br />
Global Rank: [10](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [9]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  1704.9<br />
<br />
Final Rank Value (1704.9) = Starting Rank Value (1850.1) + Head To Head Adjustments (-145.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.823[<sup>1</sup>](#table2)
- Bounty Collected: 0.687[<sup>2</sup>](#table1)
- Opponent Network: 0.435[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.736<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1850.1
- 400 + ( ( 0.736 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 1850.1


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
|           41 |       90 | 2025-02-23 | FaZe Clan       | W   | 1.000      | 1.000        | 0.744 (0.744)    | 0.529 (0.529)    | 1 (1.000) |    22.60 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           40 |      106 | 2025-02-22 | MOUZ            | L   | 1.000      | -            | -                | -                | -         |    -8.48 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           39 |      142 | 2025-02-21 | The MongolZ     | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.636 (0.636)    | 1 (1.000) |    25.04 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           38 |      154 | 2025-02-20 | HEROIC          | L   | 1.000      | -            | -                | -                | -         |   -29.64 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           37 |      181 | 2025-02-18 | BIG             | W   | 1.000      | 1.000        | 0.246 (0.246)    | 0.616 (0.616)    | 1 (1.000) |     4.34 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           36 |      191 | 2025-02-17 | MIBR            | W   | 1.000      | 1.000        | 0.141 (0.141)    | 0.507 (0.507)    | 1 (1.000) |     4.30 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           35 |      210 | 2025-02-16 | Team Falcons    | L   | 1.000      | -            | -                | -                | -         |   -11.18 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           34 |      225 | 2025-02-15 | SAW             | W   | 1.000      | 1.000        | 0.262 (0.262)    | 0.362 (0.362)    | 1 (1.000) |     2.20 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           33 |      255 | 2025-02-14 | PaiN Gaming     | L   | 1.000      | -            | -                | -                | -         |   -21.49 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           32 |      312 | 2025-02-11 | BetBoom Team    | W   | 1.000      | -            | -                | -                | -         |     0.89 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           31 |      319 | 2025-02-11 | Zero Tenacity   | W   | 1.000      | -            | -                | -                | -         |     0.33 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           30 |      346 | 2025-02-10 | BC.Game Esports | L   | 1.000      | -            | -                | -                | -         |   -30.49 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           29 |      357 | 2025-02-10 | OG              | W   | 1.000      | -            | -                | -                | -         |     0.30 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           28 |      381 | 2025-02-09 | PARIVISION      | W   | 1.000      | -            | -                | -                | -         |     0.17 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           27 |      385 | 2025-02-09 | 500             | W   | 1.000      | -            | -                | -                | -         |     0.65 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           26 |      460 | 2025-02-08 | 9INE            | W   | 1.000      | -            | -                | -                | -         |     0.35 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           25 |      626 | 2025-02-04 | GamerLegion     | L   | 1.000      | -            | -                | -                | -         |   -22.05 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           24 |      635 | 2025-02-03 | FURIA           | W   | 1.000      | 1.000        | -                | 0.422 (0.422)    | 1 (1.000) |     4.29 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           23 |      651 | 2025-02-02 | Team Spirit     | L   | 1.000      | -            | -                | -                | -         |    -7.01 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           22 |      681 | 2025-01-31 | PaiN Gaming     | W   | 1.000      | 1.000        | 0.318 (0.318)    | 0.610 (0.610)    | 1 (1.000) |     8.71 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           21 |      691 | 2025-01-30 | FlyQuest        | W   | 0.999      | 1.000        | 0.105 (0.105)    | 0.263 (0.263)    | 1 (0.999) |     1.00 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           20 |      702 | 2025-01-29 | MIBR            | L   | 0.992      | -            | -                | -                | -         |   -27.67 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           19 |      770 | 2025-01-18 | Natus Vincere   | L   | 0.920      | -            | -                | -                | -         |   -18.11 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           18 |      785 | 2025-01-15 | Wildcard        | W   | 0.898      | -            | -                | -                | -         |     2.21 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           17 |     2392 | 2024-11-23 | Passion UA      | L   | 0.550      | -            | -                | -                | -         |   -17.12 | br0, cadiaN, jabbi, Staehr, stavn    |
|           16 |     2474 | 2024-11-23 | Eternal Fire    | W   | 0.544      | -            | -                | -                | 1 (0.544) |     8.85 | br0, cadiaN, jabbi, Staehr, stavn    |
|           15 |     2559 | 2024-11-22 | B8              | W   | 0.538      | -            | -                | -                | 1 (0.538) |     0.42 | br0, cadiaN, jabbi, Staehr, stavn    |
|           14 |     2612 | 2024-11-21 | Sashi Esport    | L   | 0.532      | -            | -                | -                | -         |   -16.62 | br0, cadiaN, jabbi, Staehr, stavn    |
|           13 |     2629 | 2024-11-20 | 9Pandas         | L   | 0.530      | -            | -                | -                | -         |   -16.50 | br0, cadiaN, jabbi, Staehr, stavn    |
|           12 |     3672 | 2024-11-02 | Team Spirit     | L   | 0.405      | -            | -                | -                | -         |    -4.02 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           11 |     3783 | 2024-10-31 | MOUZ            | W   | 0.391      | 1.000        | 1.000 (0.391)    | 0.519 (0.203)    | -         |     8.57 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           10 |     3853 | 2024-10-29 | Natus Vincere   | W   | 0.383      | 1.000        | 0.555 (0.213)    | 0.525 (0.201)    | -         |     4.13 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            9 |     4841 | 2024-10-09 | Virtus.pro      | L   | 0.246      | -            | -                | -                | -         |    -5.74 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            8 |     4898 | 2024-10-08 | Team Falcons    | L   | 0.240      | -            | -                | -                | -         |    -3.16 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            7 |     4950 | 2024-10-07 | Eternal Fire    | W   | 0.233      | 0.624        | 0.591 (0.086)    | -                | -         |     4.13 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            6 |     5655 | 2024-09-26 | Team Spirit     | L   | 0.159      | -            | -                | -                | -         |    -1.54 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            5 |     5742 | 2024-09-25 | Team Vitality   | L   | 0.153      | -            | -                | -                | -         |    -1.96 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            4 |     6421 | 2024-09-14 | Complexity      | L   | 0.079      | -            | -                | -                | -         |    -2.44 | br0, dev1ce, jabbi, Staehr, stavn    |
|            3 |     6508 | 2024-09-13 | Rooster         | W   | 0.072      | -            | -                | -                | -         |     0.00 | br0, dev1ce, jabbi, Staehr, stavn    |
|            2 |     6606 | 2024-09-11 | Complexity      | L   | 0.059      | -            | -                | -                | -         |    -1.83 | br0, dev1ce, jabbi, Staehr, stavn    |
|            1 |     6673 | 2024-09-10 | Fnatic          | L   | 0.052      | -            | -                | -                | -         |    -1.60 | br0, dev1ce, jabbi, Staehr, stavn    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($205,002.50)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.61) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      1.000 | $150,000.00    | $150,000.00     |
| 2025-02-09 |      1.000 | $16,000.00     | $16,000.00      |
| 2024-11-03 |      0.411 | $85,000.00     | $34,920.83      |
| 2024-10-13 |      0.273 | $5,000.00      | $1,365.28       |
| 2024-09-29 |      0.179 | $10,000.00     | $1,788.89       |
| 2024-09-22 |      0.133 | $7,000.00      | $927.50         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
