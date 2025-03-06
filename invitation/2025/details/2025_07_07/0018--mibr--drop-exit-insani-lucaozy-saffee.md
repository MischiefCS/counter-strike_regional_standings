### Roster Details<br />
Team Name: MIBR<br />
Roster: drop, exit, insani, Lucaozy, saffee<br />
Global Rank: [18](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_07_07.md)<br />
Regional Rank: [3]( ../../standings_americas_2025_07_07.md)<br />
<br />
Final Rank Value:  1131.8<br />
<br />
Final Rank Value (1131.8) = Starting Rank Value (1138.0) + Head To Head Adjustments (-6.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.536[<sup>1</sup>](#table2)
- Bounty Collected: 0.358[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.286[<sup>2</sup>](#table1)

The average of these factors is 0.299<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1138.0
- 400 + ( ( 0.299 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 1138.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      199 | 2025-02-17 | Astralis         | L   | 0.264      | -            | -                | -                | -         |    -0.09 | drop, exit, insani, Lucaozy, saffee |
|           10 |      216 | 2025-02-16 | 3DMAX            | L   | 0.256      | -            | -                | -                | -         |    -1.03 | drop, exit, insani, Lucaozy, saffee |
|            9 |      244 | 2025-02-15 | Imperial Female  | W   | 0.250      | 1.000        | 0.088 (0.022)    | 0.000 (0.000)    | 1 (0.250) |     0.62 | drop, exit, insani, Lucaozy, saffee |
|            8 |      272 | 2025-02-14 | Wildcard         | L   | 0.244      | -            | -                | -                | -         |    -4.10 | drop, exit, insani, Lucaozy, saffee |
|            7 |      388 | 2025-02-09 | Imperial Esports | L   | 0.213      | -            | -                | -                | -         |    -5.48 | drop, exit, insani, Lucaozy, saffee |
|            6 |      400 | 2025-02-09 | Sharks Esports   | W   | 0.211      | 0.143        | 0.024 (0.001)    | 0.515 (0.016)    | 0 (0.000) |     0.82 | drop, exit, insani, Lucaozy, saffee |
|            5 |      448 | 2025-02-08 | Legacy           | W   | 0.205      | 0.143        | 0.009 (0.000)    | 0.620 (0.018)    | 0 (0.000) |     0.64 | drop, exit, insani, Lucaozy, saffee |
|            4 |      622 | 2025-01-31 | Virtus.pro       | L   | 0.151      | -            | -                | -                | -         |    -0.33 | drop, exit, insani, Lucaozy, saffee |
|            3 |      628 | 2025-01-30 | 3DMAX            | L   | 0.144      | -            | -                | -                | -         |    -0.63 | drop, exit, insani, Lucaozy, saffee |
|            2 |      640 | 2025-01-29 | Astralis         | W   | 0.137      | 1.000        | 1.000 (0.137)    | 1.000 (0.137)    | 1 (0.137) |     4.26 | drop, exit, insani, Lucaozy, saffee |
|            1 |      691 | 2025-01-14 | FlyQuest         | L   | 0.036      | -            | -                | -                | -         |    -0.97 | drop, exit, insani, Lucaozy, saffee |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,667.88)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.14) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      0.305 | $18,750.00     | $5,717.88       |
| 2025-02-09 |      0.211 | $4,500.00      | $950.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
