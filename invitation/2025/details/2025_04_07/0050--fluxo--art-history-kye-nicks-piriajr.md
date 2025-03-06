### Roster Details<br />
Team Name: Fluxo<br />
Roster: arT, history, kye, nicks, piriajr<br />
Global Rank: [50](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_04_07.md)<br />
Regional Rank: [12]( ../../standings_americas_2025_04_07.md)<br />
<br />
Final Rank Value:  874.7<br />
<br />
Final Rank Value (874.7) = Starting Rank Value (850.4) + Head To Head Adjustments (24.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.425[<sup>1</sup>](#table2)
- Bounty Collected: 0.288[<sup>2</sup>](#table1)
- Opponent Network: 0.062[<sup>2</sup>](#table1)
- LAN Wins: 0.096[<sup>2</sup>](#table1)

The average of these factors is 0.218<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 850.4
- 400 + ( ( 0.218 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 850.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |      105 | 2025-02-22 | Imperial Esports | L   | 0.906      | -            | -                | -                | -         |   -10.84 | arT, history, kye, nicks, piriajr |
|           20 |      121 | 2025-02-21 | Team Solid       | W   | 0.899      | 0.371        | 0.021 (0.007)    | 0.501 (0.167)    | 0 (0.000) |    11.12 | arT, history, kye, nicks, piriajr |
|           19 |      302 | 2025-02-12 | Legacy           | L   | 0.840      | -            | -                | -                | -         |   -13.11 | arT, history, kye, nicks, piriajr |
|           18 |      306 | 2025-02-12 | Sharks Esports   | W   | 0.839      | 0.143        | 0.047 (0.006)    | 0.585 (0.070)    | 0 (0.000) |    14.90 | arT, history, kye, nicks, piriajr |
|           17 |      323 | 2025-02-11 | Legacy           | L   | 0.833      | -            | -                | -                | -         |   -13.44 | arT, history, kye, nicks, piriajr |
|           16 |      329 | 2025-02-11 | Imperial Esports | W   | 0.832      | 0.143        | 0.061 (0.007)    | 0.716 (0.085)    | 0 (0.000) |    16.67 | arT, history, kye, nicks, piriajr |
|           15 |      459 | 2025-02-08 | Imperial Esports | L   | 0.811      | -            | -                | -                | -         |   -11.21 | arT, history, kye, nicks, piriajr |
|           14 |      682 | 2025-01-16 | Eternal Fire     | L   | 0.657      | -            | -                | -                | -         |    -0.08 | arT, history, kye, nicks, piriajr |
|           13 |     1146 | 2024-11-30 | ODDIK            | W   | 0.346      | 0.371        | 0.022 (0.003)    | 0.533 (0.068)    | 0 (0.000) |     3.92 | arT, kye, nicks, piriajr, zevy    |
|           12 |     1156 | 2024-11-30 | Team Solid       | W   | 0.345      | 0.371        | 0.021 (0.003)    | 0.501 (0.064)    | 0 (0.000) |     4.02 | arT, kye, nicks, piriajr, zevy    |
|           11 |     1183 | 2024-11-29 | TROPA DO TACO    | W   | 0.339      | 0.371        | 0.003 (0.000)    | -                | 0 (0.000) |     2.81 | arT, kye, nicks, piriajr, zevy    |
|           10 |     1211 | 2024-11-27 | Yawara E-Sports  | W   | 0.327      | 0.371        | -                | 0.270 (0.033)    | 0 (0.000) |     2.28 | arT, kye, nicks, piriajr, zevy    |
|            9 |     1254 | 2024-11-24 | Team Solid       | W   | 0.305      | 0.143        | 0.021 (0.001)    | 0.501 (0.022)    | 1 (0.305) |     3.62 | arT, kye, nicks, piriajr, zevy    |
|            8 |     1299 | 2024-11-22 | Sharks Esports   | W   | 0.294      | 0.143        | 0.047 (0.002)    | 0.585 (0.025)    | 1 (0.294) |     5.57 | arT, kye, nicks, piriajr, zevy    |
|            7 |     1590 | 2024-11-09 | Sharks Esports   | W   | 0.207      | 0.371        | 0.047 (0.004)    | 0.585 (0.045)    | -         |     3.99 | arT, kye, nicks, piriajr, zevy    |
|            6 |     1592 | 2024-11-09 | ODDIK            | W   | 0.205      | 0.371        | 0.022 (0.002)    | 0.533 (0.041)    | -         |     2.48 | arT, kye, nicks, piriajr, zevy    |
|            5 |     1614 | 2024-11-08 | TROPA DO TACO    | W   | 0.200      | -            | -                | -                | -         |     1.68 | arT, kye, nicks, piriajr, zevy    |
|            4 |     1649 | 2024-11-06 | 9z Academy       | W   | 0.184      | -            | -                | -                | -         |     0.80 | arT, kye, nicks, piriajr, zevy    |
|            3 |     1893 | 2024-10-18 | Nemiga Gaming    | L   | 0.056      | -            | -                | -                | -         |    -0.89 | arT, kye, nicks, piriajr, zevy    |
|            2 |     1912 | 2024-10-17 | HEROIC           | L   | 0.050      | -            | -                | -                | -         |    -0.46 | arT, kye, nicks, piriajr, zevy    |
|            1 |     1946 | 2024-10-16 | Aurora Gaming    | W   | 0.042      | -            | -                | -                | 1 (0.042) |     0.46 | arT, kye, nicks, piriajr, zevy    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,047.40)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-22 |      0.907 | $1,500.00      | $1,360.49       |
| 2024-11-30 |      0.346 | $10,000.00     | $3,463.19       |
| 2024-11-24 |      0.305 | $10,342.97     | $3,158.68       |
| 2024-11-09 |      0.207 | $10,000.00     | $2,065.05       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
