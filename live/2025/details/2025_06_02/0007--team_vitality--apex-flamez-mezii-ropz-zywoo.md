### Roster Details<br />
Team Name: Team Vitality<br />
Roster: apEX, flameZ, mezii, ropz, ZywOo<br />
Global Rank: [7](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [7]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  1807.1<br />
<br />
Final Rank Value (1807.1) = Starting Rank Value (1775.5) + Head To Head Adjustments (31.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.544[<sup>2</sup>](#table1)
- Opponent Network: 0.114[<sup>2</sup>](#table1)
- LAN Wins: 0.717[<sup>2</sup>](#table1)

The average of these factors is 0.594<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1775.5
- 400 + ( ( 0.594 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 1775.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      402 | 2025-02-09 | Team Spirit  | W   | 0.444      | 1.000        | 1.000 (0.444)    | 0.634 (0.282)    | 1 (0.444) |    10.09 | apEX, flameZ, mezii, ropz, ZywOo  |
|           11 |      461 | 2025-02-08 | The MongolZ  | W   | 0.437      | 1.000        | 0.823 (0.360)    | 0.490 (0.214)    | 1 (0.437) |     7.24 | apEX, flameZ, mezii, ropz, ZywOo  |
|           10 |      579 | 2025-02-04 | Virtus.pro   | W   | 0.411      | 1.000        | 0.420 (0.173)    | 0.458 (0.188)    | 1 (0.411) |     4.14 | apEX, flameZ, mezii, ropz, ZywOo  |
|            9 |      597 | 2025-02-02 | FaZe Clan    | W   | 0.398      | 1.000        | 0.792 (0.315)    | 0.483 (0.193)    | 1 (0.398) |     8.26 | apEX, flameZ, mezii, ropz, ZywOo  |
|            8 |      617 | 2025-02-01 | 3DMAX        | W   | 0.390      | 1.000        | 0.288 (0.112)    | 0.480 (0.187)    | 1 (0.390) |     1.99 | apEX, flameZ, mezii, ropz, ZywOo  |
|            7 |      663 | 2025-01-24 | Eternal Fire | L   | 0.338      | -            | -                | -                | -         |    -2.79 | apEX, flameZ, mezii, ropz, ZywOo  |
|            6 |      669 | 2025-01-19 | Virtus.pro   | W   | 0.305      | 0.363        | 0.420 (0.046)    | 0.458 (0.051)    | 0 (0.000) |     3.15 | apEX, flameZ, mezii, ropz, ZywOo  |
|            5 |      684 | 2025-01-15 | Metizport    | W   | 0.279      | 0.363        | 0.010 (0.001)    | 0.209 (0.021)    | 0 (0.000) |     0.02 | apEX, flameZ, mezii, ropz, ZywOo  |
|            4 |      903 | 2024-12-13 | FaZe Clan    | L   | 0.056      | -            | -                | -                | -         |    -0.58 | apEX, flameZ, mezii, Spinx, ZywOo |
|            3 |     1025 | 2024-12-05 | MIBR         | W   | 0.008      | 1.000        | 0.153 (0.001)    | 0.317 (0.003)    | 1 (0.008) |     0.01 | apEX, flameZ, mezii, Spinx, ZywOo |
|            2 |     1053 | 2024-12-05 | FURIA        | W   | 0.002      | 1.000        | 0.066 (0.000)    | 0.193 (0.000)    | 1 (0.002) |     0.00 | apEX, flameZ, mezii, Spinx, ZywOo |
|            1 |     1060 | 2024-12-04 | GamerLegion  | W   | 0.001      | 1.000        | 0.137 (0.000)    | 0.447 (0.001)    | 1 (0.001) |     0.00 | apEX, flameZ, mezii, Spinx, ZywOo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($182,211.11)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-09 |      0.444 | $400,000.00    | $177,777.78     |
| 2025-01-26 |      0.351 | $3,750.00      | $1,315.63       |
| 2024-12-15 |      0.069 | $45,000.00     | $3,117.71       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
