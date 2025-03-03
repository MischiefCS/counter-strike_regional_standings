### Roster Details<br />
Team Name: 0to100<br />
Roster: br0, DEPRESHN, NENO, stressarN, xicoz<br />
Global Rank: [129](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [88]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  757.0<br />
<br />
Final Rank Value (757.0) = Starting Rank Value (741.6) + Head To Head Adjustments (15.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.315[<sup>1</sup>](#table2)
- Bounty Collected: 0.236[<sup>2</sup>](#table1)
- Opponent Network: 0.031[<sup>2</sup>](#table1)
- LAN Wins: 0.117[<sup>2</sup>](#table1)

The average of these factors is 0.175<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 741.6
- 400 + ( ( 0.175 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 741.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |     1137 | 2024-12-28 | NEVERMORE (Ukrainian team)                | L   | 0.778      | -            | -                | -                | -         |   -11.34 | br0, DEPRESHN, NENO, stressarN, xicoz    |
|            8 |     1261 | 2024-12-21 | Copenhagen Wolves (American organization) | W   | 0.733      | 0.303        | 0.016 (0.003)    | 0.865 (0.192)    | 0 (0.000) |    14.73 | br0, DEPRESHN, NENO, stressarN, xicoz    |
|            7 |     1280 | 2024-12-21 | Dragon Esports Club                       | W   | 0.731      | 0.303        | 0.007 (0.001)    | 0.344 (0.076)    | 0 (0.000) |     8.55 | br0, DEPRESHN, NENO, stressarN, xicoz    |
|            6 |     1666 | 2024-12-08 | RUSH B (Russian team)                     | L   | 0.647      | -            | -                | -                | -         |    -7.87 | DEPRESHN, meztal, NENO, stressarN, xicoz |
|            5 |     1668 | 2024-12-08 | Nuclear TigeRES                           | W   | 0.647      | 0.143        | 0.004 (0.000)    | 0.344 (0.032)    | 0 (0.000) |     7.01 | DEPRESHN, meztal, NENO, stressarN, xicoz |
|            4 |     1675 | 2024-12-08 | RUSTEC                                    | W   | 0.647      | 0.143        | 0.000 (0.000)    | 0.111 (0.010)    | 0 (0.000) |     2.43 | DEPRESHN, meztal, NENO, stressarN, xicoz |
|            3 |     2547 | 2024-11-17 | Zero Tenacity                             | L   | 0.507      | -            | -                | -                | -         |    -5.57 | dan1, DEPRESHN, NENO, SENER1, stressarN  |
|            2 |     2559 | 2024-11-17 | Juggernauts                               | W   | 0.506      | 0.143        | 0.003 (0.000)    | 0.000 (0.000)    | 1 (0.506) |     3.76 | dan1, DEPRESHN, NENO, SENER1, stressarN  |
|            1 |     2643 | 2024-11-16 | MADNESS (Kosovar team)                    | W   | 0.498      | 0.143        | 0.003 (0.000)    | 0.000 (0.000)    | 1 (0.498) |     3.76 | dan1, DEPRESHN, NENO, SENER1, stressarN  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,260.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-28 |      0.780 | $500.00        | $389.83         |
| 2024-11-17 |      0.507 | $3,690.62      | $1,870.17       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
