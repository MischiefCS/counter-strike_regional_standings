### Roster Details<br />
Team Name: NO BYSTANDERS<br />
Roster: actava, K4je, noph, YDI, z3r0X<br />
Global Rank: [519](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [324]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  497.3<br />
<br />
Final Rank Value (497.3) = Starting Rank Value (493.6) + Head To Head Adjustments (3.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.178[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.045<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 493.6
- 400 + ( ( 0.045 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 493.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     5015 | 2024-10-12 | Saint Sinners                   | L   | 0.271      | -            | -                | -                | -         |    -4.40 | actava, K4je, noph, YDI, z3r0X |
|            5 |     5025 | 2024-10-12 | HOTU                            | W   | 0.270      | 0.143        | 0.004 (0.000)    | 0.637 (0.025)    | 0 (0.000) |     6.82 | actava, K4je, noph, YDI, z3r0X |
|            4 |     6307 | 2024-09-22 | CS2NEWS                         | L   | 0.138      | -            | -                | -                | -         |    -1.79 | actava, K4je, noph, YDI, z3r0X |
|            3 |     6362 | 2024-09-21 | Nuclear TigeRES                 | W   | 0.132      | 0.143        | 0.005 (0.000)    | 0.531 (0.010)    | 0 (0.000) |     3.70 | actava, K4je, noph, YDI, z3r0X |
|            2 |     7189 | 2024-09-07 | Cerberus eSports (Russian team) | L   | 0.039      | -            | -                | -                | -         |    -0.43 | actava, K4je, noph, YDI, z3r0X |
|            1 |     7509 | 2024-09-03 | Astra Gaming                    | L   | 0.013      | -            | -                | -                | -         |    -0.25 | actava, K4je, noph, YDI, z3r0X |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
