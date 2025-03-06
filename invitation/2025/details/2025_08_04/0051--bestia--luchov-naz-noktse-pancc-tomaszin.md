### Roster Details<br />
Team Name: BESTIA<br />
Roster: luchov, naz, Noktse, pancc, tomaszin<br />
Global Rank: [51](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_04.md)<br />
Regional Rank: [12]( ../../standings_americas_2025_08_04.md)<br />
<br />
Final Rank Value:  507.6<br />
<br />
Final Rank Value (507.6) = Starting Rank Value (507.8) + Head To Head Adjustments (-0.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.164[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.041<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 507.8
- 400 + ( ( 0.041 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 507.8


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
|            8 |      157 | 2025-02-20 | Swingers               | L   | 0.098      | -            | -                | -                | -         |    -1.09 | luchov, naz, Noktse, pancc, tomaszin |
|            7 |      427 | 2025-02-08 | Legacy                 | L   | 0.020      | -            | -                | -                | -         |    -0.13 | luchov, naz, Noktse, pancc, tomaszin |
|            6 |      430 | 2025-02-08 | ODDIK                  | W   | 0.019      | 0.143        | 0.017 (0.000)    | 0.476 (0.001)    | 0 (0.000) |     0.48 | luchov, naz, Noktse, pancc, tomaszin |
|            5 |      458 | 2025-02-08 | Sharks Esports         | L   | 0.018      | -            | -                | -                | -         |    -0.08 | luchov, naz, Noktse, pancc, tomaszin |
|            4 |      484 | 2025-02-07 | Game Hunters           | W   | 0.013      | 0.143        | 0.000 (0.000)    | 0.139 (0.000)    | 0 (0.000) |     0.15 | luchov, naz, Noktse, pancc, tomaszin |
|            3 |      493 | 2025-02-07 | ODDIK                  | W   | 0.011      | 0.143        | 0.017 (0.000)    | 0.476 (0.001)    | 0 (0.000) |     0.29 | luchov, naz, Noktse, pancc, tomaszin |
|            2 |      512 | 2025-02-06 | Bounty Hunters Esports | W   | 0.006      | 0.143        | 0.000 (0.000)    | 0.247 (0.000)    | 0 (0.000) |     0.07 | luchov, naz, Noktse, pancc, tomaszin |
|            1 |      520 | 2025-02-06 | Swingers               | W   | 0.005      | 0.143        | 0.009 (0.000)    | 0.385 (0.000)    | 0 (0.000) |     0.10 | luchov, naz, Noktse, pancc, tomaszin |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
