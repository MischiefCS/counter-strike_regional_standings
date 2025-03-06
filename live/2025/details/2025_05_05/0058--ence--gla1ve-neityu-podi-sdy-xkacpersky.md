### Roster Details<br />
Team Name: ENCE<br />
Roster: gla1ve, Neityu, podi, sdy, xKacpersky<br />
Global Rank: [58](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [38]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  796.0<br />
<br />
Final Rank Value (796.0) = Starting Rank Value (796.1) + Head To Head Adjustments (-0.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.427[<sup>1</sup>](#table2)
- Bounty Collected: 0.265[<sup>2</sup>](#table1)
- Opponent Network: 0.035[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.182<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 796.1
- 400 + ( ( 0.182 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 796.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      150 | 2025-02-21 | Natus Vincere Junior | L   | 0.709      | -            | -                | -                | -         |   -10.03 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           13 |      243 | 2025-02-15 | Partizan Esports     | L   | 0.671      | -            | -                | -                | -         |    -7.69 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           12 |      264 | 2025-02-14 | Passion UA           | W   | 0.665      | 0.435        | 0.032 (0.009)    | 0.277 (0.080)    | 0 (0.000) |    14.08 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           11 |      310 | 2025-02-12 | Alliance             | W   | 0.651      | 0.435        | 0.006 (0.002)    | 0.572 (0.162)    | 0 (0.000) |     9.51 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           10 |      449 | 2025-02-08 | Zero Tenacity        | L   | 0.625      | -            | -                | -                | -         |   -12.50 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            9 |      500 | 2025-02-07 | 9INE                 | L   | 0.617      | -            | -                | -                | -         |    -8.88 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            8 |      553 | 2025-02-05 | 9INE                 | W   | 0.604      | 0.143        | 0.041 (0.003)    | 0.853 (0.074)    | 0 (0.000) |    10.26 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            7 |      685 | 2025-01-15 | Team Falcons         | L   | 0.464      | -            | -                | -                | -         |    -0.03 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            6 |      852 | 2024-12-15 | Team Spirit Academy  | L   | 0.257      | -            | -                | -                | -         |    -3.67 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            5 |      869 | 2024-12-14 | AMKAL ESPORTS        | W   | 0.252      | 0.435        | 0.016 (0.002)    | 0.124 (0.014)    | 0 (0.000) |     3.15 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            4 |      917 | 2024-12-12 | Endpoint             | W   | 0.237      | 0.435        | 0.005 (0.000)    | 0.083 (0.009)    | 0 (0.000) |     2.61 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            3 |     1258 | 2024-11-24 | Monte                | W   | 0.117      | 0.143        | 0.015 (0.000)    | 0.052 (0.001)    | 0 (0.000) |     1.52 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            2 |     1280 | 2024-11-23 | Zero Tenacity        | W   | 0.111      | 0.143        | 0.011 (0.000)    | 0.380 (0.006)    | 0 (0.000) |     1.46 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            1 |     1606 | 2024-11-09 | Wild Lotus           | W   | 0.017      | 0.143        | 0.000 (0.000)    | 0.267 (0.001)    | 0 (0.000) |     0.11 | gla1ve, Neityu, podi, sdy, xKacpersky |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,585.73)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-15 |      0.672 | $5,000.00      | $3,359.26       |
| 2024-12-15 |      0.258 | $5,000.00      | $1,289.58       |
| 2024-11-24 |      0.117 | $7,992.37      | $936.88         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
