### Roster Details<br />
Team Name: Shimmer<br />
Roster: empathy, Fawx, milo, raven, Stx<br />
Global Rank: [165](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [29]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  741.3<br />
<br />
Final Rank Value (741.3) = Starting Rank Value (673.6) + Head To Head Adjustments (67.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.331[<sup>1</sup>](#table2)
- Bounty Collected: 0.213[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.139<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 673.6
- 400 + ( ( 0.139 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 673.6


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
|           18 |      831 | 2025-01-04 | Lotus              | W   | 0.828      | 0.250        | 0.002 (0.000)    | 0.122 (0.025)    | 0 (0.000) |     8.72 | empathy, Fawx, milo, raven, Stx        |
|           17 |      897 | 2024-12-28 | Lumen              | W   | 0.782      | -            | -                | -                | 0 (0.000) |     3.32 | empathy, Fawx, milo, raven, Stx        |
|           16 |     1222 | 2024-12-15 | Lotus              | W   | 0.695      | 0.250        | 0.002 (0.000)    | 0.122 (0.021)    | 0 (0.000) |     7.73 | empathy, milo, raven, Serendipity, Stx |
|           15 |     1273 | 2024-12-14 | CrchWrapSupreme    | W   | 0.688      | -            | -                | -                | 0 (0.000) |     3.04 | empathy, milo, raven, Serendipity, Stx |
|           14 |     1566 | 2024-12-08 | GIRLYPOPS          | W   | 0.648      | 0.250        | 0.000 (0.000)    | 0.033 (0.005)    | 0 (0.000) |     6.68 | empathy, Fawx, phoebe, raven, Stx      |
|           13 |     1649 | 2024-12-07 | CrchWrapSupreme    | W   | 0.641      | -            | -                | -                | 0 (0.000) |     3.02 | empathy, Fawx, phoebe, raven, Stx      |
|           12 |     1982 | 2024-12-01 | Lotus              | W   | 0.601      | 0.250        | 0.002 (0.000)    | 0.122 (0.018)    | 0 (0.000) |     7.20 | empathy, Fawx, phoebe, raven, Stx      |
|           11 |     2048 | 2024-11-30 | GIRLYPOPS          | W   | 0.595      | 0.250        | 0.000 (0.000)    | 0.033 (0.005)    | 0 (0.000) |     6.51 | empathy, Fawx, phoebe, raven, Stx      |
|           10 |     2778 | 2024-11-17 | Lotus              | W   | 0.508      | 0.250        | 0.002 (0.000)    | 0.122 (0.016)    | 0 (0.000) |     6.38 | empathy, Fawx, phoebe, raven, Stx      |
|            9 |     2857 | 2024-11-16 | GIRLYPOPS          | W   | 0.501      | 0.250        | 0.000 (0.000)    | 0.033 (0.004)    | 0 (0.000) |     5.87 | empathy, Fawx, phoebe, raven, Stx      |
|            8 |     3555 | 2024-11-03 | Lotus              | W   | 0.415      | 0.250        | 0.002 (0.000)    | 0.122 (0.013)    | -         |     5.46 | Celia, empathy, phoebe, raven, Stx     |
|            7 |     3628 | 2024-11-02 | Kitsune            | W   | 0.408      | -            | -                | -                | -         |     2.24 | Celia, empathy, phoebe, raven, Stx     |
|            6 |     3960 | 2024-10-27 | Unjustified Impact | W   | 0.368      | 0.250        | 0.000 (0.000)    | 0.070 (0.006)    | -         |     3.33 | Celi, empathy, phoebe, raven, Stx      |
|            5 |     4008 | 2024-10-26 | Kitsune            | W   | 0.362      | -            | -                | -                | -         |     2.05 | Celi, empathy, phoebe, raven, Stx      |
|            4 |     4681 | 2024-10-12 | Team Aether        | L   | 0.268      | -            | -                | -                | -         |    -6.06 | Celi, empathy, phoebe, raven, Stx      |
|            3 |     4687 | 2024-10-12 | Fisher College     | L   | 0.267      | -            | -                | -                | -         |    -3.30 | Celi, empathy, phoebe, raven, Stx      |
|            2 |     4982 | 2024-10-06 | Imp Pact           | W   | 0.228      | 0.250        | -                | 0.011 (0.001)    | -         |     2.73 | Celi, empathy, phoebe, raven, Stx      |
|            1 |     5030 | 2024-10-05 | Aware Impact       | W   | 0.222      | 0.250        | 0.001 (0.000)    | -                | -         |     2.77 | Celi, empathy, phoebe, raven, Stx      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,218.44)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
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
| 2024-10-06 |      0.228 | $750.00        | $171.04         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
