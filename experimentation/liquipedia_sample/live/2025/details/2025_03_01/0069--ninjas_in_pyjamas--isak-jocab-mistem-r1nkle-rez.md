### Roster Details<br />
Team Name: Ninjas in Pyjamas<br />
Roster: isak, jocab, MisteM, r1nkle, REZ<br />
Global Rank: [69](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [52]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  901.6<br />
<br />
Final Rank Value (901.6) = Starting Rank Value (881.7) + Head To Head Adjustments (19.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.383[<sup>1</sup>](#table2)
- Bounty Collected: 0.303[<sup>2</sup>](#table1)
- Opponent Network: 0.050[<sup>2</sup>](#table1)
- LAN Wins: 0.242[<sup>2</sup>](#table1)

The average of these factors is 0.245<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 881.7
- 400 + ( ( 0.245 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 881.7


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
|           21 |     2378 | 2024-11-24 | Team Spirit      | L   | 0.552      | -            | -                | -                | -         |    -0.05 | isak, jocab, MisteM, r1nkle, REZ   |
|           20 |     2395 | 2024-11-23 | 9Pandas          | W   | 0.549      | 0.143        | 0.088 (0.007)    | 0.627 (0.049)    | 1 (0.549) |    12.47 | isak, jocab, MisteM, r1nkle, REZ   |
|           19 |     2481 | 2024-11-22 | TSM              | W   | 0.544      | 0.143        | 0.009 (0.001)    | 0.141 (0.011)    | 1 (0.544) |     5.48 | isak, jocab, MisteM, r1nkle, REZ   |
|           18 |     2568 | 2024-11-21 | Team Falcons     | L   | 0.536      | -            | -                | -                | -         |    -0.07 | isak, jocab, MisteM, r1nkle, REZ   |
|           17 |     2619 | 2024-11-21 | PARIVISION       | W   | 0.531      | 0.143        | 0.006 (0.000)    | 0.066 (0.005)    | 1 (0.531) |     5.24 | isak, jocab, MisteM, r1nkle, REZ   |
|           16 |     2633 | 2024-11-20 | G2 Esports       | L   | 0.530      | -            | -                | -                | -         |    -0.08 | isak, jocab, MisteM, r1nkle, REZ   |
|           15 |     3100 | 2024-11-12 | BetBoom Team     | L   | 0.472      | -            | -                | -                | -         |    -4.88 | isak, jocab, MisteM, r1nkle, REZ   |
|           14 |     3142 | 2024-11-11 | Zero Tenacity    | W   | 0.467      | 0.384        | 0.028 (0.005)    | 0.786 (0.141)    | 0 (0.000) |     6.89 | isak, jocab, MisteM, r1nkle, REZ   |
|           13 |     3262 | 2024-11-09 | Metizport        | L   | 0.453      | -            | -                | -                | -         |    -3.32 | isak, jocab, MisteM, r1nkle, REZ   |
|           12 |     3334 | 2024-11-08 | Alliance         | W   | 0.446      | 0.428        | 0.015 (0.003)    | 0.519 (0.099)    | 1 (0.446) |     7.45 | isak, jocab, MisteM, r1nkle, REZ   |
|           11 |     4113 | 2024-10-25 | Imperial Esports | L   | 0.353      | -            | -                | -                | -         |    -3.93 | isak, jocab, MisteM, r1nkle, REZ   |
|           10 |     4162 | 2024-10-23 | Team Falcons     | L   | 0.341      | -            | -                | -                | -         |    -0.04 | isak, jocab, MisteM, r1nkle, REZ   |
|            9 |     4196 | 2024-10-23 | Imperial Esports | W   | 0.339      | 0.934        | 0.091 (0.029)    | 0.619 (0.196)    | 0 (0.000) |     6.98 | isak, jocab, MisteM, r1nkle, REZ   |
|            8 |     4506 | 2024-10-16 | JANO Esports     | L   | 0.293      | -            | -                | -                | -         |    -4.53 | isak, jocab, MisteM, r1nkle, REZ   |
|            7 |     4520 | 2024-10-16 | B8               | L   | 0.292      | -            | -                | -                | -         |    -1.69 | isak, jocab, MisteM, r1nkle, REZ   |
|            6 |     5160 | 2024-10-04 | ECSTATIC         | L   | 0.211      | -            | -                | -                | -         |    -3.21 | isak, jocab, MisteM, r1nkle, REZ   |
|            5 |     5722 | 2024-09-25 | ARCRED           | L   | 0.154      | -            | -                | -                | -         |    -3.01 | isak, maxster, MisteM, r1nkle, REZ |
|            4 |     6838 | 2024-09-07 | Team Falcons     | L   | 0.032      | -            | -                | -                | -         |    -0.00 | alex, isak, maxster, r1nkle, REZ   |
|            3 |     6984 | 2024-09-05 | FaZe Clan        | L   | 0.020      | -            | -                | -                | -         |    -0.00 | alex, isak, maxster, r1nkle, REZ   |
|            2 |     7061 | 2024-09-04 | Natus Vincere    | L   | 0.013      | -            | -                | -                | -         |    -0.00 | alex, isak, maxster, r1nkle, REZ   |
|            1 |     7136 | 2024-09-03 | Team Falcons     | W   | 0.006      | 0.889        | 0.927 (0.005)    | 0.674 (0.003)    | 1 (0.006) |     0.18 | alex, isak, maxster, r1nkle, REZ   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,256.58)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-12 |      0.473 | $1,500.00      | $708.92         |
| 2024-11-09 |      0.453 | $11,097.44     | $5,024.67       |
| 2024-10-20 |      0.319 | $5,000.00      | $1,595.49       |
| 2024-09-22 |      0.133 | $7,000.00      | $927.50         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
