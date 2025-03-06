### Roster Details<br />
Team Name: Vagrants<br />
Roster: brett, Cyrix, mason, Sandman, Seb<br />
Global Rank: [160](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_04_07.md)<br />
Regional Rank: [41]( ../../standings_americas_2025_04_07.md)<br />
<br />
Final Rank Value:  629.3<br />
<br />
Final Rank Value (629.3) = Starting Rank Value (624.1) + Head To Head Adjustments (5.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.227[<sup>1</sup>](#table2)
- Bounty Collected: 0.201[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.108<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 624.1
- 400 + ( ( 0.108 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 624.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      352 | 2025-02-10 | Immigrants Peek | L   | 0.826      | -            | -                | -                | -         |   -12.37 | brett, Cyrix, mason, Sandman, Seb |
|            6 |      393 | 2025-02-09 | Alter Iron Club | W   | 0.819      | 0.143        | 0.008 (0.001)    | 0.292 (0.034)    | 0 (0.000) |    15.33 | brett, Cyrix, mason, Sandman, Seb |
|            5 |      422 | 2025-02-08 | Nouns Esports   | L   | 0.813      | -            | -                | -                | -         |    -7.20 | brett, Cyrix, mason, Sandman, Seb |
|            4 |      441 | 2025-02-08 | Immigrants Peek | W   | 0.812      | 0.143        | 0.001 (0.000)    | 0.230 (0.027)    | 0 (0.000) |    13.19 | brett, Cyrix, mason, Sandman, Seb |
|            3 |      862 | 2024-12-14 | Nouns Esports   | L   | 0.440      | -            | -                | -                | -         |    -3.74 | Cyrix, mason, micro, Sandman, Seb |
|            2 |     2010 | 2024-10-09 | Timbermen       | L   | 0.000      | -            | -                | -                | -         |    -0.00 | Cyrix, DJF, Sandman, Seb, Tender  |
|            1 |     2017 | 2024-10-09 | Timbermen       | W   | 0.000      | 0.477        | 0.009 (0.000)    | 0.132 (0.000)    | 0 (0.000) |     0.00 | Cyrix, DJF, Sandman, Seb, Tender  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($87.33)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.073 | $1,200.00      | $87.33          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
