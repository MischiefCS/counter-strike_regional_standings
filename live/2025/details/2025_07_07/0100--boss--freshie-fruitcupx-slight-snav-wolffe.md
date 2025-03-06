### Roster Details<br />
Team Name: BOSS<br />
Roster: freshie, Fruitcupx, SLIGHT, snav, Wolffe<br />
Global Rank: [100](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_07_07.md)<br />
Regional Rank: [26]( ../../standings_americas_2025_07_07.md)<br />
<br />
Final Rank Value:  401.6<br />
<br />
Final Rank Value (401.6) = Starting Rank Value (401.3) + Head To Head Adjustments (0.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.001<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 401.3
- 400 + ( ( 0.001 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 401.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      261 | 2025-02-14 | M80             | L   | 0.246      | -            | -                | -                | -         |    -3.70 | freshie, Fruitcupx, SLIGHT, snav, Wolffe |
|            5 |      263 | 2025-02-14 | Getting Info    | W   | 0.245      | 0.143        | 0.000 (0.000)    | 0.094 (0.003)    | 0 (0.000) |     3.85 | freshie, Fruitcupx, SLIGHT, snav, Wolffe |
|            4 |      286 | 2025-02-13 | Immigrants Peek | W   | 0.239      | 0.143        | 0.000 (0.000)    | 0.257 (0.009)    | 0 (0.000) |     3.86 | freshie, Fruitcupx, SLIGHT, snav, Wolffe |
|            3 |      304 | 2025-02-12 | Nouns Esports   | L   | 0.233      | -            | -                | -                | -         |    -3.66 | freshie, Fruitcupx, SLIGHT, snav, Wolffe |
|            2 |      321 | 2025-02-11 | NRG             | L   | 0.227      | -            | -                | -                | -         |    -3.56 | freshie, Fruitcupx, SLIGHT, snav, Wolffe |
|            1 |      326 | 2025-02-11 | Nouns Esports   | W   | 0.226      | 0.143        | 0.000 (0.000)    | 0.263 (0.008)    | 0 (0.000) |     3.56 | freshie, Fruitcupx, SLIGHT, snav, Wolffe |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
