### Roster Details<br />
Team Name: Team Hungary<br />
Roster: Aaron, coolio, kory, noleN, xavi<br />
Global Rank: [119](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [83]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  698.6<br />
<br />
Final Rank Value (698.6) = Starting Rank Value (694.6) + Head To Head Adjustments (4.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.249[<sup>1</sup>](#table2)
- Bounty Collected: 0.151[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.169[<sup>2</sup>](#table1)

The average of these factors is 0.142<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 694.6
- 400 + ( ( 0.142 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 694.6


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
|            7 |     1440 | 2024-11-15 | ALTERNATE aTTaX | L   | 0.245      | -            | -                | -                | -         |    -2.52 | Aaron, coolio, kory, noleN, xavi  |
|            6 |     1448 | 2024-11-15 | Team Kosovo     | W   | 0.244      | 0.617        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.244) |     1.18 | Aaron, coolio, kory, noleN, xavi  |
|            5 |     1486 | 2024-11-14 | Team Chile      | W   | 0.237      | 0.617        | 0.000 (0.000)    | 0.040 (0.006)    | 1 (0.237) |     1.40 | Aaron, coolio, kory, noleN, xavi  |
|            4 |     1489 | 2024-11-14 | Team Jordan     | W   | 0.237      | 0.617        | 0.000 (0.000)    | 0.019 (0.003)    | 1 (0.237) |     1.31 | Aaron, coolio, kory, noleN, xavi  |
|            3 |     1495 | 2024-11-14 | GTZ.ESPORTS     | L   | 0.236      | -            | -                | -                | -         |    -1.08 | Aaron, coolio, kory, noleN, xavi  |
|            2 |     1600 | 2024-11-09 | Budapest Five   | W   | 0.204      | 0.143        | 0.001 (0.000)    | 0.017 (0.000)    | 1 (0.204) |     1.89 | Aaron, balage, Kamion, kory, xavi |
|            1 |     1611 | 2024-11-09 | SKIBIDIES       | W   | 0.203      | 0.143        | 0.000 (0.000)    | 0.017 (0.000)    | 1 (0.203) |     1.80 | Aaron, balage, Kamion, kory, xavi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($215.37)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-09 |      0.204 | $1,053.31      | $215.37         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
