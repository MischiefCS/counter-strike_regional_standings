### Roster Details<br />
Team Name: NewBALLS<br />
Roster: 4X1s, Ban4ik, deeN, strix, torox<br />
Global Rank: [299](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [200]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  700.6<br />
<br />
Final Rank Value (700.6) = Starting Rank Value (689.0) + Head To Head Adjustments (11.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.252[<sup>1</sup>](#table2)
- Bounty Collected: 0.269[<sup>2</sup>](#table1)
- Opponent Network: 0.059[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.145<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 689.0
- 400 + ( ( 0.145 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 689.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           25 |      340 | 2025-02-16 | K27                          | L   | 1.000      | -            | -                | -                | -         |    -5.49 | 4X1s, Ban4ik, deeN, strix, torox |
|           24 |     1864 | 2024-12-08 | XPERION NXT                  | L   | 0.652      | -            | -                | -                | -         |   -10.73 | 4X1s, Alv, deeN, strix, torox    |
|           23 |     1953 | 2024-12-07 | 777 Esports                  | W   | 0.645      | 1.000        | 0.003 (0.002)    | 0.208 (0.134)    | 0 (0.000) |     9.55 | 4X1s, Alv, deeN, strix, torox    |
|           22 |     2053 | 2024-12-04 | Dragon Esports Club          | W   | 0.626      | 1.000        | 0.008 (0.005)    | 0.336 (0.210)    | 0 (0.000) |    12.27 | 4X1s, Alv, deeN, strix, torox    |
|           21 |     2168 | 2024-12-02 | VOID GAMING (Russian team)   | W   | 0.613      | 1.000        | 0.000 (0.000)    | 0.030 (0.018)    | 0 (0.000) |     4.29 | 4X1s, Alv, deeN, strix, torox    |
|           20 |     2248 | 2024-12-01 | Insilio                      | L   | 0.606      | -            | -                | -                | -         |    -7.00 | 4X1s, Alv, deeN, strix, torox    |
|           19 |     2313 | 2024-11-30 | CASTA                        | W   | 0.600      | 1.000        | 0.000 (0.000)    | -                | 0 (0.000) |     2.93 | 4X1s, Alv, deeN, strix, torox    |
|           18 |     2417 | 2024-11-28 | Back2TheGame                 | L   | 0.587      | -            | -                | -                | -         |    -7.20 | 4X1s, Alv, deeN, strix, torox    |
|           17 |     3854 | 2024-11-03 | 9INE                         | L   | 0.418      | -            | -                | -                | -         |    -3.10 | 4X1s, Alv, deeN, strix, torox    |
|           16 |     3989 | 2024-11-01 | ARCRED                       | W   | 0.404      | 1.000        | 0.025 (0.010)    | 0.336 (0.136)    | 0 (0.000) |    10.56 | 4X1s, Alv, deeN, strix, torox    |
|           15 |     4404 | 2024-10-24 | RUSH B (Russian team)        | L   | 0.352      | -            | -                | -                | -         |    -0.58 | 4X1s, Alv, deeN, strix, torox    |
|           14 |     4410 | 2024-10-24 | Endpoint                     | L   | 0.351      | -            | -                | -                | -         |    -2.32 | 4X1s, Alv, deeN, strix, torox    |
|           13 |     4488 | 2024-10-22 | K27                          | L   | 0.338      | -            | -                | -                | -         |    -1.11 | 4X1s, Alv, deeN, strix, torox    |
|           12 |     4685 | 2024-10-18 | GameAgents                   | W   | 0.311      | 1.000        | 0.006 (0.002)    | 0.183 (0.057)    | 0 (0.000) |     6.38 | 4X1s, Alv, deeN, strix, torox    |
|           11 |     4988 | 2024-10-12 | 9Pandas                      | L   | 0.272      | -            | -                | -                | -         |    -0.37 | 4X1s, Alv, deeN, strix, torox    |
|           10 |     5686 | 2024-09-30 | G2 Ares                      | L   | 0.193      | -            | -                | -                | -         |    -2.14 | 4X1s, Alv, deeN, strix, torox    |
|            9 |     6296 | 2024-09-22 | CS2NEWS                      | W   | 0.139      | 1.000        | 0.000 (0.000)    | 0.016 (0.002)    | 0 (0.000) |     1.44 | 4X1s, Alv, deeN, strix, torox    |
|            8 |     6308 | 2024-09-22 | PARTIZAN                     | W   | 0.138      | 1.000        | 0.000 (0.000)    | 0.085 (0.012)    | 0 (0.000) |     1.96 | 4X1s, Alv, deeN, strix, torox    |
|            7 |     6359 | 2024-09-21 | Xdclan                       | W   | 0.133      | 1.000        | 0.000 (0.000)    | -                | 0 (0.000) |     0.69 | 4X1s, Alv, deeN, strix, torox    |
|            6 |     6790 | 2024-09-14 | FLuffy Gangsters             | L   | 0.085      | -            | -                | -                | -         |    -0.48 | 4X1s, Alv, deeN, strix, torox    |
|            5 |     6796 | 2024-09-14 | EC BANGA                     | W   | 0.085      | 1.000        | -                | 0.058 (0.005)    | 0 (0.000) |     0.75 | 4X1s, Alv, deeN, strix, torox    |
|            4 |     6805 | 2024-09-14 | LookingForOrg (Turkish team) | W   | 0.085      | 1.000        | -                | 0.004 (0.000)    | -         |     0.44 | 4X1s, Alv, deeN, strix, torox    |
|            3 |     6811 | 2024-09-14 | 500 Rush                     | W   | 0.084      | 1.000        | 0.002 (0.000)    | 0.160 (0.013)    | -         |     1.34 | 4X1s, Alv, deeN, strix, torox    |
|            2 |     7219 | 2024-09-07 | Grannys Knockers             | L   | 0.038      | -            | -                | -                | -         |    -0.70 | 4X1s, Alv, deeN, strix, torox    |
|            1 |     7235 | 2024-09-07 | Naaaa                        | W   | 0.038      | -            | -                | -                | -         |     0.20 | 4X1s, Alv, deeN, strix, torox    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($306.46)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      0.420 | $715.22        | $300.08         |
| 2024-09-14 |      0.085 | $75.00         | $6.38           |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
