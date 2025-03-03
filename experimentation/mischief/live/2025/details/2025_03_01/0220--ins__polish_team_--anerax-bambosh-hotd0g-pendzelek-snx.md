### Roster Details<br />
Team Name: Ins (Polish team)<br />
Roster: ANeraX, Bambosh, hotd0g, pendzelek, sNx<br />
Global Rank: [220](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [142]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  652.0<br />
<br />
Final Rank Value (652.0) = Starting Rank Value (643.8) + Head To Head Adjustments (8.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.287[<sup>1</sup>](#table2)
- Bounty Collected: 0.203[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.125<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 643.8
- 400 + ( ( 0.125 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 643.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent              | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |     1690 | 2024-12-08 | REDPack Esports       | L   | 0.646      | -            | -                | -                | -         |   -11.14 | ANeraX, Bambosh, hotd0g, pendzelek, sNx |
|           15 |     1788 | 2024-12-06 | YoCrew                | W   | 0.634      | 0.310        | 0.001 (0.000)    | 0.035 (0.007)    | 0 (0.000) |     6.21 | ANeraX, Bambosh, hotd0g, pendzelek, sNx |
|           14 |     1860 | 2024-12-04 | YENKEE Academy        | W   | 0.620      | 0.310        | 0.000 (0.000)    | 0.034 (0.007)    | 0 (0.000) |     3.95 | ANeraX, Bambosh, hotd0g, pendzelek, sNx |
|           13 |     2502 | 2024-11-20 | Lazer Cats            | L   | 0.527      | -            | -                | -                | -         |    -6.80 | ANeraX, Bambosh, hotd0g, pendzelek, sNx |
|           12 |     2516 | 2024-11-19 | ENTERPRISE Genesis    | W   | 0.520      | 0.278        | 0.001 (0.000)    | 0.172 (0.025)    | 0 (0.000) |     8.20 | ANeraX, Bambosh, hotd0g, pendzelek, sNx |
|           11 |     2533 | 2024-11-18 | Lazer Cats            | L   | 0.513      | -            | -                | -                | -         |    -6.74 | ANeraX, Bambosh, hotd0g, pendzelek, sNx |
|           10 |     2631 | 2024-11-16 | BRUTE                 | W   | 0.499      | 0.278        | 0.004 (0.001)    | 0.290 (0.040)    | 0 (0.000) |     9.14 | ANeraX, Bambosh, hotd0g, pendzelek, sNx |
|            9 |     2763 | 2024-11-13 | DUSTY                 | W   | 0.479      | 0.278        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.07 | ANeraX, Bambosh, hotd0g, pendzelek, sNx |
|            8 |     3024 | 2024-11-07 | XI Esport             | W   | 0.439      | 0.278        | 0.000 (0.000)    | 0.023 (0.003)    | 0 (0.000) |     2.91 | ANeraX, Bambosh, hotd0g, pendzelek, sNx |
|            7 |     3144 | 2024-11-03 | KUUSAMO.gg            | W   | 0.412      | 0.278        | 0.000 (0.000)    | 0.050 (0.006)    | 0 (0.000) |     2.69 | ANeraX, Bambosh, hotd0g, pendzelek, sNx |
|            6 |     3422 | 2024-10-27 | Illuminar Gaming      | L   | 0.364      | -            | -                | -                | -         |    -3.30 | ANeraX, Bambosh, hotd0g, pendzelek, sNx |
|            5 |     3443 | 2024-10-26 | GardenGarage          | L   | 0.358      | -            | -                | -                | -         |    -4.14 | ANeraX, Bambosh, hotd0g, pendzel, sNx   |
|            4 |     3446 | 2024-10-26 | Ex-ENTERPRISE esports | L   | 0.357      | -            | -                | -                | -         |    -4.76 | ANeraX, Bambosh, hotd0g, pendzel, sNx   |
|            3 |     3605 | 2024-10-11 | 500 Rush              | W   | 0.260      | 0.143        | 0.001 (0.000)    | 0.014 (0.001)    | 0 (0.000) |     3.62 | ANeraX, Bambosh, hotd0g, pendzelek, sNx |
|            2 |     3609 | 2024-10-11 | GameAgents            | W   | 0.259      | 0.143        | 0.003 (0.000)    | 0.097 (0.004)    | 0 (0.000) |     4.64 | ANeraX, Bambosh, hotd0g, pendzelek, sNx |
|            1 |     3614 | 2024-10-10 | Los kogutos           | L   | 0.253      | -            | -                | -                | -         |    -1.42 | ANeraX, Bambosh, hotd0g, pendzelek, sNx |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,093.48)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.694 | $350.00        | $242.81         |
| 2024-11-20 |      0.527 | $750.00        | $394.90         |
| 2024-10-27 |      0.366 | $1,244.91      | $455.78         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
