### Roster Details<br />
Team Name: Kappa Bar<br />
Roster: Bååten, eraa, robiin, SeBreeZe, siz<br />
Global Rank: [152](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [104]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  705.5<br />
<br />
Final Rank Value (705.5) = Starting Rank Value (705.3) + Head To Head Adjustments (0.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.316[<sup>1</sup>](#table2)
- Bounty Collected: 0.205[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.120[<sup>2</sup>](#table1)

The average of these factors is 0.160<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 705.3
- 400 + ( ( 0.160 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 705.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     1312 | 2024-11-22 | Alliance        | L   | 0.539      | -            | -                | -                | -         |    -3.16 | Bååten, eraa, robiin, SeBreeZe, siz  |
|            7 |     1332 | 2024-11-21 | Johnny Speeds   | L   | 0.533      | -            | -                | -                | -         |    -3.43 | Bååten, eraa, robiin, SeBreeZe, siz  |
|            6 |     1342 | 2024-11-21 | Kario Mart      | W   | 0.531      | 0.660        | 0.004 (0.001)    | 0.000 (0.000)    | 1 (0.531) |     4.63 | Bååten, eraa, robiin, SeBreeZe, siz  |
|            5 |     1423 | 2024-11-16 | Northern Lights | W   | 0.500      | 0.143        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.500) |     4.02 | eraa, robiin, SeBreeZe, siz, Twinkey |
|            4 |     1630 | 2024-11-07 | Metizport       | L   | 0.441      | -            | -                | -                | -         |    -1.10 | eraa, robiin, SeBreeZe, siz, virree  |
|            3 |     1830 | 2024-10-26 | EYEBALLERS      | L   | 0.358      | -            | -                | -                | -         |    -3.64 | eraa, Lekr0, robiin, Sapec, SeBreeZe |
|            2 |     2037 | 2024-10-09 | Megoshort       | W   | 0.246      | 0.143        | 0.000 (0.000)    | 0.014 (0.000)    | 0 (0.000) |     1.66 | eraa, robiin, SeBreeZe, siz, virree  |
|            1 |     2097 | 2024-10-08 | Knaeskydd       | W   | 0.239      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.15 | eraa, robiin, SeBreeZe, siz, virree  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,320.82)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-23 |      0.546 | $2,265.27      | $1,237.56       |
| 2024-11-16 |      0.500 | $910.86        | $455.18         |
| 2024-11-09 |      0.453 | $1,387.18      | $628.08         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
