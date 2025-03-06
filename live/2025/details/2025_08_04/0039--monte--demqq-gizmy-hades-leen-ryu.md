### Roster Details<br />
Team Name: Monte<br />
Roster: DemQQ, Gizmy, hades, leen, ryu<br />
Global Rank: [39](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [27]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  542.9<br />
<br />
Final Rank Value (542.9) = Starting Rank Value (540.0) + Head To Head Adjustments (2.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.210[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.053<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 540.0
- 400 + ( ( 0.053 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 540.0


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
|            6 |      155 | 2025-02-20 | B8                     | L   | 0.098      | -            | -                | -                | -         |    -0.22 | DemQQ, Gizmy, hades, leen, ryu  |
|            5 |      229 | 2025-02-15 | Fnatic                 | W   | 0.065      | 0.435        | 0.000 (0.000)    | 0.244 (0.007)    | 0 (0.000) |     1.05 | DemQQ, dycha, Gizmy, hades, ryu |
|            4 |      290 | 2025-02-13 | Natus Vincere Junior   | W   | 0.052      | 0.435        | 0.060 (0.001)    | 0.603 (0.014)    | 0 (0.000) |     1.37 | DemQQ, dycha, Gizmy, hades, ryu |
|            3 |      345 | 2025-02-11 | CYBERSHOKE Esports     | W   | 0.036      | 0.435        | 0.024 (0.000)    | 1.000 (0.016)    | 0 (0.000) |     0.93 | DemQQ, dycha, Gizmy, hades, ryu |
|            2 |      502 | 2025-02-07 | SINNERS Esports        | L   | 0.010      | -            | -                | -                | -         |    -0.16 | DemQQ, dycha, Gizmy, hades, ryu |
|            1 |      527 | 2025-02-06 | Betclic Apogee Esports | L   | 0.003      | -            | -                | -                | -         |    -0.06 | DemQQ, dycha, Gizmy, hades, ryu |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
