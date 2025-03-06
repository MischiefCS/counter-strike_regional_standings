### Roster Details<br />
Team Name: HEROIC<br />
Roster: LNZ, SunPayus, tN1R, xfl0ud, yxngstxr<br />
Global Rank: [23](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [16]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  973.6<br />
<br />
Final Rank Value (973.6) = Starting Rank Value (956.7) + Head To Head Adjustments (16.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.476[<sup>1</sup>](#table2)
- Bounty Collected: 0.313[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.102[<sup>2</sup>](#table1)

The average of these factors is 0.226<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 956.7
- 400 + ( ( 0.226 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 956.7


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
|           13 |      160 | 2025-02-20 | Astralis      | W   | 0.284      | 0.143        | 1.000 (0.041)    | 1.000 (0.041)    | 0 (0.000) |     8.89 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr  |
|           12 |      333 | 2025-02-11 | Metizport     | W   | 0.225      | 0.143        | 0.000 (0.000)    | 0.173 (0.006)    | 0 (0.000) |     0.55 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr  |
|           11 |      341 | 2025-02-11 | BIG           | W   | 0.223      | 0.143        | 0.252 (0.008)    | 0.421 (0.013)    | 0 (0.000) |     6.31 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr  |
|           10 |      361 | 2025-02-10 | 3DMAX         | L   | 0.219      | -            | -                | -                | -         |    -0.37 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr  |
|            9 |      370 | 2025-02-10 | Zero Tenacity | W   | 0.217      | 0.143        | 0.000 (0.000)    | 0.367 (0.011)    | 0 (0.000) |     0.55 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr  |
|            8 |      409 | 2025-02-09 | PARIVISION    | L   | 0.209      | -            | -                | -                | -         |    -5.83 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr  |
|            7 |      469 | 2025-02-08 | Passion UA    | W   | 0.203      | 0.143        | 0.010 (0.000)    | 0.243 (0.007)    | 0 (0.000) |     1.54 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr  |
|            6 |      623 | 2025-01-31 | BIG           | L   | 0.151      | -            | -                | -                | -         |    -0.46 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr  |
|            5 |      626 | 2025-01-30 | Eternal Fire  | L   | 0.145      | -            | -                | -                | -         |    -0.03 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr  |
|            4 |      633 | 2025-01-29 | Team Liquid   | W   | 0.138      | 1.000        | 0.069 (0.010)    | 0.201 (0.028)    | 1 (0.138) |     3.19 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr  |
|            3 |      667 | 2025-01-23 | Team Spirit   | L   | 0.098      | -            | -                | -                | -         |    -0.02 | LNZ, maden, SunPayus, xfl0ud, yxngstxr |
|            2 |      675 | 2025-01-18 | Team Liquid   | W   | 0.063      | 0.363        | 0.069 (0.002)    | 0.201 (0.005)    | 0 (0.000) |     1.46 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr  |
|            1 |      690 | 2025-01-14 | 3DMAX         | W   | 0.037      | 0.363        | 0.263 (0.004)    | 0.486 (0.007)    | 0 (0.000) |     1.10 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,887.50)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-09 |      0.211 | $4,500.00      | $950.00         |
| 2025-01-26 |      0.117 | $25,000.00     | $2,937.50       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
