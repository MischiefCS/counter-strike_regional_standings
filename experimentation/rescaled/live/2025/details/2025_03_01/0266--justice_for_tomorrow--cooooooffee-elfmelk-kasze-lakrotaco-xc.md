### Roster Details<br />
Team Name: Justice For Tomorrow<br />
Roster: COOOOOOFFEE, ELFMELK, kasze, LakroTaco, xc<br />
Global Rank: [266](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [42]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  495.1<br />
<br />
Final Rank Value (495.1) = Starting Rank Value (492.4) + Head To Head Adjustments (2.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.183[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.049<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 492.4
- 400 + ( ( 0.049 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 492.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |       52 | 2025-02-24 | Only One Word    | L   | 1.000      | -            | -                | -                | -         |   -11.83 | COOOOOOFFEE, ELFMELK, kasze, LakroTaco, xc       |
|            4 |       71 | 2025-02-23 | KZG              | L   | 1.000      | -            | -                | -                | -         |   -12.25 | COOOOOOFFEE, ELFMELK, kasze, LakroTaco, xc       |
|            3 |      218 | 2025-02-15 | MANTRA           | W   | 1.000      | 0.332        | 0.000 (0.000)    | 0.129 (0.043)    | 0 (0.000) |    18.86 | bixiaoxi, COOOOOOFFEE, ELFMELK, kasze, LakroTaco |
|            2 |      253 | 2025-02-14 | SemperFi Esports | L   | 1.000      | -            | -                | -                | -         |   -11.96 | bixiaoxi, COOOOOOFFEE, ELFMELK, kasze, LakroTaco |
|            1 |      256 | 2025-02-14 | KZG              | W   | 1.000      | 0.331        | 0.001 (0.000)    | 0.211 (0.070)    | 0 (0.000) |    19.87 | bixiaoxi, COOOOOOFFEE, ELFMELK, kasze, LakroTaco |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
