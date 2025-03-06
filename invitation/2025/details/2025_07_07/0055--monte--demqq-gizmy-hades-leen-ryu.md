### Roster Details<br />
Team Name: Monte<br />
Roster: DemQQ, Gizmy, hades, leen, ryu<br />
Global Rank: [55](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [37]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  565.9<br />
<br />
Final Rank Value (565.9) = Starting Rank Value (556.7) + Head To Head Adjustments (9.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.230[<sup>2</sup>](#table1)
- Opponent Network: 0.024[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.063<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 556.7
- 400 + ( ( 0.063 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 556.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      155 | 2025-02-20 | B8                     | L   | 0.285      | -            | -                | -                | -         |    -0.99 | DemQQ, Gizmy, hades, leen, ryu  |
|            7 |      229 | 2025-02-15 | Fnatic                 | W   | 0.252      | 0.435        | 0.000 (0.000)    | 0.489 (0.053)    | 0 (0.000) |     4.31 | DemQQ, dycha, Gizmy, hades, ryu |
|            6 |      290 | 2025-02-13 | Natus Vincere Junior   | W   | 0.238      | 0.435        | 0.031 (0.003)    | 0.525 (0.054)    | 0 (0.000) |     5.89 | DemQQ, dycha, Gizmy, hades, ryu |
|            5 |      345 | 2025-02-11 | CYBERSHOKE Esports     | W   | 0.223      | 0.435        | 0.012 (0.001)    | 1.000 (0.097)    | 0 (0.000) |     5.54 | DemQQ, dycha, Gizmy, hades, ryu |
|            4 |      502 | 2025-02-07 | SINNERS Esports        | L   | 0.197      | -            | -                | -                | -         |    -1.89 | DemQQ, dycha, Gizmy, hades, ryu |
|            3 |      527 | 2025-02-06 | Betclic Apogee Esports | L   | 0.189      | -            | -                | -                | -         |    -2.90 | DemQQ, dycha, Gizmy, hades, ryu |
|            2 |      585 | 2025-02-03 | Sashi Esport           | W   | 0.172      | 0.435        | 0.000 (0.000)    | 0.523 (0.039)    | 0 (0.000) |     2.73 | DemQQ, dycha, Gizmy, hades, ryu |
|            1 |      613 | 2025-02-01 | MoneyF                 | L   | 0.158      | -            | -                | -                | -         |    -3.50 | DemQQ, dycha, Gizmy, hades, ryu |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
