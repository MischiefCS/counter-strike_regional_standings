### Roster Details<br />
Team Name: Nuclear TigeRES<br />
Roster: flouzer, Fluffy, h1kan, k0s, senka<br />
Global Rank: [150](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [101]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  554.7<br />
<br />
Final Rank Value (554.7) = Starting Rank Value (560.8) + Head To Head Adjustments (-6.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.295[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.074<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 560.8
- 400 + ( ( 0.074 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 560.8


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
|            5 |      205 | 2025-02-16 | K27                 | L   | 0.679      | -            | -                | -                | -         |    -5.51 | flouzer, Fluffy, h1kan, k0s, senka |
|            4 |     1087 | 2024-12-03 | GenOne              | L   | 0.179      | -            | -                | -                | -         |    -1.60 | flouzer, Fluffy, h1kan, k0s, senka |
|            3 |     1148 | 2024-11-30 | Leo Team            | L   | 0.159      | -            | -                | -                | -         |    -1.46 | flouzer, Fluffy, h1kan, k0s, senka |
|            2 |     1198 | 2024-11-28 | GameAgents          | W   | 0.145      | 0.372        | 0.000 (0.000)    | 0.018 (0.001)    | 0 (0.000) |     1.32 | flouzer, Fluffy, h1kan, k0s, senka |
|            1 |     1226 | 2024-11-26 | Soul's Heart Esport | W   | 0.132      | 0.372        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.20 | flouzer, Fluffy, h1kan, k0s, senka |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($499.47)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-16 |      0.679 | $735.49        | $499.47         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
