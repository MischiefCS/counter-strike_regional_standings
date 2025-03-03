### Roster Details<br />
Team Name: Al-Ittihad<br />
Roster: 0SAMAS, 0scar, dodz, Senpai, sry<br />
Global Rank: [227](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [33]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  645.3<br />
<br />
Final Rank Value (645.3) = Starting Rank Value (637.6) + Head To Head Adjustments (7.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.271[<sup>1</sup>](#table2)
- Bounty Collected: 0.210[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.122<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 637.6
- 400 + ( ( 0.122 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 637.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |       24 | 2025-02-26 | JiJieHao            | L   | 1.000      | -            | -                | -                | -         |   -14.21 | 0SAMAS, 0scar, dodz, Senpai, sry   |
|            9 |       27 | 2025-02-26 | Mindshock           | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.088 (0.013)    | 0 (0.000) |     6.50 | 0SAMAS, 0scar, dodz, Senpai, sry   |
|            8 |       40 | 2025-02-25 | JiJieHao            | L   | 1.000      | -            | -                | -                | -         |   -15.22 | 0SAMAS, 0scar, dodz, Senpai, sry   |
|            7 |       61 | 2025-02-24 | Mindshock           | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.088 (0.013)    | 0 (0.000) |     6.01 | 0SAMAS, 0scar, dodz, Senpai, sry   |
|            6 |     2189 | 2024-11-29 | Onyx Ravens         | W   | 0.586      | 0.143        | 0.018 (0.002)    | 0.161 (0.013)    | 0 (0.000) |    10.12 | 0SAMAS, 0scar, Dodal, EMSTAR, h0kz |
|            5 |     2309 | 2024-11-25 | RiseFromFallen      | W   | 0.559      | 0.143        | 0.000 (0.000)    | 0.030 (0.002)    | 0 (0.000) |     3.61 | 0SAMAS, 0scar, Dodal, EMSTAR, h0kz |
|            4 |     2365 | 2024-11-23 | Fire Flux Esports   | L   | 0.547      | -            | -                | -                | -         |    -4.21 | 0SAMAS, 0scar, Dodal, NAKO, ViTaL  |
|            3 |     2442 | 2024-11-22 | MAFE MA3LOM         | W   | 0.540      | 0.143        | 0.000 (0.000)    | 0.027 (0.002)    | 0 (0.000) |     5.57 | 0SAMAS, 0scar, Dodal, EMSTAR, h0kz |
|            2 |     2982 | 2024-11-08 | PULSE Esports       | W   | 0.448      | 0.143        | 0.003 (0.000)    | 0.025 (0.002)    | 0 (0.000) |     5.13 | 0SAMAS, 0scar, Dodal, NAKO, ViTaL  |
|            1 |     2994 | 2024-11-08 | GamerLegion Academy | W   | 0.446      | 0.143        | 0.000 (0.000)    | 0.077 (0.005)    | 0 (0.000) |     4.45 | 0SAMAS, 0scar, Dodal, NAKO, ViTaL  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($690.63)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      0.552 | $1,250.00      | $690.63         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
