### Roster Details<br />
Team Name: Verdant fe<br />
Roster: cryths, CYPHER, dobbo, Gizmy, Yoshwa<br />
Global Rank: [215](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [152]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  725.3<br />
<br />
Final Rank Value (725.3) = Starting Rank Value (707.5) + Head To Head Adjustments (17.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.271[<sup>1</sup>](#table2)
- Bounty Collected: 0.184[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.138[<sup>2</sup>](#table1)

The average of these factors is 0.149<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 707.5
- 400 + ( ( 0.149 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 707.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     4250 | 2024-10-27 | ALASKA          | L   | 0.372      | -            | -                | -                | -         |    -1.17 | cryths, CYPHER, dobbo, Gizmy, Yoshwa |
|            4 |     4262 | 2024-10-27 | 8Sins           | W   | 0.370      | 0.143        | 0.006 (0.000)    | 0.251 (0.013)    | 1 (0.370) |     9.28 | cryths, CYPHER, dobbo, Gizmy, Yoshwa |
|            3 |     4291 | 2024-10-26 | ALASKA          | L   | 0.365      | -            | -                | -                | -         |    -1.10 | cryths, CYPHER, dobbo, Gizmy, Yoshwa |
|            2 |     4317 | 2024-10-26 | The Last Resort | W   | 0.364      | 0.143        | 0.001 (0.000)    | 0.173 (0.009)    | 1 (0.364) |     6.26 | cryths, CYPHER, dobbo, Gizmy, Yoshwa |
|            1 |     4360 | 2024-10-25 | The Last Resort | W   | 0.359      | 0.143        | 0.000 (0.000)    | 0.047 (0.002)    | 1 (0.359) |     4.50 | cryths, CYPHER, dobbo, Gizmy, Yoshwa |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($578.56)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-27 |      0.372 | $1,555.32      | $578.56         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
