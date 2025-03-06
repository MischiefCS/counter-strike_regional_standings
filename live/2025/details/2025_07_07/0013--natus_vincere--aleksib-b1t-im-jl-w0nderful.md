### Roster Details<br />
Team Name: Natus Vincere<br />
Roster: Aleksib, b1t, iM, jL, w0nderful<br />
Global Rank: [13](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [11]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  1403.6<br />
<br />
Final Rank Value (1403.6) = Starting Rank Value (1389.1) + Head To Head Adjustments (14.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.714[<sup>1</sup>](#table2)
- Bounty Collected: 0.411[<sup>2</sup>](#table1)
- Opponent Network: 0.025[<sup>2</sup>](#table1)
- LAN Wins: 0.453[<sup>2</sup>](#table1)

The average of these factors is 0.401<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1389.1
- 400 + ( ( 0.401 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 1389.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      453 | 2025-02-08 | Team Spirit     | L   | 0.205      | -            | -                | -                | -         |    -0.41 | Aleksib, b1t, iM, jL, w0nderful |
|            7 |      574 | 2025-02-04 | The MongolZ     | W   | 0.178      | 1.000        | 0.732 (0.130)    | 0.505 (0.090)    | 1 (0.178) |     5.09 | Aleksib, b1t, iM, jL, w0nderful |
|            6 |      589 | 2025-02-03 | Team Spirit     | W   | 0.171      | 1.000        | 1.000 (0.171)    | 0.489 (0.083)    | 1 (0.171) |     5.07 | Aleksib, b1t, iM, jL, w0nderful |
|            5 |      611 | 2025-02-01 | FURIA           | W   | 0.158      | 1.000        | 0.043 (0.007)    | 0.136 (0.022)    | 1 (0.158) |     0.44 | Aleksib, b1t, iM, jL, w0nderful |
|            4 |      656 | 2025-01-25 | Team Spirit     | L   | 0.112      | -            | -                | -                | -         |    -0.21 | Aleksib, b1t, iM, jL, w0nderful |
|            3 |      661 | 2025-01-24 | PaiN Gaming     | W   | 0.105      | 0.769        | 0.443 (0.036)    | 0.428 (0.035)    | 1 (0.105) |     2.48 | Aleksib, b1t, iM, jL, w0nderful |
|            2 |      672 | 2025-01-18 | Astralis        | W   | 0.065      | 0.363        | 1.000 (0.024)    | 1.000 (0.024)    | 0 (0.000) |     1.98 | Aleksib, b1t, iM, jL, w0nderful |
|            1 |      680 | 2025-01-16 | Imperial Female | W   | 0.052      | 0.363        | 0.088 (0.002)    | 0.000 (0.000)    | 0 (0.000) |     0.03 | Aleksib, b1t, iM, jL, w0nderful |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($19,532.64)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.40) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-09 |      0.211 | $80,000.00     | $16,888.89      |
| 2025-01-26 |      0.117 | $22,500.00     | $2,643.75       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
