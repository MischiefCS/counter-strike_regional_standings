### Roster Details<br />
Team Name: Team Solid<br />
Roster: destiny, drg, gbb, nython, tomate<br />
Global Rank: [55](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_06_02.md)<br />
Regional Rank: [12]( ../../standings_americas_2025_06_02.md)<br />
<br />
Final Rank Value:  736.5<br />
<br />
Final Rank Value (736.5) = Starting Rank Value (733.7) + Head To Head Adjustments (2.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.342[<sup>1</sup>](#table2)
- Bounty Collected: 0.215[<sup>2</sup>](#table1)
- Opponent Network: 0.019[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.144<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 733.7
- 400 + ( ( 0.144 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 733.7


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
|           15 |      121 | 2025-02-21 | Fluxo              | L   | 0.526      | -            | -                | -                | -         |    -8.20 | destiny, drg, gbb, nython, tomate |
|           14 |      165 | 2025-02-19 | RED Canids         | W   | 0.513      | 0.371        | 0.000 (0.000)    | 0.155 (0.029)    | 0 (0.000) |     2.21 | destiny, drg, gbb, nython, tomate |
|           13 |      260 | 2025-02-14 | Dusty Roots        | W   | 0.479      | 0.371        | 0.007 (0.001)    | 0.287 (0.051)    | 0 (0.000) |     6.80 | destiny, drg, gbb, nython, tomate |
|           12 |      303 | 2025-02-12 | Game Hunters       | W   | 0.467      | 0.371        | 0.000 (0.000)    | 0.205 (0.035)    | 0 (0.000) |     2.94 | destiny, drg, gbb, nython, tomate |
|           11 |      495 | 2025-02-07 | Legacy             | L   | 0.431      | -            | -                | -                | -         |    -5.81 | destiny, drg, gbb, nython, tomate |
|           10 |      513 | 2025-02-06 | Dusty Roots        | W   | 0.426      | 0.143        | 0.007 (0.000)    | 0.287 (0.017)    | 0 (0.000) |     6.04 | destiny, drg, gbb, nython, tomate |
|            9 |      538 | 2025-02-05 | Legacy             | L   | 0.419      | -            | -                | -                | -         |    -5.74 | destiny, drg, gbb, nython, tomate |
|            8 |      546 | 2025-02-05 | Dusty Roots        | W   | 0.418      | 0.143        | 0.007 (0.000)    | 0.287 (0.017)    | 0 (0.000) |     6.01 | destiny, drg, gbb, nython, tomate |
|            7 |      695 | 2025-01-11 | BESTIA             | L   | 0.252      | -            | -                | -                | -         |    -3.37 | destiny, drg, gbb, nython, tomate |
|            6 |      703 | 2025-01-10 | Familia Maquininha | W   | 0.244      | 0.384        | 0.000 (0.000)    | 0.084 (0.008)    | 0 (0.000) |     1.03 | destiny, drg, gbb, nython, tomate |
|            5 |      709 | 2025-01-09 | UNO MILLE          | W   | 0.238      | 0.384        | 0.000 (0.000)    | 0.303 (0.028)    | 0 (0.000) |     1.06 | destiny, drg, gbb, nython, tomate |
|            4 |      797 | 2024-12-19 | LaChampionsLiga    | W   | 0.099      | 0.384        | 0.000 (0.000)    | 0.105 (0.004)    | 0 (0.000) |     0.67 | destiny, drg, gbb, nython, tomate |
|            3 |      810 | 2024-12-18 | 9z Academy         | W   | 0.093      | 0.384        | 0.000 (0.000)    | 0.050 (0.002)    | 0 (0.000) |     0.64 | destiny, drg, gbb, nython, tomate |
|            2 |      833 | 2024-12-16 | Fake do Biru       | L   | 0.077      | -            | -                | -                | -         |    -1.89 | destiny, drg, gbb, nython, tomate |
|            1 |      889 | 2024-12-13 | Patins da Ferrari  | W   | 0.060      | 0.384        | 0.000 (0.000)    | 0.049 (0.001)    | 0 (0.000) |     0.40 | destiny, drg, gbb, nython, tomate |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,048.16)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-22 |      0.534 | $750.00        | $400.24         |
| 2025-01-12 |      0.259 | $2,500.00      | $647.92         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
