### Roster Details<br />
Team Name: PARIVISION<br />
Roster: alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert<br />
Global Rank: [205](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [144]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  791.5<br />
<br />
Final Rank Value (791.5) = Starting Rank Value (772.1) + Head To Head Adjustments (19.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.321[<sup>1</sup>](#table2)
- Bounty Collected: 0.301[<sup>2</sup>](#table1)
- Opponent Network: 0.086[<sup>2</sup>](#table1)
- LAN Wins: 0.038[<sup>2</sup>](#table1)

The average of these factors is 0.186<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 772.1
- 400 + ( ( 0.186 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 772.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |     2805 | 2024-11-21 | TSM                 | L   | 0.543      | -            | -                | -                | -         |    -7.61 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           16 |     2863 | 2024-11-21 | Ninjas in Pyjamas   | L   | 0.537      | -            | -                | -                | -         |    -4.54 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           15 |     2872 | 2024-11-20 | Team Falcons        | L   | 0.536      | -            | -                | -                | -         |    -0.04 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           14 |     3636 | 2024-11-07 | Nemiga Gaming       | L   | 0.444      | -            | -                | -                | -         |    -0.83 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           13 |     3666 | 2024-11-06 | SINNERS Esports     | W   | 0.439      | 1.000        | 0.033 (0.014)    | 0.633 (0.278)    | 0 (0.000) |    12.51 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           12 |     4681 | 2024-10-18 | BC.Game Esports     | L   | 0.312      | -            | -                | -                | -         |    -0.25 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           11 |     4713 | 2024-10-17 | Fnatic              | L   | 0.306      | -            | -                | -                | -         |    -0.44 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           10 |     4769 | 2024-10-16 | Sashi Esport        | L   | 0.299      | -            | -                | -                | -         |    -0.62 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            9 |     4786 | 2024-10-16 | Team Solid          | W   | 0.299      | 1.000        | 0.027 (0.008)    | 0.653 (0.195)    | 1 (0.299) |     7.32 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            8 |     4843 | 2024-10-15 | Aurora Gaming       | W   | 0.292      | 1.000        | 0.023 (0.007)    | 0.599 (0.175)    | 0 (0.000) |     7.70 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            7 |     5411 | 2024-10-05 | 3DMAX               | L   | 0.223      | -            | -                | -                | -         |    -0.06 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            6 |     5520 | 2024-10-03 | Team Spirit Academy | W   | 0.210      | 1.000        | 0.081 (0.017)    | 0.925 (0.194)    | 0 (0.000) |     6.14 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            5 |     6061 | 2024-09-25 | Nemiga Gaming       | L   | 0.160      | -            | -                | -                | -         |    -0.29 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            4 |     6274 | 2024-09-23 | Monte               | L   | 0.144      | -            | -                | -                | -         |    -1.08 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            3 |     6923 | 2024-09-12 | GUN5 Esports        | L   | 0.072      | -            | -                | -                | -         |    -0.21 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            2 |     6997 | 2024-09-11 | 9INE                | W   | 0.064      | 1.000        | 0.014 (0.001)    | 0.242 (0.015)    | 0 (0.000) |     1.25 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            1 |     7477 | 2024-09-04 | Monte               | W   | 0.017      | 1.000        | 0.035 (0.001)    | 0.263 (0.005)    | 0 (0.000) |     0.42 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,180.51)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-09 |      0.459 | $15.18         | $6.96           |
| 2024-10-20 |      0.325 | $5,000.00      | $1,625.58       |
| 2024-10-06 |      0.233 | $2,000.00      | $465.37         |
| 2024-09-26 |      0.165 | $500.00        | $82.60          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
