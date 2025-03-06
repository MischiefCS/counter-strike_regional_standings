### Roster Details<br />
Team Name: Let Her Cook<br />
Roster: Joanana, ManeschijnX, meli, spike, suns1de<br />
Global Rank: [193](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [123]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  626.2<br />
<br />
Final Rank Value (626.2) = Starting Rank Value (626.8) + Head To Head Adjustments (-0.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.265[<sup>1</sup>](#table2)
- Bounty Collected: 0.204[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.117<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 626.8
- 400 + ( ( 0.117 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 626.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     1845 | 2024-10-20 | Eco Warriors               | L   | 0.320      | -            | -                | -                | -         |    -3.01 | Joanana, ManeschijnX, meli, spike, suns1de |
|            6 |     1863 | 2024-10-19 | BIG EQUIPA                 | L   | 0.312      | -            | -                | -                | -         |    -3.27 | Joanana, ManeschijnX, meli, spike, suns1de |
|            5 |     1883 | 2024-10-18 | NIP Impact                 | W   | 0.306      | 0.328        | 0.011 (0.001)    | 0.060 (0.006)    | 0 (0.000) |     5.86 | Joanana, ManeschijnX, meli, spike, suns1de |
|            4 |     2478 | 2024-09-26 | ENCE Athena                | W   | 0.160      | 0.328        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.79 | Joanana, ManeschijnX, meli, spike, suns1de |
|            3 |     2743 | 2024-09-19 | Team Denmark (Female team) | L   | 0.113      | -            | -                | -                | -         |    -1.46 | Joanana, ManeschijnX, meli, spike, suns1de |
|            2 |     2843 | 2024-09-15 | Team Spirit Female         | L   | 0.086      | -            | -                | -                | -         |    -1.39 | Hikomi, Joanana, ManeschijnX, meli, ratons |
|            1 |     2974 | 2024-09-11 | Team Spirit Female         | W   | 0.060      | 0.328        | 0.002 (0.000)    | 0.046 (0.001)    | 0 (0.000) |     0.92 | Joanana, ManeschijnX, meli, spike, suns1de |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($564.75)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.320 | $1,700.00      | $543.29         |
| 2024-09-15 |      0.086 | $250.00        | $21.46          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
