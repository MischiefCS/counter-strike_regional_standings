### Roster Details<br />
Team Name: M80<br />
Roster: Lake, reck, s1n, slaxz-, Swisher<br />
Global Rank: [64](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_02_28.md)<br />
Regional Rank: [12]( ../../standings_americas_2025_02_28.md)<br />
<br />
Final Rank Value:  1113.7<br />
<br />
Final Rank Value (1113.7) = Starting Rank Value (1001.3) + Head To Head Adjustments (112.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.429[<sup>1</sup>](#table2)
- Bounty Collected: 0.388[<sup>2</sup>](#table1)
- Opponent Network: 0.334[<sup>2</sup>](#table1)
- LAN Wins: 0.054[<sup>2</sup>](#table1)

The average of these factors is 0.301<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1001.3
- 400 + ( ( 0.301 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 1001.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           38 |      378 | 2025-02-14 | BLUEJAYS           | W   | 1.000      | 1.000        | 0.017 (0.017)    | 0.381 (0.381)    | 0 (0.000) |    12.88 | Lake, reck, s1n, slaxz-, Swisher |
|           37 |      383 | 2025-02-14 | NRG                | W   | 1.000      | 1.000        | 0.059 (0.059)    | 0.548 (0.548)    | 0 (0.000) |    20.62 | Lake, reck, s1n, slaxz-, Swisher |
|           36 |      404 | 2025-02-13 | Nouns Esports      | W   | 1.000      | 1.000        | 0.015 (0.015)    | 0.636 (0.636)    | 0 (0.000) |    14.15 | Lake, reck, s1n, slaxz-, Swisher |
|           35 |      470 | 2025-02-10 | Marsborne          | W   | 1.000      | 1.000        | -                | 0.397 (0.397)    | 0 (0.000) |     6.56 | Lake, reck, s1n, slaxz-, Swisher |
|           34 |      511 | 2025-02-09 | Marsborne          | W   | 1.000      | 1.000        | -                | 0.397 (0.397)    | 0 (0.000) |     6.71 | Lake, reck, s1n, slaxz-, Swisher |
|           33 |      566 | 2025-02-08 | Bad News Capybaras | W   | 1.000      | 1.000        | -                | 0.224 (0.224)    | 0 (0.000) |     4.04 | Lake, reck, s1n, slaxz-, Swisher |
|           32 |     1049 | 2025-01-16 | FaZe Clan          | L   | 0.912      | -            | -                | -                | -         |    -0.47 | k1to, Lake, s1n, slaxz-, Swisher |
|           31 |     4356 | 2024-10-25 | BESTIA             | L   | 0.359      | -            | -                | -                | -         |    -5.62 | Lake, reck, s1n, slaxz-, Swisher |
|           30 |     4402 | 2024-10-24 | Aurora Gaming      | W   | 0.352      | 1.000        | -                | 0.599 (0.211)    | -         |     5.64 | Lake, reck, s1n, slaxz-, Swisher |
|           29 |     4408 | 2024-10-24 | BESTIA             | L   | 0.351      | -            | -                | -                | -         |    -5.57 | Lake, reck, s1n, slaxz-, Swisher |
|           28 |     4542 | 2024-10-20 | NRG                | W   | 0.327      | 1.000        | 0.059 (0.019)    | 0.548 (0.179)    | -         |     7.70 | Lake, reck, s1n, slaxz-, Swisher |
|           27 |     4693 | 2024-10-17 | Legacy             | W   | 0.308      | 1.000        | 0.043 (0.013)    | 0.660 (0.203)    | -         |     6.24 | Lake, reck, s1n, slaxz-, Swisher |
|           26 |     4744 | 2024-10-16 | NRG                | W   | 0.301      | 1.000        | 0.059 (0.018)    | 0.548 (0.165)    | -         |     7.20 | Lake, reck, s1n, slaxz-, Swisher |
|           25 |     5088 | 2024-10-09 | BLUEJAYS           | W   | 0.255      | -            | -                | -                | -         |     4.14 | Lake, reck, s1n, slaxz-, Swisher |
|           24 |     5094 | 2024-10-09 | BLUEJAYS           | L   | 0.255      | -            | -                | -                | -         |    -3.95 | Lake, reck, s1n, slaxz-, Swisher |
|           23 |     5158 | 2024-10-08 | Legacy             | W   | 0.248      | 1.000        | 0.043 (0.011)    | -                | -         |     5.16 | Lake, reck, s1n, slaxz-, Swisher |
|           22 |     5164 | 2024-10-08 | Legacy             | L   | 0.248      | -            | -                | -                | -         |    -2.69 | Lake, reck, s1n, slaxz-, Swisher |
|           21 |     5171 | 2024-10-08 | Wildcard           | W   | 0.247      | 1.000        | 0.160 (0.039)    | -                | -         |     5.54 | Lake, reck, s1n, slaxz-, Swisher |
|           20 |     5179 | 2024-10-08 | Wildcard           | W   | 0.247      | 1.000        | 0.160 (0.039)    | -                | -         |     5.63 | Lake, reck, s1n, slaxz-, Swisher |
|           19 |     5364 | 2024-10-05 | Wildcard           | L   | 0.226      | -            | -                | -                | -         |    -1.94 | Lake, reck, s1n, slaxz-, Swisher |
|           18 |     5435 | 2024-10-04 | BIG                | L   | 0.220      | -            | -                | -                | -         |    -0.36 | Lake, reck, s1n, slaxz-, Swisher |
|           17 |     5442 | 2024-10-04 | Wildcard           | W   | 0.219      | 1.000        | 0.160 (0.035)    | -                | 1 (0.219) |     5.07 | Lake, reck, s1n, slaxz-, Swisher |
|           16 |     5596 | 2024-10-01 | Party Astronauts   | W   | 0.202      | -            | -                | -                | -         |     2.61 | Lake, reck, s1n, slaxz-, Swisher |
|           15 |     5602 | 2024-10-01 | Party Astronauts   | L   | 0.201      | -            | -                | -                | -         |    -3.79 | Lake, reck, s1n, slaxz-, Swisher |
|           14 |     5605 | 2024-10-01 | Nouns Esports      | W   | 0.201      | -            | -                | -                | -         |     3.68 | Lake, reck, s1n, slaxz-, Swisher |
|           13 |     5610 | 2024-10-01 | Nouns Esports      | L   | 0.201      | -            | -                | -                | -         |    -2.68 | Lake, reck, s1n, slaxz-, Swisher |
|           12 |     5670 | 2024-09-30 | Chill Guys         | W   | 0.194      | -            | -                | -                | -         |     2.80 | Lake, reck, s1n, slaxz-, Swisher |
|           11 |     5672 | 2024-09-30 | Chill Guys         | W   | 0.194      | -            | -                | -                | -         |     2.84 | Lake, reck, s1n, slaxz-, Swisher |
|           10 |     5779 | 2024-09-28 | Bad News Capybaras | W   | 0.181      | -            | -                | -                | -         |     1.02 | Lake, reck, s1n, slaxz-, Swisher |
|            9 |     5782 | 2024-09-28 | Bad News Capybaras | W   | 0.181      | -            | -                | -                | -         |     1.03 | Lake, reck, s1n, slaxz-, Swisher |
|            8 |     5952 | 2024-09-26 | Timbermen          | W   | 0.168      | -            | -                | -                | -         |     0.67 | Lake, reck, s1n, slaxz-, Swisher |
|            7 |     5953 | 2024-09-26 | Timbermen          | W   | 0.168      | -            | -                | -                | -         |     0.67 | Lake, reck, s1n, slaxz-, Swisher |
|            6 |     6031 | 2024-09-25 | NRG                | W   | 0.162      | -            | -                | -                | -         |     4.16 | Lake, reck, s1n, slaxz-, Swisher |
|            5 |     6036 | 2024-09-25 | NRG                | L   | 0.161      | -            | -                | -                | -         |    -0.94 | Lake, reck, s1n, slaxz-, Swisher |
|            4 |     6492 | 2024-09-19 | MIBR               | L   | 0.118      | -            | -                | -                | -         |    -0.85 | Lake, reck, s1n, slaxz-, Swisher |
|            3 |     6771 | 2024-09-14 | Imperial Esports   | W   | 0.086      | -            | -                | -                | 1 (0.086) |     1.79 | Lake, reck, s1n, slaxz-, Swisher |
|            2 |     6973 | 2024-09-11 | Fnatic             | W   | 0.066      | -            | -                | -                | 1 (0.066) |     1.80 | Lake, reck, s1n, slaxz-, Swisher |
|            1 |     7032 | 2024-09-10 | Complexity         | W   | 0.059      | -            | -                | -                | 1 (0.059) |     0.92 | Lake, reck, s1n, slaxz-, Swisher |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,314.38)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.327 | $25,000.00     | $8,183.45       |
| 2024-10-06 |      0.234 | $3,000.00      | $700.56         |
| 2024-09-22 |      0.138 | $32,000.00     | $4,430.37       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
