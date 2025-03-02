### Roster Details<br />
Team Name: TYLOO<br />
Roster: Attacker, JamYoung, Jee, Mercury, Moseyuh<br />
Global Rank: [125](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [12]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  788.9<br />
<br />
Final Rank Value (788.9) = Starting Rank Value (730.4) + Head To Head Adjustments (58.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.365[<sup>1</sup>](#table2)
- Bounty Collected: 0.267[<sup>2</sup>](#table1)
- Opponent Network: 0.039[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.168<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 730.4
- 400 + ( ( 0.168 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 730.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           25 |      317 | 2025-02-11 | Lynn Vision Gaming      | L   | 1.000      | -            | -                | -                | -         |   -15.02 | Attacker, JamYoung, Jee, Mercury, Moseyuh |
|           24 |      324 | 2025-02-11 | ATOX Esports            | L   | 1.000      | -            | -                | -                | -         |    -5.28 | Attacker, JamYoung, Jee, Mercury, Moseyuh |
|           23 |      327 | 2025-02-10 | Rare Atom               | L   | 1.000      | -            | -                | -                | -         |    -8.91 | Attacker, JamYoung, Jee, Mercury, Moseyuh |
|           22 |      464 | 2025-02-08 | DogEvil                 | W   | 1.000      | 0.143        | 0.024 (0.003)    | 0.625 (0.089)    | 0 (0.000) |    15.81 | Attacker, JamYoung, Jee, Mercury, Moseyuh |
|           21 |      469 | 2025-02-08 | Harizma                 | W   | 1.000      | 0.143        | -                | 0.475 (0.068)    | 0 (0.000) |    14.27 | Attacker, JamYoung, Jee, Mercury, Moseyuh |
|           20 |      539 | 2025-02-07 | The QUBE Esports        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.22 | Attacker, JamYoung, Jee, Mercury, Moseyuh |
|           19 |     2257 | 2024-11-27 | Lynn Vision Gaming      | W   | 0.572      | 0.143        | 0.017 (0.001)    | 0.404 (0.033)    | 0 (0.000) |     9.85 | aumaN, Jee, Mercury, Moseyuh, Starry      |
|           18 |     2265 | 2024-11-26 | Ex-GR Gaming            | W   | 0.570      | 0.143        | 0.011 (0.001)    | -                | 0 (0.000) |     7.19 | aumaN, Jee, Mercury, Moseyuh, Starry      |
|           17 |     2314 | 2024-11-26 | DogEvil                 | L   | 0.565      | -            | -                | -                | -         |    -8.61 | aumaN, Jee, Mercury, Moseyuh, Starry      |
|           16 |     2318 | 2024-11-26 | Teamwork (Chinese team) | W   | 0.564      | 0.143        | 0.031 (0.003)    | 0.151 (0.012)    | 0 (0.000) |     6.78 | aumaN, Jee, Mercury, Moseyuh, Starry      |
|           15 |     3618 | 2024-11-03 | Lynn Vision Gaming      | W   | 0.411      | 0.417        | 0.017 (0.003)    | 0.404 (0.069)    | 0 (0.000) |     7.57 | JamYoung, Jee, Mercury, Moseyuh, Starry   |
|           14 |     3678 | 2024-11-02 | ATOX Esports            | W   | 0.405      | 0.417        | 0.008 (0.001)    | -                | 0 (0.000) |     5.55 | JamYoung, Jee, Mercury, Moseyuh, Starry   |
|           13 |     4524 | 2024-10-16 | Unsettled Resentment    | W   | 0.292      | 0.417        | 0.014 (0.002)    | 0.313 (0.038)    | 0 (0.000) |     4.45 | JamYoung, Jee, Mercury, Moseyuh, Starry   |
|           12 |     4911 | 2024-10-08 | Ex-GR Gaming            | W   | 0.239      | 0.417        | 0.011 (0.001)    | 0.112 (0.011)    | 0 (0.000) |     3.16 | JamYoung, Jee, Mercury, Moseyuh, Starry   |
|           11 |     4916 | 2024-10-08 | Ex-GR Gaming            | W   | 0.238      | 0.417        | 0.011 (0.001)    | -                | -         |     3.22 | JamYoung, Jee, Mercury, Moseyuh, Starry   |
|           10 |     5249 | 2024-10-02 | DEWA United             | W   | 0.199      | 0.417        | -                | 0.169 (0.014)    | -         |     1.35 | JamYoung, Jee, Mercury, Moseyuh, Starry   |
|            9 |     5254 | 2024-10-02 | DEWA United             | W   | 0.198      | 0.417        | -                | 0.169 (0.014)    | -         |     1.37 | JamYoung, Jee, Mercury, Moseyuh, Starry   |
|            8 |     5319 | 2024-10-01 | Nomads (Mongolian team) | W   | 0.192      | -            | -                | -                | -         |     2.06 | JamYoung, Jee, Mercury, Moseyuh, Starry   |
|            7 |     5326 | 2024-10-01 | Nomads (Mongolian team) | W   | 0.192      | -            | -                | -                | -         |     2.09 | JamYoung, Jee, Mercury, Moseyuh, Starry   |
|            6 |     5385 | 2024-09-30 | -72C                    | W   | 0.185      | -            | -                | -                | -         |     1.36 | JamYoung, Jee, Mercury, Moseyuh, Starry   |
|            5 |     5387 | 2024-09-30 | -72C                    | W   | 0.185      | -            | -                | -                | -         |     1.38 | JamYoung, Jee, Mercury, Moseyuh, Starry   |
|            4 |     5748 | 2024-09-25 | The QUBE Esports        | W   | 0.152      | -            | -                | -                | -         |     1.64 | JamYoung, Jee, Mercury, Moseyuh, Starry   |
|            3 |     5753 | 2024-09-25 | The QUBE Esports        | W   | 0.152      | -            | -                | -                | -         |     1.65 | JamYoung, Jee, Mercury, Moseyuh, Starry   |
|            2 |     5837 | 2024-09-24 | The Huns Esports        | L   | 0.145      | -            | -                | -                | -         |    -1.09 | JamYoung, Jee, Mercury, Moseyuh, Starry   |
|            1 |     5842 | 2024-09-24 | The Huns Esports        | W   | 0.145      | 0.417        | 0.025 (0.001)    | 0.612 (0.037)    | -         |     3.50 | JamYoung, Jee, Mercury, Moseyuh, Starry   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,161.81)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      0.411 | $15,000.00     | $6,161.81       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
