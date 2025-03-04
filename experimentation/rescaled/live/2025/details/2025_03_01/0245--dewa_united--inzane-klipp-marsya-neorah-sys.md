### Roster Details<br />
Team Name: DEWA United<br />
Roster: Inzane, klipp, marsyA, neorah, Sys<br />
Global Rank: [245](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [33]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  552.5<br />
<br />
Final Rank Value (552.5) = Starting Rank Value (539.0) + Head To Head Adjustments (13.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.221[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.062[<sup>2</sup>](#table1)

The average of these factors is 0.073<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 539.0
- 400 + ( ( 0.073 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 539.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |     1640 | 2024-11-07 | Chinggis Warriors  | L   | 0.438      | -            | -                | -                | -         |    -2.02 | Inzane, klipp, marsyA, neorah, Sys |
|           10 |     1655 | 2024-11-05 | The Huns Esports   | L   | 0.430      | -            | -                | -                | -         |    -1.06 | Inzane, klipp, marsyA, neorah, Sys |
|            9 |     1656 | 2024-11-05 | Clutch Gaming      | W   | 0.430      | 0.419        | 0.000 (0.000)    | 0.056 (0.010)    | 0 (0.000) |     6.36 | Inzane, klipp, marsyA, neorah, Sys |
|            8 |     2045 | 2024-10-09 | Gods Reign         | W   | 0.245      | 0.449        | 0.014 (0.002)    | 0.360 (0.040)    | 1 (0.245) |     6.94 | klipp, marsyA, neorah, RiseN, Sys  |
|            7 |     2051 | 2024-10-09 | Gods Reign         | L   | 0.245      | -            | -                | -                | -         |    -0.78 | klipp, marsyA, neorah, RiseN, Sys  |
|            6 |     2103 | 2024-10-08 | Chinggis Warriors  | L   | 0.238      | -            | -                | -                | -         |    -1.02 | klipp, marsyA, neorah, RiseN, Sys  |
|            5 |     2109 | 2024-10-08 | Chinggis Warriors  | L   | 0.238      | -            | -                | -                | -         |    -1.03 | klipp, marsyA, neorah, RiseN, Sys  |
|            4 |     2286 | 2024-10-02 | TYLOO              | L   | 0.198      | -            | -                | -                | -         |    -0.93 | klipp, marsyA, neorah, RiseN, Sys  |
|            3 |     2291 | 2024-10-02 | TYLOO              | L   | 0.198      | -            | -                | -                | -         |    -0.94 | klipp, marsyA, neorah, RiseN, Sys  |
|            2 |     2608 | 2024-09-24 | Lynn Vision Gaming | W   | 0.145      | 0.449        | 0.011 (0.001)    | 0.301 (0.020)    | 1 (0.145) |     4.00 | klipp, marsyA, neorah, RiseN, Sys  |
|            1 |     2613 | 2024-09-24 | Lynn Vision Gaming | W   | 0.145      | 0.449        | 0.011 (0.001)    | 0.301 (0.020)    | 1 (0.145) |     4.02 | klipp, marsyA, neorah, RiseN, Sys  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
