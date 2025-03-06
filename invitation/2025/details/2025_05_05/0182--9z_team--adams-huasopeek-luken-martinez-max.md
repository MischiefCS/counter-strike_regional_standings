### Roster Details<br />
Team Name: 9z Team<br />
Roster: adamS, HUASOPEEK, Luken, Martinez, max<br />
Global Rank: [182](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_05_05.md)<br />
Regional Rank: [53]( ../../standings_americas_2025_05_05.md)<br />
<br />
Final Rank Value:  485.7<br />
<br />
Final Rank Value (485.7) = Starting Rank Value (502.4) + Head To Head Adjustments (-16.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.173[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.015[<sup>2</sup>](#table1)

The average of these factors is 0.047<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 502.4
- 400 + ( ( 0.047 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 502.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |      166 | 2025-02-19 | ODDIK        | L   | 0.699      | -            | -                | -                | -         |    -3.85 | adamS, HUASOPEEK, Luken, Martinez, max |
|            8 |      511 | 2025-02-06 | Elevate      | L   | 0.613      | -            | -                | -                | -         |   -11.85 | HUASOPEEK, Luken, Martinez, max, yel   |
|            7 |      535 | 2025-02-05 | RED Canids   | L   | 0.606      | -            | -                | -                | -         |    -9.24 | dgt, HUASOPEEK, Luken, Martinez, max   |
|            6 |      548 | 2025-02-05 | Tropa do VSM | W   | 0.605      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.73 | dgt, HUASOPEEK, Luken, Martinez, max   |
|            5 |     1466 | 2024-11-15 | FURIA        | L   | 0.056      | -            | -                | -                | -         |    -0.04 | buda, dgt, HUASOPEEK, Martinez, max    |
|            4 |     1505 | 2024-11-13 | PaiN Gaming  | L   | 0.048      | -            | -                | -                | -         |    -0.00 | buda, dgt, HUASOPEEK, Martinez, max    |
|            3 |     1530 | 2024-11-12 | Wildcard     | L   | 0.042      | -            | -                | -                | -         |    -0.02 | buda, dgt, HUASOPEEK, Martinez, max    |
|            2 |     1551 | 2024-11-12 | Legacy       | W   | 0.036      | 0.143        | 0.032 (0.000)    | 0.598 (0.003)    | 1 (0.036) |     0.95 | buda, dgt, HUASOPEEK, Martinez, max    |
|            1 |     1559 | 2024-11-11 | RED Canids   | W   | 0.035      | 0.143        | 0.000 (0.000)    | 0.146 (0.001)    | 1 (0.035) |     0.56 | buda, dgt, HUASOPEEK, Martinez, max    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
