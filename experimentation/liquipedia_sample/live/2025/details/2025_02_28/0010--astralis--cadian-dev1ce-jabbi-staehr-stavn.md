### Roster Details<br />
Team Name: Astralis<br />
Roster: cadiaN, dev1ce, jabbi, Staehr, stavn<br />
Global Rank: [10](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [9]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  1711.2<br />
<br />
Final Rank Value (1711.2) = Starting Rank Value (1888.4) + Head To Head Adjustments (-177.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.875[<sup>1</sup>](#table2)
- Bounty Collected: 0.675[<sup>2</sup>](#table1)
- Opponent Network: 0.333[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.721<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1888.4
- 400 + ( ( 0.721 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1888.4


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
|           41 |      173 | 2025-02-23 | FaZe Clan       | W   | 1.000      | 1.000        | 0.467 (0.467)    | 0.420 (0.420)    | 1 (1.000) |    19.68 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           40 |      190 | 2025-02-22 | MOUZ            | L   | 1.000      | -            | -                | -                | -         |    -9.15 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           39 |      226 | 2025-02-21 | The MongolZ     | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.489 (0.489)    | 1 (1.000) |    22.31 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           38 |      241 | 2025-02-20 | HEROIC          | L   | 1.000      | -            | -                | -                | -         |   -29.58 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           37 |      313 | 2025-02-18 | BIG             | W   | 1.000      | 1.000        | 0.242 (0.242)    | 0.563 (0.563)    | 1 (1.000) |     3.74 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           36 |      323 | 2025-02-17 | MIBR            | W   | 1.000      | 1.000        | 0.119 (0.119)    | 0.306 (0.306)    | 1 (1.000) |     1.22 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           35 |      343 | 2025-02-16 | Team Falcons    | L   | 1.000      | -            | -                | -                | -         |   -11.16 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           34 |      359 | 2025-02-15 | SAW             | W   | 1.000      | 1.000        | 0.310 (0.310)    | 0.354 (0.354)    | 1 (1.000) |     2.81 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           33 |      389 | 2025-02-14 | PaiN Gaming     | L   | 1.000      | -            | -                | -                | -         |   -24.95 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           32 |      451 | 2025-02-11 | BetBoom Team    | W   | 1.000      | -            | -                | -                | -         |     0.94 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           31 |      459 | 2025-02-11 | Zero Tenacity   | W   | 1.000      | -            | -                | -                | -         |     0.35 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           30 |      486 | 2025-02-10 | BC.Game Esports | L   | 1.000      | -            | -                | -                | -         |   -30.42 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           29 |      495 | 2025-02-10 | OG              | W   | 1.000      | -            | -                | -                | -         |     0.37 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           28 |      523 | 2025-02-09 | PARIVISION      | W   | 1.000      | -            | -                | -                | -         |     0.20 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           27 |      528 | 2025-02-09 | 500             | W   | 1.000      | -            | -                | -                | -         |     0.74 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           26 |      603 | 2025-02-08 | 9INE            | W   | 1.000      | -            | -                | -                | -         |     0.38 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           25 |      780 | 2025-02-04 | GamerLegion     | L   | 1.000      | -            | -                | -                | -         |   -25.04 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           24 |      790 | 2025-02-03 | FURIA           | W   | 1.000      | 1.000        | -                | 0.194 (0.194)    | 1 (1.000) |     0.97 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           23 |      806 | 2025-02-02 | Team Spirit     | L   | 1.000      | -            | -                | -                | -         |    -8.26 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           22 |      835 | 2025-01-31 | PaiN Gaming     | W   | 1.000      | 1.000        | 0.327 (0.327)    | 0.433 (0.433)    | 1 (1.000) |     5.22 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           21 |      846 | 2025-01-30 | FlyQuest        | W   | 1.000      | 1.000        | 0.100 (0.100)    | 0.211 (0.211)    | 1 (1.000) |     0.48 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           20 |      857 | 2025-01-29 | MIBR            | L   | 0.998      | -            | -                | -                | -         |   -30.77 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           19 |     1040 | 2025-01-18 | Natus Vincere   | L   | 0.927      | -            | -                | -                | -         |   -18.69 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           18 |     1055 | 2025-01-15 | Wildcard        | W   | 0.904      | -            | -                | -                | -         |     0.54 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           17 |     2623 | 2024-11-23 | Passion UA      | L   | 0.556      | -            | -                | -                | -         |   -17.40 | br0, cadiaN, jabbi, Staehr, stavn    |
|           16 |     2713 | 2024-11-23 | Eternal Fire    | W   | 0.551      | -            | -                | -                | 1 (0.551) |     9.63 | br0, cadiaN, jabbi, Staehr, stavn    |
|           15 |     2799 | 2024-11-22 | B8              | W   | 0.544      | -            | -                | -                | 1 (0.544) |     0.52 | br0, cadiaN, jabbi, Staehr, stavn    |
|           14 |     2856 | 2024-11-21 | Sashi Esport    | L   | 0.538      | -            | -                | -                | -         |   -16.81 | br0, cadiaN, jabbi, Staehr, stavn    |
|           13 |     2871 | 2024-11-20 | 9Pandas         | L   | 0.536      | -            | -                | -                | -         |   -16.66 | br0, cadiaN, jabbi, Staehr, stavn    |
|           12 |     3922 | 2024-11-02 | Team Spirit     | L   | 0.411      | -            | -                | -                | -         |    -4.64 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           11 |     4042 | 2024-10-31 | MOUZ            | W   | 0.397      | 1.000        | 1.000 (0.397)    | 0.441 (0.175)    | -         |     7.73 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           10 |     4114 | 2024-10-29 | Natus Vincere   | W   | 0.390      | 1.000        | 0.613 (0.239)    | 0.464 (0.181)    | -         |     3.75 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            9 |     5134 | 2024-10-09 | Virtus.pro      | L   | 0.252      | -            | -                | -                | -         |    -5.86 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            8 |     5201 | 2024-10-08 | Team Falcons    | L   | 0.246      | -            | -                | -                | -         |    -3.51 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            7 |     5255 | 2024-10-07 | Eternal Fire    | W   | 0.239      | 0.624        | 0.699 (0.104)    | -                | -         |     4.55 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            6 |     5992 | 2024-09-26 | Team Spirit     | L   | 0.165      | -            | -                | -                | -         |    -1.81 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            5 |     6083 | 2024-09-25 | Team Vitality   | L   | 0.159      | -            | -                | -                | -         |    -2.22 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            4 |     6794 | 2024-09-14 | Complexity      | L   | 0.085      | -            | -                | -                | -         |    -2.66 | br0, dev1ce, jabbi, Staehr, stavn    |
|            3 |     6883 | 2024-09-13 | Rooster         | W   | 0.078      | -            | -                | -                | -         |     0.00 | br0, dev1ce, jabbi, Staehr, stavn    |
|            2 |     6981 | 2024-09-11 | Complexity      | L   | 0.065      | -            | -                | -                | -         |    -2.04 | br0, dev1ce, jabbi, Staehr, stavn    |
|            1 |     7048 | 2024-09-10 | Fnatic          | L   | 0.057      | -            | -                | -                | -         |    -1.79 | br0, dev1ce, jabbi, Staehr, stavn    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($205,662.66)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.72) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      1.000 | $150,000.00    | $150,000.00     |
| 2025-02-09 |      1.000 | $16,000.00     | $16,000.00      |
| 2024-11-03 |      0.417 | $85,000.00     | $35,450.12      |
| 2024-10-13 |      0.279 | $5,000.00      | $1,395.02       |
| 2024-09-29 |      0.185 | $10,000.00     | $1,848.38       |
| 2024-09-22 |      0.138 | $7,000.00      | $969.14         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
