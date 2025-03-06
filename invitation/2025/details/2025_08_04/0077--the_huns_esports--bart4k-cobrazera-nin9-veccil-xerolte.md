### Roster Details<br />
Team Name: The Huns Esports<br />
Roster: Bart4k, cobrazera, nin9, Veccil, xerolte<br />
Global Rank: [77](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_08_04.md)<br />
Regional Rank: [14]( ../../standings_asia_2025_08_04.md)<br />
<br />
Final Rank Value:  400.4<br />
<br />
Final Rank Value (400.4) = Starting Rank Value (401.0) + Head To Head Adjustments (-0.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 401.0
- 400 + ( ( 0.000 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 401.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |       35 | 2025-02-25 | ATOX Esports       | L   | 0.134      | -            | -                | -                | -         |    -1.36 | Bart4k, cobrazera, nin9, Veccil, xerolte |
|           10 |       42 | 2025-02-25 | Chinggis Warriors  | L   | 0.130      | -            | -                | -                | -         |    -2.04 | Bart4k, cobrazera, nin9, Veccil, xerolte |
|            9 |       69 | 2025-02-24 | Eruption           | W   | 0.122      | 0.143        | 0.000 (0.000)    | 0.442 (0.008)    | 0 (0.000) |     1.92 | Bart4k, cobrazera, nin9, Veccil, xerolte |
|            8 |      297 | 2025-02-13 | ATOX Esports       | L   | 0.050      | -            | -                | -                | -         |    -0.51 | Bart4k, cobrazera, nin9, Veccil, xerolte |
|            7 |      299 | 2025-02-12 | Lynn Vision Gaming | W   | 0.049      | 0.143        | 0.000 (0.000)    | 0.249 (0.002)    | 0 (0.000) |     0.77 | Bart4k, cobrazera, nin9, Veccil, xerolte |
|            6 |      317 | 2025-02-12 | Lynn Vision Gaming | L   | 0.043      | -            | -                | -                | -         |    -0.67 | Bart4k, cobrazera, nin9, Veccil, xerolte |
|            5 |      320 | 2025-02-11 | Chinggis Warriors  | W   | 0.041      | 0.143        | 0.000 (0.000)    | 0.702 (0.004)    | 0 (0.000) |     0.65 | Bart4k, cobrazera, nin9, Veccil, xerolte |
|            4 |      336 | 2025-02-11 | ATOX Esports       | L   | 0.037      | -            | -                | -                | -         |    -0.38 | Bart4k, cobrazera, nin9, Veccil, xerolte |
|            3 |      343 | 2025-02-11 | Lynn Vision Gaming | W   | 0.036      | 0.143        | 0.000 (0.000)    | 0.249 (0.001)    | 0 (0.000) |     0.56 | Bart4k, cobrazera, nin9, Veccil, xerolte |
|            2 |      467 | 2025-02-08 | IHC Esports        | W   | 0.016      | 0.143        | 0.000 (0.000)    | 0.024 (0.000)    | 0 (0.000) |     0.26 | Bart4k, cobrazera, nin9, Veccil, xerolte |
|            1 |      475 | 2025-02-08 | Vizora Esports     | W   | 0.016      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.25 | Bart4k, cobrazera, nin9, Veccil, xerolte |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
