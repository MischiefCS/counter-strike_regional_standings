### Roster Details<br />
Team Name: Viperio<br />
Roster: dezt, Junyme, Skrimo, swicher, zodi<br />
Global Rank: [281](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [168]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  582.8<br />
<br />
Final Rank Value (582.8) = Starting Rank Value (634.5) + Head To Head Adjustments (-51.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.268[<sup>1</sup>](#table2)
- Bounty Collected: 0.206[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.120<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 634.5
- 400 + ( ( 0.120 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 634.5


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
|           16 |      844 | 2025-02-04 | 777 Esports                               | L   | 1.000      | -            | -                | -                | -         |   -15.27 | dezt, Junyme, Skrimo, swicher, zodi  |
|           15 |     1340 | 2024-12-19 | Astralis Talent                           | L   | 0.718      | -            | -                | -                | -         |    -8.88 | dezt, shyyne, Skrimo, swicher, zodi  |
|           14 |     1357 | 2024-12-18 | WOPA Esport                               | L   | 0.712      | -            | -                | -                | -         |    -5.95 | dezt, shyyne, Skrimo, swicher, zodi  |
|           13 |     1922 | 2024-12-03 | FORZE Reload                              | L   | 0.612      | -            | -                | -                | -         |    -6.66 | dezt, shyyne, Skrimo, swicher, zodi  |
|           12 |     1992 | 2024-12-02 | Illuminar Gaming                          | W   | 0.605      | 0.333        | 0.007 (0.001)    | 0.301 (0.061)    | 0 (0.000) |    13.51 | dezt, shyyne, Skrimo, swicher, zodi  |
|           11 |     2040 | 2024-12-01 | ALTERNATE aTTaX                           | L   | 0.600      | -            | -                | -                | -         |    -3.16 | dezt, shyyne, Skrimo, swicher, zodi  |
|           10 |     2249 | 2024-11-27 | BC.Game Esports                           | L   | 0.573      | -            | -                | -                | -         |    -4.86 | dezt, shyyne, Skrimo, swicher, zodi  |
|            9 |     2343 | 2024-11-24 | Tricked Esport                            | L   | 0.551      | -            | -                | -                | -         |    -4.23 | dezt, Silence, Skrimo, swicher, zodi |
|            8 |     2450 | 2024-11-22 | Chimera Esports                           | L   | 0.539      | -            | -                | -                | -         |    -3.58 | dezt, Silence, Skrimo, swicher, zodi |
|            7 |     2776 | 2024-11-13 | GenOne                                    | L   | 0.477      | -            | -                | -                | -         |    -4.65 | dezt, Silence, Skrimo, swicher, zodi |
|            6 |     2801 | 2024-11-12 | Leo Team                                  | L   | 0.472      | -            | -                | -                | -         |    -4.43 | dezt, Silence, Skrimo, swicher, zodi |
|            5 |     3453 | 2024-10-21 | Copenhagen Wolves (American organization) | L   | 0.324      | -            | -                | -                | -         |    -2.54 | dezt, shyyne, Skrimo, swicher, zodi  |
|            4 |     3482 | 2024-10-19 | ADEPTS                                    | W   | 0.311      | 0.333        | 0.000 (0.000)    | 0.043 (0.004)    | 0 (0.000) |     3.32 | dezt, shyyne, Skrimo, swicher, zodi  |
|            3 |     3507 | 2024-10-18 | Natus Vincere Junior                      | L   | 0.304      | -            | -                | -                | -         |    -1.36 | dezt, shyyne, Skrimo, swicher, zodi  |
|            2 |     3867 | 2024-10-03 | Natus Vincere Junior                      | L   | 0.204      | -            | -                | -                | -         |    -0.94 | dezt, shyyne, Skrimo, swicher, zodi  |
|            1 |     3914 | 2024-10-02 | UNiTY esports                             | L   | 0.198      | -            | -                | -                | -         |    -1.94 | dezt, shyyne, Skrimo, swicher, zodi  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($619.58)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-04 |      0.620 | $1,000.00      | $619.58         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
