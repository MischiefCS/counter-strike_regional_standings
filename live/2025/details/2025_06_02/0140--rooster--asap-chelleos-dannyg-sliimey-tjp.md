### Roster Details<br />
Team Name: Rooster<br />
Roster: asap, chelleos, DannyG, Sliimey, TjP<br />
Global Rank: [140](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_06_02.md)<br />
Regional Rank: [21]( ../../standings_asia_2025_06_02.md)<br />
<br />
Final Rank Value:  398.2<br />
<br />
Final Rank Value (398.2) = Starting Rank Value (402.3) + Head To Head Adjustments (-4.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.001<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 402.3
- 400 + ( ( 0.001 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 402.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |       54 | 2025-02-24 | MANTRA                    | L   | 0.547      | -            | -                | -                | -         |    -9.02 | asap, chelleos, DannyG, Sliimey, TjP |
|            6 |       76 | 2025-02-23 | Vantage Esports           | L   | 0.540      | -            | -                | -                | -         |    -8.36 | asap, chelleos, DannyG, Sliimey, TjP |
|            5 |      347 | 2025-02-10 | ATOX Esports              | L   | 0.455      | -            | -                | -                | -         |    -0.89 | asap, chelleos, dpr, Sliimey, TjP    |
|            4 |      378 | 2025-02-10 | SemperFi Esports          | W   | 0.449      | 0.143        | 0.000 (0.000)    | 0.533 (0.034)    | 0 (0.000) |     7.18 | asap, chelleos, dpr, Sliimey, TjP    |
|            3 |      383 | 2025-02-09 | Just Swing (Chinese team) | W   | 0.448      | 0.143        | 0.000 (0.000)    | 0.079 (0.005)    | 0 (0.000) |     6.95 | asap, chelleos, dpr, Sliimey, TjP    |
|            2 |      416 | 2025-02-08 | DXA Esports               | W   | 0.441      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.84 | asap, chelleos, dpr, Sliimey, TjP    |
|            1 |      471 | 2025-02-08 | SemperFi Esports          | L   | 0.436      | -            | -                | -                | -         |    -6.77 | asap, chelleos, dpr, Sliimey, TjP    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
