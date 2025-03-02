### Roster Details<br />
Team Name: Cloud9<br />
Roster: Ax1Le, Boombl4, HeavyGod, ICY, interz<br />
Global Rank: [133](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [96]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  912.5<br />
<br />
Final Rank Value (912.5) = Starting Rank Value (866.6) + Head To Head Adjustments (45.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.279[<sup>1</sup>](#table2)
- Bounty Collected: 0.375[<sup>2</sup>](#table1)
- Opponent Network: 0.086[<sup>2</sup>](#table1)
- LAN Wins: 0.195[<sup>2</sup>](#table1)

The average of these factors is 0.234<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 866.6
- 400 + ( ( 0.234 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 866.6


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
|           13 |     2974 | 2024-11-19 | FaZe Clan       | L   | 0.525      | -            | -                | -                | -         |    -0.13 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           12 |     2987 | 2024-11-18 | SINNERS Esports | W   | 0.522      | 1.000        | 0.033 (0.017)    | 0.633 (0.330)    | 1 (0.522) |    13.94 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           11 |     3028 | 2024-11-17 | HEROIC          | W   | 0.516      | 1.000        | 0.156 (0.080)    | 0.433 (0.223)    | 1 (0.516) |    15.07 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           10 |     3067 | 2024-11-17 | Nemiga Gaming   | W   | 0.511      | 1.000        | 0.212 (0.108)    | 0.455 (0.233)    | 1 (0.511) |    14.71 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            9 |     3106 | 2024-11-16 | FaZe Clan       | L   | 0.509      | -            | -                | -                | -         |    -0.10 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            8 |     4389 | 2024-10-25 | Fnatic          | L   | 0.357      | -            | -                | -                | -         |    -0.79 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            7 |     4485 | 2024-10-22 | 9z Team         | W   | 0.339      | 1.000        | 0.019 (0.006)    | 0.084 (0.028)    | 0 (0.000) |     3.70 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            6 |     4494 | 2024-10-22 | The MongolZ     | L   | 0.337      | -            | -                | -                | -         |    -0.05 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            5 |     5056 | 2024-10-11 | Passion UA      | L   | 0.263      | -            | -                | -                | -         |    -1.30 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            4 |     6894 | 2024-09-13 | Tricked Esport  | L   | 0.077      | -            | -                | -                | -         |    -0.79 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            3 |     7240 | 2024-09-07 | Zero Tenacity   | W   | 0.038      | 1.000        | 0.033 (0.001)    | 0.842 (0.032)    | 0 (0.000) |     0.96 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            2 |     7419 | 2024-09-05 | ALTERNATE aTTaX | W   | 0.024      | 1.000        | 0.025 (0.001)    | 0.605 (0.014)    | 0 (0.000) |     0.57 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            1 |     7577 | 2024-09-02 | GamerLegion     | W   | 0.004      | 1.000        | 0.011 (0.000)    | 0.040 (0.000)    | 0 (0.000) |     0.04 | Ax1Le, Boombl4, HeavyGod, ICY, interz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($755.09)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-07 |      0.038 | $20,000.00     | $755.09         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
