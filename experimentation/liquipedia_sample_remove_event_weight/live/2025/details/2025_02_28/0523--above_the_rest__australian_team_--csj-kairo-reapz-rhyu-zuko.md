### Roster Details<br />
Team Name: Above The Rest (Australian team)<br />
Roster: csJ, kairo, Reapz, Rhyu, Zuko<br />
Global Rank: [523](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_02_28.md)<br />
Regional Rank: [83]( ../../standings_asia_2025_02_28.md)<br />
<br />
Final Rank Value:  506.4<br />
<br />
Final Rank Value (506.4) = Starting Rank Value (496.5) + Head To Head Adjustments (9.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.184[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.048<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 496.5
- 400 + ( ( 0.048 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 496.5


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
|            9 |     1591 | 2024-12-14 | Underground Esports Club | L   | 0.690      | -            | -                | -                | -         |    -6.03 | csJ, kairo, Reapz, Rhyu, Zuko |
|            8 |     1679 | 2024-12-13 | MANTRA                   | L   | 0.684      | -            | -                | -                | -         |    -6.54 | csJ, kairo, Reapz, Rhyu, Zuko |
|            7 |     1714 | 2024-12-12 | Rebound                  | W   | 0.677      | 1.000        | 0.000 (0.000)    | 0.041 (0.028)    | 0 (0.000) |    10.47 | csJ, kairo, Reapz, Rhyu, Zuko |
|            6 |     1762 | 2024-12-11 | TALON                    | L   | 0.670      | -            | -                | -                | -         |    -5.97 | csJ, kairo, Reapz, Rhyu, Zuko |
|            5 |     1799 | 2024-12-10 | Rebound                  | W   | 0.664      | 1.000        | 0.000 (0.000)    | 0.041 (0.027)    | 0 (0.000) |    10.39 | csJ, kairo, Reapz, Rhyu, Zuko |
|            4 |     1959 | 2024-12-07 | Underground Esports Club | L   | 0.644      | -            | -                | -                | -         |    -5.27 | csJ, kairo, Reapz, Rhyu, Zuko |
|            3 |     2118 | 2024-12-03 | Vantage Esports          | L   | 0.617      | -            | -                | -                | -         |    -3.88 | csJ, kairo, Reapz, Rhyu, Zuko |
|            2 |     2191 | 2024-12-02 | Shanghai Sharks          | W   | 0.611      | 1.000        | 0.000 (0.000)    | 0.061 (0.038)    | 0 (0.000) |     9.95 | csJ, kairo, Reapz, Rhyu, Zuko |
|            1 |     2364 | 2024-11-30 | PrevailANZ               | W   | 0.597      | 1.000        | 0.000 (0.000)    | 0.003 (0.002)    | 0 (0.000) |     6.82 | csJ, kairo, Reapz, Rhyu, Zuko |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
