### Roster Details<br />
Team Name: GOSTIVAR<br />
Roster: fleav, kory, ritchiEE, stressarN, xicoz<br />
Global Rank: [501](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [313]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  511.0<br />
<br />
Final Rank Value (511.0) = Starting Rank Value (499.9) + Head To Head Adjustments (11.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.192[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.048<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 499.9
- 400 + ( ( 0.048 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 499.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     4182 | 2024-10-28 | Haspers Team           | L   | 0.380      | -            | -                | -                | -         |    -2.70 | fleav, kory, ritchiEE, stressarN, xicoz |
|            6 |     5194 | 2024-10-08 | Haspers Team           | W   | 0.246      | 0.143        | 0.016 (0.001)    | 0.189 (0.007)    | 0 (0.000) |     6.01 | fleav, kory, ritchiEE, stressarN, xicoz |
|            5 |     5733 | 2024-09-29 | ENTERPRISE Genesis     | W   | 0.186      | 0.143        | 0.002 (0.000)    | 0.193 (0.005)    | 0 (0.000) |     4.12 | fleav, kory, ritchiEE, stressarN, xicoz |
|            4 |     6156 | 2024-09-24 | Error404               | W   | 0.153      | 0.143        | 0.000 (0.000)    | 0.016 (0.000)    | 0 (0.000) |     1.74 | fleav, kory, ritchiEE, stressarN, xicoz |
|            3 |     6173 | 2024-09-24 | Dynamo Eclot           | L   | 0.152      | -            | -                | -                | -         |    -0.13 | fleav, kory, ritchiEE, stressarN, xicoz |
|            2 |     7019 | 2024-09-10 | Sampi NEXT             | W   | 0.060      | 0.143        | 0.000 (0.000)    | 0.027 (0.000)    | 0 (0.000) |     0.95 | fleav, Q-Q, ritchiEE, stressarN, xicoz  |
|            1 |     7022 | 2024-09-10 | MADNESS (Kosovar team) | W   | 0.060      | 0.143        | 0.003 (0.000)    | 0.020 (0.000)    | 0 (0.000) |     1.07 | fleav, Q-Q, ritchiEE, stressarN, xicoz  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
