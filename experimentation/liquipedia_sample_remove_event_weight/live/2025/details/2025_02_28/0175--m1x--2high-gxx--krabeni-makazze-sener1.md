### Roster Details<br />
Team Name: M1X<br />
Roster: 2high, gxx-, Krabeni, makazze, SENER1<br />
Global Rank: [175](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [124]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  825.3<br />
<br />
Final Rank Value (825.3) = Starting Rank Value (815.4) + Head To Head Adjustments (9.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.331[<sup>1</sup>](#table2)
- Bounty Collected: 0.257[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.232[<sup>2</sup>](#table1)

The average of these factors is 0.208<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 815.4
- 400 + ( ( 0.208 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 815.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1256 | 2024-12-22 | Kubix Esports | L   | 0.747      | -            | -                | -                | -         |    -6.50 | 2high, gxx-, Krabeni, makazze, SENER1  |
|            4 |     1262 | 2024-12-22 | HAWKTUAH      | W   | 0.746      | 1.000        | 0.003 (0.002)    | 0.037 (0.027)    | 1 (0.746) |     7.45 | 2high, gxx-, Krabeni, makazze, SENER1  |
|            3 |     1308 | 2024-12-21 | MANA eSports  | W   | 0.740      | 1.000        | 0.001 (0.001)    | 0.000 (0.000)    | 1 (0.740) |     3.73 | 2high, gxx-, Krabeni, makazze, SENER1  |
|            2 |     5800 | 2024-09-28 | Kubix Esports | W   | 0.179      | 1.000        | 0.053 (0.010)    | 0.536 (0.096)    | 1 (0.179) |     4.36 | Caleyy, gxx-, Krabeni, makazze, SENER1 |
|            1 |     5855 | 2024-09-28 | 2shkupiflow   | W   | 0.177      | 1.000        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.177) |     0.86 | Caleyy, gxx-, Krabeni, makazze, SENER1 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,747.58)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-22 |      0.747 | $2,607.56      | $1,946.68       |
| 2024-09-28 |      0.179 | $4,467.26      | $800.90         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
