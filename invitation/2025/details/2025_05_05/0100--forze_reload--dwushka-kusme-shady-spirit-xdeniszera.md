### Roster Details<br />
Team Name: FORZE Reload<br />
Roster: dwushka, KusMe, shady, spirit, xdENiSZERA<br />
Global Rank: [100](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [70]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  708.8<br />
<br />
Final Rank Value (708.8) = Starting Rank Value (708.4) + Head To Head Adjustments (0.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.355[<sup>1</sup>](#table2)
- Bounty Collected: 0.209[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.142<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 708.4
- 400 + ( ( 0.142 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 708.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent              | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      793 | 2024-12-20 | AMKAL ESPORTS         | L   | 0.290      | -            | -                | -                | -         |    -4.35 | dwushka, KusMe, shady, spirit, xdENiSZERA |
|            5 |      804 | 2024-12-19 | K27                   | W   | 0.284      | 0.333        | 0.007 (0.001)    | 0.156 (0.015)    | 0 (0.000) |     4.98 | dwushka, KusMe, shady, spirit, xdENiSZERA |
|            4 |      847 | 2024-12-15 | RUSH B (Russian team) | L   | 0.258      | -            | -                | -                | -         |    -3.03 | dwushka, KusMe, shady, spirit, xdENiSZERA |
|            3 |     1069 | 2024-12-04 | Monte                 | L   | 0.185      | -            | -                | -                | -         |    -2.28 | dwushka, KusMe, shady, spirit, xdENiSZERA |
|            2 |     1093 | 2024-12-03 | Viperio               | W   | 0.177      | 0.333        | 0.002 (0.000)    | 0.019 (0.001)    | 0 (0.000) |     2.15 | dwushka, KusMe, shady, spirit, xdENiSZERA |
|            1 |     1118 | 2024-12-02 | BC.Game Esports       | W   | 0.170      | 0.333        | 0.017 (0.001)    | 0.124 (0.007)    | 0 (0.000) |     2.92 | dwushka, KusMe, shady, spirit, xdENiSZERA |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,849.57)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-21 |      0.297 | $1,000.00      | $297.08         |
| 2024-12-15 |      0.258 | $3,873.73      | $998.74         |
| 2024-12-04 |      0.185 | $3,000.00      | $553.75         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
