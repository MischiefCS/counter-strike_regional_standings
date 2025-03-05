### Roster Details<br />
Team Name: InControl<br />
Roster: Beast, DYLAN, jsfeltner, milo, TyRa<br />
Global Rank: [218](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [62]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  604.2<br />
<br />
Final Rank Value (604.2) = Starting Rank Value (629.0) + Head To Head Adjustments (-24.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.259[<sup>1</sup>](#table2)
- Bounty Collected: 0.220[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.120<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 629.0
- 400 + ( ( 0.120 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 629.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      355 | 2025-02-10 | Exceritus                  | L   | 1.000      | -            | -                | -                | -         |   -15.88 | Beast, DYLAN, jsfeltner, milo, TyRa   |
|           11 |      391 | 2025-02-09 | Chill Guys                 | L   | 1.000      | -            | -                | -                | -         |   -14.32 | Beast, DYLAN, jsfeltner, milo, TyRa   |
|           10 |      439 | 2025-02-08 | FlyQuest RED               | W   | 1.000      | 0.428        | 0.007 (0.003)    | 0.052 (0.022)    | 0 (0.000) |    15.81 | Beast, DYLAN, jsfeltner, milo, TyRa   |
|            9 |     1969 | 2024-10-13 | FLUFFY AIMERS              | L   | 0.274      | -            | -                | -                | -         |    -2.40 | Andrew, DYLAN, jsfeltner, mason, TyRa |
|            8 |     1977 | 2024-10-12 | Fisher College             | L   | 0.268      | -            | -                | -                | -         |    -2.92 | Andrew, DYLAN, jsfeltner, mason, TyRa |
|            7 |     2630 | 2024-09-23 | Chill Guys                 | L   | 0.142      | -            | -                | -                | -         |    -2.11 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            6 |     2705 | 2024-09-20 | Regain                     | W   | 0.122      | 0.371        | 0.000 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     0.85 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            5 |     2726 | 2024-09-19 | Undefined (American team)  | L   | 0.115      | -            | -                | -                | -         |    -1.89 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            4 |     2820 | 2024-09-16 | Mythic                     | L   | 0.095      | -            | -                | -                | -         |    -2.06 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            3 |     2906 | 2024-09-13 | Dangerous (Ukrainian team) | W   | 0.074      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.51 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            2 |     2998 | 2024-09-10 | Akimbo Esports             | L   | 0.055      | -            | -                | -                | -         |    -0.89 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            1 |     3025 | 2024-09-09 | Final Form                 | W   | 0.048      | 0.372        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.52 | DYLAN, FIEND, jsfeltner, mason, TyRa  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($465.11)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-13 |      0.274 | $150.00        | $41.16          |
| 2024-09-21 |      0.128 | $3,300.00      | $423.96         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
