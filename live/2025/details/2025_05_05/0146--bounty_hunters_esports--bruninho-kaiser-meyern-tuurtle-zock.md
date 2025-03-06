### Roster Details<br />
Team Name: Bounty Hunters Esports<br />
Roster: Bruninho, KAISER, meyern, Tuurtle, zock<br />
Global Rank: [146](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_05_05.md)<br />
Regional Rank: [36]( ../../standings_americas_2025_05_05.md)<br />
<br />
Final Rank Value:  564.0<br />
<br />
Final Rank Value (564.0) = Starting Rank Value (540.6) + Head To Head Adjustments (23.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.239[<sup>2</sup>](#table1)
- Opponent Network: 0.020[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.065<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 540.6
- 400 + ( ( 0.065 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 540.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      153 | 2025-02-20 | Sharks Esports | L   | 0.706      | -            | -                | -                | -         |    -3.18 | Bruninho, KAISER, meyern, Tuurtle, zock |
|            7 |      224 | 2025-02-15 | Dusty Roots    | W   | 0.673      | 0.371        | 0.010 (0.003)    | 0.292 (0.073)    | 0 (0.000) |    14.79 | Bruninho, KAISER, meyern, Tuurtle, zock |
|            6 |      265 | 2025-02-14 | KRÜ Esports    | W   | 0.665      | 0.371        | 0.000 (0.000)    | 0.144 (0.035)    | 0 (0.000) |     6.41 | Bruninho, KAISER, meyern, Tuurtle, zock |
|            5 |      328 | 2025-02-11 | AdalYamigos    | W   | 0.646      | 0.371        | 0.000 (0.000)    | 0.208 (0.050)    | 0 (0.000) |     9.16 | Bruninho, KAISER, meyern, Tuurtle, zock |
|            4 |      348 | 2025-02-10 | UNO MILLE      | L   | 0.640      | -            | -                | -                | -         |   -11.07 | Bruninho, KAISER, meyern, Tuurtle, zock |
|            3 |      512 | 2025-02-06 | BESTIA         | L   | 0.613      | -            | -                | -                | -         |    -3.69 | Bruninho, KAISER, meyern, Tuurtle, zock |
|            2 |      536 | 2025-02-05 | ODDIK          | L   | 0.606      | -            | -                | -                | -         |    -4.56 | Bruninho, KAISER, meyern, Tuurtle, zock |
|            1 |      543 | 2025-02-05 | BESTIA         | W   | 0.605      | 0.143        | 0.046 (0.004)    | 0.430 (0.037)    | 0 (0.000) |    15.54 | Bruninho, KAISER, meyern, Tuurtle, zock |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
