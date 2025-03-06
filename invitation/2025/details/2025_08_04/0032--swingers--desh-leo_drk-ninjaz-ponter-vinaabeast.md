### Roster Details<br />
Team Name: Swingers<br />
Roster: desh, leo_drk, ninjaZ, ponter, vinaabEAST<br />
Global Rank: [32](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_04.md)<br />
Regional Rank: [9]( ../../standings_americas_2025_08_04.md)<br />
<br />
Final Rank Value:  615.5<br />
<br />
Final Rank Value (615.5) = Starting Rank Value (615.0) + Head To Head Adjustments (0.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.327[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.082<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 615.0
- 400 + ( ( 0.082 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 615.0


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
|            7 |      127 | 2025-02-21 | Sharks Esports  | L   | 0.105      | -            | -                | -                | -         |    -0.80 | desh, leo_drk, ninjaZ, ponter, vinaabEAST |
|            6 |      157 | 2025-02-20 | BESTIA          | W   | 0.098      | 0.371        | 0.000 (0.000)    | 0.065 (0.002)    | 0 (0.000) |     1.09 | desh, leo_drk, ninjaZ, ponter, vinaabEAST |
|            5 |      206 | 2025-02-16 | Yawara E-Sports | W   | 0.072      | 0.371        | 0.000 (0.000)    | 0.199 (0.005)    | 0 (0.000) |     0.53 | desh, leo_drk, ninjaZ, ponter, vinaabEAST |
|            4 |      283 | 2025-02-13 | MIBR Academy    | W   | 0.054      | 0.371        | 0.000 (0.000)    | 0.265 (0.005)    | 0 (0.000) |     0.39 | desh, leo_drk, ninjaZ, ponter, vinaabEAST |
|            3 |      311 | 2025-02-12 | Dusty Roots     | L   | 0.044      | -            | -                | -                | -         |    -0.89 | desh, leo_drk, ninjaZ, ponter, vinaabEAST |
|            2 |      353 | 2025-02-10 | Nitro.GG        | W   | 0.033      | 0.371        | 0.000 (0.000)    | 0.049 (0.001)    | 0 (0.000) |     0.24 | desh, leo_drk, ninjaZ, ponter, vinaabEAST |
|            1 |      520 | 2025-02-06 | BESTIA          | L   | 0.005      | -            | -                | -                | -         |    -0.10 | desh, leo_drk, ninjaZ, ponter, vinaabEAST |

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
