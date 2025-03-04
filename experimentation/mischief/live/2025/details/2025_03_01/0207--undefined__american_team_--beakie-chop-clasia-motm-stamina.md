### Roster Details<br />
Team Name: Undefined (American team)<br />
Roster: BeaKie, chop, CLASIA, motm, stamina<br />
Global Rank: [207](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [57]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  616.2<br />
<br />
Final Rank Value (616.2) = Starting Rank Value (611.4) + Head To Head Adjustments (4.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.264[<sup>1</sup>](#table2)
- Bounty Collected: 0.172[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.109<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 611.4
- 400 + ( ( 0.109 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 611.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     2684 | 2024-09-21 | Akimbo Esports  | L   | 0.128      | -            | -                | -                | -         |    -1.96 | BeaKie, chop, CLASIA, motm, stamina |
|            5 |     2726 | 2024-09-19 | InControl       | W   | 0.115      | 0.372        | 0.001 (0.000)    | 0.075 (0.003)    | 0 (0.000) |     1.83 | BeaKie, chop, CLASIA, motm, stamina |
|            4 |     2794 | 2024-09-17 | MIGHT           | W   | 0.102      | 0.372        | 0.002 (0.000)    | 0.289 (0.011)    | 0 (0.000) |     2.10 | BeaKie, chop, CLASIA, motm, stamina |
|            3 |     2836 | 2024-09-15 | Final Form      | W   | 0.088      | 0.372        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.00 | BeaKie, chop, CLASIA, motm, stamina |
|            2 |     2903 | 2024-09-13 | Exceritus       | W   | 0.075      | 0.372        | 0.000 (0.000)    | 0.184 (0.005)    | 0 (0.000) |     1.17 | BeaKie, chop, CLASIA, motm, stamina |
|            1 |     2966 | 2024-09-11 | Jahsdnmasjdm v2 | W   | 0.062      | 0.372        | 0.000 (0.000)    | 0.012 (0.000)    | 0 (0.000) |     0.63 | BeaKie, chop, CLASIA, motm, stamina |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($552.43)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-21 |      0.128 | $4,300.00      | $552.43         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
