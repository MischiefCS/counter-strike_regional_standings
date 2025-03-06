### Roster Details<br />
Team Name: Jahsdnmasjdm v2<br />
Roster: calamity, dea, intra, LEARSI, sacrifice<br />
Global Rank: [274](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [85]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  480.5<br />
<br />
Final Rank Value (480.5) = Starting Rank Value (481.2) + Head To Head Adjustments (-0.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.167[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.042<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 481.2
- 400 + ( ( 0.042 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 481.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     2589 | 2024-09-24 | Final Form                | L   | 0.148      | -            | -                | -                | -         |    -2.21 | cypress, intra, LEARSI, raw1, sacrifice |
|            5 |     2665 | 2024-09-22 | Vagrants                  | W   | 0.134      | 0.371        | 0.001 (0.000)    | 0.174 (0.009)    | 0 (0.000) |     3.02 | calamity, dea, intra, LEARSI, sacrifice |
|            4 |     2729 | 2024-09-19 | Team Canada               | L   | 0.115      | -            | -                | -                | -         |    -1.53 | cypress, intra, LEARSI, raw1, sacrifice |
|            3 |     2797 | 2024-09-17 | Familia Maquininha        | L   | 0.102      | -            | -                | -                | -         |    -0.86 | cypress, intra, LEARSI, raw1, sacrifice |
|            2 |     2935 | 2024-09-12 | Chill Guys                | W   | 0.068      | 0.371        | 0.002 (0.000)    | 0.173 (0.004)    | 0 (0.000) |     1.50 | cypress, intra, LEARSI, raw1, sacrifice |
|            1 |     2966 | 2024-09-11 | Undefined (American team) | L   | 0.062      | -            | -                | -                | -         |    -0.63 | calamity, cypress, intra, LEARSI, raw1  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
