### Roster Details<br />
Team Name: 9Pandas<br />
Roster: d1Ledez, KaiR0N-, Krad, r3salt, shalfey<br />
Global Rank: [33](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [24]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  795.3<br />
<br />
Final Rank Value (795.3) = Starting Rank Value (794.6) + Head To Head Adjustments (0.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.409[<sup>1</sup>](#table2)
- Bounty Collected: 0.221[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.160<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 794.6
- 400 + ( ( 0.160 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 794.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      100 | 2025-02-23 | B8           | L   | 0.303      | -            | -                | -                | -         |    -2.92 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|            7 |      118 | 2025-02-22 | Dynamo Eclot | W   | 0.296      | 0.435        | 0.023 (0.003)    | 0.276 (0.035)    | 0 (0.000) |     4.05 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|            6 |      161 | 2025-02-20 | Sashi Esport | W   | 0.283      | 0.435        | 0.000 (0.000)    | 0.523 (0.064)    | 0 (0.000) |     2.00 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|            5 |      287 | 2025-02-13 | 500          | L   | 0.239      | -            | -                | -                | -         |    -2.32 | d1Ledez, Krad, mo0N, r3salt, shalfey    |
|            4 |      689 | 2025-01-14 | Team Liquid  | L   | 0.038      | -            | -                | -                | -         |    -0.15 | Alv, d1Ledez, Krad, r3salt, shalfey     |
|            3 |      693 | 2025-01-12 | Wildcard     | L   | 0.024      | -            | -                | -                | -         |    -0.11 | Alv, d1Ledez, Krad, r3salt, shalfey     |
|            2 |      697 | 2025-01-11 | EYEBALLERS   | W   | 0.017      | 0.417        | 0.002 (0.000)    | 0.007 (0.000)    | 0 (0.000) |     0.18 | Alv, d1Ledez, Krad, r3salt, shalfey     |
|            1 |      704 | 2025-01-10 | GenOne       | W   | 0.010      | 0.417        | 0.000 (0.000)    | 0.105 (0.000)    | 0 (0.000) |     0.03 | Alv, d1Ledez, Krad, r3salt, shalfey     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,762.96)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      0.305 | $5,000.00      | $1,524.07       |
| 2025-01-12 |      0.024 | $10,000.00     | $238.89         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
