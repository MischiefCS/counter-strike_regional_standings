### Roster Details<br />
Team Name: Swingers<br />
Roster: desh, leo_drk, ninjaZ, ponter, vinaabEAST<br />
Global Rank: [64](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_06_02.md)<br />
Regional Rank: [15]( ../../standings_americas_2025_06_02.md)<br />
<br />
Final Rank Value:  716.8<br />
<br />
Final Rank Value (716.8) = Starting Rank Value (724.3) + Head To Head Adjustments (-7.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.299[<sup>1</sup>](#table2)
- Bounty Collected: 0.241[<sup>2</sup>](#table1)
- Opponent Network: 0.020[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.140<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 724.3
- 400 + ( ( 0.140 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 724.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      127 | 2025-02-21 | Sharks Esports  | L   | 0.525      | -            | -                | -                | -         |    -6.35 | desh, leo_drk, ninjaZ, ponter, vinaabEAST |
|            7 |      157 | 2025-02-20 | BESTIA          | W   | 0.518      | 0.371        | 0.037 (0.007)    | 0.451 (0.086)    | 0 (0.000) |     9.83 | desh, leo_drk, ninjaZ, ponter, vinaabEAST |
|            6 |      206 | 2025-02-16 | Yawara E-Sports | W   | 0.492      | 0.371        | 0.000 (0.000)    | 0.177 (0.032)    | 0 (0.000) |     2.39 | desh, leo_drk, ninjaZ, ponter, vinaabEAST |
|            5 |      283 | 2025-02-13 | MIBR Academy    | W   | 0.474      | 0.371        | 0.000 (0.000)    | 0.261 (0.046)    | 0 (0.000) |     3.95 | desh, leo_drk, ninjaZ, ponter, vinaabEAST |
|            4 |      311 | 2025-02-12 | Dusty Roots     | L   | 0.464      | -            | -                | -                | -         |    -7.62 | desh, leo_drk, ninjaZ, ponter, vinaabEAST |
|            3 |      353 | 2025-02-10 | Nitro.GG        | W   | 0.453      | 0.371        | 0.000 (0.000)    | 0.190 (0.032)    | 0 (0.000) |     2.24 | desh, leo_drk, ninjaZ, ponter, vinaabEAST |
|            2 |      520 | 2025-02-06 | BESTIA          | L   | 0.425      | -            | -                | -                | -         |    -5.39 | desh, leo_drk, ninjaZ, ponter, vinaabEAST |
|            1 |      542 | 2025-02-05 | ODDIK           | L   | 0.418      | -            | -                | -                | -         |    -6.55 | desh, leo_drk, ninjaZ, ponter, vinaabEAST |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($400.24)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-22 |      0.534 | $750.00        | $400.24         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
