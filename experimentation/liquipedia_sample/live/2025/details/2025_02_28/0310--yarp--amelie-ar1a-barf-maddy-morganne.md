### Roster Details<br />
Team Name: Yarp<br />
Roster: Amelie, ar1a, barf, maddy, morganne<br />
Global Rank: [310](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_02_28.md)<br />
Regional Rank: [49]( ../../standings_asia_2025_02_28.md)<br />
<br />
Final Rank Value:  658.0<br />
<br />
Final Rank Value (658.0) = Starting Rank Value (644.1) + Head To Head Adjustments (13.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.289[<sup>1</sup>](#table2)
- Bounty Collected: 0.183[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.118<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 644.1
- 400 + ( ( 0.118 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 644.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1188 | 2024-12-27 | Virtualgangstas | L   | 0.783      | -            | -                | -                | -         |   -13.59 | Amelie, ar1a, barf, maddy, morganne |
|            5 |     1965 | 2024-12-06 | Sootcase        | W   | 0.643      | 0.233        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.01 | Amelie, ar1a, maddy, Mew, morganne  |
|            4 |     2368 | 2024-11-29 | Virtualgangstas | W   | 0.596      | 0.233        | 0.001 (0.000)    | 0.039 (0.005)    | 0 (0.000) |     8.62 | Amelie, ar1a, barf, maddy, morganne |
|            3 |     3177 | 2024-11-15 | Team Berny050   | W   | 0.503      | 0.233        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.98 | Amelie, ar1a, barf, maddy, morganne |
|            2 |     3939 | 2024-11-01 | Team Berny050   | W   | 0.409      | 0.233        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.20 | Amelie, ar1a, barf, maddy, morganne |
|            1 |     4344 | 2024-10-25 | Team Berny050   | W   | 0.363      | 0.233        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.63 | Amelie, ar1a, barf, maddy, morganne |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($997.07)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-27 |      0.783 | $150.00        | $117.39         |
| 2024-12-06 |      0.643 | $350.00        | $224.92         |
| 2024-11-29 |      0.596 | $350.00        | $208.68         |
| 2024-11-15 |      0.503 | $350.00        | $175.92         |
| 2024-11-01 |      0.409 | $350.00        | $143.25         |
| 2024-10-25 |      0.363 | $350.00        | $126.92         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
