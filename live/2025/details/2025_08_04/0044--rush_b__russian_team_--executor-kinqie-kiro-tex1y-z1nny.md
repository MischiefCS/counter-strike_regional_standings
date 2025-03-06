### Roster Details<br />
Team Name: RUSH B (Russian team)<br />
Roster: executor, kinqie, KIRO, tex1y, z1Nny<br />
Global Rank: [44](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [31]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  522.7<br />
<br />
Final Rank Value (522.7) = Starting Rank Value (528.4) + Head To Head Adjustments (-5.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.193[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.049<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 528.4
- 400 + ( ( 0.049 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 528.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |        6 | 2025-02-28 | FAVBET Team          | L   | 0.152      | -            | -                | -                | -         |    -3.18 | executor, kinqie, KIRO, tex1y, z1Nny |
|           14 |       14 | 2025-02-27 | ALASKA               | W   | 0.143      | 0.143        | 0.032 (0.001)    | 0.420 (0.009)    | 0 (0.000) |     4.45 | executor, kinqie, KIRO, tex1y, z1Nny |
|           13 |       23 | 2025-02-26 | FAVBET Team          | L   | 0.138      | -            | -                | -                | -         |    -2.88 | executor, kinqie, KIRO, tex1y, z1Nny |
|           12 |       58 | 2025-02-24 | PARIVISION           | L   | 0.124      | -            | -                | -                | -         |    -1.77 | executor, kinqie, KIRO, tex1y, z1Nny |
|           11 |       87 | 2025-02-23 | ESC Gaming           | W   | 0.118      | 0.143        | 0.000 (0.000)    | 0.342 (0.006)    | 0 (0.000) |     1.24 | executor, kinqie, KIRO, tex1y, z1Nny |
|           10 |      115 | 2025-02-22 | Rebels Gaming        | W   | 0.110      | 0.143        | 0.000 (0.000)    | 0.292 (0.005)    | 0 (0.000) |     1.16 | executor, kinqie, KIRO, tex1y, z1Nny |
|            9 |      123 | 2025-02-21 | Fire Flux Esports    | L   | 0.106      | -            | -                | -                | -         |    -1.69 | executor, kinqie, KIRO, tex1y, z1Nny |
|            8 |      137 | 2025-02-21 | Astralis Talent      | L   | 0.104      | -            | -                | -                | -         |    -2.20 | executor, kinqie, KIRO, tex1y, z1Nny |
|            7 |      171 | 2025-02-18 | Natus Vincere Junior | L   | 0.085      | -            | -                | -                | -         |    -0.40 | executor, kinqie, KIRO, tex1y, z1Nny |
|            6 |      202 | 2025-02-17 | Fnatic               | L   | 0.076      | -            | -                | -                | -         |    -1.13 | executor, kinqie, KIRO, tex1y, z1Nny |
|            5 |      240 | 2025-02-15 | KONO.ECF             | L   | 0.064      | -            | -                | -                | -         |    -1.36 | executor, kinqie, KIRO, tex1y, z1Nny |
|            4 |      271 | 2025-02-14 | GTZ.ESPORTS          | W   | 0.058      | 0.435        | 0.000 (0.000)    | 0.051 (0.001)    | 0 (0.000) |     0.92 | executor, kinqie, KIRO, tex1y, z1Nny |
|            3 |      363 | 2025-02-10 | Sashi Esport         | W   | 0.032      | 0.435        | 0.000 (0.000)    | 0.318 (0.004)    | 0 (0.000) |     0.52 | executor, kinqie, KIRO, tex1y, z1Nny |
|            2 |      404 | 2025-02-09 | OG                   | W   | 0.024      | 0.143        | 0.000 (0.000)    | 1.000 (0.003)    | 0 (0.000) |     0.40 | executor, kinqie, KIRO, tex1y, z1Nny |
|            1 |      465 | 2025-02-08 | Zero Tenacity        | W   | 0.017      | 0.143        | 0.000 (0.000)    | 0.105 (0.000)    | 0 (0.000) |     0.25 | executor, kinqie, KIRO, tex1y, z1Nny |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
