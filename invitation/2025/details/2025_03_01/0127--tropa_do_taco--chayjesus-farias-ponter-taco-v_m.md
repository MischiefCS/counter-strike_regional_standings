### Roster Details<br />
Team Name: TROPA DO TACO<br />
Roster: chayJESUS, farias, ponter, TACO, v$m<br />
Global Rank: [127](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [28]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  719.6<br />
<br />
Final Rank Value (719.6) = Starting Rank Value (671.2) + Head To Head Adjustments (48.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.296[<sup>1</sup>](#table2)
- Bounty Collected: 0.228[<sup>2</sup>](#table1)
- Opponent Network: 0.038[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.140<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 671.2
- 400 + ( ( 0.140 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 671.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                 | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |     1183 | 2024-11-29 | Fluxo                    | L   | 0.587      | -            | -                | -                | -         |    -3.91 | chayJESUS, farias, ponter, TACO, v$m |
|           10 |     1219 | 2024-11-27 | Bad News Chickens        | W   | 0.572      | 0.371        | 0.002 (0.000)    | 0.141 (0.030)    | 0 (0.000) |     7.00 | chayJESUS, farias, ponter, TACO, v$m |
|            9 |     1274 | 2024-11-23 | Game Hunters             | W   | 0.547      | 0.371        | 0.000 (0.000)    | 0.096 (0.020)    | 0 (0.000) |     4.15 | chayJESUS, farias, ponter, TACO, v$m |
|            8 |     1331 | 2024-11-21 | Players (Brazilian team) | W   | 0.534      | 0.371        | 0.008 (0.002)    | 0.566 (0.112)    | 0 (0.000) |     8.67 | chayJESUS, farias, ponter, TACO, v$m |
|            7 |     1382 | 2024-11-18 | 9z Academy               | W   | 0.515      | 0.371        | 0.000 (0.000)    | 0.210 (0.040)    | 0 (0.000) |     4.51 | chayJESUS, farias, ponter, TACO, v$m |
|            6 |     1395 | 2024-11-17 | Bad News Chickens        | W   | 0.508      | 0.143        | 0.002 (0.000)    | 0.141 (0.010)    | 0 (0.000) |     6.90 | chayJESUS, farias, ponter, TACO, v$m |
|            5 |     1614 | 2024-11-08 | Fluxo                    | L   | 0.448      | -            | -                | -                | -         |    -3.06 | farias, n1ssim, ponter, TACO, v$m    |
|            4 |     1631 | 2024-11-07 | Intense Game             | W   | 0.441      | 0.371        | 0.001 (0.000)    | 0.024 (0.004)    | 0 (0.000) |     5.35 | farias, n1ssim, ponter, TACO, v$m    |
|            3 |     1700 | 2024-11-02 | UNO MILLE                | W   | 0.408      | 0.371        | 0.006 (0.001)    | 0.404 (0.061)    | 0 (0.000) |     6.88 | farias, n1ssim, ponter, TACO, v$m    |
|            2 |     1742 | 2024-10-31 | ShindeN                  | W   | 0.394      | 0.371        | 0.005 (0.001)    | 0.377 (0.055)    | 0 (0.000) |     6.36 | farias, n1ssim, ponter, TACO, v$m    |
|            1 |     1780 | 2024-10-29 | MIBR Academy             | W   | 0.380      | 0.371        | 0.001 (0.000)    | 0.328 (0.046)    | 0 (0.000) |     5.59 | farias, n1ssim, ponter, TACO, v$m    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,400.28)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-30 |      0.595 | $750.00        | $445.99         |
| 2024-11-17 |      0.508 | $1,207.53      | $613.16         |
| 2024-11-09 |      0.455 | $750.00        | $341.13         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
