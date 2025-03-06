### Roster Details<br />
Team Name: FlyQuest<br />
Roster: dexter, INS, Liazz, regali, Vexite<br />
Global Rank: [30](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_07_07.md)<br />
Regional Rank: [4]( ../../standings_asia_2025_07_07.md)<br />
<br />
Final Rank Value:  830.7<br />
<br />
Final Rank Value (830.7) = Starting Rank Value (830.6) + Head To Head Adjustments (0.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.487[<sup>1</sup>](#table2)
- Bounty Collected: 0.211[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.174<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 830.6
- 400 + ( ( 0.174 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 830.6


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
|            7 |      210 | 2025-02-16 | SAW          | L   | 0.257      | -            | -                | -                | -         |    -0.31 | dexter, INS, Liazz, regali, Vexite |
|            6 |      251 | 2025-02-15 | BIG          | L   | 0.249      | -            | -                | -                | -         |    -0.42 | dexter, INS, Liazz, regali, Vexite |
|            5 |      276 | 2025-02-14 | Team Falcons | L   | 0.243      | -            | -                | -                | -         |    -0.01 | dexter, INS, Liazz, regali, Vexite |
|            4 |      629 | 2025-01-30 | Astralis     | L   | 0.144      | -            | -                | -                | -         |    -0.01 | dexter, INS, Liazz, regali, Vexite |
|            3 |      643 | 2025-01-29 | 3DMAX        | L   | 0.136      | -            | -                | -                | -         |    -0.12 | dexter, INS, Liazz, regali, Vexite |
|            2 |      673 | 2025-01-18 | Team Spirit  | L   | 0.065      | -            | -                | -                | -         |    -0.01 | dexter, INS, Liazz, regali, Vexite |
|            1 |      691 | 2025-01-14 | MIBR         | W   | 0.036      | 0.363        | 0.136 (0.002)    | 0.316 (0.004)    | 0 (0.000) |     0.97 | dexter, INS, Liazz, regali, Vexite |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,339.70)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      0.305 | $12,500.00     | $3,811.92       |
| 2025-02-09 |      0.211 | $2,500.00      | $527.78         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
