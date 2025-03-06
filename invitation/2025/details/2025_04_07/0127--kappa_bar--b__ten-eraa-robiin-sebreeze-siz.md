### Roster Details<br />
Team Name: Kappa Bar<br />
Roster: Bååten, eraa, robiin, SeBreeZe, siz<br />
Global Rank: [127](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [86]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  684.0<br />
<br />
Final Rank Value (684.0) = Starting Rank Value (687.4) + Head To Head Adjustments (-3.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.305[<sup>1</sup>](#table2)
- Bounty Collected: 0.171[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.080[<sup>2</sup>](#table1)

The average of these factors is 0.139<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 687.4
- 400 + ( ( 0.139 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 687.4


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
|            6 |     1312 | 2024-11-22 | Alliance        | L   | 0.290      | -            | -                | -                | -         |    -2.85 | Bååten, eraa, robiin, SeBreeZe, siz  |
|            5 |     1332 | 2024-11-21 | Johnny Speeds   | L   | 0.285      | -            | -                | -                | -         |    -3.10 | Bååten, eraa, robiin, SeBreeZe, siz  |
|            4 |     1342 | 2024-11-21 | Kario Mart      | W   | 0.283      | 0.143        | 0.003 (0.000)    | 0.000 (0.000)    | 1 (0.283) |     2.78 | Bååten, eraa, robiin, SeBreeZe, siz  |
|            3 |     1423 | 2024-11-16 | Northern Lights | W   | 0.251      | 0.143        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.251) |     2.25 | eraa, robiin, SeBreeZe, siz, Twinkey |
|            2 |     1630 | 2024-11-07 | Metizport       | L   | 0.193      | -            | -                | -                | -         |    -1.13 | eraa, robiin, SeBreeZe, siz, virree  |
|            1 |     1830 | 2024-10-26 | EYEBALLERS      | L   | 0.109      | -            | -                | -                | -         |    -1.34 | eraa, Lekr0, robiin, Sapec, SeBreeZe |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,187.60)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-23 |      0.298 | $2,265.27      | $675.02         |
| 2024-11-16 |      0.251 | $910.86        | $228.98         |
| 2024-11-09 |      0.204 | $1,387.18      | $283.60         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
