### Roster Details<br />
Team Name: Tricked Esport<br />
Roster: Nodios, Queenix, roeJ, salazar, valde<br />
Global Rank: [80](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [53]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  417.9<br />
<br />
Final Rank Value (417.9) = Starting Rank Value (404.5) + Head To Head Adjustments (13.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.002<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 404.5
- 400 + ( ( 0.002 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 404.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |        4 | 2025-03-01 | ECSTATIC                                  | L   | 0.343      | -            | -                | -                | -         |    -3.77 | Nodios, Queenix, roeJ, salazar, valde |
|            6 |       10 | 2025-02-28 | ESC Gaming                                | W   | 0.336      | 0.143        | 0.000 (0.000)    | 0.236 (0.011)    | 0 (0.000) |     5.08 | Nodios, Queenix, roeJ, salazar, valde |
|            5 |       45 | 2025-02-25 | Ninjas in Pyjamas                         | W   | 0.316      | 0.143        | 0.000 (0.000)    | 0.688 (0.031)    | 0 (0.000) |     5.10 | Nodios, Queenix, roeJ, salazar, valde |
|            4 |       62 | 2025-02-24 | OG                                        | L   | 0.310      | -            | -                | -                | -         |    -2.67 | Nodios, Queenix, roeJ, salazar, valde |
|            3 |      124 | 2025-02-21 | CYBERSHOKE Esports                        | L   | 0.292      | -            | -                | -                | -         |    -0.97 | Leakz, niko, Queenix, salazar, valde  |
|            2 |      131 | 2025-02-21 | Dark Cloud Esports                        | W   | 0.291      | 0.143        | 0.000 (0.000)    | 0.115 (0.005)    | 0 (0.000) |     4.49 | Leakz, niko, Queenix, salazar, valde  |
|            1 |      142 | 2025-02-21 | Copenhagen Wolves (American organization) | W   | 0.291      | 0.143        | 0.000 (0.000)    | 0.640 (0.027)    | 0 (0.000) |     6.13 | Leakz, niko, Queenix, salazar, valde  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
