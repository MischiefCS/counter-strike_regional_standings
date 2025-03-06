### Roster Details<br />
Team Name: BESTIA<br />
Roster: luchov, naz, Noktse, pancc, tomaszin<br />
Global Rank: [43](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_06_02.md)<br />
Regional Rank: [10]( ../../standings_americas_2025_06_02.md)<br />
<br />
Final Rank Value:  783.2<br />
<br />
Final Rank Value (783.2) = Starting Rank Value (787.9) + Head To Head Adjustments (-4.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.411[<sup>1</sup>](#table2)
- Bounty Collected: 0.234[<sup>2</sup>](#table1)
- Opponent Network: 0.025[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.167<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 787.9
- 400 + ( ( 0.167 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 787.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      157 | 2025-02-20 | Swingers               | L   | 0.518      | -            | -                | -                | -         |    -9.83 | luchov, naz, Noktse, pancc, tomaszin |
|           11 |      427 | 2025-02-08 | Legacy                 | L   | 0.440      | -            | -                | -                | -         |    -6.94 | luchov, naz, Noktse, pancc, tomaszin |
|           10 |      430 | 2025-02-08 | ODDIK                  | W   | 0.439      | 0.143        | 0.009 (0.001)    | 0.591 (0.037)    | 0 (0.000) |     5.65 | luchov, naz, Noktse, pancc, tomaszin |
|            9 |      458 | 2025-02-08 | Sharks Esports         | L   | 0.438      | -            | -                | -                | -         |    -6.81 | luchov, naz, Noktse, pancc, tomaszin |
|            8 |      484 | 2025-02-07 | Game Hunters           | W   | 0.433      | 0.143        | 0.000 (0.000)    | 0.205 (0.013)    | 0 (0.000) |     1.97 | luchov, naz, Noktse, pancc, tomaszin |
|            7 |      493 | 2025-02-07 | ODDIK                  | W   | 0.431      | 0.143        | 0.009 (0.001)    | 0.591 (0.036)    | 0 (0.000) |     5.62 | luchov, naz, Noktse, pancc, tomaszin |
|            6 |      512 | 2025-02-06 | Bounty Hunters Esports | W   | 0.426      | 0.143        | 0.000 (0.000)    | 0.335 (0.020)    | 0 (0.000) |     2.70 | luchov, naz, Noktse, pancc, tomaszin |
|            5 |      520 | 2025-02-06 | Swingers               | W   | 0.425      | 0.143        | 0.005 (0.000)    | 0.352 (0.021)    | 0 (0.000) |     5.39 | luchov, naz, Noktse, pancc, tomaszin |
|            4 |      543 | 2025-02-05 | Bounty Hunters Esports | L   | 0.418      | -            | -                | -                | -         |   -10.60 | luchov, naz, Noktse, pancc, tomaszin |
|            3 |      692 | 2025-01-12 | Legacy                 | W   | 0.259      | 0.384        | 0.027 (0.003)    | 0.668 (0.067)    | 0 (0.000) |     3.99 | luchov, naz, Noktse, pancc, tomaszin |
|            2 |      695 | 2025-01-11 | Team Solid             | W   | 0.252      | 0.384        | 0.012 (0.001)    | 0.399 (0.039)    | 0 (0.000) |     3.37 | luchov, naz, Noktse, pancc, tomaszin |
|            1 |      699 | 2025-01-10 | Elevate                | W   | 0.246      | 0.384        | 0.000 (0.000)    | 0.198 (0.019)    | 0 (0.000) |     0.81 | luchov, naz, Noktse, pancc, tomaszin |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,239.58)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-01-12 |      0.259 | $12,500.00     | $3,239.58       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
