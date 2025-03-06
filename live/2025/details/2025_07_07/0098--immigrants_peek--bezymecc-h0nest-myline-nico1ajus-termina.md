### Roster Details<br />
Team Name: Immigrants Peek<br />
Roster: bezymecc, H0NeST, myline, nico1ajus, Termina<br />
Global Rank: [98](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [59]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  403.6<br />
<br />
Final Rank Value (403.6) = Starting Rank Value (400.5) + Head To Head Adjustments (3.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.5
- 400 + ( ( 0.000 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 400.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      286 | 2025-02-13 | BOSS            | L   | 0.239      | -            | -                | -                | -         |    -3.86 | bezymecc, H0NeST, myline, nico1ajus, Termina |
|            4 |      352 | 2025-02-10 | Vagrants        | W   | 0.220      | 0.143        | 0.000 (0.000)    | 0.164 (0.005)    | 0 (0.000) |     3.45 | bezymecc, H0NeST, myline, nico1ajus, Termina |
|            3 |      356 | 2025-02-10 | Alter Iron Club | W   | 0.219      | 0.143        | 0.000 (0.000)    | 0.081 (0.003)    | 0 (0.000) |     3.43 | bezymecc, H0NeST, myline, nico1ajus, Termina |
|            2 |      386 | 2025-02-09 | Mythic          | W   | 0.214      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.35 | bezymecc, H0NeST, myline, nico1ajus, Termina |
|            1 |      441 | 2025-02-08 | Vagrants        | L   | 0.205      | -            | -                | -                | -         |    -3.23 | bezymecc, H0NeST, myline, nico1ajus, Termina |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
