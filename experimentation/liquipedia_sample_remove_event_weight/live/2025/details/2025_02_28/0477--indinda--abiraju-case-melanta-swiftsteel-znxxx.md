### Roster Details<br />
Team Name: INDINDA<br />
Roster: abiraju, casE, melanta, swiftsteel, znxxX<br />
Global Rank: [477](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [297]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  561.8<br />
<br />
Final Rank Value (561.8) = Starting Rank Value (534.0) + Head To Head Adjustments (27.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.243[<sup>2</sup>](#table1)
- Opponent Network: 0.025[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.067<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 534.0
- 400 + ( ( 0.067 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 534.0


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
|            5 |     3059 | 2024-11-17 | RUSH B (Russian team) | L   | 0.512      | -            | -                | -                | -         |    -0.46 | abiraju, casE, melanta, swiftsteel, znxxX |
|            4 |     3072 | 2024-11-17 | XP Academy            | L   | 0.511      | -            | -                | -                | -         |    -5.79 | abiraju, casE, melanta, swiftsteel, znxxX |
|            3 |     3090 | 2024-11-17 | LEON Esports          | W   | 0.510      | 1.000        | 0.012 (0.006)    | 0.297 (0.151)    | 0 (0.000) |    14.02 | abiraju, casE, melanta, swiftsteel, znxxX |
|            2 |     3514 | 2024-11-09 | Poslednii3ae3d        | W   | 0.458      | 1.000        | 0.001 (0.000)    | 0.111 (0.051)    | 0 (0.000) |     9.21 | abiraju, casE, melanta, swiftsteel, znxxX |
|            1 |     3522 | 2024-11-09 | RUSTEC                | W   | 0.457      | 1.000        | 0.002 (0.001)    | 0.109 (0.050)    | 0 (0.000) |    10.79 | abiraju, casE, melanta, swiftsteel, znxxX |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
