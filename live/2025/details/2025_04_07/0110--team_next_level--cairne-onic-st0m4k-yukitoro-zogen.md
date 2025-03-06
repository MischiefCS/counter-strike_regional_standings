### Roster Details<br />
Team Name: TEAM NEXT LEVEL<br />
Roster: cairne, onic, St0m4k, yukitoro, zogeN<br />
Global Rank: [110](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [77]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  713.7<br />
<br />
Final Rank Value (713.7) = Starting Rank Value (713.2) + Head To Head Adjustments (0.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.354[<sup>1</sup>](#table2)
- Bounty Collected: 0.243[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.152<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 713.2
- 400 + ( ( 0.152 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 713.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      767 | 2024-12-22 | KONO.ECF             | L   | 0.491      | -            | -                | -                | -         |    -7.56 | cairne, onic, St0m4k, yukitoro, zogeN |
|            5 |      825 | 2024-12-17 | FAVBET Team          | L   | 0.458      | -            | -                | -                | -         |    -6.26 | cairne, onic, St0m4k, yukitoro, zogeN |
|            4 |      834 | 2024-12-16 | Dragon Esports Club  | W   | 0.451      | 0.143        | 0.005 (0.000)    | 0.031 (0.002)    | 0 (0.000) |     5.60 | cairne, onic, St0m4k, yukitoro, zogeN |
|            3 |      948 | 2024-12-09 | TEAM NEXT LEVEL      | W   | 0.405      | 0.143        | 0.002 (0.000)    | 0.132 (0.008)    | 0 (0.000) |     5.24 | cairne, onic, St0m4k, yukitoro, zogeN |
|            2 |     1220 | 2024-11-27 | Iberian Soul         | L   | 0.324      | -            | -                | -                | -         |    -4.06 | cairne, onic, St0m4k, yukitoro, zogeN |
|            1 |     1235 | 2024-11-26 | Natus Vincere Junior | W   | 0.318      | 0.333        | 0.068 (0.007)    | 0.744 (0.079)    | 0 (0.000) |     7.50 | cairne, onic, St0m4k, yukitoro, zogeN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,400.13)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-22 |      0.491 | $478.80        | $235.14         |
| 2024-12-17 |      0.458 | $4,790.69      | $2,193.74       |
| 2024-11-27 |      0.324 | $3,000.00      | $971.25         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
