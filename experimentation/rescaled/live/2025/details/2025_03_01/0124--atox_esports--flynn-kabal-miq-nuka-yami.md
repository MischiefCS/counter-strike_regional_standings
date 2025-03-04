### Roster Details<br />
Team Name: ATOX Esports<br />
Roster: flyNN, kabal, MiQ, nuka, yAmi<br />
Global Rank: [124](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [14]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  742.6<br />
<br />
Final Rank Value (742.6) = Starting Rank Value (748.2) + Head To Head Adjustments (-5.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.325[<sup>1</sup>](#table2)
- Bounty Collected: 0.226[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.169[<sup>2</sup>](#table1)

The average of these factors is 0.183<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 748.2
- 400 + ( ( 0.183 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 748.2


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
|           14 |     1699 | 2024-11-02 | Lynn Vision Gaming      | L   | 0.410      | -            | -                | -                | -         |    -3.94 | flyNN, kabal, MiQ, nuka, yAmi   |
|           13 |     1718 | 2024-11-02 | TYLOO                   | L   | 0.405      | -            | -                | -                | -         |    -4.46 | flyNN, kabal, MiQ, nuka, yAmi   |
|           12 |     1896 | 2024-10-17 | Chinggis Warriors       | L   | 0.303      | -            | -                | -                | -         |    -3.16 | cool4st, kabal, MiQ, sk0R, yAmi |
|           11 |     1917 | 2024-10-17 | Clutch Gaming           | W   | 0.297      | 0.360        | 0.000 (0.000)    | 0.056 (0.006)    | 1 (0.297) |     2.11 | cool4st, kabal, MiQ, sk0R, yAmi |
|           10 |     1938 | 2024-10-16 | Lynn Vision Gaming      | W   | 0.292      | 0.466        | 0.011 (0.002)    | 0.301 (0.041)    | 1 (0.292) |     6.31 | flyNN, kabal, MiQ, nuka, yAmi   |
|            9 |     1945 | 2024-10-16 | Chinggis Warriors       | L   | 0.291      | -            | -                | -                | -         |    -3.04 | cool4st, kabal, MiQ, sk0R, yAmi |
|            8 |     1961 | 2024-10-15 | Chinggis Warriors       | W   | 0.285      | 0.466        | 0.016 (0.002)    | 0.555 (0.074)    | 1 (0.285) |     6.10 | flyNN, kabal, MiQ, nuka, yAmi   |
|            7 |     1966 | 2024-10-14 | The QUBE Esports        | W   | 0.283      | 0.360        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.283) |     1.84 | cool4st, kabal, MiQ, sk0R, yAmi |
|            6 |     2373 | 2024-09-30 | Nomads (Mongolian team) | L   | 0.185      | -            | -                | -                | -         |    -3.52 | flyNN, kabal, MiQ, nuka, yAmi   |
|            5 |     2376 | 2024-09-30 | Nomads (Mongolian team) | L   | 0.185      | -            | -                | -                | -         |    -3.57 | flyNN, kabal, MiQ, nuka, yAmi   |
|            4 |     2416 | 2024-09-28 | The Huns Esports        | L   | 0.172      | -            | -                | -                | -         |    -1.04 | flyNN, kabal, MiQ, nuka, yAmi   |
|            3 |     2419 | 2024-09-28 | The Huns Esports        | L   | 0.171      | -            | -                | -                | -         |    -1.05 | flyNN, kabal, MiQ, nuka, yAmi   |
|            2 |     2607 | 2024-09-24 | The QUBE Esports        | W   | 0.145      | 0.466        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.145) |     0.93 | flyNN, kabal, MiQ, nuka, yAmi   |
|            1 |     2612 | 2024-09-24 | The QUBE Esports        | W   | 0.145      | 0.466        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.145) |     0.94 | flyNN, kabal, MiQ, nuka, yAmi   |

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
