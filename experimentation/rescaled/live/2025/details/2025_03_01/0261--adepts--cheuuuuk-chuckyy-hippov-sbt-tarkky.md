### Roster Details<br />
Team Name: ADEPTS<br />
Roster: cHeuuuuk, Chuckyy, HippoV, SBT, Tarkky<br />
Global Rank: [261](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [143]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  515.4<br />
<br />
Final Rank Value (515.4) = Starting Rank Value (509.7) + Head To Head Adjustments (5.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.221[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.058<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 509.7
- 400 + ( ( 0.058 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 509.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      768 | 2024-12-22 | WOPA Esport         | L   | 0.739      | -            | -                | -                | -         |    -3.44 | cHeuuuuk, Chuckyy, HippoV, SBT, Tarkky   |
|            6 |      783 | 2024-12-21 | KONO.ECF            | L   | 0.732      | -            | -                | -                | -         |    -4.54 | cHeuuuuk, Chuckyy, SBT, Tarkky, xReal    |
|            5 |      806 | 2024-12-19 | Preasy Esport       | W   | 0.718      | 0.624        | 0.007 (0.003)    | 0.206 (0.092)    | 0 (0.000) |    17.03 | cHeuuuuk, Chuckyy, HippoV, SBT, Tarkky   |
|            4 |     1867 | 2024-10-19 | Viperio             | L   | 0.311      | -            | -                | -                | -         |    -3.27 | cHeuuuuk, Chuckyy, Oxbrandd, SBT, Tarkky |
|            3 |     2890 | 2024-09-14 | Astralis Talent     | L   | 0.078      | -            | -                | -                | -         |    -0.51 | cHeuuuuk, Chuckyy, Oxbrandd, prn, Tarkky |
|            2 |     2928 | 2024-09-13 | Team Spirit Academy | L   | 0.070      | -            | -                | -                | -         |    -0.11 | cHeuuuuk, Chuckyy, Oxbrandd, prn, Tarkky |
|            1 |     3019 | 2024-09-10 | 9INE Academy        | W   | 0.051      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.56 | cHeuuuuk, Chuckyy, Oxbrandd, prn, Tarkky |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
