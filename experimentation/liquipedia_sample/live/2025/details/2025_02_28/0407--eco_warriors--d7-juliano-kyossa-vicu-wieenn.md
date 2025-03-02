### Roster Details<br />
Team Name: Eco Warriors<br />
Roster: D7, juliano, kyossa, vicu, wieenN<br />
Global Rank: [407](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [256]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  602.8<br />
<br />
Final Rank Value (602.8) = Starting Rank Value (537.0) + Head To Head Adjustments (65.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.254[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.066<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 537.0
- 400 + ( ( 0.066 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 537.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |       18 | 2025-02-27 | AKA HERO KAJO     | W   | 1.000      | 0.338        | 0.005 (0.002)    | 0.219 (0.074)    | 0 (0.000) |    21.88 | D7, juliano, kyossa, vicu, wieenN  |
|            5 |      754 | 2025-02-05 | SAW               | L   | 1.000      | -            | -                | -                | -         |    -0.47 | Angelka, D7, juliano, kyossa, vicu |
|            4 |      761 | 2025-02-05 | 500               | L   | 1.000      | -            | -                | -                | -         |    -2.48 | Angelka, D7, juliano, kyossa, vicu |
|            3 |      812 | 2025-02-01 | Prototype Blaze   | W   | 1.000      | 0.143        | 0.069 (0.010)    | 0.245 (0.035)    | 0 (0.000) |    27.43 | D7, juliano, kyossa, vicu, wieenN  |
|            2 |      818 | 2025-02-01 | Forfunny          | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.050 (0.007)    | 0 (0.000) |     9.82 | D7, juliano, kyossa, vicu, wieenN  |
|            1 |      833 | 2025-01-31 | 95 Vikings Female | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     9.62 | D7, juliano, kyossa, vicu, wieenN  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
