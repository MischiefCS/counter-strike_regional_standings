### Roster Details<br />
Team Name: Monte<br />
Roster: DemQQ, Gizmy, hades, leen, ryu<br />
Global Rank: [66](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [46]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  817.9<br />
<br />
Final Rank Value (817.9) = Starting Rank Value (795.5) + Head To Head Adjustments (22.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.353[<sup>1</sup>](#table2)
- Bounty Collected: 0.301[<sup>2</sup>](#table1)
- Opponent Network: 0.112[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.191<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 795.5
- 400 + ( ( 0.191 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 795.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      155 | 2025-02-20 | B8                     | L   | 0.892      | -            | -                | -                | -         |    -7.92 | DemQQ, Gizmy, hades, leen, ryu   |
|           13 |      229 | 2025-02-15 | Fnatic                 | W   | 0.858      | 0.435        | 0.027 (0.010)    | 0.467 (0.174)    | 0 (0.000) |    18.56 | DemQQ, dycha, Gizmy, hades, ryu  |
|           12 |      290 | 2025-02-13 | Natus Vincere Junior   | W   | 0.845      | 0.435        | 0.068 (0.025)    | 0.744 (0.273)    | 0 (0.000) |    15.33 | DemQQ, dycha, Gizmy, hades, ryu  |
|           11 |      345 | 2025-02-11 | CYBERSHOKE Esports     | W   | 0.829      | 0.435        | 0.010 (0.004)    | 1.000 (0.360)    | 0 (0.000) |    13.65 | DemQQ, dycha, Gizmy, hades, ryu  |
|           10 |      502 | 2025-02-07 | SINNERS Esports        | L   | 0.803      | -            | -                | -                | -         |   -11.87 | DemQQ, dycha, Gizmy, hades, ryu  |
|            9 |      527 | 2025-02-06 | Betclic Apogee Esports | L   | 0.796      | -            | -                | -                | -         |   -11.04 | DemQQ, dycha, Gizmy, hades, ryu  |
|            8 |      585 | 2025-02-03 | Sashi Esport           | W   | 0.779      | 0.435        | 0.007 (0.002)    | 0.545 (0.184)    | 0 (0.000) |    14.68 | DemQQ, dycha, Gizmy, hades, ryu  |
|            7 |      613 | 2025-02-01 | MoneyF                 | L   | 0.765      | -            | -                | -                | -         |   -19.62 | DemQQ, dycha, Gizmy, hades, ryu  |
|            6 |      782 | 2024-12-21 | AMKAL ESPORTS          | L   | 0.484      | -            | -                | -                | -         |    -9.28 | fnl, Gizmy, leen, ryu, shield    |
|            5 |      788 | 2024-12-20 | Dark Cloud Esports     | W   | 0.478      | 0.333        | 0.021 (0.003)    | 0.283 (0.045)    | 0 (0.000) |     6.07 | fnl, Gizmy, leen, ryu, shield    |
|            4 |      801 | 2024-12-19 | Betera Esports         | W   | 0.471      | 0.333        | 0.000 (0.000)    | 0.036 (0.006)    | 0 (0.000) |     1.41 | AiyvaN, Gizmy, leen, ryu, shield |
|            3 |     1069 | 2024-12-04 | FORZE Reload           | W   | 0.371      | 0.333        | 0.015 (0.002)    | 0.096 (0.012)    | 0 (0.000) |     4.34 | fnl, Gizmy, leen, ryu, shield    |
|            2 |     1091 | 2024-12-03 | FLuffy Gangsters       | W   | 0.365      | 0.333        | 0.004 (0.000)    | 0.316 (0.038)    | 0 (0.000) |     4.06 | fnl, Gizmy, leen, ryu, shield    |
|            1 |     1108 | 2024-12-02 | Preasy Esport          | W   | 0.359      | 0.333        | 0.006 (0.001)    | 0.209 (0.025)    | 0 (0.000) |     3.99 | fnl, Gizmy, leen, ryu, shield    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,307.50)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-21 |      0.484 | $3,000.00      | $1,451.25       |
| 2024-12-04 |      0.371 | $5,000.00      | $1,856.25       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
