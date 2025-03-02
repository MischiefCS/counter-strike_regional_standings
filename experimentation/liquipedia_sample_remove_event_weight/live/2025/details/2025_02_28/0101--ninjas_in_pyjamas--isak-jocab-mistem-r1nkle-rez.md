### Roster Details<br />
Team Name: Ninjas in Pyjamas<br />
Roster: isak, jocab, MisteM, r1nkle, REZ<br />
Global Rank: [101](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [74]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  1005.0<br />
<br />
Final Rank Value (1005.0) = Starting Rank Value (968.6) + Head To Head Adjustments (36.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.395[<sup>1</sup>](#table2)
- Bounty Collected: 0.348[<sup>2</sup>](#table1)
- Opponent Network: 0.132[<sup>2</sup>](#table1)
- LAN Wins: 0.266[<sup>2</sup>](#table1)

The average of these factors is 0.285<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 968.6
- 400 + ( ( 0.285 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 968.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |     2609 | 2024-11-24 | Team Spirit      | L   | 0.558      | -            | -                | -                | -         |    -0.09 | isak, jocab, MisteM, r1nkle, REZ   |
|           20 |     2626 | 2024-11-23 | 9Pandas          | W   | 0.555      | 1.000        | 0.104 (0.058)    | 0.671 (0.373)    | 1 (0.555) |    14.94 | isak, jocab, MisteM, r1nkle, REZ   |
|           19 |     2719 | 2024-11-22 | TSM              | W   | 0.550      | 1.000        | 0.011 (0.006)    | 0.142 (0.078)    | 1 (0.550) |     5.30 | isak, jocab, MisteM, r1nkle, REZ   |
|           18 |     2807 | 2024-11-21 | Team Falcons     | L   | 0.543      | -            | -                | -                | -         |    -0.11 | isak, jocab, MisteM, r1nkle, REZ   |
|           17 |     2863 | 2024-11-21 | PARIVISION       | W   | 0.537      | 1.000        | 0.008 (0.004)    | 0.066 (0.035)    | 1 (0.537) |     4.54 | isak, jocab, MisteM, r1nkle, REZ   |
|           16 |     2876 | 2024-11-20 | G2 Esports       | L   | 0.536      | -            | -                | -                | -         |    -0.17 | isak, jocab, MisteM, r1nkle, REZ   |
|           15 |     3343 | 2024-11-12 | BetBoom Team     | L   | 0.478      | -            | -                | -                | -         |    -3.16 | isak, jocab, MisteM, r1nkle, REZ   |
|           14 |     3374 | 2024-11-11 | Zero Tenacity    | W   | 0.473      | 1.000        | 0.033 (0.016)    | 0.842 (0.398)    | 0 (0.000) |    10.52 | isak, jocab, MisteM, r1nkle, REZ   |
|           13 |     3497 | 2024-11-09 | Metizport        | L   | 0.459      | -            | -                | -                | -         |    -1.66 | isak, jocab, MisteM, r1nkle, REZ   |
|           12 |     3573 | 2024-11-08 | Alliance         | W   | 0.452      | 1.000        | 0.018 (0.008)    | 0.515 (0.233)    | 1 (0.452) |    10.11 | isak, jocab, MisteM, r1nkle, REZ   |
|           11 |     4375 | 2024-10-25 | Imperial Esports | L   | 0.359      | -            | -                | -                | -         |    -3.40 | isak, jocab, MisteM, r1nkle, REZ   |
|           10 |     4424 | 2024-10-23 | Team Falcons     | L   | 0.347      | -            | -                | -                | -         |    -0.06 | isak, jocab, MisteM, r1nkle, REZ   |
|            9 |     4460 | 2024-10-23 | Imperial Esports | W   | 0.345      | 1.000        | 0.084 (0.029)    | 0.554 (0.191)    | 0 (0.000) |     7.66 | isak, jocab, MisteM, r1nkle, REZ   |
|            8 |     4780 | 2024-10-16 | JANO Esports     | L   | 0.299      | -            | -                | -                | -         |    -3.36 | isak, jocab, MisteM, r1nkle, REZ   |
|            7 |     4795 | 2024-10-16 | B8               | L   | 0.298      | -            | -                | -                | -         |    -0.59 | isak, jocab, MisteM, r1nkle, REZ   |
|            6 |     5473 | 2024-10-04 | ECSTATIC         | L   | 0.217      | -            | -                | -                | -         |    -1.75 | isak, jocab, MisteM, r1nkle, REZ   |
|            5 |     6064 | 2024-09-25 | ARCRED           | L   | 0.160      | -            | -                | -                | -         |    -2.60 | isak, maxster, MisteM, r1nkle, REZ |
|            4 |     7216 | 2024-09-07 | Team Falcons     | L   | 0.038      | -            | -                | -                | -         |    -0.01 | alex, isak, maxster, r1nkle, REZ   |
|            3 |     7372 | 2024-09-05 | FaZe Clan        | L   | 0.026      | -            | -                | -                | -         |    -0.01 | alex, isak, maxster, r1nkle, REZ   |
|            2 |     7453 | 2024-09-04 | Natus Vincere    | L   | 0.019      | -            | -                | -                | -         |    -0.01 | alex, isak, maxster, r1nkle, REZ   |
|            1 |     7533 | 2024-09-03 | Team Falcons     | W   | 0.012      | 1.000        | 0.987 (0.012)    | 0.594 (0.007)    | 1 (0.012) |     0.37 | alex, isak, maxster, r1nkle, REZ   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,406.42)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-12 |      0.479 | $1,500.00      | $718.26         |
| 2024-11-09 |      0.459 | $11,097.44     | $5,093.78       |
| 2024-10-20 |      0.325 | $5,000.00      | $1,625.23       |
| 2024-09-22 |      0.138 | $7,000.00      | $969.14         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
