### Roster Details<br />
Team Name: ODDIK<br />
Roster: Ceruttera, matios, naitte, togs, WOOD7<br />
Global Rank: [25](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_04.md)<br />
Regional Rank: [6]( ../../standings_americas_2025_08_04.md)<br />
<br />
Final Rank Value:  758.6<br />
<br />
Final Rank Value (758.6) = Starting Rank Value (759.0) + Head To Head Adjustments (-0.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.363[<sup>1</sup>](#table2)
- Bounty Collected: 0.183[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.137<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 759.0
- 400 + ( ( 0.137 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 759.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                 | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      108 | 2025-02-22 | Sharks Esports           | L   | 0.112      | -            | -                | -                | -         |    -1.46 | Ceruttera, matios, naitte, togs, WOOD7 |
|            7 |      136 | 2025-02-21 | Players (Brazilian team) | W   | 0.104      | 0.371        | 0.009 (0.000)    | 0.449 (0.017)    | 0 (0.000) |     1.02 | Ceruttera, matios, naitte, togs, WOOD7 |
|            6 |      166 | 2025-02-19 | 9z Team                  | W   | 0.092      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.34 | Ceruttera, matios, naitte, togs, WOOD7 |
|            5 |      259 | 2025-02-14 | UNO MILLE                | W   | 0.060      | 0.371        | 0.000 (0.000)    | 0.229 (0.005)    | 0 (0.000) |     0.23 | Ceruttera, matios, naitte, togs, WOOD7 |
|            4 |      305 | 2025-02-12 | MIBR Academy             | W   | 0.046      | 0.371        | 0.000 (0.000)    | 0.265 (0.005)    | 0 (0.000) |     0.17 | Ceruttera, matios, naitte, togs, WOOD7 |
|            3 |      430 | 2025-02-08 | BESTIA                   | L   | 0.019      | -            | -                | -                | -         |    -0.48 | Ceruttera, matios, naitte, togs, WOOD7 |
|            2 |      482 | 2025-02-07 | Fake do Biru             | W   | 0.013      | 0.143        | 0.000 (0.000)    | 0.007 (0.000)    | 0 (0.000) |     0.05 | Ceruttera, matios, naitte, togs, WOOD7 |
|            1 |      493 | 2025-02-07 | BESTIA                   | L   | 0.011      | -            | -                | -                | -         |    -0.29 | Ceruttera, matios, naitte, togs, WOOD7 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($170.49)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-22 |      0.114 | $1,500.00      | $170.49         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
