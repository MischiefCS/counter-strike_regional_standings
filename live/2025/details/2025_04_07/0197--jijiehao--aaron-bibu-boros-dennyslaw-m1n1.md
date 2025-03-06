### Roster Details<br />
Team Name: JiJieHao<br />
Roster: Aaron, bibu, BOROS, dennyslaw, m1N1<br />
Global Rank: [197](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_04_07.md)<br />
Regional Rank: [27]( ../../standings_asia_2025_04_07.md)<br />
<br />
Final Rank Value:  559.7<br />
<br />
Final Rank Value (559.7) = Starting Rank Value (514.3) + Head To Head Adjustments (45.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.214[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.055<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 514.3
- 400 + ( ( 0.055 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 514.3


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
|           10 |       24 | 2025-02-26 | Al-Ittihad          | W   | 0.930      | 0.143        | 0.002 (0.000)    | 0.075 (0.010)    | 0 (0.000) |    13.88 | Aaron, bibu, BOROS, dennyslaw, m1N1 |
|            9 |       40 | 2025-02-25 | Al-Ittihad          | W   | 0.923      | 0.143        | 0.002 (0.000)    | 0.075 (0.010)    | 0 (0.000) |    14.56 | Aaron, bibu, BOROS, dennyslaw, m1N1 |
|            8 |       66 | 2025-02-24 | TheShtrongolZ       | W   | 0.916      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     9.38 | Aaron, bibu, BOROS, dennyslaw, m1N1 |
|            7 |      384 | 2025-02-09 | DogEvil             | L   | 0.821      | -            | -                | -                | -         |   -12.29 | Aaron, bibu, dennyslaw, ISSAA, m1N1 |
|            6 |      414 | 2025-02-08 | Rare Atom           | L   | 0.815      | -            | -                | -                | -         |    -4.09 | Aaron, bibu, dennyslaw, ISSAA, m1N1 |
|            5 |      479 | 2025-02-07 | Housebets           | W   | 0.808      | 0.143        | 0.000 (0.000)    | 0.143 (0.017)    | 0 (0.000) |    15.05 | Aaron, bibu, dennyslaw, ISSAA, m1N1 |
|            4 |      868 | 2024-12-14 | Betera Esports      | L   | 0.439      | -            | -                | -                | -         |    -9.33 | Aaron, bibu, dennyslaw, ISSAA, m1N1 |
|            3 |      894 | 2024-12-13 | Team Spirit Academy | L   | 0.432      | -            | -                | -                | -         |    -1.99 | Aaron, bibu, dennyslaw, ISSAA, m1N1 |
|            2 |      924 | 2024-12-11 | FAVBET Team         | W   | 0.419      | 0.143        | 0.021 (0.001)    | 0.447 (0.027)    | 0 (0.000) |    10.57 | Aaron, bibu, dennyslaw, ISSAA, m1N1 |
|            1 |      938 | 2024-12-10 | Endpoint            | W   | 0.412      | 0.143        | 0.007 (0.000)    | 0.154 (0.009)    | 0 (0.000) |     9.68 | Aaron, bibu, dennyslaw, ISSAA, m1N1 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
