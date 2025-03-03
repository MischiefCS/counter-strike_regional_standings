### Roster Details<br />
Team Name: AKA HERO KAJO<br />
Roster: amyb, miLo, pikkuemma, Siljeeeh, Waldee<br />
Global Rank: [163](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [113]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  706.0<br />
<br />
Final Rank Value (706.0) = Starting Rank Value (690.0) + Head To Head Adjustments (16.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.295[<sup>1</sup>](#table2)
- Bounty Collected: 0.209[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.085[<sup>2</sup>](#table1)

The average of these factors is 0.148<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 690.0
- 400 + ( ( 0.148 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 690.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      682 | 2025-02-06 | Also                       | W   | 1.000      | 0.143        | 0.002 (0.000)    | 0.159 (0.023)    | 0 (0.000) |    13.27 | amyb, miLo, pikkuemma, Siljeeeh, Waldee |
|            7 |     1694 | 2024-12-08 | Nomercy (Female team)      | L   | 0.646      | -            | -                | -                | -         |   -11.37 | amyb, miLo, pikkuemma, tinjau, Waldee   |
|            6 |     1751 | 2024-12-07 | Permitta W                 | W   | 0.640      | 0.250        | 0.003 (0.000)    | 0.135 (0.022)    | 0 (0.000) |     7.66 | amyb, miLo, pikkuemma, tinjau, Waldee   |
|            5 |     1754 | 2024-12-07 | Needachance                | W   | 0.639      | 0.250        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.17 | amyb, miLo, pikkuemma, tinjau, Waldee   |
|            4 |     2136 | 2024-11-30 | Team Spirit Female         | L   | 0.593      | -            | -                | -                | -         |    -9.63 | amyb, miLo, pikkuemma, Siljeeeh, Waldee |
|            3 |     2141 | 2024-11-30 | Elite Klan Violet          | W   | 0.593      | 0.250        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.86 | amyb, miLo, pikkuemma, Siljeeeh, Waldee |
|            2 |     3415 | 2024-10-27 | Team Denmark (Female team) | W   | 0.365      | 0.143        | 0.010 (0.001)    | 0.062 (0.003)    | 1 (0.365) |     5.68 | amyb, miLo, Pikkuems, Siljeeeh, Waldee  |
|            1 |     3426 | 2024-10-27 | Team Sweden (Female team)  | W   | 0.364      | 0.143        | 0.007 (0.000)    | 0.026 (0.001)    | 1 (0.364) |     4.44 | amyb, miLo, Pikkuems, Siljeeeh, Waldee  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,364.25)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-08 |      0.646 | $250.00        | $161.46         |
| 2024-10-27 |      0.365 | $3,295.33      | $1,202.79       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
