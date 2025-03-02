### Roster Details<br />
Team Name: OG<br />
Roster: afro, Buzz, Chr1zN, F1KU, spooke<br />
Global Rank: [40](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [33]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  1196.1<br />
<br />
Final Rank Value (1196.1) = Starting Rank Value (1155.5) + Head To Head Adjustments (40.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.469[<sup>1</sup>](#table2)
- Bounty Collected: 0.458[<sup>2</sup>](#table1)
- Opponent Network: 0.587[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.379<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1155.5
- 400 + ( ( 0.379 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 1155.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent              | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           40 |      112 | 2025-02-25 | ESC Gaming            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.29 | afro, Buzz, Chr1zN, F1KU, spooke     |
|           39 |      142 | 2025-02-24 | Iberian Soul          | L   | 1.000      | -            | -                | -                | -         |   -20.18 | Buzz, Chr1zN, F1KU, nicoodoz, spooke |
|           38 |      152 | 2025-02-24 | Tricked Esport        | W   | 1.000      | 1.000        | 0.040 (0.040)    | 0.628 (0.628)    | 0 (0.000) |     9.93 | afro, Buzz, Chr1zN, F1KU, spooke     |
|           37 |      188 | 2025-02-22 | BC.Game Esports       | W   | 1.000      | 1.000        | 0.092 (0.092)    | 0.809 (0.809)    | 0 (0.000) |    26.48 | Buzz, Chr1zN, F1KU, nicoodoz, spooke |
|           36 |      224 | 2025-02-21 | Aurora Gaming         | W   | 1.000      | 1.000        | 0.023 (0.023)    | 0.599 (0.599)    | 0 (0.000) |    10.71 | Buzz, Chr1zN, F1KU, nicoodoz, spooke |
|           35 |      485 | 2025-02-10 | BIG                   | L   | 1.000      | -            | -                | -                | -         |    -5.27 | Buzz, Chr1zN, F1KU, MoDo, spooke     |
|           34 |      495 | 2025-02-10 | Astralis              | L   | 1.000      | -            | -                | -                | -         |    -0.66 | Buzz, Chr1zN, F1KU, MoDo, spooke     |
|           33 |      526 | 2025-02-09 | RUSH B (Russian team) | L   | 1.000      | -            | -                | -                | -         |   -14.59 | Buzz, Chr1zN, F1KU, MoDo, spooke     |
|           32 |      531 | 2025-02-09 | Sashi Esport          | L   | 1.000      | -            | -                | -                | -         |   -15.40 | Buzz, Chr1zN, F1KU, MoDo, spooke     |
|           31 |      562 | 2025-02-08 | TEAM NEXT LEVEL       | W   | 1.000      | 1.000        | -                | 0.298 (0.298)    | 0 (0.000) |     4.02 | Buzz, Chr1zN, F1KU, MoDo, spooke     |
|           30 |      571 | 2025-02-08 | Benched               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.50 | Buzz, Chr1zN, F1KU, MoDo, spooke     |
|           29 |      581 | 2025-02-08 | 500                   | L   | 1.000      | -            | -                | -                | -         |   -11.35 | Buzz, Chr1zN, F1KU, MoDo, spooke     |
|           28 |      591 | 2025-02-08 | Mission Possible      | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.35 | Buzz, Chr1zN, F1KU, MoDo, spooke     |
|           27 |      659 | 2025-02-07 | Nuclear TigeRES       | W   | 1.000      | 1.000        | -                | 0.531 (0.531)    | 0 (0.000) |     4.55 | Buzz, Chr1zN, F1KU, MoDo, spooke     |
|           26 |      677 | 2025-02-07 | AMKAL ESPORTS         | W   | 1.000      | 1.000        | -                | 0.533 (0.533)    | 0 (0.000) |    10.41 | Buzz, Chr1zN, F1KU, MoDo, spooke     |
|           25 |      722 | 2025-02-06 | Alliance              | W   | 1.000      | 1.000        | 0.018 (0.018)    | 0.515 (0.515)    | 0 (0.000) |    12.69 | Buzz, Chr1zN, F1KU, MoDo, spooke     |
|           24 |      730 | 2025-02-05 | SINNERS Esports       | W   | 1.000      | 1.000        | 0.033 (0.033)    | 0.633 (0.633)    | -         |    15.93 | Buzz, Chr1zN, F1KU, MoDo, spooke     |
|           23 |      794 | 2025-02-03 | Natus Vincere Junior  | W   | 1.000      | 1.000        | 0.108 (0.108)    | 1.000 (1.000)    | -         |    19.66 | Buzz, Chr1zN, F1KU, MoDo, spooke     |
|           22 |      827 | 2025-02-01 | Fnatic                | L   | 1.000      | -            | -                | -                | -         |    -7.83 | Buzz, Chr1zN, F1KU, MoDo, spooke     |
|           21 |     3424 | 2024-11-10 | Johnny Speeds         | L   | 0.466      | -            | -                | -                | -         |    -8.83 | Buzz, Chr1zN, F1KU, M1key, MoDo      |
|           20 |     3606 | 2024-11-07 | Natus Vincere Junior  | L   | 0.446      | -            | -                | -                | -         |    -5.01 | Buzz, Chr1zN, F1KU, M1key, MoDo      |
|           19 |     3627 | 2024-11-07 | Sashi Esport          | L   | 0.445      | -            | -                | -                | -         |    -5.79 | Buzz, Chr1zN, F1KU, M1key, MoDo      |
|           18 |     3653 | 2024-11-06 | BetBoom Team          | W   | 0.440      | 1.000        | 0.123 (0.054)    | -                | -         |     7.89 | Buzz, Chr1zN, F1KU, M1key, MoDo      |
|           17 |     3708 | 2024-11-05 | Los kogutos           | W   | 0.433      | -            | -                | -                | -         |     4.47 | Buzz, Chr1zN, F1KU, M1key, MoDo      |
|           16 |     3844 | 2024-11-03 | 3DMAX                 | L   | 0.418      | -            | -                | -                | -         |    -1.00 | Buzz, Chr1zN, F1KU, M1key, MoDo      |
|           15 |     3908 | 2024-11-02 | Team Falcons          | L   | 0.412      | -            | -                | -                | -         |    -0.19 | Buzz, Chr1zN, F1KU, M1key, MoDo      |
|           14 |     3976 | 2024-11-01 | Johnny Speeds         | L   | 0.405      | -            | -                | -                | -         |    -7.84 | Buzz, Chr1zN, F1KU, M1key, MoDo      |
|           13 |     4110 | 2024-10-30 | 9INE                  | L   | 0.390      | -            | -                | -                | -         |   -10.02 | Buzz, Chr1zN, F1KU, M1key, MoDo      |
|           12 |     4160 | 2024-10-29 | Zero Tenacity         | W   | 0.385      | 1.000        | -                | 0.842 (0.324)    | -         |     5.05 | Buzz, Chr1zN, F1KU, M1key, MoDo      |
|           11 |     4166 | 2024-10-29 | Wu-Tang Clan          | W   | 0.384      | -            | -                | -                | -         |     0.38 | Buzz, Chr1zN, F1KU, M1key, MoDo      |
|           10 |     4217 | 2024-10-28 | 500                   | L   | 0.379      | -            | -                | -                | -         |    -3.61 | Buzz, Chr1zN, F1KU, M1key, MoDo      |
|            9 |     4333 | 2024-10-26 | BIG                   | W   | 0.364      | 1.000        | 0.242 (0.088)    | -                | -         |    10.18 | Buzz, Chr1zN, F1KU, M1key, MoDo      |
|            8 |     4382 | 2024-10-25 | Virtus.pro            | W   | 0.358      | 1.000        | 0.292 (0.104)    | -                | -         |    10.73 | Buzz, Chr1zN, F1KU, M1key, MoDo      |
|            7 |     4501 | 2024-10-21 | 3DMAX                 | L   | 0.333      | -            | -                | -                | -         |    -0.77 | Buzz, Chr1zN, F1KU, M1key, MoDo      |
|            6 |     4529 | 2024-10-21 | Virtus.pro            | W   | 0.331      | 1.000        | 0.292 (0.097)    | -                | -         |     9.97 | Buzz, Chr1zN, F1KU, M1key, MoDo      |
|            5 |     5073 | 2024-10-10 | Team Spirit Academy   | L   | 0.258      | -            | -                | -                | -         |    -3.17 | Buzz, Chr1zN, F1KU, MoDo, spooke     |
|            4 |     5902 | 2024-09-27 | GameAgents            | L   | 0.173      | -            | -                | -                | -         |    -4.67 | Buzz, Chr1zN, F1KU, MoDo, Nexius     |
|            3 |     5927 | 2024-09-27 | B8                    | L   | 0.171      | -            | -                | -                | -         |    -0.91 | Buzz, Chr1zN, F1KU, MoDo, Nexius     |
|            2 |     6808 | 2024-09-14 | Sashi Esport          | L   | 0.085      | -            | -                | -                | -         |    -0.91 | Buzz, Chr1zN, F1KU, MoDo, Nexius     |
|            1 |     6942 | 2024-09-12 | Team Sampi            | W   | 0.070      | -            | -                | -                | -         |     0.41 | Buzz, Chr1zN, F1KU, MoDo, Nexius     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($21,135.48)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-09 |      0.459 | $15.18         | $6.96           |
| 2024-11-03 |      0.419 | $50,000.00     | $20,957.18      |
| 2024-09-14 |      0.086 | $2,000.00      | $171.34         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
