### Roster Details<br />
Team Name: Team Vitality<br />
Roster: apEX, flameZ, mezii, ropz, ZywOo<br />
Global Rank: [2](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [2]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  1962.1<br />
<br />
Final Rank Value (1962.1) = Starting Rank Value (1929.2) + Head To Head Adjustments (32.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.734[<sup>2</sup>](#table1)
- Opponent Network: 0.406[<sup>2</sup>](#table1)
- LAN Wins: 0.926[<sup>2</sup>](#table1)

The average of these factors is 0.766<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1929.2
- 400 + ( ( 0.766 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 1929.2


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
|           26 |      524 | 2025-02-09 | Team Spirit  | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.600 (0.600)    | 1 (1.000) |    16.84 | apEX, flameZ, mezii, ropz, ZywOo  |
|           25 |      601 | 2025-02-08 | The MongolZ  | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.489 (0.489)    | 1 (1.000) |    11.29 | apEX, flameZ, mezii, ropz, ZywOo  |
|           24 |      777 | 2025-02-04 | Virtus.pro   | W   | 1.000      | 1.000        | 0.292 (0.292)    | 0.440 (0.440)    | 1 (1.000) |     6.62 | apEX, flameZ, mezii, ropz, ZywOo  |
|           23 |      797 | 2025-02-02 | FaZe Clan    | W   | 1.000      | 1.000        | 0.467 (0.467)    | 0.420 (0.420)    | 1 (1.000) |     9.00 | apEX, flameZ, mezii, ropz, ZywOo  |
|           22 |      824 | 2025-02-01 | 3DMAX        | W   | 1.000      | 1.000        | 0.302 (0.302)    | 0.544 (0.544)    | 1 (1.000) |     4.87 | apEX, flameZ, mezii, ropz, ZywOo  |
|           21 |      938 | 2025-01-24 | Eternal Fire | L   | 0.965      | -            | -                | -                | -         |   -15.17 | apEX, flameZ, mezii, ropz, ZywOo  |
|           20 |     1037 | 2025-01-19 | Virtus.pro   | W   | 0.933      | 1.000        | 0.292 (0.272)    | 0.440 (0.411)    | -         |     5.56 | apEX, flameZ, mezii, ropz, ZywOo  |
|           19 |     1052 | 2025-01-15 | Metizport    | W   | 0.906      | 1.000        | -                | 0.553 (0.501)    | -         |     0.74 | apEX, flameZ, mezii, ropz, ZywOo  |
|           18 |     3021 | 2024-11-18 | FaZe Clan    | W   | 0.517      | 1.000        | 0.467 (0.241)    | 0.420 (0.217)    | 1 (0.517) |     5.19 | apEX, flameZ, mezii, Spinx, ZywOo |
|           17 |     3076 | 2024-11-17 | BetBoom Team | W   | 0.511      | 1.000        | -                | 0.411 (0.210)    | 1 (0.511) |     0.35 | apEX, flameZ, mezii, Spinx, ZywOo |
|           16 |     3108 | 2024-11-16 | GamerLegion  | W   | 0.509      | 1.000        | -                | 0.448 (0.228)    | 1 (0.509) |     1.83 | apEX, flameZ, mezii, Spinx, ZywOo |
|           15 |     3935 | 2024-11-02 | G2 Esports   | L   | 0.410      | -            | -                | -                | -         |    -8.81 | apEX, flameZ, JACKZ, Spinx, ZywOo |
|           14 |     3994 | 2024-11-01 | MOUZ         | W   | 0.404      | 1.000        | 1.000 (0.404)    | -                | 1 (0.404) |     6.79 | apEX, flameZ, JACKZ, Spinx, ZywOo |
|           13 |     4039 | 2024-10-31 | Team Liquid  | W   | 0.398      | -            | -                | -                | 1 (0.398) |     0.29 | apEX, flameZ, JACKZ, Spinx, ZywOo |
|           12 |     4102 | 2024-10-30 | Team Spirit  | L   | 0.392      | -            | -                | -                | -         |    -4.99 | apEX, flameZ, JACKZ, Spinx, ZywOo |
|           11 |     5031 | 2024-10-11 | MOUZ         | L   | 0.266      | -            | -                | -                | -         |    -3.90 | apEX, flameZ, mezii, Spinx, ZywOo |
|           10 |     5129 | 2024-10-09 | Team Falcons | L   | 0.252      | -            | -                | -                | -         |    -4.06 | apEX, flameZ, mezii, Spinx, ZywOo |
|            9 |     5212 | 2024-10-08 | The MongolZ  | W   | 0.245      | 1.000        | 1.000 (0.245)    | -                | -         |     2.83 | apEX, flameZ, mezii, Spinx, ZywOo |
|            8 |     5264 | 2024-10-07 | 9z Team      | W   | 0.239      | -            | -                | -                | -         |     0.01 | apEX, flameZ, mezii, Spinx, ZywOo |
|            7 |     5836 | 2024-09-28 | G2 Esports   | L   | 0.178      | -            | -                | -                | -         |    -3.98 | apEX, flameZ, mezii, Spinx, ZywOo |
|            6 |     5970 | 2024-09-26 | Team Liquid  | W   | 0.166      | -            | -                | -                | -         |     0.11 | apEX, flameZ, mezii, Spinx, ZywOo |
|            5 |     6083 | 2024-09-25 | Astralis     | W   | 0.159      | 1.000        | 0.719 (0.114)    | -                | -         |     2.95 | apEX, flameZ, mezii, Spinx, ZywOo |
|            4 |     6482 | 2024-09-19 | Eternal Fire | L   | 0.119      | -            | -                | -                | -         |    -1.67 | apEX, flameZ, mezii, Spinx, ZywOo |
|            3 |     6716 | 2024-09-15 | Team Liquid  | W   | 0.092      | -            | -                | -                | -         |     0.06 | apEX, flameZ, mezii, Spinx, ZywOo |
|            2 |     6928 | 2024-09-12 | FURIA        | W   | 0.072      | -            | -                | -                | -         |     0.03 | apEX, flameZ, mezii, Spinx, ZywOo |
|            1 |     6994 | 2024-09-11 | ATOX Esports | W   | 0.064      | -            | -                | -                | -         |     0.14 | apEX, flameZ, mezii, Spinx, ZywOo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($453,734.28)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-09 |      1.000 | $400,000.00    | $400,000.00     |
| 2025-01-26 |      0.979 | $3,750.00      | $3,670.23       |
| 2024-11-03 |      0.417 | $85,000.00     | $35,450.12      |
| 2024-10-13 |      0.279 | $10,000.00     | $2,790.05       |
| 2024-09-29 |      0.185 | $40,000.00     | $7,393.52       |
| 2024-09-22 |      0.138 | $32,000.00     | $4,430.37       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
