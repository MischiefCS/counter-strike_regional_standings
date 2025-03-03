### Roster Details<br />
Team Name: Metanoia Female<br />
Roster: alineuai, alu, cafofa, Lawlesiris, nehcka<br />
Global Rank: [340](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [91]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  385.6<br />
<br />
Final Rank Value (385.6) = Starting Rank Value (400.1) + Head To Head Adjustments (-14.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.1
- 400 + ( ( 0.000 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 400.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     3186 | 2024-11-02 | Peak Academy Female               | L   | 0.407      | -            | -                | -                | -         |    -2.75 | alineuai, alu, cafofa, Lawlesiris, nehcka |
|            7 |     3189 | 2024-11-02 | Peak Academy Female               | L   | 0.407      | -            | -                | -                | -         |    -2.82 | alineuai, alu, cafofa, Lawlesiris, nehcka |
|            6 |     3237 | 2024-11-01 | União BRARG                       | L   | 0.401      | -            | -                | -                | -         |    -2.98 | alineuai, alu, cafofa, Lawlesiris, nehcka |
|            5 |     3241 | 2024-11-01 | União BRARG                       | L   | 0.401      | -            | -                | -                | -         |    -3.05 | alineuai, alu, cafofa, Lawlesiris, nehcka |
|            4 |     3277 | 2024-10-31 | Fluxo Demons                      | L   | 0.395      | -            | -                | -                | -         |    -1.37 | alineuai, alu, cafofa, Lawlesiris, nehcka |
|            3 |     3280 | 2024-10-31 | Fluxo Demons                      | L   | 0.394      | -            | -                | -                | -         |    -1.38 | alineuai, alu, cafofa, Lawlesiris, nehcka |
|            2 |     3309 | 2024-10-30 | Fire in The Hole (Brazilian team) | W   | 0.388      | 0.143        | 0.000 (0.000)    | 0.022 (0.001)    | 0 (0.000) |     6.10 | alineuai, alu, cafofa, Lawlesiris, nehcka |
|            1 |     3311 | 2024-10-30 | Fire in The Hole (Brazilian team) | L   | 0.388      | -            | -                | -                | -         |    -6.25 | alineuai, alu, cafofa, Lawlesiris, nehcka |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
