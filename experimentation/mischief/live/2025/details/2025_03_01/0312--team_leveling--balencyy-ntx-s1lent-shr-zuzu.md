### Roster Details<br />
Team Name: Team Leveling<br />
Roster: balencyy, ntx, s1lent, shr, zuzu<br />
Global Rank: [312](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [82]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  511.9<br />
<br />
Final Rank Value (511.9) = Starting Rank Value (480.2) + Head To Head Adjustments (31.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.159[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.041<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 480.2
- 400 + ( ( 0.041 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 480.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     2029 | 2024-12-01 | 9z Academy                  | L   | 0.601      | -            | -                | -                | -         |    -6.21 | balencyy, ntx, s1lent, shr, zuzu |
|            7 |     2032 | 2024-12-01 | Sharks Youngsters           | W   | 0.600      | 0.143        | 0.000 (0.000)    | 0.084 (0.007)    | 0 (0.000) |    11.34 | balencyy, ntx, s1lent, shr, zuzu |
|            6 |     2096 | 2024-11-30 | LaChampionsLiga             | L   | 0.594      | -            | -                | -                | -         |    -6.12 | balencyy, ntx, s1lent, shr, zuzu |
|            5 |     2116 | 2024-11-30 | New Legacy (Brazilian team) | W   | 0.594      | 0.143        | 0.000 (0.000)    | 0.031 (0.003)    | 0 (0.000) |    11.06 | balencyy, ntx, s1lent, shr, zuzu |
|            4 |     2824 | 2024-11-11 | América eSports             | W   | 0.468      | 0.143        | 0.000 (0.000)    | 0.389 (0.026)    | 0 (0.000) |     8.76 | balencyy, ntx, s1lent, shr, zuzu |
|            3 |     2863 | 2024-11-10 | INTERDIT                    | W   | 0.460      | 0.143        | 0.000 (0.000)    | 0.163 (0.011)    | 0 (0.000) |     9.71 | balencyy, ntx, s1lent, shr, zuzu |
|            2 |     2907 | 2024-11-09 | Sharks Youngsters           | L   | 0.454      | -            | -                | -                | -         |    -5.29 | balencyy, ntx, s1lent, shr, zuzu |
|            1 |     2917 | 2024-11-09 | BeBold.gg                   | W   | 0.454      | 0.143        | 0.000 (0.000)    | 0.024 (0.002)    | 0 (0.000) |     8.45 | balencyy, ntx, s1lent, shr, zuzu |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
