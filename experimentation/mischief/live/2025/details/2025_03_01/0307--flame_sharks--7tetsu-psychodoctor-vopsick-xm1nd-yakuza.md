### Roster Details<br />
Team Name: Flame Sharks<br />
Roster: 7tetsu, PsychoDoctor, Vopsick, xm1nd, Yakuza<br />
Global Rank: [307](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [175]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  530.0<br />
<br />
Final Rank Value (530.0) = Starting Rank Value (516.6) + Head To Head Adjustments (13.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.222[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.060<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 516.6
- 400 + ( ( 0.060 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 516.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      533 | 2025-02-09 | K27              | W   | 1.000      | 0.143        | 0.005 (0.001)    | 0.428 (0.061)    | 0 (0.000) |    22.99 | 7tetsu, PsychoDoctor, Vopsick, xm1nd, Yakuza |
|            7 |      541 | 2025-02-09 | FLuffy Gangsters | W   | 1.000      | 0.143        | 0.013 (0.002)    | 0.560 (0.080)    | 0 (0.000) |    23.40 | 7tetsu, PsychoDoctor, Vopsick, xm1nd, Yakuza |
|            6 |      814 | 2025-02-04 | ENRAGE           | L   | 1.000      | -            | -                | -                | -         |   -10.34 | 7tetsu, PsychoDoctor, Vopsick, xm1nd, Yakuza |
|            5 |     1456 | 2024-12-14 | Underrated       | L   | 0.687      | -            | -                | -                | -         |   -13.69 | 7tetsu, HEiS, PsychoDoctor, xm1nd, Yakuza    |
|            4 |     2105 | 2024-11-30 | GameAgents       | L   | 0.594      | -            | -                | -                | -         |   -12.26 | 7tetsu, Dis1, verbal4buser, xm1nd, Yakuza    |
|            3 |     2285 | 2024-11-26 | FLuffy Gangsters | L   | 0.567      | -            | -                | -                | -         |    -4.09 | 7tetsu, Dis1, verbal4buser, xm1nd, Yakuza    |
|            2 |     2362 | 2024-11-23 | FLuffy Gangsters | L   | 0.547      | -            | -                | -                | -         |    -3.94 | 7tetsu, Dis1, verbal4buser, xm1nd, Yakuza    |
|            1 |     2366 | 2024-11-23 | 4z               | W   | 0.547      | 0.262        | 0.004 (0.001)    | 0.169 (0.024)    | 0 (0.000) |    11.36 | 7tetsu, Dis1, verbal4buser, xm1nd, Yakuza    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
