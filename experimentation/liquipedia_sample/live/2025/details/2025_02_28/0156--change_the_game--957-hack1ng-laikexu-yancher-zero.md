### Roster Details<br />
Team Name: Change The Game<br />
Roster: 957, Hack1ng, LaiKeXu, yancher, zero<br />
Global Rank: [156](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_02_28.md)<br />
Regional Rank: [18]( ../../standings_asia_2025_02_28.md)<br />
<br />
Final Rank Value:  783.6<br />
<br />
Final Rank Value (783.6) = Starting Rank Value (817.8) + Head To Head Adjustments (-34.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.467[<sup>1</sup>](#table2)
- Bounty Collected: 0.235[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.092[<sup>2</sup>](#table1)

The average of these factors is 0.202<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 817.8
- 400 + ( ( 0.202 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 817.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |       31 | 2025-02-26 | DogEvil              | L   | 1.000      | -            | -                | -                | -         |   -11.63 | 957, Hack1ng, LaiKeXu, yancher, zero    |
|            8 |       89 | 2025-02-25 | FengDa Gaming        | W   | 1.000      | 0.143        | 0.010 (0.001)    | 0.688 (0.098)    | 0 (0.000) |    15.38 | 957, Hack1ng, LaiKeXu, yancher, zero    |
|            7 |      122 | 2025-02-25 | Shika                | L   | 1.000      | -            | -                | -                | -         |   -23.05 | 957, Hack1ng, LaiKeXu, yancher, zero    |
|            6 |      149 | 2025-02-24 | Unsettled Resentment | W   | 1.000      | 0.143        | 0.016 (0.002)    | 0.423 (0.060)    | 0 (0.000) |    17.27 | 957, Hack1ng, LaiKeXu, yancher, zero    |
|            5 |     1189 | 2024-12-27 | FengDa Gaming        | L   | 0.783      | -            | -                | -                | -         |   -12.34 | 957, Hack1ng, LaiKeXu, yancher, zero    |
|            4 |     1293 | 2024-12-22 | Magic Cape           | L   | 0.743      | -            | -                | -                | -         |   -15.08 | 957, Hack1ng, LaiKeXu, yancher, zero    |
|            3 |     1393 | 2024-12-19 | Dolphins Esports     | W   | 0.730      | 0.143        | 0.017 (0.002)    | 0.000 (0.000)    | 1 (0.730) |     5.09 | 957, Hack1ng, LaiKeXu, yancher, zero    |
|            2 |     5408 | 2024-10-05 | Magic Cape           | L   | 0.223      | -            | -                | -                | -         |    -4.67 | 957, Hack1ng, LaiKeXu, LIngGod, yancher |
|            1 |     5470 | 2024-10-04 | StudFarm             | L   | 0.217      | -            | -                | -                | -         |    -5.16 | 957, Hack1ng, LaiKeXu, LIngGod, yancher |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($20,544.87)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-28 |      0.783 | $685.04        | $536.70         |
| 2024-12-19 |      0.730 | $27,410.77     | $20,001.61      |
| 2024-10-06 |      0.230 | $28.50         | $6.56           |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
