### Roster Details<br />
Team Name: CatEvil<br />
Roster: Biuckmt, BZA, Roninbaby, rubeN, twy<br />
Global Rank: [290](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [49]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  571.3<br />
<br />
Final Rank Value (571.3) = Starting Rank Value (522.0) + Head To Head Adjustments (49.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.223[<sup>2</sup>](#table1)
- Opponent Network: 0.026[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.062<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 522.0
- 400 + ( ( 0.062 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 522.0


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
|            8 |     2409 | 2024-11-22 | ATOX Esports              | L   | 0.543      | -            | -                | -                | -         |    -0.94 | Biuckmt, BZA, Roninbaby, rubeN, twy |
|            7 |     2460 | 2024-11-21 | Harizma                   | W   | 0.537      | 0.333        | 0.002 (0.000)    | 0.460 (0.082)    | 0 (0.000) |    13.52 | Biuckmt, BZA, Roninbaby, rubeN, twy |
|            6 |     2506 | 2024-11-20 | Chinggis Warriors         | W   | 0.524      | 0.333        | 0.016 (0.003)    | 0.634 (0.111)    | 0 (0.000) |    15.05 | Biuckmt, BZA, Roninbaby, rubeN, twy |
|            5 |     2509 | 2024-11-19 | IHC Esports               | L   | 0.523      | -            | -                | -                | -         |    -5.16 | Biuckmt, BZA, Roninbaby, rubeN, twy |
|            4 |     2644 | 2024-11-16 | Harizma                   | W   | 0.498      | 0.143        | 0.002 (0.000)    | 0.460 (0.033)    | 0 (0.000) |    12.93 | Biuckmt, BZA, Roninbaby, rubeN, twy |
|            3 |     2657 | 2024-11-16 | Just Swing (Chinese team) | L   | 0.498      | -            | -                | -                | -         |    -4.26 | Biuckmt, BZA, Roninbaby, rubeN, twy |
|            2 |     2670 | 2024-11-15 | Harizma                   | W   | 0.497      | 0.143        | 0.002 (0.000)    | 0.460 (0.033)    | 0 (0.000) |    12.97 | Biuckmt, BZA, Roninbaby, rubeN, twy |
|            1 |     2673 | 2024-11-15 | Tsegtaslal                | W   | 0.497      | 0.143        | 0.000 (0.000)    | 0.056 (0.004)    | 0 (0.000) |     5.21 | Biuckmt, BZA, Roninbaby, rubeN, twy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
