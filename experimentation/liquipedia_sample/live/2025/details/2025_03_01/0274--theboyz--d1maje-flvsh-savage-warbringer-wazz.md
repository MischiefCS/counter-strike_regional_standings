### Roster Details<br />
Team Name: Theboyz<br />
Roster: d1maje, FLVSH, SAVAGE, warbringer, waZz<br />
Global Rank: [274](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [187]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  657.4<br />
<br />
Final Rank Value (657.4) = Starting Rank Value (648.0) + Head To Head Adjustments (9.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.287[<sup>1</sup>](#table2)
- Bounty Collected: 0.211[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.126<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 648.0
- 400 + ( ( 0.126 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 648.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1684 | 2024-12-07 | HyperSpirit     | W   | 0.639      | 0.400        | 0.000 (0.000)    | 0.097 (0.025)    | 0 (0.000) |     6.18 | d1maje, FLVSH, SAVAGE, warbringer, waZz |
|            4 |     1990 | 2024-12-01 | Perfect Storm   | W   | 0.600      | 0.400        | 0.008 (0.002)    | 0.128 (0.031)    | 0 (0.000) |    10.34 | d1maje, FLVSH, SAVAGE, warbringer, waZz |
|            3 |     2007 | 2024-12-01 | JackBoyz        | L   | 0.600      | -            | -                | -                | -         |    -9.34 | d1maje, FLVSH, SAVAGE, warbringer, waZz |
|            2 |     2020 | 2024-12-01 | Infinite Gaming | W   | 0.599      | 0.400        | 0.000 (0.000)    | 0.027 (0.006)    | 0 (0.000) |     3.75 | d1maje, FLVSH, SAVAGE, warbringer, waZz |
|            1 |     2089 | 2024-11-30 | Nexus Gaming    | L   | 0.593      | -            | -                | -                | -         |    -1.60 | d1maje, FLVSH, SAVAGE, warbringer, waZz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,091.18)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.693 | $1,575.71      | $1,091.18       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
