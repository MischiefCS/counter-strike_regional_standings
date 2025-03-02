### Roster Details<br />
Team Name: Carnival Gaming<br />
Roster: clouda, CycloneF, EmbeR, Gh0sTTTT, SpawN<br />
Global Rank: [525](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_02_28.md)<br />
Regional Rank: [84]( ../../standings_asia_2025_02_28.md)<br />
<br />
Final Rank Value:  505.0<br />
<br />
Final Rank Value (505.0) = Starting Rank Value (503.8) + Head To Head Adjustments (1.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.205[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.052<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 503.8
- 400 + ( ( 0.052 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 503.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     5752 | 2024-09-29 | True Rippers Esports | L   | 0.185      | -            | -                | -                | -         |    -3.72 | clouda, CycloneF, EmbeR, Gh0sTTTT, SpawN |
|            4 |     5833 | 2024-09-28 | Victores Sumus       | W   | 0.178      | 1.000        | 0.007 (0.001)    | 0.169 (0.030)    | 0 (0.000) |     4.46 | clouda, CycloneF, EmbeR, Gh0sTTTT, SpawN |
|            3 |     5854 | 2024-09-28 | Firedup Gaming       | W   | 0.177      | 1.000        | 0.000 (0.000)    | 0.009 (0.002)    | 0 (0.000) |     2.03 | clouda, CycloneF, EmbeR, Gh0sTTTT, SpawN |
|            2 |     5923 | 2024-09-27 | True Rippers Esports | L   | 0.172      | -            | -                | -                | -         |    -3.45 | clouda, CycloneF, EmbeR, Gh0sTTTT, SpawN |
|            1 |     5999 | 2024-09-26 | Project Lethals      | W   | 0.165      | 1.000        | 0.000 (0.000)    | 0.009 (0.001)    | 0 (0.000) |     1.86 | clouda, CycloneF, EmbeR, Gh0sTTTT, SpawN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
