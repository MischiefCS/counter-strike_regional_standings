### Roster Details<br />
Team Name: Shimmer<br />
Roster: empathy, Fawx, milo, raven, Stx<br />
Global Rank: [155](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [35]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  700.2<br />
<br />
Final Rank Value (700.2) = Starting Rank Value (662.0) + Head To Head Adjustments (38.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.331[<sup>1</sup>](#table2)
- Bounty Collected: 0.219[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.138<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 662.0
- 400 + ( ( 0.138 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 662.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      727 | 2025-01-04 | Lotus              | W   | 0.828      | 0.424        | 0.002 (0.001)    | 0.000 (0.000)    | 0 (0.000) |     6.72 | empathy, Fawx, milo, raven, Stx        |
|            7 |      838 | 2024-12-15 | Lotus              | W   | 0.695      | 0.409        | 0.002 (0.001)    | 0.000 (0.000)    | 0 (0.000) |     5.96 | empathy, milo, raven, Serendipity, Stx |
|            6 |      957 | 2024-12-08 | GIRLYPOPS          | W   | 0.648      | 0.250        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.56 | empathy, Fawx, phoebe, raven, Stx      |
|            5 |     1126 | 2024-12-01 | Lotus              | W   | 0.601      | 0.386        | 0.002 (0.001)    | 0.000 (0.000)    | 0 (0.000) |     5.53 | empathy, Fawx, phoebe, raven, Stx      |
|            4 |     1394 | 2024-11-17 | Lotus              | W   | 0.508      | 0.351        | 0.002 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.87 | empathy, Fawx, phoebe, raven, Stx      |
|            3 |     1678 | 2024-11-03 | Lotus              | W   | 0.415      | 0.250        | 0.002 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.12 | Celia, empathy, phoebe, raven, Stx     |
|            2 |     1798 | 2024-10-27 | Unjustified Impact | W   | 0.368      | 0.250        | 0.000 (0.000)    | 0.060 (0.006)    | 0 (0.000) |     3.35 | Celi, empathy, phoebe, raven, Stx      |
|            1 |     2140 | 2024-10-06 | Imp Pact           | W   | 0.228      | 0.250        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.06 | Celi, empathy, phoebe, raven, Stx      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,218.23)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-01-04 |      0.828 | $750.00        | $621.04         |
| 2024-12-15 |      0.695 | $750.00        | $521.35         |
| 2024-12-08 |      0.648 | $750.00        | $486.04         |
| 2024-12-01 |      0.601 | $750.00        | $450.83         |
| 2024-11-17 |      0.508 | $750.00        | $381.04         |
| 2024-11-03 |      0.415 | $750.00        | $311.04         |
| 2024-10-27 |      0.368 | $750.00        | $276.04         |
| 2024-10-06 |      0.228 | $750.00        | $170.83         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
