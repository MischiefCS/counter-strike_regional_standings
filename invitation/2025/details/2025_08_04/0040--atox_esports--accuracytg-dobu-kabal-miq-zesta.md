### Roster Details<br />
Team Name: ATOX Esports<br />
Roster: AccuracyTG, dobu, kabal, MiQ, Zesta<br />
Global Rank: [40](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_08_04.md)<br />
Regional Rank: [3]( ../../standings_asia_2025_08_04.md)<br />
<br />
Final Rank Value:  538.6<br />
<br />
Final Rank Value (538.6) = Starting Rank Value (531.8) + Head To Head Adjustments (6.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.197[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.050<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 531.8
- 400 + ( ( 0.050 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 531.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |       16 | 2025-02-27 | HOTU               | W   | 0.143      | 0.143        | 0.000 (0.000)    | 0.376 (0.008)    | 0 (0.000) |     1.45 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           10 |       21 | 2025-02-26 | Eruption           | W   | 0.142      | 0.143        | 0.000 (0.000)    | 0.442 (0.009)    | 0 (0.000) |     1.44 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            9 |       35 | 2025-02-25 | The Huns Esports   | W   | 0.134      | 0.143        | 0.000 (0.000)    | 0.368 (0.007)    | 0 (0.000) |     1.36 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            8 |       53 | 2025-02-24 | Gods Reign         | W   | 0.127      | 0.143        | 0.046 (0.001)    | 0.513 (0.009)    | 0 (0.000) |     3.99 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            7 |       75 | 2025-02-23 | HOTU               | L   | 0.121      | -            | -                | -                | -         |    -2.57 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            6 |      297 | 2025-02-13 | The Huns Esports   | W   | 0.050      | 0.143        | 0.000 (0.000)    | 0.368 (0.003)    | 0 (0.000) |     0.51 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            5 |      300 | 2025-02-12 | Rare Atom          | W   | 0.048      | 0.143        | 0.000 (0.000)    | 0.668 (0.005)    | 0 (0.000) |     0.49 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            4 |      313 | 2025-02-12 | Lynn Vision Gaming | L   | 0.044      | -            | -                | -                | -         |    -0.93 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            3 |      336 | 2025-02-11 | The Huns Esports   | W   | 0.037      | 0.143        | 0.000 (0.000)    | 0.368 (0.002)    | 0 (0.000) |     0.38 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            2 |      344 | 2025-02-11 | TYLOO              | W   | 0.036      | 0.143        | 0.000 (0.000)    | 0.049 (0.000)    | 0 (0.000) |     0.37 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            1 |      347 | 2025-02-10 | Rooster            | W   | 0.035      | 0.143        | 0.000 (0.000)    | 0.117 (0.001)    | 0 (0.000) |     0.35 | AccuracyTG, dobu, kabal, MiQ, Zesta |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
