### Roster Details<br />
Team Name: Immigrants Peek<br />
Roster: bezymecc, H0NeST, myline, nico1ajus, Termina<br />
Global Rank: [149](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [98]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  653.3<br />
<br />
Final Rank Value (653.3) = Starting Rank Value (641.1) + Head To Head Adjustments (12.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.258[<sup>1</sup>](#table2)
- Bounty Collected: 0.200[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.117<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 641.1
- 400 + ( ( 0.117 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 641.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      286 | 2025-02-13 | BOSS            | L   | 0.846      | -            | -                | -                | -         |    -8.20 | bezymecc, H0NeST, myline, nico1ajus, Termina   |
|            6 |      352 | 2025-02-10 | Vagrants        | W   | 0.826      | 0.143        | 0.000 (0.000)    | 0.132 (0.016)    | 0 (0.000) |    12.37 | bezymecc, H0NeST, myline, nico1ajus, Termina   |
|            5 |      356 | 2025-02-10 | Alter Iron Club | W   | 0.826      | 0.143        | 0.008 (0.001)    | 0.292 (0.034)    | 0 (0.000) |    14.64 | bezymecc, H0NeST, myline, nico1ajus, Termina   |
|            4 |      386 | 2025-02-09 | Mythic          | W   | 0.820      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.41 | bezymecc, H0NeST, myline, nico1ajus, Termina   |
|            3 |      441 | 2025-02-08 | Vagrants        | L   | 0.812      | -            | -                | -                | -         |   -13.19 | bezymecc, H0NeST, myline, nico1ajus, Termina   |
|            2 |     1064 | 2024-12-04 | Alter Iron Club | L   | 0.374      | -            | -                | -                | -         |    -5.29 | bezymecc, H0NeST, nico1ajus, Termina, Valter0k |
|            1 |     1083 | 2024-12-03 | MIGHT           | W   | 0.367      | 0.372        | 0.000 (0.000)    | 0.269 (0.037)    | 0 (0.000) |     6.48 | bezymecc, H0NeST, nico1ajus, Termina, Valter0k |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($300.52)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-08 |      0.401 | $750.00        | $300.52         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
