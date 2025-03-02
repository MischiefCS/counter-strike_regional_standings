### Roster Details<br />
Team Name: The Punishers<br />
Roster: burnz, Fadey, FROZ3N, RustyYG, SloWye<br />
Global Rank: [250](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_02_28.md)<br />
Regional Rank: [36]( ../../standings_asia_2025_02_28.md)<br />
<br />
Final Rank Value:  746.8<br />
<br />
Final Rank Value (746.8) = Starting Rank Value (713.5) + Head To Head Adjustments (33.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.318[<sup>1</sup>](#table2)
- Bounty Collected: 0.220[<sup>2</sup>](#table1)
- Opponent Network: 0.024[<sup>2</sup>](#table1)
- LAN Wins: 0.067[<sup>2</sup>](#table1)

The average of these factors is 0.157<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 713.5
- 400 + ( ( 0.157 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 713.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |     1488 | 2024-12-15 | Kitsune Esports | W   | 0.700      | 1.000        | 0.001 (0.001)    | 0.106 (0.074)    | 0 (0.000) |     7.66 | burnz, Fadey, FROZ3N, RustyYG, SloWye |
|           10 |     2050 | 2024-12-04 | Kitsune Esports | W   | 0.626      | 1.000        | 0.001 (0.001)    | 0.106 (0.066)    | 0 (0.000) |     6.96 | burnz, Fadey, FROZ3N, RustyYG, SloWye |
|            9 |     2166 | 2024-12-02 | Blou Bulle      | W   | 0.613      | 1.000        | 0.000 (0.000)    | 0.093 (0.057)    | 0 (0.000) |     6.64 | burnz, Fadey, FROZ3N, RustyYG, SloWye |
|            8 |     2464 | 2024-11-27 | Avasive         | W   | 0.580      | -            | -                | -                | 0 (0.000) |     2.55 | burnz, Fadey, FROZ3N, RustyYG, SloWye |
|            7 |     5768 | 2024-09-29 | Exceed          | W   | 0.184      | 1.000        | 0.003 (0.000)    | 0.019 (0.004)    | 1 (0.184) |     2.33 | burnz, Fadey, FROZ3N, RustyYG, SloWye |
|            6 |     5866 | 2024-09-28 | Monarch Realm   | W   | 0.177      | 1.000        | 0.001 (0.000)    | 0.018 (0.003)    | 1 (0.177) |     2.16 | burnz, Fadey, FROZ3N, RustyYG, SloWye |
|            5 |     5950 | 2024-09-26 | Kitsune Esports | W   | 0.170      | 1.000        | 0.001 (0.000)    | 0.106 (0.018)    | 1 (0.170) |     2.05 | burnz, Fadey, FROZ3N, RustyYG, SloWye |
|            4 |     6295 | 2024-09-22 | Kitsune Esports | W   | 0.139      | 1.000        | 0.001 (0.000)    | 0.106 (0.015)    | 0 (0.000) |     1.70 | burnz, Fadey, FROZ3N, RustyYG, SloWye |
|            3 |     7080 | 2024-09-09 | Exceed          | W   | 0.053      | 1.000        | 0.003 (0.000)    | 0.019 (0.001)    | 0 (0.000) |     0.68 | burnz, Fadey, FROZ3N, RustyYG, SloWye |
|            2 |     7376 | 2024-09-05 | Nixuh           | W   | 0.026      | 1.000        | 0.001 (0.000)    | 0.010 (0.000)    | 0 (0.000) |     0.29 | burnz, Fadey, FROZ3N, RustyYG, SloWye |
|            1 |     7445 | 2024-09-04 | Kitsune Esports | W   | 0.019      | 1.000        | 0.001 (0.000)    | 0.106 (0.002)    | -         |     0.23 | burnz, Fadey, FROZ3N, RustyYG, SloWye |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,030.08)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.700 | $500.00        | $349.78         |
| 2024-09-29 |      0.184 | $8,763.65      | $1,610.73       |
| 2024-09-22 |      0.139 | $500.00        | $69.57          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
