### Roster Details<br />
Team Name: Team Solid<br />
Roster: destiny, drg, gbb, nython, tomate<br />
Global Rank: [45](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_07_07.md)<br />
Regional Rank: [14]( ../../standings_americas_2025_07_07.md)<br />
<br />
Final Rank Value:  705.0<br />
<br />
Final Rank Value (705.0) = Starting Rank Value (703.2) + Head To Head Adjustments (1.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.310[<sup>1</sup>](#table2)
- Bounty Collected: 0.175[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.123<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 703.2
- 400 + ( ( 0.123 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 703.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      121 | 2025-02-21 | Fluxo              | L   | 0.293      | -            | -                | -                | -         |    -4.12 | destiny, drg, gbb, nython, tomate |
|           10 |      165 | 2025-02-19 | RED Canids         | W   | 0.279      | 0.371        | 0.000 (0.000)    | 0.151 (0.016)    | 0 (0.000) |     1.37 | destiny, drg, gbb, nython, tomate |
|            9 |      260 | 2025-02-14 | Dusty Roots        | W   | 0.246      | 0.371        | 0.001 (0.000)    | 0.255 (0.023)    | 0 (0.000) |     3.57 | destiny, drg, gbb, nython, tomate |
|            8 |      303 | 2025-02-12 | Game Hunters       | W   | 0.233      | 0.371        | 0.000 (0.000)    | 0.183 (0.016)    | 0 (0.000) |     1.16 | destiny, drg, gbb, nython, tomate |
|            7 |      495 | 2025-02-07 | Legacy             | L   | 0.198      | -            | -                | -                | -         |    -2.80 | destiny, drg, gbb, nython, tomate |
|            6 |      513 | 2025-02-06 | Dusty Roots        | W   | 0.193      | 0.143        | 0.001 (0.000)    | 0.255 (0.007)    | 0 (0.000) |     2.79 | destiny, drg, gbb, nython, tomate |
|            5 |      538 | 2025-02-05 | Legacy             | L   | 0.186      | -            | -                | -                | -         |    -2.65 | destiny, drg, gbb, nython, tomate |
|            4 |      546 | 2025-02-05 | Dusty Roots        | W   | 0.185      | 0.143        | 0.001 (0.000)    | 0.255 (0.007)    | 0 (0.000) |     2.69 | destiny, drg, gbb, nython, tomate |
|            3 |      695 | 2025-01-11 | BESTIA             | L   | 0.019      | -            | -                | -                | -         |    -0.28 | destiny, drg, gbb, nython, tomate |
|            2 |      703 | 2025-01-10 | Familia Maquininha | W   | 0.011      | 0.384        | 0.000 (0.000)    | 0.089 (0.000)    | 0 (0.000) |     0.05 | destiny, drg, gbb, nython, tomate |
|            1 |      709 | 2025-01-09 | UNO MILLE          | W   | 0.005      | 0.384        | 0.000 (0.000)    | 0.281 (0.001)    | 0 (0.000) |     0.02 | destiny, drg, gbb, nython, tomate |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($289.83)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-22 |      0.300 | $750.00        | $225.24         |
| 2025-01-12 |      0.026 | $2,500.00      | $64.58          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
