### Roster Details<br />
Team Name: ESC Gaming<br />
Roster: AMSALEM, bajmi, maaryy, mASKED, SaMey<br />
Global Rank: [108](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [61]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  398.9<br />
<br />
Final Rank Value (398.9) = Starting Rank Value (402.6) + Head To Head Adjustments (-3.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.001<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 402.6
- 400 + ( ( 0.001 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 402.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent              | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |       10 | 2025-02-28 | Tricked Esport        | L   | 0.336      | -            | -                | -                | -         |    -5.08 | AMSALEM, bajmi, maaryy, mASKED, SaMey |
|            5 |       38 | 2025-02-25 | OG                    | L   | 0.318      | -            | -                | -                | -         |    -2.70 | AMSALEM, bajmi, maaryy, mASKED, SaMey |
|            4 |       67 | 2025-02-24 | Ninjas in Pyjamas     | W   | 0.309      | 0.143        | 0.000 (0.000)    | 0.688 (0.030)    | 0 (0.000) |     5.24 | AMSALEM, bajmi, maaryy, mASKED, SaMey |
|            3 |       87 | 2025-02-23 | RUSH B (Russian team) | L   | 0.304      | -            | -                | -                | -         |    -3.21 | AMSALEM, bajmi, maaryy, mASKED, SaMey |
|            2 |      107 | 2025-02-22 | Fire Flux Esports     | L   | 0.299      | -            | -                | -                | -         |    -2.73 | AMSALEM, bajmi, maaryy, mASKED, SaMey |
|            1 |      134 | 2025-02-21 | Rebels Gaming         | W   | 0.291      | 0.143        | 0.000 (0.000)    | 0.297 (0.012)    | 0 (0.000) |     4.71 | AMSALEM, bajmi, maaryy, mASKED, SaMey |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
