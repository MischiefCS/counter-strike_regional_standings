### Roster Details<br />
Team Name: Above The Rest (Australian team)<br />
Roster: csJ, kairo, Reapz, Rhyu, Zuko<br />
Global Rank: [533](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_02_28.md)<br />
Regional Rank: [85]( ../../standings_asia_2025_02_28.md)<br />
<br />
Final Rank Value:  489.7<br />
<br />
Final Rank Value (489.7) = Starting Rank Value (483.2) + Head To Head Adjustments (6.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.159[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.040<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 483.2
- 400 + ( ( 0.040 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 483.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                 | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |     1591 | 2024-12-14 | Underground Esports Club | L   | 0.690      | -            | -                | -                | -         |    -6.44 | csJ, kairo, Reapz, Rhyu, Zuko |
|            8 |     1679 | 2024-12-13 | MANTRA                   | L   | 0.684      | -            | -                | -                | -         |    -7.26 | csJ, kairo, Reapz, Rhyu, Zuko |
|            7 |     1714 | 2024-12-12 | Rebound                  | W   | 0.677      | 0.143        | 0.000 (0.000)    | 0.041 (0.004)    | 0 (0.000) |    10.91 | csJ, kairo, Reapz, Rhyu, Zuko |
|            6 |     1762 | 2024-12-11 | TALON                    | L   | 0.670      | -            | -                | -                | -         |    -7.80 | csJ, kairo, Reapz, Rhyu, Zuko |
|            5 |     1799 | 2024-12-10 | Rebound                  | W   | 0.664      | 0.143        | 0.000 (0.000)    | 0.041 (0.004)    | 0 (0.000) |    10.81 | csJ, kairo, Reapz, Rhyu, Zuko |
|            4 |     1959 | 2024-12-07 | Underground Esports Club | L   | 0.644      | -            | -                | -                | -         |    -5.62 | csJ, kairo, Reapz, Rhyu, Zuko |
|            3 |     2118 | 2024-12-03 | Vantage Esports          | L   | 0.617      | -            | -                | -                | -         |    -5.16 | csJ, kairo, Reapz, Rhyu, Zuko |
|            2 |     2191 | 2024-12-02 | Shanghai Sharks          | W   | 0.611      | 0.270        | 0.000 (0.000)    | 0.061 (0.010)    | 0 (0.000) |     9.91 | csJ, kairo, Reapz, Rhyu, Zuko |
|            1 |     2364 | 2024-11-30 | PrevailANZ               | W   | 0.597      | 0.270        | 0.000 (0.000)    | 0.003 (0.001)    | 0 (0.000) |     7.14 | csJ, kairo, Reapz, Rhyu, Zuko |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
