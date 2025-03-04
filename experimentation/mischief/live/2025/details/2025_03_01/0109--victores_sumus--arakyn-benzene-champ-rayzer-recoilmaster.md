### Roster Details<br />
Team Name: Victores Sumus<br />
Roster: arakyN, Benzene, ChAmP, RaYzeR, Recoilmaster<br />
Global Rank: [109](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [13]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  750.5<br />
<br />
Final Rank Value (750.5) = Starting Rank Value (760.6) + Head To Head Adjustments (-10.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.304[<sup>1</sup>](#table2)
- Bounty Collected: 0.207[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.233[<sup>2</sup>](#table1)

The average of these factors is 0.187<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 760.6
- 400 + ( ( 0.187 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 760.6


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
|            7 |        3 | 2025-03-01 | Gods Reign       | L   | 1.000      | -            | -                | -                | -         |   -10.69 | arakyN, Benzene, ChAmP, RaYzeR, Recoilmaster |
|            6 |        5 | 2025-02-28 | Flashback Gaming | W   | 1.000      | 0.143        | 0.005 (0.001)    | 0.090 (0.013)    | 1 (1.000) |    16.32 | arakyN, Benzene, ChAmP, RaYzeR, Recoilmaster |
|            5 |        9 | 2025-02-28 | Big W            | W   | 1.000      | 0.143        | 0.005 (0.001)    | 0.093 (0.013)    | 1 (1.000) |    12.63 | arakyN, Benzene, ChAmP, RaYzeR, Recoilmaster |
|            4 |       15 | 2025-02-27 | Gods Reign       | L   | 1.000      | -            | -                | -                | -         |   -10.88 | arakyN, Benzene, ChAmP, RaYzeR, Recoilmaster |
|            3 |      886 | 2024-12-13 | Gods Reign       | L   | 0.683      | -            | -                | -                | -         |    -6.99 | arakyN, Benzene, ChAmP, RaYzeR, Recoilmaster |
|            2 |     1431 | 2024-11-16 | Flashback Gaming | L   | 0.499      | -            | -                | -                | -         |    -7.70 | arakyN, Benzene, ChAmP, RaYzeR, Recoilmaster |
|            1 |     2683 | 2024-09-21 | St4rboys         | L   | 0.130      | -            | -                | -                | -         |    -2.73 | arakyN, Benzene, ChAmP, RaYzeR, Recoilmaster |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,717.92)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-01 |      1.000 | $1,717.92      | $1,717.92       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
