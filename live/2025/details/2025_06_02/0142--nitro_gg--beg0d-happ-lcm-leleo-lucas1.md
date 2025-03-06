### Roster Details<br />
Team Name: Nitro.GG<br />
Roster: beg0d, happ, Lcm, leleo, LUCAS1<br />
Global Rank: [142](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_06_02.md)<br />
Regional Rank: [44]( ../../standings_americas_2025_06_02.md)<br />
<br />
Final Rank Value:  396.5<br />
<br />
Final Rank Value (396.5) = Starting Rank Value (401.3) + Head To Head Adjustments (-4.8)<br />

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
- 400 + ( ( 0.001 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 401.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      293 | 2025-02-13 | AdalYamigos        | L   | 0.471      | -            | -                | -                | -         |    -7.31 | beg0d, happ, Lcm, leleo, LUCAS1 |
|           10 |      325 | 2025-02-11 | Familia Maquininha | L   | 0.460      | -            | -                | -                | -         |    -7.55 | beg0d, happ, Lcm, leleo, LUCAS1 |
|            9 |      353 | 2025-02-10 | Swingers           | L   | 0.453      | -            | -                | -                | -         |    -2.24 | beg0d, happ, Lcm, leleo, LUCAS1 |
|            8 |      426 | 2025-02-08 | Imperial Esports   | L   | 0.440      | -            | -                | -                | -         |    -0.99 | beg0d, happ, Lcm, leleo, LUCAS1 |
|            7 |      431 | 2025-02-08 | Galorys            | W   | 0.439      | 0.143        | 0.000 (0.000)    | 0.079 (0.005)    | 0 (0.000) |     6.84 | beg0d, happ, Lcm, leleo, LUCAS1 |
|            6 |      485 | 2025-02-07 | RED Canids         | W   | 0.433      | 0.143        | 0.000 (0.000)    | 0.155 (0.010)    | 0 (0.000) |     7.16 | beg0d, happ, Lcm, leleo, LUCAS1 |
|            5 |      777 | 2024-12-21 | Patins da Ferrari  | L   | 0.111      | -            | -                | -                | -         |    -1.27 | beg0d, happ, Lcm, leleo, LUCAS1 |
|            4 |      803 | 2024-12-19 | Galorys Academy    | W   | 0.097      | 0.384        | 0.000 (0.000)    | 0.015 (0.001)    | 0 (0.000) |     1.53 | beg0d, happ, Lcm, leleo, LUCAS1 |
|            3 |      815 | 2024-12-18 | UNO MILLE          | L   | 0.091      | -            | -                | -                | -         |    -1.40 | beg0d, happ, Lcm, leleo, LUCAS1 |
|            2 |      839 | 2024-12-15 | Exceritus          | W   | 0.073      | 0.384        | 0.000 (0.000)    | 0.246 (0.007)    | 0 (0.000) |     1.15 | beg0d, happ, Lcm, leleo, LUCAS1 |
|            1 |      877 | 2024-12-14 | Fake do Biru       | L   | 0.064      | -            | -                | -                | -         |    -0.71 | beg0d, happ, Lcm, leleo, LUCAS1 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
