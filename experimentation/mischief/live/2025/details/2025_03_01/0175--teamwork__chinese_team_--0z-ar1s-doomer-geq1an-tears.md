### Roster Details<br />
Team Name: Teamwork (Chinese team)<br />
Roster: 0z, Ar1s, Doomer, Geq1an, TEARS<br />
Global Rank: [175](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [21]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  693.2<br />
<br />
Final Rank Value (693.2) = Starting Rank Value (683.6) + Head To Head Adjustments (9.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.400[<sup>1</sup>](#table2)
- Bounty Collected: 0.174[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.145<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 683.6
- 400 + ( ( 0.145 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 683.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     1103 | 2024-12-28 | FengDa Gaming      | L   | 0.784      | -            | -                | -                | -         |   -11.56 | 0z, Ar1s, Doomer, Geq1an, TEARS |
|            6 |     1105 | 2024-12-28 | IM-Man Zhou Li     | W   | 0.783      | 0.143        | 0.001 (0.000)    | 0.031 (0.004)    | 0 (0.000) |    10.21 | 0z, Ar1s, Doomer, Geq1an, TEARS |
|            5 |     1163 | 2024-12-27 | Nirvana Esports    | W   | 0.772      | 0.372        | 0.000 (0.000)    | 0.121 (0.035)    | 0 (0.000) |     8.01 | 0z, Ar1s, Doomer, Geq1an, TEARS |
|            4 |     1343 | 2024-12-19 | Nalakuvara Gaming  | W   | 0.718      | 0.372        | 0.000 (0.000)    | 0.103 (0.028)    | 0 (0.000) |     7.21 | 0z, Ar1s, Doomer, Geq1an, TEARS |
|            3 |     1608 | 2024-12-11 | Joker Gaming       | W   | 0.665      | 0.372        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.65 | 0z, Ar1s, Doomer, Geq1an, TEARS |
|            2 |     2260 | 2024-11-26 | Lynn Vision Gaming | L   | 0.570      | -            | -                | -                | -         |    -3.88 | 0z, Ar1s, Doomer, Geq1an, TEARS |
|            1 |     2296 | 2024-11-26 | TYLOO              | L   | 0.564      | -            | -                | -                | -         |    -4.05 | 0z, Ar1s, Doomer, Geq1an, TEARS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,573.38)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-27 |      0.772 | $13,702.00     | $10,573.38      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
