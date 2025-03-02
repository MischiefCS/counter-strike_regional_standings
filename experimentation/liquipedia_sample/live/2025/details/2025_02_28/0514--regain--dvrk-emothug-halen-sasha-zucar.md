### Roster Details<br />
Team Name: Regain<br />
Roster: dvrk, emothug, Halen, sasha, Zucar<br />
Global Rank: [514](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_02_28.md)<br />
Regional Rank: [114]( ../../standings_americas_2025_02_28.md)<br />
<br />
Final Rank Value:  501.0<br />
<br />
Final Rank Value (501.0) = Starting Rank Value (493.5) + Head To Head Adjustments (7.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.179[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.045<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 493.5
- 400 + ( ( 0.045 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 493.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |     2146 | 2024-12-02 | Bad Boys           | L   | 0.615      | -            | -                | -                | -         |    -5.73 | dvrk, emothug, Halen, sasha, Zucar    |
|           10 |     2216 | 2024-12-01 | Guangdong Tigers   | W   | 0.609      | 0.372        | 0.000 (0.000)    | 0.034 (0.008)    | 0 (0.000) |     6.82 | dvrk, emothug, Halen, sasha, Zucar    |
|            9 |     2374 | 2024-11-29 | MIGHT              | L   | 0.595      | -            | -                | -                | -         |    -3.68 | dvrk, emothug, Halen, sasha, Zucar    |
|            8 |     2491 | 2024-11-26 | VitaPLUR           | W   | 0.575      | 0.372        | 0.000 (0.000)    | 0.006 (0.001)    | 0 (0.000) |     9.13 | dvrk, emothug, Halen, sasha, Zucar    |
|            7 |     6395 | 2024-09-20 | InControl          | L   | 0.128      | -            | -                | -                | -         |    -1.23 | dvrk, hunger, Pose1doNN, sasha, Zucar |
|            6 |     6702 | 2024-09-15 | What's for Dinner  | W   | 0.095      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.10 | dvrk, hunger, Pose1doNN, sasha, Zucar |
|            5 |     6903 | 2024-09-12 | MIGHT              | L   | 0.075      | -            | -                | -                | -         |    -0.42 | dvrk, hunger, Pose1doNN, sasha, Zucar |
|            4 |     7009 | 2024-09-10 | SUPER EVIL GANG    | W   | 0.062      | 0.372        | 0.011 (0.000)    | 0.432 (0.010)    | 0 (0.000) |     1.56 | dvrk, hunger, Pose1doNN, sasha, Zucar |
|            3 |     7014 | 2024-09-10 | Familia Maquininha | L   | 0.061      | -            | -                | -                | -         |    -0.49 | dvrk, hunger, Pose1doNN, sasha, Zucar |
|            2 |     7119 | 2024-09-08 | LONG SEASON        | W   | 0.048      | 0.372        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.56 | dvrk, hunger, Pose1doNN, sasha, Zucar |
|            1 |     7337 | 2024-09-05 | Homyno             | L   | 0.028      | -            | -                | -                | -         |    -0.18 | dvrk, hunger, Pose1doNN, sasha, Zucar |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
