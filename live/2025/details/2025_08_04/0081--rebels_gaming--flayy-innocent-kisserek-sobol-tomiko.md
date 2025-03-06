### Roster Details<br />
Team Name: Rebels Gaming<br />
Roster: Flayy, innocent, kisserek, Sobol, tomiko<br />
Global Rank: [81](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [47]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  400.3<br />
<br />
Final Rank Value (400.3) = Starting Rank Value (400.8) + Head To Head Adjustments (-0.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.8
- 400 + ( ( 0.000 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 400.8


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
|            6 |      115 | 2025-02-22 | RUSH B (Russian team) | L   | 0.110      | -            | -                | -                | -         |    -1.16 | Flayy, innocent, kisserek, Sobol, tomiko |
|            5 |      134 | 2025-02-21 | ESC Gaming            | L   | 0.104      | -            | -                | -                | -         |    -1.65 | Flayy, innocent, kisserek, Sobol, tomiko |
|            4 |      223 | 2025-02-15 | Ninjas in Pyjamas     | L   | 0.066      | -            | -                | -                | -         |    -1.04 | Flayy, innocent, kisserek, Sobol, tomiko |
|            3 |      226 | 2025-02-15 | KONO.ECF              | W   | 0.065      | 0.143        | 0.000 (0.000)    | 0.194 (0.002)    | 0 (0.000) |     1.03 | Flayy, innocent, kisserek, Sobol, tomiko |
|            2 |      231 | 2025-02-15 | THE GENTLEMEN ESPORTS | W   | 0.065      | 0.143        | 0.000 (0.000)    | 0.089 (0.001)    | 0 (0.000) |     1.01 | Flayy, innocent, kisserek, Sobol, tomiko |
|            1 |      242 | 2025-02-15 | OG                    | W   | 0.064      | 0.143        | 0.000 (0.000)    | 1.000 (0.009)    | 0 (0.000) |     1.40 | Flayy, innocent, kisserek, Sobol, tomiko |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
