### Roster Details<br />
Team Name: Heimo Esports<br />
Roster: arvid, japE, oopee, Welho, ykis<br />
Global Rank: [146](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [97]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  657.9<br />
<br />
Final Rank Value (657.9) = Starting Rank Value (678.1) + Head To Head Adjustments (-20.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.297[<sup>1</sup>](#table2)
- Bounty Collected: 0.229[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.135<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 678.1
- 400 + ( ( 0.135 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 678.1


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
|            7 |      132 | 2025-02-21 | JANO Esports    | L   | 0.898      | -            | -                | -                | -         |    -7.31 | arvid, japE, oopee, Welho, ykis   |
|            6 |      729 | 2025-01-04 | BRUTE           | L   | 0.577      | -            | -                | -                | -         |    -9.35 | arvid, japE, oopee, spargo, Welho |
|            5 |      735 | 2024-12-29 | Insilio         | L   | 0.538      | -            | -                | -                | -         |   -11.06 | arvid, japE, oopee, spargo, Welho |
|            4 |      760 | 2024-12-23 | WOPA Esport     | L   | 0.496      | -            | -                | -                | -         |    -5.92 | arvid, japE, oopee, spargo, Welho |
|            3 |      773 | 2024-12-22 | ALASKA          | L   | 0.490      | -            | -                | -                | -         |    -2.97 | arvid, japE, oopee, spargo, Welho |
|            2 |      794 | 2024-12-20 | WOPA Esport     | W   | 0.477      | 0.333        | 0.025 (0.004)    | 0.434 (0.069)    | 0 (0.000) |     8.93 | arvid, japE, oopee, spargo, Welho |
|            1 |      819 | 2024-12-18 | Astralis Talent | W   | 0.463      | 0.333        | 0.002 (0.000)    | 0.310 (0.048)    | 0 (0.000) |     7.45 | arvid, japE, oopee, spargo, Welho |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($975.70)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-22 |      0.904 | $523.23        | $473.20         |
| 2024-12-24 |      0.502 | $1,000.00      | $502.50         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
