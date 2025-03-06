### Roster Details<br />
Team Name: Kappa Bar<br />
Roster: Bååten, eraa, robiin, SeBreeZe, siz<br />
Global Rank: [123](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [86]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  654.1<br />
<br />
Final Rank Value (654.1) = Starting Rank Value (654.9) + Head To Head Adjustments (-0.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.281[<sup>1</sup>](#table2)
- Bounty Collected: 0.154[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.034[<sup>2</sup>](#table1)

The average of these factors is 0.117<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 654.9
- 400 + ( ( 0.117 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 654.9


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
|            5 |     1312 | 2024-11-22 | Alliance        | L   | 0.104      | -            | -                | -                | -         |    -1.11 | Bååten, eraa, robiin, SeBreeZe, siz  |
|            4 |     1332 | 2024-11-21 | Johnny Speeds   | L   | 0.098      | -            | -                | -                | -         |    -1.27 | Bååten, eraa, robiin, SeBreeZe, siz  |
|            3 |     1342 | 2024-11-21 | Kario Mart      | W   | 0.096      | 0.143        | 0.002 (0.000)    | 0.000 (0.000)    | 1 (0.096) |     1.07 | Bååten, eraa, robiin, SeBreeZe, siz  |
|            2 |     1423 | 2024-11-16 | Northern Lights | W   | 0.065      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.065) |     0.65 | eraa, robiin, SeBreeZe, siz, Twinkey |
|            1 |     1630 | 2024-11-07 | Metizport       | L   | 0.006      | -            | -                | -                | -         |    -0.06 | eraa, robiin, SeBreeZe, siz, virree  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($335.78)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-23 |      0.111 | $2,265.27      | $252.17         |
| 2024-11-16 |      0.065 | $910.86        | $58.95          |
| 2024-11-09 |      0.018 | $1,387.18      | $24.66          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
