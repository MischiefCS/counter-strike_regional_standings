### Roster Details<br />
Team Name: Team Vitality<br />
Roster: apEX, flameZ, mezii, ropz, ZywOo<br />
Global Rank: [8](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [7]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  1752.5<br />
<br />
Final Rank Value (1752.5) = Starting Rank Value (1738.3) + Head To Head Adjustments (14.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.448[<sup>2</sup>](#table1)
- Opponent Network: 0.045[<sup>2</sup>](#table1)
- LAN Wins: 0.677[<sup>2</sup>](#table1)

The average of these factors is 0.542<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1738.3
- 400 + ( ( 0.542 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 1738.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      402 | 2025-02-09 | Team Spirit  | W   | 0.211      | 1.000        | 1.000 (0.211)    | 0.489 (0.103)    | 1 (0.211) |     4.55 | apEX, flameZ, mezii, ropz, ZywOo |
|            7 |      461 | 2025-02-08 | The MongolZ  | W   | 0.204      | 1.000        | 0.732 (0.149)    | 0.505 (0.103)    | 1 (0.204) |     3.75 | apEX, flameZ, mezii, ropz, ZywOo |
|            6 |      579 | 2025-02-04 | Virtus.pro   | W   | 0.177      | 1.000        | 0.377 (0.067)    | 0.442 (0.078)    | 1 (0.177) |     1.81 | apEX, flameZ, mezii, ropz, ZywOo |
|            5 |      597 | 2025-02-02 | FaZe Clan    | W   | 0.165      | 1.000        | 0.646 (0.107)    | 0.464 (0.077)    | 1 (0.165) |     3.45 | apEX, flameZ, mezii, ropz, ZywOo |
|            4 |      617 | 2025-02-01 | 3DMAX        | W   | 0.157      | 1.000        | 0.263 (0.041)    | 0.486 (0.076)    | 1 (0.157) |     0.90 | apEX, flameZ, mezii, ropz, ZywOo |
|            3 |      663 | 2025-01-24 | Eternal Fire | L   | 0.104      | -            | -                | -                | -         |    -0.98 | apEX, flameZ, mezii, ropz, ZywOo |
|            2 |      669 | 2025-01-19 | Virtus.pro   | W   | 0.072      | 0.363        | 0.377 (0.010)    | 0.442 (0.011)    | 0 (0.000) |     0.73 | apEX, flameZ, mezii, ropz, ZywOo |
|            1 |      684 | 2025-01-15 | Metizport    | W   | 0.045      | 0.363        | 0.000 (0.000)    | 0.173 (0.003)    | 0 (0.000) |     0.00 | apEX, flameZ, mezii, ropz, ZywOo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($84,885.07)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-09 |      0.211 | $400,000.00    | $84,444.44      |
| 2025-01-26 |      0.117 | $3,750.00      | $440.63         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
