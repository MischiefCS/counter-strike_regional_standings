### Roster Details<br />
Team Name: Patins da Ferrari<br />
Roster: CutzMeretz, Jotag3, perez, proSHOW, rainny<br />
Global Rank: [172](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_05_05.md)<br />
Regional Rank: [46]( ../../standings_americas_2025_05_05.md)<br />
<br />
Final Rank Value:  515.2<br />
<br />
Final Rank Value (515.2) = Starting Rank Value (513.5) + Head To Head Adjustments (1.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.200[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.052<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 513.5
- 400 + ( ( 0.052 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 513.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                 | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      706 | 2025-01-09 | ShindeN                  | L   | 0.426      | -            | -                | -                | -         |    -7.12 | CutzMeretz, Jotag3, perez, proSHOW, rainny |
|            5 |      777 | 2024-12-21 | Nitro.GG                 | W   | 0.298      | 0.384        | 0.001 (0.000)    | 0.247 (0.028)    | 0 (0.000) |     5.87 | CutzMeretz, Jotag3, perez, proSHOW, rainny |
|            4 |      786 | 2024-12-20 | UNO MILLE                | L   | 0.292      | -            | -                | -                | -         |    -4.77 | CutzMeretz, Jotag3, perez, proSHOW, rainny |
|            3 |      821 | 2024-12-17 | Players (Brazilian team) | W   | 0.273      | 0.384        | 0.009 (0.001)    | 0.473 (0.050)    | 0 (0.000) |     6.52 | CutzMeretz, Jotag3, perez, proSHOW, rainny |
|            2 |      850 | 2024-12-15 | Galorys Academy          | W   | 0.257      | 0.384        | 0.000 (0.000)    | 0.030 (0.003)    | 0 (0.000) |     2.77 | CutzMeretz, Jotag3, perez, proSHOW, rainny |
|            1 |      889 | 2024-12-13 | Team Solid               | L   | 0.246      | -            | -                | -                | -         |    -1.55 | CutzMeretz, Jotag3, perez, proSHOW, rainny |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
