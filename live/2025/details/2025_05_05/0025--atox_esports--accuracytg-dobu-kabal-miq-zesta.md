### Roster Details<br />
Team Name: ATOX Esports<br />
Roster: AccuracyTG, dobu, kabal, MiQ, Zesta<br />
Global Rank: [25](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_05_05.md)<br />
Regional Rank: [3]( ../../standings_asia_2025_05_05.md)<br />
<br />
Final Rank Value:  983.6<br />
<br />
Final Rank Value (983.6) = Starting Rank Value (969.5) + Head To Head Adjustments (14.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.442[<sup>1</sup>](#table2)
- Bounty Collected: 0.268[<sup>2</sup>](#table1)
- Opponent Network: 0.047[<sup>2</sup>](#table1)
- LAN Wins: 0.289[<sup>2</sup>](#table1)

The average of these factors is 0.261<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 969.5
- 400 + ( ( 0.261 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 969.5


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
|           25 |       16 | 2025-02-27 | HOTU                      | W   | 0.749      | -            | -                | -                | 0 (0.000) |     2.01 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           24 |       21 | 2025-02-26 | Eruption                  | W   | 0.748      | 0.143        | 0.017 (0.002)    | 0.414 (0.044)    | 0 (0.000) |     7.87 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           23 |       35 | 2025-02-25 | The Huns Esports          | W   | 0.741      | 0.143        | 0.012 (0.001)    | 0.392 (0.041)    | 0 (0.000) |     6.54 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           22 |       53 | 2025-02-24 | Gods Reign                | W   | 0.734      | 0.143        | 0.020 (0.002)    | -                | 0 (0.000) |    11.14 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           21 |       75 | 2025-02-23 | HOTU                      | L   | 0.727      | -            | -                | -                | -         |   -21.00 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           20 |      297 | 2025-02-13 | The Huns Esports          | W   | 0.656      | 0.143        | 0.012 (0.001)    | 0.392 (0.037)    | 0 (0.000) |     5.91 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           19 |      300 | 2025-02-12 | Rare Atom                 | W   | 0.654      | 0.143        | 0.030 (0.003)    | 0.441 (0.041)    | 0 (0.000) |     6.43 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           18 |      313 | 2025-02-12 | Lynn Vision Gaming        | L   | 0.650      | -            | -                | -                | -         |   -18.56 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           17 |      336 | 2025-02-11 | The Huns Esports          | W   | 0.644      | 0.143        | 0.012 (0.001)    | 0.392 (0.036)    | -         |     5.91 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           16 |      344 | 2025-02-11 | TYLOO                     | W   | 0.643      | -            | -                | -                | -         |     0.88 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           15 |      347 | 2025-02-10 | Rooster                   | W   | 0.641      | -            | -                | -                | -         |     1.46 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           14 |      739 | 2024-12-29 | Eruption                  | W   | 0.349      | 0.384        | 0.017 (0.002)    | 0.414 (0.056)    | 1 (0.349) |     4.07 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           13 |      740 | 2024-12-28 | Rare Atom                 | W   | 0.348      | 0.384        | 0.030 (0.004)    | 0.441 (0.059)    | 1 (0.348) |     3.33 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           12 |      746 | 2024-12-28 | The Huns Esports          | W   | 0.342      | 0.384        | 0.012 (0.002)    | 0.392 (0.052)    | 1 (0.342) |     3.23 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           11 |      747 | 2024-12-27 | Chinggis Warriors         | W   | 0.342      | 0.384        | 0.007 (0.001)    | 0.499 (0.066)    | 1 (0.342) |     1.90 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           10 |      753 | 2024-12-26 | Eruption                  | L   | 0.335      | -            | -                | -                | -         |    -6.74 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            9 |     1016 | 2024-12-06 | Chinggis Warriors         | W   | 0.197      | -            | -                | -                | -         |     1.09 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            8 |     1022 | 2024-12-06 | DogEvil                   | W   | 0.196      | 0.333        | -                | 0.581 (0.038)    | -         |     0.41 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            7 |     1075 | 2024-12-04 | Just Swing (Chinese team) | W   | 0.183      | -            | -                | -                | -         |     0.86 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            6 |     1076 | 2024-12-04 | Nomads (Mongolian team)   | W   | 0.183      | -            | -                | -                | -         |     0.43 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            5 |     1081 | 2024-12-03 | IHC Esports               | L   | 0.182      | -            | -                | -                | -         |    -4.77 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            4 |     1288 | 2024-11-23 | Just Swing (Chinese team) | W   | 0.109      | -            | -                | -                | -         |     0.51 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            3 |     1296 | 2024-11-22 | CatEvil                   | W   | 0.108      | -            | -                | -                | -         |     0.23 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            2 |     1365 | 2024-11-19 | IHC Esports               | W   | 0.089      | -            | -                | -                | -         |     0.46 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            1 |     1366 | 2024-11-19 | Chinggis Warriors         | W   | 0.088      | -            | -                | -                | -         |     0.50 | AccuracyTG, dobu, kabal, MiQ, Zesta |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,661.81)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-29 |      0.349 | $12,500.00     | $4,362.85       |
| 2024-12-06 |      0.197 | $7,500.00      | $1,478.13       |
| 2024-11-23 |      0.109 | $7,500.00      | $820.83         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
