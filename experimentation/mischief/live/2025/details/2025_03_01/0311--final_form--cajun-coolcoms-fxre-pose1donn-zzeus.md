### Roster Details<br />
Team Name: Final Form<br />
Roster: CAJUN, CoolComs, FxRE, Pose1doNN, Zzeus<br />
Global Rank: [311](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [81]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  517.2<br />
<br />
Final Rank Value (517.2) = Starting Rank Value (516.0) + Head To Head Adjustments (1.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.237[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.059<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 516.0
- 400 + ( ( 0.059 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 516.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |     1502 | 2024-12-13 | Make Your Mind            | L   | 0.682      | -            | -                | -                | -         |    -4.92 | CAJUN, CoolComs, FxRE, Pose1doNN, Zzeus |
|           10 |     1505 | 2024-12-13 | Zomblers                  | W   | 0.682      | 0.143        | 0.000 (0.000)    | 0.056 (0.005)    | 0 (0.000) |     7.27 | CAJUN, CoolComs, FxRE, Pose1doNN, Zzeus |
|            9 |     3591 | 2024-10-12 | FLUFFY AIMERS             | L   | 0.268      | -            | -                | -                | -         |    -1.49 | CAJUN, CoolComs, Drop, FxRE, YNGHunter  |
|            8 |     3943 | 2024-10-01 | NRG                       | L   | 0.194      | -            | -                | -                | -         |    -0.37 | CAJUN, CoolComs, Drop, FxRE, YNGHunter  |
|            7 |     4204 | 2024-09-24 | Jahsdnmasjdm v2           | W   | 0.148      | 0.371        | 0.000 (0.000)    | 0.011 (0.001)    | 0 (0.000) |     2.15 | CAJUN, CoolComs, Drop, FxRE, YNGHunter  |
|            6 |     4278 | 2024-09-22 | Familia Maquininha        | L   | 0.135      | -            | -                | -                | -         |    -1.24 | CAJUN, CoolComs, Drop, FxRE, YNGHunter  |
|            5 |     4328 | 2024-09-20 | Penance (American Team)   | W   | 0.121      | 0.371        | 0.000 (0.000)    | 0.004 (0.000)    | 0 (0.000) |     1.32 | CAJUN, CoolComs, Drop, FxRE, YNGHunter  |
|            4 |     4474 | 2024-09-15 | Undefined (American team) | L   | 0.088      | -            | -                | -                | -         |    -1.01 | CAJUN, CoolComs, Drop, FxRE, Zzeus      |
|            3 |     4506 | 2024-09-14 | Lore Gaming               | W   | 0.082      | 0.371        | 0.000 (0.000)    | 0.022 (0.001)    | 0 (0.000) |     0.89 | CAJUN, CoolComs, Drop, FxRE, YNGHunter  |
|            2 |     4635 | 2024-09-10 | Mythic                    | L   | 0.055      | -            | -                | -                | -         |    -0.92 | CAJUN, CoolComs, Drop, FxRE, Zzeus      |
|            1 |     4663 | 2024-09-09 | InControl                 | L   | 0.048      | -            | -                | -                | -         |    -0.54 | CAJUN, CoolComs, Drop, FxRE, Zzeus      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($201.75)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-13 |      0.274 | $150.00        | $41.16          |
| 2024-09-21 |      0.128 | $1,250.00      | $160.59         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
