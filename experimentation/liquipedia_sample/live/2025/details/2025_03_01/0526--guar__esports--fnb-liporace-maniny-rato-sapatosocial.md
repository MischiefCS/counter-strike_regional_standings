### Roster Details<br />
Team Name: Guará eSports<br />
Roster: fnb, liporace, maNiny, rato, sapatosocial<br />
Global Rank: [526](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [122]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  477.0<br />
<br />
Final Rank Value (477.0) = Starting Rank Value (475.1) + Head To Head Adjustments (1.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.152[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.038<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 475.1
- 400 + ( ( 0.038 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 475.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1791 | 2024-12-04 | Yawara E-Sports | L   | 0.621      | -            | -                | -                | -         |    -4.48 | fnb, liporace, maNiny, rato, sapatosocial |
|            4 |     1843 | 2024-12-03 | X7 Team         | W   | 0.615      | 0.262        | 0.000 (0.000)    | 0.039 (0.006)    | 0 (0.000) |    13.00 | fnb, liporace, maNiny, rato, sapatosocial |
|            3 |     2422 | 2024-11-23 | INTERDIT        | L   | 0.547      | -            | -                | -                | -         |    -5.44 | fnb, liporace, maNiny, rato, sapatosocial |
|            2 |     6405 | 2024-09-14 | Nitro.GG        | L   | 0.080      | -            | -                | -                | -         |    -0.61 | fnb, liporace, maNiny, rato, sapatosocial |
|            1 |     6576 | 2024-09-11 | Joga de terno   | L   | 0.062      | -            | -                | -                | -         |    -0.53 | fnb, liporace, maNiny, rato, sapatosocial |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
