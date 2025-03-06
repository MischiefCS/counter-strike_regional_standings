### Roster Details<br />
Team Name: ARCRED<br />
Roster: 1NVISIBLEE, DSSj, Get_Jeka, Ryujin, shg<br />
Global Rank: [111](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [78]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  711.7<br />
<br />
Final Rank Value (711.7) = Starting Rank Value (691.8) + Head To Head Adjustments (19.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.330[<sup>1</sup>](#table2)
- Bounty Collected: 0.217[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.141<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 691.8
- 400 + ( ( 0.141 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 691.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |       77 | 2025-02-23 | Roler Coaster                             | L   | 0.913      | -            | -                | -                | -         |   -19.22 | 1NVISIBLEE, DSSj, Get_Jeka, Ryujin, shg |
|            9 |       79 | 2025-02-23 | Preasy Esport                             | W   | 0.912      | 0.143        | 0.006 (0.001)    | 0.209 (0.027)    | 0 (0.000) |    12.23 | 1NVISIBLEE, DSSj, Get_Jeka, Ryujin, shg |
|            8 |       86 | 2025-02-23 | Copenhagen Wolves (American organization) | W   | 0.911      | 0.143        | 0.007 (0.001)    | 0.661 (0.086)    | 0 (0.000) |    17.69 | 1NVISIBLEE, DSSj, Get_Jeka, Ryujin, shg |
|            7 |       88 | 2025-02-23 | Insilio                                   | W   | 0.911      | 0.143        | 0.000 (0.000)    | 0.338 (0.044)    | 0 (0.000) |    11.12 | 1NVISIBLEE, DSSj, Get_Jeka, Ryujin, shg |
|            6 |     1676 | 2024-11-04 | 9INE                                      | L   | 0.170      | -            | -                | -                | -         |    -3.94 | 1NVISIBLEE, DSSj, Get_Jeka, synyx, Vert |
|            5 |     1682 | 2024-11-03 | RUSH B (Russian team)                     | W   | 0.165      | 0.143        | 0.024 (0.001)    | 0.615 (0.015)    | 0 (0.000) |     3.50 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx  |
|            4 |     1695 | 2024-11-03 | SINNERS Esports                           | L   | 0.163      | -            | -                | -                | -         |    -1.69 | 1NVISIBLEE, DSSj, Get_Jeka, synyx, Vert |
|            3 |     1711 | 2024-11-02 | FLuffy Gangsters                          | W   | 0.158      | 0.143        | 0.004 (0.000)    | 0.316 (0.007)    | 0 (0.000) |     2.45 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx  |
|            2 |     1738 | 2024-11-01 | NewBALLS                                  | L   | 0.150      | -            | -                | -                | -         |    -3.52 | 1NVISIBLEE, DSSj, Get_Jeka, synyx, Vert |
|            1 |     1752 | 2024-10-31 | LEON Esports                              | W   | 0.143      | 0.143        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.30 | 1NVISIBLEE, DSSj, Get_Jeka, shg, synyx  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,107.33)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      0.165 | $12,771.71     | $2,107.33       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
