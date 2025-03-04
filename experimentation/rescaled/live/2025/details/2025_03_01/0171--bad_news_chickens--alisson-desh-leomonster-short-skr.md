### Roster Details<br />
Team Name: Bad News Chickens<br />
Roster: Alisson, desh, Leomonster, short, Skr<br />
Global Rank: [171](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [40]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  664.8<br />
<br />
Final Rank Value (664.8) = Starting Rank Value (645.8) + Head To Head Adjustments (19.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.269[<sup>1</sup>](#table2)
- Bounty Collected: 0.220[<sup>2</sup>](#table1)
- Opponent Network: 0.028[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.129<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 645.8
- 400 + ( ( 0.129 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 645.8


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
|           11 |      812 | 2024-12-18 | LaChampionsLiga | W   | 0.713      | 0.384        | 0.003 (0.001)    | 0.199 (0.055)    | 0 (0.000) |    10.37 | Alisson, desh, Leomonster, short, Skr |
|           10 |      829 | 2024-12-16 | UNO MILLE       | W   | 0.701      | 0.384        | 0.006 (0.002)    | 0.404 (0.109)    | 0 (0.000) |    12.64 | Alisson, desh, Leomonster, short, Skr |
|            9 |      900 | 2024-12-13 | Game Hunters    | W   | 0.679      | 0.384        | 0.001 (0.000)    | 0.302 (0.079)    | 0 (0.000) |    11.54 | Alisson, desh, Leomonster, short, Skr |
|            8 |     1219 | 2024-11-27 | TROPA DO TACO   | L   | 0.572      | -            | -                | -                | -         |    -6.87 | Alisson, desh, Leomonster, short, Skr |
|            7 |     1395 | 2024-11-17 | TROPA DO TACO   | L   | 0.508      | -            | -                | -                | -         |    -6.77 | Alisson, desh, Leomonster, short, Skr |
|            6 |     1647 | 2024-11-06 | Game Hunters    | L   | 0.433      | -            | -                | -                | -         |    -6.56 | Alisson, desh, Leomonster, short, Skr |
|            5 |     2144 | 2024-10-06 | MIBR Academy    | W   | 0.227      | 0.243        | 0.001 (0.000)    | 0.328 (0.018)    | 0 (0.000) |     3.65 | Alisson, desh, Leomonster, short, Skr |
|            4 |     2437 | 2024-09-27 | Case Esports    | L   | 0.168      | -            | -                | -                | -         |    -2.53 | Alisson, desh, Leomonster, short, Skr |
|            3 |     2439 | 2024-09-27 | Game Hunters    | W   | 0.167      | 0.277        | 0.001 (0.000)    | 0.302 (0.014)    | 0 (0.000) |     2.65 | Alisson, desh, Leomonster, short, Skr |
|            2 |     3077 | 2024-09-07 | MIBR Academy    | W   | 0.033      | 0.280        | 0.001 (0.000)    | 0.328 (0.003)    | 0 (0.000) |     0.53 | Alisson, desh, Leomonster, short, Skr |
|            1 |     3097 | 2024-09-06 | Yawara E-Sports | W   | 0.027      | 0.280        | 0.002 (0.000)    | 0.321 (0.002)    | 0 (0.000) |     0.43 | Alisson, desh, Leomonster, short, Skr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($641.92)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-17 |      0.508 | $517.51        | $262.78         |
| 2024-10-06 |      0.227 | $1,465.96      | $332.69         |
| 2024-09-07 |      0.033 | $1,429.06      | $46.44          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
