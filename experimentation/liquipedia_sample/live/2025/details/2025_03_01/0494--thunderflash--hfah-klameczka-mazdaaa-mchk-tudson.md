### Roster Details<br />
Team Name: ThunderFlash<br />
Roster: hfah, Klameczka, mazdaaa, mchk, tudsoN<br />
Global Rank: [494](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [309]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  500.2<br />
<br />
Final Rank Value (500.2) = Starting Rank Value (491.4) + Head To Head Adjustments (8.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.184[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.046<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 491.4
- 400 + ( ( 0.046 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 491.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent              | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     4079 | 2024-10-25 | Ex-ENTERPRISE esports | L   | 0.355      | -            | -                | -                | -         |    -2.25 | hfah, Klameczka, mazdaaa, mchk, tudsoN |
|            5 |     4082 | 2024-10-25 | Illuminar Gaming      | L   | 0.355      | -            | -                | -                | -         |    -1.26 | hfah, Klameczka, mazdaaa, mchk, tudsoN |
|            4 |     4573 | 2024-10-15 | GameAgents            | W   | 0.286      | 0.143        | 0.005 (0.000)    | 0.182 (0.007)    | 0 (0.000) |     7.05 | AdrieN, hfah, Klameczka, mchk, tudsoN  |
|            3 |     4698 | 2024-10-12 | AgenciUSB             | L   | 0.266      | -            | -                | -                | -         |    -3.95 | AdrieN, hfah, Klameczka, mchk, tudsoN  |
|            2 |     4722 | 2024-10-12 | GameAgents            | W   | 0.265      | 0.143        | 0.005 (0.000)    | 0.182 (0.007)    | 0 (0.000) |     6.67 | AdrieN, hfah, Klameczka, mchk, tudsoN  |
|            1 |     5043 | 2024-10-05 | Wolves eSports        | W   | 0.220      | 0.143        | 0.000 (0.000)    | 0.042 (0.001)    | 0 (0.000) |     2.60 | AdrieN, hfah, Klameczka, mchk, tudsoN  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
