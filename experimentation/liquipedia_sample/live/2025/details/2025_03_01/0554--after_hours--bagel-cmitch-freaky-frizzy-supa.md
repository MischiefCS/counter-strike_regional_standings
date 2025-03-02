### Roster Details<br />
Team Name: After Hours<br />
Roster: BAGEL, CMitch, Freaky, FRIZZY, supa<br />
Global Rank: [554](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [127]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  405.7<br />
<br />
Final Rank Value (405.7) = Starting Rank Value (400.0) + Head To Head Adjustments (5.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.0
- 400 + ( ( 0.000 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 400.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     4674 | 2024-10-12 | Final Form  | L   | 0.268      | -            | -                | -                | -         |    -2.06 | BAGEL, CMitch, Freaky, FRIZZY, supa        |
|            4 |     4677 | 2024-10-12 | Not Mythic  | W   | 0.268      | 0.262        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.13 | BAGEL, CMitch, Freaky, FRIZZY, supa        |
|            3 |     4679 | 2024-10-12 | LONG SEASON | W   | 0.268      | 0.262        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.18 | BAGEL, CMitch, Freaky, FRIZZY, supa        |
|            2 |     6785 | 2024-09-07 | Creeps      | L   | 0.035      | -            | -                | -                | -         |    -0.56 | CMitch, Freaky, FRIZZY, Icarus, LittleBEER |
|            1 |     7098 | 2024-09-03 | Homyno      | L   | 0.009      | -            | -                | -                | -         |    -0.04 | CMitch, Freaky, FRIZZY, Icarus, LittleBEER |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
