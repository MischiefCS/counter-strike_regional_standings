### Roster Details<br />
Team Name: TROPA DO TACO<br />
Roster: chayJESUS, farias, ponter, TACO, v$m<br />
Global Rank: [124](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_05_05.md)<br />
Regional Rank: [27]( ../../standings_americas_2025_05_05.md)<br />
<br />
Final Rank Value:  651.8<br />
<br />
Final Rank Value (651.8) = Starting Rank Value (646.7) + Head To Head Adjustments (5.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.267[<sup>1</sup>](#table2)
- Bounty Collected: 0.183[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.113<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 646.7
- 400 + ( ( 0.113 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 646.7


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
|            8 |     1183 | 2024-11-29 | Fluxo                    | L   | 0.152      | -            | -                | -                | -         |    -1.37 | chayJESUS, farias, ponter, TACO, v$m |
|            7 |     1219 | 2024-11-27 | Bad News Chickens        | W   | 0.137      | 0.371        | 0.000 (0.000)    | 0.087 (0.004)    | 0 (0.000) |     1.86 | chayJESUS, farias, ponter, TACO, v$m |
|            6 |     1274 | 2024-11-23 | Game Hunters             | W   | 0.112      | 0.371        | 0.000 (0.000)    | 0.033 (0.001)    | 0 (0.000) |     1.01 | chayJESUS, farias, ponter, TACO, v$m |
|            5 |     1331 | 2024-11-21 | Players (Brazilian team) | W   | 0.099      | 0.371        | 0.009 (0.000)    | 0.473 (0.017)    | 0 (0.000) |     1.88 | chayJESUS, farias, ponter, TACO, v$m |
|            4 |     1382 | 2024-11-18 | 9z Academy               | W   | 0.080      | 0.371        | 0.000 (0.000)    | 0.103 (0.003)    | 0 (0.000) |     0.81 | chayJESUS, farias, ponter, TACO, v$m |
|            3 |     1395 | 2024-11-17 | Bad News Chickens        | W   | 0.073      | 0.143        | 0.000 (0.000)    | 0.087 (0.001)    | 0 (0.000) |     1.01 | chayJESUS, farias, ponter, TACO, v$m |
|            2 |     1614 | 2024-11-08 | Fluxo                    | L   | 0.013      | -            | -                | -                | -         |    -0.12 | farias, n1ssim, ponter, TACO, v$m    |
|            1 |     1631 | 2024-11-07 | Intense Game             | W   | 0.006      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.04 | farias, n1ssim, ponter, TACO, v$m    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($222.50)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-30 |      0.160 | $750.00        | $119.74         |
| 2024-11-17 |      0.073 | $1,207.53      | $87.88          |
| 2024-11-09 |      0.020 | $750.00        | $14.88          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
