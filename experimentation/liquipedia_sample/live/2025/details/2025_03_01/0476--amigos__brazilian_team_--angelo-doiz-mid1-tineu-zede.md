### Roster Details<br />
Team Name: AMIGOS (Brazilian team)<br />
Roster: aNgelo, doiz, mid1, Tineu, zede<br />
Global Rank: [476](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [106]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  517.4<br />
<br />
Final Rank Value (517.4) = Starting Rank Value (505.5) + Head To Head Adjustments (11.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.199[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.054<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 505.5
- 400 + ( ( 0.054 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 505.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     1803 | 2024-12-04 | 9z Academy                | L   | 0.620      | -            | -                | -                | -         |    -5.98 | aNgelo, doiz, mid1, Tineu, zede    |
|           14 |     1846 | 2024-12-03 | Pugdesonesto              | W   | 0.614      | 0.265        | 0.000 (0.000)    | 0.025 (0.004)    | 0 (0.000) |     8.95 | aNgelo, doiz, mid1, Tineu, zede    |
|           13 |     1928 | 2024-12-02 | Game Hunters              | L   | 0.606      | -            | -                | -                | -         |    -4.50 | aNgelo, brokeN, CloN7, doiz, Tineu |
|           12 |     2064 | 2024-11-30 | ShindeN                   | W   | 0.594      | 0.262        | 0.005 (0.001)    | 0.340 (0.053)    | 0 (0.000) |    13.73 | aNgelo, brokeN, CloN7, doiz, Tineu |
|           11 |     2236 | 2024-11-27 | RED Canids Academy        | L   | 0.574      | -            | -                | -                | -         |    -4.25 | aNgelo, brokeN, CloN7, doiz, Tineu |
|           10 |     2329 | 2024-11-25 | SamuraiS (Brazilian team) | W   | 0.560      | 0.265        | 0.000 (0.000)    | 0.150 (0.022)    | 0 (0.000) |     9.45 | aNgelo, brokeN, CloN7, doiz, Tineu |
|            9 |     2522 | 2024-11-22 | PaiN Gaming Academy       | L   | 0.540      | -            | -                | -                | -         |    -8.60 | aNgelo, brokeN, CloN7, doiz, Tineu |
|            8 |     2635 | 2024-11-20 | Patins da Ferrari         | L   | 0.528      | -            | -                | -                | -         |    -8.38 | aNgelo, brokeN, CloN7, doiz, Tineu |
|            7 |     2663 | 2024-11-20 | MIBR Academy              | L   | 0.527      | -            | -                | -                | -         |    -4.52 | aNgelo, brokeN, CloN7, doiz, Tineu |
|            6 |     2698 | 2024-11-19 | Yawara E-Sports           | L   | 0.521      | -            | -                | -                | -         |    -4.10 | aNgelo, brokeN, CloN7, doiz, Tineu |
|            5 |     2928 | 2024-11-15 | 9z Academy                | W   | 0.493      | 0.265        | 0.001 (0.000)    | 0.412 (0.054)    | 0 (0.000) |    11.16 | aNgelo, brokeN, CloN7, doiz, Tineu |
|            4 |     3321 | 2024-11-08 | RED Canids Academy        | L   | 0.447      | -            | -                | -                | -         |    -3.56 | aNgelo, brokeN, CloN7, doiz, Tineu |
|            3 |     3366 | 2024-11-07 | Nitro.GG                  | L   | 0.440      | -            | -                | -                | -         |    -4.01 | aNgelo, brokeN, CloN7, doiz, Tineu |
|            2 |     3460 | 2024-11-05 | Pugdesonesto              | W   | 0.427      | 0.266        | 0.000 (0.000)    | 0.109 (0.012)    | 0 (0.000) |     9.18 | aNgelo, brokeN, CloN7, doiz, Tineu |
|            1 |     3708 | 2024-11-01 | Sharks Youngsters         | W   | 0.400      | 0.266        | 0.000 (0.000)    | 0.107 (0.011)    | 0 (0.000) |     7.36 | aNgelo, brokeN, CloN7, doiz, Tineu |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
