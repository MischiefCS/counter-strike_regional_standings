### Roster Details<br />
Team Name: The Last Resort<br />
Roster: Bigun, Cher1on, Fizzy, maddeN, Rhys<br />
Global Rank: [322](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [213]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  627.4<br />
<br />
Final Rank Value (627.4) = Starting Rank Value (626.7) + Head To Head Adjustments (0.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.206[<sup>1</sup>](#table2)
- Bounty Collected: 0.168[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.084[<sup>2</sup>](#table1)

The average of these factors is 0.115<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 626.7
- 400 + ( ( 0.115 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 626.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     4023 | 2024-10-26 | 8Sins             | L   | 0.359      | -            | -                | -                | -         |    -1.78 | Bigun, Cher1on, Fizzy, maddeN, Rhys |
|            5 |     4048 | 2024-10-26 | Viperio Academy   | W   | 0.358      | 0.319        | 0.001 (0.000)    | 0.126 (0.014)    | 1 (0.358) |     5.19 | Bigun, Cher1on, Fizzy, maddeN, Rhys |
|            4 |     4070 | 2024-10-26 | Dreams To Legends | W   | 0.357      | 0.319        | 0.000 (0.000)    | 0.091 (0.010)    | 1 (0.357) |     5.69 | Bigun, Cher1on, Fizzy, maddeN, Rhys |
|            3 |     4103 | 2024-10-25 | Verdant fe        | L   | 0.353      | -            | -                | -                | -         |    -4.50 | Bigun, Cher1on, Fizzy, maddeN, Rhys |
|            2 |     4782 | 2024-10-10 | KUUSAMO.gg        | L   | 0.253      | -            | -                | -                | -         |    -5.28 | Bigun, Cher1on, Fizzy, maddeN, Rhys |
|            1 |     5191 | 2024-10-03 | ENCE Prospects    | W   | 0.206      | 0.278        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.42 | Bigun, Cher1on, Fizzy, maddeN, Rhys |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($47.41)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-27 |      0.366 | $129.61        | $47.41          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
