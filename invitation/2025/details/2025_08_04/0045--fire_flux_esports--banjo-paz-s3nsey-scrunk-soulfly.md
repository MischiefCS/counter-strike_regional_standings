### Roster Details<br />
Team Name: Fire Flux Esports<br />
Roster: Banjo, paz, S3NSEY, ScrunK, soulfly<br />
Global Rank: [45](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [32]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  520.2<br />
<br />
Final Rank Value (520.2) = Starting Rank Value (520.2) + Head To Head Adjustments (-0.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.180[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.046<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 520.2
- 400 + ( ( 0.046 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 520.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent              | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |        8 | 2025-02-28 | Iberian Soul          | L   | 0.150      | -            | -                | -                | -         |    -3.07 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|            9 |       41 | 2025-02-25 | Wild Lotus            | W   | 0.130      | 0.143        | 0.000 (0.000)    | 0.157 (0.003)    | 0 (0.000) |     1.37 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|            8 |       57 | 2025-02-24 | Iberian Soul          | L   | 0.124      | -            | -                | -                | -         |    -2.57 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|            7 |       60 | 2025-02-24 | Ninjas in Pyjamas     | W   | 0.124      | 0.143        | 0.000 (0.000)    | 0.567 (0.010)    | 0 (0.000) |     1.32 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|            6 |      107 | 2025-02-22 | ESC Gaming            | W   | 0.112      | 0.143        | 0.000 (0.000)    | 0.342 (0.005)    | 0 (0.000) |     1.19 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|            5 |      123 | 2025-02-21 | RUSH B (Russian team) | W   | 0.106      | 0.143        | 0.000 (0.000)    | 0.755 (0.011)    | 0 (0.000) |     1.69 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|            4 |      295 | 2025-02-13 | Nexus Gaming          | L   | 0.050      | -            | -                | -                | -         |    -0.56 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|            3 |      399 | 2025-02-09 | SINNERS Esports       | W   | 0.025      | 0.435        | 0.000 (0.000)    | 0.081 (0.001)    | 0 (0.000) |     0.40 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|            2 |      499 | 2025-02-07 | Natus Vincere Junior  | W   | 0.011      | 0.435        | 0.060 (0.000)    | 0.603 (0.003)    | 0 (0.000) |     0.29 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|            1 |      525 | 2025-02-06 | GTZ.ESPORTS           | L   | 0.004      | -            | -                | -                | -         |    -0.06 | Banjo, paz, S3NSEY, ScrunK, soulfly |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
