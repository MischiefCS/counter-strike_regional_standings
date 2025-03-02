### Roster Details<br />
Team Name: Saint Sinners<br />
Roster: BS1lent, Due1yant, MrTrelog, swetsi, Yachiga<br />
Global Rank: [524](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [326]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  493.3<br />
<br />
Final Rank Value (493.3) = Starting Rank Value (484.1) + Head To Head Adjustments (9.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.159[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.041<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 484.1
- 400 + ( ( 0.041 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 484.1


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
|           12 |     2149 | 2024-12-02 | Ex-ESC Gaming     | L   | 0.613      | -            | -                | -                | -         |    -4.91 | BS1lent, Due1yant, MrTrelog, swetsi, Yachiga  |
|           11 |     2244 | 2024-12-01 | VP.Prodigy        | W   | 0.606      | 0.333        | 0.000 (0.000)    | 0.130 (0.026)    | 0 (0.000) |    11.83 | BS1lent, Due1yant, MrTrelog, swetsi, Yachiga  |
|           10 |     2470 | 2024-11-27 | Fragmatic         | L   | 0.579      | -            | -                | -                | -         |    -7.07 | BS1lent, Due1yant, MrTrelog, swetsi, Yachiga  |
|            9 |     5015 | 2024-10-12 | NO BYSTANDERS     | W   | 0.271      | 0.143        | 0.000 (0.000)    | 0.020 (0.001)    | 0 (0.000) |     4.40 | BS1lent, Due1yant, MrTrelog, swetsi, Yachiga  |
|            8 |     5026 | 2024-10-12 | XGOD ARENA        | W   | 0.270      | 0.143        | 0.000 (0.000)    | 0.042 (0.002)    | 0 (0.000) |     5.62 | BS1lent, Due1yant, MrTrelog, swetsi, Yachiga  |
|            7 |     5680 | 2024-09-30 | GameAgents        | L   | 0.193      | -            | -                | -                | -         |    -1.98 | BS1lent, Due1yant, MrTrelog, swetsi, Yachiga  |
|            6 |     6854 | 2024-09-13 | Team OWL          | L   | 0.079      | -            | -                | -                | -         |    -1.27 | em0em044ka, MrTrelog, Sa1nTy, swetsi, Yachiga |
|            5 |     6962 | 2024-09-11 | Donstu Esports    | W   | 0.066      | 0.333        | 0.000 (0.000)    | 0.171 (0.004)    | 0 (0.000) |     1.09 | em0em044ka, MrTrelog, Sa1nTy, swetsi, Yachiga |
|            4 |     7071 | 2024-09-09 | TOOMUCHVIDEOGAMES | W   | 0.053      | 0.333        | 0.000 (0.000)    | 0.003 (0.000)    | 0 (0.000) |     0.81 | em0em044ka, MrTrelog, Sa1nTy, swetsi, Yachiga |
|            3 |     7185 | 2024-09-07 | Smuuttikusilkki   | W   | 0.039      | 0.333        | 0.000 (0.000)    | 0.101 (0.001)    | 0 (0.000) |     0.60 | em0em044ka, MrTrelog, Sa1nTy, swetsi, Yachiga |
|            2 |     7365 | 2024-09-05 | XPERION NXT       | L   | 0.026      | -            | -                | -                | -         |    -0.23 | em0em044ka, MrTrelog, Sa1nTy, swetsi, Yachiga |
|            1 |     7443 | 2024-09-04 | Sampi NEXT        | W   | 0.019      | 0.333        | 0.000 (0.000)    | 0.027 (0.000)    | 0 (0.000) |     0.32 | em0em044ka, MrTrelog, Sa1nTy, swetsi, Yachiga |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
