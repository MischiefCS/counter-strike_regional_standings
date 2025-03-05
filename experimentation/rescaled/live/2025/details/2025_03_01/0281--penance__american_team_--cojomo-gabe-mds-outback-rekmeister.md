### Roster Details<br />
Team Name: Penance (American Team)<br />
Roster: CoJoMo, Gabe, mds, Outback, REKMEISTER<br />
Global Rank: [281](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [90]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  396.1<br />
<br />
Final Rank Value (396.1) = Starting Rank Value (400.0) + Head To Head Adjustments (-3.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.0
- 400 + ( ( 0.000 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 400.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1855 | 2024-10-19 | Fisher College    | L   | 0.315      | -            | -                | -                | -         |    -1.24 | CoJoMo, Gabe, mds, Outback, REKMEISTER |
|            4 |     2667 | 2024-09-22 | Lore Gaming       | L   | 0.133      | -            | -                | -                | -         |    -2.10 | CoJoMo, Gabe, Louie, mds, shutout      |
|            3 |     2706 | 2024-09-20 | Final Form        | L   | 0.121      | -            | -                | -                | -         |    -1.40 | CoJoMo, Gabe, Louie, mds, shutout      |
|            2 |     2821 | 2024-09-16 | Undone            | L   | 0.094      | -            | -                | -                | -         |    -0.34 | CoJoMo, Gabe, Louie, mds, shutout      |
|            1 |     2905 | 2024-09-13 | What's for Dinner | W   | 0.075      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.18 | CoJoMo, Gabe, Louie, mds, shutout      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
