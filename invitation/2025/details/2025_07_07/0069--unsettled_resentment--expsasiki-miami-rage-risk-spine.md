### Roster Details<br />
Team Name: Unsettled Resentment<br />
Roster: expSasiKi, Miami, rage, risk, SPine<br />
Global Rank: [69](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_07_07.md)<br />
Regional Rank: [6]( ../../standings_asia_2025_07_07.md)<br />
<br />
Final Rank Value:  516.7<br />
<br />
Final Rank Value (516.7) = Starting Rank Value (520.6) + Head To Head Adjustments (-3.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.192[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.049<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 520.6
- 400 + ( ( 0.049 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 520.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |       30 | 2025-02-25 | DogEvil                   | L   | 0.322      | -            | -                | -                | -         |    -6.68 | expSasiKi, Miami, rage, risk, SPine |
|            7 |       48 | 2025-02-24 | Just Swing (Chinese team) | W   | 0.315      | 0.143        | 0.000 (0.000)    | 0.080 (0.004)    | 0 (0.000) |     3.24 | expSasiKi, Miami, rage, risk, SPine |
|            6 |       59 | 2025-02-24 | Change The Game           | L   | 0.310      | -            | -                | -                | -         |    -6.51 | expSasiKi, Miami, rage, risk, SPine |
|            5 |      319 | 2025-02-11 | Lynn Vision Gaming        | L   | 0.228      | -            | -                | -                | -         |    -4.83 | expSasiKi, Miami, rage, risk, SPine |
|            4 |      379 | 2025-02-09 | Gods Reign                | W   | 0.215      | 0.143        | 0.020 (0.001)    | 0.428 (0.013)    | 0 (0.000) |     6.65 | expSasiKi, Miami, rage, risk, SPine |
|            3 |      385 | 2025-02-09 | Shika                     | W   | 0.215      | 0.143        | 0.000 (0.000)    | 0.329 (0.010)    | 0 (0.000) |     2.28 | expSasiKi, Miami, rage, risk, SPine |
|            2 |      413 | 2025-02-08 | Gods Reign                | L   | 0.209      | -            | -                | -                | -         |    -0.13 | expSasiKi, Miami, rage, risk, SPine |
|            1 |      508 | 2025-02-06 | Shika                     | W   | 0.195      | 0.143        | 0.000 (0.000)    | 0.329 (0.009)    | 0 (0.000) |     2.08 | expSasiKi, Miami, rage, risk, SPine |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
