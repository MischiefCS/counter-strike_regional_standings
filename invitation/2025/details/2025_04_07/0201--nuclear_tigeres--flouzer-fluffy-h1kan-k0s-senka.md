### Roster Details<br />
Team Name: Nuclear TigeRES<br />
Roster: flouzer, Fluffy, h1kan, k0s, senka<br />
Global Rank: [201](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [118]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  543.8<br />
<br />
Final Rank Value (543.8) = Starting Rank Value (552.0) + Head To Head Adjustments (-8.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.294[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.074<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 552.0
- 400 + ( ( 0.074 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 552.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent              | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      205 | 2025-02-16 | K27                   | L   | 0.866      | -            | -                | -                | -         |    -7.64 | flouzer, Fluffy, h1kan, k0s, senka |
|            5 |     1087 | 2024-12-03 | GenOne                | L   | 0.365      | -            | -                | -                | -         |    -2.95 | flouzer, Fluffy, h1kan, k0s, senka |
|            4 |     1148 | 2024-11-30 | Leo Team              | L   | 0.345      | -            | -                | -                | -         |    -2.81 | flouzer, Fluffy, h1kan, k0s, senka |
|            3 |     1198 | 2024-11-28 | GameAgents            | W   | 0.332      | 0.372        | 0.000 (0.000)    | 0.028 (0.003)    | 0 (0.000) |     3.09 | flouzer, Fluffy, h1kan, k0s, senka |
|            2 |     1226 | 2024-11-26 | Soul's Heart Esport   | W   | 0.319      | 0.372        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.00 | flouzer, Fluffy, h1kan, k0s, senka |
|            1 |     1726 | 2024-11-01 | RUSH B (Russian team) | L   | 0.152      | -            | -                | -                | -         |    -0.88 | flouzer, Fluffy, h1kan, k0s, senka |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($889.64)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-16 |      0.866 | $735.49        | $636.76         |
| 2024-11-03 |      0.165 | $1,532.61      | $252.88         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
