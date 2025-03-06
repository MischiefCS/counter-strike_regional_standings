### Roster Details<br />
Team Name: Johnny Speeds<br />
Roster: bobeksde, draken, hampus, Ro1f, spooke<br />
Global Rank: [91](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [65]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  724.4<br />
<br />
Final Rank Value (724.4) = Starting Rank Value (719.2) + Head To Head Adjustments (5.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.344[<sup>1</sup>](#table2)
- Bounty Collected: 0.176[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.064[<sup>2</sup>](#table1)

The average of these factors is 0.147<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 719.2
- 400 + ( ( 0.147 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 719.2


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
|            5 |     1279 | 2024-11-23 | Alliance  | W   | 0.111      | 0.143        | 0.006 (0.000)    | 0.572 (0.009)    | 1 (0.111) |     2.00 | bobeksde, draken, hampus, Ro1f, spooke |
|            4 |     1332 | 2024-11-21 | Kappa Bar | W   | 0.098      | 0.143        | 0.003 (0.000)    | 0.018 (0.000)    | 1 (0.098) |     1.27 | bobeksde, draken, hampus, Ro1f, spooke |
|            3 |     1335 | 2024-11-21 | Alliance  | W   | 0.097      | 0.143        | 0.006 (0.000)    | 0.572 (0.008)    | 1 (0.097) |     1.76 | bobeksde, draken, hampus, Ro1f, spooke |
|            2 |     1584 | 2024-11-10 | OG        | W   | 0.025      | 0.143        | 0.000 (0.000)    | 1.000 (0.004)    | 0 (0.000) |     0.35 | bobeksde, draken, hampus, Ro1f, spooke |
|            1 |     1616 | 2024-11-08 | Metizport | L   | 0.012      | -            | -                | -                | -         |    -0.15 | bobeksde, draken, hampus, Ro1f, spooke |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,511.22)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      0.117 | $1,864.89      | $218.61         |
| 2024-11-23 |      0.111 | $10,873.30     | $1,210.41       |
| 2024-11-09 |      0.018 | $4,623.93      | $82.20          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
