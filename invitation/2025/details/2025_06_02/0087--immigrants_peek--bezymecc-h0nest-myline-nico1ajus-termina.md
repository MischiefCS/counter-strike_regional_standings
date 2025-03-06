### Roster Details<br />
Team Name: Immigrants Peek<br />
Roster: bezymecc, H0NeST, myline, nico1ajus, Termina<br />
Global Rank: [87](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [60]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  620.6<br />
<br />
Final Rank Value (620.6) = Starting Rank Value (621.6) + Head To Head Adjustments (-1.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.216[<sup>1</sup>](#table2)
- Bounty Collected: 0.165[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.096<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 621.6
- 400 + ( ( 0.096 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 621.6


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
|            6 |      286 | 2025-02-13 | BOSS            | L   | 0.472      | -            | -                | -                | -         |    -7.26 | bezymecc, H0NeST, myline, nico1ajus, Termina   |
|            5 |      352 | 2025-02-10 | Vagrants        | W   | 0.453      | 0.143        | 0.000 (0.000)    | 0.161 (0.010)    | 0 (0.000) |     4.89 | bezymecc, H0NeST, myline, nico1ajus, Termina   |
|            4 |      356 | 2025-02-10 | Alter Iron Club | W   | 0.452      | 0.143        | 0.001 (0.000)    | 0.113 (0.007)    | 0 (0.000) |     7.29 | bezymecc, H0NeST, myline, nico1ajus, Termina   |
|            3 |      386 | 2025-02-09 | Mythic          | W   | 0.447      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.22 | bezymecc, H0NeST, myline, nico1ajus, Termina   |
|            2 |      441 | 2025-02-08 | Vagrants        | L   | 0.439      | -            | -                | -                | -         |    -9.16 | bezymecc, H0NeST, myline, nico1ajus, Termina   |
|            1 |     1064 | 2024-12-04 | Alter Iron Club | L   | 0.001      | -            | -                | -                | -         |    -0.01 | bezymecc, H0NeST, nico1ajus, Termina, Valter0k |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($20.52)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-08 |      0.027 | $750.00        | $20.52          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
