### Roster Details<br />
Team Name: NRG<br />
Roster: br0, HexT, Jeorge, nitr0, oSee<br />
Global Rank: [35](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [8]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  999.3<br />
<br />
Final Rank Value (999.3) = Starting Rank Value (993.4) + Head To Head Adjustments (5.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.433[<sup>1</sup>](#table2)
- Bounty Collected: 0.327[<sup>2</sup>](#table1)
- Opponent Network: 0.094[<sup>2</sup>](#table1)
- LAN Wins: 0.375[<sup>2</sup>](#table1)

The average of these factors is 0.307<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 993.4
- 400 + ( ( 0.307 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 993.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           42 |      267 | 2025-02-14 | M80                | L   | 1.000      | -            | -                | -                | -         |   -17.34 | br0, HexT, Jeorge, nitr0, oSee       |
|           41 |      291 | 2025-02-13 | Exceritus          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.12 | br0, HexT, Jeorge, nitr0, oSee       |
|           40 |      301 | 2025-02-12 | Nouns Esports      | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.27 | br0, HexT, Jeorge, nitr0, oSee       |
|           39 |      320 | 2025-02-11 | BOSS               | W   | 1.000      | 0.143        | 0.014 (0.002)    | 0.410 (0.059)    | 0 (0.000) |    10.67 | br0, HexT, Jeorge, nitr0, oSee       |
|           38 |      328 | 2025-02-11 | Marsborne          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.70 | br0, HexT, Jeorge, nitr0, oSee       |
|           37 |      838 | 2024-12-15 | Timbermen          | L   | 0.695      | -            | -                | -                | -         |   -17.61 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           36 |      841 | 2024-12-15 | Party Astronauts   | W   | 0.694      | 0.303        | -                | 0.430 (0.090)    | 0 (0.000) |     4.52 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           35 |      955 | 2024-12-08 | Sharks Esports     | W   | 0.649      | 0.384        | 0.054 (0.014)    | 0.661 (0.165)    | 1 (0.649) |     9.29 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           34 |      958 | 2024-12-08 | Sharks Esports     | W   | 0.647      | 0.384        | 0.054 (0.014)    | 0.661 (0.165)    | 1 (0.647) |     9.58 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           33 |      972 | 2024-12-07 | BOSS               | W   | 0.642      | 0.384        | 0.014 (0.004)    | 0.410 (0.101)    | 1 (0.642) |     7.47 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           32 |      980 | 2024-12-07 | Undone             | W   | 0.641      | 0.384        | -                | 0.249 (0.061)    | 1 (0.641) |     4.03 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           31 |     1005 | 2024-12-06 | Stand On Business  | W   | 0.636      | -            | -                | -                | 1 (0.636) |     0.77 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           30 |     1249 | 2024-11-24 | Nouns Esports      | L   | 0.555      | -            | -                | -                | -         |   -12.30 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           29 |     1252 | 2024-11-24 | Timbermen          | W   | 0.554      | 0.303        | 0.011 (0.002)    | -                | -         |     3.21 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           28 |     1271 | 2024-11-23 | Chill Guys         | W   | 0.548      | -            | -                | -                | -         |     2.22 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           27 |     1841 | 2024-10-20 | M80                | L   | 0.320      | -            | -                | -                | -         |    -5.79 | autimatic, Brehze, HexT, nitr0, oSee |
|           26 |     1857 | 2024-10-19 | Legacy             | W   | 0.315      | 0.477        | 0.033 (0.005)    | 0.669 (0.100)    | -         |     3.15 | autimatic, Brehze, HexT, nitr0, oSee |
|           25 |     1871 | 2024-10-18 | Party Astronauts   | W   | 0.308      | 0.477        | -                | 0.430 (0.063)    | -         |     2.42 | autimatic, Brehze, HexT, nitr0, oSee |
|           24 |     1897 | 2024-10-17 | Wildcard           | W   | 0.302      | 0.477        | 0.176 (0.025)    | 0.528 (0.076)    | -         |     8.14 | autimatic, Brehze, HexT, nitr0, oSee |
|           23 |     1922 | 2024-10-16 | M80                | L   | 0.295      | -            | -                | -                | -         |    -5.34 | autimatic, Brehze, HexT, nitr0, oSee |
|           22 |     1948 | 2024-10-15 | Party Astronauts   | W   | 0.288      | 0.477        | -                | 0.430 (0.059)    | -         |     2.27 | autimatic, Brehze, HexT, nitr0, oSee |
|           21 |     2067 | 2024-10-08 | Nouns Esports      | L   | 0.242      | -            | -                | -                | -         |    -6.12 | autimatic, Brehze, HexT, nitr0, oSee |
|           20 |     2073 | 2024-10-08 | Nouns Esports      | L   | 0.242      | -            | -                | -                | -         |    -6.20 | autimatic, Brehze, HexT, nitr0, oSee |
|           19 |     2234 | 2024-10-03 | BOSS               | L   | 0.208      | -            | -                | -                | -         |    -4.25 | autimatic, Brehze, HexT, nitr0, oSee |
|           18 |     2309 | 2024-10-01 | Legacy             | L   | 0.196      | -            | -                | -                | -         |    -4.37 | autimatic, Brehze, HexT, nitr0, oSee |
|           17 |     2315 | 2024-10-01 | Legacy             | L   | 0.195      | -            | -                | -                | -         |    -4.43 | autimatic, Brehze, HexT, nitr0, oSee |
|           16 |     2321 | 2024-10-01 | Final Form         | W   | 0.195      | -            | -                | -                | -         |     0.35 | autimatic, Brehze, HexT, nitr0, oSee |
|           15 |     2432 | 2024-09-27 | Familia Maquininha | W   | 0.168      | -            | -                | -                | -         |     0.70 | autimatic, Brehze, HexT, nitr0, oSee |
|           14 |     2435 | 2024-09-27 | Legacy             | L   | 0.168      | -            | -                | -                | -         |    -3.86 | autimatic, Brehze, HexT, nitr0, oSee |
|           13 |     2516 | 2024-09-25 | M80                | L   | 0.156      | -            | -                | -                | -         |    -3.16 | autimatic, Brehze, HexT, nitr0, oSee |
|           12 |     2521 | 2024-09-25 | M80                | W   | 0.155      | 0.477        | 0.038 (0.003)    | -                | -         |     1.76 | autimatic, Brehze, HexT, nitr0, oSee |
|           11 |     2578 | 2024-09-24 | Timbermen          | W   | 0.149      | -            | -                | -                | -         |     0.77 | autimatic, Brehze, HexT, nitr0, oSee |
|           10 |     2579 | 2024-09-24 | Timbermen          | W   | 0.149      | -            | -                | -                | -         |     0.77 | autimatic, Brehze, HexT, nitr0, oSee |
|            9 |     2664 | 2024-09-22 | Nouns Esports      | W   | 0.135      | -            | -                | -                | -         |     0.72 | autimatic, Brehze, HexT, nitr0, oSee |
|            8 |     2668 | 2024-09-22 | FLUFFY AIMERS      | W   | 0.133      | -            | -                | -                | -         |     0.98 | autimatic, Brehze, HexT, nitr0, oSee |
|            7 |     2688 | 2024-09-21 | Party Astronauts   | W   | 0.128      | -            | -                | -                | -         |     0.80 | autimatic, Brehze, HexT, nitr0, oSee |
|            6 |     2730 | 2024-09-19 | Wildcard           | W   | 0.115      | 0.477        | 0.176 (0.010)    | -                | -         |     3.17 | autimatic, Brehze, HexT, nitr0, oSee |
|            5 |     2732 | 2024-09-19 | Wildcard           | W   | 0.115      | 0.477        | 0.176 (0.010)    | -                | -         |     3.17 | autimatic, Brehze, HexT, nitr0, oSee |
|            4 |     2761 | 2024-09-18 | Bad News Capybaras | W   | 0.109      | -            | -                | -                | -         |     0.44 | autimatic, Brehze, HexT, nitr0, oSee |
|            3 |     2763 | 2024-09-18 | Bad News Capybaras | W   | 0.109      | -            | -                | -                | -         |     0.45 | autimatic, Brehze, HexT, nitr0, oSee |
|            2 |     2793 | 2024-09-17 | LAG Gaming         | W   | 0.102      | -            | -                | -                | -         |     0.34 | autimatic, Brehze, HexT, nitr0, oSee |
|            1 |     2795 | 2024-09-17 | LAG Gaming         | W   | 0.102      | -            | -                | -                | -         |     0.34 | autimatic, Brehze, HexT, nitr0, oSee |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($16,490.57)
- Divide that value by the 5th highest value among all rosters ($336,045.79)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.695 | $1,000.00      | $695.05         |
| 2024-12-08 |      0.649 | $15,000.00     | $9,728.82       |
| 2024-11-24 |      0.555 | $1,000.00      | $554.79         |
| 2024-10-20 |      0.320 | $15,000.00     | $4,805.56       |
| 2024-10-05 |      0.222 | $750.00        | $166.35         |
| 2024-09-22 |      0.135 | $4,000.00      | $540.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
