### Roster Details<br />
Team Name: Kitsune Esports<br />
Roster: .exe, aw3some, slash, tristanxa, uDEADSHOT<br />
Global Rank: [280](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [45]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  584.7<br />
<br />
Final Rank Value (584.7) = Starting Rank Value (595.4) + Head To Head Adjustments (-10.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.233[<sup>1</sup>](#table2)
- Bounty Collected: 0.164[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.100<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 595.4
- 400 + ( ( 0.100 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 595.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     1407 | 2024-12-15 | The Punishers       | L   | 0.693      | -            | -                | -                | -         |    -8.04 | .exe, aw3some, slash, tristanxa, uDEADSHOT |
|            9 |     1569 | 2024-12-12 | Blou Bulle          | W   | 0.673      | 0.250        | 0.000 (0.000)    | 0.103 (0.017)    | 0 (0.000) |    10.77 | .exe, aw3some, slash, tristanxa, uDEADSHOT |
|            8 |     1876 | 2024-12-04 | The Punishers       | L   | 0.620      | -            | -                | -                | -         |    -7.31 | .exe, aw3some, slash, tristanxa, uDEADSHOT |
|            7 |     1981 | 2024-12-02 | Southern5           | W   | 0.607      | 0.250        | 0.000 (0.000)    | 0.035 (0.005)    | 0 (0.000) |     7.40 | .exe, aw3some, slash, tristanxa, uDEADSHOT |
|            6 |     2241 | 2024-11-27 | Monarch Realm       | W   | 0.573      | 0.250        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.83 | .exe, aw3some, slash, tristanxa, uDEADSHOT |
|            5 |     2692 | 2024-11-15 | Partizan Esports    | L   | 0.492      | -            | -                | -                | -         |    -0.94 | .exe, aw3some, slash, tristanxa, uDEADSHOT |
|            4 |     2698 | 2024-11-15 | The Huns Esports    | L   | 0.491      | -            | -                | -                | -         |    -1.14 | .exe, aw3some, slash, tristanxa, uDEADSHOT |
|            3 |     2709 | 2024-11-14 | SINNERS Academy     | L   | 0.488      | -            | -                | -                | -         |    -4.98 | .exe, aw3some, slash, tristanxa, uDEADSHOT |
|            2 |     2752 | 2024-11-13 | Dusty Roots         | L   | 0.480      | -            | -                | -                | -         |    -4.24 | .exe, aw3some, slash, tristanxa, uDEADSHOT |
|            1 |     2756 | 2024-11-13 | Team Czech Republic | L   | 0.480      | -            | -                | -                | -         |    -7.09 | .exe, aw3some, slash, tristanxa, uDEADSHOT |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($173.33)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.693 | $250.00        | $173.33         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
