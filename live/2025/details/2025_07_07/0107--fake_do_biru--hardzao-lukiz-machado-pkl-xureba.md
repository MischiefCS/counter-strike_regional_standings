### Roster Details<br />
Team Name: Fake do Biru<br />
Roster: hardzao, lukiz, Machado, PKL, xureba<br />
Global Rank: [107](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_07_07.md)<br />
Regional Rank: [32]( ../../standings_americas_2025_07_07.md)<br />
<br />
Final Rank Value:  399.0<br />
<br />
Final Rank Value (399.0) = Starting Rank Value (400.3) + Head To Head Adjustments (-1.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.3
- 400 + ( ( 0.000 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 400.3


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
|            6 |      482 | 2025-02-07 | ODDIK            | L   | 0.200      | -            | -                | -                | -         |    -0.86 | hardzao, lukiz, Machado, PKL, xureba |
|            5 |      510 | 2025-02-06 | AdalYamigos      | L   | 0.193      | -            | -                | -                | -         |    -3.02 | hardzao, lukiz, Machado, PKL, xureba |
|            4 |      521 | 2025-02-06 | KRÜ Esports      | W   | 0.191      | 0.143        | 0.000 (0.000)    | 0.162 (0.004)    | 0 (0.000) |     2.99 | hardzao, lukiz, Machado, PKL, xureba |
|            3 |      545 | 2025-02-05 | Imperial Esports | L   | 0.185      | -            | -                | -                | -         |    -0.41 | hardzao, lukiz, Machado, PKL, xureba |
|            2 |      701 | 2025-01-10 | Dusty Roots      | L   | 0.011      | -            | -                | -                | -         |    -0.06 | hardzao, lukiz, Machado, PKL, xureba |
|            1 |      707 | 2025-01-09 | Game Hunters     | W   | 0.006      | 0.384        | 0.000 (0.000)    | 0.183 (0.000)    | 0 (0.000) |     0.09 | hardzao, lukiz, Machado, PKL, xureba |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
