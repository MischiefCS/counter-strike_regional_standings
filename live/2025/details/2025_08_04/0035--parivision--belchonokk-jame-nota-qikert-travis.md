### Roster Details<br />
Team Name: PARIVISION<br />
Roster: BELCHONOKK, Jame, nota, Qikert, TRAVIS<br />
Global Rank: [35](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [23]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  569.0<br />
<br />
Final Rank Value (569.0) = Starting Rank Value (558.5) + Head To Head Adjustments (10.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.234[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.060<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 558.5
- 400 + ( ( 0.060 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 558.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent              | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |        2 | 2025-03-01 | Aurora Gaming         | W   | 0.157      | 0.143        | 0.000 (0.000)    | 0.551 (0.012)    | 0 (0.000) |     1.42 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|           11 |        7 | 2025-02-28 | BC.Game Esports       | W   | 0.151      | 0.143        | 0.121 (0.003)    | 1.000 (0.022)    | 0 (0.000) |     4.19 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|           10 |       13 | 2025-02-27 | Alliance              | L   | 0.144      | -            | -                | -                | -         |    -3.24 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|            9 |       25 | 2025-02-26 | BC.Game Esports       | W   | 0.137      | 0.143        | 0.121 (0.002)    | 1.000 (0.020)    | 0 (0.000) |     3.81 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|            8 |       58 | 2025-02-24 | RUSH B (Russian team) | W   | 0.124      | 0.143        | 0.000 (0.000)    | 0.755 (0.013)    | 0 (0.000) |     1.77 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|            7 |      156 | 2025-02-20 | Ninjas in Pyjamas     | W   | 0.098      | 0.143        | 0.000 (0.000)    | 0.567 (0.008)    | 0 (0.000) |     0.91 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|            6 |      169 | 2025-02-19 | Rhyno Esports         | W   | 0.090      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.82 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|            5 |      401 | 2025-02-09 | Astralis              | L   | 0.025      | -            | -                | -                | -         |     0.00 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|            4 |      409 | 2025-02-09 | HEROIC                | W   | 0.023      | 0.143        | 0.000 (0.000)    | 0.327 (0.001)    | 0 (0.000) |     0.37 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|            3 |      470 | 2025-02-08 | GamerLegion           | W   | 0.016      | 0.143        | 0.000 (0.000)    | 0.094 (0.000)    | 0 (0.000) |     0.15 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|            2 |      505 | 2025-02-07 | B8                    | W   | 0.009      | 0.143        | 0.299 (0.000)    | 0.828 (0.001)    | 0 (0.000) |     0.28 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|            1 |      530 | 2025-02-06 | Nemiga Gaming         | W   | 0.003      | 0.143        | 0.013 (0.000)    | 0.121 (0.000)    | 0 (0.000) |     0.05 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
