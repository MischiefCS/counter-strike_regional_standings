### Roster Details<br />
Team Name: Viperio<br />
Roster: dezt, shyyne, Skrimo, swicher, zodi<br />
Global Rank: [168](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [105]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  609.1<br />
<br />
Final Rank Value (609.1) = Starting Rank Value (634.1) + Head To Head Adjustments (-25.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.264[<sup>1</sup>](#table2)
- Bounty Collected: 0.187[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.113<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 634.1
- 400 + ( ( 0.113 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 634.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |      805 | 2024-12-19 | Astralis Talent                           | L   | 0.470      | -            | -                | -                | -         |    -5.98 | dezt, shyyne, Skrimo, swicher, zodi  |
|           12 |      817 | 2024-12-18 | WOPA Esport                               | L   | 0.463      | -            | -                | -                | -         |    -4.64 | dezt, shyyne, Skrimo, swicher, zodi  |
|           11 |     1093 | 2024-12-03 | FORZE Reload                              | L   | 0.364      | -            | -                | -                | -         |    -4.40 | dezt, shyyne, Skrimo, swicher, zodi  |
|           10 |     1114 | 2024-12-02 | Illuminar Gaming                          | W   | 0.357      | 0.333        | 0.004 (0.000)    | 0.161 (0.019)    | 0 (0.000) |     6.97 | dezt, shyyne, Skrimo, swicher, zodi  |
|            9 |     1128 | 2024-12-01 | ALTERNATE aTTaX                           | L   | 0.352      | -            | -                | -                | -         |    -2.64 | dezt, shyyne, Skrimo, swicher, zodi  |
|            8 |     1217 | 2024-11-27 | BC.Game Esports                           | L   | 0.324      | -            | -                | -                | -         |    -3.36 | dezt, shyyne, Skrimo, swicher, zodi  |
|            7 |     1266 | 2024-11-24 | Tricked Esport                            | L   | 0.302      | -            | -                | -                | -         |    -2.81 | dezt, Silence, Skrimo, swicher, zodi |
|            6 |     1313 | 2024-11-22 | Chimera Esports                           | L   | 0.290      | -            | -                | -                | -         |    -2.65 | dezt, Silence, Skrimo, swicher, zodi |
|            5 |     1528 | 2024-11-13 | GenOne                                    | L   | 0.229      | -            | -                | -                | -         |    -2.54 | dezt, Silence, Skrimo, swicher, zodi |
|            4 |     1547 | 2024-11-12 | Leo Team                                  | L   | 0.223      | -            | -                | -                | -         |    -2.52 | dezt, Silence, Skrimo, swicher, zodi |
|            3 |     1838 | 2024-10-21 | Copenhagen Wolves (American organization) | L   | 0.076      | -            | -                | -                | -         |    -0.79 | dezt, shyyne, Skrimo, swicher, zodi  |
|            2 |     1867 | 2024-10-19 | ADEPTS                                    | W   | 0.063      | 0.333        | 0.000 (0.000)    | 0.038 (0.001)    | 0 (0.000) |     0.65 | dezt, shyyne, Skrimo, swicher, zodi  |
|            1 |     1892 | 2024-10-18 | Natus Vincere Junior                      | L   | 0.056      | -            | -                | -                | -         |    -0.32 | dezt, shyyne, Skrimo, swicher, zodi  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($371.25)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-04 |      0.371 | $1,000.00      | $371.25         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
