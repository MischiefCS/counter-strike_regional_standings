### Roster Details<br />
Team Name: Copenhagen Wolves (American organization)<br />
Roster: aNdu, b1elany, Jackinho, szejn, Tapewaare<br />
Global Rank: [54](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [38]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  501.8<br />
<br />
Final Rank Value (501.8) = Starting Rank Value (503.8) + Head To Head Adjustments (-2.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.158[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.040<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 503.8
- 400 + ( ( 0.040 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 503.8


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
|           11 |       86 | 2025-02-23 | ARCRED                 | L   | 0.118      | -            | -                | -                | -         |    -2.37 | aNdu, b1elany, Jackinho, szejn, Tapewaare |
|           10 |       89 | 2025-02-23 | Wolves eSports         | W   | 0.117      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.32 | aNdu, b1elany, Jackinho, szejn, Tapewaare |
|            9 |      142 | 2025-02-21 | Tricked Esport         | L   | 0.104      | -            | -                | -                | -         |    -2.10 | aNdu, b1elany, Jackinho, szejn, Tapewaare |
|            8 |      172 | 2025-02-18 | BC.Game Esports        | L   | 0.084      | -            | -                | -                | -         |    -0.23 | aNdu, b1elany, Jackinho, szejn, Tapewaare |
|            7 |      197 | 2025-02-17 | GTZ.ESPORTS            | W   | 0.077      | 0.435        | 0.000 (0.000)    | 0.051 (0.002)    | 0 (0.000) |     1.33 | aNdu, b1elany, Jackinho, szejn, Tapewaare |
|            6 |      277 | 2025-02-14 | Chimera Esports        | W   | 0.057      | 0.435        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.64 | aNdu, b1elany, Jackinho, szejn, Tapewaare |
|            5 |      315 | 2025-02-12 | Sashi Esport           | L   | 0.043      | -            | -                | -                | -         |    -0.61 | aNdu, b1elany, Jackinho, szejn, Tapewaare |
|            4 |      335 | 2025-02-11 | 9INE                   | L   | 0.037      | -            | -                | -                | -         |    -0.58 | aNdu, b1elany, Jackinho, szejn, Tapewaare |
|            3 |      407 | 2025-02-09 | Iberian Soul           | W   | 0.023      | 0.143        | 0.000 (0.000)    | 0.822 (0.003)    | 0 (0.000) |     0.27 | aNdu, b1elany, Jackinho, szejn, Tapewaare |
|            2 |      501 | 2025-02-07 | ALASKA                 | W   | 0.010      | 0.143        | 0.032 (0.000)    | 0.420 (0.001)    | 0 (0.000) |     0.31 | aNdu, b1elany, Jackinho, szejn, Tapewaare |
|            1 |      524 | 2025-02-06 | Betclic Apogee Esports | W   | 0.004      | 0.143        | 0.000 (0.000)    | 0.193 (0.000)    | 0 (0.000) |     0.05 | aNdu, b1elany, Jackinho, szejn, Tapewaare |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
