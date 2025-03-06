### Roster Details<br />
Team Name: MIBR<br />
Roster: drop, exit, insani, Lucaozy, saffee<br />
Global Rank: [14](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_04.md)<br />
Regional Rank: [2]( ../../standings_americas_2025_08_04.md)<br />
<br />
Final Rank Value:  1097.6<br />
<br />
Final Rank Value (1097.6) = Starting Rank Value (1099.1) + Head To Head Adjustments (-1.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.608[<sup>1</sup>](#table2)
- Bounty Collected: 0.249[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.209[<sup>2</sup>](#table1)

The average of these factors is 0.267<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1099.1
- 400 + ( ( 0.267 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 1099.1


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
|            7 |      199 | 2025-02-17 | Astralis         | L   | 0.077      | -            | -                | -                | -         |    -0.02 | drop, exit, insani, Lucaozy, saffee |
|            6 |      216 | 2025-02-16 | 3DMAX            | L   | 0.069      | -            | -                | -                | -         |    -0.47 | drop, exit, insani, Lucaozy, saffee |
|            5 |      244 | 2025-02-15 | Imperial Female  | W   | 0.064      | 1.000        | 0.151 (0.010)    | 0.000 (0.000)    | 1 (0.064) |     0.26 | drop, exit, insani, Lucaozy, saffee |
|            4 |      272 | 2025-02-14 | Wildcard         | L   | 0.057      | -            | -                | -                | -         |    -0.92 | drop, exit, insani, Lucaozy, saffee |
|            3 |      388 | 2025-02-09 | Imperial Esports | L   | 0.026      | -            | -                | -                | -         |    -0.62 | drop, exit, insani, Lucaozy, saffee |
|            2 |      400 | 2025-02-09 | Sharks Esports   | W   | 0.025      | 0.143        | 0.046 (0.000)    | 0.564 (0.002)    | 0 (0.000) |     0.14 | drop, exit, insani, Lucaozy, saffee |
|            1 |      448 | 2025-02-08 | Legacy           | W   | 0.018      | 0.143        | 0.009 (0.000)    | 0.355 (0.001)    | 0 (0.000) |     0.07 | drop, exit, insani, Lucaozy, saffee |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,217.88)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.23) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      0.118 | $18,750.00     | $2,217.88       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
