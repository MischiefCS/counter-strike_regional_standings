### Roster Details<br />
Team Name: ATOX Esports<br />
Roster: flyNN, kabal, MiQ, nuka, yAmi<br />
Global Rank: [148](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_04_07.md)<br />
Regional Rank: [17]( ../../standings_asia_2025_04_07.md)<br />
<br />
Final Rank Value:  655.6<br />
<br />
Final Rank Value (655.6) = Starting Rank Value (658.9) + Head To Head Adjustments (-3.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.296[<sup>1</sup>](#table2)
- Bounty Collected: 0.179[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.025[<sup>2</sup>](#table1)

The average of these factors is 0.125<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 658.9
- 400 + ( ( 0.125 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 658.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     1699 | 2024-11-02 | Lynn Vision Gaming | L   | 0.162      | -            | -                | -                | -         |    -2.03 | flyNN, kabal, MiQ, nuka, yAmi   |
|            7 |     1718 | 2024-11-02 | TYLOO              | L   | 0.156      | -            | -                | -                | -         |    -2.12 | flyNN, kabal, MiQ, nuka, yAmi   |
|            6 |     1896 | 2024-10-17 | Chinggis Warriors  | L   | 0.055      | -            | -                | -                | -         |    -0.73 | cool4st, kabal, MiQ, sk0R, yAmi |
|            5 |     1917 | 2024-10-17 | Clutch Gaming      | W   | 0.049      | 0.333        | 0.000 (0.000)    | 0.018 (0.000)    | 1 (0.049) |     0.46 | cool4st, kabal, MiQ, sk0R, yAmi |
|            4 |     1938 | 2024-10-16 | Lynn Vision Gaming | W   | 0.043      | 0.417        | 0.006 (0.000)    | 0.284 (0.005)    | 1 (0.043) |     0.81 | flyNN, kabal, MiQ, nuka, yAmi   |
|            3 |     1945 | 2024-10-16 | Chinggis Warriors  | L   | 0.042      | -            | -                | -                | -         |    -0.56 | cool4st, kabal, MiQ, sk0R, yAmi |
|            2 |     1961 | 2024-10-15 | Chinggis Warriors  | W   | 0.037      | 0.417        | 0.010 (0.000)    | 0.522 (0.008)    | 1 (0.037) |     0.67 | flyNN, kabal, MiQ, nuka, yAmi   |
|            1 |     1966 | 2024-10-14 | The QUBE Esports   | W   | 0.035      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.035) |     0.21 | cool4st, kabal, MiQ, sk0R, yAmi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($949.07)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      0.162 | $5,000.00      | $812.27         |
| 2024-10-17 |      0.055 | $2,500.00      | $136.81         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
