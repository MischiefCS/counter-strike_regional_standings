### Roster Details<br />
Team Name: FlyQuest<br />
Roster: dexter, INS, Liazz, regali, Vexite<br />
Global Rank: [30](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_05_05.md)<br />
Regional Rank: [5]( ../../standings_asia_2025_05_05.md)<br />
<br />
Final Rank Value:  916.9<br />
<br />
Final Rank Value (916.9) = Starting Rank Value (903.1) + Head To Head Adjustments (13.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.509[<sup>1</sup>](#table2)
- Bounty Collected: 0.335[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.065[<sup>2</sup>](#table1)

The average of these factors is 0.231<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 903.1
- 400 + ( ( 0.231 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 903.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      210 | 2025-02-16 | SAW          | L   | 0.677      | -            | -                | -                | -         |    -3.05 | dexter, INS, Liazz, regali, Vexite   |
|           11 |      251 | 2025-02-15 | BIG          | L   | 0.669      | -            | -                | -                | -         |    -1.81 | dexter, INS, Liazz, regali, Vexite   |
|           10 |      276 | 2025-02-14 | Team Falcons | L   | 0.663      | -            | -                | -                | -         |    -0.10 | dexter, INS, Liazz, regali, Vexite   |
|            9 |      629 | 2025-01-30 | Astralis     | L   | 0.564      | -            | -                | -                | -         |    -0.07 | dexter, INS, Liazz, regali, Vexite   |
|            8 |      643 | 2025-01-29 | 3DMAX        | L   | 0.556      | -            | -                | -                | -         |    -0.73 | dexter, INS, Liazz, regali, Vexite   |
|            7 |      673 | 2025-01-18 | Team Spirit  | L   | 0.485      | -            | -                | -                | -         |    -0.04 | dexter, INS, Liazz, regali, Vexite   |
|            6 |      691 | 2025-01-14 | MIBR         | W   | 0.456      | 0.363        | 0.177 (0.029)    | 0.386 (0.064)    | 0 (0.000) |    12.82 | dexter, INS, Liazz, regali, Vexite   |
|            5 |     1101 | 2024-12-02 | MIBR         | L   | 0.175      | -            | -                | -                | -         |    -0.60 | aliStair, dexter, INS, Liazz, Vexite |
|            4 |     1123 | 2024-12-01 | PaiN Gaming  | L   | 0.168      | -            | -                | -                | -         |    -0.09 | aliStair, dexter, INS, Liazz, Vexite |
|            3 |     1141 | 2024-11-30 | Team Liquid  | L   | 0.161      | -            | -                | -                | -         |    -0.39 | aliStair, dexter, INS, Liazz, Vexite |
|            2 |     1171 | 2024-11-30 | BIG          | W   | 0.156      | 1.000        | 0.327 (0.051)    | 0.474 (0.074)    | 1 (0.156) |     4.67 | aliStair, dexter, INS, Liazz, Vexite |
|            1 |     1177 | 2024-11-29 | Complexity   | W   | 0.155      | 1.000        | 0.145 (0.022)    | 0.125 (0.019)    | 1 (0.155) |     3.20 | aliStair, dexter, INS, Liazz, Vexite |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,199.19)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      0.725 | $12,500.00     | $9,061.92       |
| 2025-02-09 |      0.631 | $2,500.00      | $1,577.78       |
| 2024-12-15 |      0.256 | $10,000.00     | $2,559.49       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
