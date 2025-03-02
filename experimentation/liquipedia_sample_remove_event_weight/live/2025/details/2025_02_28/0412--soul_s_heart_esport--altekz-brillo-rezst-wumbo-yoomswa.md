### Roster Details<br />
Team Name: Soul's Heart Esport<br />
Roster: Altekz, Brillo, Rezst, Wumbo, yoomswa<br />
Global Rank: [412](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [260]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  619.9<br />
<br />
Final Rank Value (619.9) = Starting Rank Value (577.9) + Head To Head Adjustments (42.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.273[<sup>2</sup>](#table1)
- Opponent Network: 0.084[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.089<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 577.9
- 400 + ( ( 0.089 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 577.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |     2247 | 2024-12-01 | FLuffy Gangsters  | L   | 0.606      | -            | -                | -                | -         |    -1.96 | Altekz, Brillo, Rezst, Wumbo, yoomswa |
|           12 |     2523 | 2024-11-26 | Nuclear TigeRES   | L   | 0.573      | -            | -                | -                | -         |    -2.91 | Altekz, Brillo, Rezst, Wumbo, yoomswa |
|           11 |     2815 | 2024-11-21 | PCIFIC Espor      | W   | 0.540      | 1.000        | 0.005 (0.003)    | 0.275 (0.148)    | 0 (0.000) |    13.27 | Altekz, Brillo, Rezst, Wumbo, yoomswa |
|           10 |     2897 | 2024-11-20 | FORZE Reload      | L   | 0.533      | -            | -                | -                | -         |    -1.77 | Altekz, Brillo, Rezst, Wumbo, yoomswa |
|            9 |     2954 | 2024-11-19 | Daystar           | W   | 0.527      | 1.000        | 0.000 (0.000)    | 0.147 (0.077)    | 0 (0.000) |     9.93 | Altekz, Brillo, Rezst, Wumbo, yoomswa |
|            8 |     2998 | 2024-11-18 | Underrated        | W   | 0.520      | 1.000        | 0.002 (0.001)    | 0.193 (0.100)    | 0 (0.000) |    10.62 | Altekz, Brillo, Rezst, Wumbo, yoomswa |
|            7 |     3650 | 2024-11-06 | GODSENT           | L   | 0.440      | -            | -                | -                | -         |    -4.23 | Altekz, Brillo, Rezst, Wumbo, yoomswa |
|            6 |     3762 | 2024-11-04 | HOTU              | W   | 0.427      | 1.000        | 0.004 (0.002)    | 0.637 (0.272)    | 0 (0.000) |    10.98 | Altekz, Brillo, Rezst, Wumbo, yoomswa |
|            5 |     3841 | 2024-11-03 | Los kogutos       | W   | 0.418      | 1.000        | 0.038 (0.016)    | 0.572 (0.239)    | 0 (0.000) |    12.29 | Altekz, Brillo, Rezst, Wumbo, yoomswa |
|            4 |     5824 | 2024-09-28 | AgenciUSB         | L   | 0.179      | -            | -                | -                | -         |    -3.35 | Brillo, Ed1m, Rezst, Wumbo, yoomswa   |
|            3 |     7238 | 2024-09-07 | 500 Rush          | L   | 0.038      | -            | -                | -                | -         |    -0.41 | Brillo, Ed1m, Rezst, Wumbo, yoomswa   |
|            2 |     7264 | 2024-09-07 | EMERITOS BANDITOS | W   | 0.037      | 1.000        | 0.000 (0.000)    | 0.004 (0.000)    | 0 (0.000) |     0.46 | Brillo, Ed1m, Rezst, Wumbo, yoomswa   |
|            1 |     7272 | 2024-09-07 | AgenciUSB         | L   | 0.037      | -            | -                | -                | -         |    -0.84 | Brillo, Ed1m, Rezst, Wumbo, yoomswa   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
