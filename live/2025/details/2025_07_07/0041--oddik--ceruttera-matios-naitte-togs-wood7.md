### Roster Details<br />
Team Name: ODDIK<br />
Roster: Ceruttera, matios, naitte, togs, WOOD7<br />
Global Rank: [41](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_07_07.md)<br />
Regional Rank: [11]( ../../standings_americas_2025_07_07.md)<br />
<br />
Final Rank Value:  730.5<br />
<br />
Final Rank Value (730.5) = Starting Rank Value (729.1) + Head To Head Adjustments (1.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.329[<sup>1</sup>](#table2)
- Bounty Collected: 0.192[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.133<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 729.1
- 400 + ( ( 0.133 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 729.1


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
|           10 |      108 | 2025-02-22 | Sharks Esports           | L   | 0.298      | -            | -                | -                | -         |    -3.95 | Ceruttera, matios, naitte, togs, WOOD7 |
|            9 |      136 | 2025-02-21 | Players (Brazilian team) | W   | 0.291      | 0.371        | 0.005 (0.000)    | 0.412 (0.044)    | 0 (0.000) |     2.90 | Ceruttera, matios, naitte, togs, WOOD7 |
|            8 |      166 | 2025-02-19 | 9z Team                  | W   | 0.279      | 0.371        | 0.000 (0.000)    | 0.073 (0.008)    | 0 (0.000) |     1.17 | Ceruttera, matios, naitte, togs, WOOD7 |
|            7 |      259 | 2025-02-14 | UNO MILLE                | W   | 0.247      | 0.371        | 0.000 (0.000)    | 0.281 (0.026)    | 0 (0.000) |     1.12 | Ceruttera, matios, naitte, togs, WOOD7 |
|            6 |      305 | 2025-02-12 | MIBR Academy             | W   | 0.233      | 0.371        | 0.000 (0.000)    | 0.290 (0.025)    | 0 (0.000) |     1.67 | Ceruttera, matios, naitte, togs, WOOD7 |
|            5 |      430 | 2025-02-08 | BESTIA                   | L   | 0.206      | -            | -                | -                | -         |    -3.32 | Ceruttera, matios, naitte, togs, WOOD7 |
|            4 |      482 | 2025-02-07 | Fake do Biru             | W   | 0.200      | 0.143        | 0.000 (0.000)    | 0.078 (0.002)    | 0 (0.000) |     0.86 | Ceruttera, matios, naitte, togs, WOOD7 |
|            3 |      493 | 2025-02-07 | BESTIA                   | L   | 0.198      | -            | -                | -                | -         |    -3.23 | Ceruttera, matios, naitte, togs, WOOD7 |
|            2 |      536 | 2025-02-05 | Bounty Hunters Esports   | W   | 0.186      | 0.143        | 0.000 (0.000)    | 0.358 (0.009)    | 0 (0.000) |     1.37 | Ceruttera, matios, naitte, togs, WOOD7 |
|            1 |      542 | 2025-02-05 | Swingers                 | W   | 0.185      | 0.143        | 0.005 (0.000)    | 0.395 (0.010)    | 0 (0.000) |     2.75 | Ceruttera, matios, naitte, togs, WOOD7 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($450.49)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-22 |      0.300 | $1,500.00      | $450.49         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
