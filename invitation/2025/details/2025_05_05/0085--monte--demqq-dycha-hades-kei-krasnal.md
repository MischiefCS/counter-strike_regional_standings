### Roster Details<br />
Team Name: Monte<br />
Roster: DemQQ, dycha, hades, KEi, kRaSnaL<br />
Global Rank: [85](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [61]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  734.0<br />
<br />
Final Rank Value (734.0) = Starting Rank Value (733.0) + Head To Head Adjustments (1.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.355[<sup>1</sup>](#table2)
- Bounty Collected: 0.250[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.153<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 733.0
- 400 + ( ( 0.153 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 733.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      832 | 2024-12-16 | Dynamo Eclot  | L   | 0.264      | -            | -                | -                | -         |    -2.42 | DemQQ, dycha, hades, KEi, kRaSnaL |
|            6 |      902 | 2024-12-13 | Metizport     | L   | 0.243      | -            | -                | -                | -         |    -3.17 | DemQQ, dycha, hades, KEi, kRaSnaL |
|            5 |      941 | 2024-12-10 | Aurora Gaming | W   | 0.224      | 0.435        | 0.001 (0.000)    | 0.412 (0.040)    | 0 (0.000) |     3.10 | DemQQ, dycha, hades, KEi, kRaSnaL |
|            4 |      949 | 2024-12-09 | GUN5 Esports  | W   | 0.218      | 0.435        | 0.103 (0.010)    | 0.288 (0.027)    | 0 (0.000) |     4.62 | DemQQ, dycha, hades, KEi, kRaSnaL |
|            3 |     1258 | 2024-11-24 | ENCE          | L   | 0.117      | -            | -                | -                | -         |    -1.52 | DemQQ, dycha, hades, KEi, kRaSnaL |
|            2 |     1586 | 2024-11-10 | FAVBET Team   | W   | 0.024      | 0.143        | 0.021 (0.000)    | 0.364 (0.001)    | 0 (0.000) |     0.41 | DemQQ, dycha, hades, KEi, kRaSnaL |
|            1 |     1637 | 2024-11-07 | 500           | L   | 0.004      | -            | -                | -                | -         |    -0.02 | DemQQ, dycha, hades, KEi, kRaSnaL |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,858.27)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-17 |      0.272 | $5,000.00      | $1,358.33       |
| 2024-11-24 |      0.117 | $4,262.60      | $499.67         |
| 2024-11-09 |      0.017 | $15.18         | $0.26           |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
