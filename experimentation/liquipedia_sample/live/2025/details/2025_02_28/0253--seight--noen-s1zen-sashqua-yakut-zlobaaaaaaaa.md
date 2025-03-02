### Roster Details<br />
Team Name: SEight<br />
Roster: noeN, s1zen, sashqua, yakut, ZLOBAAAAAAAA<br />
Global Rank: [253](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [172]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  696.8<br />
<br />
Final Rank Value (696.8) = Starting Rank Value (691.6) + Head To Head Adjustments (5.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.280[<sup>1</sup>](#table2)
- Bounty Collected: 0.187[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.097[<sup>2</sup>](#table1)

The average of these factors is 0.141<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 691.6
- 400 + ( ( 0.141 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 691.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     4532 | 2024-10-21 | Gameinside  | W   | 0.331      | 0.143        | 0.005 (0.000)    | 0.029 (0.001)    | 1 (0.331) |     5.53 | noeN, s1zen, sashqua, yakut, ZLOBAAAAAAAA |
|            5 |     4537 | 2024-10-21 | Purple Haze | W   | 0.330      | 0.143        | 0.004 (0.000)    | 0.000 (0.000)    | 1 (0.330) |     3.23 | noeN, s1zen, sashqua, yakut, ZLOBAAAAAAAA |
|            4 |     5086 | 2024-10-09 | REMBAZA     | L   | 0.256      | -            | -                | -                | -         |    -3.37 | noeN, sashqua, yakut, zed1x, ZLOBAAAAAAAA |
|            3 |     6564 | 2024-09-18 | REMBAZA     | L   | 0.111      | -            | -                | -                | -         |    -1.50 | myata, noeN, sashqua, yakut, ZLOBAAAAAAAA |
|            2 |     6570 | 2024-09-18 | Gameinside  | W   | 0.110      | 0.143        | 0.005 (0.000)    | 0.029 (0.000)    | 1 (0.110) |     1.81 | myata, noeN, sashqua, yakut, ZLOBAAAAAAAA |
|            1 |     7278 | 2024-09-06 | REMBAZA     | L   | 0.036      | -            | -                | -                | -         |    -0.49 | myata, noeN, sashqua, yakut, ZLOBAAAAAAAA |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($763.87)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-21 |      0.331 | $1,167.56      | $386.08         |
| 2024-10-10 |      0.257 | $898.25        | $231.15         |
| 2024-09-18 |      0.111 | $1,023.06      | $113.22         |
| 2024-09-07 |      0.037 | $901.71        | $33.42          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
