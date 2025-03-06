### Roster Details<br />
Team Name: Imperial Esports<br />
Roster: chayJESUS, decenty, noway, try, VINI<br />
Global Rank: [28](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_07_07.md)<br />
Regional Rank: [7]( ../../standings_americas_2025_07_07.md)<br />
<br />
Final Rank Value:  878.4<br />
<br />
Final Rank Value (878.4) = Starting Rank Value (860.8) + Head To Head Adjustments (17.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.452[<sup>1</sup>](#table2)
- Bounty Collected: 0.274[<sup>2</sup>](#table1)
- Opponent Network: 0.021[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.187<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 860.8
- 400 + ( ( 0.187 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 860.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      103 | 2025-02-22 | Sharks Esports | W   | 0.300      | 0.371        | 0.024 (0.003)    | 0.515 (0.057)    | 0 (0.000) |     3.67 | chayJESUS, decenty, noway, try, VINI |
|           13 |      105 | 2025-02-22 | Fluxo          | W   | 0.299      | 0.371        | 0.009 (0.001)    | 0.296 (0.033)    | 0 (0.000) |     3.15 | chayJESUS, decenty, noway, try, VINI |
|           12 |      119 | 2025-02-21 | Legacy         | W   | 0.294      | 0.371        | 0.009 (0.001)    | 0.620 (0.067)    | 0 (0.000) |     3.26 | chayJESUS, decenty, noway, try, VINI |
|           11 |      324 | 2025-02-11 | Sharks Esports | L   | 0.227      | -            | -                | -                | -         |    -4.42 | chayJESUS, decenty, noway, try, VINI |
|           10 |      329 | 2025-02-11 | Fluxo          | L   | 0.226      | -            | -                | -                | -         |    -4.82 | chayJESUS, decenty, noway, try, VINI |
|            9 |      388 | 2025-02-09 | MIBR           | W   | 0.213      | 0.143        | 0.136 (0.004)    | 0.316 (0.010)    | 0 (0.000) |     5.48 | chayJESUS, decenty, noway, try, VINI |
|            8 |      403 | 2025-02-09 | PaiN Gaming    | W   | 0.211      | 0.143        | 0.443 (0.013)    | 0.428 (0.013)    | 0 (0.000) |     6.52 | chayJESUS, decenty, noway, try, VINI |
|            7 |      426 | 2025-02-08 | Nitro.GG       | W   | 0.206      | 0.143        | 0.000 (0.000)    | -                | 0 (0.000) |     0.46 | chayJESUS, decenty, noway, try, VINI |
|            6 |      432 | 2025-02-08 | KRÜ Esports    | W   | 0.206      | 0.143        | 0.000 (0.000)    | 0.162 (0.005)    | 0 (0.000) |     0.44 | chayJESUS, decenty, noway, try, VINI |
|            5 |      459 | 2025-02-08 | Fluxo          | W   | 0.204      | 0.143        | 0.009 (0.000)    | 0.296 (0.009)    | 0 (0.000) |     2.20 | chayJESUS, decenty, noway, try, VINI |
|            4 |      487 | 2025-02-07 | ShindeN        | W   | 0.200      | 0.143        | 0.000 (0.000)    | 0.187 (0.005)    | 0 (0.000) |     0.44 | chayJESUS, decenty, noway, try, VINI |
|            3 |      494 | 2025-02-07 | AdalYamigos    | W   | 0.198      | 0.143        | 0.000 (0.000)    | 0.242 (0.007)    | 0 (0.000) |     0.45 | chayJESUS, decenty, noway, try, VINI |
|            2 |      537 | 2025-02-05 | AdalYamigos    | W   | 0.186      | 0.143        | -                | 0.242 (0.006)    | -         |     0.42 | chayJESUS, decenty, noway, try, VINI |
|            1 |      545 | 2025-02-05 | Fake do Biru   | W   | 0.185      | -            | -                | -                | -         |     0.41 | chayJESUS, decenty, noway, try, VINI |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,003.24)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-22 |      0.300 | $10,000.00     | $3,003.24       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
