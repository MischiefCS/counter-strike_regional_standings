### Roster Details<br />
Team Name: Rooster<br />
Roster: asap, chelleos, DannyG, Sliimey, TjP<br />
Global Rank: [114](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_07_07.md)<br />
Regional Rank: [21]( ../../standings_asia_2025_07_07.md)<br />
<br />
Final Rank Value:  396.0<br />
<br />
Final Rank Value (396.0) = Starting Rank Value (401.3) + Head To Head Adjustments (-5.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.001<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 401.3
- 400 + ( ( 0.001 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 401.3


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
|            7 |       54 | 2025-02-24 | MANTRA                    | L   | 0.313      | -            | -                | -                | -         |    -5.04 | asap, chelleos, DannyG, Sliimey, TjP |
|            6 |       76 | 2025-02-23 | Vantage Esports           | L   | 0.307      | -            | -                | -                | -         |    -4.76 | asap, chelleos, DannyG, Sliimey, TjP |
|            5 |      347 | 2025-02-10 | ATOX Esports              | L   | 0.221      | -            | -                | -                | -         |    -2.33 | asap, chelleos, dpr, Sliimey, TjP    |
|            4 |      378 | 2025-02-10 | SemperFi Esports          | W   | 0.216      | 0.143        | 0.000 (0.000)    | 0.604 (0.019)    | 0 (0.000) |     3.43 | asap, chelleos, dpr, Sliimey, TjP    |
|            3 |      383 | 2025-02-09 | Just Swing (Chinese team) | W   | 0.215      | 0.143        | 0.000 (0.000)    | 0.080 (0.002)    | 0 (0.000) |     3.36 | asap, chelleos, dpr, Sliimey, TjP    |
|            2 |      416 | 2025-02-08 | DXA Esports               | W   | 0.208      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.25 | asap, chelleos, dpr, Sliimey, TjP    |
|            1 |      471 | 2025-02-08 | SemperFi Esports          | L   | 0.203      | -            | -                | -                | -         |    -3.17 | asap, chelleos, dpr, Sliimey, TjP    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
