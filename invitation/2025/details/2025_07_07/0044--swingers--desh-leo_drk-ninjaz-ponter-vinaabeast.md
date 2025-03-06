### Roster Details<br />
Team Name: Swingers<br />
Roster: desh, leo_drk, ninjaZ, ponter, vinaabEAST<br />
Global Rank: [44](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_07_07.md)<br />
Regional Rank: [13]( ../../standings_americas_2025_07_07.md)<br />
<br />
Final Rank Value:  705.8<br />
<br />
Final Rank Value (705.8) = Starting Rank Value (710.1) + Head To Head Adjustments (-4.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.300[<sup>1</sup>](#table2)
- Bounty Collected: 0.194[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.126<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 710.1
- 400 + ( ( 0.126 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 710.1


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
|            8 |      127 | 2025-02-21 | Sharks Esports  | L   | 0.292      | -            | -                | -                | -         |    -3.60 | desh, leo_drk, ninjaZ, ponter, vinaabEAST |
|            7 |      157 | 2025-02-20 | BESTIA          | W   | 0.284      | 0.371        | 0.007 (0.001)    | 0.333 (0.035)    | 0 (0.000) |     4.67 | desh, leo_drk, ninjaZ, ponter, vinaabEAST |
|            6 |      206 | 2025-02-16 | Yawara E-Sports | W   | 0.258      | 0.371        | 0.000 (0.000)    | 0.199 (0.019)    | 0 (0.000) |     1.28 | desh, leo_drk, ninjaZ, ponter, vinaabEAST |
|            5 |      283 | 2025-02-13 | MIBR Academy    | W   | 0.240      | 0.371        | 0.000 (0.000)    | 0.290 (0.026)    | 0 (0.000) |     1.92 | desh, leo_drk, ninjaZ, ponter, vinaabEAST |
|            4 |      311 | 2025-02-12 | Dusty Roots     | L   | 0.231      | -            | -                | -                | -         |    -3.96 | desh, leo_drk, ninjaZ, ponter, vinaabEAST |
|            3 |      353 | 2025-02-10 | Nitro.GG        | W   | 0.219      | 0.371        | 0.000 (0.000)    | 0.160 (0.013)    | 0 (0.000) |     1.09 | desh, leo_drk, ninjaZ, ponter, vinaabEAST |
|            2 |      520 | 2025-02-06 | BESTIA          | L   | 0.191      | -            | -                | -                | -         |    -2.94 | desh, leo_drk, ninjaZ, ponter, vinaabEAST |
|            1 |      542 | 2025-02-05 | ODDIK           | L   | 0.185      | -            | -                | -                | -         |    -2.75 | desh, leo_drk, ninjaZ, ponter, vinaabEAST |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($225.24)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-22 |      0.300 | $750.00        | $225.24         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
