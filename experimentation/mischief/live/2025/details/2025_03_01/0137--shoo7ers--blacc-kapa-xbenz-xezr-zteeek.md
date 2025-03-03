### Roster Details<br />
Team Name: SHOO7ERS<br />
Roster: Blacc, kapa, Xbenz, xezr, zteeek<br />
Global Rank: [137](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [94]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  741.2<br />
<br />
Final Rank Value (741.2) = Starting Rank Value (745.6) + Head To Head Adjustments (-4.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.252[<sup>1</sup>](#table2)
- Bounty Collected: 0.174[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.279[<sup>2</sup>](#table1)

The average of these factors is 0.177<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 745.6
- 400 + ( ( 0.177 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 745.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     1565 | 2024-12-12 | Wu-Tang Clan   | L   | 0.674      | -            | -                | -                | -         |   -13.79 | Blacc, kapa, Xbenz, xezr, zteeek   |
|            7 |     1628 | 2024-12-10 | Yamato Esports | W   | 0.660      | 0.274        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.07 | Blacc, kapa, Wahtzz, Xbenz, zteeek |
|            6 |     1684 | 2024-12-08 | Truck Drivers  | L   | 0.647      | -            | -                | -                | -         |   -11.64 | Blacc, hY, kapa, wahtzz, Xbenz     |
|            5 |     1696 | 2024-12-08 | M1Z            | W   | 0.646      | 0.143        | 0.000 (0.000)    | 0.080 (0.007)    | 1 (0.646) |     3.75 | Blacc, hY, kapa, wahtzz, Xbenz     |
|            4 |     2551 | 2024-11-17 | M1Z            | W   | 0.506      | 0.143        | 0.000 (0.000)    | 0.080 (0.006)    | 1 (0.506) |     2.90 | Blacc, hY, kapa, wahtzz, Xbenz     |
|            3 |     2861 | 2024-11-10 | ANimaleGG      | W   | 0.460      | 0.143        | 0.000 (0.000)    | 0.054 (0.004)    | 1 (0.460) |     3.47 | Blacc, hY, kapa, wahtzz, Xbenz     |
|            2 |     3135 | 2024-11-03 | W2TE           | W   | 0.413      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.413) |     1.55 | Blacc, hY, kapa, wahtzz, Xbenz     |
|            1 |     3399 | 2024-10-27 | Truck Drivers  | W   | 0.367      | 0.143        | 0.002 (0.000)    | 0.100 (0.005)    | 1 (0.367) |     5.29 | Blacc, hY, kapa, wahtzz, Xbenz     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($362.24)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.694 | $325.00        | $225.49         |
| 2024-12-08 |      0.647 | $211.52        | $136.75         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
