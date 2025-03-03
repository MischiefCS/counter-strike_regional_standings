### Roster Details<br />
Team Name: NIP Impact<br />
Roster: aiM, Nayomy, Qiyarah, ramziiN, vilga<br />
Global Rank: [169](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [118]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  699.3<br />
<br />
Final Rank Value (699.3) = Starting Rank Value (706.5) + Head To Head Adjustments (-7.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.340[<sup>1</sup>](#table2)
- Bounty Collected: 0.221[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.063[<sup>2</sup>](#table1)

The average of these factors is 0.157<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 706.5
- 400 + ( ( 0.157 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 706.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |     2393 | 2024-11-23 | BIG EQUIPA                 | L   | 0.545      | -            | -                | -                | -         |    -7.07 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            8 |     2437 | 2024-11-22 | K27 Female                 | W   | 0.540      | 0.524        | 0.007 (0.002)    | 0.048 (0.014)    | 1 (0.540) |     7.81 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            7 |     2451 | 2024-11-22 | BIG EQUIPA                 | L   | 0.538      | -            | -                | -                | -         |    -7.03 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            6 |     3498 | 2024-10-18 | Let Her Cook               | L   | 0.306      | -            | -                | -                | -         |    -5.88 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            5 |     3855 | 2024-10-03 | Team Denmark (Female team) | W   | 0.206      | 0.328        | 0.010 (0.001)    | 0.062 (0.004)    | 0 (0.000) |     3.15 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            4 |     4154 | 2024-09-25 | Team Spirit Female         | W   | 0.153      | 0.328        | 0.006 (0.000)    | 0.296 (0.015)    | 0 (0.000) |     2.08 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            3 |     4518 | 2024-09-14 | Eco Warriors               | L   | 0.079      | -            | -                | -                | -         |    -0.97 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            2 |     4530 | 2024-09-14 | Insilio Female             | W   | 0.078      | 0.294        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.37 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            1 |     4769 | 2024-09-05 | Eco Warriors               | W   | 0.020      | 0.328        | 0.022 (0.000)    | 0.178 (0.001)    | 0 (0.000) |     0.38 | aiM, Nayomy, Qiyarah, ramziiN, vilga |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,868.47)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      0.553 | $7,000.00      | $3,868.47       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
