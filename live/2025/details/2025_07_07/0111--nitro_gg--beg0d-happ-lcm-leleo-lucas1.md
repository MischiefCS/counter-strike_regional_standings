### Roster Details<br />
Team Name: Nitro.GG<br />
Roster: beg0d, happ, Lcm, leleo, LUCAS1<br />
Global Rank: [111](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_07_07.md)<br />
Regional Rank: [33]( ../../standings_americas_2025_07_07.md)<br />
<br />
Final Rank Value:  397.9<br />
<br />
Final Rank Value (397.9) = Starting Rank Value (400.4) + Head To Head Adjustments (-2.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.4
- 400 + ( ( 0.000 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 400.4


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
|            6 |      293 | 2025-02-13 | AdalYamigos        | L   | 0.238      | -            | -                | -                | -         |    -3.75 | beg0d, happ, Lcm, leleo, LUCAS1 |
|            5 |      325 | 2025-02-11 | Familia Maquininha | L   | 0.227      | -            | -                | -                | -         |    -3.65 | beg0d, happ, Lcm, leleo, LUCAS1 |
|            4 |      353 | 2025-02-10 | Swingers           | L   | 0.219      | -            | -                | -                | -         |    -1.09 | beg0d, happ, Lcm, leleo, LUCAS1 |
|            3 |      426 | 2025-02-08 | Imperial Esports   | L   | 0.206      | -            | -                | -                | -         |    -0.46 | beg0d, happ, Lcm, leleo, LUCAS1 |
|            2 |      431 | 2025-02-08 | Galorys            | W   | 0.206      | 0.143        | 0.000 (0.000)    | 0.079 (0.002)    | 0 (0.000) |     3.23 | beg0d, happ, Lcm, leleo, LUCAS1 |
|            1 |      485 | 2025-02-07 | RED Canids         | W   | 0.200      | 0.143        | 0.000 (0.000)    | 0.151 (0.004)    | 0 (0.000) |     3.22 | beg0d, happ, Lcm, leleo, LUCAS1 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
