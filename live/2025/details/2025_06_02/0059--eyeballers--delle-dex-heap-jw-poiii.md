### Roster Details<br />
Team Name: EYEBALLERS<br />
Roster: delle, dex, HEAP, JW, poiii<br />
Global Rank: [59](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [39]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  730.8<br />
<br />
Final Rank Value (730.8) = Starting Rank Value (751.8) + Head To Head Adjustments (-21.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.353[<sup>1</sup>](#table2)
- Bounty Collected: 0.240[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.152<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 751.8
- 400 + ( ( 0.152 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 751.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent              | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      117 | 2025-02-22 | Aurora Gaming         | L   | 0.529      | -            | -                | -                | -         |   -12.75 | delle, dex, HEAP, JW, poiii |
|           10 |      149 | 2025-02-21 | BC.Game Esports       | L   | 0.523      | -            | -                | -                | -         |    -3.45 | delle, dex, HEAP, JW, poiii |
|            9 |      262 | 2025-02-14 | THE GENTLEMEN ESPORTS | L   | 0.479      | -            | -                | -                | -         |   -11.92 | delle, dex, HEAP, JW, poiii |
|            8 |      697 | 2025-01-11 | 9Pandas               | L   | 0.250      | -            | -                | -                | -         |    -3.31 | delle, dex, HEAP, JW, poiii |
|            7 |      702 | 2025-01-10 | Natus Vincere Junior  | W   | 0.245      | 0.417        | 0.040 (0.004)    | 0.494 (0.050)    | 0 (0.000) |     4.73 | delle, dex, HEAP, JW, poiii |
|            6 |      708 | 2025-01-09 | 9INE                  | W   | 0.239      | 0.417        | 0.020 (0.002)    | 0.787 (0.078)    | 0 (0.000) |     4.19 | delle, dex, HEAP, JW, poiii |
|            5 |      715 | 2025-01-08 | Los kogutos           | W   | 0.231      | 0.417        | 0.000 (0.000)    | 0.038 (0.004)    | 0 (0.000) |     0.89 | delle, dex, HEAP, JW, poiii |
|            4 |      721 | 2025-01-06 | BRUTE                 | W   | 0.217      | 0.417        | 0.000 (0.000)    | 0.037 (0.003)    | 0 (0.000) |     1.39 | delle, dex, HEAP, JW, poiii |
|            3 |      733 | 2025-01-03 | 9INE                  | L   | 0.197      | -            | -                | -                | -         |    -2.76 | delle, dex, HEAP, JW, poiii |
|            2 |      743 | 2024-12-28 | WOPA Esport           | W   | 0.157      | 0.417        | 0.009 (0.001)    | 0.205 (0.013)    | 0 (0.000) |     2.25 | delle, dex, HEAP, JW, poiii |
|            1 |      995 | 2024-12-07 | 9INE                  | L   | 0.016      | -            | -                | -                | -         |    -0.23 | delle, dex, HEAP, JW, poiii |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,286.11)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-01-12 |      0.257 | $5,000.00      | $1,286.11       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
