### Roster Details<br />
Team Name: Shanghai Sharks<br />
Roster: Cud, harbor, KRAXYT, mag1c, w0mbat<br />
Global Rank: [522](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [80]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  479.4<br />
<br />
Final Rank Value (479.4) = Starting Rank Value (487.8) + Head To Head Adjustments (-8.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.174[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.045<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 487.8
- 400 + ( ( 0.045 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 487.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1533 | 2024-12-10 | TALON                            | L   | 0.657      | -            | -                | -                | -         |    -8.07 | Cud, harbor, KRAXYT, mag1c, w0mbat |
|            4 |     1739 | 2024-12-06 | Underground Esports Club         | L   | 0.631      | -            | -                | -                | -         |    -8.68 | Cud, harbor, KRAXYT, mag1c, w0mbat |
|            3 |     1771 | 2024-12-05 | Fazen Klan                       | W   | 0.624      | 0.270        | 0.000 (0.000)    | 0.063 (0.011)    | 0 (0.000) |     7.81 | Cud, harbor, KRAXYT, mag1c, w0mbat |
|            2 |     1951 | 2024-12-02 | Above The Rest (Australian team) | L   | 0.604      | -            | -                | -                | -         |    -9.71 | Cud, harbor, KRAXYT, mag1c, w0mbat |
|            1 |     2034 | 2024-12-01 | Underground Esports Club         | W   | 0.598      | 0.270        | 0.001 (0.000)    | 0.169 (0.027)    | 0 (0.000) |    10.28 | Cud, harbor, KRAXYT, mag1c, w0mbat |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
