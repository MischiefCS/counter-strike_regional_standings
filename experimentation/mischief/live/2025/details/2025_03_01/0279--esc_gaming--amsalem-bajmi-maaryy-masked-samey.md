### Roster Details<br />
Team Name: ESC Gaming<br />
Roster: AMSALEM, bajmi, maaryy, mASKED, SaMey<br />
Global Rank: [279](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [167]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  585.8<br />
<br />
Final Rank Value (585.8) = Starting Rank Value (539.7) + Head To Head Adjustments (46.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.248[<sup>2</sup>](#table1)
- Opponent Network: 0.038[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.071<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 539.7
- 400 + ( ( 0.071 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 539.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent              | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |       10 | 2025-02-28 | Tricked Esport        | L   | 1.000      | -            | -                | -                | -         |    -6.62 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            9 |       38 | 2025-02-25 | OG                    | L   | 1.000      | -            | -                | -                | -         |    -4.69 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            8 |       67 | 2025-02-24 | Ninjas in Pyjamas     | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.667 (0.095)    | 0 (0.000) |    21.85 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            7 |       94 | 2025-02-23 | RUSH B (Russian team) | L   | 1.000      | -            | -                | -                | -         |    -6.24 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            6 |      130 | 2025-02-22 | Fire Flux Esports     | L   | 1.000      | -            | -                | -                | -         |    -4.49 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            5 |      169 | 2025-02-21 | Rebels Gaming         | W   | 1.000      | 0.143        | 0.009 (0.001)    | 0.296 (0.042)    | 0 (0.000) |    21.70 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            4 |     1202 | 2024-12-23 | WOPA Esport           | L   | 0.745      | -            | -                | -                | -         |    -4.32 | AMSALEM, maaryy, mASKED, shushan, tomiko |
|            3 |     1227 | 2024-12-22 | Astralis Talent       | W   | 0.738      | 0.333        | 0.002 (0.001)    | 0.404 (0.100)    | 0 (0.000) |    15.84 | AMSALEM, maaryy, mASKED, shushan, tomiko |
|            2 |     1347 | 2024-12-19 | ENCE Academy          | L   | 0.718      | -            | -                | -                | -         |    -4.96 | AMSALEM, maaryy, mASKED, shushan, tomiko |
|            1 |     1362 | 2024-12-18 | WOPA Esport           | W   | 0.711      | 0.333        | 0.031 (0.007)    | 0.601 (0.143)    | 0 (0.000) |    18.09 | AMSALEM, maaryy, mASKED, shushan, tomiko |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
