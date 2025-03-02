### Roster Details<br />
Team Name: Rejected by all<br />
Roster: Aspera, Mirsser, MoNaTy, Quazer, zazzer<br />
Global Rank: [534](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [331]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  467.3<br />
<br />
Final Rank Value (467.3) = Starting Rank Value (468.6) + Head To Head Adjustments (-1.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.139[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.035<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 468.6
- 400 + ( ( 0.035 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 468.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     6445 | 2024-09-14 | LookingForOrg (Turkish team) | L   | 0.078      | -            | -                | -                | -         |    -1.47 | Aspera, Mirsser, MoNaTy, Quazer, zazzer |
|            7 |     6486 | 2024-09-13 | XPERION NXT                  | L   | 0.073      | -            | -                | -                | -         |    -0.64 | Aspera, Mirsser, MoNaTy, Quazer, zazzer |
|            6 |     6589 | 2024-09-11 | Divergent                    | W   | 0.060      | 0.333        | 0.000 (0.000)    | 0.003 (0.000)    | 0 (0.000) |     0.97 | Aspera, Mirsser, MoNaTy, Quazer, zazzer |
|            5 |     6697 | 2024-09-09 | QUAZAR                       | L   | 0.047      | -            | -                | -                | -         |    -0.31 | Aspera, Mirsser, MoNaTy, Quazer, zazzer |
|            4 |     6750 | 2024-09-08 | Underrated                   | L   | 0.040      | -            | -                | -                | -         |    -0.29 | Aspera, Mirsser, MoNaTy, Quazer, zazzer |
|            3 |     6915 | 2024-09-06 | FLuffy Gangsters             | L   | 0.027      | -            | -                | -                | -         |    -0.12 | Aspera, Mirsser, MoNaTy, Quazer, zazzer |
|            2 |     6971 | 2024-09-05 | Playfire                     | W   | 0.020      | 0.333        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.36 | Aspera, Mirsser, MoNaTy, Quazer, zazzer |
|            1 |     7121 | 2024-09-03 | EC BANGA                     | W   | 0.007      | 0.333        | 0.000 (0.000)    | 0.059 (0.000)    | 0 (0.000) |     0.11 | Aspera, Mirsser, MoNaTy, Quazer, zazzer |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
