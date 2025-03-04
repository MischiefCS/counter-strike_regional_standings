### Roster Details<br />
Team Name: Team Falcons<br />
Roster: dupreeh, maden, Magisk, s1mple, Snappi<br />
Global Rank: [123](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [84]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  729.3<br />
<br />
Final Rank Value (729.3) = Starting Rank Value (715.9) + Head To Head Adjustments (13.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.323[<sup>1</sup>](#table2)
- Bounty Collected: 0.256[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.066[<sup>2</sup>](#table1)

The average of these factors is 0.164<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 715.9
- 400 + ( ( 0.164 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 715.9


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
|           10 |     1375 | 2024-11-19 | GamerLegion   | L   | 0.517      | -            | -                | -                | -         |    -0.16 | dupreeh, maden, Magisk, s1mple, Snappi   |
|            9 |     1391 | 2024-11-17 | SAW           | L   | 0.510      | -            | -                | -                | -         |    -0.80 | dupreeh, maden, Magisk, s1mple, Snappi   |
|            8 |     1402 | 2024-11-17 | FaZe Clan     | L   | 0.505      | -            | -                | -                | -         |    -0.02 | dupreeh, maden, Magisk, s1mple, Snappi   |
|            7 |     1414 | 2024-11-16 | Dynamo Eclot  | W   | 0.503      | 0.143        | 0.126 (0.009)    | 0.674 (0.048)    | 1 (0.503) |    13.63 | dupreeh, maden, Magisk, s1mple, Snappi   |
|            6 |     2506 | 2024-09-26 | FaZe Clan     | L   | 0.158      | -            | -                | -                | -         |    -0.01 | dupreeh, maden, Magisk, Snappi, SunPayus |
|            5 |     2565 | 2024-09-25 | Natus Vincere | L   | 0.151      | -            | -                | -                | -         |    -0.02 | dupreeh, maden, Magisk, Snappi, SunPayus |
|            4 |     2887 | 2024-09-14 | RED Canids    | L   | 0.078      | -            | -                | -                | -         |    -0.82 | dupreeh, maden, Magisk, Snappi, SunPayus |
|            3 |     2923 | 2024-09-13 | Virtus.pro    | L   | 0.071      | -            | -                | -                | -         |    -0.01 | dupreeh, maden, Magisk, Snappi, SunPayus |
|            2 |     2956 | 2024-09-12 | ATOX Esports  | W   | 0.065      | 0.889        | 0.058 (0.003)    | 0.659 (0.038)    | 1 (0.065) |     1.72 | dupreeh, maden, Magisk, Snappi, SunPayus |
|            1 |     2988 | 2024-09-11 | FURIA         | L   | 0.058      | -            | -                | -                | -         |    -0.03 | dupreeh, maden, Magisk, Snappi, SunPayus |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,711.67)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-29 |      0.179 | $10,000.00     | $1,786.11       |
| 2024-09-22 |      0.132 | $7,000.00      | $925.56         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
