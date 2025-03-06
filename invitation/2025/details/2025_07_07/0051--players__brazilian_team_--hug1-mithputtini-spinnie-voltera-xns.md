### Roster Details<br />
Team Name: Players (Brazilian team)<br />
Roster: hug1, MITHPUTTINI, spinnie, voltera, xns<br />
Global Rank: [51](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_07_07.md)<br />
Regional Rank: [16]( ../../standings_americas_2025_07_07.md)<br />
<br />
Final Rank Value:  591.9<br />
<br />
Final Rank Value (591.9) = Starting Rank Value (586.4) + Head To Head Adjustments (5.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.300[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.076<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 586.4
- 400 + ( ( 0.076 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 586.4


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
|            5 |      136 | 2025-02-21 | ODDIK              | L   | 0.291      | -            | -                | -                | -         |    -2.90 | hug1, MITHPUTTINI, spinnie, voltera, xns |
|            4 |      164 | 2025-02-19 | FURIA Female       | W   | 0.280      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.23 | hug1, MITHPUTTINI, spinnie, voltera, xns |
|            3 |      177 | 2025-02-17 | Game Hunters       | W   | 0.267      | 0.371        | 0.000 (0.000)    | 0.183 (0.018)    | 0 (0.000) |     2.18 | hug1, MITHPUTTINI, spinnie, voltera, xns |
|            2 |      204 | 2025-02-16 | Familia Maquininha | W   | 0.259      | 0.371        | 0.000 (0.000)    | 0.089 (0.009)    | 0 (0.000) |     2.07 | hug1, MITHPUTTINI, spinnie, voltera, xns |
|            1 |      289 | 2025-02-13 | Atrix Esports      | W   | 0.238      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.90 | hug1, MITHPUTTINI, spinnie, voltera, xns |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($225.24)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-22 |      0.300 | $750.00        | $225.24         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
