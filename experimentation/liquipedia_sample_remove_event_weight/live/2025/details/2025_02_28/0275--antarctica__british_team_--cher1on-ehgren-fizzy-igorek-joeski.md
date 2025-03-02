### Roster Details<br />
Team Name: ANTARCTICA (British team)<br />
Roster: Cher1on, Ehgren, Fizzy, Igorek, joeski<br />
Global Rank: [275](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [186]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  718.3<br />
<br />
Final Rank Value (718.3) = Starting Rank Value (709.1) + Head To Head Adjustments (9.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.274[<sup>1</sup>](#table2)
- Bounty Collected: 0.206[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.126[<sup>2</sup>](#table1)

The average of these factors is 0.155<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 709.1
- 400 + ( ( 0.155 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 709.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      186 | 2025-02-22 | Ctrl Alt Defeat | L   | 1.000      | -            | -                | -                | -         |    -7.40 | Cher1on, Ehgren, Fizzy, Igorek, joeski |
|            5 |      192 | 2025-02-22 | 8Sins           | L   | 1.000      | -            | -                | -                | -         |    -5.64 | Cher1on, Ehgren, Fizzy, Igorek, joeski |
|            4 |      209 | 2025-02-21 | Viperio Academy | W   | 1.000      | 1.000        | 0.001 (0.001)    | 0.123 (0.123)    | 1 (1.000) |    10.31 | Cher1on, Ehgren, Fizzy, Igorek, joeski |
|            3 |     2461 | 2024-11-27 | No Pauses       | W   | 0.580      | 1.000        | 0.001 (0.001)    | 0.027 (0.015)    | 0 (0.000) |     6.89 | Fizzy, Igorek, joeski, LTH, SAVAGE     |
|            2 |     2756 | 2024-11-22 | Half Natty      | W   | 0.546      | 1.000        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.54 | Fizzy, Igorek, joeski, LTH, SAVAGE     |
|            1 |     2990 | 2024-11-18 | Hoes no jutsu   | W   | 0.520      | 1.000        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.45 | Fizzy, Igorek, joeski, LTH, SAVAGE     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($641.74)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      1.000 | $94.73         | $94.73          |
| 2024-11-27 |      0.580 | $942.93        | $547.01         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
