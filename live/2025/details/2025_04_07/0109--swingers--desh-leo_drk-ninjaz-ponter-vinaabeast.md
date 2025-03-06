### Roster Details<br />
Team Name: Swingers<br />
Roster: desh, leo_drk, ninjaZ, ponter, vinaabEAST<br />
Global Rank: [109](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_04_07.md)<br />
Regional Rank: [23]( ../../standings_americas_2025_04_07.md)<br />
<br />
Final Rank Value:  714.8<br />
<br />
Final Rank Value (714.8) = Starting Rank Value (702.2) + Head To Head Adjustments (12.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.284[<sup>1</sup>](#table2)
- Bounty Collected: 0.258[<sup>2</sup>](#table1)
- Opponent Network: 0.043[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.146<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 702.2
- 400 + ( ( 0.146 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 702.2


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
|            9 |      127 | 2025-02-21 | Sharks Esports           | L   | 0.898      | -            | -                | -                | -         |    -6.77 | desh, leo_drk, ninjaZ, ponter, vinaabEAST  |
|            8 |      157 | 2025-02-20 | BESTIA                   | W   | 0.891      | 0.371        | 0.037 (0.012)    | 0.459 (0.151)    | 0 (0.000) |    18.52 | desh, leo_drk, ninjaZ, ponter, vinaabEAST  |
|            7 |      206 | 2025-02-16 | Yawara E-Sports          | W   | 0.865      | 0.371        | 0.001 (0.000)    | 0.270 (0.086)    | 0 (0.000) |    11.44 | desh, leo_drk, ninjaZ, ponter, vinaabEAST  |
|            6 |      283 | 2025-02-13 | MIBR Academy             | W   | 0.847      | 0.371        | 0.000 (0.000)    | 0.306 (0.096)    | 0 (0.000) |    11.76 | desh, leo_drk, ninjaZ, ponter, vinaabEAST  |
|            5 |      311 | 2025-02-12 | Dusty Roots              | L   | 0.838      | -            | -                | -                | -         |   -11.24 | desh, leo_drk, ninjaZ, ponter, vinaabEAST  |
|            4 |      353 | 2025-02-10 | Nitro.GG                 | W   | 0.826      | 0.371        | 0.001 (0.000)    | 0.312 (0.096)    | 0 (0.000) |    11.45 | desh, leo_drk, ninjaZ, ponter, vinaabEAST  |
|            3 |      520 | 2025-02-06 | BESTIA                   | L   | 0.798      | -            | -                | -                | -         |    -7.97 | desh, leo_drk, ninjaZ, ponter, vinaabEAST  |
|            2 |      542 | 2025-02-05 | ODDIK                    | L   | 0.791      | -            | -                | -                | -         |    -9.68 | desh, leo_drk, ninjaZ, ponter, vinaabEAST  |
|            1 |     1196 | 2024-11-28 | Players (Brazilian team) | L   | 0.333      | -            | -                | -                | -         |    -4.94 | history, leo_drk, ninjaZ, redi, vinaabEAST |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($680.24)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-22 |      0.907 | $750.00        | $680.24         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
