### Roster Details<br />
Team Name: Rebels Gaming<br />
Roster: Flayy, innocent, kisserek, Sobol, tomiko<br />
Global Rank: [128](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [77]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  423.2<br />
<br />
Final Rank Value (423.2) = Starting Rank Value (406.5) + Head To Head Adjustments (16.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.003<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 406.5
- 400 + ( ( 0.003 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 406.5


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
|            8 |      115 | 2025-02-22 | RUSH B (Russian team) | L   | 0.530      | -            | -                | -                | -         |    -2.67 | Flayy, innocent, kisserek, Sobol, tomiko |
|            7 |      134 | 2025-02-21 | ESC Gaming            | L   | 0.524      | -            | -                | -                | -         |    -6.38 | Flayy, innocent, kisserek, Sobol, tomiko |
|            6 |      223 | 2025-02-15 | Ninjas in Pyjamas     | L   | 0.486      | -            | -                | -                | -         |    -5.48 | Flayy, innocent, kisserek, Sobol, tomiko |
|            5 |      226 | 2025-02-15 | KONO.ECF              | W   | 0.485      | 0.143        | 0.000 (0.000)    | 0.533 (0.037)    | 0 (0.000) |    10.41 | Flayy, innocent, kisserek, Sobol, tomiko |
|            4 |      231 | 2025-02-15 | THE GENTLEMEN ESPORTS | W   | 0.485      | 0.143        | 0.000 (0.000)    | 0.087 (0.006)    | 0 (0.000) |     9.84 | Flayy, innocent, kisserek, Sobol, tomiko |
|            3 |      242 | 2025-02-15 | OG                    | W   | 0.484      | 0.143        | 0.000 (0.000)    | 1.000 (0.069)    | 0 (0.000) |    11.40 | Flayy, innocent, kisserek, Sobol, tomiko |
|            2 |      867 | 2024-12-14 | CYBERSHOKE Esports    | L   | 0.065      | -            | -                | -                | -         |    -0.20 | casey, Flayy, innocent, kisserek, SZPERO |
|            1 |      892 | 2024-12-13 | FAVBET Team           | L   | 0.059      | -            | -                | -                | -         |    -0.27 | casey, Flayy, innocent, kisserek, SZPERO |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
