### Roster Details<br />
Team Name: Fnatic<br />
Roster: blameF, Burmylov, fear, KRIMZ, matys<br />
Global Rank: [36](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [24]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  881.7<br />
<br />
Final Rank Value (881.7) = Starting Rank Value (869.1) + Head To Head Adjustments (12.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.373[<sup>1</sup>](#table2)
- Bounty Collected: 0.316[<sup>2</sup>](#table1)
- Opponent Network: 0.123[<sup>2</sup>](#table1)
- LAN Wins: 0.049[<sup>2</sup>](#table1)

The average of these factors is 0.215<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 869.1
- 400 + ( ( 0.215 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 869.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |      158 | 2025-02-20 | Dynamo Eclot           | L   | 0.704      | -            | -                | -                | -         |   -10.88 | blameF, Burmylov, fear, KRIMZ, matys |
|           17 |      202 | 2025-02-17 | RUSH B (Russian team)  | W   | 0.683      | 0.435        | 0.022 (0.006)    | 0.623 (0.185)    | 0 (0.000) |     8.53 | blameF, Burmylov, fear, KRIMZ, matys |
|           16 |      229 | 2025-02-15 | Monte                  | L   | 0.672      | -            | -                | -                | -         |   -13.35 | blameF, Burmylov, fear, KRIMZ, matys |
|           15 |      294 | 2025-02-13 | 500                    | W   | 0.657      | 0.435        | 0.134 (0.038)    | 1.000 (0.286)    | 0 (0.000) |    13.59 | blameF, Burmylov, fear, KRIMZ, matys |
|           14 |      316 | 2025-02-12 | Partizan Esports       | L   | 0.649      | -            | -                | -                | -         |   -10.17 | blameF, Burmylov, fear, KRIMZ, matys |
|           13 |      377 | 2025-02-10 | ECSTATIC               | W   | 0.636      | 0.435        | 0.021 (0.006)    | 0.858 (0.237)    | 0 (0.000) |     6.82 | blameF, Burmylov, fear, KRIMZ, matys |
|           12 |      514 | 2025-02-06 | Team Spirit Academy    | W   | 0.612      | 0.435        | 0.049 (0.013)    | 0.423 (0.113)    | 0 (0.000) |     8.87 | blameF, Burmylov, fear, KRIMZ, matys |
|           11 |      580 | 2025-02-04 | Betclic Apogee Esports | W   | 0.597      | 0.435        | 0.011 (0.003)    | 0.582 (0.151)    | 0 (0.000) |     8.05 | blameF, Burmylov, fear, KRIMZ, matys |
|           10 |      619 | 2025-02-01 | OG                     | W   | 0.576      | 0.435        | 0.000 (0.000)    | 1.000 (0.250)    | 0 (0.000) |     4.57 | blameF, Burmylov, fear, KRIMZ, matys |
|            9 |      688 | 2025-01-14 | Team Spirit            | L   | 0.459      | -            | -                | -                | -         |    -0.03 | blameF, Burmylov, fear, KRIMZ, matys |
|            8 |     1140 | 2024-11-30 | Rare Atom              | L   | 0.162      | -            | -                | -                | -         |    -2.90 | blameF, bodyy, KRIMZ, matys, nawwk   |
|            7 |     1172 | 2024-11-30 | Cloud9                 | L   | 0.156      | -            | -                | -                | -         |    -3.06 | blameF, bodyy, KRIMZ, matys, nawwk   |
|            6 |     1175 | 2024-11-29 | Wildcard               | L   | 0.155      | -            | -                | -                | -         |    -0.59 | blameF, bodyy, KRIMZ, matys, nawwk   |
|            5 |     1368 | 2024-11-19 | Dynamo Eclot           | W   | 0.088      | 0.143        | 0.087 (0.001)    | 0.325 (0.004)    | 1 (0.088) |     1.47 | blameF, bodyy, KRIMZ, matys, nawwk   |
|            4 |     1376 | 2024-11-19 | FaZe Clan              | L   | 0.082      | -            | -                | -                | -         |    -0.01 | blameF, bodyy, KRIMZ, matys, nawwk   |
|            3 |     1390 | 2024-11-17 | BetBoom Team           | W   | 0.075      | 0.143        | 0.110 (0.001)    | 0.335 (0.004)    | 1 (0.075) |     1.35 | blameF, bodyy, KRIMZ, matys, nawwk   |
|            2 |     1406 | 2024-11-17 | Rebels Gaming          | W   | 0.070      | 0.143        | 0.000 (0.000)    | 0.225 (0.002)    | 1 (0.070) |     0.41 | blameF, bodyy, KRIMZ, matys, nawwk   |
|            1 |     1420 | 2024-11-16 | Natus Vincere          | L   | 0.068      | -            | -                | -                | -         |    -0.05 | blameF, bodyy, KRIMZ, matys, nawwk   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,559.49)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.256 | $10,000.00     | $2,559.49       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
