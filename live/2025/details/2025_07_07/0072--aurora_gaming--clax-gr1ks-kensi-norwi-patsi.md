### Roster Details<br />
Team Name: Aurora Gaming<br />
Roster: clax, gr1ks, KENSi, Norwi, Patsi<br />
Global Rank: [72](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [50]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  513.1<br />
<br />
Final Rank Value (513.1) = Starting Rank Value (507.4) + Head To Head Adjustments (5.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.167[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.044<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 507.4
- 400 + ( ( 0.044 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 507.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |        2 | 2025-03-01 | PARIVISION        | L   | 0.343      | -            | -                | -                | -         |    -3.81 | clax, gr1ks, KENSi, Norwi, Patsi |
|           11 |       37 | 2025-02-25 | Iberian Soul      | W   | 0.318      | 0.143        | 0.000 (0.000)    | 0.654 (0.030)    | 0 (0.000) |     3.93 | clax, gr1ks, KENSi, Norwi, Patsi |
|           10 |       56 | 2025-02-24 | Wild Lotus        | W   | 0.312      | 0.143        | 0.000 (0.000)    | 0.221 (0.010)    | 0 (0.000) |     3.55 | clax, gr1ks, KENSi, Norwi, Patsi |
|            9 |       78 | 2025-02-23 | BC.Game Esports   | L   | 0.306      | -            | -                | -                | -         |    -0.84 | clax, gr1ks, KENSi, Norwi, Patsi |
|            8 |      117 | 2025-02-22 | EYEBALLERS        | W   | 0.296      | 0.143        | 0.002 (0.000)    | 0.007 (0.000)    | 0 (0.000) |     6.67 | clax, gr1ks, KENSi, Norwi, Patsi |
|            7 |      146 | 2025-02-21 | OG                | L   | 0.290      | -            | -                | -                | -         |    -3.70 | clax, gr1ks, KENSi, Norwi, Patsi |
|            6 |      410 | 2025-02-09 | ALASKA            | L   | 0.209      | -            | -                | -                | -         |    -0.38 | clax, gr1ks, KENSi, Norwi, Patsi |
|            5 |      551 | 2025-02-05 | UNiTY esports     | W   | 0.184      | 0.143        | 0.000 (0.000)    | 0.070 (0.002)    | 0 (0.000) |     2.08 | clax, gr1ks, KENSi, Norwi, Patsi |
|            4 |      575 | 2025-02-04 | Ninjas in Pyjamas | W   | 0.178      | 0.143        | 0.000 (0.000)    | 0.688 (0.018)    | 0 (0.000) |     2.06 | clax, gr1ks, KENSi, Norwi, Patsi |
|            3 |      645 | 2025-01-28 | Ninjas in Pyjamas | L   | 0.131      | -            | -                | -                | -         |    -2.63 | clax, gr1ks, KENSi, Norwi, Patsi |
|            2 |      649 | 2025-01-27 | FAVBET Team       | L   | 0.125      | -            | -                | -                | -         |    -2.51 | clax, gr1ks, KENSi, Norwi, Patsi |
|            1 |      654 | 2025-01-26 | Ninjas in Pyjamas | W   | 0.116      | 0.143        | 0.000 (0.000)    | 0.688 (0.011)    | 0 (0.000) |     1.32 | clax, gr1ks, KENSi, Norwi, Patsi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
