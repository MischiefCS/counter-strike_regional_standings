### Roster Details<br />
Team Name: Legacy<br />
Roster: dumau, latto, lux, n1ssim, saadzin<br />
Global Rank: [26](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_04.md)<br />
Regional Rank: [7]( ../../standings_americas_2025_08_04.md)<br />
<br />
Final Rank Value:  740.6<br />
<br />
Final Rank Value (740.6) = Starting Rank Value (738.6) + Head To Head Adjustments (2.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.327[<sup>1</sup>](#table2)
- Bounty Collected: 0.188[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.129<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 738.6
- 400 + ( ( 0.129 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 738.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      119 | 2025-02-21 | Imperial Esports | L   | 0.107      | -            | -                | -                | -         |    -0.99 | dumau, latto, lux, n1ssim, saadzin |
|            9 |      152 | 2025-02-20 | UNO MILLE        | W   | 0.100      | 0.371        | 0.000 (0.000)    | 0.229 (0.009)    | 0 (0.000) |     0.41 | dumau, latto, lux, n1ssim, saadzin |
|            8 |      302 | 2025-02-12 | Fluxo            | W   | 0.047      | 0.143        | 0.017 (0.000)    | 0.287 (0.002)    | 0 (0.000) |     0.81 | dumau, latto, lux, n1ssim, saadzin |
|            7 |      323 | 2025-02-11 | Fluxo            | W   | 0.040      | 0.143        | 0.017 (0.000)    | 0.287 (0.002)    | 0 (0.000) |     0.69 | dumau, latto, lux, n1ssim, saadzin |
|            6 |      330 | 2025-02-11 | Sharks Esports   | W   | 0.039      | 0.143        | 0.046 (0.000)    | 0.564 (0.003)    | 0 (0.000) |     0.75 | dumau, latto, lux, n1ssim, saadzin |
|            5 |      427 | 2025-02-08 | BESTIA           | W   | 0.020      | 0.143        | 0.000 (0.000)    | 0.065 (0.000)    | 0 (0.000) |     0.13 | dumau, latto, lux, n1ssim, saadzin |
|            4 |      429 | 2025-02-08 | LaChampionsLiga  | W   | 0.019      | 0.143        | 0.000 (0.000)    | 0.020 (0.000)    | 0 (0.000) |     0.08 | dumau, latto, lux, n1ssim, saadzin |
|            3 |      448 | 2025-02-08 | MIBR             | L   | 0.018      | -            | -                | -                | -         |    -0.07 | dumau, latto, lux, n1ssim, saadzin |
|            2 |      486 | 2025-02-07 | UNO MILLE        | W   | 0.013      | 0.143        | 0.000 (0.000)    | 0.229 (0.000)    | 0 (0.000) |     0.05 | dumau, latto, lux, n1ssim, saadzin |
|            1 |      495 | 2025-02-07 | Team Solid       | W   | 0.011      | 0.143        | 0.009 (0.000)    | 0.300 (0.000)    | 0 (0.000) |     0.12 | dumau, latto, lux, n1ssim, saadzin |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($85.24)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-22 |      0.114 | $750.00        | $85.24          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
