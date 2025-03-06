### Roster Details<br />
Team Name: MOUZ<br />
Roster: Brollan, Jimpphat, Spinx, torzsi, xertioN<br />
Global Rank: [1](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [1]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  1989.6<br />
<br />
Final Rank Value (1989.6) = Starting Rank Value (2000.0) + Head To Head Adjustments (-10.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.495[<sup>2</sup>](#table1)
- Opponent Network: 0.098[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.648<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 2000.0
- 400 + ( ( 0.648 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 2000.0


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
|           11 |       81 | 2025-02-23 | Team Falcons | W   | 0.305      | 1.000        | 1.000 (0.305)    | 0.721 (0.220)    | 1 (0.305) |     4.79 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           10 |      113 | 2025-02-22 | Astralis     | W   | 0.297      | 1.000        | 1.000 (0.297)    | 1.000 (0.297)    | 1 (0.297) |     4.02 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            9 |      151 | 2025-02-21 | PaiN Gaming  | W   | 0.289      | 1.000        | 0.443 (0.128)    | 0.428 (0.124)    | 1 (0.289) |     0.94 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            8 |      173 | 2025-02-18 | Virtus.pro   | W   | 0.270      | 1.000        | 0.377 (0.102)    | 0.442 (0.119)    | 1 (0.270) |     0.91 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            7 |      201 | 2025-02-17 | Team Falcons | L   | 0.263      | -            | -                | -                | -         |    -4.24 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            6 |      211 | 2025-02-16 | FaZe Clan    | L   | 0.257      | -            | -                | -                | -         |    -5.43 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            5 |      252 | 2025-02-15 | 3DMAX        | W   | 0.249      | 1.000        | 0.263 (0.065)    | 0.486 (0.121)    | 1 (0.249) |     0.42 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            4 |      282 | 2025-02-14 | BIG          | W   | 0.242      | 1.000        | 0.252 (0.061)    | 0.421 (0.102)    | 1 (0.242) |     0.20 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            3 |      593 | 2025-02-03 | Team Liquid  | L   | 0.170      | -            | -                | -                | -         |    -5.31 | Brollan, Jimpphat, torzsi, xelex, xertioN |
|            2 |      612 | 2025-02-01 | GamerLegion  | L   | 0.158      | -            | -                | -                | -         |    -4.89 | Brollan, Jimpphat, torzsi, xelex, xertioN |
|            1 |      677 | 2025-01-17 | BetBoom Team | L   | 0.058      | -            | -                | -                | -         |    -1.83 | Brollan, Jimpphat, siuhy, torzsi, xertioN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($124,092.59)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      0.305 | $400,000.00    | $121,981.48     |
| 2025-02-09 |      0.211 | $10,000.00     | $2,111.11       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
