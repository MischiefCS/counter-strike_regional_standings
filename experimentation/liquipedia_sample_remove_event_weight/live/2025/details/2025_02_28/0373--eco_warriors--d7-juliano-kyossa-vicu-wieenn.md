### Roster Details<br />
Team Name: Eco Warriors<br />
Roster: D7, juliano, kyossa, vicu, wieenN<br />
Global Rank: [373](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [239]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  647.5<br />
<br />
Final Rank Value (647.5) = Starting Rank Value (584.9) + Head To Head Adjustments (62.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.319[<sup>2</sup>](#table1)
- Opponent Network: 0.051[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.093<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 584.9
- 400 + ( ( 0.093 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 584.9


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
|            6 |       18 | 2025-02-27 | AKA HERO KAJO     | W   | 1.000      | 1.000        | 0.005 (0.005)    | 0.219 (0.219)    | 0 (0.000) |    21.16 | D7, juliano, kyossa, vicu, wieenN  |
|            5 |      754 | 2025-02-05 | SAW               | L   | 1.000      | -            | -                | -                | -         |    -0.46 | Angelka, D7, juliano, kyossa, vicu |
|            4 |      761 | 2025-02-05 | 500               | L   | 1.000      | -            | -                | -                | -         |    -1.00 | Angelka, D7, juliano, kyossa, vicu |
|            3 |      812 | 2025-02-01 | Prototype Blaze   | W   | 1.000      | 1.000        | 0.069 (0.069)    | 0.245 (0.245)    | 0 (0.000) |    26.69 | D7, juliano, kyossa, vicu, wieenN  |
|            2 |      818 | 2025-02-01 | Forfunny          | W   | 1.000      | 1.000        | 0.000 (0.000)    | 0.050 (0.050)    | 0 (0.000) |     8.21 | D7, juliano, kyossa, vicu, wieenN  |
|            1 |      833 | 2025-01-31 | 95 Vikings Female | W   | 1.000      | 1.000        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     7.98 | D7, juliano, kyossa, vicu, wieenN  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
