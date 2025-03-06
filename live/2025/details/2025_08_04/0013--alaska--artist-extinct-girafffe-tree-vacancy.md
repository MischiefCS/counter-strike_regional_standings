### Roster Details<br />
Team Name: ALASKA<br />
Roster: arTisT, Extinct, Girafffe, Tree, Vacancy<br />
Global Rank: [13](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [10]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  1271.1<br />
<br />
Final Rank Value (1271.1) = Starting Rank Value (1285.9) + Head To Head Adjustments (-14.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.402[<sup>1</sup>](#table2)
- Bounty Collected: 0.185[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.765[<sup>2</sup>](#table1)

The average of these factors is 0.338<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1285.9
- 400 + ( ( 0.338 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 1285.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |       14 | 2025-02-27 | RUSH B (Russian team)                     | L   | 0.143      | -            | -                | -                | -         |    -4.45 | arTisT, Extinct, Girafffe, Tree, Vacancy |
|           11 |       22 | 2025-02-26 | ECSTATIC                                  | L   | 0.139      | -            | -                | -                | -         |    -4.30 | arTisT, Extinct, Girafffe, Tree, Vacancy |
|           10 |       97 | 2025-02-23 | 8Sins                                     | W   | 0.117      | 0.143        | 0.016 (0.000)    | 0.168 (0.003)    | 1 (0.117) |     0.64 | arTisT, Extinct, Girafffe, Tree, Vacancy |
|            9 |      102 | 2025-02-23 | Ctrl Alt Defeat                           | W   | 0.116      | 0.143        | 0.007 (0.000)    | 0.170 (0.003)    | 1 (0.116) |     0.52 | arTisT, Extinct, Girafffe, Tree, Vacancy |
|            8 |      110 | 2025-02-22 | 8Sins                                     | L   | 0.112      | -            | -                | -                | -         |    -2.92 | arTisT, Extinct, Girafffe, Tree, Vacancy |
|            7 |      280 | 2025-02-14 | CYBERSHOKE Esports                        | L   | 0.056      | -            | -                | -                | -         |    -1.64 | arTisT, Extinct, Girafffe, Tree, Vacancy |
|            6 |      312 | 2025-02-12 | SINNERS Esports                           | L   | 0.044      | -            | -                | -                | -         |    -1.37 | arTisT, Extinct, Girafffe, Tree, Vacancy |
|            5 |      340 | 2025-02-11 | 500                                       | L   | 0.037      | -            | -                | -                | -         |    -1.02 | arTisT, Extinct, Girafffe, Tree, Vacancy |
|            4 |      410 | 2025-02-09 | Aurora Gaming                             | W   | 0.022      | 0.143        | 0.000 (0.000)    | 0.551 (0.002)    | 0 (0.000) |     0.01 | arTisT, Extinct, Girafffe, Tree, Vacancy |
|            3 |      454 | 2025-02-08 | Betclic Apogee Esports                    | W   | 0.018      | 0.143        | 0.000 (0.000)    | 0.193 (0.001)    | 0 (0.000) |     0.00 | arTisT, Extinct, Girafffe, Tree, Vacancy |
|            2 |      501 | 2025-02-07 | Copenhagen Wolves (American organization) | L   | 0.010      | -            | -                | -                | -         |    -0.31 | arTisT, Extinct, Girafffe, Tree, Vacancy |
|            1 |      515 | 2025-02-06 | FAVBET Team                               | W   | 0.005      | 0.143        | 0.000 (0.000)    | 0.229 (0.000)    | 0 (0.000) |     0.00 | arTisT, Extinct, Girafffe, Tree, Vacancy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($317.76)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      0.117 | $2,715.56      | $317.76         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
