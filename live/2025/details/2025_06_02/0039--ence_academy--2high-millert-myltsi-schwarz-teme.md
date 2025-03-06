### Roster Details<br />
Team Name: ENCE Academy<br />
Roster: 2high, millert, myltsi, Schwarz, teme<br />
Global Rank: [39](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [26]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  803.8<br />
<br />
Final Rank Value (803.8) = Starting Rank Value (808.3) + Head To Head Adjustments (-4.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.322[<sup>1</sup>](#table2)
- Bounty Collected: 0.200[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.180[<sup>2</sup>](#table1)

The average of these factors is 0.176<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 808.3
- 400 + ( ( 0.176 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 808.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      112 | 2025-02-22 | JANO Esports | L   | 0.531      | -            | -                | -                | -         |    -5.35 | 2high, millert, myltsi, Schwarz, teme |
|            5 |      122 | 2025-02-21 | HAVU         | W   | 0.526      | 0.143        | 0.003 (0.000)    | 0.000 (0.000)    | 1 (0.526) |     3.39 | 2high, millert, myltsi, Schwarz, teme |
|            4 |      757 | 2024-12-24 | WOPA Esport  | L   | 0.130      | -            | -                | -                | -         |    -2.54 | 2high, millert, myltsi, Schwarz, teme |
|            3 |      761 | 2024-12-23 | KONO.ECF     | L   | 0.122      | -            | -                | -                | -         |    -2.44 | 2high, millert, myltsi, Schwarz, teme |
|            2 |      809 | 2024-12-19 | ESC Gaming   | W   | 0.096      | 0.333        | 0.000 (0.000)    | 0.231 (0.007)    | 0 (0.000) |     0.48 | 2high, millert, myltsi, Schwarz, teme |
|            1 |      818 | 2024-12-18 | ALASKA       | W   | 0.090      | 0.333        | 0.026 (0.001)    | 0.560 (0.017)    | 0 (0.000) |     2.03 | 2high, millert, myltsi, Schwarz, teme |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($692.31)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-22 |      0.531 | $1,046.46      | $555.71         |
| 2024-12-25 |      0.137 | $1,000.00      | $136.60         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
