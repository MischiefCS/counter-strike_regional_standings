### Roster Details<br />
Team Name: AMKAL ESPORTS<br />
Roster: AW, Forester, kAlash, molodoy, sFade8<br />
Global Rank: [73](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [51]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  504.1<br />
<br />
Final Rank Value (504.1) = Starting Rank Value (515.0) + Head To Head Adjustments (-11.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.183[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.047<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 515.0
- 400 + ( ( 0.047 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 515.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |       90 | 2025-02-23 | Preasy Esport      | L   | 0.304      | -            | -                | -                | -         |    -6.24 | AW, Forester, kAlash, molodoy, sFade8 |
|            8 |      135 | 2025-02-21 | CYBERSHOKE Esports | L   | 0.291      | -            | -                | -                | -         |    -1.56 | AW, Forester, kAlash, molodoy, sFade8 |
|            7 |      193 | 2025-02-17 | WeLoveUSmooya      | L   | 0.264      | -            | -                | -                | -         |    -5.46 | AW, kAlash, molodoy, sFade8, sm3t     |
|            6 |      460 | 2025-02-08 | CYBERSHOKE Esports | L   | 0.204      | -            | -                | -                | -         |    -1.14 | AW, kAlash, molodoy, sFade8, sm3t     |
|            5 |      497 | 2025-02-07 | OG                 | L   | 0.198      | -            | -                | -                | -         |    -2.70 | AW, kAlash, molodoy, sFade8, sm3t     |
|            4 |      526 | 2025-02-06 | CYBERSHOKE Esports | W   | 0.190      | 0.143        | 0.012 (0.000)    | 1.000 (0.027)    | 0 (0.000) |     4.95 | AW, kAlash, molodoy, sFade8, sm3t     |
|            3 |      641 | 2025-01-29 | ECSTATIC           | L   | 0.136      | -            | -                | -                | -         |    -2.06 | AW, kAlash, molodoy, sFade8, sm3t     |
|            2 |      648 | 2025-01-27 | Wild Lotus         | W   | 0.125      | 0.143        | 0.000 (0.000)    | 0.221 (0.004)    | 0 (0.000) |     1.35 | AW, kAlash, molodoy, sFade8, sm3t     |
|            1 |      652 | 2025-01-26 | Zero Tenacity      | W   | 0.118      | 0.143        | 0.000 (0.000)    | 0.367 (0.006)    | 0 (0.000) |     1.90 | AW, kAlash, molodoy, sFade8, sm3t     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
