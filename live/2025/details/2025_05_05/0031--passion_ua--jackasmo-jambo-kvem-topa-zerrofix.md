### Roster Details<br />
Team Name: Passion UA<br />
Roster: jackasmo, jambo, Kvem, Topa, zeRRoFIX<br />
Global Rank: [31](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [21]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  910.2<br />
<br />
Final Rank Value (910.2) = Starting Rank Value (893.5) + Head To Head Adjustments (16.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.401[<sup>1</sup>](#table2)
- Bounty Collected: 0.339[<sup>2</sup>](#table1)
- Opponent Network: 0.036[<sup>2</sup>](#table1)
- LAN Wins: 0.130[<sup>2</sup>](#table1)

The average of these factors is 0.227<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 893.5
- 400 + ( ( 0.227 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 893.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |      140 | 2025-02-21 | GUN5 Esports           | L   | 0.711      | -            | -                | -                | -         |   -12.60 | jackasmo, jambo, Kvem, Topa, zeRRoFIX     |
|           16 |      264 | 2025-02-14 | ENCE                   | L   | 0.665      | -            | -                | -                | -         |   -14.08 | jackasmo, jambo, Kvem, Topa, zeRRoFIX     |
|           15 |      292 | 2025-02-13 | Betclic Apogee Esports | W   | 0.658      | 0.435        | 0.011 (0.003)    | 0.582 (0.166)    | 0 (0.000) |     7.30 | jackasmo, jambo, Kvem, Topa, zeRRoFIX     |
|           14 |      469 | 2025-02-08 | HEROIC                 | L   | 0.623      | -            | -                | -                | -         |    -6.77 | jackasmo, jambo, Kvem, Topa, zeRRoFIX     |
|           13 |      503 | 2025-02-07 | BetBoom Team           | W   | 0.616      | 0.143        | 0.110 (0.010)    | 0.335 (0.029)    | 0 (0.000) |    10.04 | jackasmo, jambo, Kvem, Topa, zeRRoFIX     |
|           12 |      559 | 2025-02-05 | BetBoom Team           | W   | 0.604      | 0.143        | 0.110 (0.009)    | 0.335 (0.029)    | 0 (0.000) |    10.33 | jackasmo, jambo, Kvem, Topa, zeRRoFIX     |
|           11 |      568 | 2025-02-05 | Metizport              | W   | 0.603      | 0.143        | 0.033 (0.003)    | 0.307 (0.026)    | 0 (0.000) |     6.57 | jackasmo, jambo, Kvem, Topa, zeRRoFIX     |
|           10 |     1100 | 2024-12-03 | Wildcard               | L   | 0.176      | -            | -                | -                | -         |    -0.81 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|            9 |     1121 | 2024-12-02 | GamerLegion            | L   | 0.169      | -            | -                | -                | -         |    -0.22 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|            8 |     1144 | 2024-11-30 | MIBR                   | W   | 0.161      | 1.000        | 0.177 (0.028)    | 0.386 (0.062)    | 1 (0.161) |     4.54 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|            7 |     1169 | 2024-11-30 | Complexity             | W   | 0.156      | 1.000        | 0.145 (0.023)    | 0.125 (0.020)    | 1 (0.156) |     3.21 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|            6 |     1176 | 2024-11-29 | BIG                    | L   | 0.155      | -            | -                | -                | -         |    -0.24 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|            5 |     1268 | 2024-11-23 | Astralis               | W   | 0.115      | 0.143        | 0.973 (0.016)    | 1.000 (0.016)    | 1 (0.115) |     3.60 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|            4 |     1294 | 2024-11-22 | Team Falcons           | L   | 0.109      | -            | -                | -                | -         |    -0.01 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|            3 |     1325 | 2024-11-21 | BIG                    | L   | 0.102      | -            | -                | -                | -         |    -0.15 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|            2 |     1343 | 2024-11-21 | Team Spirit            | W   | 0.096      | 0.143        | 1.000 (0.014)    | 0.704 (0.010)    | 1 (0.096) |     3.02 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|            1 |     1354 | 2024-11-20 | Virtus.pro             | W   | 0.095      | 0.143        | 0.444 (0.006)    | 0.456 (0.006)    | 1 (0.095) |     2.94 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,903.19)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-15 |      0.672 | $2,000.00      | $1,343.70       |
| 2024-12-15 |      0.256 | $10,000.00     | $2,559.49       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
