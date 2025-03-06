### Roster Details<br />
Team Name: JiJieHao<br />
Roster: Aaron, bibu, BOROS, dennyslaw, m1N1<br />
Global Rank: [62](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_08_04.md)<br />
Regional Rank: [9]( ../../standings_asia_2025_08_04.md)<br />
<br />
Final Rank Value:  406.1<br />
<br />
Final Rank Value (406.1) = Starting Rank Value (400.5) + Head To Head Adjustments (5.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.5
- 400 + ( ( 0.000 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 400.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |       24 | 2025-02-26 | Al-Ittihad    | W   | 0.137      | 0.143        | 0.000 (0.000)    | 0.205 (0.004)    | 0 (0.000) |     2.15 | Aaron, bibu, BOROS, dennyslaw, m1N1 |
|            5 |       40 | 2025-02-25 | Al-Ittihad    | W   | 0.130      | 0.143        | 0.000 (0.000)    | 0.205 (0.004)    | 0 (0.000) |     2.05 | Aaron, bibu, BOROS, dennyslaw, m1N1 |
|            4 |       66 | 2025-02-24 | TheShtrongolZ | W   | 0.123      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.93 | Aaron, bibu, BOROS, dennyslaw, m1N1 |
|            3 |      384 | 2025-02-09 | DogEvil       | L   | 0.028      | -            | -                | -                | -         |    -0.44 | Aaron, bibu, dennyslaw, ISSAA, m1N1 |
|            2 |      414 | 2025-02-08 | Rare Atom     | L   | 0.022      | -            | -                | -                | -         |    -0.34 | Aaron, bibu, dennyslaw, ISSAA, m1N1 |
|            1 |      479 | 2025-02-07 | Housebets     | W   | 0.015      | 0.143        | 0.000 (0.000)    | 0.193 (0.000)    | 0 (0.000) |     0.23 | Aaron, bibu, dennyslaw, ISSAA, m1N1 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
