### Roster Details<br />
Team Name: HEROIC<br />
Roster: LNZ, SunPayus, tN1R, xfl0ud, yxngstxr<br />
Global Rank: [21](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [16]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  1050.1<br />
<br />
Final Rank Value (1050.1) = Starting Rank Value (1006.7) + Head To Head Adjustments (43.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.523[<sup>1</sup>](#table2)
- Bounty Collected: 0.364[<sup>2</sup>](#table1)
- Opponent Network: 0.033[<sup>2</sup>](#table1)
- LAN Wins: 0.127[<sup>2</sup>](#table1)

The average of these factors is 0.262<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1006.7
- 400 + ( ( 0.262 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 1006.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |      160 | 2025-02-20 | Astralis      | W   | 0.517      | 0.143        | 1.000 (0.074)    | 1.000 (0.074)    | 0 (0.000) |    16.15 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr  |
|           12 |      333 | 2025-02-11 | Metizport     | W   | 0.458      | 0.143        | 0.010 (0.001)    | 0.209 (0.014)    | 0 (0.000) |     2.11 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr  |
|           11 |      341 | 2025-02-11 | BIG           | W   | 0.456      | 0.143        | 0.295 (0.019)    | 0.449 (0.029)    | 0 (0.000) |    12.21 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr  |
|           10 |      361 | 2025-02-10 | 3DMAX         | L   | 0.452      | -            | -                | -                | -         |    -0.99 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr  |
|            9 |      370 | 2025-02-10 | Zero Tenacity | W   | 0.450      | 0.143        | 0.002 (0.000)    | 0.391 (0.025)    | 0 (0.000) |     1.76 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr  |
|            8 |      409 | 2025-02-09 | PARIVISION    | L   | 0.443      | -            | -                | -                | -         |   -12.52 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr  |
|            7 |      469 | 2025-02-08 | Passion UA    | W   | 0.436      | 0.143        | 0.011 (0.001)    | 0.239 (0.015)    | 0 (0.000) |     2.71 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr  |
|            6 |      623 | 2025-01-31 | BIG           | L   | 0.384      | -            | -                | -                | -         |    -1.62 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr  |
|            5 |      626 | 2025-01-30 | Eternal Fire  | L   | 0.378      | -            | -                | -                | -         |    -0.07 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr  |
|            4 |      633 | 2025-01-29 | Team Liquid   | W   | 0.372      | 1.000        | 0.116 (0.043)    | 0.267 (0.099)    | 1 (0.372) |     8.65 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr  |
|            3 |      667 | 2025-01-23 | Team Spirit   | L   | 0.331      | -            | -                | -                | -         |    -0.05 | LNZ, maden, SunPayus, xfl0ud, yxngstxr |
|            2 |      675 | 2025-01-18 | Team Liquid   | W   | 0.296      | 0.363        | 0.116 (0.013)    | 0.267 (0.029)    | 0 (0.000) |     7.05 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr  |
|            1 |      690 | 2025-01-14 | 3DMAX         | W   | 0.270      | 0.363        | 0.288 (0.028)    | 0.480 (0.047)    | 0 (0.000) |     7.97 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,770.83)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-09 |      0.444 | $4,500.00      | $2,000.00       |
| 2025-01-26 |      0.351 | $25,000.00     | $8,770.83       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
