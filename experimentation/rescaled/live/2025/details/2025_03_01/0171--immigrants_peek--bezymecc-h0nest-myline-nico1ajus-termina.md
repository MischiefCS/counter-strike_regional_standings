### Roster Details<br />
Team Name: Immigrants Peek<br />
Roster: bezymecc, H0NeST, myline, nico1ajus, Termina<br />
Global Rank: [171](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [115]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  674.0<br />
<br />
Final Rank Value (674.0) = Starting Rank Value (651.2) + Head To Head Adjustments (22.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.260[<sup>1</sup>](#table2)
- Bounty Collected: 0.233[<sup>2</sup>](#table1)
- Opponent Network: 0.034[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.132<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 651.2
- 400 + ( ( 0.132 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 651.2


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
|            7 |      286 | 2025-02-13 | BOSS            | L   | 1.000      | -            | -                | -                | -         |    -6.65 | bezymecc, H0NeST, myline, nico1ajus, Termina   |
|            6 |      352 | 2025-02-10 | Vagrants        | W   | 1.000      | 0.485        | 0.001 (0.001)    | 0.174 (0.085)    | 0 (0.000) |    15.68 | bezymecc, H0NeST, myline, nico1ajus, Termina   |
|            5 |      356 | 2025-02-10 | Alter Iron Club | W   | 1.000      | 0.485        | 0.008 (0.004)    | 0.331 (0.161)    | 0 (0.000) |    17.36 | bezymecc, H0NeST, myline, nico1ajus, Termina   |
|            4 |      386 | 2025-02-09 | Mythic          | W   | 1.000      | 0.485        | 0.000 (0.000)    | 0.029 (0.014)    | 0 (0.000) |     8.90 | bezymecc, H0NeST, myline, nico1ajus, Termina   |
|            3 |      441 | 2025-02-08 | Vagrants        | L   | 1.000      | -            | -                | -                | -         |   -15.11 | bezymecc, H0NeST, myline, nico1ajus, Termina   |
|            2 |     1064 | 2024-12-04 | Alter Iron Club | L   | 0.622      | -            | -                | -                | -         |    -9.29 | bezymecc, H0NeST, nico1ajus, Termina, Valter0k |
|            1 |     1083 | 2024-12-03 | MIGHT           | W   | 0.616      | 0.472        | 0.002 (0.000)    | 0.289 (0.084)    | 0 (0.000) |    11.94 | bezymecc, H0NeST, nico1ajus, Termina, Valter0k |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($486.77)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-08 |      0.649 | $750.00        | $486.77         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
