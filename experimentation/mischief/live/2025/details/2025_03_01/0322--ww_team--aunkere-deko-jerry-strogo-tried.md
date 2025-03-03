### Roster Details<br />
Team Name: WW Team<br />
Roster: Aunkere, deko, Jerry, StRoGo, tried<br />
Global Rank: [322](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [182]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  490.9<br />
<br />
Final Rank Value (490.9) = Starting Rank Value (498.6) + Head To Head Adjustments (-7.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.198[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.050<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 498.6
- 400 + ( ( 0.050 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 498.6


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
|           15 |     1537 | 2024-12-13 | BadGuys            | L   | 0.680      | -            | -                | -                | -         |    -8.42 | Aunkere, deko, Jerry, StRoGo, tried  |
|           14 |     2798 | 2024-11-12 | BC.Game Esports    | L   | 0.472      | -            | -                | -                | -         |    -2.75 | Aunkere, ct0m, Jerry, StRoGo, tried  |
|           13 |     2829 | 2024-11-11 | FLuffy Gangsters   | L   | 0.467      | -            | -                | -                | -         |    -3.50 | Aunkere, ct0m, Jerry, StRoGo, tried  |
|           12 |     4006 | 2024-09-29 | Monte Gen          | L   | 0.179      | -            | -                | -                | -         |    -3.66 | Aunkere, ct0m, kelieN, StRoGo, tried |
|           11 |     4076 | 2024-09-27 | Endpoint           | W   | 0.164      | 0.435        | 0.009 (0.001)    | 0.268 (0.019)    | 0 (0.000) |     4.11 | Aunkere, ct0m, Jerry, StRoGo, tried  |
|           10 |     4181 | 2024-09-25 | Passion UA         | L   | 0.151      | -            | -                | -                | -         |    -0.25 | Aunkere, ct0m, Jerry, StRoGo, tried  |
|            9 |     4267 | 2024-09-23 | FAVBET Team        | L   | 0.139      | -            | -                | -                | -         |    -0.70 | Aunkere, ct0m, Jerry, StRoGo, tried  |
|            8 |     4297 | 2024-09-22 | HOTU               | W   | 0.131      | 0.143        | 0.002 (0.000)    | 0.700 (0.013)    | 0 (0.000) |     3.08 | Aunkere, ct0m, Jerry, StRoGo, tried  |
|            7 |     4406 | 2024-09-18 | K27                | W   | 0.106      | 0.143        | 0.005 (0.000)    | 0.428 (0.006)    | 0 (0.000) |     2.66 | Aunkere, ct0m, Jerry, StRoGo, tried  |
|            6 |     4442 | 2024-09-17 | Ex-GR Gaming       | W   | 0.099      | 0.143        | 0.011 (0.000)    | 0.121 (0.002)    | 0 (0.000) |     2.54 | Aunkere, ct0m, Jerry, StRoGo, tried  |
|            5 |     4461 | 2024-09-16 | CYBERSHOKE Esports | L   | 0.093      | -            | -                | -                | -         |    -0.94 | Aunkere, ct0m, Jerry, StRoGo, tried  |
|            4 |     4464 | 2024-09-16 | BOGATYRI           | W   | 0.092      | 0.443        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.06 | Aunkere, ct0m, Jerry, StRoGo, tried  |
|            3 |     4469 | 2024-09-16 | CYBERSHOKE Esports | L   | 0.091      | -            | -                | -                | -         |    -0.37 | Aunkere, ct0m, Jerry, StRoGo, tried  |
|            2 |     4660 | 2024-09-10 | GTZ.ESPORTS        | L   | 0.050      | -            | -                | -                | -         |    -0.05 | Aunkere, ct0m, Jerry, StRoGo, tried  |
|            1 |     4677 | 2024-09-09 | TALON              | L   | 0.044      | -            | -                | -                | -         |    -0.58 | Aunkere, ct0m, Jerry, StRoGo, tried  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
