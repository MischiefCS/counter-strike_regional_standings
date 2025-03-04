### Roster Details<br />
Team Name: Heimo Esports<br />
Roster: arvid, japE, oopee, Welho, ykis<br />
Global Rank: [180](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [118]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  654.7<br />
<br />
Final Rank Value (654.7) = Starting Rank Value (673.7) + Head To Head Adjustments (-19.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.292[<sup>1</sup>](#table2)
- Bounty Collected: 0.252[<sup>2</sup>](#table1)
- Opponent Network: 0.031[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.144<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 673.7
- 400 + ( ( 0.144 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 673.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      132 | 2025-02-21 | JANO Esports         | L   | 1.000      | -            | -                | -                | -         |    -7.61 | arvid, japE, oopee, Welho, ykis   |
|           10 |      729 | 2025-01-04 | BRUTE                | L   | 0.825      | -            | -                | -                | -         |   -13.31 | arvid, japE, oopee, spargo, Welho |
|            9 |      735 | 2024-12-29 | Insilio              | L   | 0.787      | -            | -                | -                | -         |   -13.79 | arvid, japE, oopee, spargo, Welho |
|            8 |      760 | 2024-12-23 | WOPA Esport          | L   | 0.744      | -            | -                | -                | -         |    -7.97 | arvid, japE, oopee, spargo, Welho |
|            7 |      773 | 2024-12-22 | ALASKA               | L   | 0.738      | -            | -                | -                | -         |    -4.22 | arvid, japE, oopee, spargo, Welho |
|            6 |      794 | 2024-12-20 | WOPA Esport          | W   | 0.725      | 0.451        | 0.028 (0.009)    | 0.499 (0.163)    | 0 (0.000) |    14.10 | arvid, japE, oopee, spargo, Welho |
|            5 |      819 | 2024-12-18 | Astralis Talent      | W   | 0.711      | 0.451        | 0.002 (0.001)    | 0.388 (0.124)    | 0 (0.000) |    11.99 | arvid, japE, oopee, spargo, Welho |
|            4 |     2163 | 2024-10-06 | Natus Vincere Junior | L   | 0.224      | -            | -                | -                | -         |    -0.94 | arvid, japE, oopee, spargo, Welho |
|            3 |     2187 | 2024-10-05 | Preasy Esport        | W   | 0.217      | 0.516        | 0.007 (0.001)    | 0.206 (0.023)    | 0 (0.000) |     3.76 | arvid, japE, oopee, spargo, Welho |
|            2 |     2255 | 2024-10-03 | Anonymo Esports      | W   | 0.204      | 0.516        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.15 | arvid, japE, oopee, Welho, ykis   |
|            1 |     2355 | 2024-10-01 | Leo Team             | L   | 0.191      | -            | -                | -                | -         |    -2.18 | arvid, japE, oopee, Welho, ykis   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,274.06)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-22 |      1.000 | $523.23        | $523.23         |
| 2024-12-24 |      0.751 | $1,000.00      | $750.83         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
