### Roster Details<br />
Team Name: Change The Game<br />
Roster: 957, Hack1ng, LaiKeXu, yancher, zero<br />
Global Rank: [151](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [15]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  757.1<br />
<br />
Final Rank Value (757.1) = Starting Rank Value (788.2) + Head To Head Adjustments (-31.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.451[<sup>1</sup>](#table2)
- Bounty Collected: 0.242[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.084[<sup>2</sup>](#table1)

The average of these factors is 0.197<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 788.2
- 400 + ( ( 0.197 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 788.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |       14 | 2025-02-26 | DogEvil              | L   | 1.000      | -            | -                | -                | -         |   -12.79 | 957, Hack1ng, LaiKeXu, yancher, zero |
|            6 |       32 | 2025-02-25 | FengDa Gaming        | W   | 1.000      | 0.143        | 0.008 (0.001)    | 0.454 (0.065)    | 0 (0.000) |    13.87 | 957, Hack1ng, LaiKeXu, yancher, zero |
|            5 |       44 | 2025-02-25 | Shika                | L   | 1.000      | -            | -                | -                | -         |   -22.41 | 957, Hack1ng, LaiKeXu, yancher, zero |
|            4 |       66 | 2025-02-24 | Unsettled Resentment | W   | 1.000      | 0.143        | 0.014 (0.002)    | 0.313 (0.045)    | 0 (0.000) |    13.63 | 957, Hack1ng, LaiKeXu, yancher, zero |
|            3 |      943 | 2024-12-27 | FengDa Gaming        | L   | 0.776      | -            | -                | -                | -         |   -13.90 | 957, Hack1ng, LaiKeXu, yancher, zero |
|            2 |     1044 | 2024-12-22 | Magic Cape           | L   | 0.737      | -            | -                | -                | -         |   -14.72 | 957, Hack1ng, LaiKeXu, yancher, zero |
|            1 |     1141 | 2024-12-19 | Dolphins Esports     | W   | 0.723      | 0.406        | 0.015 (0.004)    | 0.000 (0.000)    | 1 (0.723) |     5.19 | 957, Hack1ng, LaiKeXu, yancher, zero |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($20,363.36)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-28 |      0.777 | $685.04        | $532.43         |
| 2024-12-19 |      0.723 | $27,410.77     | $19,830.93      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
