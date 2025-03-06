### Roster Details<br />
Team Name: Yawara E-Sports<br />
Roster: j0w, nardes, revoltz, stAx, telezin<br />
Global Rank: [138](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_05_05.md)<br />
Regional Rank: [32]( ../../standings_americas_2025_05_05.md)<br />
<br />
Final Rank Value:  598.1<br />
<br />
Final Rank Value (598.1) = Starting Rank Value (596.5) + Head To Head Adjustments (1.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.221[<sup>1</sup>](#table2)
- Bounty Collected: 0.130[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.090<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 596.5
- 400 + ( ( 0.090 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 596.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                 | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      179 | 2025-02-17 | ShindeN                  | W   | 0.686      | 0.371        | 0.000 (0.000)    | 0.290 (0.074)    | 0 (0.000) |     8.26 | j0w, nardes, revoltz, stAx, telezin |
|           11 |      206 | 2025-02-16 | Swingers                 | L   | 0.678      | -            | -                | -                | -         |    -7.41 | j0w, nardes, revoltz, stAx, telezin |
|           10 |      284 | 2025-02-13 | Familia Maquininha       | W   | 0.659      | 0.371        | 0.000 (0.000)    | 0.072 (0.018)    | 0 (0.000) |     7.62 | j0w, nardes, revoltz, stAx, telezin |
|            9 |      387 | 2025-02-09 | Dusty Roots              | L   | 0.633      | -            | -                | -                | -         |    -6.95 | j0w, nardes, revoltz, stAx, telezin |
|            8 |     1211 | 2024-11-27 | Fluxo                    | L   | 0.140      | -            | -                | -                | -         |    -1.00 | j0w, lash, revoltz, stAx, telezin   |
|            7 |     1223 | 2024-11-26 | PaiN Gaming Academy      | W   | 0.133      | 0.371        | 0.000 (0.000)    | 0.025 (0.001)    | 0 (0.000) |     1.06 | j0w, lash, revoltz, stAx, telezin   |
|            6 |     1240 | 2024-11-25 | Players (Brazilian team) | L   | 0.125      | -            | -                | -                | -         |    -1.32 | j0w, lash, revoltz, stAx, telezin   |
|            5 |     1278 | 2024-11-23 | 9z Academy               | W   | 0.112      | 0.371        | 0.000 (0.000)    | 0.103 (0.004)    | 0 (0.000) |     1.36 | j0w, lash, revoltz, stAx, telezin   |
|            4 |     1330 | 2024-11-21 | MIBR Academy             | L   | 0.100      | -            | -                | -                | -         |    -1.42 | j0w, lash, revoltz, stAx, telezin   |
|            3 |     1371 | 2024-11-19 | BeBold.gg                | W   | 0.086      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.67 | j0w, lash, revoltz, stAx, telezin   |
|            2 |     1583 | 2024-11-10 | MIBR Academy             | W   | 0.026      | 0.143        | 0.000 (0.000)    | 0.258 (0.001)    | 0 (0.000) |     0.45 | j0w, lash, revoltz, stAx, telezin   |
|            1 |     1593 | 2024-11-09 | 20/70                    | W   | 0.019      | 0.143        | 0.001 (0.000)    | 0.064 (0.000)    | 0 (0.000) |     0.24 | j0w, lash, revoltz, stAx, telezin   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($36.41)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-10 |      0.026 | $1,394.24      | $36.41          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
