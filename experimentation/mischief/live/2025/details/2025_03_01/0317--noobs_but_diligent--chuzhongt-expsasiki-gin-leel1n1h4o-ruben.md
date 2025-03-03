### Roster Details<br />
Team Name: Noobs But Diligent<br />
Roster: chuzhongT, expSasiKi, Gin, Leel1n1h4o, rubeN<br />
Global Rank: [317](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [57]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  499.9<br />
<br />
Final Rank Value (499.9) = Starting Rank Value (510.8) + Head To Head Adjustments (-10.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.169[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.057[<sup>2</sup>](#table1)

The average of these factors is 0.057<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 510.8
- 400 + ( ( 0.057 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 510.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     1613 | 2024-12-11 | Never Say Never-        | L   | 0.665      | -            | -                | -                | -         |    -7.25 | chuzhongT, expSasiKi, Gin, Leel1n1h4o, rubeN |
|            9 |     1641 | 2024-12-10 | THE (Russian team)      | L   | 0.658      | -            | -                | -                | -         |    -6.47 | chuzhongT, expSasiKi, Gin, Leel1n1h4o, rubeN |
|            8 |     3658 | 2024-10-09 | Nomads (Mongolian team) | W   | 0.245      | 0.417        | 0.001 (0.000)    | 0.019 (0.002)    | 1 (0.245) |     5.51 | chuzhongT, expSasiKi, Gin, Leel1n1h4o, rubeN |
|            7 |     3664 | 2024-10-09 | Nomads (Mongolian team) | W   | 0.245      | 0.417        | 0.001 (0.000)    | 0.019 (0.002)    | 1 (0.245) |     5.61 | chuzhongT, expSasiKi, Gin, Leel1n1h4o, rubeN |
|            6 |     3717 | 2024-10-08 | -72C                    | L   | 0.238      | -            | -                | -                | -         |    -3.07 | chuzhongT, expSasiKi, Gin, Leel1n1h4o, rubeN |
|            5 |     3723 | 2024-10-08 | -72C                    | L   | 0.238      | -            | -                | -                | -         |    -3.13 | chuzhongT, expSasiKi, Gin, Leel1n1h4o, rubeN |
|            4 |     4166 | 2024-09-25 | Gods Reign              | L   | 0.152      | -            | -                | -                | -         |    -0.35 | chuzhongT, expSasiKi, Gin, Leel1n1h4o, rubeN |
|            3 |     4171 | 2024-09-25 | Gods Reign              | L   | 0.151      | -            | -                | -                | -         |    -0.35 | chuzhongT, expSasiKi, Gin, Leel1n1h4o, rubeN |
|            2 |     4226 | 2024-09-24 | Unsettled Resentment    | L   | 0.145      | -            | -                | -                | -         |    -0.72 | chuzhongT, expSasiKi, Gin, Leel1n1h4o, rubeN |
|            1 |     4232 | 2024-09-24 | Unsettled Resentment    | L   | 0.145      | -            | -                | -                | -         |    -0.73 | chuzhongT, expSasiKi, Gin, Leel1n1h4o, rubeN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
