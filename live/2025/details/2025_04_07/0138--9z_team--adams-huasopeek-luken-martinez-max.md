### Roster Details<br />
Team Name: 9z Team<br />
Roster: adamS, HUASOPEEK, Luken, Martinez, max<br />
Global Rank: [138](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_04_07.md)<br />
Regional Rank: [35]( ../../standings_americas_2025_04_07.md)<br />
<br />
Final Rank Value:  662.7<br />
<br />
Final Rank Value (662.7) = Starting Rank Value (690.9) + Head To Head Adjustments (-28.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.285[<sup>1</sup>](#table2)
- Bounty Collected: 0.200[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.074[<sup>2</sup>](#table1)

The average of these factors is 0.141<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 690.9
- 400 + ( ( 0.141 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 690.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      166 | 2025-02-19 | ODDIK         | L   | 0.885      | -            | -                | -                | -         |    -9.13 | adamS, HUASOPEEK, Luken, Martinez, max |
|           11 |      511 | 2025-02-06 | Elevate       | L   | 0.799      | -            | -                | -                | -         |   -18.12 | HUASOPEEK, Luken, Martinez, max, yel   |
|           10 |      535 | 2025-02-05 | RED Canids    | L   | 0.793      | -            | -                | -                | -         |   -12.25 | dgt, HUASOPEEK, Luken, Martinez, max   |
|            9 |      548 | 2025-02-05 | Tropa do VSM  | W   | 0.791      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.89 | dgt, HUASOPEEK, Luken, Martinez, max   |
|            8 |     1466 | 2024-11-15 | FURIA         | L   | 0.242      | -            | -                | -                | -         |    -0.27 | buda, dgt, HUASOPEEK, Martinez, max    |
|            7 |     1505 | 2024-11-13 | PaiN Gaming   | L   | 0.234      | -            | -                | -                | -         |    -0.04 | buda, dgt, HUASOPEEK, Martinez, max    |
|            6 |     1530 | 2024-11-12 | Wildcard      | L   | 0.228      | -            | -                | -                | -         |    -0.28 | buda, dgt, HUASOPEEK, Martinez, max    |
|            5 |     1551 | 2024-11-12 | Legacy        | W   | 0.223      | 0.143        | 0.027 (0.001)    | 0.591 (0.019)    | 1 (0.223) |     4.55 | buda, dgt, HUASOPEEK, Martinez, max    |
|            4 |     1559 | 2024-11-11 | RED Canids    | W   | 0.222      | 0.143        | 0.002 (0.000)    | 0.174 (0.006)    | 1 (0.222) |     3.52 | buda, dgt, HUASOPEEK, Martinez, max    |
|            3 |     1888 | 2024-10-18 | ENCE          | L   | 0.058      | -            | -                | -                | -         |    -0.50 | buda, dgt, HUASOPEEK, Martinez, max    |
|            2 |     1907 | 2024-10-17 | Rebels Gaming | W   | 0.051      | 0.589        | 0.003 (0.000)    | 0.262 (0.008)    | 1 (0.051) |     0.78 | buda, dgt, HUASOPEEK, Martinez, max    |
|            1 |     1914 | 2024-10-17 | ENCE          | L   | 0.050      | -            | -                | -                | -         |    -0.43 | buda, dgt, HUASOPEEK, Martinez, max    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($704.86)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.070 | $10,000.00     | $704.86         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
