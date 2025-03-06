### Roster Details<br />
Team Name: Ninjas in Pyjamas<br />
Roster: ewjerkz, JACKZ, r1nkle, sjuush, Snappi<br />
Global Rank: [74](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [45]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  401.8<br />
<br />
Final Rank Value (401.8) = Starting Rank Value (400.7) + Head To Head Adjustments (1.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.7
- 400 + ( ( 0.000 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 400.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |       45 | 2025-02-25 | Tricked Esport         | L   | 0.129      | -            | -                | -                | -         |    -2.03 | ewjerkz, JACKZ, r1nkle, sjuush, Snappi     |
|           10 |       60 | 2025-02-24 | Fire Flux Esports      | L   | 0.124      | -            | -                | -                | -         |    -1.32 | ewjerkz, JACKZ, r1nkle, sjuush, Snappi     |
|            9 |       67 | 2025-02-24 | ESC Gaming             | L   | 0.122      | -            | -                | -                | -         |    -1.97 | ewjerkz, JACKZ, r1nkle, sjuush, Snappi     |
|            8 |      101 | 2025-02-23 | Betclic Apogee Esports | W   | 0.116      | 0.143        | 0.000 (0.000)    | 0.193 (0.003)    | 0 (0.000) |     1.80 | ewjerkz, JACKZ, r1nkle, sjuush, Snappi     |
|            7 |      156 | 2025-02-20 | PARIVISION             | L   | 0.098      | -            | -                | -                | -         |    -0.91 | ewjerkz, JACKZ, r1nkle, sjuush, Snappi     |
|            6 |      170 | 2025-02-19 | Betclic Apogee Esports | W   | 0.089      | 0.143        | 0.000 (0.000)    | 0.193 (0.002)    | 0 (0.000) |     1.39 | ewjerkz, JACKZ, r1nkle, sjuush, Snappi     |
|            5 |      223 | 2025-02-15 | Rebels Gaming          | W   | 0.066      | 0.143        | 0.000 (0.000)    | 0.292 (0.003)    | 0 (0.000) |     1.04 | arrozdoce, ewjerkz, r1nkle, sjuush, Snappi |
|            4 |      225 | 2025-02-15 | Virtual Cottage        | W   | 0.066      | 0.143        | 0.000 (0.000)    | 0.194 (0.002)    | 0 (0.000) |     1.03 | arrozdoce, ewjerkz, r1nkle, sjuush, Snappi |
|            3 |      234 | 2025-02-15 | RUBY                   | W   | 0.064      | 0.143        | 0.000 (0.000)    | 0.097 (0.001)    | 0 (0.000) |     1.01 | arrozdoce, ewjerkz, r1nkle, sjuush, Snappi |
|            2 |      236 | 2025-02-15 | Benched                | W   | 0.064      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.01 | arrozdoce, ewjerkz, r1nkle, sjuush, Snappi |
|            1 |      531 | 2025-02-06 | BetBoom Team           | L   | 0.003      | -            | -                | -                | -         |    -0.03 | arrozdoce, ewjerkz, r1nkle, sjuush, Snappi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
