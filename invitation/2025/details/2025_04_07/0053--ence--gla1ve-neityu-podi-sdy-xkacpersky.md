### Roster Details<br />
Team Name: ENCE<br />
Roster: gla1ve, Neityu, podi, sdy, xKacpersky<br />
Global Rank: [53](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [38]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  862.1<br />
<br />
Final Rank Value (862.1) = Starting Rank Value (862.1) + Head To Head Adjustments (0.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.465[<sup>1</sup>](#table2)
- Bounty Collected: 0.335[<sup>2</sup>](#table1)
- Opponent Network: 0.058[<sup>2</sup>](#table1)
- LAN Wins: 0.036[<sup>2</sup>](#table1)

The average of these factors is 0.224<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 862.1
- 400 + ( ( 0.224 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 862.1


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
|           19 |      150 | 2025-02-21 | Natus Vincere Junior | L   | 0.896      | -            | -                | -                | -         |   -14.41 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           18 |      243 | 2025-02-15 | Partizan Esports     | L   | 0.857      | -            | -                | -                | -         |    -9.42 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           17 |      264 | 2025-02-14 | Passion UA           | W   | 0.852      | 0.435        | 0.028 (0.010)    | 0.328 (0.121)    | 0 (0.000) |    18.08 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           16 |      310 | 2025-02-12 | Alliance             | W   | 0.838      | 0.435        | 0.011 (0.004)    | 0.592 (0.216)    | 0 (0.000) |    11.54 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           15 |      449 | 2025-02-08 | Zero Tenacity        | L   | 0.812      | -            | -                | -                | -         |   -17.58 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           14 |      500 | 2025-02-07 | 9INE                 | L   | 0.804      | -            | -                | -                | -         |   -13.00 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           13 |      553 | 2025-02-05 | 9INE                 | W   | 0.790      | 0.143        | 0.036 (0.004)    | 0.895 (0.101)    | 0 (0.000) |    11.68 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           12 |      685 | 2025-01-15 | Team Falcons         | L   | 0.651      | -            | -                | -                | -         |    -0.07 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           11 |      852 | 2024-12-15 | Team Spirit Academy  | L   | 0.444      | -            | -                | -                | -         |    -7.30 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           10 |      869 | 2024-12-14 | AMKAL ESPORTS        | W   | 0.438      | 0.435        | 0.015 (0.003)    | 0.151 (0.029)    | 0 (0.000) |     4.01 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            9 |      917 | 2024-12-12 | Endpoint             | W   | 0.423      | 0.435        | 0.007 (0.001)    | 0.154 (0.028)    | 0 (0.000) |     3.68 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            8 |     1258 | 2024-11-24 | Monte                | W   | 0.304      | 0.143        | 0.021 (0.001)    | 0.098 (0.004)    | 0 (0.000) |     3.16 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            7 |     1280 | 2024-11-23 | Zero Tenacity        | W   | 0.298      | 0.143        | 0.017 (0.001)    | 0.423 (0.018)    | -         |     3.50 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            6 |     1606 | 2024-11-09 | Wild Lotus           | W   | 0.204      | 0.143        | -                | 0.350 (0.010)    | -         |     1.07 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            5 |     1847 | 2024-10-20 | Team Falcons         | W   | 0.070      | 0.589        | 1.000 (0.041)    | 0.696 (0.029)    | 1 (0.070) |     2.21 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            4 |     1865 | 2024-10-19 | The MongolZ          | W   | 0.063      | 0.589        | 1.000 (0.037)    | 0.566 (0.021)    | 1 (0.063) |     1.99 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            3 |     1888 | 2024-10-18 | 9z Team              | W   | 0.058      | 0.589        | 0.003 (0.000)    | -                | 1 (0.058) |     0.50 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            2 |     1909 | 2024-10-17 | Team Falcons         | L   | 0.050      | -            | -                | -                | -         |    -0.00 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            1 |     1914 | 2024-10-17 | 9z Team              | W   | 0.050      | -            | -                | -                | 1 (0.050) |     0.43 | gla1ve, Neityu, podi, sdy, xKacpersky |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,992.91)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-15 |      0.859 | $5,000.00      | $4,292.59       |
| 2024-12-15 |      0.445 | $5,000.00      | $2,222.92       |
| 2024-11-24 |      0.304 | $7,992.37      | $2,428.79       |
| 2024-10-20 |      0.070 | $100,000.00    | $7,048.61       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
