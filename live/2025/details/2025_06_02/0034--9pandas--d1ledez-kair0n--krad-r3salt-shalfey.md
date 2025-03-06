### Roster Details<br />
Team Name: 9Pandas<br />
Roster: d1Ledez, KaiR0N-, Krad, r3salt, shalfey<br />
Global Rank: [34](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [23]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  824.6<br />
<br />
Final Rank Value (824.6) = Starting Rank Value (816.8) + Head To Head Adjustments (7.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.450[<sup>1</sup>](#table2)
- Bounty Collected: 0.248[<sup>2</sup>](#table1)
- Opponent Network: 0.022[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.180<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 816.8
- 400 + ( ( 0.180 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 816.8


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
|            8 |      100 | 2025-02-23 | B8           | L   | 0.536      | -            | -                | -                | -         |    -5.32 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|            7 |      118 | 2025-02-22 | Dynamo Eclot | W   | 0.529      | 0.435        | 0.033 (0.008)    | 0.280 (0.064)    | 0 (0.000) |     7.46 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|            6 |      161 | 2025-02-20 | Sashi Esport | W   | 0.517      | 0.435        | 0.001 (0.000)    | 0.507 (0.114)    | 0 (0.000) |     6.58 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|            5 |      287 | 2025-02-13 | 500          | L   | 0.472      | -            | -                | -                | -         |    -4.50 | d1Ledez, Krad, mo0N, r3salt, shalfey    |
|            4 |      689 | 2025-01-14 | Team Liquid  | L   | 0.271      | -            | -                | -                | -         |    -0.84 | Alv, d1Ledez, Krad, r3salt, shalfey     |
|            3 |      693 | 2025-01-12 | Wildcard     | L   | 0.257      | -            | -                | -                | -         |    -1.11 | Alv, d1Ledez, Krad, r3salt, shalfey     |
|            2 |      697 | 2025-01-11 | EYEBALLERS   | W   | 0.250      | 0.417        | 0.015 (0.002)    | 0.198 (0.021)    | 0 (0.000) |     3.31 | Alv, d1Ledez, Krad, r3salt, shalfey     |
|            1 |      704 | 2025-01-10 | GenOne       | W   | 0.244      | 0.417        | 0.000 (0.000)    | 0.163 (0.017)    | 0 (0.000) |     2.17 | Alv, d1Ledez, Krad, r3salt, shalfey     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,262.96)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      0.538 | $5,000.00      | $2,690.74       |
| 2025-01-12 |      0.257 | $10,000.00     | $2,572.22       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
