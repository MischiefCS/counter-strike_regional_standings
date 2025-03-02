### Roster Details<br />
Team Name: 无敌非常规<br />
Roster: expro, Miku, QUQU, seas, Sideny<br />
Global Rank: [544](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [83]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  421.3<br />
<br />
Final Rank Value (421.3) = Starting Rank Value (400.5) + Head To Head Adjustments (20.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.5
- 400 + ( ( 0.000 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 400.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      843 | 2025-01-03 | Shika      | L   | 0.818      | -            | -                | -                | -         |    -7.83 | expro, Miku, QUQU, seas, Sideny |
|            4 |      845 | 2025-01-03 | LaiShanHui | W   | 0.817      | 0.143        | 0.000 (0.000)    | 0.042 (0.005)    | 0 (0.000) |    12.12 | expro, Miku, QUQU, seas, Sideny |
|            3 |      852 | 2025-01-01 | Shika      | L   | 0.805      | -            | -                | -                | -         |    -7.81 | expro, Miku, QUQU, seas, Sideny |
|            2 |      857 | 2024-12-31 | 多年的回旋镖     | W   | 0.798      | 0.143        | 0.000 (0.000)    | 0.041 (0.005)    | 0 (0.000) |    12.21 | expro, Miku, QUQU, seas, Sideny |
|            1 |      868 | 2024-12-30 | 野兽派        | W   | 0.791      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    12.11 | expro, Miku, QUQU, seas, Sideny |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
