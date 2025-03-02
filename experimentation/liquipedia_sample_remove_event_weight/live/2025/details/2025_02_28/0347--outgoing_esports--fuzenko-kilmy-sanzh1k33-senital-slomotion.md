### Roster Details<br />
Team Name: OutGoing eSports<br />
Roster: Fuzenko, kilmy, Sanzh1k33, senital, slomotion<br />
Global Rank: [347](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [224]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  662.8<br />
<br />
Final Rank Value (662.8) = Starting Rank Value (666.0) + Head To Head Adjustments (-3.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.266[<sup>1</sup>](#table2)
- Bounty Collected: 0.238[<sup>2</sup>](#table1)
- Opponent Network: 0.030[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.133<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 666.0
- 400 + ( ( 0.133 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 666.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1620 | 2024-12-13 | Undone          | L   | 0.688      | -            | -                | -                | -         |    -5.17 | Fuzenko, kilmy, Sanzh1k33, senital, slomotion |
|            4 |     2028 | 2024-12-04 | Bad Boys        | L   | 0.629      | -            | -                | -                | -         |    -9.81 | Fuzenko, kilmy, malfik, senital, slomotion    |
|            3 |     2075 | 2024-12-03 | Final Form      | W   | 0.622      | 1.000        | 0.000 (0.000)    | 0.061 (0.038)    | 0 (0.000) |     3.69 | Fuzenko, kilmy, malfik, senital, slomotion    |
|            2 |     2209 | 2024-12-01 | Undone          | L   | 0.609      | -            | -                | -                | -         |    -4.83 | Fuzenko, kilmy, malfik, senital, slomotion    |
|            1 |     2377 | 2024-11-29 | SUPER EVIL GANG | W   | 0.595      | 1.000        | 0.011 (0.006)    | 0.432 (0.257)    | 0 (0.000) |    12.91 | Fuzenko, kilmy, malfik, senital, slomotion    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($491.44)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-08 |      0.655 | $750.00        | $491.44         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
