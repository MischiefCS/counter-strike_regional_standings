### Roster Details<br />
Team Name: Complexity<br />
Roster: Cxzi, Grim, hallzerk, JT, nicx<br />
Global Rank: [24](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_06_02.md)<br />
Regional Rank: [6]( ../../standings_americas_2025_06_02.md)<br />
<br />
Final Rank Value:  972.3<br />
<br />
Final Rank Value (972.3) = Starting Rank Value (975.4) + Head To Head Adjustments (-3.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.528[<sup>1</sup>](#table2)
- Bounty Collected: 0.298[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.168[<sup>2</sup>](#table1)

The average of these factors is 0.248<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 975.4
- 400 + ( ( 0.248 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 975.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      182 | 2025-02-17 | SAW             | L   | 0.498      | -            | -                | -                | -         |    -2.02 | Cxzi, Grim, hallzerk, JT, nicx |
|            6 |      212 | 2025-02-16 | Imperial Female | W   | 0.490      | 1.000        | 0.089 (0.044)    | 0.000 (0.000)    | 1 (0.490) |     2.35 | Cxzi, Grim, hallzerk, JT, nicx |
|            5 |      248 | 2025-02-15 | Virtus.pro      | L   | 0.483      | -            | -                | -                | -         |    -0.36 | Cxzi, Grim, hallzerk, JT, nicx |
|            4 |      275 | 2025-02-14 | The MongolZ     | L   | 0.477      | -            | -                | -                | -         |    -0.14 | Cxzi, Grim, hallzerk, JT, nicx |
|            3 |      625 | 2025-01-31 | Team Liquid     | L   | 0.383      | -            | -                | -                | -         |    -2.64 | Cxzi, Grim, hallzerk, JT, nicx |
|            2 |      634 | 2025-01-29 | Eternal Fire    | L   | 0.371      | -            | -                | -                | -         |    -0.05 | Cxzi, Grim, hallzerk, JT, nicx |
|            1 |      683 | 2025-01-16 | Virtus.pro      | L   | 0.283      | -            | -                | -                | -         |    -0.20 | Cxzi, Grim, hallzerk, JT, nicx |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,203.99)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.13) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      0.538 | $18,750.00     | $10,092.88      |
| 2025-02-09 |      0.444 | $2,500.00      | $1,111.11       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
