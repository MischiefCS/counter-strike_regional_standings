### Roster Details<br />
Team Name: XPERION NXT<br />
Roster: jansen, pxsl, Rhyzar, sheezy, tlx<br />
Global Rank: [259](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [180]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  664.8<br />
<br />
Final Rank Value (664.8) = Starting Rank Value (641.5) + Head To Head Adjustments (23.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.267[<sup>1</sup>](#table2)
- Bounty Collected: 0.207[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.123<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 641.5
- 400 + ( ( 0.123 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 641.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           23 |     1472 | 2024-12-11 | WOPA Esport                     | L   | 0.667      | -            | -                | -                | -         |    -6.28 | jansen, pxsl, Rhyzar, sheezy, tlx |
|           22 |     1519 | 2024-12-10 | ZennoX                          | W   | 0.660      | 0.333        | 0.001 (0.000)    | 0.093 (0.021)    | 0 (0.000) |    10.32 | jansen, pxsl, Rhyzar, sheezy, tlx |
|           21 |     1597 | 2024-12-08 | NewBALLS                        | W   | 0.646      | 0.333        | 0.001 (0.000)    | 0.196 (0.042)    | 0 (0.000) |    10.39 | jansen, pxsl, Rhyzar, sheezy, tlx |
|           20 |     1922 | 2024-12-02 | AMKAL ESPORTS                   | L   | 0.607      | -            | -                | -                | -         |    -6.09 | jansen, pxsl, Rhyzar, sheezy, tlx |
|           19 |     2097 | 2024-11-30 | BRUTE                           | W   | 0.593      | 0.333        | 0.004 (0.001)    | 0.347 (0.069)    | 0 (0.000) |    10.90 | jansen, pxsl, Rhyzar, sheezy, tlx |
|           18 |     2198 | 2024-11-28 | FALKE ESPORTS                   | W   | 0.580      | 0.333        | 0.000 (0.000)    | 0.046 (0.009)    | 0 (0.000) |     3.94 | jansen, pxsl, Rhyzar, sheezy, tlx |
|           17 |     3591 | 2024-11-03 | Permitta Esports                | L   | 0.412      | -            | -                | -                | -         |    -4.34 | jansen, pxsl, Rhyzar, sheezy, tlx |
|           16 |     3668 | 2024-11-02 | SNOGARD Dragons                 | W   | 0.406      | 0.338        | 0.000 (0.000)    | 0.042 (0.006)    | 0 (0.000) |     5.49 | jansen, pxsl, Rhyzar, sheezy, tlx |
|           15 |     3718 | 2024-11-01 | BIG                             | L   | 0.400      | -            | -                | -                | -         |    -0.11 | jansen, pxsl, Rhyzar, sheezy, tlx |
|           14 |     3815 | 2024-10-30 | ALTERNATE aTTaX                 | L   | 0.387      | -            | -                | -                | -         |    -2.31 | jansen, pxsl, Rhyzar, sheezy, tlx |
|           13 |     3948 | 2024-10-28 | BIG                             | L   | 0.373      | -            | -                | -                | -         |    -0.11 | jansen, pxsl, Rhyzar, sheezy, tlx |
|           12 |     4249 | 2024-10-21 | Permitta Esports                | L   | 0.327      | -            | -                | -                | -         |    -3.63 | jansen, pxsl, Rhyzar, sheezy, tlx |
|           11 |     4609 | 2024-10-14 | Regnum4Games                    | W   | 0.279      | 0.338        | 0.002 (0.000)    | 0.126 (0.012)    | 0 (0.000) |     4.19 | jansen, pxsl, Rhyzar, sheezy, tlx |
|           10 |     4831 | 2024-10-09 | Sissi State Punks               | L   | 0.247      | -            | -                | -                | -         |    -4.30 | jansen, pxsl, Rhyzar, sheezy, tlx |
|            9 |     5368 | 2024-09-30 | ESports Cologne                 | W   | 0.187      | 0.338        | -                | 0.019 (0.001)    | 0 (0.000) |     1.63 | jansen, pxsl, Rhyzar, sheezy, tlx |
|            8 |     5900 | 2024-09-23 | Wave Esports                    | W   | 0.140      | 0.338        | 0.001 (0.000)    | 0.124 (0.006)    | 0 (0.000) |     2.16 | jansen, pxsl, Rhyzar, sheezy, tlx |
|            7 |     6183 | 2024-09-18 | SNOGARD Dragons                 | W   | 0.107      | 0.338        | 0.000 (0.000)    | 0.042 (0.002)    | 0 (0.000) |     1.48 | jansen, pxsl, Rhyzar, sheezy, tlx |
|            6 |     6346 | 2024-09-15 | Infinite Gaming                 | L   | 0.086      | -            | -                | -                | -         |    -1.58 | jansen, pxsl, Rhyzar, sheezy, tlx |
|            5 |     6486 | 2024-09-13 | Rejected by all                 | W   | 0.073      | -            | -                | -                | 0 (0.000) |     0.64 | jansen, pxsl, Rhyzar, sheezy, tlx |
|            4 |     6600 | 2024-09-11 | Cerberus eSports (Russian team) | W   | 0.060      | 0.333        | 0.000 (0.000)    | 0.089 (0.002)    | -         |     0.81 | jansen, pxsl, Rhyzar, sheezy, tlx |
|            3 |     6710 | 2024-09-09 | Kubix Esports                   | L   | 0.046      | -            | -                | -                | -         |    -0.25 | jansen, pxsl, Rhyzar, sheezy, tlx |
|            2 |     6970 | 2024-09-05 | Saint Sinners                   | W   | 0.020      | -            | -                | -                | -         |     0.18 | jansen, pxsl, Rhyzar, sheezy, tlx |
|            1 |     7048 | 2024-09-04 | MYinsanity                      | W   | 0.014      | 0.338        | 0.002 (0.000)    | -                | -         |     0.23 | jansen, pxsl, Rhyzar, sheezy, tlx |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($595.61)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.692 | $600.00        | $415.33         |
| 2024-12-14 |      0.686 | $262.62        | $180.28         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
