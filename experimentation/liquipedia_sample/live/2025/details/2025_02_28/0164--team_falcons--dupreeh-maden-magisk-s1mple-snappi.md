### Roster Details<br />
Team Name: Team Falcons<br />
Roster: dupreeh, maden, Magisk, s1mple, Snappi<br />
Global Rank: [164](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [118]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  770.2<br />
<br />
Final Rank Value (770.2) = Starting Rank Value (756.6) + Head To Head Adjustments (13.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.344[<sup>1</sup>](#table2)
- Bounty Collected: 0.263[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.073[<sup>2</sup>](#table1)

The average of these factors is 0.173<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 756.6
- 400 + ( ( 0.173 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 756.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     2978 | 2024-11-19 | GamerLegion   | L   | 0.523      | -            | -                | -                | -         |    -0.30 | dupreeh, maden, Magisk, s1mple, Snappi   |
|           13 |     3027 | 2024-11-17 | SAW           | L   | 0.516      | -            | -                | -                | -         |    -0.47 | dupreeh, maden, Magisk, s1mple, Snappi   |
|           12 |     3064 | 2024-11-17 | FaZe Clan     | L   | 0.511      | -            | -                | -                | -         |    -0.05 | dupreeh, maden, Magisk, s1mple, Snappi   |
|           11 |     3102 | 2024-11-16 | Dynamo Eclot  | W   | 0.510      | 0.143        | 0.151 (0.011)    | 0.759 (0.055)    | 1 (0.510) |    14.13 | dupreeh, maden, Magisk, s1mple, Snappi   |
|           10 |     4327 | 2024-10-26 | Eternal Fire  | L   | 0.364      | -            | -                | -                | -         |    -0.02 | dupreeh, maden, Magisk, s1mple, Snappi   |
|            9 |     4384 | 2024-10-25 | SAW           | L   | 0.357      | -            | -                | -                | -         |    -0.29 | dupreeh, maden, Magisk, s1mple, Snappi   |
|            8 |     4518 | 2024-10-21 | Virtus.pro    | L   | 0.332      | -            | -                | -                | -         |    -0.06 | dupreeh, maden, Magisk, s1mple, Snappi   |
|            7 |     4535 | 2024-10-21 | 3DMAX         | L   | 0.330      | -            | -                | -                | -         |    -0.13 | dupreeh, maden, Magisk, s1mple, Snappi   |
|            6 |     6016 | 2024-09-26 | FaZe Clan     | L   | 0.164      | -            | -                | -                | -         |    -0.01 | dupreeh, maden, Magisk, Snappi, SunPayus |
|            5 |     6109 | 2024-09-25 | Natus Vincere | L   | 0.157      | -            | -                | -                | -         |    -0.02 | dupreeh, maden, Magisk, Snappi, SunPayus |
|            4 |     6820 | 2024-09-14 | RED Canids    | L   | 0.084      | -            | -                | -                | -         |    -1.09 | dupreeh, maden, Magisk, Snappi, SunPayus |
|            3 |     6891 | 2024-09-13 | Virtus.pro    | L   | 0.077      | -            | -                | -                | -         |    -0.01 | dupreeh, maden, Magisk, Snappi, SunPayus |
|            2 |     6937 | 2024-09-12 | ATOX Esports  | W   | 0.071      | 0.889        | 0.076 (0.005)    | 0.727 (0.046)    | 1 (0.071) |     2.07 | dupreeh, maden, Magisk, Snappi, SunPayus |
|            1 |     6993 | 2024-09-11 | FURIA         | L   | 0.064      | -            | -                | -                | -         |    -0.23 | dupreeh, maden, Magisk, Snappi, SunPayus |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,563.13)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-27 |      0.373 | $2,000.00      | $745.60         |
| 2024-09-29 |      0.185 | $10,000.00     | $1,848.38       |
| 2024-09-22 |      0.138 | $7,000.00      | $969.14         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
