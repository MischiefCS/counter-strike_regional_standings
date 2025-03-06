### Roster Details<br />
Team Name: BadGuys<br />
Roster: hAdji, Patti, Sapec, VLDN, Woro2k<br />
Global Rank: [154](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [103]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  547.1<br />
<br />
Final Rank Value (547.1) = Starting Rank Value (534.5) + Head To Head Adjustments (12.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.234[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.062<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 534.5
- 400 + ( ( 0.062 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 534.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      710 | 2025-01-09 | KONO.ECF         | L   | 0.424      | -            | -                | -                | -         |    -6.24 | hAdji, Patti, Sapec, VLDN, Woro2k |
|            5 |      714 | 2025-01-08 | FLuffy Gangsters | W   | 0.418      | 0.417        | 0.002 (0.000)    | 0.209 (0.036)    | 0 (0.000) |     8.50 | hAdji, Patti, Sapec, VLDN, Woro2k |
|            4 |      722 | 2025-01-06 | WOPA Esport      | W   | 0.403      | 0.417        | 0.024 (0.004)    | 0.346 (0.058)    | 0 (0.000) |     9.81 | hAdji, Patti, Sapec, VLDN, Woro2k |
|            3 |      725 | 2025-01-05 | Los kogutos      | L   | 0.397      | -            | -                | -                | -         |    -5.29 | hAdji, Patti, Sapec, VLDN, Woro2k |
|            2 |      734 | 2025-01-03 | ECSTATIC         | L   | 0.383      | -            | -                | -                | -         |    -2.19 | hAdji, Patti, Sapec, VLDN, Woro2k |
|            1 |      741 | 2024-12-28 | GenOne           | W   | 0.345      | 0.417        | 0.007 (0.001)    | 0.268 (0.039)    | 0 (0.000) |     8.03 | hAdji, Patti, Sapec, VLDN, Woro2k |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
