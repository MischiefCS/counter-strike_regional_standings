### Roster Details<br />
Team Name: Ctrl Alt Defeat<br />
Roster: BENJYMIN, f0cus, onder, Sorex, z_nan<br />
Global Rank: [123](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [90]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  937.6<br />
<br />
Final Rank Value (937.6) = Starting Rank Value (928.0) + Head To Head Adjustments (9.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.272[<sup>1</sup>](#table2)
- Bounty Collected: 0.232[<sup>2</sup>](#table1)
- Opponent Network: 0.050[<sup>2</sup>](#table1)
- LAN Wins: 0.505[<sup>2</sup>](#table1)

The average of these factors is 0.265<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 928.0
- 400 + ( ( 0.265 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 928.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      177 | 2025-02-23 | ALASKA                    | L   | 1.000      | -            | -                | -                | -         |   -10.46 | BENJYMIN, f0cus, onder, Sorex, z_nan |
|            5 |      179 | 2025-02-22 | DUSTY                     | W   | 1.000      | 1.000        | 0.001 (0.001)    | 0.149 (0.149)    | 1 (1.000) |    11.63 | BENJYMIN, f0cus, onder, Sorex, z_nan |
|            4 |      186 | 2025-02-22 | ANTARCTICA (British team) | W   | 1.000      | 1.000        | 0.002 (0.002)    | 0.132 (0.132)    | 1 (1.000) |     7.40 | BENJYMIN, f0cus, onder, Sorex, z_nan |
|            3 |      194 | 2025-02-22 | The Last Resort           | W   | 1.000      | 1.000        | 0.001 (0.001)    | 0.173 (0.173)    | 1 (1.000) |     8.23 | BENJYMIN, f0cus, onder, Sorex, z_nan |
|            2 |      199 | 2025-02-22 | Proqfanclub               | W   | 1.000      | 1.000        | 0.000 (0.000)    | 0.050 (0.050)    | 1 (1.000) |     2.40 | BENJYMIN, f0cus, onder, Sorex, z_nan |
|            1 |      211 | 2025-02-21 | ALASKA                    | L   | 1.000      | -            | -                | -                | -         |    -9.60 | BENJYMIN, f0cus, onder, Sorex, z_nan |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($599.95)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      1.000 | $599.95        | $599.95         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
