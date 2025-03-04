### Roster Details<br />
Team Name: NIP Impact<br />
Roster: aiM, Nayomy, Qiyarah, ramziiN, vilga<br />
Global Rank: [156](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [107]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  690.9<br />
<br />
Final Rank Value (690.9) = Starting Rank Value (697.9) + Head To Head Adjustments (-7.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.340[<sup>1</sup>](#table2)
- Bounty Collected: 0.220[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.063[<sup>2</sup>](#table1)

The average of these factors is 0.156<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 697.9
- 400 + ( ( 0.156 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 697.9


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
|            9 |     1286 | 2024-11-23 | BIG EQUIPA                 | L   | 0.545      | -            | -                | -                | -         |    -7.01 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            8 |     1303 | 2024-11-22 | K27 Female                 | W   | 0.540      | 0.524        | 0.007 (0.002)    | 0.052 (0.015)    | 1 (0.540) |     8.00 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            7 |     1314 | 2024-11-22 | BIG EQUIPA                 | L   | 0.538      | -            | -                | -                | -         |    -6.98 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            6 |     1883 | 2024-10-18 | Let Her Cook               | L   | 0.306      | -            | -                | -                | -         |    -5.82 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            5 |     2240 | 2024-10-03 | Team Denmark (Female team) | W   | 0.206      | 0.406        | 0.008 (0.001)    | 0.067 (0.006)    | 0 (0.000) |     3.14 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            4 |     2539 | 2024-09-25 | Team Spirit Female         | W   | 0.153      | 0.406        | 0.002 (0.000)    | 0.046 (0.003)    | 0 (0.000) |     1.87 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            3 |     2880 | 2024-09-14 | Eco Warriors               | L   | 0.079      | -            | -                | -                | -         |    -0.93 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            2 |     2892 | 2024-09-14 | Insilio Female             | W   | 0.078      | 0.377        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.39 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            1 |     3131 | 2024-09-05 | Eco Warriors               | W   | 0.020      | 0.406        | 0.022 (0.000)    | 0.191 (0.002)    | 0 (0.000) |     0.39 | aiM, Nayomy, Qiyarah, ramziiN, vilga |

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
