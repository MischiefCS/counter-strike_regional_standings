### Roster Details<br />
Team Name: Players (Brazilian team)<br />
Roster: hug1, MITHPUTTINI, spinnie, voltera, xns<br />
Global Rank: [79](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_06_02.md)<br />
Regional Rank: [17]( ../../standings_americas_2025_06_02.md)<br />
<br />
Final Rank Value:  658.0<br />
<br />
Final Rank Value (658.0) = Starting Rank Value (655.6) + Head To Head Adjustments (2.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.306[<sup>1</sup>](#table2)
- Bounty Collected: 0.130[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.110<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 655.6
- 400 + ( ( 0.110 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 655.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      136 | 2025-02-21 | ODDIK              | L   | 0.524      | -            | -                | -                | -         |    -6.61 | hug1, MITHPUTTINI, spinnie, voltera, xns |
|           11 |      164 | 2025-02-19 | FURIA Female       | W   | 0.513      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.01 | hug1, MITHPUTTINI, spinnie, voltera, xns |
|           10 |      177 | 2025-02-17 | Game Hunters       | W   | 0.500      | 0.371        | 0.000 (0.000)    | 0.205 (0.038)    | 0 (0.000) |     4.23 | hug1, MITHPUTTINI, spinnie, voltera, xns |
|            9 |      204 | 2025-02-16 | Familia Maquininha | W   | 0.493      | 0.371        | 0.000 (0.000)    | 0.084 (0.015)    | 0 (0.000) |     2.89 | hug1, MITHPUTTINI, spinnie, voltera, xns |
|            8 |      289 | 2025-02-13 | Atrix Esports      | W   | 0.472      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.72 | hug1, MITHPUTTINI, spinnie, voltera, xns |
|            7 |      780 | 2024-12-21 | 9z Academy         | L   | 0.111      | -            | -                | -                | -         |    -2.43 | dok, dzt, MITHPUTTINI, spinnie, xns      |
|            6 |      791 | 2024-12-20 | Tropa do KinGui    | W   | 0.104      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.64 | dok, dzt, MITHPUTTINI, spinnie, xns      |
|            5 |      821 | 2024-12-17 | Patins da Ferrari  | L   | 0.086      | -            | -                | -                | -         |    -1.91 | dok, dzt, MITHPUTTINI, spinnie, xns      |
|            4 |      841 | 2024-12-15 | América eSports    | W   | 0.072      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.44 | dok, dzt, MITHPUTTINI, spinnie, xns      |
|            3 |      864 | 2024-12-14 | LaChampionsLiga    | L   | 0.066      | -            | -                | -                | -         |    -1.48 | dok, dzt, MITHPUTTINI, spinnie, xns      |
|            2 |      890 | 2024-12-13 | 20/70              | W   | 0.059      | 0.143        | 0.000 (0.000)    | 0.009 (0.000)    | 0 (0.000) |     0.60 | dok, dzt, MITHPUTTINI, spinnie, xns      |
|            1 |      908 | 2024-12-12 | RED Canids Academy | W   | 0.053      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.32 | dok, dzt, MITHPUTTINI, spinnie, xns      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($479.14)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-22 |      0.534 | $750.00        | $400.24         |
| 2024-12-13 |      0.059 | $1,334.01      | $78.90          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
