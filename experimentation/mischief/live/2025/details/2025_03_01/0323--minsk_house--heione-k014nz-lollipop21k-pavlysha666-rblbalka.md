### Roster Details<br />
Team Name: Minsk House<br />
Roster: heione, K014NZ, lollipop21k, pavlysha666, rblbalka<br />
Global Rank: [323](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [183]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  487.1<br />
<br />
Final Rank Value (487.1) = Starting Rank Value (491.8) + Head To Head Adjustments (-4.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.182[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.047<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 491.8
- 400 + ( ( 0.047 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 491.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      160 | 2025-02-21 | BASEMENT BOYS        | L   | 1.000      | -            | -                | -                | -         |   -17.98 | heione, K014NZ, lollipop21k, pavlysha666, rblbalka |
|            6 |      164 | 2025-02-21 | Astralis Talent      | W   | 1.000      | 0.143        | 0.002 (0.000)    | 0.404 (0.058)    | 0 (0.000) |    22.64 | heione, K014NZ, lollipop21k, pavlysha666, rblbalka |
|            5 |      173 | 2025-02-21 | VOLT (European team) | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    12.17 | heione, K014NZ, lollipop21k, pavlysha666, rblbalka |
|            4 |      639 | 2025-02-07 | S8 x SoulGame        | L   | 1.000      | -            | -                | -                | -         |   -18.77 | heione, K014NZ, lollipop21k, pavlysha666, rblbalka |
|            3 |      857 | 2025-02-03 | Nuclear TigeRES      | L   | 1.000      | -            | -                | -                | -         |    -9.71 | heione, K014NZ, lollipop21k, pavlysha666, rblbalka |
|            2 |      860 | 2025-02-03 | IMMORTALIZED         | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    11.50 | heione, K014NZ, lollipop21k, pavlysha666, rblbalka |
|            1 |     1301 | 2024-12-20 | K27                  | L   | 0.727      | -            | -                | -                | -         |    -4.56 | K014NZ, lollipop21k, mds, pavlysha666, znxxX       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
