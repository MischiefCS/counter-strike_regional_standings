### Roster Details<br />
Team Name: FlyQuest<br />
Roster: dexter, INS, Liazz, regali, Vexite<br />
Global Rank: [33](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_06_02.md)<br />
Regional Rank: [6]( ../../standings_asia_2025_06_02.md)<br />
<br />
Final Rank Value:  840.8<br />
<br />
Final Rank Value (840.8) = Starting Rank Value (835.9) + Head To Head Adjustments (4.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.488[<sup>1</sup>](#table2)
- Bounty Collected: 0.262[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.188<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 835.9
- 400 + ( ( 0.188 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 835.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      210 | 2025-02-16 | SAW          | L   | 0.491      | -            | -                | -                | -         |    -1.02 | dexter, INS, Liazz, regali, Vexite |
|            6 |      251 | 2025-02-15 | BIG          | L   | 0.482      | -            | -                | -                | -         |    -0.97 | dexter, INS, Liazz, regali, Vexite |
|            5 |      276 | 2025-02-14 | Team Falcons | L   | 0.477      | -            | -                | -                | -         |    -0.04 | dexter, INS, Liazz, regali, Vexite |
|            4 |      629 | 2025-01-30 | Astralis     | L   | 0.378      | -            | -                | -                | -         |    -0.03 | dexter, INS, Liazz, regali, Vexite |
|            3 |      643 | 2025-01-29 | 3DMAX        | L   | 0.369      | -            | -                | -                | -         |    -0.32 | dexter, INS, Liazz, regali, Vexite |
|            2 |      673 | 2025-01-18 | Team Spirit  | L   | 0.298      | -            | -                | -                | -         |    -0.02 | dexter, INS, Liazz, regali, Vexite |
|            1 |      691 | 2025-01-14 | MIBR         | W   | 0.270      | 0.363        | 0.153 (0.015)    | 0.317 (0.031)    | 0 (0.000) |     7.29 | dexter, INS, Liazz, regali, Vexite |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,839.70)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      0.538 | $12,500.00     | $6,728.59       |
| 2025-02-09 |      0.444 | $2,500.00      | $1,111.11       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
