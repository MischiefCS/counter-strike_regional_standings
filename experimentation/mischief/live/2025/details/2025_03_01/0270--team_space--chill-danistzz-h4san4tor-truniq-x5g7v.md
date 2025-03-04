### Roster Details<br />
Team Name: Team Space<br />
Roster: Chill, danistzz, H4SAN4TOR, TruNiQ, X5G7V<br />
Global Rank: [270](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [146]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  486.3<br />
<br />
Final Rank Value (486.3) = Starting Rank Value (484.4) + Head To Head Adjustments (1.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.174[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.044<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 484.4
- 400 + ( ( 0.044 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 484.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |     2371 | 2024-09-30 | Insilio                | L   | 0.185      | -            | -                | -                | -         |    -1.48 | Chill, danistzz, H4SAN4TOR, TruNiQ, X5G7V |
|           15 |     2458 | 2024-09-27 | EYEBALLERS             | L   | 0.164      | -            | -                | -                | -         |    -0.89 | Chill, danistzz, H4SAN4TOR, TruNiQ, X5G7V |
|           14 |     2485 | 2024-09-26 | Nexus Gaming           | L   | 0.159      | -            | -                | -                | -         |    -0.15 | Chill, danistzz, H4SAN4TOR, TruNiQ, X5G7V |
|           13 |     2676 | 2024-09-22 | Revenant Esports       | W   | 0.131      | 0.384        | 0.000 (0.000)    | 0.008 (0.000)    | 0 (0.000) |     2.14 | Chill, danistzz, H4SAN4TOR, TruNiQ, X5G7V |
|           12 |     2720 | 2024-09-20 | Ex-ENTERPRISE esports  | W   | 0.118      | 0.384        | 0.003 (0.000)    | 0.068 (0.003)    | 0 (0.000) |     2.88 | Chill, danistzz, H4SAN4TOR, TruNiQ, X5G7V |
|           11 |     2915 | 2024-09-13 | GUN5 Esports           | L   | 0.072      | -            | -                | -                | -         |    -0.20 | Chill, danistzz, H4SAN4TOR, TruNiQ, X5G7V |
|           10 |     2920 | 2024-09-13 | FLuffy Gangsters       | L   | 0.072      | -            | -                | -                | -         |    -0.53 | danistzz, fozil, H4SAN4TOR, TruNiQ, X5G7V |
|            9 |     3005 | 2024-09-10 | Monte                  | L   | 0.053      | -            | -                | -                | -         |    -0.23 | danistzz, fozil, H4SAN4TOR, TruNiQ, X5G7V |
|            8 |     3028 | 2024-09-09 | FLuffy Gangsters       | W   | 0.046      | 0.143        | 0.005 (0.000)    | 0.419 (0.003)    | 0 (0.000) |     1.12 | danistzz, fozil, H4SAN4TOR, TruNiQ, X5G7V |
|            7 |     3102 | 2024-09-06 | Insilio                | L   | 0.026      | -            | -                | -                | -         |    -0.21 | danistzz, fozil, H4SAN4TOR, TruNiQ, X5G7V |
|            6 |     3114 | 2024-09-06 | Los kogutos            | L   | 0.024      | -            | -                | -                | -         |    -0.06 | Chill, danistzz, H4SAN4TOR, TruNiQ, X5G7V |
|            5 |     3118 | 2024-09-06 | Rhyno Esports          | L   | 0.024      | -            | -                | -                | -         |    -0.20 | danistzz, fozil, H4SAN4TOR, TruNiQ, X5G7V |
|            4 |     3130 | 2024-09-05 | Betclic Apogee Esports | L   | 0.020      | -            | -                | -                | -         |    -0.17 | danistzz, fozil, H4SAN4TOR, TruNiQ, X5G7V |
|            3 |     3183 | 2024-09-04 | FAVBET Team            | L   | 0.011      | -            | -                | -                | -         |    -0.05 | danistzz, fozil, H4SAN4TOR, TruNiQ, X5G7V |
|            2 |     3203 | 2024-09-03 | Insilio                | L   | 0.006      | -            | -                | -                | -         |    -0.05 | danistzz, fozil, H4SAN4TOR, TruNiQ, X5G7V |
|            1 |     3214 | 2024-09-03 | Los kogutos            | L   | 0.005      | -            | -                | -                | -         |    -0.01 | danistzz, fozil, H4SAN4TOR, TruNiQ, X5G7V |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
