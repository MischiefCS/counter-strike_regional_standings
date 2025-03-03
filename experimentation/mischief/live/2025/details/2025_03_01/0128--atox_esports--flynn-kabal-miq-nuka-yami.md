### Roster Details<br />
Team Name: ATOX Esports<br />
Roster: flyNN, kabal, MiQ, nuka, yAmi<br />
Global Rank: [128](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [15]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  757.8<br />
<br />
Final Rank Value (757.8) = Starting Rank Value (759.0) + Head To Head Adjustments (-1.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.325[<sup>1</sup>](#table2)
- Bounty Collected: 0.228[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.169[<sup>2</sup>](#table1)

The average of these factors is 0.184<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 759.0
- 400 + ( ( 0.184 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 759.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     3175 | 2024-11-02 | Lynn Vision Gaming      | L   | 0.410      | -            | -                | -                | -         |    -3.50 | flyNN, kabal, MiQ, nuka, yAmi   |
|           13 |     3221 | 2024-11-02 | TYLOO                   | L   | 0.405      | -            | -                | -                | -         |    -4.25 | flyNN, kabal, MiQ, nuka, yAmi   |
|           12 |     3511 | 2024-10-17 | Chinggis Warriors       | L   | 0.303      | -            | -                | -                | -         |    -2.05 | cool4st, kabal, MiQ, sk0R, yAmi |
|           11 |     3532 | 2024-10-17 | Clutch Gaming           | W   | 0.297      | 0.333        | 0.000 (0.000)    | 0.052 (0.005)    | 1 (0.297) |     2.04 | cool4st, kabal, MiQ, sk0R, yAmi |
|           10 |     3553 | 2024-10-16 | Lynn Vision Gaming      | W   | 0.292      | 0.417        | 0.017 (0.002)    | 0.439 (0.053)    | 1 (0.292) |     6.64 | flyNN, kabal, MiQ, nuka, yAmi   |
|            9 |     3560 | 2024-10-16 | Chinggis Warriors       | L   | 0.291      | -            | -                | -                | -         |    -1.95 | cool4st, kabal, MiQ, sk0R, yAmi |
|            8 |     3576 | 2024-10-15 | Chinggis Warriors       | W   | 0.285      | 0.417        | 0.016 (0.002)    | 0.634 (0.075)    | 1 (0.285) |     7.17 | flyNN, kabal, MiQ, nuka, yAmi   |
|            7 |     3581 | 2024-10-14 | The QUBE Esports        | W   | 0.283      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.283) |     1.78 | cool4st, kabal, MiQ, sk0R, yAmi |
|            6 |     3988 | 2024-09-30 | Nomads (Mongolian team) | L   | 0.185      | -            | -                | -                | -         |    -3.53 | flyNN, kabal, MiQ, nuka, yAmi   |
|            5 |     3991 | 2024-09-30 | Nomads (Mongolian team) | L   | 0.185      | -            | -                | -                | -         |    -3.58 | flyNN, kabal, MiQ, nuka, yAmi   |
|            4 |     4031 | 2024-09-28 | The Huns Esports        | L   | 0.172      | -            | -                | -                | -         |    -0.87 | flyNN, kabal, MiQ, nuka, yAmi   |
|            3 |     4034 | 2024-09-28 | The Huns Esports        | L   | 0.171      | -            | -                | -                | -         |    -0.87 | flyNN, kabal, MiQ, nuka, yAmi   |
|            2 |     4222 | 2024-09-24 | The QUBE Esports        | W   | 0.145      | 0.417        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.145) |     0.90 | flyNN, kabal, MiQ, nuka, yAmi   |
|            1 |     4227 | 2024-09-24 | The QUBE Esports        | W   | 0.145      | 0.417        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.145) |     0.91 | flyNN, kabal, MiQ, nuka, yAmi   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,811.57)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      0.411 | $5,000.00      | $2,053.94       |
| 2024-10-17 |      0.303 | $2,500.00      | $757.64         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
