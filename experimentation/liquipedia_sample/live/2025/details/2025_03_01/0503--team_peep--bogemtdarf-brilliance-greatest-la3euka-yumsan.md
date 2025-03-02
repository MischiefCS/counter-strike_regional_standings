### Roster Details<br />
Team Name: Team PeeP<br />
Roster: bogemtdarf, Brilliance, GREATEST, la3euka, YumsaN<br />
Global Rank: [503](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [315]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  491.2<br />
<br />
Final Rank Value (491.2) = Starting Rank Value (489.7) + Head To Head Adjustments (1.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.182[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.046<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 489.7
- 400 + ( ( 0.046 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 489.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     6718 | 2024-09-09 | Passion UA       | L   | 0.046      | -            | -                | -                | -         |    -0.07 | bogemtdarf, Brilliance, GREATEST, la3euka, YumsaN |
|            5 |     6835 | 2024-09-07 | UNiTY esports    | W   | 0.033      | 0.372        | 0.025 (0.000)    | 0.416 (0.005)    | 0 (0.000) |     0.89 | bogemtdarf, Brilliance, GREATEST, la3euka, YumsaN |
|            4 |     6900 | 2024-09-06 | FLuffy Gangsters | L   | 0.027      | -            | -                | -                | -         |    -0.13 | bogemtdarf, Brilliance, GREATEST, la3euka, YumsaN |
|            3 |     6904 | 2024-09-06 | PARTIZAN         | W   | 0.027      | 0.221        | 0.000 (0.000)    | 0.085 (0.001)    | 0 (0.000) |     0.57 | bogemtdarf, Brilliance, GREATEST, la3euka, YumsaN |
|            2 |     6910 | 2024-09-06 | GLADIATORS       | W   | 0.027      | 0.221        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.32 | bogemtdarf, Brilliance, GREATEST, la3euka, YumsaN |
|            1 |     7123 | 2024-09-03 | FLuffy Gangsters | L   | 0.007      | -            | -                | -                | -         |    -0.03 | bogemtdarf, Brilliance, GREATEST, la3euka, YumsaN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
