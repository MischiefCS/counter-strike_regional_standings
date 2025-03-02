### Roster Details<br />
Team Name: Ex-eClub Brugge<br />
Roster: 7kick, n0tice, ritchiEE, Stev0se, wonsz<br />
Global Rank: [505](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [317]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  520.9<br />
<br />
Final Rank Value (520.9) = Starting Rank Value (505.9) + Head To Head Adjustments (15.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.197[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.053<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 505.9
- 400 + ( ( 0.053 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 505.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1371 | 2024-12-20 | Permitta Esports | L   | 0.733      | -            | -                | -                | -         |    -1.92 | 7kick, n0tice, ritchiEE, Stev0se, wonsz |
|            4 |     2035 | 2024-12-04 | Rhyno Esports    | L   | 0.627      | -            | -                | -                | -         |    -1.40 | 7kick, n0tice, ottob, ritchiEE, Stev0se |
|            3 |     2346 | 2024-11-30 | LEON Esports     | L   | 0.599      | -            | -                | -                | -         |    -1.92 | 7kick, n0tice, ottob, ritchiEE, Stev0se |
|            2 |     2422 | 2024-11-28 | Ex-ESC Gaming    | W   | 0.587      | 1.000        | 0.001 (0.001)    | 0.263 (0.154)    | 0 (0.000) |    13.90 | 7kick, n0tice, ottob, ritchiEE, Stev0se |
|            1 |     2519 | 2024-11-26 | CASTA            | W   | 0.573      | 1.000        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.34 | 7kick, n0tice, ottob, ritchiEE, Stev0se |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
