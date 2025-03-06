### Roster Details<br />
Team Name: ESC Gaming<br />
Roster: AMSALEM, bajmi, maaryy, mASKED, SaMey<br />
Global Rank: [114](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [74]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  505.8<br />
<br />
Final Rank Value (505.8) = Starting Rank Value (508.8) + Head To Head Adjustments (-3.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.180[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.047<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 508.8
- 400 + ( ( 0.047 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 508.8


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
|           10 |       10 | 2025-02-28 | Tricked Esport        | L   | 0.569      | -            | -                | -                | -         |    -8.32 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            9 |       38 | 2025-02-25 | OG                    | L   | 0.551      | -            | -                | -                | -         |    -5.86 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            8 |       67 | 2025-02-24 | Ninjas in Pyjamas     | W   | 0.542      | 0.143        | 0.000 (0.000)    | 0.657 (0.051)    | 0 (0.000) |     9.70 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            7 |       87 | 2025-02-23 | RUSH B (Russian team) | L   | 0.538      | -            | -                | -                | -         |    -3.97 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            6 |      107 | 2025-02-22 | Fire Flux Esports     | L   | 0.532      | -            | -                | -                | -         |    -3.60 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            5 |      134 | 2025-02-21 | Rebels Gaming         | W   | 0.524      | 0.143        | 0.000 (0.000)    | 0.264 (0.020)    | 0 (0.000) |     6.38 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            4 |      759 | 2024-12-23 | WOPA Esport           | L   | 0.123      | -            | -                | -                | -         |    -0.92 | AMSALEM, maaryy, mASKED, shushan, tomiko |
|            3 |      772 | 2024-12-22 | Astralis Talent       | W   | 0.117      | 0.333        | 0.000 (0.000)    | 0.152 (0.006)    | 0 (0.000) |     1.90 | AMSALEM, maaryy, mASKED, shushan, tomiko |
|            2 |      809 | 2024-12-19 | ENCE Academy          | L   | 0.096      | -            | -                | -                | -         |    -0.48 | AMSALEM, maaryy, mASKED, shushan, tomiko |
|            1 |      820 | 2024-12-18 | WOPA Esport           | W   | 0.089      | 0.333        | 0.009 (0.000)    | 0.205 (0.006)    | 0 (0.000) |     2.14 | AMSALEM, maaryy, mASKED, shushan, tomiko |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
