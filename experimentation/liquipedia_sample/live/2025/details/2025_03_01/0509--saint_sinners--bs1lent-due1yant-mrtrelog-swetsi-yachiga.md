### Roster Details<br />
Team Name: Saint Sinners<br />
Roster: BS1lent, Due1yant, MrTrelog, swetsi, Yachiga<br />
Global Rank: [509](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [318]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  487.5<br />
<br />
Final Rank Value (487.5) = Starting Rank Value (479.0) + Head To Head Adjustments (8.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.157[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.040<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 479.0
- 400 + ( ( 0.040 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 479.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     1909 | 2024-12-02 | Ex-ESC Gaming     | L   | 0.607      | -            | -                | -                | -         |    -4.82 | BS1lent, Due1yant, MrTrelog, swetsi, Yachiga  |
|           11 |     2008 | 2024-12-01 | VP.Prodigy        | W   | 0.600      | 0.333        | 0.000 (0.000)    | 0.132 (0.026)    | 0 (0.000) |    11.55 | BS1lent, Due1yant, MrTrelog, swetsi, Yachiga  |
|           10 |     2247 | 2024-11-27 | Fragmatic         | L   | 0.573      | -            | -                | -                | -         |    -7.08 | BS1lent, Due1yant, MrTrelog, swetsi, Yachiga  |
|            9 |     4732 | 2024-10-12 | NO BYSTANDERS     | W   | 0.265      | 0.143        | 0.000 (0.000)    | 0.020 (0.001)    | 0 (0.000) |     4.30 | BS1lent, Due1yant, MrTrelog, swetsi, Yachiga  |
|            8 |     4743 | 2024-10-12 | XGOD ARENA        | W   | 0.264      | 0.143        | 0.000 (0.000)    | 0.043 (0.002)    | 0 (0.000) |     5.42 | BS1lent, Due1yant, MrTrelog, swetsi, Yachiga  |
|            7 |     5354 | 2024-09-30 | GameAgents        | L   | 0.187      | -            | -                | -                | -         |    -1.99 | BS1lent, Due1yant, MrTrelog, swetsi, Yachiga  |
|            6 |     6487 | 2024-09-13 | Team OWL          | L   | 0.073      | -            | -                | -                | -         |    -1.17 | em0em044ka, MrTrelog, Sa1nTy, swetsi, Yachiga |
|            5 |     6591 | 2024-09-11 | Donstu Esports    | W   | 0.060      | 0.333        | 0.000 (0.000)    | 0.174 (0.003)    | 0 (0.000) |     0.98 | em0em044ka, MrTrelog, Sa1nTy, swetsi, Yachiga |
|            4 |     6695 | 2024-09-09 | TOOMUCHVIDEOGAMES | W   | 0.047      | 0.333        | 0.000 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     0.72 | em0em044ka, MrTrelog, Sa1nTy, swetsi, Yachiga |
|            3 |     6811 | 2024-09-07 | Smuuttikusilkki   | W   | 0.033      | 0.333        | 0.000 (0.000)    | 0.052 (0.001)    | 0 (0.000) |     0.52 | em0em044ka, MrTrelog, Sa1nTy, swetsi, Yachiga |
|            2 |     6970 | 2024-09-05 | XPERION NXT       | L   | 0.020      | -            | -                | -                | -         |    -0.18 | em0em044ka, MrTrelog, Sa1nTy, swetsi, Yachiga |
|            1 |     7052 | 2024-09-04 | Sampi NEXT        | W   | 0.013      | 0.333        | 0.000 (0.000)    | 0.022 (0.000)    | 0 (0.000) |     0.22 | em0em044ka, MrTrelog, Sa1nTy, swetsi, Yachiga |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
