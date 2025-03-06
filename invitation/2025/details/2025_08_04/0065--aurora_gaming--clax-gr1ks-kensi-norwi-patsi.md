### Roster Details<br />
Team Name: Aurora Gaming<br />
Roster: clax, gr1ks, KENSi, Norwi, Patsi<br />
Global Rank: [65](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [43]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  404.4<br />
<br />
Final Rank Value (404.4) = Starting Rank Value (401.2) + Head To Head Adjustments (3.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 401.2
- 400 + ( ( 0.000 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 401.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |        2 | 2025-03-01 | PARIVISION      | L   | 0.157      | -            | -                | -                | -         |    -1.42 | clax, gr1ks, KENSi, Norwi, Patsi |
|            6 |       37 | 2025-02-25 | Iberian Soul    | W   | 0.132      | 0.143        | 0.000 (0.000)    | 0.822 (0.015)    | 0 (0.000) |     2.13 | clax, gr1ks, KENSi, Norwi, Patsi |
|            5 |       56 | 2025-02-24 | Wild Lotus      | W   | 0.125      | 0.143        | 0.000 (0.000)    | 0.157 (0.003)    | 0 (0.000) |     1.97 | clax, gr1ks, KENSi, Norwi, Patsi |
|            4 |       78 | 2025-02-23 | BC.Game Esports | L   | 0.119      | -            | -                | -                | -         |    -0.19 | clax, gr1ks, KENSi, Norwi, Patsi |
|            3 |      117 | 2025-02-22 | EYEBALLERS      | W   | 0.109      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.72 | clax, gr1ks, KENSi, Norwi, Patsi |
|            2 |      146 | 2025-02-21 | OG              | L   | 0.104      | -            | -                | -                | -         |    -1.00 | clax, gr1ks, KENSi, Norwi, Patsi |
|            1 |      410 | 2025-02-09 | ALASKA          | L   | 0.022      | -            | -                | -                | -         |    -0.01 | clax, gr1ks, KENSi, Norwi, Patsi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
