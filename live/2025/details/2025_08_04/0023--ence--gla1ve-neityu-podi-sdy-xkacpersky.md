### Roster Details<br />
Team Name: ENCE<br />
Roster: gla1ve, Neityu, podi, sdy, xKacpersky<br />
Global Rank: [23](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [17]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  783.2<br />
<br />
Final Rank Value (783.2) = Starting Rank Value (785.4) + Head To Head Adjustments (-2.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.404[<sup>1</sup>](#table2)
- Bounty Collected: 0.183[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.147<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 785.4
- 400 + ( ( 0.147 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 785.4


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
|            6 |      150 | 2025-02-21 | Natus Vincere Junior | L   | 0.102      | -            | -                | -                | -         |    -1.37 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            5 |      243 | 2025-02-15 | Partizan Esports     | L   | 0.064      | -            | -                | -                | -         |    -0.81 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            4 |      264 | 2025-02-14 | Passion UA           | W   | 0.059      | 0.435        | 0.013 (0.000)    | 0.092 (0.002)    | 0 (0.000) |     0.54 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            3 |      310 | 2025-02-12 | Alliance             | W   | 0.044      | 0.435        | 0.000 (0.000)    | 0.773 (0.015)    | 0 (0.000) |     0.15 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            2 |      449 | 2025-02-08 | Zero Tenacity        | L   | 0.018      | -            | -                | -                | -         |    -0.48 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            1 |      500 | 2025-02-07 | 9INE                 | L   | 0.010      | -            | -                | -                | -         |    -0.27 | gla1ve, Neityu, podi, sdy, xKacpersky |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($325.93)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-15 |      0.065 | $5,000.00      | $325.93         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
