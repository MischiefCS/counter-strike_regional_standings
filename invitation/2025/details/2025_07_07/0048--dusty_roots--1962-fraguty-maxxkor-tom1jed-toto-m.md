### Roster Details<br />
Team Name: Dusty Roots<br />
Roster: 1962, FraGuTy, maxxkor, tom1jed, toto-m<br />
Global Rank: [48](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_07_07.md)<br />
Regional Rank: [15]( ../../standings_americas_2025_07_07.md)<br />
<br />
Final Rank Value:  661.8<br />
<br />
Final Rank Value (661.8) = Starting Rank Value (676.3) + Head To Head Adjustments (-14.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.258[<sup>1</sup>](#table2)
- Bounty Collected: 0.185[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.112<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 676.3
- 400 + ( ( 0.112 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 676.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      183 | 2025-02-17 | MIBR Academy           | L   | 0.265      | -            | -                | -                | -         |    -5.89 | 1962, FraGuTy, maxxkor, tom1jed, toto-m |
|            9 |      224 | 2025-02-15 | Bounty Hunters Esports | L   | 0.253      | -            | -                | -                | -         |    -5.60 | 1962, FraGuTy, maxxkor, tom1jed, toto-m |
|            8 |      260 | 2025-02-14 | Team Solid             | L   | 0.246      | -            | -                | -                | -         |    -3.57 | 1962, FraGuTy, maxxkor, tom1jed, toto-m |
|            7 |      311 | 2025-02-12 | Swingers               | W   | 0.231      | 0.371        | 0.005 (0.000)    | 0.395 (0.034)    | 0 (0.000) |     3.96 | 1962, FraGuTy, maxxkor, tom1jed, toto-m |
|            6 |      387 | 2025-02-09 | Yawara E-Sports        | W   | 0.213      | 0.371        | 0.000 (0.000)    | 0.199 (0.016)    | 0 (0.000) |     1.21 | 1962, FraGuTy, maxxkor, tom1jed, toto-m |
|            5 |      513 | 2025-02-06 | Team Solid             | L   | 0.193      | -            | -                | -                | -         |    -2.79 | 1962, FraGuTy, maxxkor, tom1jed, toto-m |
|            4 |      522 | 2025-02-06 | Familia Maquininha     | W   | 0.191      | 0.143        | 0.000 (0.000)    | 0.089 (0.002)    | 0 (0.000) |     1.07 | 1962, FraGuTy, maxxkor, tom1jed, toto-m |
|            3 |      546 | 2025-02-05 | Team Solid             | L   | 0.185      | -            | -                | -                | -         |    -2.69 | 1962, FraGuTy, maxxkor, tom1jed, toto-m |
|            2 |      694 | 2025-01-11 | Legacy                 | L   | 0.020      | -            | -                | -                | -         |    -0.26 | 1962, FraGuTy, maxxkor, tom1jed, toto-m |
|            1 |      701 | 2025-01-10 | Fake do Biru           | W   | 0.011      | 0.384        | 0.000 (0.000)    | 0.078 (0.000)    | 0 (0.000) |     0.06 | 1962, FraGuTy, maxxkor, tom1jed, toto-m |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($64.58)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-01-12 |      0.026 | $2,500.00      | $64.58          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
