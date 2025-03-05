### Roster Details<br />
Team Name: WW Team<br />
Roster: Aunkere, ct0m, Jerry, StRoGo, tried<br />
Global Rank: [269](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [146]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  489.2<br />
<br />
Final Rank Value (489.2) = Starting Rank Value (495.7) + Head To Head Adjustments (-6.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.199[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.050<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 495.7
- 400 + ( ( 0.050 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 495.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |     1544 | 2024-11-12 | BC.Game Esports    | L   | 0.472      | -            | -                | -                | -         |    -2.53 | Aunkere, ct0m, Jerry, StRoGo, tried  |
|           10 |     1566 | 2024-11-11 | FLuffy Gangsters   | L   | 0.467      | -            | -                | -                | -         |    -3.46 | Aunkere, ct0m, Jerry, StRoGo, tried  |
|            9 |     2391 | 2024-09-29 | Monte Gen          | L   | 0.179      | -            | -                | -                | -         |    -3.58 | Aunkere, ct0m, kelieN, StRoGo, tried |
|            8 |     2461 | 2024-09-27 | Endpoint           | W   | 0.164      | 0.654        | 0.009 (0.001)    | 0.233 (0.025)    | 0 (0.000) |     4.29 | Aunkere, ct0m, Jerry, StRoGo, tried  |
|            7 |     2566 | 2024-09-25 | Passion UA         | L   | 0.151      | -            | -                | -                | -         |    -0.09 | Aunkere, ct0m, Jerry, StRoGo, tried  |
|            6 |     2652 | 2024-09-23 | FAVBET Team        | L   | 0.139      | -            | -                | -                | -         |    -0.37 | Aunkere, ct0m, Jerry, StRoGo, tried  |
|            5 |     2823 | 2024-09-16 | CYBERSHOKE Esports | L   | 0.093      | -            | -                | -                | -         |    -0.95 | Aunkere, ct0m, Jerry, StRoGo, tried  |
|            4 |     2826 | 2024-09-16 | BOGATYRI           | W   | 0.092      | 0.487        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.07 | Aunkere, ct0m, Jerry, StRoGo, tried  |
|            3 |     2831 | 2024-09-16 | CYBERSHOKE Esports | L   | 0.091      | -            | -                | -                | -         |    -0.16 | Aunkere, ct0m, Jerry, StRoGo, tried  |
|            2 |     3022 | 2024-09-10 | GTZ.ESPORTS        | L   | 0.050      | -            | -                | -                | -         |    -0.04 | Aunkere, ct0m, Jerry, StRoGo, tried  |
|            1 |     3039 | 2024-09-09 | TALON              | L   | 0.044      | -            | -                | -                | -         |    -0.68 | Aunkere, ct0m, Jerry, StRoGo, tried  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
