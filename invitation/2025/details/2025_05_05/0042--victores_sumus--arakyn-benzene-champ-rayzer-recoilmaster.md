### Roster Details<br />
Team Name: Victores Sumus<br />
Roster: arakyN, Benzene, ChAmP, RaYzeR, Recoilmaster<br />
Global Rank: [42](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_05_05.md)<br />
Regional Rank: [6]( ../../standings_asia_2025_05_05.md)<br />
<br />
Final Rank Value:  859.8<br />
<br />
Final Rank Value (859.8) = Starting Rank Value (866.7) + Head To Head Adjustments (-6.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.337[<sup>1</sup>](#table2)
- Bounty Collected: 0.202[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.317[<sup>2</sup>](#table1)

The average of these factors is 0.214<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 866.7
- 400 + ( ( 0.214 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 866.7


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
|            6 |        3 | 2025-03-01 | Gods Reign       | L   | 0.763      | -            | -                | -                | -         |    -8.92 | arakyN, Benzene, ChAmP, RaYzeR, Recoilmaster |
|            5 |        5 | 2025-02-28 | Flashback Gaming | W   | 0.762      | 0.143        | 0.005 (0.001)    | 0.090 (0.010)    | 1 (0.762) |     8.98 | arakyN, Benzene, ChAmP, RaYzeR, Recoilmaster |
|            4 |        9 | 2025-02-28 | Big W            | W   | 0.756      | 0.143        | 0.005 (0.001)    | 0.034 (0.004)    | 1 (0.756) |     6.02 | arakyN, Benzene, ChAmP, RaYzeR, Recoilmaster |
|            3 |       15 | 2025-02-27 | Gods Reign       | L   | 0.750      | -            | -                | -                | -         |    -9.07 | arakyN, Benzene, ChAmP, RaYzeR, Recoilmaster |
|            2 |      886 | 2024-12-13 | Gods Reign       | L   | 0.248      | -            | -                | -                | -         |    -2.64 | arakyN, Benzene, ChAmP, RaYzeR, Recoilmaster |
|            1 |     1431 | 2024-11-16 | Flashback Gaming | L   | 0.064      | -            | -                | -                | -         |    -1.26 | arakyN, Benzene, ChAmP, RaYzeR, Recoilmaster |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,310.11)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-01 |      0.763 | $1,717.92      | $1,310.11       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
