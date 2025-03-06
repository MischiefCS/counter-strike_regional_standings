### Roster Details<br />
Team Name: TROPA DO TACO<br />
Roster: chayJESUS, farias, ponter, TACO, v$m<br />
Global Rank: [126](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_04_07.md)<br />
Regional Rank: [30]( ../../standings_americas_2025_04_07.md)<br />
<br />
Final Rank Value:  684.0<br />
<br />
Final Rank Value (684.0) = Starting Rank Value (661.3) + Head To Head Adjustments (22.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.286[<sup>1</sup>](#table2)
- Bounty Collected: 0.204[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.126<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 661.3
- 400 + ( ( 0.126 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 661.3


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
|           11 |     1183 | 2024-11-29 | Fluxo                    | L   | 0.339      | -            | -                | -                | -         |    -2.81 | chayJESUS, farias, ponter, TACO, v$m |
|           10 |     1219 | 2024-11-27 | Bad News Chickens        | W   | 0.324      | 0.371        | 0.001 (0.000)    | 0.109 (0.013)    | 0 (0.000) |     4.26 | chayJESUS, farias, ponter, TACO, v$m |
|            9 |     1274 | 2024-11-23 | Game Hunters             | W   | 0.299      | 0.371        | 0.000 (0.000)    | 0.070 (0.008)    | 0 (0.000) |     2.49 | chayJESUS, farias, ponter, TACO, v$m |
|            8 |     1331 | 2024-11-21 | Players (Brazilian team) | W   | 0.286      | 0.371        | 0.008 (0.001)    | 0.541 (0.057)    | 0 (0.000) |     5.04 | chayJESUS, farias, ponter, TACO, v$m |
|            7 |     1382 | 2024-11-18 | 9z Academy               | W   | 0.267      | 0.371        | 0.000 (0.000)    | 0.163 (0.016)    | 0 (0.000) |     2.51 | chayJESUS, farias, ponter, TACO, v$m |
|            6 |     1395 | 2024-11-17 | Bad News Chickens        | W   | 0.259      | 0.143        | 0.001 (0.000)    | 0.109 (0.004)    | 0 (0.000) |     3.61 | chayJESUS, farias, ponter, TACO, v$m |
|            5 |     1614 | 2024-11-08 | Fluxo                    | L   | 0.200      | -            | -                | -                | -         |    -1.68 | farias, n1ssim, ponter, TACO, v$m    |
|            4 |     1631 | 2024-11-07 | Intense Game             | W   | 0.193      | 0.371        | 0.001 (0.000)    | 0.012 (0.001)    | 0 (0.000) |     2.52 | farias, n1ssim, ponter, TACO, v$m    |
|            3 |     1700 | 2024-11-02 | UNO MILLE                | W   | 0.160      | 0.371        | 0.004 (0.000)    | 0.368 (0.022)    | 0 (0.000) |     2.65 | farias, n1ssim, ponter, TACO, v$m    |
|            2 |     1742 | 2024-10-31 | ShindeN                  | W   | 0.146      | 0.371        | 0.000 (0.000)    | 0.343 (0.019)    | 0 (0.000) |     2.06 | farias, n1ssim, ponter, TACO, v$m    |
|            1 |     1780 | 2024-10-29 | MIBR Academy             | W   | 0.132      | 0.371        | 0.000 (0.000)    | 0.306 (0.015)    | 0 (0.000) |     1.98 | farias, n1ssim, ponter, TACO, v$m    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($727.91)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-30 |      0.346 | $750.00        | $259.74         |
| 2024-11-17 |      0.259 | $1,207.53      | $313.29         |
| 2024-11-09 |      0.207 | $750.00        | $154.88         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
