### Roster Details<br />
Team Name: Tricked Esport<br />
Roster: Nodios, Queenix, roeJ, salazar, valde<br />
Global Rank: [101](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [68]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  538.4<br />
<br />
Final Rank Value (538.4) = Starting Rank Value (511.3) + Head To Head Adjustments (27.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.179[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.048<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 511.3
- 400 + ( ( 0.048 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 511.3


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
|           11 |        4 | 2025-03-01 | ECSTATIC                                  | L   | 0.576      | -            | -                | -                | -         |    -4.85 | Nodios, Queenix, roeJ, salazar, valde    |
|           10 |       10 | 2025-02-28 | ESC Gaming                                | W   | 0.569      | 0.143        | 0.000 (0.000)    | 0.231 (0.019)    | 0 (0.000) |     8.32 | Nodios, Queenix, roeJ, salazar, valde    |
|            9 |       45 | 2025-02-25 | Ninjas in Pyjamas                         | W   | 0.549      | 0.143        | 0.000 (0.000)    | 0.657 (0.052)    | 0 (0.000) |     9.12 | Nodios, Queenix, roeJ, salazar, valde    |
|            8 |       62 | 2025-02-24 | OG                                        | L   | 0.543      | -            | -                | -                | -         |    -5.93 | Nodios, Queenix, roeJ, salazar, valde    |
|            7 |      124 | 2025-02-21 | CYBERSHOKE Esports                        | L   | 0.526      | -            | -                | -                | -         |    -2.81 | Leakz, niko, Queenix, salazar, valde     |
|            6 |      131 | 2025-02-21 | Dark Cloud Esports                        | W   | 0.525      | 0.143        | 0.001 (0.000)    | 0.158 (0.012)    | 0 (0.000) |    10.98 | Leakz, niko, Queenix, salazar, valde     |
|            5 |      142 | 2025-02-21 | Copenhagen Wolves (American organization) | W   | 0.524      | 0.143        | 0.002 (0.000)    | 0.657 (0.049)    | 0 (0.000) |    12.56 | Leakz, niko, Queenix, salazar, valde     |
|            4 |      951 | 2024-12-09 | Betclic Apogee Esports                    | L   | 0.030      | -            | -                | -                | -         |    -0.19 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|            3 |      994 | 2024-12-07 | Fire Flux Esports                         | L   | 0.016      | -            | -                | -                | -         |    -0.12 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|            2 |     1035 | 2024-12-05 | Chimera Esports                           | L   | 0.004      | -            | -                | -                | -         |    -0.03 | kraghen, nicoodoz, Nodios, Queenix, roeJ |
|            1 |     1049 | 2024-12-05 | Team Sampi                                | W   | 0.003      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.03 | kraghen, nicoodoz, Nodios, Queenix, roeJ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
