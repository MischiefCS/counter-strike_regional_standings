### Roster Details<br />
Team Name: Fnatic<br />
Roster: blameF, Burmylov, fear, KRIMZ, matys<br />
Global Rank: [34](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [25]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  940.1<br />
<br />
Final Rank Value (940.1) = Starting Rank Value (930.1) + Head To Head Adjustments (10.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.389[<sup>1</sup>](#table2)
- Bounty Collected: 0.331[<sup>2</sup>](#table1)
- Opponent Network: 0.172[<sup>2</sup>](#table1)
- LAN Wins: 0.133[<sup>2</sup>](#table1)

The average of these factors is 0.256<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 930.1
- 400 + ( ( 0.256 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 930.1


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
|           22 |      158 | 2025-02-20 | Dynamo Eclot           | L   | 0.891      | -            | -                | -                | -         |   -13.55 | blameF, Burmylov, fear, KRIMZ, matys |
|           21 |      202 | 2025-02-17 | RUSH B (Russian team)  | W   | 0.870      | 0.435        | 0.024 (0.009)    | 0.615 (0.233)    | 0 (0.000) |     9.51 | blameF, Burmylov, fear, KRIMZ, matys |
|           20 |      229 | 2025-02-15 | Monte                  | L   | 0.858      | -            | -                | -                | -         |   -18.56 | blameF, Burmylov, fear, KRIMZ, matys |
|           19 |      294 | 2025-02-13 | 500                    | W   | 0.844      | 0.435        | 0.101 (0.037)    | 1.000 (0.367)    | 0 (0.000) |    15.56 | blameF, Burmylov, fear, KRIMZ, matys |
|           18 |      316 | 2025-02-12 | Partizan Esports       | L   | 0.836      | -            | -                | -                | -         |   -12.58 | blameF, Burmylov, fear, KRIMZ, matys |
|           17 |      377 | 2025-02-10 | ECSTATIC               | W   | 0.823      | 0.435        | 0.025 (0.009)    | 0.919 (0.329)    | 0 (0.000) |     7.23 | blameF, Burmylov, fear, KRIMZ, matys |
|           16 |      514 | 2025-02-06 | Team Spirit Academy    | W   | 0.799      | 0.435        | 0.048 (0.017)    | 0.505 (0.175)    | 0 (0.000) |    10.47 | blameF, Burmylov, fear, KRIMZ, matys |
|           15 |      580 | 2025-02-04 | Betclic Apogee Esports | W   | 0.784      | 0.435        | 0.011 (0.004)    | 0.636 (0.217)    | 0 (0.000) |     9.11 | blameF, Burmylov, fear, KRIMZ, matys |
|           14 |      619 | 2025-02-01 | OG                     | W   | 0.763      | 0.435        | 0.036 (0.012)    | 1.000 (0.331)    | -         |     8.30 | blameF, Burmylov, fear, KRIMZ, matys |
|           13 |      688 | 2025-01-14 | Team Spirit            | L   | 0.645      | -            | -                | -                | -         |    -0.06 | blameF, Burmylov, fear, KRIMZ, matys |
|           12 |     1140 | 2024-11-30 | Rare Atom              | L   | 0.348      | -            | -                | -                | -         |    -7.04 | blameF, bodyy, KRIMZ, matys, nawwk   |
|           11 |     1172 | 2024-11-30 | Cloud9                 | L   | 0.342      | -            | -                | -                | -         |    -6.83 | blameF, bodyy, KRIMZ, matys, nawwk   |
|           10 |     1175 | 2024-11-29 | Wildcard               | L   | 0.342      | -            | -                | -                | -         |    -1.47 | blameF, bodyy, KRIMZ, matys, nawwk   |
|            9 |     1368 | 2024-11-19 | Dynamo Eclot           | W   | 0.275      | 0.143        | 0.103 (0.004)    | 0.500 (0.020)    | 1 (0.275) |     4.64 | blameF, bodyy, KRIMZ, matys, nawwk   |
|            8 |     1376 | 2024-11-19 | FaZe Clan              | L   | 0.269      | -            | -                | -                | -         |    -0.04 | blameF, bodyy, KRIMZ, matys, nawwk   |
|            7 |     1390 | 2024-11-17 | BetBoom Team           | W   | 0.261      | 0.143        | 0.080 (0.003)    | 0.350 (0.013)    | 1 (0.261) |     4.12 | blameF, bodyy, KRIMZ, matys, nawwk   |
|            6 |     1406 | 2024-11-17 | Rebels Gaming          | W   | 0.256      | 0.143        | 0.003 (0.000)    | 0.262 (0.010)    | 1 (0.256) |     1.62 | blameF, bodyy, KRIMZ, matys, nawwk   |
|            5 |     1420 | 2024-11-16 | Natus Vincere          | L   | 0.254      | -            | -                | -                | -         |    -0.22 | blameF, bodyy, KRIMZ, matys, nawwk   |
|            4 |     1868 | 2024-10-19 | Nemiga Gaming          | L   | 0.063      | -            | -                | -                | -         |    -1.21 | blameF, bodyy, KRIMZ, matys, nawwk   |
|            3 |     1908 | 2024-10-17 | PARIVISION             | W   | 0.051      | -            | -                | -                | 1 (0.051) |     0.27 | blameF, bodyy, KRIMZ, matys, nawwk   |
|            2 |     1930 | 2024-10-16 | BC.Game Esports        | W   | 0.045      | 0.624        | 0.055 (0.002)    | 1.000 (0.028)    | 1 (0.045) |     0.75 | blameF, bodyy, KRIMZ, matys, nawwk   |
|            1 |     2003 | 2024-10-10 | Metizport              | L   | 0.003      | -            | -                | -                | -         |    -0.04 | blameF, bodyy, KRIMZ, matys, nawwk   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,045.95)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.443 | $10,000.00     | $4,426.16       |
| 2024-10-19 |      0.065 | $25,000.00     | $1,619.79       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
