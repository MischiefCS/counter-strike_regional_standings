### Roster Details<br />
Team Name: Nixuh<br />
Roster: bam999, dyvo, haze, melkies, Ruben<br />
Global Rank: [394](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [60]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  591.4<br />
<br />
Final Rank Value (591.4) = Starting Rank Value (596.0) + Head To Head Adjustments (-4.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.231[<sup>1</sup>](#table2)
- Bounty Collected: 0.148[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.019[<sup>2</sup>](#table1)

The average of these factors is 0.099<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 596.0
- 400 + ( ( 0.099 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 596.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     5447 | 2024-09-29 | Monarch Realm   | L   | 0.177      | -            | -                | -                | -         |    -2.59 | bam999, dyvo, haze, melkies, Ruben |
|            5 |     5515 | 2024-09-28 | Exceed          | L   | 0.172      | -            | -                | -                | -         |    -2.44 | bam999, dyvo, haze, melkies, Ruben |
|            4 |     5597 | 2024-09-27 | Adaptive Gaming | W   | 0.165      | 0.363        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.165) |     1.98 | bam999, dyvo, haze, melkies, Ruben |
|            3 |     6303 | 2024-09-16 | Kitsune Esports | L   | 0.093      | -            | -                | -                | -         |    -1.42 | bam999, dyvo, haze, melkies, Ruben |
|            2 |     6967 | 2024-09-05 | Dreamer Esports | W   | 0.020      | 0.250        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.16 | bam999, dyvo, haze, melkies, Ruben |
|            1 |     6985 | 2024-09-05 | The Punishers   | L   | 0.020      | -            | -                | -                | -         |    -0.24 | bam999, dyvo, haze, melkies, Ruben |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($158.79)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-29 |      0.178 | $817.94        | $145.47         |
| 2024-09-22 |      0.133 | $100.00        | $13.32          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
