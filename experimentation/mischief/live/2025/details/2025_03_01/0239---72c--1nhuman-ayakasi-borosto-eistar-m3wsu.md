### Roster Details<br />
Team Name: -72C<br />
Roster: 1nhuman, ayakasi, borosto, eistar, m3wsu<br />
Global Rank: [239](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [137]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  566.7<br />
<br />
Final Rank Value (566.7) = Starting Rank Value (564.1) + Head To Head Adjustments (2.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.249[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.089[<sup>2</sup>](#table1)

The average of these factors is 0.085<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 564.1
- 400 + ( ( 0.085 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 564.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |     1963 | 2024-10-15 | Ex-GR Gaming       | L   | 0.285      | -            | -                | -                | -         |    -2.33 | 1nhuman, ayakasi, borosto, eistar, m3wsu |
|           10 |     2042 | 2024-10-09 | Chinggis Warriors  | L   | 0.245      | -            | -                | -                | -         |    -1.28 | 1nhuman, ayakasi, borosto, eistar, m3wsu |
|            9 |     2048 | 2024-10-09 | Chinggis Warriors  | L   | 0.245      | -            | -                | -                | -         |    -1.29 | 1nhuman, ayakasi, borosto, eistar, m3wsu |
|            8 |     2102 | 2024-10-08 | Noobs But Diligent | W   | 0.238      | 0.417        | 0.000 (0.000)    | 0.015 (0.001)    | 1 (0.238) |     3.07 | 1nhuman, ayakasi, borosto, eistar, m3wsu |
|            7 |     2108 | 2024-10-08 | Noobs But Diligent | W   | 0.238      | 0.417        | 0.000 (0.000)    | 0.015 (0.001)    | 1 (0.238) |     3.13 | 1nhuman, ayakasi, borosto, eistar, m3wsu |
|            6 |     2374 | 2024-09-30 | TYLOO              | L   | 0.185      | -            | -                | -                | -         |    -0.97 | 1nhuman, ayakasi, borosto, eistar, m3wsu |
|            5 |     2375 | 2024-09-30 | TYLOO              | L   | 0.185      | -            | -                | -                | -         |    -0.98 | 1nhuman, ayakasi, borosto, eistar, m3wsu |
|            4 |     2548 | 2024-09-25 | The Huns Esports   | L   | 0.152      | -            | -                | -                | -         |    -0.44 | 1nhuman, ayakasi, borosto, eistar, m3wsu |
|            3 |     2553 | 2024-09-25 | The Huns Esports   | L   | 0.151      | -            | -                | -                | -         |    -0.44 | 1nhuman, ayakasi, borosto, eistar, m3wsu |
|            2 |     2605 | 2024-09-24 | Clutch Gaming      | W   | 0.145      | 0.417        | 0.000 (0.000)    | 0.056 (0.003)    | 1 (0.145) |     2.06 | 1nhuman, ayakasi, borosto, eistar, m3wsu |
|            1 |     2615 | 2024-09-24 | Clutch Gaming      | W   | 0.145      | 0.417        | 0.000 (0.000)    | 0.056 (0.003)    | 1 (0.145) |     2.08 | 1nhuman, ayakasi, borosto, eistar, m3wsu |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($328.63)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      0.411 | $800.00        | $328.63         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
