### Roster Details<br />
Team Name: ESC Gaming<br />
Roster: AMSALEM, bajmi, maaryy, mASKED, SaMey<br />
Global Rank: [202](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [124]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  625.6<br />
<br />
Final Rank Value (625.6) = Starting Rank Value (573.9) + Head To Head Adjustments (51.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.268[<sup>2</sup>](#table1)
- Opponent Network: 0.098[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.091<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 573.9
- 400 + ( ( 0.091 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 573.9


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
|           10 |       10 | 2025-02-28 | Tricked Esport        | L   | 1.000      | -            | -                | -                | -         |    -5.01 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            9 |       38 | 2025-02-25 | OG                    | L   | 1.000      | -            | -                | -                | -         |    -2.80 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            8 |       67 | 2025-02-24 | Ninjas in Pyjamas     | W   | 1.000      | 0.830        | 0.000 (0.000)    | 0.477 (0.396)    | 0 (0.000) |    21.89 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            7 |       87 | 2025-02-23 | RUSH B (Russian team) | L   | 1.000      | -            | -                | -                | -         |    -4.58 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            6 |      107 | 2025-02-22 | Fire Flux Esports     | L   | 1.000      | -            | -                | -                | -         |    -3.20 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            5 |      134 | 2025-02-21 | Rebels Gaming         | W   | 1.000      | 0.653        | 0.009 (0.006)    | 0.318 (0.208)    | 0 (0.000) |    23.02 | AMSALEM, bajmi, maaryy, mASKED, SaMey    |
|            4 |      759 | 2024-12-23 | WOPA Esport           | L   | 0.745      | -            | -                | -                | -         |    -5.03 | AMSALEM, maaryy, mASKED, shushan, tomiko |
|            3 |      772 | 2024-12-22 | Astralis Talent       | W   | 0.738      | 0.580        | 0.002 (0.001)    | 0.388 (0.166)    | 0 (0.000) |    15.62 | AMSALEM, maaryy, mASKED, shushan, tomiko |
|            2 |      809 | 2024-12-19 | ENCE Academy          | L   | 0.718      | -            | -                | -                | -         |    -5.48 | AMSALEM, maaryy, mASKED, shushan, tomiko |
|            1 |      820 | 2024-12-18 | WOPA Esport           | W   | 0.711      | 0.581        | 0.028 (0.012)    | 0.499 (0.206)    | 0 (0.000) |    17.33 | AMSALEM, maaryy, mASKED, shushan, tomiko |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
