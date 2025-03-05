### Roster Details<br />
Team Name: Akimbo Esports<br />
Roster: consti, kmrn, laxiee, obi, zy<br />
Global Rank: [206](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [29]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  624.1<br />
<br />
Final Rank Value (624.1) = Starting Rank Value (621.0) + Head To Head Adjustments (3.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.280[<sup>1</sup>](#table2)
- Bounty Collected: 0.180[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.004[<sup>2</sup>](#table1)

The average of these factors is 0.116<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 621.0
- 400 + ( ( 0.116 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 621.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      420 | 2025-02-08 | Party Astronauts          | L   | 1.000      | -            | -                | -                | -         |    -7.89 | consti, kmrn, laxiee, obi, zy |
|           10 |      425 | 2025-02-08 | BACKWHENEVER              | W   | 1.000      | 0.565        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.75 | consti, kmrn, laxiee, obi, zy |
|            9 |     2387 | 2024-09-29 | LAG Gaming                | L   | 0.181      | -            | -                | -                | -         |    -3.02 | kmrn, laxiee, N2o, obi, zy    |
|            8 |     2684 | 2024-09-21 | Undefined (American team) | W   | 0.128      | 0.372        | 0.002 (0.000)    | 0.027 (0.001)    | 0 (0.000) |     1.96 | kmrn, laxiee, N2o, obi, zy    |
|            7 |     2688 | 2024-09-21 | Familia Maquininha        | W   | 0.128      | 0.371        | 0.003 (0.000)    | 0.133 (0.006)    | 0 (0.000) |     2.22 | kmrn, N2o, obi, taggy, zy     |
|            6 |     2801 | 2024-09-17 | Team Canada               | W   | 0.101      | 0.371        | 0.000 (0.000)    | 0.040 (0.001)    | 0 (0.000) |     1.21 | kmrn, laxiee, N2o, obi, zy    |
|            5 |     2967 | 2024-09-11 | Team Aether               | W   | 0.062      | 0.371        | 0.000 (0.000)    | 0.016 (0.000)    | 0 (0.000) |     0.59 | kmrn, laxiee, N2o, obi, zy    |
|            4 |     2998 | 2024-09-10 | InControl                 | W   | 0.055      | 0.372        | 0.001 (0.000)    | 0.075 (0.002)    | 0 (0.000) |     0.89 | kmrn, laxiee, N2o, obi, zy    |
|            3 |     3024 | 2024-09-09 | Team Canada               | W   | 0.049      | 0.372        | 0.000 (0.000)    | 0.040 (0.001)    | 0 (0.000) |     0.59 | kmrn, laxiee, N2o, obi, zy    |
|            2 |     3060 | 2024-09-07 | Nouns Esports             | L   | 0.035      | -            | -                | -                | -         |    -0.39 | kmrn, laxiee, N2o, obi, zy    |
|            1 |     3064 | 2024-09-07 | Unjustified Gaming        | W   | 0.034      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.034) |     0.24 | kmrn, laxiee, N2o, obi, zy    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($899.31)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-21 |      0.128 | $7,000.00      | $899.31         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
