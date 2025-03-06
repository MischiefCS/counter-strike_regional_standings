### Roster Details<br />
Team Name: ENCE Academy<br />
Roster: 2high, millert, myltsi, Schwarz, teme<br />
Global Rank: [95](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [68]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  748.6<br />
<br />
Final Rank Value (748.6) = Starting Rank Value (762.3) + Head To Head Adjustments (-13.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.317[<sup>1</sup>](#table2)
- Bounty Collected: 0.233[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.135[<sup>2</sup>](#table1)

The average of these factors is 0.175<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 762.3
- 400 + ( ( 0.175 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 762.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      112 | 2025-02-22 | JANO Esports       | L   | 0.904      | -            | -                | -                | -         |   -10.19 | 2high, millert, myltsi, Schwarz, teme |
|            9 |      122 | 2025-02-21 | HAVU               | W   | 0.899      | 0.143        | 0.002 (0.000)    | 0.000 (0.000)    | 1 (0.899) |     6.46 | 2high, millert, myltsi, Schwarz, teme |
|            8 |      757 | 2024-12-24 | WOPA Esport        | L   | 0.503      | -            | -                | -                | -         |    -7.36 | 2high, millert, myltsi, Schwarz, teme |
|            7 |      761 | 2024-12-23 | KONO.ECF           | L   | 0.496      | -            | -                | -                | -         |    -8.48 | 2high, millert, myltsi, Schwarz, teme |
|            6 |      809 | 2024-12-19 | ESC Gaming         | W   | 0.469      | 0.333        | 0.000 (0.000)    | 0.224 (0.035)    | 0 (0.000) |     3.27 | 2high, millert, myltsi, Schwarz, teme |
|            5 |      818 | 2024-12-18 | ALASKA             | W   | 0.463      | 0.333        | 0.030 (0.005)    | 0.605 (0.093)    | 0 (0.000) |    11.15 | 2high, millert, myltsi, Schwarz, teme |
|            4 |     1113 | 2024-12-02 | Illuminar Gaming   | L   | 0.358      | -            | -                | -                | -         |    -6.54 | 2high, millert, myltsi, Schwarz, teme |
|            3 |     1190 | 2024-11-29 | Astralis Talent    | W   | 0.338      | 0.333        | 0.002 (0.000)    | 0.310 (0.035)    | 0 (0.000) |     4.38 | 2high, millert, myltsi, Schwarz, teme |
|            2 |     1208 | 2024-11-28 | Dark Cloud Esports | L   | 0.330      | -            | -                | -                | -         |    -5.61 | 2high, millert, myltsi, Schwarz, teme |
|            1 |     1849 | 2024-10-20 | JANO Esports       | L   | 0.069      | -            | -                | -                | -         |    -0.84 | 2high, millert, myltsi, Schwarz, teme |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,569.48)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-22 |      0.904 | $1,046.46      | $946.39         |
| 2024-12-25 |      0.510 | $1,000.00      | $509.93         |
| 2024-10-20 |      0.069 | $1,631.14      | $113.16         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
