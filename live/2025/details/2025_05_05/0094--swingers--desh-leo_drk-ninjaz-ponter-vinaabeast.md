### Roster Details<br />
Team Name: Swingers<br />
Roster: desh, leo_drk, ninjaZ, ponter, vinaabEAST<br />
Global Rank: [94](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_05_05.md)<br />
Regional Rank: [19]( ../../standings_americas_2025_05_05.md)<br />
<br />
Final Rank Value:  720.1<br />
<br />
Final Rank Value (720.1) = Starting Rank Value (716.9) + Head To Head Adjustments (3.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.298[<sup>1</sup>](#table2)
- Bounty Collected: 0.256[<sup>2</sup>](#table1)
- Opponent Network: 0.028[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.145<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 716.9
- 400 + ( ( 0.145 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 716.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                 | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |      127 | 2025-02-21 | Sharks Esports           | L   | 0.712      | -            | -                | -                | -         |    -6.35 | desh, leo_drk, ninjaZ, ponter, vinaabEAST  |
|            8 |      157 | 2025-02-20 | BESTIA                   | W   | 0.704      | 0.371        | 0.046 (0.012)    | 0.430 (0.112)    | 0 (0.000) |    13.88 | desh, leo_drk, ninjaZ, ponter, vinaabEAST  |
|            7 |      206 | 2025-02-16 | Yawara E-Sports          | W   | 0.678      | 0.371        | 0.000 (0.000)    | 0.191 (0.048)    | 0 (0.000) |     7.41 | desh, leo_drk, ninjaZ, ponter, vinaabEAST  |
|            6 |      283 | 2025-02-13 | MIBR Academy             | W   | 0.660      | 0.371        | 0.000 (0.000)    | 0.258 (0.063)    | 0 (0.000) |     8.37 | desh, leo_drk, ninjaZ, ponter, vinaabEAST  |
|            5 |      311 | 2025-02-12 | Dusty Roots              | L   | 0.651      | -            | -                | -                | -         |    -9.95 | desh, leo_drk, ninjaZ, ponter, vinaabEAST  |
|            4 |      353 | 2025-02-10 | Nitro.GG                 | W   | 0.639      | 0.371        | 0.001 (0.000)    | 0.247 (0.058)    | 0 (0.000) |     7.56 | desh, leo_drk, ninjaZ, ponter, vinaabEAST  |
|            3 |      520 | 2025-02-06 | BESTIA                   | L   | 0.611      | -            | -                | -                | -         |    -7.05 | desh, leo_drk, ninjaZ, ponter, vinaabEAST  |
|            2 |      542 | 2025-02-05 | ODDIK                    | L   | 0.605      | -            | -                | -                | -         |    -8.40 | desh, leo_drk, ninjaZ, ponter, vinaabEAST  |
|            1 |     1196 | 2024-11-28 | Players (Brazilian team) | L   | 0.147      | -            | -                | -                | -         |    -2.27 | history, leo_drk, ninjaZ, redi, vinaabEAST |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($540.24)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-22 |      0.720 | $750.00        | $540.24         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
