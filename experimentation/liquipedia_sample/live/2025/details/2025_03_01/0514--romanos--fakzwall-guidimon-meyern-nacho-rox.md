### Roster Details<br />
Team Name: Romanos<br />
Roster: fakzwall, guidimon, meyern, nacho, rox<br />
Global Rank: [514](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [117]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  483.9<br />
<br />
Final Rank Value (483.9) = Starting Rank Value (480.5) + Head To Head Adjustments (3.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.162[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.041<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 480.5
- 400 + ( ( 0.041 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 480.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     5186 | 2024-10-03 | Bad News Chickens | L   | 0.207      | -            | -                | -                | -         |    -1.62 | fakzwall, guidimon, meyern, nacho, rox |
|            6 |     5294 | 2024-10-01 | 20/70             | W   | 0.194      | 0.268        | 0.001 (0.000)    | 0.309 (0.016)    | 0 (0.000) |     4.39 | fakzwall, guidimon, meyern, nacho, rox |
|            5 |     5457 | 2024-09-28 | Dusty Roots       | L   | 0.174      | -            | -                | -                | -         |    -0.84 | fakzwall, guidimon, meyern, nacho, rox |
|            4 |     5469 | 2024-09-28 | POR LA VENTANA    | W   | 0.173      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.12 | fakzwall, guidimon, meyern, nacho, rox |
|            3 |     5797 | 2024-09-24 | Yawara E-Sports   | L   | 0.147      | -            | -                | -                | -         |    -1.12 | fakzwall, guidimon, meyern, nacho, rox |
|            2 |     5937 | 2024-09-22 | LaChampionsLiga   | L   | 0.134      | -            | -                | -                | -         |    -1.18 | bichop, fakzwall, guidimon, nacho, rox |
|            1 |     5989 | 2024-09-21 | POR LA VENTANA    | W   | 0.128      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.56 | bichop, fakzwall, guidimon, nacho, rox |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
