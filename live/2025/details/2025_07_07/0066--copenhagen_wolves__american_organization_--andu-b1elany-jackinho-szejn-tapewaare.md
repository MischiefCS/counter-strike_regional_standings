### Roster Details<br />
Team Name: Copenhagen Wolves (American organization)<br />
Roster: aNdu, b1elany, Jackinho, szejn, Tapewaare<br />
Global Rank: [66](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [47]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  522.8<br />
<br />
Final Rank Value (522.8) = Starting Rank Value (521.4) + Head To Head Adjustments (1.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.188[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.049<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 521.4
- 400 + ( ( 0.049 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 521.4


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
|           14 |       86 | 2025-02-23 | ARCRED                 | L   | 0.304      | -            | -                | -                | -         |    -6.35 | aNdu, b1elany, Jackinho, szejn, Tapewaare |
|           13 |       89 | 2025-02-23 | Wolves eSports         | W   | 0.304      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.10 | aNdu, b1elany, Jackinho, szejn, Tapewaare |
|           12 |      142 | 2025-02-21 | Tricked Esport         | L   | 0.291      | -            | -                | -                | -         |    -6.13 | aNdu, b1elany, Jackinho, szejn, Tapewaare |
|           11 |      172 | 2025-02-18 | BC.Game Esports        | L   | 0.271      | -            | -                | -                | -         |    -0.82 | aNdu, b1elany, Jackinho, szejn, Tapewaare |
|           10 |      197 | 2025-02-17 | GTZ.ESPORTS            | W   | 0.264      | 0.435        | 0.000 (0.000)    | 0.228 (0.026)    | 0 (0.000) |     4.45 | aNdu, b1elany, Jackinho, szejn, Tapewaare |
|            9 |      277 | 2025-02-14 | Chimera Esports        | W   | 0.243      | 0.435        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.50 | aNdu, b1elany, Jackinho, szejn, Tapewaare |
|            8 |      315 | 2025-02-12 | Sashi Esport           | L   | 0.230      | -            | -                | -                | -         |    -3.32 | aNdu, b1elany, Jackinho, szejn, Tapewaare |
|            7 |      335 | 2025-02-11 | 9INE                   | L   | 0.224      | -            | -                | -                | -         |    -3.41 | aNdu, b1elany, Jackinho, szejn, Tapewaare |
|            6 |      407 | 2025-02-09 | Iberian Soul           | W   | 0.210      | 0.143        | 0.000 (0.000)    | 0.654 (0.020)    | 0 (0.000) |     2.27 | aNdu, b1elany, Jackinho, szejn, Tapewaare |
|            5 |      501 | 2025-02-07 | ALASKA                 | W   | 0.197      | 0.143        | 0.017 (0.000)    | 0.519 (0.015)    | 0 (0.000) |     5.81 | aNdu, b1elany, Jackinho, szejn, Tapewaare |
|            4 |      524 | 2025-02-06 | Betclic Apogee Esports | W   | 0.191      | 0.143        | 0.000 (0.000)    | 0.460 (0.013)    | 0 (0.000) |     3.39 | aNdu, b1elany, Jackinho, szejn, Tapewaare |
|            3 |      635 | 2025-01-29 | Wild Lotus             | L   | 0.138      | -            | -                | -                | -         |    -2.88 | aNdu, b1elany, Jackinho, szejn, Tapewaare |
|            2 |      655 | 2025-01-25 | KONO.ECF               | W   | 0.112      | 0.143        | 0.000 (0.000)    | 0.383 (0.006)    | 0 (0.000) |     1.20 | aNdu, b1elany, Jackinho, szejn, Tapewaare |
|            1 |      665 | 2025-01-24 | ECSTATIC               | W   | 0.103      | 0.143        | 0.000 (0.000)    | 0.735 (0.011)    | 0 (0.000) |     1.66 | aNdu, b1elany, Jackinho, szejn, Tapewaare |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
