### Roster Details<br />
Team Name: Team Jordan<br />
Roster: BOROS, HuNt3R, REAL1ZE, sprantos, tr1<br />
Global Rank: [278](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [43]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  425.6<br />
<br />
Final Rank Value (425.6) = Starting Rank Value (427.2) + Head To Head Adjustments (-1.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.057[<sup>2</sup>](#table1)

The average of these factors is 0.014<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 427.2
- 400 + ( ( 0.014 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 427.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1439 | 2024-11-15 | GTZ.ESPORTS     | L   | 0.493      | -            | -                | -                | -         |    -0.37 | BOROS, HuNt3R, REAL1ZE, sprantos, tr1 |
|            4 |     1447 | 2024-11-15 | Team Chile      | L   | 0.492      | -            | -                | -                | -         |    -7.29 | BOROS, HuNt3R, REAL1ZE, sprantos, tr1 |
|            3 |     1484 | 2024-11-14 | ALTERNATE aTTaX | L   | 0.486      | -            | -                | -                | -         |    -1.21 | BOROS, HuNt3R, REAL1ZE, sprantos, tr1 |
|            2 |     1489 | 2024-11-14 | Team Hungary    | L   | 0.485      | -            | -                | -                | -         |    -2.31 | BOROS, HuNt3R, REAL1ZE, sprantos, tr1 |
|            1 |     1494 | 2024-11-14 | Team Kosovo     | W   | 0.485      | 0.617        | 0.000 (0.000)    | 0.022 (0.007)    | 1 (0.485) |     9.58 | BOROS, HuNt3R, REAL1ZE, sprantos, tr1 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
