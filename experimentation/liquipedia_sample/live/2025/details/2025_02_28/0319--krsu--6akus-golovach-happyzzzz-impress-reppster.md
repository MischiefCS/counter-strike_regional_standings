### Roster Details<br />
Team Name: KRSU<br />
Roster: 6akus, GOLOVACH, HappyZzzz, ImpreSs, Reppster<br />
Global Rank: [319](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_02_28.md)<br />
Regional Rank: [52]( ../../standings_asia_2025_02_28.md)<br />
<br />
Final Rank Value:  652.7<br />
<br />
Final Rank Value (652.7) = Starting Rank Value (630.1) + Head To Head Adjustments (22.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.265[<sup>1</sup>](#table2)
- Bounty Collected: 0.180[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.111<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 630.1
- 400 + ( ( 0.111 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 630.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1500 | 2024-12-15 | KNU      | L   | 0.698      | -            | -                | -                | -         |   -10.88 | 6akus, GOLOVACH, HappyZzzz, ImpreSs, Reppster |
|            4 |     1510 | 2024-12-15 | IUK      | W   | 0.698      | 0.143        | 0.001 (0.000)    | 0.034 (0.003)    | 0 (0.000) |     9.47 | 6akus, GOLOVACH, HappyZzzz, ImpreSs, Reppster |
|            3 |     1518 | 2024-12-15 | KSTU     | W   | 0.697      | 0.143        | 0.001 (0.000)    | 0.034 (0.003)    | 0 (0.000) |     9.59 | 6akus, GOLOVACH, HappyZzzz, ImpreSs, Reppster |
|            2 |     1589 | 2024-12-14 | Ala-Too  | W   | 0.690      | 0.143        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     7.12 | 6akus, GOLOVACH, HappyZzzz, ImpreSs, Reppster |
|            1 |     1751 | 2024-12-11 | KSMA 1   | W   | 0.672      | 0.143        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     7.32 | 6akus, GOLOVACH, HappyZzzz, ImpreSs, Reppster |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($481.92)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.698 | $689.99        | $481.92         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
