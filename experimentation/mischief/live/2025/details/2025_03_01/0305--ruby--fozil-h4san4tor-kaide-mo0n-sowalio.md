### Roster Details<br />
Team Name: RUBY<br />
Roster: fozil, H4SAN4TOR, Kaide, mo0N, Sowalio<br />
Global Rank: [305](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [174]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  540.1<br />
<br />
Final Rank Value (540.1) = Starting Rank Value (511.4) + Head To Head Adjustments (28.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.216[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.057<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 511.4
- 400 + ( ( 0.057 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 511.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      338 | 2025-02-15 | Ninjas in Pyjamas                         | L   | 1.000      | -            | -                | -                | -         |   -10.03 | fozil, H4SAN4TOR, Kaide, mo0N, Sowalio |
|           13 |      341 | 2025-02-15 | Preasy Esport                             | W   | 1.000      | 0.143        | 0.011 (0.002)    | 0.532 (0.076)    | 0 (0.000) |    23.33 | fozil, H4SAN4TOR, Kaide, mo0N, Sowalio |
|           12 |     4011 | 2024-09-29 | FLuffy Gangsters                          | W   | 0.178      | 0.143        | 0.013 (0.000)    | 0.560 (0.014)    | 0 (0.000) |     4.28 | forkyz, Kaide, mo0N, Sowalio, tasman   |
|           11 |     4158 | 2024-09-25 | ENCE Academy                              | W   | 0.153      | 0.143        | 0.009 (0.000)    | 0.545 (0.012)    | 0 (0.000) |     3.88 | forkyz, Kaide, mo0N, Sowalio, tasman   |
|           10 |     4214 | 2024-09-24 | Daystar                                   | W   | 0.146      | 0.143        | 0.000 (0.000)    | 0.033 (0.001)    | 0 (0.000) |     2.96 | forkyz, Kaide, mo0N, Sowalio, tasman   |
|            9 |     4284 | 2024-09-22 | Rhyno Esports                             | L   | 0.133      | -            | -                | -                | -         |    -1.27 | forkyz, Kaide, mo0N, Sowalio, tasman   |
|            8 |     4329 | 2024-09-20 | Copenhagen Wolves (American organization) | W   | 0.120      | 0.143        | 0.000 (0.000)    | 0.077 (0.001)    | 0 (0.000) |     2.00 | forkyz, Kaide, mo0N, Sowalio, tasman   |
|            7 |     4368 | 2024-09-19 | FLuffy Gangsters                          | W   | 0.113      | 0.143        | 0.013 (0.000)    | 0.560 (0.009)    | 0 (0.000) |     2.76 | forkyz, Kaide, mo0N, Sowalio, tasman   |
|            6 |     4552 | 2024-09-13 | AMKAL ESPORTS                             | L   | 0.072      | -            | -                | -                | -         |    -0.50 | Chill, Kaide, mo0N, Something, Sowalio |
|            5 |     4599 | 2024-09-12 | ENCE Academy                              | W   | 0.064      | 0.143        | 0.009 (0.000)    | 0.545 (0.005)    | 0 (0.000) |     1.64 | Chill, Kaide, mo0N, Something, Sowalio |
|            4 |     4625 | 2024-09-11 | AMKAL ESPORTS                             | L   | 0.058      | -            | -                | -                | -         |    -0.40 | Chill, Kaide, mo0N, Something, Sowalio |
|            3 |     4774 | 2024-09-05 | Dynamo Eclot                              | L   | 0.019      | -            | -                | -                | -         |    -0.03 | Chill, Kaide, mo0N, Something, Sowalio |
|            2 |     4812 | 2024-09-04 | Team Spirit Academy                       | L   | 0.012      | -            | -                | -                | -         |    -0.04 | Chill, Kaide, mo0N, Something, Sowalio |
|            1 |     4857 | 2024-09-03 | BC.Game Esports                           | W   | 0.004      | 0.372        | 0.022 (0.000)    | 0.256 (0.000)    | 0 (0.000) |     0.11 | Chill, Kaide, mo0N, Something, Sowalio |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
