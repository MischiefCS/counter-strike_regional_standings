### Roster Details<br />
Team Name: InControl<br />
Roster: Beast, DYLAN, jsfeltner, milo, TyRa<br />
Global Rank: [355](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [73]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  612.2<br />
<br />
Final Rank Value (612.2) = Starting Rank Value (628.4) + Head To Head Adjustments (-16.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.259[<sup>1</sup>](#table2)
- Bounty Collected: 0.202[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.116<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 628.4
- 400 + ( ( 0.116 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 628.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      338 | 2025-02-10 | Exceritus                 | L   | 1.000      | -            | -                | -                | -         |   -16.21 | Beast, DYLAN, jsfeltner, milo, TyRa   |
|           14 |      377 | 2025-02-09 | Chill Guys                | L   | 1.000      | -            | -                | -                | -         |   -12.80 | Beast, DYLAN, jsfeltner, milo, TyRa   |
|           13 |      424 | 2025-02-08 | FlyQuest RED              | W   | 1.000      | 0.143        | 0.007 (0.001)    | 0.044 (0.006)    | 0 (0.000) |    15.97 | Beast, DYLAN, jsfeltner, milo, TyRa   |
|           12 |     4625 | 2024-10-13 | FLUFFY AIMERS             | L   | 0.274      | -            | -                | -                | -         |    -2.39 | Andrew, DYLAN, jsfeltner, mason, TyRa |
|           11 |     4675 | 2024-10-12 | Fisher College            | L   | 0.268      | -            | -                | -                | -         |    -2.73 | Andrew, DYLAN, jsfeltner, mason, TyRa |
|           10 |     4683 | 2024-10-12 | MCS Gaming                | W   | 0.267      | 0.262        | 0.003 (0.000)    | 0.173 (0.012)    | 0 (0.000) |     4.26 | Andrew, DYLAN, jsfeltner, mason, TyRa |
|            9 |     4685 | 2024-10-12 | LONG SEASON               | W   | 0.267      | 0.262        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.86 | Andrew, DYLAN, jsfeltner, mason, TyRa |
|            8 |     5862 | 2024-09-23 | Chill Guys                | L   | 0.142      | -            | -                | -                | -         |    -2.03 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            7 |     6043 | 2024-09-20 | Regain                    | W   | 0.122      | 0.371        | 0.000 (0.000)    | 0.070 (0.003)    | 0 (0.000) |     1.22 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            6 |     6088 | 2024-09-19 | Undefined (American team) | L   | 0.116      | -            | -                | -                | -         |    -1.85 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            5 |     6286 | 2024-09-16 | Mythic                    | L   | 0.095      | -            | -                | -                | -         |    -2.03 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            4 |     6635 | 2024-09-10 | Akimbo Esports            | L   | 0.055      | -            | -                | -                | -         |    -0.84 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            3 |     6686 | 2024-09-09 | Final Form                | W   | 0.049      | 0.372        | 0.001 (0.000)    | 0.076 (0.001)    | 0 (0.000) |     0.72 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            2 |     6744 | 2024-09-08 | Straykids                 | W   | 0.042      | 0.372        | 0.000 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     0.45 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            1 |     6951 | 2024-09-05 | Creeps                    | W   | 0.022      | 0.372        | 0.000 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     0.15 | DYLAN, FIEND, jsfeltner, mason, TyRa  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($466.07)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-13 |      0.275 | $150.00        | $41.20          |
| 2024-09-21 |      0.129 | $3,300.00      | $424.88         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
