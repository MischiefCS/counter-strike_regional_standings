### Roster Details<br />
Team Name: Team Vitality<br />
Roster: apEX, flameZ, mezii, ropz, ZywOo<br />
Global Rank: [6](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [6]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  1854.3<br />
<br />
Final Rank Value (1854.3) = Starting Rank Value (1811.7) + Head To Head Adjustments (42.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.616[<sup>2</sup>](#table1)
- Opponent Network: 0.196[<sup>2</sup>](#table1)
- LAN Wins: 0.779[<sup>2</sup>](#table1)

The average of these factors is 0.648<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1811.7
- 400 + ( ( 0.648 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 1811.7


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
|           15 |      402 | 2025-02-09 | Team Spirit  | W   | 0.631      | 1.000        | 1.000 (0.631)    | 0.704 (0.444)    | 1 (0.631) |    13.46 | apEX, flameZ, mezii, ropz, ZywOo  |
|           14 |      461 | 2025-02-08 | The MongolZ  | W   | 0.624      | 1.000        | 0.879 (0.549)    | 0.520 (0.325)    | 1 (0.624) |    10.42 | apEX, flameZ, mezii, ropz, ZywOo  |
|           13 |      579 | 2025-02-04 | Virtus.pro   | W   | 0.598      | 1.000        | 0.444 (0.265)    | 0.456 (0.272)    | 1 (0.598) |     4.74 | apEX, flameZ, mezii, ropz, ZywOo  |
|           12 |      597 | 2025-02-02 | FaZe Clan    | W   | 0.585      | 1.000        | 1.000 (0.585)    | 0.508 (0.297)    | 1 (0.585) |    11.98 | apEX, flameZ, mezii, ropz, ZywOo  |
|           11 |      617 | 2025-02-01 | 3DMAX        | W   | 0.577      | 1.000        | 0.310 (0.179)    | 0.471 (0.271)    | 1 (0.577) |     2.54 | apEX, flameZ, mezii, ropz, ZywOo  |
|           10 |      663 | 2025-01-24 | Eternal Fire | L   | 0.524      | -            | -                | -                | -         |    -5.19 | apEX, flameZ, mezii, ropz, ZywOo  |
|            9 |      669 | 2025-01-19 | Virtus.pro   | W   | 0.492      | 0.363        | 0.444 (0.079)    | 0.456 (0.081)    | -         |     3.92 | apEX, flameZ, mezii, ropz, ZywOo  |
|            8 |      684 | 2025-01-15 | Metizport    | W   | 0.465      | 0.363        | -                | 0.307 (0.052)    | -         |     0.05 | apEX, flameZ, mezii, ropz, ZywOo  |
|            7 |      903 | 2024-12-13 | FaZe Clan    | L   | 0.243      | -            | -                | -                | -         |    -2.49 | apEX, flameZ, mezii, Spinx, ZywOo |
|            6 |     1025 | 2024-12-05 | MIBR         | W   | 0.195      | 1.000        | 0.177 (0.034)    | 0.386 (0.075)    | 1 (0.195) |     0.32 | apEX, flameZ, mezii, Spinx, ZywOo |
|            5 |     1053 | 2024-12-05 | FURIA        | W   | 0.189      | 1.000        | 0.094 (0.018)    | 0.279 (0.053)    | 1 (0.189) |     0.20 | apEX, flameZ, mezii, Spinx, ZywOo |
|            4 |     1060 | 2024-12-04 | GamerLegion  | W   | 0.188      | 1.000        | 0.166 (0.031)    | 0.491 (0.092)    | 1 (0.188) |     0.75 | apEX, flameZ, mezii, Spinx, ZywOo |
|            3 |     1387 | 2024-11-18 | FaZe Clan    | W   | 0.076      | 0.143        | 1.000 (0.011)    | -                | 1 (0.076) |     1.64 | apEX, flameZ, mezii, Spinx, ZywOo |
|            2 |     1407 | 2024-11-17 | BetBoom Team | W   | 0.070      | -            | -                | -                | 1 (0.070) |     0.01 | apEX, flameZ, mezii, Spinx, ZywOo |
|            1 |     1419 | 2024-11-16 | GamerLegion  | W   | 0.068      | -            | -                | -                | -         |     0.27 | apEX, flameZ, mezii, Spinx, ZywOo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($265,977.78)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-09 |      0.631 | $400,000.00    | $252,444.44     |
| 2025-01-26 |      0.537 | $3,750.00      | $2,015.63       |
| 2024-12-15 |      0.256 | $45,000.00     | $11,517.71      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
