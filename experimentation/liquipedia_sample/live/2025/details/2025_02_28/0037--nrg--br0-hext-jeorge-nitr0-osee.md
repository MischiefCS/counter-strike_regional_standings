### Roster Details<br />
Team Name: NRG<br />
Roster: br0, HexT, Jeorge, nitr0, oSee<br />
Global Rank: [37](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_02_28.md)<br />
Regional Rank: [7]( ../../standings_americas_2025_02_28.md)<br />
<br />
Final Rank Value:  1051.9<br />
<br />
Final Rank Value (1051.9) = Starting Rank Value (1104.4) + Head To Head Adjustments (-52.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.448[<sup>1</sup>](#table2)
- Bounty Collected: 0.330[<sup>2</sup>](#table1)
- Opponent Network: 0.177[<sup>2</sup>](#table1)
- LAN Wins: 0.410[<sup>2</sup>](#table1)

The average of these factors is 0.341<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1104.4
- 400 + ( ( 0.341 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1104.4


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
|           49 |      383 | 2025-02-14 | M80                   | L   | 1.000      | -            | -                | -                | -         |   -20.11 | br0, HexT, Jeorge, nitr0, oSee       |
|           48 |      408 | 2025-02-13 | Exceritus             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.93 | br0, HexT, Jeorge, nitr0, oSee       |
|           47 |      421 | 2025-02-12 | Nouns Esports         | W   | 1.000      | 0.143        | 0.015 (0.002)    | -                | 0 (0.000) |    10.11 | br0, HexT, Jeorge, nitr0, oSee       |
|           46 |      441 | 2025-02-11 | BLUEJAYS              | W   | 1.000      | 0.143        | 0.017 (0.002)    | -                | 0 (0.000) |    10.94 | br0, HexT, Jeorge, nitr0, oSee       |
|           45 |      447 | 2025-02-11 | Marsborne             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.81 | br0, HexT, Jeorge, nitr0, oSee       |
|           44 |      865 | 2025-01-28 | Vagrants              | W   | 0.995      | 0.477        | -                | 0.547 (0.260)    | 0 (0.000) |     7.19 | br0, HexT, Jeorge, nitr0, oSee       |
|           43 |      870 | 2025-01-28 | Vagrants              | L   | 0.995      | -            | -                | -                | -         |   -24.72 | br0, HexT, Jeorge, nitr0, oSee       |
|           42 |      925 | 2025-01-24 | Getting Info          | L   | 0.969      | -            | -                | -                | -         |   -20.72 | br0, HexT, Jeorge, nitr0, oSee       |
|           41 |      926 | 2025-01-24 | Getting Info          | L   | 0.968      | -            | -                | -                | -         |   -22.25 | br0, HexT, Jeorge, nitr0, oSee       |
|           40 |      957 | 2025-01-23 | Chill Guys            | W   | 0.962      | 0.477        | -                | 0.664 (0.305)    | -         |     5.82 | br0, HexT, Jeorge, nitr0, oSee       |
|           39 |      959 | 2025-01-23 | Chill Guys            | W   | 0.962      | 0.477        | -                | 0.664 (0.305)    | -         |     6.14 | br0, HexT, Jeorge, nitr0, oSee       |
|           38 |     1473 | 2024-12-15 | Getting Info          | L   | 0.702      | -            | -                | -                | -         |   -16.99 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           37 |     1480 | 2024-12-15 | Party Astronauts      | W   | 0.700      | 0.303        | -                | 0.557 (0.118)    | -         |     4.22 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           36 |     1831 | 2024-12-08 | Sharks Esports        | W   | 0.655      | 0.384        | 0.065 (0.016)    | 0.726 (0.183)    | 1 (0.655) |     9.58 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           35 |     1835 | 2024-12-08 | Sharks Esports        | W   | 0.654      | 0.384        | 0.065 (0.016)    | 0.726 (0.183)    | 1 (0.654) |     9.92 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           34 |     1902 | 2024-12-07 | BLUEJAYS              | W   | 0.649      | 0.384        | 0.017 (0.004)    | 0.381 (0.095)    | 1 (0.649) |     6.29 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           33 |     1918 | 2024-12-07 | Undone                | W   | 0.647      | -            | -                | -                | 1 (0.647) |     3.50 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           32 |     1970 | 2024-12-06 | Stand On Business     | W   | 0.642      | -            | -                | -                | 1 (0.642) |     0.45 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           31 |     2572 | 2024-11-24 | Nouns Esports         | L   | 0.561      | -            | -                | -                | -         |   -11.85 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           30 |     2578 | 2024-11-24 | Getting Info          | W   | 0.560      | 0.303        | -                | 0.626 (0.106)    | -         |     3.86 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           29 |     2628 | 2024-11-23 | Chill Guys            | W   | 0.554      | 0.303        | -                | 0.664 (0.112)    | -         |     3.76 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           28 |     4542 | 2024-10-20 | M80                   | L   | 0.327      | -            | -                | -                | -         |    -7.42 | autimatic, Brehze, HexT, nitr0, oSee |
|           27 |     4611 | 2024-10-19 | Legacy                | W   | 0.322      | 0.477        | 0.043 (0.007)    | 0.660 (0.101)    | -         |     2.92 | autimatic, Brehze, HexT, nitr0, oSee |
|           26 |     4649 | 2024-10-18 | Party Astronauts      | W   | 0.315      | -            | -                | -                | -         |     2.19 | autimatic, Brehze, HexT, nitr0, oSee |
|           25 |     4695 | 2024-10-17 | Wildcard              | W   | 0.308      | 0.477        | 0.160 (0.023)    | -                | -         |     5.34 | autimatic, Brehze, HexT, nitr0, oSee |
|           24 |     4744 | 2024-10-16 | M80                   | L   | 0.301      | -            | -                | -                | -         |    -6.92 | autimatic, Brehze, HexT, nitr0, oSee |
|           23 |     4813 | 2024-10-15 | Party Astronauts      | W   | 0.295      | -            | -                | -                | -         |     1.99 | autimatic, Brehze, HexT, nitr0, oSee |
|           22 |     5163 | 2024-10-08 | Nouns Esports         | L   | 0.248      | -            | -                | -                | -         |    -5.40 | autimatic, Brehze, HexT, nitr0, oSee |
|           21 |     5169 | 2024-10-08 | Nouns Esports         | L   | 0.248      | -            | -                | -                | -         |    -5.49 | autimatic, Brehze, HexT, nitr0, oSee |
|           20 |     5483 | 2024-10-03 | BLUEJAYS              | L   | 0.215      | -            | -                | -                | -         |    -4.90 | autimatic, Brehze, HexT, nitr0, oSee |
|           19 |     5595 | 2024-10-01 | Legacy                | L   | 0.202      | -            | -                | -                | -         |    -4.69 | autimatic, Brehze, HexT, nitr0, oSee |
|           18 |     5601 | 2024-10-01 | Legacy                | L   | 0.201      | -            | -                | -                | -         |    -4.75 | autimatic, Brehze, HexT, nitr0, oSee |
|           17 |     5614 | 2024-10-01 | Final Form            | W   | 0.200      | -            | -                | -                | -         |     0.39 | autimatic, Brehze, HexT, nitr0, oSee |
|           16 |     5877 | 2024-09-27 | Legacy                | L   | 0.174      | -            | -                | -                | -         |    -4.21 | autimatic, Brehze, HexT, nitr0, oSee |
|           15 |     5884 | 2024-09-27 | Familia Maquininha    | W   | 0.174      | -            | -                | -                | -         |     0.48 | autimatic, Brehze, HexT, nitr0, oSee |
|           14 |     5963 | 2024-09-26 | Seoul (American team) | W   | 0.167      | -            | -                | -                | -         |     0.10 | autimatic, Brehze, HexT, nitr0, oSee |
|           13 |     6031 | 2024-09-25 | M80                   | L   | 0.162      | -            | -                | -                | -         |    -4.04 | autimatic, Brehze, HexT, nitr0, oSee |
|           12 |     6036 | 2024-09-25 | M80                   | W   | 0.161      | 0.477        | 0.047 (0.004)    | -                | -         |     1.05 | autimatic, Brehze, HexT, nitr0, oSee |
|           11 |     6124 | 2024-09-24 | Timbermen             | W   | 0.155      | -            | -                | -                | -         |     0.36 | autimatic, Brehze, HexT, nitr0, oSee |
|           10 |     6128 | 2024-09-24 | Timbermen             | W   | 0.155      | -            | -                | -                | -         |     0.36 | autimatic, Brehze, HexT, nitr0, oSee |
|            9 |     6284 | 2024-09-22 | Nouns Esports         | W   | 0.141      | -            | -                | -                | -         |     1.27 | autimatic, Brehze, HexT, nitr0, oSee |
|            8 |     6290 | 2024-09-22 | FLUFFY AIMERS         | W   | 0.140      | -            | -                | -                | -         |     0.80 | autimatic, Brehze, HexT, nitr0, oSee |
|            7 |     6338 | 2024-09-21 | Party Astronauts      | W   | 0.134      | -            | -                | -                | -         |     0.71 | autimatic, Brehze, HexT, nitr0, oSee |
|            6 |     6454 | 2024-09-19 | Wildcard              | W   | 0.121      | 0.477        | 0.160 (0.009)    | -                | -         |     2.15 | autimatic, Brehze, HexT, nitr0, oSee |
|            5 |     6458 | 2024-09-19 | Wildcard              | W   | 0.121      | 0.477        | 0.160 (0.009)    | -                | -         |     2.17 | autimatic, Brehze, HexT, nitr0, oSee |
|            4 |     6507 | 2024-09-18 | Bad News Capybaras    | W   | 0.115      | -            | -                | -                | -         |     0.35 | autimatic, Brehze, HexT, nitr0, oSee |
|            3 |     6514 | 2024-09-18 | Bad News Capybaras    | W   | 0.115      | -            | -                | -                | -         |     0.35 | autimatic, Brehze, HexT, nitr0, oSee |
|            2 |     6575 | 2024-09-17 | LAG Gaming            | W   | 0.108      | -            | -                | -                | -         |     0.23 | autimatic, Brehze, HexT, nitr0, oSee |
|            1 |     6586 | 2024-09-17 | LAG Gaming            | W   | 0.108      | -            | -                | -                | -         |     0.23 | autimatic, Brehze, HexT, nitr0, oSee |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($16,736.81)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.702 | $1,000.00      | $701.64         |
| 2024-12-08 |      0.655 | $15,000.00     | $9,827.78       |
| 2024-11-24 |      0.561 | $1,000.00      | $561.39         |
| 2024-10-20 |      0.327 | $15,000.00     | $4,910.07       |
| 2024-10-05 |      0.228 | $750.00        | $171.02         |
| 2024-09-22 |      0.141 | $4,000.00      | $564.91         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
