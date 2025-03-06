### Roster Details<br />
Team Name: Imperial Esports<br />
Roster: chayJESUS, decenty, noway, try, VINI<br />
Global Rank: [18](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_04.md)<br />
Regional Rank: [3]( ../../standings_americas_2025_08_04.md)<br />
<br />
Final Rank Value:  902.3<br />
<br />
Final Rank Value (902.3) = Starting Rank Value (898.6) + Head To Head Adjustments (3.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.517[<sup>1</sup>](#table2)
- Bounty Collected: 0.239[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.190<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 898.6
- 400 + ( ( 0.190 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 898.6


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
|           12 |      103 | 2025-02-22 | Sharks Esports | W   | 0.114      | 0.371        | 0.046 (0.002)    | 0.564 (0.024)    | 0 (0.000) |     1.41 | chayJESUS, decenty, noway, try, VINI |
|           11 |      105 | 2025-02-22 | Fluxo          | W   | 0.113      | 0.371        | 0.017 (0.001)    | 0.287 (0.012)    | 0 (0.000) |     1.17 | chayJESUS, decenty, noway, try, VINI |
|           10 |      119 | 2025-02-21 | Legacy         | W   | 0.107      | 0.371        | 0.009 (0.000)    | 0.355 (0.014)    | 0 (0.000) |     0.99 | chayJESUS, decenty, noway, try, VINI |
|            9 |      324 | 2025-02-11 | Sharks Esports | L   | 0.040      | -            | -                | -                | -         |    -0.77 | chayJESUS, decenty, noway, try, VINI |
|            8 |      329 | 2025-02-11 | Fluxo          | L   | 0.039      | -            | -                | -                | -         |    -0.83 | chayJESUS, decenty, noway, try, VINI |
|            7 |      388 | 2025-02-09 | MIBR           | W   | 0.026      | 0.143        | 0.227 (0.001)    | 0.161 (0.001)    | 0 (0.000) |     0.62 | chayJESUS, decenty, noway, try, VINI |
|            6 |      403 | 2025-02-09 | PaiN Gaming    | W   | 0.024      | 0.143        | 0.756 (0.003)    | 0.330 (0.001)    | 0 (0.000) |     0.75 | chayJESUS, decenty, noway, try, VINI |
|            5 |      426 | 2025-02-08 | Nitro.GG       | W   | 0.020      | 0.143        | 0.000 (0.000)    | 0.049 (0.000)    | 0 (0.000) |     0.04 | chayJESUS, decenty, noway, try, VINI |
|            4 |      432 | 2025-02-08 | KRÜ Esports    | W   | 0.019      | 0.143        | 0.000 (0.000)    | 0.059 (0.000)    | 0 (0.000) |     0.04 | chayJESUS, decenty, noway, try, VINI |
|            3 |      459 | 2025-02-08 | Fluxo          | W   | 0.018      | 0.143        | 0.017 (0.000)    | 0.287 (0.001)    | 0 (0.000) |     0.18 | chayJESUS, decenty, noway, try, VINI |
|            2 |      487 | 2025-02-07 | ShindeN        | W   | 0.013      | 0.143        | 0.000 (0.000)    | 0.143 (0.000)    | 0 (0.000) |     0.02 | chayJESUS, decenty, noway, try, VINI |
|            1 |      494 | 2025-02-07 | AdalYamigos    | W   | 0.011      | 0.143        | 0.000 (0.000)    | 0.086 (0.000)    | 0 (0.000) |     0.02 | chayJESUS, decenty, noway, try, VINI |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,136.57)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-22 |      0.114 | $10,000.00     | $1,136.57       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
