### Roster Details<br />
Team Name: Bad Boys<br />
Roster: ABis, AGB, febreeze, jsfeltner, KmZ<br />
Global Rank: [182](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [45]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  651.0<br />
<br />
Final Rank Value (651.0) = Starting Rank Value (634.8) + Head To Head Adjustments (16.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.293[<sup>1</sup>](#table2)
- Bounty Collected: 0.198[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.123<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 634.8
- 400 + ( ( 0.123 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 634.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1005 | 2024-12-06 | Alter Iron Club  | L   | 0.636      | -            | -                | -                | -         |    -8.86 | ABis, AGB, febreeze, jsfeltner, KmZ |
|            4 |     1032 | 2024-12-05 | MCS Gaming       | W   | 0.629      | 0.372        | 0.002 (0.001)    | 0.060 (0.014)    | 0 (0.000) |     8.36 | ABis, AGB, febreeze, jsfeltner, KmZ |
|            3 |     1065 | 2024-12-04 | OutGoing eSports | W   | 0.622      | 0.372        | 0.001 (0.000)    | 0.037 (0.009)    | 0 (0.000) |     8.60 | ABis, AGB, febreeze, jsfeltner, KmZ |
|            2 |     1086 | 2024-12-03 | HoleSmokers      | W   | 0.616      | 0.372        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.99 | ABis, AGB, febreeze, jsfeltner, KmZ |
|            1 |     1106 | 2024-12-02 | Regain           | W   | 0.609      | 0.372        | 0.000 (0.000)    | 0.005 (0.001)    | 0 (0.000) |     4.01 | ABis, AGB, febreeze, jsfeltner, KmZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,298.06)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-08 |      0.649 | $2,000.00      | $1,298.06       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
