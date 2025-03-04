### Roster Details<br />
Team Name: Swingers<br />
Roster: desh, leo_drk, ninjaZ, ponter, vinaabEAST<br />
Global Rank: [132](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [29]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  712.4<br />
<br />
Final Rank Value (712.4) = Starting Rank Value (689.5) + Head To Head Adjustments (22.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.274[<sup>1</sup>](#table2)
- Bounty Collected: 0.267[<sup>2</sup>](#table1)
- Opponent Network: 0.059[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.150<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 689.5
- 400 + ( ( 0.150 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 689.5


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
|            9 |      127 | 2025-02-21 | Sharks Esports           | L   | 1.000      | -            | -                | -                | -         |    -6.24 | desh, leo_drk, ninjaZ, ponter, vinaabEAST  |
|            8 |      157 | 2025-02-20 | BESTIA                   | W   | 1.000      | 0.371        | 0.045 (0.017)    | 0.572 (0.212)    | 0 (0.000) |    23.24 | desh, leo_drk, ninjaZ, ponter, vinaabEAST  |
|            7 |      206 | 2025-02-16 | Yawara E-Sports          | W   | 1.000      | 0.371        | 0.002 (0.001)    | 0.321 (0.119)    | 0 (0.000) |    14.10 | desh, leo_drk, ninjaZ, ponter, vinaabEAST  |
|            6 |      283 | 2025-02-13 | MIBR Academy             | W   | 1.000      | 0.371        | 0.001 (0.000)    | 0.328 (0.121)    | 0 (0.000) |    14.64 | desh, leo_drk, ninjaZ, ponter, vinaabEAST  |
|            5 |      311 | 2025-02-12 | Dusty Roots              | L   | 1.000      | -            | -                | -                | -         |   -12.31 | desh, leo_drk, ninjaZ, ponter, vinaabEAST  |
|            4 |      353 | 2025-02-10 | Nitro.GG                 | W   | 1.000      | 0.371        | 0.001 (0.000)    | 0.358 (0.133)    | 0 (0.000) |    15.08 | desh, leo_drk, ninjaZ, ponter, vinaabEAST  |
|            3 |      520 | 2025-02-06 | BESTIA                   | L   | 1.000      | -            | -                | -                | -         |    -6.90 | desh, leo_drk, ninjaZ, ponter, vinaabEAST  |
|            2 |      542 | 2025-02-05 | ODDIK                    | L   | 1.000      | -            | -                | -                | -         |   -10.52 | desh, leo_drk, ninjaZ, ponter, vinaabEAST  |
|            1 |     1196 | 2024-11-28 | Players (Brazilian team) | L   | 0.582      | -            | -                | -                | -         |    -8.15 | history, leo_drk, ninjaZ, redi, vinaabEAST |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($750.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-22 |      1.000 | $750.00        | $750.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
