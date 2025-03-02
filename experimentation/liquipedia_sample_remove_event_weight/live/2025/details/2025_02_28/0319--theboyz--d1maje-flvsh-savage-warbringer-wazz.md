### Roster Details<br />
Team Name: Theboyz<br />
Roster: d1maje, FLVSH, SAVAGE, warbringer, waZz<br />
Global Rank: [319](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [208]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  685.0<br />
<br />
Final Rank Value (685.0) = Starting Rank Value (672.5) + Head To Head Adjustments (12.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.293[<sup>1</sup>](#table2)
- Bounty Collected: 0.236[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.137<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 672.5
- 400 + ( ( 0.137 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 672.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1949 | 2024-12-07 | HyperSpirit     | W   | 0.645      | 1.000        | 0.000 (0.000)    | 0.095 (0.061)    | 0 (0.000) |     5.92 | d1maje, FLVSH, SAVAGE, warbringer, waZz |
|            4 |     2224 | 2024-12-01 | Perfect Storm   | W   | 0.607      | 1.000        | 0.009 (0.006)    | 0.125 (0.076)    | 0 (0.000) |    10.53 | d1maje, FLVSH, SAVAGE, warbringer, waZz |
|            3 |     2242 | 2024-12-01 | JackBoyz        | L   | 0.606      | -            | -                | -                | -         |    -9.53 | d1maje, FLVSH, SAVAGE, warbringer, waZz |
|            2 |     2253 | 2024-12-01 | Infinite Gaming | W   | 0.606      | 1.000        | 0.000 (0.000)    | 0.064 (0.039)    | 0 (0.000) |     6.23 | d1maje, FLVSH, SAVAGE, warbringer, waZz |
|            1 |     2324 | 2024-11-30 | Nexus Gaming    | L   | 0.600      | -            | -                | -                | -         |    -0.67 | d1maje, FLVSH, SAVAGE, warbringer, waZz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,100.99)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.699 | $1,575.71      | $1,100.99       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
