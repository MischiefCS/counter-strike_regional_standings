### Roster Details<br />
Team Name: Fake do Biru<br />
Roster: hardzao, lukiz, Machado, PKL, xureba<br />
Global Rank: [231](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [69]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  584.3<br />
<br />
Final Rank Value (584.3) = Starting Rank Value (538.8) + Head To Head Adjustments (45.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.242[<sup>2</sup>](#table1)
- Opponent Network: 0.046[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.072<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 538.8
- 400 + ( ( 0.072 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 538.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      482 | 2025-02-07 | ODDIK            | L   | 1.000      | -            | -                | -                | -         |    -7.14 | hardzao, lukiz, Machado, PKL, xureba |
|            9 |      510 | 2025-02-06 | AdalYamigos      | L   | 1.000      | -            | -                | -                | -         |    -9.00 | hardzao, lukiz, Machado, PKL, xureba |
|            8 |      521 | 2025-02-06 | KRÜ Esports      | W   | 1.000      | 0.143        | 0.001 (0.000)    | 0.169 (0.024)    | 0 (0.000) |    18.72 | hardzao, lukiz, Machado, PKL, xureba |
|            7 |      545 | 2025-02-05 | Imperial Esports | L   | 1.000      | -            | -                | -                | -         |    -3.50 | hardzao, lukiz, Machado, PKL, xureba |
|            6 |      701 | 2025-01-10 | Dusty Roots      | L   | 0.866      | -            | -                | -                | -         |    -7.80 | hardzao, lukiz, Machado, PKL, xureba |
|            5 |      707 | 2025-01-09 | Game Hunters     | W   | 0.861      | 0.384        | 0.001 (0.000)    | 0.302 (0.100)    | 0 (0.000) |    16.15 | hardzao, lukiz, Machado, PKL, xureba |
|            4 |      787 | 2024-12-20 | Game Hunters     | W   | 0.726      | 0.384        | 0.001 (0.000)    | 0.302 (0.084)    | 0 (0.000) |    14.29 | hardzao, lukiz, Machado, PKL, xureba |
|            3 |      811 | 2024-12-18 | ShindeN          | L   | 0.714      | -            | -                | -                | -         |    -8.04 | hardzao, lukiz, Machado, PKL, xureba |
|            2 |      833 | 2024-12-16 | Team Solid       | W   | 0.699      | 0.384        | 0.023 (0.006)    | 0.571 (0.153)    | 0 (0.000) |    17.63 | hardzao, lukiz, Machado, PKL, xureba |
|            1 |      877 | 2024-12-14 | Nitro.GG         | W   | 0.686      | 0.384        | 0.001 (0.000)    | 0.358 (0.094)    | 0 (0.000) |    14.17 | hardzao, lukiz, Machado, PKL, xureba |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
