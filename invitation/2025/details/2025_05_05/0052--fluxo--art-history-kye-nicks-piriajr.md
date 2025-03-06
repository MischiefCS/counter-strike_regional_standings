### Roster Details<br />
Team Name: Fluxo<br />
Roster: arT, history, kye, nicks, piriajr<br />
Global Rank: [52](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_05_05.md)<br />
Regional Rank: [12]( ../../standings_americas_2025_05_05.md)<br />
<br />
Final Rank Value:  822.2<br />
<br />
Final Rank Value (822.2) = Starting Rank Value (811.2) + Head To Head Adjustments (10.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.404[<sup>1</sup>](#table2)
- Bounty Collected: 0.271[<sup>2</sup>](#table1)
- Opponent Network: 0.032[<sup>2</sup>](#table1)
- LAN Wins: 0.047[<sup>2</sup>](#table1)

The average of these factors is 0.189<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 811.2
- 400 + ( ( 0.189 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 811.2


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
|           17 |      105 | 2025-02-22 | Imperial Esports | L   | 0.719      | -            | -                | -                | -         |    -8.20 | arT, history, kye, nicks, piriajr |
|           16 |      121 | 2025-02-21 | Team Solid       | W   | 0.713      | 0.371        | 0.021 (0.005)    | 0.438 (0.116)    | 0 (0.000) |     9.65 | arT, history, kye, nicks, piriajr |
|           15 |      302 | 2025-02-12 | Legacy           | L   | 0.653      | -            | -                | -                | -         |    -9.61 | arT, history, kye, nicks, piriajr |
|           14 |      306 | 2025-02-12 | Sharks Esports   | W   | 0.652      | 0.143        | 0.043 (0.004)    | 0.507 (0.047)    | 0 (0.000) |    12.28 | arT, history, kye, nicks, piriajr |
|           13 |      323 | 2025-02-11 | Legacy           | L   | 0.647      | -            | -                | -                | -         |    -9.72 | arT, history, kye, nicks, piriajr |
|           12 |      329 | 2025-02-11 | Imperial Esports | W   | 0.646      | 0.143        | 0.080 (0.007)    | 0.733 (0.068)    | 0 (0.000) |    13.42 | arT, history, kye, nicks, piriajr |
|           11 |      459 | 2025-02-08 | Imperial Esports | L   | 0.624      | -            | -                | -                | -         |    -7.81 | arT, history, kye, nicks, piriajr |
|           10 |      682 | 2025-01-16 | Eternal Fire     | L   | 0.470      | -            | -                | -                | -         |    -0.03 | arT, history, kye, nicks, piriajr |
|            9 |     1146 | 2024-11-30 | ODDIK            | W   | 0.160      | 0.371        | 0.018 (0.001)    | 0.540 (0.032)    | 0 (0.000) |     2.05 | arT, kye, nicks, piriajr, zevy    |
|            8 |     1156 | 2024-11-30 | Team Solid       | W   | 0.158      | 0.371        | 0.021 (0.001)    | 0.438 (0.026)    | 0 (0.000) |     2.10 | arT, kye, nicks, piriajr, zevy    |
|            7 |     1183 | 2024-11-29 | TROPA DO TACO    | W   | 0.152      | 0.371        | 0.002 (0.000)    | -                | 0 (0.000) |     1.37 | arT, kye, nicks, piriajr, zevy    |
|            6 |     1211 | 2024-11-27 | Yawara E-Sports  | W   | 0.140      | 0.371        | -                | 0.191 (0.010)    | 0 (0.000) |     1.00 | arT, kye, nicks, piriajr, zevy    |
|            5 |     1254 | 2024-11-24 | Team Solid       | W   | 0.119      | 0.143        | 0.021 (0.000)    | 0.438 (0.007)    | 1 (0.119) |     1.59 | arT, kye, nicks, piriajr, zevy    |
|            4 |     1299 | 2024-11-22 | Sharks Esports   | W   | 0.107      | 0.143        | 0.043 (0.001)    | 0.507 (0.008)    | 1 (0.107) |     2.08 | arT, kye, nicks, piriajr, zevy    |
|            3 |     1590 | 2024-11-09 | Sharks Esports   | W   | 0.020      | 0.371        | 0.043 (0.000)    | 0.507 (0.004)    | 0 (0.000) |     0.39 | arT, kye, nicks, piriajr, zevy    |
|            2 |     1592 | 2024-11-09 | ODDIK            | W   | 0.019      | 0.371        | 0.018 (0.000)    | 0.540 (0.004)    | -         |     0.24 | arT, kye, nicks, piriajr, zevy    |
|            1 |     1614 | 2024-11-08 | TROPA DO TACO    | W   | 0.013      | -            | -                | -                | -         |     0.12 | arT, kye, nicks, piriajr, zevy    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,103.38)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-22 |      0.720 | $1,500.00      | $1,080.49       |
| 2024-11-30 |      0.160 | $10,000.00     | $1,596.53       |
| 2024-11-24 |      0.119 | $10,342.97     | $1,227.99       |
| 2024-11-09 |      0.020 | $10,000.00     | $198.38         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
