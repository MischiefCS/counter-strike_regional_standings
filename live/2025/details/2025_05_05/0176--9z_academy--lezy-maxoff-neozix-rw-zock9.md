### Roster Details<br />
Team Name: 9z Academy<br />
Roster: lezy, MaxOff, neozix, rw, zock9<br />
Global Rank: [176](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_05_05.md)<br />
Regional Rank: [50]( ../../standings_americas_2025_05_05.md)<br />
<br />
Final Rank Value:  507.7<br />
<br />
Final Rank Value (507.7) = Starting Rank Value (513.9) + Head To Head Adjustments (-6.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.201[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.052<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 513.9
- 400 + ( ( 0.052 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 513.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                 | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      711 | 2025-01-09 | Elevate                  | L   | 0.424      | -            | -                | -                | -         |    -8.70 | lezy, MaxOff, neozix, rw, zock9  |
|           10 |      780 | 2024-12-21 | Players (Brazilian team) | W   | 0.297      | 0.384        | 0.009 (0.001)    | 0.473 (0.054)    | 0 (0.000) |     7.10 | lezy, MaxOff, neozix, rw, zock9  |
|            9 |      800 | 2024-12-19 | 20/70                    | W   | 0.285      | 0.384        | 0.001 (0.000)    | 0.064 (0.007)    | 0 (0.000) |     4.74 | lezy, MaxOff, neozix, rw, zock9  |
|            8 |      810 | 2024-12-18 | Team Solid               | L   | 0.280      | -            | -                | -                | -         |    -1.74 | lezy, MaxOff, neozix, rw, zock9  |
|            7 |      831 | 2024-12-16 | ShindeN                  | L   | 0.265      | -            | -                | -                | -         |    -4.42 | lezy, MaxOff, neozix, rw, zock9  |
|            6 |      865 | 2024-12-14 | Exceritus                | W   | 0.252      | 0.384        | 0.000 (0.000)    | 0.212 (0.021)    | 0 (0.000) |     3.90 | lezy, MaxOff, neozix, rw, zock9  |
|            5 |      910 | 2024-12-12 | 20/70                    | L   | 0.239      | -            | -                | -                | -         |    -3.52 | divine, lezy, MaxOff, neozix, rw |
|            4 |     1253 | 2024-11-24 | PaiN Gaming Academy      | L   | 0.119      | -            | -                | -                | -         |    -2.44 | divine, lezy, MaxOff, neozix, rw |
|            3 |     1278 | 2024-11-23 | Yawara E-Sports          | L   | 0.112      | -            | -                | -                | -         |    -1.36 | divine, lezy, MaxOff, neozix, rw |
|            2 |     1358 | 2024-11-20 | BESTIA Academy           | W   | 0.092      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.01 | divine, lezy, MaxOff, neozix, rw |
|            1 |     1382 | 2024-11-18 | TROPA DO TACO            | L   | 0.080      | -            | -                | -                | -         |    -0.81 | divine, lezy, MaxOff, neozix, rw |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
