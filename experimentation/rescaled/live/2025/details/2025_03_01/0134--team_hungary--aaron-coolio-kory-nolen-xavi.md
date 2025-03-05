### Roster Details<br />
Team Name: Team Hungary<br />
Roster: Aaron, coolio, kory, noleN, xavi<br />
Global Rank: [134](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [93]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  743.8<br />
<br />
Final Rank Value (743.8) = Starting Rank Value (734.8) + Head To Head Adjustments (9.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.260[<sup>1</sup>](#table2)
- Bounty Collected: 0.164[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.276[<sup>2</sup>](#table1)

The average of these factors is 0.176<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 734.8
- 400 + ( ( 0.176 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 734.8


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
|            7 |     1440 | 2024-11-15 | ALTERNATE aTTaX | L   | 0.493      | -            | -                | -                | -         |    -4.69 | Aaron, coolio, kory, noleN, xavi  |
|            6 |     1448 | 2024-11-15 | Team Kosovo     | W   | 0.492      | 0.617        | 0.000 (0.000)    | 0.022 (0.007)    | 1 (0.492) |     3.15 | Aaron, coolio, kory, noleN, xavi  |
|            5 |     1486 | 2024-11-14 | Team Chile      | W   | 0.486      | 0.617        | 0.000 (0.000)    | 0.059 (0.018)    | 1 (0.486) |     2.52 | Aaron, coolio, kory, noleN, xavi  |
|            4 |     1489 | 2024-11-14 | Team Jordan     | W   | 0.485      | 0.617        | 0.000 (0.000)    | 0.029 (0.009)    | 1 (0.485) |     2.35 | Aaron, coolio, kory, noleN, xavi  |
|            3 |     1495 | 2024-11-14 | GTZ.ESPORTS     | L   | 0.485      | -            | -                | -                | -         |    -1.34 | Aaron, coolio, kory, noleN, xavi  |
|            2 |     1600 | 2024-11-09 | Budapest Five   | W   | 0.453      | 0.143        | 0.001 (0.000)    | 0.027 (0.002)    | 1 (0.453) |     3.61 | Aaron, balage, Kamion, kory, xavi |
|            1 |     1611 | 2024-11-09 | SKIBIDIES       | W   | 0.451      | 0.143        | 0.000 (0.000)    | 0.027 (0.002)    | 1 (0.451) |     3.43 | Aaron, balage, Kamion, kory, xavi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($476.94)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-09 |      0.453 | $1,053.31      | $476.94         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
