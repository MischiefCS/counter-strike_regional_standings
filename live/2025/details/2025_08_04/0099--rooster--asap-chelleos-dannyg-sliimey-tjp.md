### Roster Details<br />
Team Name: Rooster<br />
Roster: asap, chelleos, DannyG, Sliimey, TjP<br />
Global Rank: [99](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_08_04.md)<br />
Regional Rank: [21]( ../../standings_asia_2025_08_04.md)<br />
<br />
Final Rank Value:  396.9<br />
<br />
Final Rank Value (396.9) = Starting Rank Value (400.2) + Head To Head Adjustments (-3.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.2
- 400 + ( ( 0.000 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 400.2


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
|            7 |       54 | 2025-02-24 | MANTRA                    | L   | 0.127      | -            | -                | -                | -         |    -2.00 | asap, chelleos, DannyG, Sliimey, TjP |
|            6 |       76 | 2025-02-23 | Vantage Esports           | L   | 0.120      | -            | -                | -                | -         |    -1.88 | asap, chelleos, DannyG, Sliimey, TjP |
|            5 |      347 | 2025-02-10 | ATOX Esports              | L   | 0.035      | -            | -                | -                | -         |    -0.35 | asap, chelleos, dpr, Sliimey, TjP    |
|            4 |      378 | 2025-02-10 | SemperFi Esports          | W   | 0.029      | 0.143        | 0.000 (0.000)    | 0.621 (0.003)    | 0 (0.000) |     0.46 | asap, chelleos, dpr, Sliimey, TjP    |
|            3 |      383 | 2025-02-09 | Just Swing (Chinese team) | W   | 0.028      | 0.143        | 0.000 (0.000)    | 0.023 (0.000)    | 0 (0.000) |     0.44 | asap, chelleos, dpr, Sliimey, TjP    |
|            2 |      416 | 2025-02-08 | DXA Esports               | W   | 0.021      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.33 | asap, chelleos, dpr, Sliimey, TjP    |
|            1 |      471 | 2025-02-08 | SemperFi Esports          | L   | 0.016      | -            | -                | -                | -         |    -0.25 | asap, chelleos, dpr, Sliimey, TjP    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
