### Roster Details<br />
Team Name: INWESKO<br />
Roster: HexoQ, Panar, r1pper3, Sleezy, sm0kkk<br />
Global Rank: [533](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [332]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  499.6<br />
<br />
Final Rank Value (499.6) = Starting Rank Value (504.3) + Head To Head Adjustments (-4.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.199[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.052<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 504.3
- 400 + ( ( 0.052 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 504.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent              | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     2955 | 2024-11-19 | MightyWolves          | W   | 0.526      | 1.000        | 0.000 (0.000)    | 0.044 (0.023)    | 0 (0.000) |     6.30 | HexoQ, Panar, r1pper3, Sleezy, sm0kkk |
|            6 |     3038 | 2024-11-17 | CyberMAN              | L   | 0.513      | -            | -                | -                | -         |    -8.46 | HexoQ, Panar, r1pper3, Sleezy, sm0kkk |
|            5 |     3706 | 2024-11-05 | HAVENs                | L   | 0.433      | -            | -                | -                | -         |    -8.59 | HexoQ, Panar, r1pper3, Sleezy, sm0kkk |
|            4 |     4232 | 2024-10-27 | Hypewrld              | W   | 0.373      | 1.000        | 0.003 (0.001)    | 0.202 (0.075)    | 0 (0.000) |     8.78 | HexoQ, Panar, r1pper3, Sleezy, sm0kkk |
|            3 |     4560 | 2024-10-20 | Sunshine!             | W   | 0.326      | 1.000        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.66 | HexoQ, Panar, r1pper3, Sleezy, sm0kkk |
|            2 |     4910 | 2024-10-13 | Way2go (Latvian team) | L   | 0.279      | -            | -                | -                | -         |    -3.05 | HexoQ, Panar, r1pper3, Sleezy, sm0kkk |
|            1 |     5301 | 2024-10-06 | EC BANGA              | L   | 0.232      | -            | -                | -                | -         |    -3.39 | HexoQ, Panar, r1pper3, Sleezy, sm0kkk |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
