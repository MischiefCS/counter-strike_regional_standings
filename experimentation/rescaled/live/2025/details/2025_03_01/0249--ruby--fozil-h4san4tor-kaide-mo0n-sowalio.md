### Roster Details<br />
Team Name: RUBY<br />
Roster: fozil, H4SAN4TOR, Kaide, mo0N, Sowalio<br />
Global Rank: [249](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [139]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  541.7<br />
<br />
Final Rank Value (541.7) = Starting Rank Value (516.0) + Head To Head Adjustments (25.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.229[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.061<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 516.0
- 400 + ( ( 0.061 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 516.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      234 | 2025-02-15 | Ninjas in Pyjamas   | L   | 1.000      | -            | -                | -                | -         |    -8.53 | fozil, H4SAN4TOR, Kaide, mo0N, Sowalio |
|           10 |      237 | 2025-02-15 | Preasy Esport       | W   | 1.000      | 0.462        | 0.007 (0.003)    | 0.206 (0.095)    | 0 (0.000) |    22.41 | fozil, H4SAN4TOR, Kaide, mo0N, Sowalio |
|            9 |     2396 | 2024-09-29 | FLuffy Gangsters    | W   | 0.178      | 0.455        | 0.005 (0.000)    | 0.419 (0.034)    | 0 (0.000) |     4.24 | forkyz, Kaide, mo0N, Sowalio, tasman   |
|            8 |     2543 | 2024-09-25 | ENCE Academy        | W   | 0.153      | 0.462        | 0.009 (0.001)    | 0.230 (0.016)    | 0 (0.000) |     3.92 | forkyz, Kaide, mo0N, Sowalio, tasman   |
|            7 |     2599 | 2024-09-24 | Daystar             | W   | 0.146      | 0.464        | 0.000 (0.000)    | 0.009 (0.001)    | 0 (0.000) |     2.94 | forkyz, Kaide, mo0N, Sowalio, tasman   |
|            6 |     2914 | 2024-09-13 | AMKAL ESPORTS       | L   | 0.072      | -            | -                | -                | -         |    -0.54 | Chill, Kaide, mo0N, Something, Sowalio |
|            5 |     2961 | 2024-09-12 | ENCE Academy        | W   | 0.064      | 0.143        | 0.009 (0.000)    | 0.230 (0.002)    | 0 (0.000) |     1.65 | Chill, Kaide, mo0N, Something, Sowalio |
|            4 |     2987 | 2024-09-11 | AMKAL ESPORTS       | L   | 0.058      | -            | -                | -                | -         |    -0.43 | Chill, Kaide, mo0N, Something, Sowalio |
|            3 |     3136 | 2024-09-05 | Dynamo Eclot        | L   | 0.019      | -            | -                | -                | -         |    -0.01 | Chill, Kaide, mo0N, Something, Sowalio |
|            2 |     3174 | 2024-09-04 | Team Spirit Academy | L   | 0.012      | -            | -                | -                | -         |    -0.02 | Chill, Kaide, mo0N, Something, Sowalio |
|            1 |     3219 | 2024-09-03 | BC.Game Esports     | W   | 0.004      | 0.372        | 0.022 (0.000)    | 0.276 (0.000)    | 0 (0.000) |     0.12 | Chill, Kaide, mo0N, Something, Sowalio |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
