### Roster Details<br />
Team Name: BadGuys<br />
Roster: hAdji, Patti, Sapec, VLDN, Woro2k<br />
Global Rank: [211](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [127]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  615.6<br />
<br />
Final Rank Value (615.6) = Starting Rank Value (574.4) + Head To Head Adjustments (41.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.280[<sup>2</sup>](#table1)
- Opponent Network: 0.086[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.092<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 574.4
- 400 + ( ( 0.092 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 574.4


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
|            6 |      710 | 2025-01-09 | KONO.ECF         | L   | 0.859      | -            | -                | -                | -         |    -9.80 | hAdji, Patti, Sapec, VLDN, Woro2k |
|            5 |      714 | 2025-01-08 | FLuffy Gangsters | W   | 0.853      | 0.774        | 0.005 (0.004)    | 0.419 (0.277)    | 0 (0.000) |    17.60 | hAdji, Patti, Sapec, VLDN, Woro2k |
|            4 |      722 | 2025-01-06 | WOPA Esport      | W   | 0.838      | 0.777        | 0.028 (0.018)    | 0.499 (0.325)    | 0 (0.000) |    19.95 | hAdji, Patti, Sapec, VLDN, Woro2k |
|            3 |      725 | 2025-01-05 | Los kogutos      | L   | 0.832      | -            | -                | -                | -         |    -3.79 | hAdji, Patti, Sapec, VLDN, Woro2k |
|            2 |      734 | 2025-01-03 | ECSTATIC         | L   | 0.818      | -            | -                | -                | -         |    -1.97 | hAdji, Patti, Sapec, VLDN, Woro2k |
|            1 |      741 | 2024-12-28 | GenOne           | W   | 0.780      | 0.786        | 0.009 (0.005)    | 0.424 (0.260)    | 0 (0.000) |    19.21 | hAdji, Patti, Sapec, VLDN, Woro2k |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
