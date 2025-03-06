### Roster Details<br />
Team Name: Justice For Tomorrow<br />
Roster: COOOOOOFFEE, ELFMELK, kasze, LakroTaco, xc<br />
Global Rank: [217](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_04_07.md)<br />
Regional Rank: [34]( ../../standings_asia_2025_04_07.md)<br />
<br />
Final Rank Value:  481.5<br />
<br />
Final Rank Value (481.5) = Starting Rank Value (483.2) + Head To Head Adjustments (-1.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.156[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.040<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 483.2
- 400 + ( ( 0.040 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 483.2


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
|            5 |       52 | 2025-02-24 | Only One Word    | L   | 0.921      | -            | -                | -                | -         |   -11.31 | COOOOOOFFEE, ELFMELK, kasze, LakroTaco, xc       |
|            4 |       71 | 2025-02-23 | KZG              | L   | 0.915      | -            | -                | -                | -         |   -11.57 | COOOOOOFFEE, ELFMELK, kasze, LakroTaco, xc       |
|            3 |      218 | 2025-02-15 | MANTRA           | W   | 0.862      | 0.143        | 0.000 (0.000)    | 0.144 (0.018)    | 0 (0.000) |    16.23 | bixiaoxi, COOOOOOFFEE, ELFMELK, kasze, LakroTaco |
|            2 |      253 | 2025-02-14 | SemperFi Esports | L   | 0.855      | -            | -                | -                | -         |   -11.76 | bixiaoxi, COOOOOOFFEE, ELFMELK, kasze, LakroTaco |
|            1 |      256 | 2025-02-14 | KZG              | W   | 0.854      | 0.143        | 0.000 (0.000)    | 0.219 (0.027)    | 0 (0.000) |    16.79 | bixiaoxi, COOOOOOFFEE, ELFMELK, kasze, LakroTaco |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
