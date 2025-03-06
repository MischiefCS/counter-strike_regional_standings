### Roster Details<br />
Team Name: Cloud9<br />
Roster: Ax1Le, Boombl4, HeavyGod, ICY, interz<br />
Global Rank: [62](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [42]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  783.5<br />
<br />
Final Rank Value (783.5) = Starting Rank Value (777.7) + Head To Head Adjustments (5.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.373[<sup>1</sup>](#table2)
- Bounty Collected: 0.233[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.080[<sup>2</sup>](#table1)

The average of these factors is 0.173<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 777.7
- 400 + ( ( 0.173 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 777.7


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
|            9 |     1122 | 2024-12-01 | Complexity      | L   | 0.168      | -            | -                | -                | -         |    -1.15 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            8 |     1142 | 2024-11-30 | PaiN Gaming     | L   | 0.161      | -            | -                | -                | -         |    -0.04 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            7 |     1172 | 2024-11-30 | Fnatic          | W   | 0.156      | 1.000        | 0.021 (0.003)    | 0.443 (0.069)    | 1 (0.156) |     3.06 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            6 |     1178 | 2024-11-29 | Team Liquid     | L   | 0.155      | -            | -                | -                | -         |    -0.19 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            5 |     1374 | 2024-11-19 | FaZe Clan       | L   | 0.083      | -            | -                | -                | -         |    -0.00 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            4 |     1381 | 2024-11-18 | SINNERS Esports | W   | 0.081      | 0.143        | 0.018 (0.000)    | 0.268 (0.003)    | 1 (0.081) |     1.32 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            3 |     1392 | 2024-11-17 | HEROIC          | W   | 0.074      | 0.143        | 0.133 (0.001)    | 0.481 (0.005)    | 1 (0.074) |     1.84 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            2 |     1404 | 2024-11-17 | Nemiga Gaming   | W   | 0.070      | 0.143        | 0.012 (0.000)    | 0.220 (0.002)    | 1 (0.070) |     1.00 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            1 |     1417 | 2024-11-16 | FaZe Clan       | L   | 0.068      | -            | -                | -                | -         |    -0.00 | Ax1Le, Boombl4, HeavyGod, ICY, interz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,559.49)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.256 | $10,000.00     | $2,559.49       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
