### Roster Details<br />
Team Name: ESC Gaming<br />
Roster: AMSALEM, bajmi, maaryy, mASKED, SaMey<br />
Global Rank: [196](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [116]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  561.0<br />
<br />
Final Rank Value (561.0) = Starting Rank Value (530.5) + Head To Head Adjustments (30.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.230[<sup>2</sup>](#table1)
- Opponent Network: 0.022[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.063<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 530.5
- 400 + ( ( 0.063 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 530.5


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
|           10 |       10 | 2025-02-28 | Tricked Esport        | L   | 0.943      | -            | -                | -                | -         |    -6.29 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            9 |       38 | 2025-02-25 | OG                    | L   | 0.924      | -            | -                | -                | -         |    -4.65 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            8 |       67 | 2025-02-24 | Ninjas in Pyjamas     | W   | 0.916      | 0.143        | 0.000 (0.000)    | 0.535 (0.070)    | 0 (0.000) |    17.57 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            7 |       87 | 2025-02-23 | RUSH B (Russian team) | L   | 0.911      | -            | -                | -                | -         |    -5.92 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            6 |      107 | 2025-02-22 | Fire Flux Esports     | L   | 0.905      | -            | -                | -                | -         |    -4.72 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            5 |      134 | 2025-02-21 | Rebels Gaming         | W   | 0.898      | 0.143        | 0.003 (0.000)    | 0.262 (0.034)    | 0 (0.000) |    19.01 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            4 |      759 | 2024-12-23 | WOPA Esport           | L   | 0.497      | -            | -                | -                | -         |    -3.31 | AMSALEM, maaryy, mASKED, shushan, tomiko |
|            3 |      772 | 2024-12-22 | Astralis Talent       | W   | 0.490      | 0.333        | 0.002 (0.000)    | 0.310 (0.051)    | 0 (0.000) |    10.73 | AMSALEM, maaryy, mASKED, shushan, tomiko |
|            2 |      809 | 2024-12-19 | ENCE Academy          | L   | 0.469      | -            | -                | -                | -         |    -3.27 | AMSALEM, maaryy, mASKED, shushan, tomiko |
|            1 |      820 | 2024-12-18 | WOPA Esport           | W   | 0.463      | 0.333        | 0.025 (0.004)    | 0.434 (0.067)    | 0 (0.000) |    11.41 | AMSALEM, maaryy, mASKED, shushan, tomiko |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
