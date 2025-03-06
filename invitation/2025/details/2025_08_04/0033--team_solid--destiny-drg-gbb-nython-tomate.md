### Roster Details<br />
Team Name: Team Solid<br />
Roster: destiny, drg, gbb, nython, tomate<br />
Global Rank: [33](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_04.md)<br />
Regional Rank: [10]( ../../standings_americas_2025_08_04.md)<br />
<br />
Final Rank Value:  615.1<br />
<br />
Final Rank Value (615.1) = Starting Rank Value (614.5) + Head To Head Adjustments (0.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.327[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.082<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 614.5
- 400 + ( ( 0.082 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 614.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      121 | 2025-02-21 | Fluxo        | L   | 0.106      | -            | -                | -                | -         |    -0.98 | destiny, drg, gbb, nython, tomate |
|            5 |      165 | 2025-02-19 | RED Canids   | W   | 0.093      | 0.371        | 0.000 (0.000)    | 0.017 (0.001)    | 0 (0.000) |     0.67 | destiny, drg, gbb, nython, tomate |
|            4 |      260 | 2025-02-14 | Dusty Roots  | W   | 0.059      | 0.371        | 0.000 (0.000)    | 0.114 (0.003)    | 0 (0.000) |     0.68 | destiny, drg, gbb, nython, tomate |
|            3 |      303 | 2025-02-12 | Game Hunters | W   | 0.047      | 0.371        | 0.000 (0.000)    | 0.139 (0.002)    | 0 (0.000) |     0.34 | destiny, drg, gbb, nython, tomate |
|            2 |      495 | 2025-02-07 | Legacy       | L   | 0.011      | -            | -                | -                | -         |    -0.12 | destiny, drg, gbb, nython, tomate |
|            1 |      513 | 2025-02-06 | Dusty Roots  | W   | 0.006      | 0.143        | 0.000 (0.000)    | 0.114 (0.000)    | 0 (0.000) |     0.07 | destiny, drg, gbb, nython, tomate |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($85.24)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-22 |      0.114 | $750.00        | $85.24          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
