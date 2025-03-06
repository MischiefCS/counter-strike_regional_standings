### Roster Details<br />
Team Name: Illuminar Gaming<br />
Roster: AntyVirus, discoStar, Furlan, kadziu, SpavaQ<br />
Global Rank: [115](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [80]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  660.0<br />
<br />
Final Rank Value (660.0) = Starting Rank Value (662.4) + Head To Head Adjustments (-2.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.262[<sup>1</sup>](#table2)
- Bounty Collected: 0.214[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.120<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 662.4
- 400 + ( ( 0.120 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 662.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      816 | 2024-12-18 | Nexus Gaming           | L   | 0.277      | -            | -                | -                | -         |    -2.00 | AntyVirus, discoStar, Furlan, kadziu, SpavaQ |
|           11 |      969 | 2024-12-08 | TSM                    | L   | 0.209      | -            | -                | -                | -         |    -4.59 | AntyVirus, Furlan, kadziu, SpavaQ, splawik   |
|           10 |     1021 | 2024-12-06 | Endpoint               | W   | 0.196      | 0.371        | 0.005 (0.000)    | 0.083 (0.006)    | 0 (0.000) |     3.40 | b1elany, Furlan, kadziu, phr, SpavaQ         |
|            9 |     1073 | 2024-12-04 | BC.Game Esports        | L   | 0.184      | -            | -                | -                | -         |    -2.37 | b1elany, Furlan, kadziu, phr, SpavaQ         |
|            8 |     1096 | 2024-12-03 | Dark Cloud Esports     | W   | 0.177      | 0.333        | 0.011 (0.001)    | 0.222 (0.013)    | 0 (0.000) |     3.18 | b1elany, Furlan, kadziu, phr, SpavaQ         |
|            7 |     1113 | 2024-12-02 | ENCE Academy           | W   | 0.171      | 0.333        | 0.009 (0.001)    | 0.158 (0.009)    | 0 (0.000) |     3.61 | b1elany, Furlan, kadziu, phr, SpavaQ         |
|            6 |     1114 | 2024-12-02 | Viperio                | L   | 0.170      | -            | -                | -                | -         |    -2.95 | b1elany, Furlan, kadziu, phr, SpavaQ         |
|            5 |     1120 | 2024-12-02 | Natus Vincere Junior   | L   | 0.169      | -            | -                | -                | -         |    -1.24 | b1elany, Furlan, kadziu, phr, SpavaQ         |
|            4 |     1134 | 2024-12-01 | BC.Game Esports        | L   | 0.163      | -            | -                | -                | -         |    -2.06 | b1elany, Furlan, kadziu, phr, SpavaQ         |
|            3 |     1194 | 2024-11-29 | Betclic Apogee Esports | W   | 0.149      | 0.333        | 0.011 (0.001)    | 0.582 (0.029)    | 0 (0.000) |     3.24 | b1elany, Furlan, kadziu, phr, SpavaQ         |
|            2 |     1582 | 2024-11-11 | GenOne                 | L   | 0.029      | -            | -                | -                | -         |    -0.38 | b1elany, Furlan, kadziu, phr, SpavaQ         |
|            1 |     1613 | 2024-11-09 | Astralis Talent        | L   | 0.016      | -            | -                | -                | -         |    -0.23 | b1elany, Furlan, kadziu, phr, SpavaQ         |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($189.17)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-05 |      0.189 | $1,000.00      | $189.17         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
