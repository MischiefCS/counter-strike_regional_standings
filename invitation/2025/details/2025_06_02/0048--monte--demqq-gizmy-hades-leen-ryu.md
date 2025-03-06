### Roster Details<br />
Team Name: Monte<br />
Roster: DemQQ, Gizmy, hades, leen, ryu<br />
Global Rank: [48](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [33]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  746.9<br />
<br />
Final Rank Value (746.9) = Starting Rank Value (744.1) + Head To Head Adjustments (2.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.292[<sup>1</sup>](#table2)
- Bounty Collected: 0.252[<sup>2</sup>](#table1)
- Opponent Network: 0.050[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.149<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 744.1
- 400 + ( ( 0.149 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 744.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      155 | 2025-02-20 | B8                     | L   | 0.518      | -            | -                | -                | -         |    -3.88 | DemQQ, Gizmy, hades, leen, ryu   |
|           10 |      229 | 2025-02-15 | Fnatic                 | W   | 0.485      | 0.435        | 0.000 (0.000)    | 0.480 (0.101)    | 0 (0.000) |     5.72 | DemQQ, dycha, Gizmy, hades, ryu  |
|            9 |      290 | 2025-02-13 | Natus Vincere Junior   | W   | 0.472      | 0.435        | 0.040 (0.008)    | 0.494 (0.101)    | 0 (0.000) |     8.79 | DemQQ, dycha, Gizmy, hades, ryu  |
|            8 |      345 | 2025-02-11 | CYBERSHOKE Esports     | W   | 0.456      | 0.435        | 0.013 (0.002)    | 1.000 (0.198)    | 0 (0.000) |     8.48 | DemQQ, dycha, Gizmy, hades, ryu  |
|            7 |      502 | 2025-02-07 | SINNERS Esports        | L   | 0.430      | -            | -                | -                | -         |    -6.53 | DemQQ, dycha, Gizmy, hades, ryu  |
|            6 |      527 | 2025-02-06 | Betclic Apogee Esports | L   | 0.423      | -            | -                | -                | -         |    -6.12 | DemQQ, dycha, Gizmy, hades, ryu  |
|            5 |      585 | 2025-02-03 | Sashi Esport           | W   | 0.405      | 0.435        | 0.001 (0.000)    | 0.507 (0.089)    | 0 (0.000) |     6.29 | DemQQ, dycha, Gizmy, hades, ryu  |
|            4 |      613 | 2025-02-01 | MoneyF                 | L   | 0.391      | -            | -                | -                | -         |    -9.60 | DemQQ, dycha, Gizmy, hades, ryu  |
|            3 |      782 | 2024-12-21 | AMKAL ESPORTS          | L   | 0.110      | -            | -                | -                | -         |    -1.98 | fnl, Gizmy, leen, ryu, shield    |
|            2 |      788 | 2024-12-20 | Dark Cloud Esports     | W   | 0.105      | 0.333        | 0.001 (0.000)    | 0.158 (0.006)    | 0 (0.000) |     1.25 | fnl, Gizmy, leen, ryu, shield    |
|            1 |      801 | 2024-12-19 | Betera Esports         | W   | 0.098      | 0.333        | 0.000 (0.000)    | 0.012 (0.000)    | 0 (0.000) |     0.39 | AiyvaN, Gizmy, leen, ryu, shield |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($331.25)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-21 |      0.110 | $3,000.00      | $331.25         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
