### Roster Details<br />
Team Name: AK BARS<br />
Roster: enzero, kamazbob, kenz1, plushax, SNk<br />
Global Rank: [119](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_02_28.md)<br />
Regional Rank: [13]( ../../standings_asia_2025_02_28.md)<br />
<br />
Final Rank Value:  941.8<br />
<br />
Final Rank Value (941.8) = Starting Rank Value (919.1) + Head To Head Adjustments (22.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.332[<sup>1</sup>](#table2)
- Bounty Collected: 0.295[<sup>2</sup>](#table1)
- Opponent Network: 0.096[<sup>2</sup>](#table1)
- LAN Wins: 0.317[<sup>2</sup>](#table1)

The average of these factors is 0.260<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 919.1
- 400 + ( ( 0.260 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 919.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |     1511 | 2024-12-15 | QPT                    | L   | 0.698      | -            | -                | -                | -         |    -3.21 | enzero, kamazbob, kenz1, plushax, SNk |
|           17 |     1584 | 2024-12-14 | AimAssassins           | W   | 0.691      | 1.000        | 0.005 (0.003)    | 0.258 (0.178)    | 1 (0.691) |    13.54 | enzero, kamazbob, kenz1, plushax, SNk |
|           16 |     1657 | 2024-12-13 | QPT                    | W   | 0.686      | 1.000        | 0.036 (0.025)    | 0.376 (0.258)    | 1 (0.686) |    18.85 | enzero, kamazbob, kenz1, plushax, SNk |
|           15 |     1665 | 2024-12-13 | GamePoint (Uzbek team) | W   | 0.685      | 1.000        | -                | 0.042 (0.029)    | 1 (0.685) |     4.04 | enzero, kamazbob, kenz1, plushax, SNk |
|           14 |     2220 | 2024-12-01 | RAGE (Kazakh team)     | W   | 0.607      | 1.000        | 0.006 (0.004)    | 0.196 (0.119)    | 0 (0.000) |     8.18 | enzero, kamazbob, kenz1, plushax, SNk |
|           13 |     2236 | 2024-12-01 | Mix52                  | W   | 0.606      | 1.000        | 0.002 (0.001)    | 0.068 (0.042)    | 0 (0.000) |     6.50 | enzero, kamazbob, kenz1, plushax, SNk |
|           12 |     2255 | 2024-12-01 | ALLINNERS              | L   | 0.606      | -            | -                | -                | -         |   -12.79 | enzero, kamazbob, kenz1, plushax, SNk |
|           11 |     3494 | 2024-11-09 | ALLINNERS              | L   | 0.459      | -            | -                | -                | -         |    -9.37 | arun, enzero, kamazbob, kenz1, Yaqk   |
|           10 |     3516 | 2024-11-09 | DEPO                   | W   | 0.458      | 1.000        | 0.007 (0.003)    | 0.322 (0.147)    | 0 (0.000) |     5.80 | arun, enzero, kamazbob, kenz1, Yaqk   |
|            9 |     3572 | 2024-11-08 | ALLINNERS              | L   | 0.452      | -            | -                | -                | -         |    -9.47 | arun, enzero, kamazbob, kenz1, Yaqk   |
|            8 |     3672 | 2024-11-06 | MYSKILL                | W   | 0.438      | 1.000        | 0.003 (0.001)    | 0.140 (0.061)    | 0 (0.000) |     3.54 | arun, enzero, kamazbob, kenz1, Yaqk   |
|            7 |     3927 | 2024-11-02 | Yamato Esports         | W   | 0.411      | 1.000        | 0.000 (0.000)    | -                | 0 (0.000) |     1.25 | arun, enzero, kamazbob, kenz1, Yaqk   |
|            6 |     5322 | 2024-10-06 | RAGE (Kazakh team)     | L   | 0.231      | -            | -                | -                | -         |    -4.02 | enzero, kade0, kamazbob, kenz1, SNk   |
|            5 |     5334 | 2024-10-05 | MYSKILL                | W   | 0.230      | 1.000        | 0.003 (0.001)    | 0.140 (0.032)    | 1 (0.230) |     1.86 | enzero, kade0, kamazbob, kenz1, SNk   |
|            4 |     5404 | 2024-10-05 | DEPO                   | W   | 0.224      | 1.000        | 0.007 (0.002)    | 0.322 (0.072)    | 1 (0.224) |     2.81 | enzero, kade0, kamazbob, kenz1, SNk   |
|            3 |     5416 | 2024-10-04 | RAGE (Kazakh team)     | L   | 0.223      | -            | -                | -                | -         |    -3.93 | enzero, kade0, kamazbob, kenz1, SNk   |
|            2 |     6305 | 2024-09-22 | MYSKILL                | W   | 0.138      | 1.000        | 0.003 (0.000)    | 0.140 (0.019)    | -         |     1.11 | enzero, kade0, kamazbob, kenz1, SNk   |
|            1 |     6844 | 2024-09-13 | MYSKILL                | L   | 0.083      | -            | -                | -                | -         |    -1.96 | arun, enzero, kamazbob, kenz1, SNk    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,799.98)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.698 | $2,500.00      | $1,744.04       |
| 2024-11-09 |      0.459 | $1,044.04      | $479.27         |
| 2024-10-06 |      0.231 | $2,500.00      | $576.68         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
