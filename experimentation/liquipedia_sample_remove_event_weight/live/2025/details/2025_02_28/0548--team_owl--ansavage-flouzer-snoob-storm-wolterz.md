### Roster Details<br />
Team Name: Team OWL<br />
Roster: aNsavage, flouzer, Snoob, sToRm, wolterz<br />
Global Rank: [548](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [339]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  487.0<br />
<br />
Final Rank Value (487.0) = Starting Rank Value (484.6) + Head To Head Adjustments (2.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.168[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.042<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 484.6
- 400 + ( ( 0.042 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 484.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent              | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     6708 | 2024-09-15 | THE GENTLEMEN ESPORTS | L   | 0.093      | -            | -                | -                | -         |    -0.56 | aNsavage, flouzer, Snoob, sToRm, wolterz |
|            5 |     6854 | 2024-09-13 | Saint Sinners         | W   | 0.079      | 1.000        | 0.000 (0.000)    | 0.066 (0.005)    | 0 (0.000) |     1.29 | aNsavage, flouzer, Snoob, sToRm, wolterz |
|            4 |     6963 | 2024-09-11 | Back2TheGame          | W   | 0.066      | 1.000        | 0.002 (0.000)    | 0.245 (0.016)    | 0 (0.000) |     1.75 | aNsavage, flouzer, Snoob, sToRm, wolterz |
|            3 |     7091 | 2024-09-09 | The Suspect           | L   | 0.052      | -            | -                | -                | -         |    -0.24 | aNsavage, flouzer, Snoob, sToRm, wolterz |
|            2 |     7300 | 2024-09-06 | PARTIZAN              | L   | 0.032      | -            | -                | -                | -         |    -0.29 | aNsavage, flouzer, Snoob, sToRm, wolterz |
|            1 |     7358 | 2024-09-05 | Divergent             | W   | 0.026      | 1.000        | 0.000 (0.000)    | 0.003 (0.000)    | 0 (0.000) |     0.41 | aNsavage, flouzer, Snoob, sToRm, wolterz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
