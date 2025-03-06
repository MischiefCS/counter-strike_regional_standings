### Roster Details<br />
Team Name: Shimmer<br />
Roster: empathy, Fawx, milo, raven, Stx<br />
Global Rank: [123](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_04_07.md)<br />
Regional Rank: [28]( ../../standings_americas_2025_04_07.md)<br />
<br />
Final Rank Value:  691.1<br />
<br />
Final Rank Value (691.1) = Starting Rank Value (669.1) + Head To Head Adjustments (22.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.321[<sup>1</sup>](#table2)
- Bounty Collected: 0.199[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.130<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 669.1
- 400 + ( ( 0.130 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 669.1


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
|            7 |      727 | 2025-01-04 | Lotus              | W   | 0.580      | 0.250        | 0.002 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.27 | empathy, Fawx, milo, raven, Stx        |
|            6 |      838 | 2024-12-15 | Lotus              | W   | 0.447      | 0.250        | 0.002 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.22 | empathy, milo, raven, Serendipity, Stx |
|            5 |      957 | 2024-12-08 | GIRLYPOPS          | W   | 0.400      | 0.250        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.64 | empathy, Fawx, phoebe, raven, Stx      |
|            4 |     1126 | 2024-12-01 | Lotus              | W   | 0.353      | 0.250        | 0.002 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.48 | empathy, Fawx, phoebe, raven, Stx      |
|            3 |     1394 | 2024-11-17 | Lotus              | W   | 0.260      | 0.250        | 0.002 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.62 | empathy, Fawx, phoebe, raven, Stx      |
|            2 |     1678 | 2024-11-03 | Lotus              | W   | 0.166      | 0.250        | 0.002 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.70 | Celia, empathy, phoebe, raven, Stx     |
|            1 |     1798 | 2024-10-27 | Unjustified Impact | W   | 0.120      | 0.250        | 0.000 (0.000)    | 0.065 (0.002)    | 0 (0.000) |     1.08 | Celi, empathy, phoebe, raven, Stx      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,743.65)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-01-04 |      0.580 | $750.00        | $434.79         |
| 2024-12-15 |      0.447 | $750.00        | $335.10         |
| 2024-12-08 |      0.400 | $750.00        | $299.79         |
| 2024-12-01 |      0.353 | $750.00        | $264.58         |
| 2024-11-17 |      0.260 | $750.00        | $194.79         |
| 2024-11-03 |      0.166 | $750.00        | $124.79         |
| 2024-10-27 |      0.120 | $750.00        | $89.79          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
