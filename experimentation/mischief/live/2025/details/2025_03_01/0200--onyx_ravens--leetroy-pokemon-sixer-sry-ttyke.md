### Roster Details<br />
Team Name: Onyx Ravens<br />
Roster: Leetroy, PokemoN, SIXER, sry, TTyke<br />
Global Rank: [200](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [26]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  668.6<br />
<br />
Final Rank Value (668.6) = Starting Rank Value (679.2) + Head To Head Adjustments (-10.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.365[<sup>1</sup>](#table2)
- Bounty Collected: 0.205[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.143<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 679.2
- 400 + ( ( 0.143 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 679.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     1161 | 2024-12-27 | Twisted Minds   | L   | 0.772      | -            | -                | -                | -         |   -11.81 | Leetroy, PokemoN, SIXER, sry, TTyke  |
|            7 |     1177 | 2024-12-26 | The Vicious     | W   | 0.765      | 0.143        | 0.012 (0.001)    | 0.000 (0.000)    | 0 (0.000) |     8.43 | Leetroy, PokemoN, SIXER, sry, TTyke  |
|            6 |     1178 | 2024-12-25 | XO Esports      | L   | 0.759      | -            | -                | -                | -         |   -10.44 | Leetroy, PokemoN, SIXER, sry, TTyke  |
|            5 |     2189 | 2024-11-29 | Al-Ittihad      | L   | 0.586      | -            | -                | -                | -         |   -10.12 | C4rlito, PokemoN, Python, sry, TTyke |
|            4 |     2194 | 2024-11-29 | RiseFromFallen  | W   | 0.586      | 0.143        | 0.000 (0.000)    | 0.030 (0.003)    | 0 (0.000) |     3.09 | C4rlito, PokemoN, Python, sry, TTyke |
|            3 |     2379 | 2024-11-23 | Criminal Minded | W   | 0.547      | 0.143        | 0.000 (0.000)    | 0.030 (0.002)    | 0 (0.000) |     2.97 | C4rlito, PokemoN, Python, sry, TTyke |
|            2 |     2382 | 2024-11-23 | MAFE MA3LOM     | W   | 0.546      | 0.143        | 0.000 (0.000)    | 0.027 (0.002)    | 0 (0.000) |     4.83 | C4rlito, PokemoN, Python, sry, TTyke |
|            1 |     2986 | 2024-11-08 | SAGOLASIN       | W   | 0.447      | 0.143        | 0.000 (0.000)    | 0.025 (0.002)    | 0 (0.000) |     2.50 | Leetroy, PokemoN, SIXER, sry, TTyke  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,177.19)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-27 |      0.773 | $7,990.62      | $6,177.19       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
