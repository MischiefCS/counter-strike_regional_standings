### Roster Details<br />
Team Name: Nomads (Mongolian team)<br />
Roster: ctrlmad, ezlan, hoolig4n, KRST, shinobi<br />
Global Rank: [359](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [54]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  610.6<br />
<br />
Final Rank Value (610.6) = Starting Rank Value (618.0) + Head To Head Adjustments (-7.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.237[<sup>1</sup>](#table2)
- Bounty Collected: 0.205[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.111<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 618.0
- 400 + ( ( 0.111 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 618.0


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
|            6 |     4846 | 2024-10-09 | Noobs But Diligent | L   | 0.245      | -            | -                | -                | -         |    -5.21 | ctrlmad, ezlan, hoolig4n, KRST, shinobi |
|            5 |     4850 | 2024-10-09 | Noobs But Diligent | L   | 0.245      | -            | -                | -                | -         |    -5.30 | ctrlmad, ezlan, hoolig4n, KRST, shinobi |
|            4 |     5319 | 2024-10-01 | TYLOO              | L   | 0.192      | -            | -                | -                | -         |    -2.06 | ctrlmad, ezlan, hoolig4n, KRST, shinobi |
|            3 |     5326 | 2024-10-01 | TYLOO              | L   | 0.192      | -            | -                | -                | -         |    -2.09 | ctrlmad, ezlan, hoolig4n, KRST, shinobi |
|            2 |     5384 | 2024-09-30 | ATOX Esports       | W   | 0.185      | 0.417        | 0.008 (0.001)    | 0.059 (0.005)    | 0 (0.000) |     3.58 | ctrlmad, ezlan, hoolig4n, KRST, shinobi |
|            1 |     5386 | 2024-09-30 | ATOX Esports       | W   | 0.185      | 0.417        | 0.008 (0.001)    | 0.059 (0.005)    | 0 (0.000) |     3.63 | ctrlmad, ezlan, hoolig4n, KRST, shinobi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($205.39)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      0.411 | $500.00        | $205.39         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
