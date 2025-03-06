### Roster Details<br />
Team Name: Johnny Speeds<br />
Roster: bobeksde, draken, hampus, Ro1f, spooke<br />
Global Rank: [68](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [48]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  811.4<br />
<br />
Final Rank Value (811.4) = Starting Rank Value (792.8) + Head To Head Adjustments (18.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.377[<sup>1</sup>](#table2)
- Bounty Collected: 0.239[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.130[<sup>2</sup>](#table1)

The average of these factors is 0.190<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 792.8
- 400 + ( ( 0.190 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 792.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |     1279 | 2024-11-23 | Alliance       | W   | 0.298      | 0.143        | 0.011 (0.000)    | 0.592 (0.025)    | 1 (0.298) |     4.99 | bobeksde, draken, hampus, Ro1f, spooke |
|           10 |     1332 | 2024-11-21 | Kappa Bar      | W   | 0.285      | 0.143        | 0.005 (0.000)    | 0.043 (0.002)    | 1 (0.285) |     3.10 | bobeksde, draken, hampus, Ro1f, spooke |
|            9 |     1335 | 2024-11-21 | Alliance       | W   | 0.284      | 0.143        | 0.011 (0.000)    | 0.592 (0.024)    | 1 (0.284) |     4.86 | bobeksde, draken, hampus, Ro1f, spooke |
|            8 |     1584 | 2024-11-10 | OG             | W   | 0.212      | 0.143        | 0.036 (0.001)    | 1.000 (0.030)    | 0 (0.000) |     3.57 | bobeksde, draken, hampus, Ro1f, spooke |
|            7 |     1616 | 2024-11-08 | Metizport      | L   | 0.199      | -            | -                | -                | -         |    -1.86 | bobeksde, draken, hampus, Ro1f, spooke |
|            6 |     1684 | 2024-11-03 | Insilio        | W   | 0.165      | 0.143        | 0.000 (0.000)    | 0.338 (0.008)    | 0 (0.000) |     1.07 | bobeksde, draken, hampus, Ro1f, spooke |
|            5 |     1743 | 2024-10-31 | ECSTATIC       | L   | 0.145      | -            | -                | -                | -         |    -2.13 | bobeksde, draken, hampus, Ro1f, spooke |
|            4 |     1745 | 2024-10-31 | Metizport      | W   | 0.144      | 0.333        | 0.056 (0.003)    | 0.473 (0.023)    | 0 (0.000) |     3.21 | bobeksde, draken, hampus, Ro1f, spooke |
|            3 |     1779 | 2024-10-29 | Endpoint       | W   | 0.132      | 0.333        | 0.007 (0.000)    | 0.154 (0.007)    | 0 (0.000) |     1.68 | bobeksde, draken, hampus, Ro1f, spooke |
|            2 |     1782 | 2024-10-29 | Tricked Esport | L   | 0.131      | -            | -                | -                | -         |    -2.12 | bobeksde, draken, hampus, Ro1f, spooke |
|            1 |     1784 | 2024-10-29 | Rare Atom      | W   | 0.131      | 0.333        | 0.027 (0.001)    | 0.439 (0.019)    | 0 (0.000) |     2.29 | bobeksde, draken, hampus, Ro1f, spooke |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,042.98)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      0.304 | $1,864.89      | $566.72         |
| 2024-11-23 |      0.298 | $10,873.30     | $3,240.09       |
| 2024-11-09 |      0.204 | $4,623.93      | $945.34         |
| 2024-10-31 |      0.145 | $2,000.00      | $290.83         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
