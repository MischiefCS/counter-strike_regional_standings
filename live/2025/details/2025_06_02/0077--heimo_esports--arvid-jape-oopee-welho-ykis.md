### Roster Details<br />
Team Name: Heimo Esports<br />
Roster: arvid, japE, oopee, Welho, ykis<br />
Global Rank: [77](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [53]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  668.4<br />
<br />
Final Rank Value (668.4) = Starting Rank Value (679.6) + Head To Head Adjustments (-11.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.300[<sup>1</sup>](#table2)
- Bounty Collected: 0.182[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.121<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 679.6
- 400 + ( ( 0.121 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 679.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      132 | 2025-02-21 | JANO Esports    | L   | 0.525      | -            | -                | -                | -         |    -3.01 | arvid, japE, oopee, Welho, ykis   |
|            6 |      729 | 2025-01-04 | BRUTE           | L   | 0.203      | -            | -                | -                | -         |    -4.64 | arvid, japE, oopee, spargo, Welho |
|            5 |      735 | 2024-12-29 | Insilio         | L   | 0.165      | -            | -                | -                | -         |    -3.76 | arvid, japE, oopee, spargo, Welho |
|            4 |      760 | 2024-12-23 | WOPA Esport     | L   | 0.122      | -            | -                | -                | -         |    -1.73 | arvid, japE, oopee, spargo, Welho |
|            3 |      773 | 2024-12-22 | ALASKA          | L   | 0.117      | -            | -                | -                | -         |    -0.62 | arvid, japE, oopee, spargo, Welho |
|            2 |      794 | 2024-12-20 | WOPA Esport     | W   | 0.103      | 0.333        | 0.009 (0.000)    | 0.205 (0.007)    | 0 (0.000) |     1.78 | arvid, japE, oopee, spargo, Welho |
|            1 |      819 | 2024-12-18 | Astralis Talent | W   | 0.089      | 0.333        | 0.000 (0.000)    | 0.152 (0.005)    | 0 (0.000) |     0.81 | arvid, japE, oopee, spargo, Welho |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($407.02)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-22 |      0.531 | $523.23        | $277.86         |
| 2024-12-24 |      0.129 | $1,000.00      | $129.17         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
