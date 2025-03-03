### Roster Details<br />
Team Name: Fire in The Hole (Brazilian team)<br />
Roster: coldizinha, Dudi, F-AK4, sphynx, Tofer<br />
Global Rank: [339](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [90]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  386.7<br />
<br />
Final Rank Value (386.7) = Starting Rank Value (400.1) + Head To Head Adjustments (-13.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.1
- 400 + ( ( 0.000 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 400.1


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
|            8 |     3272 | 2024-10-31 | Fluxo Demons        | L   | 0.395      | -            | -                | -                | -         |    -1.28 | coldizinha, Dudi, F-AK4, sphynx, Tofer |
|            7 |     3275 | 2024-10-31 | Fluxo Demons        | L   | 0.395      | -            | -                | -                | -         |    -1.30 | coldizinha, Dudi, F-AK4, sphynx, Tofer |
|            6 |     3309 | 2024-10-30 | Metanoia Female     | L   | 0.388      | -            | -                | -                | -         |    -6.10 | coldizinha, Dudi, F-AK4, sphynx, Tofer |
|            5 |     3311 | 2024-10-30 | Metanoia Female     | W   | 0.388      | 0.143        | 0.000 (0.000)    | 0.022 (0.001)    | 0 (0.000) |     6.25 | coldizinha, Dudi, F-AK4, sphynx, Tofer |
|            4 |     3351 | 2024-10-29 | Peak Academy Female | L   | 0.381      | -            | -                | -                | -         |    -2.75 | coldizinha, Dudi, F-AK4, sphynx, Tofer |
|            3 |     3354 | 2024-10-29 | Peak Academy Female | L   | 0.381      | -            | -                | -                | -         |    -2.81 | coldizinha, Dudi, F-AK4, sphynx, Tofer |
|            2 |     3381 | 2024-10-28 | União BRARG         | L   | 0.375      | -            | -                | -                | -         |    -2.65 | coldizinha, Dudi, F-AK4, sphynx, Tofer |
|            1 |     3383 | 2024-10-28 | União BRARG         | L   | 0.374      | -            | -                | -                | -         |    -2.71 | coldizinha, Dudi, F-AK4, sphynx, Tofer |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
