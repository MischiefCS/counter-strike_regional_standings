### Roster Details<br />
Team Name: ATOX Esports<br />
Roster: AccuracyTG, dobu, kabal, MiQ, Zesta<br />
Global Rank: [59](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_07_07.md)<br />
Regional Rank: [5]( ../../standings_asia_2025_07_07.md)<br />
<br />
Final Rank Value:  550.6<br />
<br />
Final Rank Value (550.6) = Starting Rank Value (530.4) + Head To Head Adjustments (20.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.198[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.053<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 530.4
- 400 + ( ( 0.053 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 530.4


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
|           11 |       16 | 2025-02-27 | HOTU               | W   | 0.329      | 0.143        | 0.000 (0.000)    | 0.245 (0.012)    | 0 (0.000) |     3.28 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           10 |       21 | 2025-02-26 | Eruption           | W   | 0.328      | 0.143        | 0.000 (0.000)    | 0.410 (0.019)    | 0 (0.000) |     3.32 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            9 |       35 | 2025-02-25 | The Huns Esports   | W   | 0.321      | 0.143        | 0.000 (0.000)    | 0.464 (0.021)    | 0 (0.000) |     3.29 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            8 |       53 | 2025-02-24 | Gods Reign         | W   | 0.314      | 0.143        | 0.020 (0.001)    | 0.428 (0.019)    | 0 (0.000) |     9.66 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            7 |       75 | 2025-02-23 | HOTU               | L   | 0.307      | -            | -                | -                | -         |    -6.57 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            6 |      297 | 2025-02-13 | The Huns Esports   | W   | 0.236      | 0.143        | 0.000 (0.000)    | 0.464 (0.016)    | 0 (0.000) |     2.51 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            5 |      300 | 2025-02-12 | Rare Atom          | W   | 0.234      | 0.143        | 0.000 (0.000)    | 0.542 (0.018)    | 0 (0.000) |     2.56 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            4 |      313 | 2025-02-12 | Lynn Vision Gaming | L   | 0.230      | -            | -                | -                | -         |    -4.84 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            3 |      336 | 2025-02-11 | The Huns Esports   | W   | 0.224      | 0.143        | 0.000 (0.000)    | 0.464 (0.015)    | 0 (0.000) |     2.37 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            2 |      344 | 2025-02-11 | TYLOO              | W   | 0.223      | 0.143        | 0.000 (0.000)    | 0.160 (0.005)    | 0 (0.000) |     2.29 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            1 |      347 | 2025-02-10 | Rooster            | W   | 0.221      | 0.143        | 0.000 (0.000)    | 0.251 (0.008)    | 0 (0.000) |     2.33 | AccuracyTG, dobu, kabal, MiQ, Zesta |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
