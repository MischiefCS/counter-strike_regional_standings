### Roster Details<br />
Team Name: INDINDA<br />
Roster: abiraju, casE, melanta, swiftsteel, znxxX<br />
Global Rank: [482](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [302]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  530.6<br />
<br />
Final Rank Value (530.6) = Starting Rank Value (506.1) + Head To Head Adjustments (24.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.202[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.051<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 506.1
- 400 + ( ( 0.051 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 506.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent              | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3059 | 2024-11-17 | RUSH B (Russian team) | L   | 0.512      | -            | -                | -                | -         |    -1.44 | abiraju, casE, melanta, swiftsteel, znxxX |
|            4 |     3072 | 2024-11-17 | XP Academy            | L   | 0.511      | -            | -                | -                | -         |    -6.51 | abiraju, casE, melanta, swiftsteel, znxxX |
|            3 |     3090 | 2024-11-17 | LEON Esports          | W   | 0.510      | 0.143        | 0.012 (0.001)    | 0.297 (0.022)    | 0 (0.000) |    12.83 | abiraju, casE, melanta, swiftsteel, znxxX |
|            2 |     3514 | 2024-11-09 | Poslednii3ae3d        | W   | 0.458      | 0.143        | 0.001 (0.000)    | 0.111 (0.007)    | 0 (0.000) |     9.08 | abiraju, casE, melanta, swiftsteel, znxxX |
|            1 |     3522 | 2024-11-09 | RUSTEC                | W   | 0.457      | 0.143        | 0.002 (0.000)    | 0.109 (0.007)    | 0 (0.000) |    10.52 | abiraju, casE, melanta, swiftsteel, znxxX |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
