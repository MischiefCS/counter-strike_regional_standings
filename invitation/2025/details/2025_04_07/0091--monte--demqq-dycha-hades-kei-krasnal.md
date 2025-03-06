### Roster Details<br />
Team Name: Monte<br />
Roster: DemQQ, dycha, hades, KEi, kRaSnaL<br />
Global Rank: [91](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [64]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  751.3<br />
<br />
Final Rank Value (751.3) = Starting Rank Value (740.9) + Head To Head Adjustments (10.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.374[<sup>1</sup>](#table2)
- Bounty Collected: 0.269[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.165<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 740.9
- 400 + ( ( 0.165 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 740.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      832 | 2024-12-16 | Dynamo Eclot        | L   | 0.451      | -            | -                | -                | -         |    -3.35 | DemQQ, dycha, hades, KEi, kRaSnaL |
|            9 |      902 | 2024-12-13 | Metizport           | L   | 0.430      | -            | -                | -                | -         |    -3.64 | DemQQ, dycha, hades, KEi, kRaSnaL |
|            8 |      941 | 2024-12-10 | Aurora Gaming       | W   | 0.411      | 0.435        | 0.006 (0.001)    | 0.437 (0.078)    | 0 (0.000) |     6.51 | DemQQ, dycha, hades, KEi, kRaSnaL |
|            7 |      949 | 2024-12-09 | GUN5 Esports        | W   | 0.404      | 0.435        | 0.091 (0.016)    | 0.360 (0.063)    | 0 (0.000) |     8.41 | DemQQ, dycha, hades, KEi, kRaSnaL |
|            6 |     1258 | 2024-11-24 | ENCE                | L   | 0.304      | -            | -                | -                | -         |    -3.16 | DemQQ, dycha, hades, KEi, kRaSnaL |
|            5 |     1586 | 2024-11-10 | FAVBET Team         | W   | 0.211      | 0.143        | 0.021 (0.001)    | 0.447 (0.013)    | 0 (0.000) |     3.58 | DemQQ, dycha, hades, KEi, kRaSnaL |
|            4 |     1637 | 2024-11-07 | 500                 | L   | 0.190      | -            | -                | -                | -         |    -1.36 | DemQQ, dycha, hades, KEi, kRaSnaL |
|            3 |     1650 | 2024-11-06 | Team Spirit Academy | W   | 0.184      | 0.143        | 0.048 (0.001)    | 0.505 (0.013)    | 0 (0.000) |     3.75 | DemQQ, dycha, hades, KEi, kRaSnaL |
|            2 |     1811 | 2024-10-27 | SAW                 | L   | 0.117      | -            | -                | -                | -         |    -0.20 | DemQQ, dycha, hades, KEi, kRaSnaL |
|            1 |     1991 | 2024-10-11 | SINNERS Esports     | L   | 0.011      | -            | -                | -                | -         |    -0.14 | DemQQ, dycha, hades, KEi, kRaSnaL |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,772.53)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-17 |      0.458 | $5,000.00      | $2,291.67       |
| 2024-11-24 |      0.304 | $4,262.60      | $1,295.36       |
| 2024-11-09 |      0.204 | $15.18         | $3.10           |
| 2024-10-27 |      0.118 | $10,000.00     | $1,182.41       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
