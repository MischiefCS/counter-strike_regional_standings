### Roster Details<br />
Team Name: NO BYSTANDERS<br />
Roster: actava, K4je, noph, YDI, z3r0X<br />
Global Rank: [502](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [314]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  491.3<br />
<br />
Final Rank Value (491.3) = Starting Rank Value (487.8) + Head To Head Adjustments (3.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.175[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.045<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 487.8
- 400 + ( ( 0.045 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 487.8


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
|            6 |     4732 | 2024-10-12 | Saint Sinners                   | L   | 0.265      | -            | -                | -                | -         |    -4.30 | actava, K4je, noph, YDI, z3r0X |
|            5 |     4744 | 2024-10-12 | HOTU                            | W   | 0.264      | 0.143        | 0.003 (0.000)    | 0.621 (0.023)    | 0 (0.000) |     6.51 | actava, K4je, noph, YDI, z3r0X |
|            4 |     5955 | 2024-09-22 | CS2NEWS                         | L   | 0.133      | -            | -                | -                | -         |    -1.74 | actava, K4je, noph, YDI, z3r0X |
|            3 |     6011 | 2024-09-21 | Nuclear TigeRES                 | W   | 0.126      | 0.143        | 0.004 (0.000)    | 0.541 (0.010)    | 0 (0.000) |     3.48 | actava, K4je, noph, YDI, z3r0X |
|            2 |     6807 | 2024-09-07 | Cerberus eSports (Russian team) | L   | 0.033      | -            | -                | -                | -         |    -0.38 | actava, K4je, noph, YDI, z3r0X |
|            1 |     7109 | 2024-09-03 | Astra Gaming                    | L   | 0.007      | -            | -                | -                | -         |    -0.13 | actava, K4je, noph, YDI, z3r0X |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
