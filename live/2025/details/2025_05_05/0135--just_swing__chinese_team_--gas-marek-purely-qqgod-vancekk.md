### Roster Details<br />
Team Name: Just Swing (Chinese team)<br />
Roster: gas, Marek, Purely, qqGOD, VanceKK<br />
Global Rank: [135](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_05_05.md)<br />
Regional Rank: [14]( ../../standings_asia_2025_05_05.md)<br />
<br />
Final Rank Value:  602.3<br />
<br />
Final Rank Value (602.3) = Starting Rank Value (652.7) + Head To Head Adjustments (-50.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.274[<sup>1</sup>](#table2)
- Bounty Collected: 0.188[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.116<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 652.7
- 400 + ( ( 0.116 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 652.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |       48 | 2025-02-24 | Unsettled Resentment    | L   | 0.735      | -            | -                | -                | -         |   -14.01 | gas, Marek, Purely, qqGOD, VanceKK |
|           11 |       64 | 2025-02-24 | Shika                   | L   | 0.730      | -            | -                | -                | -         |   -15.54 | gas, Marek, Purely, qqGOD, VanceKK |
|           10 |      383 | 2025-02-09 | Rooster                 | L   | 0.635      | -            | -                | -                | -         |   -13.74 | gas, Marek, Purely, qqGOD, VanceKK |
|            9 |      412 | 2025-02-08 | SemperFi Esports        | L   | 0.629      | -            | -                | -                | -         |   -13.60 | gas, Marek, Purely, qqGOD, VanceKK |
|            8 |      477 | 2025-02-07 | DXA Esports             | W   | 0.622      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.74 | gas, Marek, Purely, qqGOD, VanceKK |
|            7 |     1075 | 2024-12-04 | ATOX Esports            | L   | 0.183      | -            | -                | -                | -         |    -0.86 | gas, Marek, Purely, qqGOD, VanceKK |
|            6 |     1079 | 2024-12-04 | IHC Esports             | L   | 0.182      | -            | -                | -                | -         |    -2.65 | gas, Marek, Purely, qqGOD, VanceKK |
|            5 |     1080 | 2024-12-03 | Nomads (Mongolian team) | W   | 0.182      | 0.333        | 0.000 (0.000)    | 0.081 (0.005)    | 0 (0.000) |     1.80 | gas, Marek, Purely, qqGOD, VanceKK |
|            4 |     1288 | 2024-11-23 | ATOX Esports            | L   | 0.109      | -            | -                | -                | -         |    -0.51 | gas, Marek, Purely, qqGOD, VanceKK |
|            3 |     1293 | 2024-11-22 | IHC Esports             | W   | 0.109      | 0.333        | 0.003 (0.000)    | 0.131 (0.005)    | 0 (0.000) |     1.84 | gas, Marek, Purely, qqGOD, VanceKK |
|            2 |     1346 | 2024-11-20 | Harizma                 | W   | 0.096      | 0.333        | 0.000 (0.000)    | 0.032 (0.001)    | 0 (0.000) |     0.94 | gas, Marek, Purely, qqGOD, VanceKK |
|            1 |     1349 | 2024-11-20 | The Huns Esports        | W   | 0.095      | 0.333        | 0.012 (0.000)    | 0.392 (0.012)    | 0 (0.000) |     2.14 | gas, Marek, Purely, qqGOD, VanceKK |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($273.61)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-23 |      0.109 | $2,500.00      | $273.61         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
