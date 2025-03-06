### Roster Details<br />
Team Name: Dusty Roots<br />
Roster: 1962, FraGuTy, maxxkor, tom1jed, toto-m<br />
Global Rank: [49](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_04.md)<br />
Regional Rank: [11]( ../../standings_americas_2025_08_04.md)<br />
<br />
Final Rank Value:  510.2<br />
<br />
Final Rank Value (510.2) = Starting Rank Value (512.6) + Head To Head Adjustments (-2.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.171[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.043<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 512.6
- 400 + ( ( 0.043 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 512.6


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
|            7 |      183 | 2025-02-17 | MIBR Academy           | L   | 0.078      | -            | -                | -                | -         |    -1.61 | 1962, FraGuTy, maxxkor, tom1jed, toto-m |
|            6 |      224 | 2025-02-15 | Bounty Hunters Esports | L   | 0.066      | -            | -                | -                | -         |    -1.35 | 1962, FraGuTy, maxxkor, tom1jed, toto-m |
|            5 |      260 | 2025-02-14 | Team Solid             | L   | 0.059      | -            | -                | -                | -         |    -0.68 | 1962, FraGuTy, maxxkor, tom1jed, toto-m |
|            4 |      311 | 2025-02-12 | Swingers               | W   | 0.044      | 0.371        | 0.009 (0.000)    | 0.385 (0.006)    | 0 (0.000) |     0.89 | 1962, FraGuTy, maxxkor, tom1jed, toto-m |
|            3 |      387 | 2025-02-09 | Yawara E-Sports        | W   | 0.027      | 0.371        | 0.000 (0.000)    | 0.199 (0.002)    | 0 (0.000) |     0.29 | 1962, FraGuTy, maxxkor, tom1jed, toto-m |
|            2 |      513 | 2025-02-06 | Team Solid             | L   | 0.006      | -            | -                | -                | -         |    -0.07 | 1962, FraGuTy, maxxkor, tom1jed, toto-m |
|            1 |      522 | 2025-02-06 | Familia Maquininha     | W   | 0.005      | 0.143        | 0.000 (0.000)    | 0.060 (0.000)    | 0 (0.000) |     0.05 | 1962, FraGuTy, maxxkor, tom1jed, toto-m |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
