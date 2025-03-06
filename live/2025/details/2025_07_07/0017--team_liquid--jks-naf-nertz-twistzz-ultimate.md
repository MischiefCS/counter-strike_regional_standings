### Roster Details<br />
Team Name: Team Liquid<br />
Roster: jks, NAF, NertZ, Twistzz, ultimate<br />
Global Rank: [17](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_07_07.md)<br />
Regional Rank: [2]( ../../standings_americas_2025_07_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_07_07.md)<br />
Regional Rank: [3]( ../../standings_asia_2025_07_07.md)<br />
<br />
Final Rank Value:  1145.2<br />
<br />
Final Rank Value (1145.2) = Starting Rank Value (1140.8) + Head To Head Adjustments (4.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.462[<sup>1</sup>](#table2)
- Bounty Collected: 0.374[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.349[<sup>2</sup>](#table1)

The average of these factors is 0.300<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1140.8
- 400 + ( ( 0.300 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 1140.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      581 | 2025-02-04 | Team Spirit | L   | 0.177      | -            | -                | -                | -         |    -0.09 | jks, NAF, NertZ, Twistzz, ultimate |
|            7 |      593 | 2025-02-03 | MOUZ        | W   | 0.170      | 1.000        | 1.000 (0.170)    | 0.651 (0.111)    | 1 (0.170) |     5.31 | jks, NAF, NertZ, Twistzz, ultimate |
|            6 |      603 | 2025-02-02 | The MongolZ | L   | 0.163      | -            | -                | -                | -         |    -0.12 | jks, NAF, NertZ, Twistzz, ultimate |
|            5 |      621 | 2025-01-31 | Wildcard    | W   | 0.152      | 1.000        | 0.145 (0.022)    | 0.171 (0.026)    | 1 (0.152) |     2.22 | jks, NAF, NertZ, Twistzz, ultimate |
|            4 |      625 | 2025-01-31 | Complexity  | W   | 0.150      | 1.000        | 0.127 (0.019)    | 0.101 (0.015)    | 1 (0.150) |     1.57 | jks, NAF, NertZ, Twistzz, ultimate |
|            3 |      633 | 2025-01-29 | HEROIC      | L   | 0.138      | -            | -                | -                | -         |    -3.19 | jks, NAF, NertZ, Twistzz, ultimate |
|            2 |      675 | 2025-01-18 | HEROIC      | L   | 0.063      | -            | -                | -                | -         |    -1.46 | jks, NAF, NertZ, Twistzz, ultimate |
|            1 |      689 | 2025-01-14 | 9Pandas     | W   | 0.038      | 0.363        | 0.036 (0.000)    | 0.239 (0.003)    | 0 (0.000) |     0.15 | jks, NAF, NertZ, Twistzz, ultimate |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,377.78)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-09 |      0.211 | $16,000.00     | $3,377.78       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
