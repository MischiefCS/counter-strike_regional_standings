### Roster Details<br />
Team Name: PH SunShine<br />
Roster: ARSPOWER, dan4o, kataomi, m1roy, mukhenzo<br />
Global Rank: [458](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [285]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  581.4<br />
<br />
Final Rank Value (581.4) = Starting Rank Value (579.1) + Head To Head Adjustments (2.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.187[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.164[<sup>2</sup>](#table1)

The average of these factors is 0.090<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 579.1
- 400 + ( ( 0.090 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 579.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1874 | 2024-12-08 | Dmoai        | L   | 0.652      | -            | -                | -                | -         |   -11.90 | ARSPOWER, dan4o, kataomi, m1roy, mukhenzo |
|            4 |     1883 | 2024-12-08 | WAKANDA      | W   | 0.651      | 1.000        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.651) |     4.89 | ARSPOWER, dan4o, kataomi, m1roy, mukhenzo |
|            3 |     1887 | 2024-12-08 | 69peek       | L   | 0.650      | -            | -                | -                | -         |    -4.82 | ARSPOWER, dan4o, kataomi, m1roy, mukhenzo |
|            2 |     1893 | 2024-12-07 | AimAssassins | L   | 0.650      | -            | -                | -                | -         |    -1.69 | ARSPOWER, dan4o, kataomi, m1roy, mukhenzo |
|            1 |     1898 | 2024-12-07 | 69peek       | W   | 0.650      | 1.000        | 0.001 (0.000)    | 0.130 (0.084)    | 1 (0.650) |    15.87 | ARSPOWER, dan4o, kataomi, m1roy, mukhenzo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
