### Roster Details<br />
Team Name: Not Mythic<br />
Roster: Austin, dAVE, Loagurt, Trucklover86, zeep<br />
Global Rank: [553](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_02_28.md)<br />
Regional Rank: [126]( ../../standings_americas_2025_02_28.md)<br />
<br />
Final Rank Value:  480.3<br />
<br />
Final Rank Value (480.3) = Starting Rank Value (489.6) + Head To Head Adjustments (-9.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.173[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.045<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 489.6
- 400 + ( ( 0.045 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 489.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1928 | 2024-12-07 | MIGHT              | L   | 0.646      | -            | -                | -                | -         |    -3.24 | Austin, dAVE, Loagurt, Trucklover86, zeep    |
|            5 |     1972 | 2024-12-06 | Bad News Capybaras | L   | 0.641      | -            | -                | -                | -         |    -4.55 | Austin, dAVE, Loagurt, Trucklover86, zeep    |
|            4 |     4956 | 2024-10-12 | After Hours        | L   | 0.274      | -            | -                | -                | -         |    -5.36 | Austin, dAVE, Loagurt, WetWillie, zeep       |
|            3 |     4961 | 2024-10-12 | Bad News Capybaras | W   | 0.273      | 1.000        | 0.001 (0.000)    | 0.224 (0.061)    | 0 (0.000) |     6.83 | Austin, dAVE, Loagurt, WetWillie, zeep       |
|            2 |     5960 | 2024-09-26 | Team Aether        | L   | 0.167      | -            | -                | -                | -         |    -2.34 | dAVE, Loagurt, traekS, WetWillie, zeep       |
|            1 |     6405 | 2024-09-20 | MIGHT              | L   | 0.128      | -            | -                | -                | -         |    -0.56 | Austin, injury, Trucklover86, tylert69, zeep |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
