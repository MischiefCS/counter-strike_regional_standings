### Roster Details<br />
Team Name: ENCE<br />
Roster: gla1ve, Neityu, podi, sdy, xKacpersky<br />
Global Rank: [36](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [26]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  758.5<br />
<br />
Final Rank Value (758.5) = Starting Rank Value (769.4) + Head To Head Adjustments (-10.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.386[<sup>1</sup>](#table2)
- Bounty Collected: 0.202[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.150<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 769.4
- 400 + ( ( 0.150 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 769.4


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
|            8 |      150 | 2025-02-21 | Natus Vincere Junior | L   | 0.289      | -            | -                | -                | -         |    -4.32 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            7 |      243 | 2025-02-15 | Partizan Esports     | L   | 0.251      | -            | -                | -                | -         |    -3.22 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            6 |      264 | 2025-02-14 | Passion UA           | W   | 0.245      | 0.435        | 0.010 (0.001)    | 0.243 (0.026)    | 0 (0.000) |     3.80 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            5 |      310 | 2025-02-12 | Alliance             | W   | 0.231      | 0.435        | 0.000 (0.000)    | 0.702 (0.070)    | 0 (0.000) |     1.67 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            4 |      449 | 2025-02-08 | Zero Tenacity        | L   | 0.205      | -            | -                | -                | -         |    -5.18 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            3 |      500 | 2025-02-07 | 9INE                 | L   | 0.197      | -            | -                | -                | -         |    -4.86 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            2 |      553 | 2025-02-05 | 9INE                 | W   | 0.184      | 0.143        | 0.000 (0.000)    | 0.627 (0.016)    | 0 (0.000) |     1.23 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            1 |      685 | 2025-01-15 | Team Falcons         | L   | 0.044      | -            | -                | -                | -         |    -0.00 | gla1ve, Neityu, podi, sdy, xKacpersky |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,259.26)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-15 |      0.252 | $5,000.00      | $1,259.26       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
