### Roster Details<br />
Team Name: AMKAL ESPORTS<br />
Roster: AW, Forester, kAlash, molodoy, sFade8<br />
Global Rank: [106](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [70]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  517.3<br />
<br />
Final Rank Value (517.3) = Starting Rank Value (522.4) + Head To Head Adjustments (-5.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.201[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.053<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 522.4
- 400 + ( ( 0.053 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 522.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |       90 | 2025-02-23 | Preasy Esport       | L   | 0.537      | -            | -                | -                | -         |    -5.18 | AW, Forester, kAlash, molodoy, sFade8 |
|           11 |      135 | 2025-02-21 | CYBERSHOKE Esports  | L   | 0.524      | -            | -                | -                | -         |    -2.75 | AW, Forester, kAlash, molodoy, sFade8 |
|           10 |      193 | 2025-02-17 | WeLoveUSmooya       | L   | 0.497      | -            | -                | -                | -         |   -10.56 | AW, kAlash, molodoy, sFade8, sm3t     |
|            9 |      460 | 2025-02-08 | CYBERSHOKE Esports  | L   | 0.438      | -            | -                | -                | -         |    -2.56 | AW, kAlash, molodoy, sFade8, sm3t     |
|            8 |      497 | 2025-02-07 | OG                  | L   | 0.431      | -            | -                | -                | -         |    -5.70 | AW, kAlash, molodoy, sFade8, sm3t     |
|            7 |      526 | 2025-02-06 | CYBERSHOKE Esports  | W   | 0.423      | 0.143        | 0.013 (0.001)    | 1.000 (0.060)    | 0 (0.000) |    10.94 | AW, kAlash, molodoy, sFade8, sm3t     |
|            6 |      641 | 2025-01-29 | ECSTATIC            | L   | 0.369      | -            | -                | -                | -         |    -2.79 | AW, kAlash, molodoy, sFade8, sm3t     |
|            5 |      648 | 2025-01-27 | Wild Lotus          | W   | 0.359      | 0.143        | 0.000 (0.000)    | 0.236 (0.012)    | 0 (0.000) |     5.32 | AW, kAlash, molodoy, sFade8, sm3t     |
|            4 |      652 | 2025-01-26 | Zero Tenacity       | W   | 0.351      | 0.143        | 0.002 (0.000)    | 0.391 (0.020)    | 0 (0.000) |     7.79 | AW, kAlash, molodoy, sFade8, sm3t     |
|            3 |      912 | 2024-12-12 | Zero Tenacity       | L   | 0.052      | -            | -                | -                | -         |    -0.47 | AW, kAlash, molodoy, sFade8, sm3t     |
|            2 |      964 | 2024-12-08 | Team Spirit Academy | W   | 0.024      | 0.435        | 0.018 (0.000)    | 0.291 (0.003)    | 0 (0.000) |     0.60 | AW, kAlash, molodoy, sFade8, sm3t     |
|            1 |     1011 | 2024-12-06 | ECSTATIC            | W   | 0.012      | 0.435        | 0.008 (0.000)    | 0.830 (0.004)    | 0 (0.000) |     0.29 | AW, kAlash, molodoy, sFade8, sm3t     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
