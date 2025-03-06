### Roster Details<br />
Team Name: Rebels Gaming<br />
Roster: Flayy, innocent, kisserek, Sobol, tomiko<br />
Global Rank: [93](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [58]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  406.0<br />
<br />
Final Rank Value (406.0) = Starting Rank Value (403.3) + Head To Head Adjustments (2.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.001<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 403.3
- 400 + ( ( 0.001 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 403.3


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
|            6 |      115 | 2025-02-22 | RUSH B (Russian team) | L   | 0.297      | -            | -                | -                | -         |    -3.22 | Flayy, innocent, kisserek, Sobol, tomiko |
|            5 |      134 | 2025-02-21 | ESC Gaming            | L   | 0.291      | -            | -                | -                | -         |    -4.71 | Flayy, innocent, kisserek, Sobol, tomiko |
|            4 |      223 | 2025-02-15 | Ninjas in Pyjamas     | L   | 0.253      | -            | -                | -                | -         |    -3.99 | Flayy, innocent, kisserek, Sobol, tomiko |
|            3 |      226 | 2025-02-15 | KONO.ECF              | W   | 0.252      | 0.143        | 0.000 (0.000)    | 0.383 (0.014)    | 0 (0.000) |     4.00 | Flayy, innocent, kisserek, Sobol, tomiko |
|            2 |      231 | 2025-02-15 | THE GENTLEMEN ESPORTS | W   | 0.251      | 0.143        | 0.000 (0.000)    | 0.097 (0.003)    | 0 (0.000) |     5.01 | Flayy, innocent, kisserek, Sobol, tomiko |
|            1 |      242 | 2025-02-15 | OG                    | W   | 0.251      | 0.143        | 0.000 (0.000)    | 1.000 (0.036)    | 0 (0.000) |     5.64 | Flayy, innocent, kisserek, Sobol, tomiko |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
