### Roster Details<br />
Team Name: NightRaid<br />
Roster: k1ndoff, M1rage0, PARKER, sashqua, Sul9n<br />
Global Rank: [262](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [178]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  732.1<br />
<br />
Final Rank Value (732.1) = Starting Rank Value (721.6) + Head To Head Adjustments (10.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.281[<sup>1</sup>](#table2)
- Bounty Collected: 0.231[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.129[<sup>2</sup>](#table1)

The average of these factors is 0.161<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 721.6
- 400 + ( ( 0.161 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 721.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     3987 | 2024-11-01 | REMBAZA     | W   | 0.404      | 1.000        | 0.005 (0.002)    | 0.051 (0.021)    | 1 (0.404) |     6.84 | k1ndoff, M1rage0, PARKER, sashqua, Sul9n |
|            6 |     3995 | 2024-10-31 | Gameinside  | W   | 0.403      | 1.000        | 0.005 (0.002)    | 0.029 (0.012)    | 1 (0.403) |     6.29 | k1ndoff, M1rage0, PARKER, sashqua, Sul9n |
|            5 |     5763 | 2024-09-29 | REMBAZA     | L   | 0.184      | -            | -                | -                | -         |    -2.62 | k1ndoff, M1rage0, myata, PARKER, Sul9n   |
|            4 |     5772 | 2024-09-29 | Purple Haze | W   | 0.183      | 1.000        | 0.004 (0.001)    | 0.000 (0.000)    | 1 (0.183) |     1.58 | k1ndoff, M1rage0, myata, PARKER, Sul9n   |
|            3 |     6574 | 2024-09-17 | REMBAZA     | L   | 0.109      | -            | -                | -                | -         |    -1.58 | k1ndoff, M1rage0, PARKER, Sul9n, zed1x   |
|            2 |     7270 | 2024-09-07 | REMBAZA     | L   | 0.037      | -            | -                | -                | -         |    -0.54 | k1ndoff, M1rage0, PARKER, TeeZz, zed1x   |
|            1 |     7281 | 2024-09-06 | Gameinside  | W   | 0.036      | 1.000        | 0.005 (0.000)    | 0.029 (0.001)    | 1 (0.036) |     0.55 | k1ndoff, M1rage0, PARKER, TeeZz, zed1x   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($798.07)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-01 |      0.404 | $1,165.32      | $471.12         |
| 2024-09-29 |      0.184 | $1,032.56      | $190.00         |
| 2024-09-18 |      0.111 | $890.67        | $98.57          |
| 2024-09-07 |      0.037 | $1,035.75      | $38.39          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
