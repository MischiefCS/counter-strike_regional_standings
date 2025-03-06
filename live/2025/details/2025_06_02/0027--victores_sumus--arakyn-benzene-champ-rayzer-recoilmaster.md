### Roster Details<br />
Team Name: Victores Sumus<br />
Roster: arakyN, Benzene, ChAmP, RaYzeR, Recoilmaster<br />
Global Rank: [27](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_06_02.md)<br />
Regional Rank: [4]( ../../standings_asia_2025_06_02.md)<br />
<br />
Final Rank Value:  930.2<br />
<br />
Final Rank Value (930.2) = Starting Rank Value (935.5) + Head To Head Adjustments (-5.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.339[<sup>1</sup>](#table2)
- Bounty Collected: 0.193[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.392[<sup>2</sup>](#table1)

The average of these factors is 0.231<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 935.5
- 400 + ( ( 0.231 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 935.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |        3 | 2025-03-01 | Gods Reign       | L   | 0.576      | -            | -                | -                | -         |    -6.16 | arakyN, Benzene, ChAmP, RaYzeR, Recoilmaster |
|            4 |        5 | 2025-02-28 | Flashback Gaming | W   | 0.575      | 0.143        | 0.004 (0.000)    | 0.102 (0.008)    | 1 (0.575) |     5.53 | arakyN, Benzene, ChAmP, RaYzeR, Recoilmaster |
|            3 |        9 | 2025-02-28 | Big W            | W   | 0.569      | 0.143        | 0.004 (0.000)    | 0.011 (0.001)    | 1 (0.569) |     2.08 | arakyN, Benzene, ChAmP, RaYzeR, Recoilmaster |
|            2 |       15 | 2025-02-27 | Gods Reign       | L   | 0.563      | -            | -                | -                | -         |    -6.21 | arakyN, Benzene, ChAmP, RaYzeR, Recoilmaster |
|            1 |      886 | 2024-12-13 | Gods Reign       | L   | 0.062      | -            | -                | -                | -         |    -0.59 | arakyN, Benzene, ChAmP, RaYzeR, Recoilmaster |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($989.43)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-01 |      0.576 | $1,717.92      | $989.43         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
