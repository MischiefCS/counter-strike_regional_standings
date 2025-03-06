### Roster Details<br />
Team Name: JiJieHao<br />
Roster: Aaron, bibu, BOROS, dennyslaw, m1N1<br />
Global Rank: [112](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_06_02.md)<br />
Regional Rank: [14]( ../../standings_asia_2025_06_02.md)<br />
<br />
Final Rank Value:  507.6<br />
<br />
Final Rank Value (507.6) = Starting Rank Value (494.7) + Head To Head Adjustments (12.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.161[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.041<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 494.7
- 400 + ( ( 0.041 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 494.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |       24 | 2025-02-26 | Al-Ittihad          | W   | 0.557      | 0.143        | 0.000 (0.000)    | 0.101 (0.008)    | 0 (0.000) |     6.53 | Aaron, bibu, BOROS, dennyslaw, m1N1 |
|            9 |       40 | 2025-02-25 | Al-Ittihad          | W   | 0.550      | 0.143        | 0.000 (0.000)    | 0.101 (0.008)    | 0 (0.000) |     6.55 | Aaron, bibu, BOROS, dennyslaw, m1N1 |
|            8 |       66 | 2025-02-24 | TheShtrongolZ       | W   | 0.543      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.40 | Aaron, bibu, BOROS, dennyslaw, m1N1 |
|            7 |      384 | 2025-02-09 | DogEvil             | L   | 0.448      | -            | -                | -                | -         |    -8.66 | Aaron, bibu, dennyslaw, ISSAA, m1N1 |
|            6 |      414 | 2025-02-08 | Rare Atom           | L   | 0.442      | -            | -                | -                | -         |    -3.11 | Aaron, bibu, dennyslaw, ISSAA, m1N1 |
|            5 |      479 | 2025-02-07 | Housebets           | W   | 0.435      | 0.143        | 0.000 (0.000)    | 0.176 (0.011)    | 0 (0.000) |     5.05 | Aaron, bibu, dennyslaw, ISSAA, m1N1 |
|            4 |      868 | 2024-12-14 | Betera Esports      | L   | 0.065      | -            | -                | -                | -         |    -1.30 | Aaron, bibu, dennyslaw, ISSAA, m1N1 |
|            3 |      894 | 2024-12-13 | Team Spirit Academy | L   | 0.059      | -            | -                | -                | -         |    -0.34 | Aaron, bibu, dennyslaw, ISSAA, m1N1 |
|            2 |      924 | 2024-12-11 | FAVBET Team         | W   | 0.045      | 0.143        | 0.009 (0.000)    | 0.230 (0.001)    | 0 (0.000) |     1.11 | Aaron, bibu, dennyslaw, ISSAA, m1N1 |
|            1 |      938 | 2024-12-10 | Endpoint            | W   | 0.039      | 0.143        | 0.000 (0.000)    | 0.014 (0.000)    | 0 (0.000) |     0.62 | Aaron, bibu, dennyslaw, ISSAA, m1N1 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
