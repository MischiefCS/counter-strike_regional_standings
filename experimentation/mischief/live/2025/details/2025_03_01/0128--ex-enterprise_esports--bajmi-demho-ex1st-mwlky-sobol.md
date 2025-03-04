### Roster Details<br />
Team Name: Ex-ENTERPRISE esports<br />
Roster: bajmi, Demho, Ex1st, mwlky, Sobol<br />
Global Rank: [128](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [87]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  718.5<br />
<br />
Final Rank Value (718.5) = Starting Rank Value (707.6) + Head To Head Adjustments (10.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.286[<sup>1</sup>](#table2)
- Bounty Collected: 0.220[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.125[<sup>2</sup>](#table1)

The average of these factors is 0.159<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 707.6
- 400 + ( ( 0.159 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 707.6


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
|           15 |     1820 | 2024-10-26 | Illuminar Gaming     | W   | 0.360      | 0.143        | 0.007 (0.000)    | 0.323 (0.017)    | 1 (0.360) |     6.89 | bajmi, Demho, Ex1st, mwlky, Sobol  |
|           14 |     1827 | 2024-10-26 | Los kogutos          | W   | 0.358      | 0.143        | 0.027 (0.001)    | 0.387 (0.020)    | 1 (0.358) |     8.41 | bajmi, Demho, Ex1st, mwlky, Sobol  |
|           13 |     1831 | 2024-10-26 | Ins (Polish team)    | W   | 0.357      | 0.143        | 0.001 (0.000)    | 0.031 (0.002)    | 1 (0.357) |     4.32 | bajmi, Demho, Ex1st, mwlky, Sobol  |
|           12 |     1973 | 2024-10-13 | Passion UA           | L   | 0.272      | -            | -                | -                | -         |    -1.23 | bajmi, Demho, Ex1st, mwlky, Sobol  |
|           11 |     1984 | 2024-10-12 | Illuminar Gaming     | L   | 0.266      | -            | -                | -                | -         |    -3.27 | bajmi, Demho, Ex1st, mwlky, Sobol  |
|           10 |     2602 | 2024-09-24 | Rebels Gaming        | L   | 0.146      | -            | -                | -                | -         |    -2.23 | Demho, Ex1st, mwlky, sk1tt, Sobol  |
|            9 |     2647 | 2024-09-23 | Los kogutos          | W   | 0.140      | 0.143        | 0.027 (0.001)    | 0.387 (0.008)    | 0 (0.000) |     3.36 | Demho, Ex1st, mwlky, sk1tt, Sobol  |
|            8 |     2720 | 2024-09-20 | Team Space           | L   | 0.118      | -            | -                | -                | -         |    -2.88 | bajmi, Demho, Ex1st, m4tthi, Sobol |
|            7 |     2867 | 2024-09-15 | KONO.ECF             | L   | 0.084      | -            | -                | -                | -         |    -1.09 | bajmi, Demho, Ex1st, mwlky, Sobol  |
|            6 |     2885 | 2024-09-14 | Natus Vincere Junior | L   | 0.078      | -            | -                | -                | -         |    -0.54 | bajmi, Demho, Ex1st, mwlky, Sobol  |
|            5 |     2924 | 2024-09-13 | HOTU                 | L   | 0.071      | -            | -                | -                | -         |    -1.33 | bajmi, Demho, Ex1st, m4tthi, Sobol |
|            4 |     2964 | 2024-09-12 | UNiTY esports        | W   | 0.064      | 0.333        | 0.025 (0.001)    | 0.177 (0.004)    | 0 (0.000) |     1.16 | bajmi, Demho, Ex1st, mwlky, Sobol  |
|            3 |     3067 | 2024-09-07 | TEAM NEXT LEVEL      | L   | 0.033      | -            | -                | -                | -         |    -0.52 | bajmi, Demho, Ex1st, fr3nd, Sobol  |
|            2 |     3204 | 2024-09-03 | HOTU                 | L   | 0.006      | -            | -                | -                | -         |    -0.12 | bajmi, Demho, Ex1st, fr3nd, Sobol  |
|            1 |     3222 | 2024-09-03 | Team Sampi           | L   | 0.004      | -            | -                | -                | -         |    -0.05 | bajmi, Demho, Ex1st, fr3nd, Sobol  |

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
