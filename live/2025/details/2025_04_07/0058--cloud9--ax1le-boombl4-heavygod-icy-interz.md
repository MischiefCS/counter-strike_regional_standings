### Roster Details<br />
Team Name: Cloud9<br />
Roster: Ax1Le, Boombl4, HeavyGod, ICY, interz<br />
Global Rank: [58](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [41]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  842.9<br />
<br />
Final Rank Value (842.9) = Starting Rank Value (825.2) + Head To Head Adjustments (17.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.369[<sup>1</sup>](#table2)
- Bounty Collected: 0.264[<sup>2</sup>](#table1)
- Opponent Network: 0.020[<sup>2</sup>](#table1)
- LAN Wins: 0.169[<sup>2</sup>](#table1)

The average of these factors is 0.206<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 825.2
- 400 + ( ( 0.206 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 825.2


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
|           10 |     1122 | 2024-12-01 | Complexity      | L   | 0.355      | -            | -                | -                | -         |    -2.89 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            9 |     1142 | 2024-11-30 | PaiN Gaming     | L   | 0.348      | -            | -                | -                | -         |    -0.14 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            8 |     1172 | 2024-11-30 | Fnatic          | W   | 0.342      | 1.000        | 0.027 (0.009)    | 0.467 (0.160)    | 1 (0.342) |     6.83 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            7 |     1178 | 2024-11-29 | Team Liquid     | L   | 0.341      | -            | -                | -                | -         |    -0.42 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            6 |     1374 | 2024-11-19 | FaZe Clan       | L   | 0.270      | -            | -                | -                | -         |    -0.02 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            5 |     1381 | 2024-11-18 | SINNERS Esports | W   | 0.267      | 0.143        | 0.015 (0.001)    | 0.337 (0.013)    | 1 (0.267) |     4.10 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            4 |     1392 | 2024-11-17 | HEROIC          | W   | 0.261      | 0.143        | 0.109 (0.004)    | 0.488 (0.018)    | 1 (0.261) |     6.01 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            3 |     1404 | 2024-11-17 | Nemiga Gaming   | W   | 0.257      | 0.143        | 0.064 (0.002)    | 0.290 (0.011)    | 1 (0.257) |     4.36 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            2 |     1417 | 2024-11-16 | FaZe Clan       | L   | 0.255      | -            | -                | -                | -         |    -0.02 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            1 |     1996 | 2024-10-11 | Passion UA      | L   | 0.009      | -            | -                | -                | -         |    -0.09 | Ax1Le, Boombl4, HeavyGod, ICY, interz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,426.16)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.443 | $10,000.00     | $4,426.16       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
