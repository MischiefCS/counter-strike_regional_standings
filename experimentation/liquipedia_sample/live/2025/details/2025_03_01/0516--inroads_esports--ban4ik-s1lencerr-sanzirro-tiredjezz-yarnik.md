### Roster Details<br />
Team Name: Inroads Esports<br />
Roster: Ban4ik, s1leNceRr, SanZirro, tiredjezz, YarNik<br />
Global Rank: [516](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [323]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  482.4<br />
<br />
Final Rank Value (482.4) = Starting Rank Value (483.0) + Head To Head Adjustments (-0.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.168[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.042<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 483.0
- 400 + ( ( 0.042 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 483.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     5509 | 2024-09-28 | 777 Esports         | L   | 0.172      | -            | -                | -                | -         |    -1.61 | Ban4ik, s1leNceRr, SanZirro, tiredjezz, YarNik |
|            4 |     6435 | 2024-09-14 | FLuffy Gangsters    | L   | 0.079      | -            | -                | -                | -         |    -0.37 | Ban4ik, GENA_C1D, h1roku, SanZirro, YarNik     |
|            3 |     6443 | 2024-09-14 | Dragon Esports Club | W   | 0.078      | 0.215        | 0.007 (0.000)    | 0.343 (0.006)    | 0 (0.000) |     1.90 | Ban4ik, GENA_C1D, h1roku, SanZirro, YarNik     |
|            2 |     6814 | 2024-09-07 | Dragon Esports Club | L   | 0.033      | -            | -                | -                | -         |    -0.42 | Ban4ik, GENA_C1D, Nekiy, SanZirro, YarNik      |
|            1 |     7116 | 2024-09-03 | Madagaskar          | L   | 0.007      | -            | -                | -                | -         |    -0.11 | Ban4ik, GENA_C1D, Nekiy, SanZirro, YarNik      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
