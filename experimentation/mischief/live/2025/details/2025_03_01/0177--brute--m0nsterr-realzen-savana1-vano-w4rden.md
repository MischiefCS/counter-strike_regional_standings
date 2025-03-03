### Roster Details<br />
Team Name: BRUTE<br />
Roster: m0nsterr, realzen, sAvana1, vANO, w4rden<br />
Global Rank: [177](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [123]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  689.6<br />
<br />
Final Rank Value (689.6) = Starting Rank Value (705.3) + Head To Head Adjustments (-15.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.294[<sup>1</sup>](#table2)
- Bounty Collected: 0.230[<sup>2</sup>](#table1)
- Opponent Network: 0.038[<sup>2</sup>](#table1)
- LAN Wins: 0.063[<sup>2</sup>](#table1)

The average of these factors is 0.156<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 705.3
- 400 + ( ( 0.156 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 705.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |     1048 | 2025-01-06 | EYEBALLERS                 | L   | 0.839      | -            | -                | -                | -         |   -10.99 | m0nsterr, realzen, sAvana1, vANO, w4rden |
|           18 |     1056 | 2025-01-04 | Heimo Esports              | W   | 0.825      | 0.417        | 0.004 (0.001)    | 0.485 (0.167)    | 0 (0.000) |    12.82 | m0nsterr, M1key, realzen, vANO, w4rden   |
|           17 |     1100 | 2024-12-29 | Dark Cloud Esports         | L   | 0.784      | -            | -                | -                | -         |    -8.73 | m0nsterr, realzen, SiKO, vANO, w4rden    |
|           16 |     1141 | 2024-12-28 | Rhyno Esports              | L   | 0.777      | -            | -                | -                | -         |    -6.82 | m0nsterr, realzen, SiKO, vANO, w4rden    |
|           15 |     1636 | 2024-12-10 | NEVERMORE (Ukrainian team) | L   | 0.660      | -            | -                | -                | -         |    -8.30 | m0nsterr, realzen, SiKO, vANO, w4rden    |
|           14 |     1670 | 2024-12-08 | Sashi Academy              | W   | 0.647      | 0.333        | 0.001 (0.000)    | 0.176 (0.038)    | 0 (0.000) |     9.11 | m0nsterr, realzen, SiKO, vANO, w4rden    |
|           13 |     1795 | 2024-12-06 | Donstu Esports             | W   | 0.633      | 0.333        | 0.000 (0.000)    | 0.244 (0.051)    | 0 (0.000) |     4.99 | m0nsterr, realzen, SiKO, vANO, w4rden    |
|           12 |     2129 | 2024-11-30 | XPERION NXT                | L   | 0.593      | -            | -                | -                | -         |   -11.12 | m0nsterr, realzen, SiKO, vANO, w4rden    |
|           11 |     2206 | 2024-11-28 | Rhyno Esports              | W   | 0.580      | 0.333        | 0.013 (0.003)    | 0.397 (0.077)    | 0 (0.000) |    13.56 | m0nsterr, realzen, SiKO, vANO, w4rden    |
|           10 |     2269 | 2024-11-26 | 52squad                    | W   | 0.567      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.89 | m0nsterr, realzen, SiKO, vANO, w4rden    |
|            9 |     2340 | 2024-11-24 | Team Sampi                 | L   | 0.551      | -            | -                | -                | -         |    -6.69 | m0nsterr, realzen, SiKO, vANO, w4rden    |
|            8 |     2390 | 2024-11-23 | Dynamo Eclot               | L   | 0.546      | -            | -                | -                | -         |    -2.20 | m0nsterr, realzen, SiKO, vANO, w4rden    |
|            7 |     2452 | 2024-11-22 | SINNERS Academy            | W   | 0.538      | 0.143        | 0.001 (0.000)    | 0.120 (0.009)    | 1 (0.538) |     9.13 | m0nsterr, realzen, SiKO, vANO, w4rden    |
|            6 |     2549 | 2024-11-17 | Mission Possible           | L   | 0.507      | -            | -                | -                | -         |   -11.45 | m0nsterr, realzen, SiKO, vANO, w4rden    |
|            5 |     2631 | 2024-11-16 | Ins (Polish team)          | L   | 0.499      | -            | -                | -                | -         |    -9.14 | m0nsterr, realzen, SiKO, vANO, w4rden    |
|            4 |     2754 | 2024-11-13 | ENTERPRISE Genesis         | W   | 0.480      | 0.278        | 0.001 (0.000)    | 0.172 (0.023)    | 0 (0.000) |     6.17 | m0nsterr, realzen, SiKO, vANO, w4rden    |
|            3 |     2791 | 2024-11-12 | G2 Ares                    | W   | 0.472      | 0.278        | 0.001 (0.000)    | 0.125 (0.016)    | 0 (0.000) |     6.42 | m0nsterr, realzen, SiKO, vANO, w4rden    |
|            2 |     2925 | 2024-11-09 | ENCE Prospects             | W   | 0.453      | 0.278        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.23 | m0nsterr, realzen, SiKO, vANO, w4rden    |
|            1 |     3076 | 2024-11-05 | G2 Ares                    | L   | 0.426      | -            | -                | -                | -         |    -7.64 | m0nsterr, realzen, SiKO, vANO, w4rden    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,341.85)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.692 | $300.00        | $207.67         |
| 2024-11-24 |      0.552 | $2,055.40      | $1,134.18       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
