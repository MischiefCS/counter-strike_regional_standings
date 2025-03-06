### Roster Details<br />
Team Name: BadGuys<br />
Roster: hAdji, Patti, Sapec, VLDN, Woro2k<br />
Global Rank: [105](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [69]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  518.6<br />
<br />
Final Rank Value (518.6) = Starting Rank Value (516.1) + Head To Head Adjustments (2.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.197[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.050<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 516.1
- 400 + ( ( 0.050 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 516.1


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
|            6 |      710 | 2025-01-09 | KONO.ECF         | L   | 0.238      | -            | -                | -                | -         |    -3.54 | hAdji, Patti, Sapec, VLDN, Woro2k |
|            5 |      714 | 2025-01-08 | FLuffy Gangsters | W   | 0.232      | 0.417        | 0.000 (0.000)    | 0.073 (0.007)    | 0 (0.000) |     3.27 | hAdji, Patti, Sapec, VLDN, Woro2k |
|            4 |      722 | 2025-01-06 | WOPA Esport      | W   | 0.217      | 0.417        | 0.009 (0.001)    | 0.205 (0.019)    | 0 (0.000) |     5.15 | hAdji, Patti, Sapec, VLDN, Woro2k |
|            3 |      725 | 2025-01-05 | Los kogutos      | L   | 0.210      | -            | -                | -                | -         |    -4.37 | hAdji, Patti, Sapec, VLDN, Woro2k |
|            2 |      734 | 2025-01-03 | ECSTATIC         | L   | 0.196      | -            | -                | -                | -         |    -1.31 | hAdji, Patti, Sapec, VLDN, Woro2k |
|            1 |      741 | 2024-12-28 | GenOne           | W   | 0.158      | 0.417        | 0.000 (0.000)    | 0.163 (0.011)    | 0 (0.000) |     3.35 | hAdji, Patti, Sapec, VLDN, Woro2k |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
