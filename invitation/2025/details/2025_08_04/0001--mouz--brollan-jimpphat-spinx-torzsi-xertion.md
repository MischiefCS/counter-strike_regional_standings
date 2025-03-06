### Roster Details<br />
Team Name: MOUZ<br />
Roster: Brollan, Jimpphat, Spinx, torzsi, xertioN<br />
Global Rank: [1](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [1]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  2001.5<br />
<br />
Final Rank Value (2001.5) = Starting Rank Value (2000.0) + Head To Head Adjustments (1.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.415[<sup>2</sup>](#table1)
- Opponent Network: 0.027[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.611<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 2000.0
- 400 + ( ( 0.611 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 2000.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |       81 | 2025-02-23 | Team Falcons | W   | 0.118      | 1.000        | 1.000 (0.118)    | 0.721 (0.085)    | 1 (0.118) |     1.83 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            7 |      113 | 2025-02-22 | Astralis     | W   | 0.111      | 1.000        | 1.000 (0.111)    | 0.924 (0.102)    | 1 (0.111) |     1.63 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            6 |      151 | 2025-02-21 | PaiN Gaming  | W   | 0.102      | 1.000        | 0.756 (0.077)    | 0.330 (0.034)    | 1 (0.102) |     0.42 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            5 |      173 | 2025-02-18 | Virtus.pro   | W   | 0.084      | 1.000        | 0.478 (0.040)    | 0.200 (0.017)    | 1 (0.084) |     0.07 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            4 |      201 | 2025-02-17 | Team Falcons | L   | 0.076      | -            | -                | -                | -         |    -1.23 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            3 |      211 | 2025-02-16 | FaZe Clan    | L   | 0.070      | -            | -                | -                | -         |    -1.26 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            2 |      252 | 2025-02-15 | 3DMAX        | W   | 0.062      | 1.000        | 0.378 (0.024)    | 0.282 (0.018)    | 1 (0.062) |     0.04 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            1 |      282 | 2025-02-14 | BIG          | W   | 0.056      | 1.000        | 0.378 (0.021)    | 0.256 (0.014)    | 1 (0.056) |     0.04 | Brollan, Jimpphat, Spinx, torzsi, xertioN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($47,314.81)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      0.118 | $400,000.00    | $47,314.81      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
