### Roster Details<br />
Team Name: Zero Tenacity<br />
Roster: aVN, brutmonster, Cjoffo, nEMANHA, simke<br />
Global Rank: [64](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [45]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  523.7<br />
<br />
Final Rank Value (523.7) = Starting Rank Value (522.5) + Head To Head Adjustments (1.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.195[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.050<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 522.5
- 400 + ( ( 0.050 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 522.5


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
|           12 |      339 | 2025-02-11 | Astralis                   | L   | 0.224      | -            | -                | -                | -         |    -0.00 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           11 |      362 | 2025-02-10 | NEVERMORE (Ukrainian team) | W   | 0.219      | 0.143        | 0.000 (0.000)    | 0.162 (0.005)    | 0 (0.000) |     2.37 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           10 |      370 | 2025-02-10 | HEROIC                     | L   | 0.217      | -            | -                | -                | -         |    -0.55 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            9 |      428 | 2025-02-08 | Little Red Door            | W   | 0.206      | 0.143        | 0.000 (0.000)    | 0.081 (0.002)    | 0 (0.000) |     2.19 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            8 |      444 | 2025-02-08 | BC.Game Esports            | L   | 0.205      | -            | -                | -                | -         |    -0.63 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            7 |      449 | 2025-02-08 | ENCE                       | W   | 0.205      | 0.143        | 0.026 (0.001)    | 0.260 (0.008)    | 0 (0.000) |     5.18 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            6 |      465 | 2025-02-08 | RUSH B (Russian team)      | L   | 0.203      | -            | -                | -                | -         |    -3.10 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            5 |      541 | 2025-02-05 | KONO.ECF                   | L   | 0.185      | -            | -                | -                | -         |    -3.83 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            4 |      572 | 2025-02-04 | RUSH B (Russian team)      | W   | 0.178      | 0.143        | 0.000 (0.000)    | 0.784 (0.020)    | 0 (0.000) |     2.90 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            3 |      644 | 2025-01-28 | Wild Lotus                 | L   | 0.132      | -            | -                | -                | -         |    -2.76 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            2 |      650 | 2025-01-27 | Adventurers                | W   | 0.124      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.31 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            1 |      652 | 2025-01-26 | AMKAL ESPORTS              | L   | 0.118      | -            | -                | -                | -         |    -1.90 | aVN, brutmonster, Cjoffo, nEMANHA, simke |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
