### Roster Details<br />
Team Name: Bad Boys<br />
Roster: ABis, AGB, febreeze, jsfeltner, KmZ<br />
Global Rank: [120](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_05_05.md)<br />
Regional Rank: [26]( ../../standings_americas_2025_05_05.md)<br />
<br />
Final Rank Value:  658.6<br />
<br />
Final Rank Value (658.6) = Starting Rank Value (655.2) + Head To Head Adjustments (3.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.289[<sup>1</sup>](#table2)
- Bounty Collected: 0.179[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.117<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 655.2
- 400 + ( ( 0.117 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 655.2


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
|            5 |     1005 | 2024-12-06 | Alter Iron Club  | L   | 0.201      | -            | -                | -                | -         |    -2.88 | ABis, AGB, febreeze, jsfeltner, KmZ |
|            4 |     1032 | 2024-12-05 | MCS Gaming       | W   | 0.194      | 0.372        | 0.002 (0.000)    | 0.070 (0.005)    | 0 (0.000) |     2.12 | ABis, AGB, febreeze, jsfeltner, KmZ |
|            3 |     1065 | 2024-12-04 | OutGoing eSports | W   | 0.187      | 0.372        | 0.001 (0.000)    | 0.020 (0.001)    | 0 (0.000) |     2.03 | ABis, AGB, febreeze, jsfeltner, KmZ |
|            2 |     1086 | 2024-12-03 | HoleSmokers      | W   | 0.181      | 0.372        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.09 | ABis, AGB, febreeze, jsfeltner, KmZ |
|            1 |     1106 | 2024-12-02 | Regain           | W   | 0.174      | 0.372        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.06 | ABis, AGB, febreeze, jsfeltner, KmZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($428.06)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-08 |      0.214 | $2,000.00      | $428.06         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
