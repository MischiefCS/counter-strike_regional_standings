### Roster Details<br />
Team Name: Fake do Biru<br />
Roster: hardzao, lukiz, Machado, PKL, xureba<br />
Global Rank: [115](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_06_02.md)<br />
Regional Rank: [29]( ../../standings_americas_2025_06_02.md)<br />
<br />
Final Rank Value:  504.3<br />
<br />
Final Rank Value (504.3) = Starting Rank Value (509.3) + Head To Head Adjustments (-5.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.183[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.047<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 509.3
- 400 + ( ( 0.047 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 509.3


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
|           10 |      482 | 2025-02-07 | ODDIK            | L   | 0.433      | -            | -                | -                | -         |    -3.06 | hardzao, lukiz, Machado, PKL, xureba |
|            9 |      510 | 2025-02-06 | AdalYamigos      | L   | 0.426      | -            | -                | -                | -         |    -8.61 | hardzao, lukiz, Machado, PKL, xureba |
|            8 |      521 | 2025-02-06 | KRÜ Esports      | W   | 0.425      | 0.143        | 0.000 (0.000)    | 0.160 (0.010)    | 0 (0.000) |     4.53 | hardzao, lukiz, Machado, PKL, xureba |
|            7 |      545 | 2025-02-05 | Imperial Esports | L   | 0.418      | -            | -                | -                | -         |    -1.64 | hardzao, lukiz, Machado, PKL, xureba |
|            6 |      701 | 2025-01-10 | Dusty Roots      | L   | 0.245      | -            | -                | -                | -         |    -1.98 | hardzao, lukiz, Machado, PKL, xureba |
|            5 |      707 | 2025-01-09 | Game Hunters     | W   | 0.239      | 0.384        | 0.000 (0.000)    | 0.205 (0.019)    | 0 (0.000) |     3.48 | hardzao, lukiz, Machado, PKL, xureba |
|            4 |      787 | 2024-12-20 | Game Hunters     | W   | 0.105      | 0.384        | 0.000 (0.000)    | 0.205 (0.008)    | 0 (0.000) |     1.54 | hardzao, lukiz, Machado, PKL, xureba |
|            3 |      811 | 2024-12-18 | ShindeN          | L   | 0.092      | -            | -                | -                | -         |    -1.87 | hardzao, lukiz, Machado, PKL, xureba |
|            2 |      833 | 2024-12-16 | Team Solid       | W   | 0.077      | 0.384        | 0.012 (0.000)    | 0.399 (0.012)    | 0 (0.000) |     1.89 | hardzao, lukiz, Machado, PKL, xureba |
|            1 |      877 | 2024-12-14 | Nitro.GG         | W   | 0.064      | 0.384        | 0.000 (0.000)    | 0.190 (0.005)    | 0 (0.000) |     0.71 | hardzao, lukiz, Machado, PKL, xureba |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
