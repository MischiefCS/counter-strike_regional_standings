### Roster Details<br />
Team Name: INWESKO<br />
Roster: HexoQ, Panar, r1pper3, Sleezy, sm0kkk<br />
Global Rank: [515](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [322]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  483.3<br />
<br />
Final Rank Value (483.3) = Starting Rank Value (487.6) + Head To Head Adjustments (-4.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.176[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.044<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 487.6
- 400 + ( ( 0.044 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 487.6


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
|            7 |     2706 | 2024-11-19 | MightyWolves          | W   | 0.520      | 0.256        | 0.000 (0.000)    | 0.044 (0.006)    | 0 (0.000) |     6.52 | HexoQ, Panar, r1pper3, Sleezy, sm0kkk |
|            6 |     2786 | 2024-11-17 | CyberMAN              | L   | 0.507      | -            | -                | -                | -         |    -8.32 | HexoQ, Panar, r1pper3, Sleezy, sm0kkk |
|            5 |     3466 | 2024-11-05 | HAVENs                | L   | 0.427      | -            | -                | -                | -         |    -8.25 | HexoQ, Panar, r1pper3, Sleezy, sm0kkk |
|            4 |     3968 | 2024-10-27 | Hypewrld              | W   | 0.367      | 0.256        | 0.002 (0.000)    | 0.178 (0.017)    | 0 (0.000) |     8.18 | HexoQ, Panar, r1pper3, Sleezy, sm0kkk |
|            3 |     4290 | 2024-10-20 | Sunshine!             | W   | 0.320      | 0.256        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.81 | HexoQ, Panar, r1pper3, Sleezy, sm0kkk |
|            2 |     4634 | 2024-10-13 | Way2go (Latvian team) | L   | 0.273      | -            | -                | -                | -         |    -3.05 | HexoQ, Panar, r1pper3, Sleezy, sm0kkk |
|            1 |     4996 | 2024-10-06 | EC BANGA              | L   | 0.226      | -            | -                | -                | -         |    -3.23 | HexoQ, Panar, r1pper3, Sleezy, sm0kkk |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
