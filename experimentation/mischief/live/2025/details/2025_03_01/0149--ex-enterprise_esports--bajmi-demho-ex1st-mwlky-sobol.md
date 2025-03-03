### Roster Details<br />
Team Name: Ex-ENTERPRISE esports<br />
Roster: bajmi, Demho, Ex1st, mwlky, Sobol<br />
Global Rank: [149](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [104]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  725.1<br />
<br />
Final Rank Value (725.1) = Starting Rank Value (712.5) + Head To Head Adjustments (12.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.286[<sup>1</sup>](#table2)
- Bounty Collected: 0.222[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.125[<sup>2</sup>](#table1)

The average of these factors is 0.160<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 712.5
- 400 + ( ( 0.160 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 712.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     3435 | 2024-10-26 | Illuminar Gaming     | W   | 0.360      | 0.143        | 0.007 (0.000)    | 0.301 (0.015)    | 1 (0.360) |     7.05 | bajmi, Demho, Ex1st, mwlky, Sobol  |
|           14 |     3442 | 2024-10-26 | Los kogutos          | W   | 0.358      | 0.143        | 0.030 (0.002)    | 0.403 (0.021)    | 1 (0.358) |     8.59 | bajmi, Demho, Ex1st, mwlky, Sobol  |
|           13 |     3446 | 2024-10-26 | Ins (Polish team)    | W   | 0.357      | 0.143        | 0.003 (0.000)    | 0.230 (0.012)    | 1 (0.357) |     4.76 | bajmi, Demho, Ex1st, mwlky, Sobol  |
|           12 |     3588 | 2024-10-13 | Passion UA           | L   | 0.272      | -            | -                | -                | -         |    -1.22 | bajmi, Demho, Ex1st, mwlky, Sobol  |
|           11 |     3599 | 2024-10-12 | Illuminar Gaming     | L   | 0.266      | -            | -                | -                | -         |    -3.18 | bajmi, Demho, Ex1st, mwlky, Sobol  |
|           10 |     4217 | 2024-09-24 | Rebels Gaming        | L   | 0.146      | -            | -                | -                | -         |    -2.23 | Demho, Ex1st, mwlky, sk1tt, Sobol  |
|            9 |     4262 | 2024-09-23 | Los kogutos          | W   | 0.140      | 0.143        | 0.030 (0.001)    | 0.403 (0.008)    | 0 (0.000) |     3.42 | Demho, Ex1st, mwlky, sk1tt, Sobol  |
|            8 |     4345 | 2024-09-20 | Team Space           | L   | 0.118      | -            | -                | -                | -         |    -2.86 | bajmi, Demho, Ex1st, m4tthi, Sobol |
|            7 |     4505 | 2024-09-15 | KONO.ECF             | L   | 0.084      | -            | -                | -                | -         |    -0.73 | bajmi, Demho, Ex1st, mwlky, Sobol  |
|            6 |     4523 | 2024-09-14 | Natus Vincere Junior | L   | 0.078      | -            | -                | -                | -         |    -0.52 | bajmi, Demho, Ex1st, mwlky, Sobol  |
|            5 |     4562 | 2024-09-13 | HOTU                 | L   | 0.071      | -            | -                | -                | -         |    -1.17 | bajmi, Demho, Ex1st, m4tthi, Sobol |
|            4 |     4602 | 2024-09-12 | UNiTY esports        | W   | 0.064      | 0.333        | 0.025 (0.001)    | 0.164 (0.003)    | 0 (0.000) |     1.17 | bajmi, Demho, Ex1st, mwlky, Sobol  |
|            3 |     4705 | 2024-09-07 | TEAM NEXT LEVEL      | L   | 0.033      | -            | -                | -                | -         |    -0.38 | bajmi, Demho, Ex1st, fr3nd, Sobol  |
|            2 |     4842 | 2024-09-03 | HOTU                 | L   | 0.006      | -            | -                | -                | -         |    -0.10 | bajmi, Demho, Ex1st, fr3nd, Sobol  |
|            1 |     4860 | 2024-09-03 | Team Sampi           | L   | 0.004      | -            | -                | -                | -         |    -0.05 | bajmi, Demho, Ex1st, fr3nd, Sobol  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,074.15)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-26 |      0.360 | $2,987.79      | $1,074.15       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
