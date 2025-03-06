### Roster Details<br />
Team Name: ATOX Esports<br />
Roster: AccuracyTG, dobu, kabal, MiQ, Zesta<br />
Global Rank: [26](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_04_07.md)<br />
Regional Rank: [3]( ../../standings_asia_2025_04_07.md)<br />
<br />
Final Rank Value:  1003.2<br />
<br />
Final Rank Value (1003.2) = Starting Rank Value (975.6) + Head To Head Adjustments (27.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.438[<sup>1</sup>](#table2)
- Bounty Collected: 0.282[<sup>2</sup>](#table1)
- Opponent Network: 0.073[<sup>2</sup>](#table1)
- LAN Wins: 0.320[<sup>2</sup>](#table1)

The average of these factors is 0.278<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 975.6
- 400 + ( ( 0.278 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 975.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           25 |       16 | 2025-02-27 | HOTU                      | W   | 0.936      | -            | -                | -                | 0 (0.000) |     2.34 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           24 |       21 | 2025-02-26 | Eruption                  | W   | 0.935      | 0.143        | 0.014 (0.002)    | 0.408 (0.055)    | 0 (0.000) |     9.13 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           23 |       35 | 2025-02-25 | The Huns Esports          | W   | 0.927      | 0.143        | 0.019 (0.003)    | 0.455 (0.060)    | 0 (0.000) |     9.13 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           22 |       53 | 2025-02-24 | Gods Reign                | W   | 0.921      | 0.143        | 0.016 (0.002)    | -                | 0 (0.000) |    10.43 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           21 |       75 | 2025-02-23 | HOTU                      | L   | 0.914      | -            | -                | -                | -         |   -26.55 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           20 |      297 | 2025-02-13 | The Huns Esports          | W   | 0.843      | 0.143        | 0.019 (0.002)    | 0.455 (0.055)    | 0 (0.000) |     8.55 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           19 |      300 | 2025-02-12 | Rare Atom                 | W   | 0.841      | 0.143        | 0.027 (0.003)    | -                | 0 (0.000) |     8.31 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           18 |      313 | 2025-02-12 | Lynn Vision Gaming        | L   | 0.837      | -            | -                | -                | -         |   -20.47 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           17 |      336 | 2025-02-11 | The Huns Esports          | W   | 0.831      | 0.143        | 0.019 (0.002)    | 0.455 (0.054)    | -         |     8.55 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           16 |      344 | 2025-02-11 | TYLOO                     | W   | 0.829      | -            | -                | -                | -         |     4.70 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           15 |      347 | 2025-02-10 | Rooster                   | W   | 0.828      | -            | -                | -                | -         |     2.98 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           14 |      739 | 2024-12-29 | Eruption                  | W   | 0.536      | 0.384        | 0.014 (0.003)    | 0.408 (0.084)    | 1 (0.536) |     6.09 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           13 |      740 | 2024-12-28 | Rare Atom                 | W   | 0.535      | 0.384        | 0.027 (0.005)    | 0.439 (0.090)    | 1 (0.535) |     5.19 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           12 |      746 | 2024-12-28 | The Huns Esports          | W   | 0.529      | 0.384        | 0.019 (0.004)    | 0.455 (0.092)    | 1 (0.529) |     5.81 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           11 |      747 | 2024-12-27 | Chinggis Warriors         | W   | 0.528      | 0.384        | 0.010 (0.002)    | 0.522 (0.106)    | 1 (0.528) |     2.97 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           10 |      753 | 2024-12-26 | Eruption                  | L   | 0.522      | -            | -                | -                | -         |   -10.63 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            9 |     1016 | 2024-12-06 | Chinggis Warriors         | W   | 0.384      | 0.333        | -                | 0.522 (0.067)    | -         |     2.15 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            8 |     1022 | 2024-12-06 | DogEvil                   | W   | 0.382      | 0.333        | -                | 0.560 (0.071)    | -         |     0.93 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            7 |     1075 | 2024-12-04 | Just Swing (Chinese team) | W   | 0.370      | -            | -                | -                | -         |     1.85 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            6 |     1076 | 2024-12-04 | Nomads (Mongolian team)   | W   | 0.369      | -            | -                | -                | -         |     0.81 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            5 |     1081 | 2024-12-03 | IHC Esports               | L   | 0.368      | -            | -                | -                | -         |    -9.74 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            4 |     1288 | 2024-11-23 | Just Swing (Chinese team) | W   | 0.296      | -            | -                | -                | -         |     1.46 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            3 |     1296 | 2024-11-22 | CatEvil                   | W   | 0.295      | -            | -                | -                | -         |     0.65 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            2 |     1365 | 2024-11-19 | IHC Esports               | W   | 0.275      | -            | -                | -                | -         |     1.38 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            1 |     1366 | 2024-11-19 | Chinggis Warriors         | W   | 0.275      | -            | -                | -                | -         |     1.61 | AccuracyTG, dobu, kabal, MiQ, Zesta |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,795.14)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-29 |      0.536 | $12,500.00     | $6,696.18       |
| 2024-12-06 |      0.384 | $7,500.00      | $2,878.13       |
| 2024-11-23 |      0.296 | $7,500.00      | $2,220.83       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
