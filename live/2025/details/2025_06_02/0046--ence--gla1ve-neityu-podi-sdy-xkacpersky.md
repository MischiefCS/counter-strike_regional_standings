### Roster Details<br />
Team Name: ENCE<br />
Roster: gla1ve, Neityu, podi, sdy, xKacpersky<br />
Global Rank: [46](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [31]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  764.1<br />
<br />
Final Rank Value (764.1) = Starting Rank Value (775.5) + Head To Head Adjustments (-11.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.400[<sup>1</sup>](#table2)
- Bounty Collected: 0.226[<sup>2</sup>](#table1)
- Opponent Network: 0.022[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.162<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 775.5
- 400 + ( ( 0.162 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 775.5


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
|           11 |      150 | 2025-02-21 | Natus Vincere Junior | L   | 0.522      | -            | -                | -                | -         |    -7.44 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           10 |      243 | 2025-02-15 | Partizan Esports     | L   | 0.484      | -            | -                | -                | -         |    -6.19 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            9 |      264 | 2025-02-14 | Passion UA           | W   | 0.479      | 0.435        | 0.011 (0.002)    | 0.239 (0.050)    | 0 (0.000) |     7.75 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            8 |      310 | 2025-02-12 | Alliance             | W   | 0.464      | 0.435        | 0.000 (0.000)    | 0.621 (0.125)    | 0 (0.000) |     3.78 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            7 |      449 | 2025-02-08 | Zero Tenacity        | L   | 0.438      | -            | -                | -                | -         |    -8.99 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            6 |      500 | 2025-02-07 | 9INE                 | L   | 0.430      | -            | -                | -                | -         |    -6.78 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            5 |      553 | 2025-02-05 | 9INE                 | W   | 0.417      | 0.143        | 0.020 (0.001)    | 0.787 (0.047)    | 0 (0.000) |     6.58 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            4 |      685 | 2025-01-15 | Team Falcons         | L   | 0.278      | -            | -                | -                | -         |    -0.01 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            3 |      852 | 2024-12-15 | Team Spirit Academy  | L   | 0.070      | -            | -                | -                | -         |    -1.15 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            2 |      869 | 2024-12-14 | AMKAL ESPORTS        | W   | 0.065      | 0.435        | 0.008 (0.000)    | 0.067 (0.002)    | 0 (0.000) |     0.79 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            1 |      917 | 2024-12-12 | Endpoint             | W   | 0.050      | 0.435        | 0.000 (0.000)    | 0.014 (0.000)    | 0 (0.000) |     0.28 | gla1ve, Neityu, podi, sdy, xKacpersky |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,782.18)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-15 |      0.485 | $5,000.00      | $2,425.93       |
| 2024-12-15 |      0.071 | $5,000.00      | $356.25         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
