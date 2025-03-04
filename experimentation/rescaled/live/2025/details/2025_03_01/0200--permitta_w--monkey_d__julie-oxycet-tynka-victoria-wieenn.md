### Roster Details<br />
Team Name: Permitta W<br />
Roster: Monkey D. Julie, oxycet, Tynka, victoria, wieenn<br />
Global Rank: [200](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [124]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  624.2<br />
<br />
Final Rank Value (624.2) = Starting Rank Value (619.8) + Head To Head Adjustments (4.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.280[<sup>1</sup>](#table2)
- Bounty Collected: 0.181[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.115<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 619.8
- 400 + ( ( 0.115 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 619.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent              | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      849 | 2024-12-15 | Nomercy (Female team) | W   | 0.693      | 0.262        | 0.002 (0.000)    | 0.070 (0.013)    | 0 (0.000) |    10.47 | Monkey D. Julie, oxycet, Tynka, victoria, wieenn |
|            4 |     1884 | 2024-10-18 | K27 Female            | L   | 0.306      | -            | -                | -                | -         |    -4.18 | Missy, Monkey D. Julie, oxycet, Tynka, victoria  |
|            3 |     2280 | 2024-10-02 | Imperial Female       | L   | 0.200      | -            | -                | -                | -         |    -0.67 | Missy, Monkey D. Julie, oxycet, Tynka, victoria  |
|            2 |     2540 | 2024-09-25 | BIG EQUIPA            | L   | 0.153      | -            | -                | -                | -         |    -1.53 | Missy, Monkey D. Julie, oxycet, Tynka, victoria  |
|            1 |     3132 | 2024-09-05 | Nomercy (Female team) | W   | 0.020      | 0.560        | 0.002 (0.000)    | 0.070 (0.001)    | 0 (0.000) |     0.30 | Missy, Monkey D. Julie, oxycet, Tynka, victoria  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($902.88)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.693 | $750.00        | $519.38         |
| 2024-10-20 |      0.320 | $1,200.00      | $383.50         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
