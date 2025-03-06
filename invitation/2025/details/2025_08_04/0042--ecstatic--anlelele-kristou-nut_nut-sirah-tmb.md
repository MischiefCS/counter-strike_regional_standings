### Roster Details<br />
Team Name: ECSTATIC<br />
Roster: Anlelele, kristou, nut nut, sirah, TMB<br />
Global Rank: [42](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [29]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  532.2<br />
<br />
Final Rank Value (532.2) = Starting Rank Value (528.3) + Head To Head Adjustments (3.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.193[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.049<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 528.3
- 400 + ( ( 0.049 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 528.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |        4 | 2025-03-01 | Tricked Esport       | W   | 0.156      | 0.143        | 0.000 (0.000)    | 0.734 (0.016)    | 0 (0.000) |     1.64 | Anlelele, kristou, nut nut, sirah, TMB |
|            9 |       12 | 2025-02-27 | FAVBET Team          | W   | 0.145      | 0.143        | 0.000 (0.000)    | 0.229 (0.005)    | 0 (0.000) |     1.52 | Anlelele, kristou, nut nut, sirah, TMB |
|            8 |       22 | 2025-02-26 | ALASKA               | W   | 0.139      | 0.143        | 0.032 (0.001)    | 0.420 (0.008)    | 0 (0.000) |     4.30 | Anlelele, kristou, nut nut, sirah, TMB |
|            7 |      159 | 2025-02-20 | Iberian Soul         | L   | 0.097      | -            | -                | -                | -         |    -2.03 | Anlelele, kristou, nut nut, sirah, TMB |
|            6 |      167 | 2025-02-19 | Alliance             | L   | 0.092      | -            | -                | -                | -         |    -1.94 | Anlelele, kristou, nut nut, sirah, TMB |
|            5 |      174 | 2025-02-18 | CYBERSHOKE Esports   | L   | 0.083      | -            | -                | -                | -         |    -0.45 | Anlelele, kristou, nut nut, sirah, TMB |
|            4 |      207 | 2025-02-16 | SINNERS Esports      | W   | 0.071      | 0.435        | 0.000 (0.000)    | 0.081 (0.003)    | 0 (0.000) |     1.12 | Anlelele, kristou, nut nut, sirah, TMB |
|            3 |      246 | 2025-02-15 | Natus Vincere Junior | L   | 0.063      | -            | -                | -                | -         |    -0.30 | Anlelele, kristou, nut nut, sirah, TMB |
|            2 |      309 | 2025-02-12 | Chimera Esports      | W   | 0.045      | 0.435        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.47 | Anlelele, kristou, nut nut, sirah, TMB |
|            1 |      377 | 2025-02-10 | Fnatic               | L   | 0.029      | -            | -                | -                | -         |    -0.43 | Anlelele, kristou, nut nut, sirah, TMB |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
