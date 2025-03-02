### Roster Details<br />
Team Name: AK BARS<br />
Roster: enzero, kamazbob, kenz1, plushax, SNk<br />
Global Rank: [88](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [6]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  864.5<br />
<br />
Final Rank Value (864.5) = Starting Rank Value (839.4) + Head To Head Adjustments (25.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.324[<sup>1</sup>](#table2)
- Bounty Collected: 0.251[<sup>2</sup>](#table1)
- Opponent Network: 0.028[<sup>2</sup>](#table1)
- LAN Wins: 0.290[<sup>2</sup>](#table1)

The average of these factors is 0.223<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 839.4
- 400 + ( ( 0.223 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 839.4


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
|           18 |     1257 | 2024-12-15 | QPT                    | L   | 0.691      | -            | -                | -                | -         |    -4.57 | enzero, kamazbob, kenz1, plushax, SNk |
|           17 |     1324 | 2024-12-14 | AimAssassins           | W   | 0.685      | 0.333        | 0.004 (0.001)    | 0.264 (0.060)    | 1 (0.685) |    13.32 | enzero, kamazbob, kenz1, plushax, SNk |
|           16 |     1395 | 2024-12-13 | QPT                    | W   | 0.679      | 0.333        | 0.030 (0.007)    | 0.384 (0.087)    | 1 (0.679) |    17.31 | enzero, kamazbob, kenz1, plushax, SNk |
|           15 |     1403 | 2024-12-13 | GamePoint (Uzbek team) | W   | 0.679      | 0.333        | -                | 0.043 (0.010)    | 1 (0.679) |     4.99 | enzero, kamazbob, kenz1, plushax, SNk |
|           14 |     1984 | 2024-12-01 | RAGE (Kazakh team)     | W   | 0.601      | 0.143        | 0.005 (0.000)    | 0.200 (0.017)    | 0 (0.000) |     8.78 | enzero, kamazbob, kenz1, plushax, SNk |
|           13 |     1995 | 2024-12-01 | Mix52                  | W   | 0.600      | 0.143        | 0.002 (0.000)    | 0.070 (0.006)    | 0 (0.000) |     7.41 | enzero, kamazbob, kenz1, plushax, SNk |
|           12 |     2018 | 2024-12-01 | ALLINNERS              | L   | 0.599      | -            | -                | -                | -         |   -12.47 | enzero, kamazbob, kenz1, plushax, SNk |
|           11 |     3259 | 2024-11-09 | ALLINNERS              | L   | 0.453      | -            | -                | -                | -         |    -9.14 | arun, enzero, kamazbob, kenz1, Yaqk   |
|           10 |     3280 | 2024-11-09 | DEPO                   | W   | 0.452      | 0.289        | 0.006 (0.001)    | 0.326 (0.043)    | 0 (0.000) |     5.93 | arun, enzero, kamazbob, kenz1, Yaqk   |
|            9 |     3333 | 2024-11-08 | ALLINNERS              | L   | 0.446      | -            | -                | -                | -         |    -9.23 | arun, enzero, kamazbob, kenz1, Yaqk   |
|            8 |     3429 | 2024-11-06 | MYSKILL                | W   | 0.432      | 0.289        | 0.002 (0.000)    | 0.142 (0.018)    | 0 (0.000) |     3.91 | arun, enzero, kamazbob, kenz1, Yaqk   |
|            7 |     3677 | 2024-11-02 | Yamato Esports         | W   | 0.405      | 0.289        | 0.000 (0.000)    | -                | 0 (0.000) |     1.78 | arun, enzero, kamazbob, kenz1, Yaqk   |
|            6 |     5015 | 2024-10-06 | RAGE (Kazakh team)     | L   | 0.225      | -            | -                | -                | -         |    -3.64 | enzero, kade0, kamazbob, kenz1, SNk   |
|            5 |     5026 | 2024-10-06 | MYSKILL                | W   | 0.224      | 0.333        | 0.002 (0.000)    | 0.142 (0.011)    | 1 (0.224) |     2.03 | enzero, kade0, kamazbob, kenz1, SNk   |
|            4 |     5095 | 2024-10-05 | DEPO                   | W   | 0.218      | 0.333        | 0.006 (0.000)    | 0.326 (0.024)    | 1 (0.218) |     2.84 | enzero, kade0, kamazbob, kenz1, SNk   |
|            3 |     5105 | 2024-10-05 | RAGE (Kazakh team)     | L   | 0.217      | -            | -                | -                | -         |    -3.56 | enzero, kade0, kamazbob, kenz1, SNk   |
|            2 |     5952 | 2024-09-22 | MYSKILL                | W   | 0.133      | 0.143        | 0.002 (0.000)    | 0.142 (0.003)    | -         |     1.20 | enzero, kade0, kamazbob, kenz1, SNk   |
|            1 |     6472 | 2024-09-14 | MYSKILL                | L   | 0.077      | -            | -                | -                | -         |    -1.74 | arun, enzero, kamazbob, kenz1, SNk    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,763.04)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.691 | $2,500.00      | $1,728.47       |
| 2024-11-09 |      0.453 | $1,044.04      | $472.77         |
| 2024-10-06 |      0.225 | $2,500.00      | $561.81         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
