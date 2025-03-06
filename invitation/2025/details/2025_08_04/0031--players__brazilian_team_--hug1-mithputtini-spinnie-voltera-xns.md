### Roster Details<br />
Team Name: Players (Brazilian team)<br />
Roster: hug1, MITHPUTTINI, spinnie, voltera, xns<br />
Global Rank: [31](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_04.md)<br />
Regional Rank: [8]( ../../standings_americas_2025_08_04.md)<br />
<br />
Final Rank Value:  615.6<br />
<br />
Final Rank Value (615.6) = Starting Rank Value (614.5) + Head To Head Adjustments (1.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.327[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.082<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 614.5
- 400 + ( ( 0.082 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 614.5


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
|            5 |      136 | 2025-02-21 | ODDIK              | L   | 0.104      | -            | -                | -                | -         |    -1.02 | hug1, MITHPUTTINI, spinnie, voltera, xns |
|            4 |      164 | 2025-02-19 | FURIA Female       | W   | 0.093      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.68 | hug1, MITHPUTTINI, spinnie, voltera, xns |
|            3 |      177 | 2025-02-17 | Game Hunters       | W   | 0.080      | 0.371        | 0.000 (0.000)    | 0.139 (0.004)    | 0 (0.000) |     0.58 | hug1, MITHPUTTINI, spinnie, voltera, xns |
|            2 |      204 | 2025-02-16 | Familia Maquininha | W   | 0.073      | 0.371        | 0.000 (0.000)    | 0.060 (0.002)    | 0 (0.000) |     0.53 | hug1, MITHPUTTINI, spinnie, voltera, xns |
|            1 |      289 | 2025-02-13 | Atrix Esports      | W   | 0.052      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.38 | hug1, MITHPUTTINI, spinnie, voltera, xns |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($85.24)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-22 |      0.114 | $750.00        | $85.24          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
