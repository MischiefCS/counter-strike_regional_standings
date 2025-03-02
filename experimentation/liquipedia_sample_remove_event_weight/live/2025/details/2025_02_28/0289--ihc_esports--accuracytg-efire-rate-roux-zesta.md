### Roster Details<br />
Team Name: IHC Esports<br />
Roster: AccuracyTG, efire, rate, ROUX, Zesta<br />
Global Rank: [289](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_02_28.md)<br />
Regional Rank: [42]( ../../standings_asia_2025_02_28.md)<br />
<br />
Final Rank Value:  708.9<br />
<br />
Final Rank Value (708.9) = Starting Rank Value (696.5) + Head To Head Adjustments (12.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.294[<sup>1</sup>](#table2)
- Bounty Collected: 0.258[<sup>2</sup>](#table1)
- Opponent Network: 0.043[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.149<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 696.5
- 400 + ( ( 0.149 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 696.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3585 | 2024-11-08 | Looking4Org (Russian team)    | L   | 0.451      | -            | -                | -                | -         |    -4.45 | AccuracyTG, efire, rate, ROUX, Zesta |
|            4 |     3590 | 2024-11-07 | The Huns Esports              | W   | 0.449      | 1.000        | 0.029 (0.013)    | 0.854 (0.384)    | 0 (0.000) |    13.55 | AccuracyTG, efire, rate, ROUX, Zesta |
|            3 |     3637 | 2024-11-06 | Clutch Gaming                 | W   | 0.443      | 1.000        | 0.000 (0.000)    | 0.060 (0.027)    | 0 (0.000) |     5.23 | AccuracyTG, efire, rate, ROUX, Zesta |
|            2 |     3737 | 2024-11-04 | Looking4Org (Russian team)    | L   | 0.430      | -            | -                | -                | -         |    -4.28 | AccuracyTG, efire, rate, ROUX, Zesta |
|            1 |     3738 | 2024-11-04 | NOVA Esports (Mongolian team) | W   | 0.430      | 1.000        | 0.000 (0.000)    | 0.042 (0.018)    | 0 (0.000) |     2.29 | AccuracyTG, efire, rate, ROUX, Zesta |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,126.79)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-08 |      0.451 | $2,500.00      | $1,126.79       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
