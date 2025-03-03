### Roster Details<br />
Team Name: VOLT (European team)<br />
Roster: Diviiii, Ex1st, msN, sk1tt, skyye<br />
Global Rank: [168](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [117]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  700.4<br />
<br />
Final Rank Value (700.4) = Starting Rank Value (673.5) + Head To Head Adjustments (27.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.282[<sup>1</sup>](#table2)
- Bounty Collected: 0.250[<sup>2</sup>](#table1)
- Opponent Network: 0.028[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.140<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 673.5
- 400 + ( ( 0.140 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 673.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     1139 | 2024-12-28 | Los kogutos         | L   | 0.778      | -            | -                | -                | -         |    -6.52 | Diviiii, Ex1st, msN, sk1tt, skyye |
|           11 |     1175 | 2024-12-26 | SkyFury             | W   | 0.766      | 0.333        | 0.004 (0.001)    | 0.335 (0.086)    | 0 (0.000) |     9.83 | Diviiii, Ex1st, msN, sk1tt, skyye |
|           10 |     1284 | 2024-12-21 | Dark Cloud Esports  | L   | 0.731      | -            | -                | -                | -         |    -8.31 | Diviiii, Ex1st, msN, sk1tt, skyye |
|            9 |     1321 | 2024-12-20 | SkyFury             | W   | 0.725      | 0.303        | 0.004 (0.001)    | 0.335 (0.074)    | 0 (0.000) |     9.55 | Diviiii, Ex1st, msN, sk1tt, skyye |
|            8 |     1327 | 2024-12-19 | ROYALS              | W   | 0.721      | 0.303        | 0.001 (0.000)    | 0.104 (0.023)    | 0 (0.000) |     9.23 | Diviiii, Ex1st, msN, sk1tt, skyye |
|            7 |     1356 | 2024-12-18 | Soul's Heart Esport | W   | 0.712      | 0.303        | 0.000 (0.000)    | 0.081 (0.017)    | 0 (0.000) |     6.20 | Diviiii, Ex1st, msN, sk1tt, skyye |
|            6 |     1385 | 2024-12-16 | Wu-Tang Clan        | L   | 0.699      | -            | -                | -                | -         |   -12.07 | Diviiii, Ex1st, msN, sk1tt, skyye |
|            5 |     1472 | 2024-12-14 | Soul's Heart Esport | W   | 0.685      | 0.303        | 0.000 (0.000)    | 0.081 (0.017)    | 0 (0.000) |     5.58 | Diviiii, Ex1st, msN, sk1tt, skyye |
|            4 |     1540 | 2024-12-13 | P0RTUGAL            | L   | 0.680      | -            | -                | -                | -         |    -8.40 | Ex1st, JBOEN, msN, sk1tt, skyye   |
|            3 |     1667 | 2024-12-08 | P0RTUGAL            | L   | 0.647      | -            | -                | -                | -         |    -8.47 | Ex1st, msN, sk1tt, smekk, zur1s   |
|            2 |     1672 | 2024-12-08 | PCIFIC Espor        | W   | 0.647      | 0.143        | 0.004 (0.000)    | 0.132 (0.012)    | 0 (0.000) |    12.24 | Ex1st, msN, sk1tt, smekk, zur1s   |
|            1 |     1679 | 2024-12-08 | Partizan Esports    | W   | 0.647      | 0.143        | 0.081 (0.007)    | 0.525 (0.049)    | 0 (0.000) |    18.09 | Ex1st, msN, sk1tt, smekk, zur1s   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($950.08)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-21 |      0.731 | $1,300.00      | $950.08         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
