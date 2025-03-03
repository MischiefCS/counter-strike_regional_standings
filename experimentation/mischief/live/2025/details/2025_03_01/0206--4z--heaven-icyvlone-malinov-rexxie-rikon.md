### Roster Details<br />
Team Name: 4z<br />
Roster: HeaveN, icyvlone, malinov, rexxie, rikon<br />
Global Rank: [206](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [139]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  662.0<br />
<br />
Final Rank Value (662.0) = Starting Rank Value (657.6) + Head To Head Adjustments (4.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.295[<sup>1</sup>](#table2)
- Bounty Collected: 0.223[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.132<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 657.6
- 400 + ( ( 0.132 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 657.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     1403 | 2024-12-15 | KZ Esports      | W   | 0.694      | 0.310        | 0.013 (0.003)    | 0.191 (0.041)    | 0 (0.000) |    14.60 | HeaveN, icyvlone, malinov, rexxie, rikon |
|            9 |     1570 | 2024-12-12 | ZOTIX           | W   | 0.673      | 0.310        | 0.001 (0.000)    | 0.177 (0.037)    | 0 (0.000) |    11.12 | HeaveN, icyvlone, malinov, rexxie, rikon |
|            8 |     1822 | 2024-12-05 | KZ Esports      | L   | 0.626      | -            | -                | -                | -         |    -6.24 | HeaveN, icyvlone, malinov, rexxie, rikon |
|            7 |     1918 | 2024-12-03 | QMISTRY         | W   | 0.613      | 0.310        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.48 | HeaveN, icyvlone, malinov, rexxie, rikon |
|            6 |     2062 | 2024-12-01 | YoCrew          | W   | 0.599      | 0.310        | 0.001 (0.000)    | 0.035 (0.006)    | 0 (0.000) |     6.49 | HeaveN, icyvlone, malinov, rexxie, rikon |
|            5 |     2366 | 2024-11-23 | Flame Sharks    | L   | 0.547      | -            | -                | -                | -         |   -11.36 | fate, icyvlone, malinov, rexxie, rikon   |
|            4 |     2889 | 2024-11-10 | Nuclear TigeRES | L   | 0.458      | -            | -                | -                | -         |    -7.13 | fate, HeaveN, icyvlone, rexxie, rikon    |
|            3 |     2892 | 2024-11-10 | Aviators        | W   | 0.458      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.90 | fate, HeaveN, icyvlone, rexxie, rikon    |
|            2 |     2953 | 2024-11-09 | Nuclear TigeRES | L   | 0.451      | -            | -                | -                | -         |    -7.24 | fate, HeaveN, icyvlone, rexxie, rikon    |
|            1 |     3112 | 2024-11-04 | K27             | L   | 0.418      | -            | -                | -                | -         |    -5.18 | fate, HeaveN, icyvlone, rexxie, rikon    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,387.50)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.694 | $2,000.00      | $1,387.50       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
