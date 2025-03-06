### Roster Details<br />
Team Name: Shimmer<br />
Roster: empathy, Fawx, milo, raven, Stx<br />
Global Rank: [109](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_05_05.md)<br />
Regional Rank: [24]( ../../standings_americas_2025_05_05.md)<br />
<br />
Final Rank Value:  684.4<br />
<br />
Final Rank Value (684.4) = Starting Rank Value (673.4) + Head To Head Adjustments (10.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.316[<sup>1</sup>](#table2)
- Bounty Collected: 0.186[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.126<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 673.4
- 400 + ( ( 0.126 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 673.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      727 | 2025-01-04 | Lotus     | W   | 0.393      | 0.250        | 0.002 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.86 | empathy, Fawx, milo, raven, Stx        |
|            4 |      838 | 2024-12-15 | Lotus     | W   | 0.260      | 0.250        | 0.002 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.62 | empathy, milo, raven, Serendipity, Stx |
|            3 |      957 | 2024-12-08 | GIRLYPOPS | W   | 0.213      | 0.250        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.01 | empathy, Fawx, phoebe, raven, Stx      |
|            2 |     1126 | 2024-12-01 | Lotus     | W   | 0.166      | 0.250        | 0.002 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.71 | empathy, Fawx, phoebe, raven, Stx      |
|            1 |     1394 | 2024-11-17 | Lotus     | W   | 0.073      | 0.250        | 0.002 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.76 | empathy, Fawx, phoebe, raven, Stx      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($829.06)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-01-04 |      0.393 | $750.00        | $294.79         |
| 2024-12-15 |      0.260 | $750.00        | $195.10         |
| 2024-12-08 |      0.213 | $750.00        | $159.79         |
| 2024-12-01 |      0.166 | $750.00        | $124.58         |
| 2024-11-17 |      0.073 | $750.00        | $54.79          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
