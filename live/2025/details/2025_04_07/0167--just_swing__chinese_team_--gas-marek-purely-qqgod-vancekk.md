### Roster Details<br />
Team Name: Just Swing (Chinese team)<br />
Roster: gas, Marek, Purely, qqGOD, VanceKK<br />
Global Rank: [167](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_04_07.md)<br />
Regional Rank: [19]( ../../standings_asia_2025_04_07.md)<br />
<br />
Final Rank Value:  613.2<br />
<br />
Final Rank Value (613.2) = Starting Rank Value (662.8) + Head To Head Adjustments (-49.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.287[<sup>1</sup>](#table2)
- Bounty Collected: 0.214[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.127<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 662.8
- 400 + ( ( 0.127 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 662.8


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
|           12 |       48 | 2025-02-24 | Unsettled Resentment    | L   | 0.922      | -            | -                | -                | -         |   -12.47 | gas, Marek, Purely, qqGOD, VanceKK |
|           11 |       64 | 2025-02-24 | Shika                   | L   | 0.916      | -            | -                | -                | -         |   -19.31 | gas, Marek, Purely, qqGOD, VanceKK |
|           10 |      383 | 2025-02-09 | Rooster                 | L   | 0.821      | -            | -                | -                | -         |   -14.71 | gas, Marek, Purely, qqGOD, VanceKK |
|            9 |      412 | 2025-02-08 | SemperFi Esports        | L   | 0.815      | -            | -                | -                | -         |   -17.76 | gas, Marek, Purely, qqGOD, VanceKK |
|            8 |      477 | 2025-02-07 | DXA Esports             | W   | 0.809      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.46 | gas, Marek, Purely, qqGOD, VanceKK |
|            7 |     1075 | 2024-12-04 | ATOX Esports            | L   | 0.370      | -            | -                | -                | -         |    -1.85 | gas, Marek, Purely, qqGOD, VanceKK |
|            6 |     1079 | 2024-12-04 | IHC Esports             | L   | 0.369      | -            | -                | -                | -         |    -5.61 | gas, Marek, Purely, qqGOD, VanceKK |
|            5 |     1080 | 2024-12-03 | Nomads (Mongolian team) | W   | 0.369      | 0.333        | 0.000 (0.000)    | 0.074 (0.009)    | 0 (0.000) |     3.29 | gas, Marek, Purely, qqGOD, VanceKK |
|            4 |     1288 | 2024-11-23 | ATOX Esports            | L   | 0.296      | -            | -                | -                | -         |    -1.46 | gas, Marek, Purely, qqGOD, VanceKK |
|            3 |     1293 | 2024-11-22 | IHC Esports             | W   | 0.295      | 0.333        | 0.002 (0.000)    | 0.171 (0.017)    | 0 (0.000) |     4.79 | gas, Marek, Purely, qqGOD, VanceKK |
|            2 |     1346 | 2024-11-20 | Harizma                 | W   | 0.282      | 0.333        | 0.001 (0.000)    | 0.056 (0.005)    | 0 (0.000) |     4.30 | gas, Marek, Purely, qqGOD, VanceKK |
|            1 |     1349 | 2024-11-20 | The Huns Esports        | W   | 0.282      | 0.333        | 0.019 (0.002)    | 0.455 (0.043)    | 0 (0.000) |     6.75 | gas, Marek, Purely, qqGOD, VanceKK |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($740.28)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-23 |      0.296 | $2,500.00      | $740.28         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
