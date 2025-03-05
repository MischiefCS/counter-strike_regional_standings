### Roster Details<br />
Team Name: InSanitY Sports<br />
Roster: cass1n, f4stzin, iDk, pesadelo, shz<br />
Global Rank: [180](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [44]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  659.5<br />
<br />
Final Rank Value (659.5) = Starting Rank Value (654.1) + Head To Head Adjustments (5.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.283[<sup>1</sup>](#table2)
- Bounty Collected: 0.241[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.134<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 654.1
- 400 + ( ( 0.134 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 654.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     2735 | 2024-09-19 | ODDIK          | W   | 0.114      | 0.641        | 0.028 (0.002)    | 0.549 (0.040)    | 0 (0.000) |     2.70 | cass1n, f4stzin, iDk, pesadelo, shz |
|            6 |     2737 | 2024-09-19 | ODDIK          | L   | 0.114      | -            | -                | -                | -         |    -0.91 | cass1n, f4stzin, iDk, pesadelo, shz |
|            5 |     2798 | 2024-09-17 | BESTIA         | L   | 0.101      | -            | -                | -                | -         |    -0.50 | cass1n, f4stzin, iDk, pesadelo, shz |
|            4 |     2800 | 2024-09-17 | BESTIA         | W   | 0.101      | 0.653        | 0.045 (0.003)    | 0.572 (0.038)    | 0 (0.000) |     2.69 | cass1n, f4stzin, iDk, pesadelo, shz |
|            3 |     2999 | 2024-09-10 | Sharks Esports | W   | 0.054      | 0.715        | 0.054 (0.002)    | 0.661 (0.026)    | 0 (0.000) |     1.58 | cass1n, f4stzin, iDk, pesadelo, shz |
|            2 |     3002 | 2024-09-10 | Sharks Esports | L   | 0.054      | -            | -                | -                | -         |    -0.14 | cass1n, f4stzin, iDk, pesadelo, shz |
|            1 |     3212 | 2024-09-03 | Sharks Esports | L   | 0.005      | -            | -                | -                | -         |    -0.01 | cass1n, f4stzin, iDk, pesadelo, shz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($971.51)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.320 | $3,000.00      | $960.42         |
| 2024-09-04 |      0.015 | $750.00        | $11.09          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
