### Roster Details<br />
Team Name: Permitta W<br />
Roster: Monkey D. Julie, oxycet, Tynka, victoria, wieenn<br />
Global Rank: [256](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [160]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  618.7<br />
<br />
Final Rank Value (618.7) = Starting Rank Value (632.6) + Head To Head Adjustments (-13.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.280[<sup>1</sup>](#table2)
- Bounty Collected: 0.192[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.119<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 632.6
- 400 + ( ( 0.119 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 632.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     1413 | 2024-12-15 | Nomercy (Female team)  | W   | 0.693      | 0.250        | 0.003 (0.001)    | 0.238 (0.041)    | 0 (0.000) |    12.46 | Monkey D. Julie, oxycet, Tynka, victoria, wieenn  |
|           11 |     1751 | 2024-12-07 | AKA HERO KAJO          | L   | 0.640      | -            | -                | -                | -         |    -7.66 | Monkey D. Julie, oxycet, Tynka, victoria, wieenn  |
|           10 |     1755 | 2024-12-07 | Midnight (Female team) | W   | 0.639      | 0.250        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.70 | Monkey D. Julie, oxycet, Tynka, victoria, wieenn  |
|            9 |     2065 | 2024-12-01 | Nomercy (Female team)  | L   | 0.599      | -            | -                | -                | -         |    -8.55 | Monkey D. Julie, oxycet, Stormy, victoria, wieenn |
|            8 |     2138 | 2024-11-30 | Needachance            | W   | 0.593      | 0.250        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.29 | Monkey D. Julie, oxycet, Stormy, victoria, wieenn |
|            7 |     2555 | 2024-11-17 | Also                   | L   | 0.506      | -            | -                | -                | -         |    -7.68 | Glymir, Monkey D. Julie, oxycet, Tynka, victoria  |
|            6 |     2627 | 2024-11-16 | WOPA Impact            | W   | 0.500      | 0.250        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.56 | Glymir, Monkey D. Julie, oxycet, Tynka, victoria  |
|            5 |     3209 | 2024-11-02 | AKA HERO Althea        | L   | 0.406      | -            | -                | -                | -         |    -8.70 | Glymir, Monkey D. Julie, oxycet, Tynka, victoria  |
|            4 |     3499 | 2024-10-18 | K27 Female             | L   | 0.306      | -            | -                | -                | -         |    -4.34 | Missy, Monkey D. Julie, oxycet, Tynka, victoria   |
|            3 |     3895 | 2024-10-02 | Imperial Female        | L   | 0.200      | -            | -                | -                | -         |    -0.68 | Missy, Monkey D. Julie, oxycet, Tynka, victoria   |
|            2 |     4155 | 2024-09-25 | BIG EQUIPA             | L   | 0.153      | -            | -                | -                | -         |    -1.57 | Missy, Monkey D. Julie, oxycet, Tynka, victoria   |
|            1 |     4770 | 2024-09-05 | Nomercy (Female team)  | W   | 0.020      | 0.328        | 0.003 (0.000)    | 0.238 (0.002)    | 0 (0.000) |     0.32 | Missy, Monkey D. Julie, oxycet, Tynka, victoria   |

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
