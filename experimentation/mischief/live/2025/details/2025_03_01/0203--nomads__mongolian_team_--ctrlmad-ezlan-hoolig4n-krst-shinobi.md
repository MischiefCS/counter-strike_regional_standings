### Roster Details<br />
Team Name: Nomads (Mongolian team)<br />
Roster: ctrlmad, ezlan, hoolig4n, KRST, shinobi<br />
Global Rank: [203](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [27]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  667.7<br />
<br />
Final Rank Value (667.7) = Starting Rank Value (666.9) + Head To Head Adjustments (0.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.237[<sup>1</sup>](#table2)
- Bounty Collected: 0.224[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.078[<sup>2</sup>](#table1)

The average of these factors is 0.137<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 666.9
- 400 + ( ( 0.137 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 666.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     3658 | 2024-10-09 | Noobs But Diligent | L   | 0.245      | -            | -                | -                | -         |    -5.51 | ctrlmad, ezlan, hoolig4n, KRST, shinobi |
|            7 |     3664 | 2024-10-09 | Noobs But Diligent | L   | 0.245      | -            | -                | -                | -         |    -5.61 | ctrlmad, ezlan, hoolig4n, KRST, shinobi |
|            6 |     3960 | 2024-10-01 | TYLOO              | L   | 0.192      | -            | -                | -                | -         |    -1.47 | ctrlmad, ezlan, hoolig4n, KRST, shinobi |
|            5 |     3961 | 2024-10-01 | TYLOO              | L   | 0.191      | -            | -                | -                | -         |    -1.49 | ctrlmad, ezlan, hoolig4n, KRST, shinobi |
|            4 |     3988 | 2024-09-30 | ATOX Esports       | W   | 0.185      | 0.417        | 0.008 (0.001)    | 0.064 (0.005)    | 1 (0.185) |     3.53 | ctrlmad, ezlan, hoolig4n, KRST, shinobi |
|            3 |     3991 | 2024-09-30 | ATOX Esports       | W   | 0.185      | 0.417        | 0.008 (0.001)    | 0.064 (0.005)    | 1 (0.185) |     3.58 | ctrlmad, ezlan, hoolig4n, KRST, shinobi |
|            2 |     4165 | 2024-09-25 | Lynn Vision Gaming | W   | 0.152      | 0.417        | 0.017 (0.001)    | 0.439 (0.028)    | 1 (0.152) |     3.87 | ctrlmad, ezlan, hoolig4n, KRST, shinobi |
|            1 |     4170 | 2024-09-25 | Lynn Vision Gaming | W   | 0.151      | 0.417        | 0.017 (0.001)    | 0.439 (0.028)    | 1 (0.151) |     3.90 | ctrlmad, ezlan, hoolig4n, KRST, shinobi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($205.39)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      0.411 | $500.00        | $205.39         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
