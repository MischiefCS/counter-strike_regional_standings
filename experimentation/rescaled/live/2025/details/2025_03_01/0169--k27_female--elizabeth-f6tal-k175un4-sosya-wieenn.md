### Roster Details<br />
Team Name: K27 Female<br />
Roster: Elizabeth, f6tal, k175un4, sosya, wieenn<br />
Global Rank: [169](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [114]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  665.2<br />
<br />
Final Rank Value (665.2) = Starting Rank Value (663.7) + Head To Head Adjustments (1.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.314[<sup>1</sup>](#table2)
- Bounty Collected: 0.235[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.139<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 663.7
- 400 + ( ( 0.139 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 663.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent              | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     1303 | 2024-11-22 | NIP Impact            | L   | 0.540      | -            | -                | -                | -         |    -8.01 | Elizabeth, f6tal, k175un4, sosya, wieenn |
|            9 |     1311 | 2024-11-22 | FURIA Esports Female  | L   | 0.539      | -            | -                | -                | -         |    -2.42 | Elizabeth, f6tal, k175un4, sosya, wieenn |
|            8 |     1861 | 2024-10-19 | Eco Warriors          | W   | 0.313      | 0.576        | 0.022 (0.004)    | 0.191 (0.034)    | 0 (0.000) |     6.60 | Elizabeth, f6tal, k175un4, sosya, wieenn |
|            7 |     1884 | 2024-10-18 | Permitta W            | W   | 0.306      | 0.576        | 0.003 (0.000)    | 0.042 (0.007)    | 0 (0.000) |     4.18 | Elizabeth, f6tal, k175un4, sosya, wieenn |
|            6 |     2241 | 2024-10-03 | BIG EQUIPA            | L   | 0.206      | -            | -                | -                | -         |    -2.44 | Elizabeth, f6tal, k175un4, sosya, wieenn |
|            5 |     2778 | 2024-09-18 | Nomercy (Female team) | W   | 0.106      | 0.576        | 0.002 (0.000)    | 0.070 (0.004)    | 0 (0.000) |     1.40 | Elizabeth, f6tal, k175un4, sosya, wieenn |
|            4 |     2884 | 2024-09-14 | Imperial Female       | L   | 0.078      | -            | -                | -                | -         |    -0.33 | Elizabeth, f6tal, k175un4, sosya, wieenn |
|            3 |     2894 | 2024-09-14 | BIG EQUIPA            | W   | 0.078      | 0.553        | 0.021 (0.001)    | 0.073 (0.003)    | 0 (0.000) |     1.54 | Elizabeth, f6tal, k175un4, sosya, wieenn |
|            2 |     2940 | 2024-09-12 | HSG                   | W   | 0.066      | 0.576        | 0.002 (0.000)    | 0.032 (0.001)    | 0 (0.000) |     0.96 | Elizabeth, f6tal, k175un4, sosya, wieenn |
|            1 |     3169 | 2024-09-04 | Imperial Female       | L   | 0.013      | -            | -                | -                | -         |    -0.05 | Elizabeth, f6tal, k175un4, sosya, wieenn |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,210.56)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      0.553 | $4,000.00      | $2,210.56       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
