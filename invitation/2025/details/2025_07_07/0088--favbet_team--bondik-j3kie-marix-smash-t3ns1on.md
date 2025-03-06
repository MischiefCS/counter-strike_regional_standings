### Roster Details<br />
Team Name: FAVBET Team<br />
Roster: bondik, j3kie, Marix, Smash, t3ns1on<br />
Global Rank: [88](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [57]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  411.6<br />
<br />
Final Rank Value (411.6) = Starting Rank Value (405.1) + Head To Head Adjustments (6.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.002<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 405.1
- 400 + ( ( 0.002 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 405.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |        0 | 2025-03-01 | OG                     | L   | 0.345      | -            | -                | -                | -         |    -3.00 | bondik, j3kie, Marix, Smash, t3ns1on |
|            7 |        6 | 2025-02-28 | RUSH B (Russian team)  | W   | 0.338      | 0.143        | 0.000 (0.000)    | 0.784 (0.038)    | 0 (0.000) |     7.04 | bondik, j3kie, Marix, Smash, t3ns1on |
|            6 |       12 | 2025-02-27 | ECSTATIC               | L   | 0.332      | -            | -                | -                | -         |    -3.56 | bondik, j3kie, Marix, Smash, t3ns1on |
|            5 |       23 | 2025-02-26 | RUSH B (Russian team)  | W   | 0.324      | 0.143        | 0.000 (0.000)    | 0.784 (0.036)    | 0 (0.000) |     6.75 | bondik, j3kie, Marix, Smash, t3ns1on |
|            4 |      491 | 2025-02-07 | Betclic Apogee Esports | L   | 0.198      | -            | -                | -                | -         |    -1.82 | bondik, j3kie, Marix, Smash, t3ns1on |
|            3 |      515 | 2025-02-06 | ALASKA                 | L   | 0.192      | -            | -                | -                | -         |    -0.20 | bondik, j3kie, Marix, Smash, t3ns1on |
|            2 |      638 | 2025-01-29 | Betclic Apogee Esports | L   | 0.137      | -            | -                | -                | -         |    -1.28 | crush, j3kie, Marix, Smash, t3ns1on  |
|            1 |      649 | 2025-01-27 | Aurora Gaming          | W   | 0.125      | 0.143        | 0.000 (0.000)    | 0.507 (0.009)    | 0 (0.000) |     2.51 | crush, j3kie, Marix, Smash, t3ns1on  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
