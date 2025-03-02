### Roster Details<br />
Team Name: StandOnBusiness<br />
Roster: cuze, milesd, Outback, Revampzz, tripp<br />
Global Rank: [565](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_02_28.md)<br />
Regional Rank: [129]( ../../standings_americas_2025_02_28.md)<br />
<br />
Final Rank Value:  412.3<br />
<br />
Final Rank Value (412.3) = Starting Rank Value (400.7) + Head To Head Adjustments (11.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.7
- 400 + ( ( 0.000 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 400.7


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
|            5 |     2074 | 2024-12-03 | SUPER EVIL GANG     | L   | 0.622      | -            | -                | -                | -         |    -2.55 | cuze, milesd, Outback, Revampzz, tripp |
|            4 |     2206 | 2024-12-01 | MCS Gaming          | L   | 0.609      | -            | -                | -                | -         |    -3.99 | cuze, milesd, Outback, Revampzz, tripp |
|            3 |     2371 | 2024-11-29 | Ascend              | W   | 0.595      | 0.372        | 0.000 (0.000)    | 0.030 (0.007)    | 0 (0.000) |    11.20 | cuze, milesd, Outback, Revampzz, tripp |
|            2 |     2493 | 2024-11-26 | Orbital vsat online | W   | 0.575      | 0.372        | 0.000 (0.000)    | 0.030 (0.006)    | 0 (0.000) |     8.97 | cuze, milesd, Outback, Revampzz, tripp |
|            1 |     6404 | 2024-09-20 | InControl           | L   | 0.128      | -            | -                | -                | -         |    -2.01 | corim, cuze, milesd, Revampzz, tripp   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
