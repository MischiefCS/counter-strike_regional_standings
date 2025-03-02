### Roster Details<br />
Team Name: AK BARS<br />
Roster: enzero, kamazbob, kenz1, plushax, SNk<br />
Global Rank: [95](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_02_28.md)<br />
Regional Rank: [11]( ../../standings_asia_2025_02_28.md)<br />
<br />
Final Rank Value:  903.3<br />
<br />
Final Rank Value (903.3) = Starting Rank Value (879.3) + Head To Head Adjustments (24.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.332[<sup>1</sup>](#table2)
- Bounty Collected: 0.254[<sup>2</sup>](#table1)
- Opponent Network: 0.025[<sup>2</sup>](#table1)
- LAN Wins: 0.317[<sup>2</sup>](#table1)

The average of these factors is 0.232<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 879.3
- 400 + ( ( 0.232 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 879.3


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
|           18 |     1511 | 2024-12-15 | QPT                    | L   | 0.698      | -            | -                | -                | -         |    -4.00 | enzero, kamazbob, kenz1, plushax, SNk |
|           17 |     1584 | 2024-12-14 | AimAssassins           | W   | 0.691      | 0.333        | 0.005 (0.001)    | 0.258 (0.059)    | 1 (0.691) |    13.78 | enzero, kamazbob, kenz1, plushax, SNk |
|           16 |     1657 | 2024-12-13 | QPT                    | W   | 0.686      | 0.333        | 0.036 (0.008)    | 0.376 (0.086)    | 1 (0.686) |    18.09 | enzero, kamazbob, kenz1, plushax, SNk |
|           15 |     1665 | 2024-12-13 | GamePoint (Uzbek team) | W   | 0.685      | 0.333        | -                | 0.042 (0.010)    | 1 (0.685) |     4.65 | enzero, kamazbob, kenz1, plushax, SNk |
|           14 |     2220 | 2024-12-01 | RAGE (Kazakh team)     | W   | 0.607      | 0.143        | 0.006 (0.001)    | 0.196 (0.017)    | 0 (0.000) |     8.86 | enzero, kamazbob, kenz1, plushax, SNk |
|           13 |     2236 | 2024-12-01 | Mix52                  | W   | 0.606      | 0.143        | 0.002 (0.000)    | 0.068 (0.006)    | 0 (0.000) |     7.37 | enzero, kamazbob, kenz1, plushax, SNk |
|           12 |     2255 | 2024-12-01 | ALLINNERS              | L   | 0.606      | -            | -                | -                | -         |   -13.04 | enzero, kamazbob, kenz1, plushax, SNk |
|           11 |     3494 | 2024-11-09 | ALLINNERS              | L   | 0.459      | -            | -                | -                | -         |    -9.62 | arun, enzero, kamazbob, kenz1, Yaqk   |
|           10 |     3516 | 2024-11-09 | DEPO                   | W   | 0.458      | 0.143        | 0.007 (0.000)    | 0.322 (0.021)    | 0 (0.000) |     5.89 | arun, enzero, kamazbob, kenz1, Yaqk   |
|            9 |     3572 | 2024-11-08 | ALLINNERS              | L   | 0.452      | -            | -                | -                | -         |    -9.72 | arun, enzero, kamazbob, kenz1, Yaqk   |
|            8 |     3672 | 2024-11-06 | MYSKILL                | W   | 0.438      | 0.143        | 0.003 (0.000)    | 0.140 (0.009)    | 0 (0.000) |     3.60 | arun, enzero, kamazbob, kenz1, Yaqk   |
|            7 |     3927 | 2024-11-02 | Yamato Esports         | W   | 0.411      | 0.143        | 0.000 (0.000)    | -                | 0 (0.000) |     1.55 | arun, enzero, kamazbob, kenz1, Yaqk   |
|            6 |     5322 | 2024-10-06 | RAGE (Kazakh team)     | L   | 0.231      | -            | -                | -                | -         |    -3.72 | enzero, kade0, kamazbob, kenz1, SNk   |
|            5 |     5334 | 2024-10-05 | MYSKILL                | W   | 0.230      | 0.333        | 0.003 (0.000)    | 0.140 (0.011)    | 1 (0.230) |     1.89 | enzero, kade0, kamazbob, kenz1, SNk   |
|            4 |     5404 | 2024-10-05 | DEPO                   | W   | 0.224      | 0.333        | 0.007 (0.001)    | 0.322 (0.024)    | 1 (0.224) |     2.85 | enzero, kade0, kamazbob, kenz1, SNk   |
|            3 |     5416 | 2024-10-04 | RAGE (Kazakh team)     | L   | 0.223      | -            | -                | -                | -         |    -3.64 | enzero, kade0, kamazbob, kenz1, SNk   |
|            2 |     6305 | 2024-09-22 | MYSKILL                | W   | 0.138      | 0.143        | 0.003 (0.000)    | 0.140 (0.003)    | -         |     1.14 | enzero, kade0, kamazbob, kenz1, SNk   |
|            1 |     6844 | 2024-09-13 | MYSKILL                | L   | 0.083      | -            | -                | -                | -         |    -1.94 | arun, enzero, kamazbob, kenz1, SNk    |

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
