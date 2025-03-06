### Roster Details<br />
Team Name: GamerLegion<br />
Roster: PR, REZ, sl3nd, Tauson, ztr<br />
Global Rank: [15](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [13]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  1290.2<br />
<br />
Final Rank Value (1290.2) = Starting Rank Value (1279.9) + Head To Head Adjustments (10.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.503[<sup>1</sup>](#table2)
- Bounty Collected: 0.427[<sup>2</sup>](#table1)
- Opponent Network: 0.041[<sup>2</sup>](#table1)
- LAN Wins: 0.455[<sup>2</sup>](#table1)

The average of these factors is 0.357<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1279.9
- 400 + ( ( 0.357 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 1279.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      360 | 2025-02-10 | Metizport   | W   | 0.219      | 0.143        | 0.000 (0.000)    | 0.173 (0.005)    | 0 (0.000) |     0.09 | PR, REZ, sl3nd, Tauson, ztr |
|            9 |      371 | 2025-02-10 | Hesta       | W   | 0.217      | 0.143        | 0.000 (0.000)    | 0.456 (0.014)    | 0 (0.000) |     0.10 | PR, REZ, sl3nd, Tauson, ztr |
|            8 |      470 | 2025-02-08 | PARIVISION  | L   | 0.203      | -            | -                | -                | -         |    -6.26 | PR, REZ, sl3nd, Tauson, ztr |
|            7 |      573 | 2025-02-04 | Team Spirit | L   | 0.178      | -            | -                | -                | -         |    -0.20 | PR, REZ, sl3nd, Tauson, ztr |
|            6 |      582 | 2025-02-04 | Astralis    | W   | 0.177      | 1.000        | 1.000 (0.177)    | 1.000 (0.177)    | 1 (0.177) |     5.44 | PR, REZ, sl3nd, Tauson, ztr |
|            5 |      592 | 2025-02-03 | The MongolZ | L   | 0.170      | -            | -                | -                | -         |    -0.28 | PR, REZ, sl3nd, Tauson, ztr |
|            4 |      612 | 2025-02-01 | MOUZ        | W   | 0.158      | 1.000        | 1.000 (0.158)    | 0.651 (0.103)    | 1 (0.158) |     4.89 | PR, REZ, sl3nd, Tauson, ztr |
|            3 |      630 | 2025-01-30 | PaiN Gaming | W   | 0.143      | 1.000        | 0.443 (0.064)    | 0.428 (0.061)    | 1 (0.143) |     3.83 | PR, REZ, sl3nd, Tauson, ztr |
|            2 |      639 | 2025-01-29 | SAW         | W   | 0.137      | 1.000        | 0.399 (0.054)    | 0.384 (0.053)    | 1 (0.137) |     2.98 | PR, REZ, sl3nd, Tauson, ztr |
|            1 |      679 | 2025-01-17 | PaiN Gaming | L   | 0.056      | -            | -                | -                | -         |    -0.27 | PR, REZ, sl3nd, Tauson, ztr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,066.67)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.10) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-09 |      0.211 | $24,000.00     | $5,066.67       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
