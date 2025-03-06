### Roster Details<br />
Team Name: Imperial Esports<br />
Roster: chayJESUS, decenty, noway, try, VINI<br />
Global Rank: [30](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_06_02.md)<br />
Regional Rank: [7]( ../../standings_americas_2025_06_02.md)<br />
<br />
Final Rank Value:  897.4<br />
<br />
Final Rank Value (897.4) = Starting Rank Value (861.2) + Head To Head Adjustments (36.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.451[<sup>1</sup>](#table2)
- Bounty Collected: 0.305[<sup>2</sup>](#table1)
- Opponent Network: 0.040[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.199<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 861.2
- 400 + ( ( 0.199 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 861.2


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
|           14 |      103 | 2025-02-22 | Sharks Esports | W   | 0.534      | 0.371        | 0.027 (0.005)    | 0.464 (0.092)    | 0 (0.000) |     6.62 | chayJESUS, decenty, noway, try, VINI |
|           13 |      105 | 2025-02-22 | Fluxo          | W   | 0.533      | 0.371        | 0.009 (0.002)    | 0.264 (0.052)    | 0 (0.000) |     5.34 | chayJESUS, decenty, noway, try, VINI |
|           12 |      119 | 2025-02-21 | Legacy         | W   | 0.527      | 0.371        | 0.027 (0.005)    | 0.668 (0.130)    | 0 (0.000) |     6.96 | chayJESUS, decenty, noway, try, VINI |
|           11 |      324 | 2025-02-11 | Sharks Esports | L   | 0.460      | -            | -                | -                | -         |    -8.89 | chayJESUS, decenty, noway, try, VINI |
|           10 |      329 | 2025-02-11 | Fluxo          | L   | 0.459      | -            | -                | -                | -         |   -10.20 | chayJESUS, decenty, noway, try, VINI |
|            9 |      388 | 2025-02-09 | MIBR           | W   | 0.446      | 0.143        | 0.153 (0.010)    | 0.317 (0.020)    | 0 (0.000) |    11.54 | chayJESUS, decenty, noway, try, VINI |
|            8 |      403 | 2025-02-09 | PaiN Gaming    | W   | 0.444      | 0.143        | 0.481 (0.031)    | 0.453 (0.029)    | 0 (0.000) |    13.74 | chayJESUS, decenty, noway, try, VINI |
|            7 |      426 | 2025-02-08 | Nitro.GG       | W   | 0.440      | 0.143        | 0.000 (0.000)    | 0.190 (0.012)    | 0 (0.000) |     0.99 | chayJESUS, decenty, noway, try, VINI |
|            6 |      432 | 2025-02-08 | KRÜ Esports    | W   | 0.439      | 0.143        | 0.000 (0.000)    | -                | 0 (0.000) |     0.91 | chayJESUS, decenty, noway, try, VINI |
|            5 |      459 | 2025-02-08 | Fluxo          | W   | 0.438      | 0.143        | 0.009 (0.001)    | 0.264 (0.016)    | 0 (0.000) |     4.55 | chayJESUS, decenty, noway, try, VINI |
|            4 |      487 | 2025-02-07 | ShindeN        | W   | 0.433      | 0.143        | 0.000 (0.000)    | 0.256 (0.016)    | 0 (0.000) |     0.99 | chayJESUS, decenty, noway, try, VINI |
|            3 |      494 | 2025-02-07 | AdalYamigos    | W   | 0.431      | 0.143        | 0.000 (0.000)    | 0.239 (0.015)    | 0 (0.000) |     1.03 | chayJESUS, decenty, noway, try, VINI |
|            2 |      537 | 2025-02-05 | AdalYamigos    | W   | 0.419      | 0.143        | -                | 0.239 (0.014)    | -         |     0.96 | chayJESUS, decenty, noway, try, VINI |
|            1 |      545 | 2025-02-05 | Fake do Biru   | W   | 0.418      | -            | -                | -                | -         |     1.64 | chayJESUS, decenty, noway, try, VINI |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,336.57)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-22 |      0.534 | $10,000.00     | $5,336.57       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
