### Roster Details<br />
Team Name: ENTERPRISE Genesis<br />
Roster: Happyy, Lastík, luko, NIKOLAJ, PerdY<br />
Global Rank: [229](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [147]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  643.7<br />
<br />
Final Rank Value (643.7) = Starting Rank Value (632.3) + Head To Head Adjustments (11.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.260[<sup>1</sup>](#table2)
- Bounty Collected: 0.205[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.119<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 632.3
- 400 + ( ( 0.119 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 632.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     1866 | 2024-12-04 | NEVERMORE (Ukrainian team) | L   | 0.620      | -            | -                | -                | -         |    -6.90 | Happyy, Lastík, luko, NIKOLAJ, PerdY   |
|           11 |     2140 | 2024-11-30 | Chimera Esports            | L   | 0.593      | -            | -                | -                | -         |    -4.52 | Happyy, Lastík, luko, NIKOLAJ, PerdY   |
|           10 |     2210 | 2024-11-28 | Eternal premium            | W   | 0.580      | 0.333        | 0.000 (0.000)    | 0.111 (0.022)    | 0 (0.000) |     3.58 | Happyy, Lastík, luko, NIKOLAJ, PerdY   |
|            9 |     2274 | 2024-11-26 | Rhyno Youngsters           | W   | 0.567      | 0.333        | 0.002 (0.000)    | 0.066 (0.013)    | 0 (0.000) |     8.68 | Happyy, Lastík, luko, NIKOLAJ, PerdY   |
|            8 |     2443 | 2024-11-22 | Team Sampi                 | L   | 0.540      | -            | -                | -                | -         |    -5.40 | Happyy, Lastík, luko, NIKOLAJ, PerdY   |
|            7 |     2516 | 2024-11-19 | Ins (Polish team)          | L   | 0.520      | -            | -                | -                | -         |    -8.20 | Happyy, Lastík, luko, NIKOLAJ, PerdY   |
|            6 |     2531 | 2024-11-18 | Mission Possible           | W   | 0.514      | 0.278        | 0.000 (0.000)    | 0.201 (0.029)    | 0 (0.000) |     5.65 | Happyy, Lastík, luko, MahaR, NIKOLAJ   |
|            5 |     2557 | 2024-11-17 | GamerLegion Academy        | W   | 0.506      | 0.278        | 0.000 (0.000)    | 0.077 (0.011)    | 0 (0.000) |     5.02 | Happyy, Lastík, luko, NIKOLAJ, woozzzi |
|            4 |     2683 | 2024-11-15 | DUSTY                      | W   | 0.492      | 0.278        | 0.006 (0.001)    | 0.054 (0.007)    | 0 (0.000) |     8.61 | Happyy, Lastík, luko, NIKOLAJ, Snaxiee |
|            3 |     2754 | 2024-11-13 | BRUTE                      | L   | 0.480      | -            | -                | -                | -         |    -6.17 | Happyy, Lastík, luko, MahaR, NIKOLAJ   |
|            2 |     3000 | 2024-11-08 | Mission Possible           | W   | 0.446      | 0.278        | 0.000 (0.000)    | 0.201 (0.025)    | 0 (0.000) |     4.84 | Happyy, Lastík, luko, NIKOLAJ, PerdY   |
|            1 |     3102 | 2024-11-04 | Daystar                    | W   | 0.419      | 0.278        | 0.000 (0.000)    | 0.033 (0.004)    | 0 (0.000) |     6.24 | Happyy, Lastík, luko, NIKOLAJ, PerdY   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($471.89)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      0.552 | $616.62        | $340.25         |
| 2024-11-20 |      0.527 | $250.00        | $131.63         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
