### Roster Details<br />
Team Name: Bounty Hunters Esports<br />
Roster: Bruninho, KAISER, meyern, Tuurtle, zock<br />
Global Rank: [70](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_04.md)<br />
Regional Rank: [15]( ../../standings_americas_2025_08_04.md)<br />
<br />
Final Rank Value:  402.4<br />
<br />
Final Rank Value (402.4) = Starting Rank Value (400.3) + Head To Head Adjustments (2.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.3
- 400 + ( ( 0.000 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 400.3


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
|            6 |      153 | 2025-02-20 | Sharks Esports | L   | 0.099      | -            | -                | -                | -         |    -0.28 | Bruninho, KAISER, meyern, Tuurtle, zock |
|            5 |      224 | 2025-02-15 | Dusty Roots    | W   | 0.066      | 0.371        | 0.000 (0.000)    | 0.114 (0.003)    | 0 (0.000) |     1.35 | Bruninho, KAISER, meyern, Tuurtle, zock |
|            4 |      265 | 2025-02-14 | KRÜ Esports    | W   | 0.058      | 0.371        | 0.000 (0.000)    | 0.059 (0.001)    | 0 (0.000) |     0.92 | Bruninho, KAISER, meyern, Tuurtle, zock |
|            3 |      328 | 2025-02-11 | AdalYamigos    | W   | 0.039      | 0.371        | 0.000 (0.000)    | 0.086 (0.001)    | 0 (0.000) |     0.62 | Bruninho, KAISER, meyern, Tuurtle, zock |
|            2 |      348 | 2025-02-10 | UNO MILLE      | L   | 0.033      | -            | -                | -                | -         |    -0.53 | Bruninho, KAISER, meyern, Tuurtle, zock |
|            1 |      512 | 2025-02-06 | BESTIA         | L   | 0.006      | -            | -                | -                | -         |    -0.07 | Bruninho, KAISER, meyern, Tuurtle, zock |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
