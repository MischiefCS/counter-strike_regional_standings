### Roster Details<br />
Team Name: Rooster<br />
Roster: asap, chelleos, DannyG, Sliimey, TjP<br />
Global Rank: [182](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_04_07.md)<br />
Regional Rank: [22]( ../../standings_asia_2025_04_07.md)<br />
<br />
Final Rank Value:  585.9<br />
<br />
Final Rank Value (585.9) = Starting Rank Value (608.0) + Head To Head Adjustments (-22.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.211[<sup>1</sup>](#table2)
- Bounty Collected: 0.185[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.101<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 608.0
- 400 + ( ( 0.101 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 608.0


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
|            9 |       54 | 2025-02-24 | MANTRA                    | L   | 0.920      | -            | -                | -                | -         |   -16.41 | asap, chelleos, DannyG, Sliimey, TjP |
|            8 |       76 | 2025-02-23 | Vantage Esports           | L   | 0.913      | -            | -                | -                | -         |   -17.69 | asap, chelleos, DannyG, Sliimey, TjP |
|            7 |      347 | 2025-02-10 | ATOX Esports              | L   | 0.828      | -            | -                | -                | -         |    -2.98 | asap, chelleos, dpr, Sliimey, TjP    |
|            6 |      378 | 2025-02-10 | SemperFi Esports          | W   | 0.822      | 0.143        | 0.000 (0.000)    | 0.419 (0.049)    | 0 (0.000) |     9.95 | asap, chelleos, dpr, Sliimey, TjP    |
|            5 |      383 | 2025-02-09 | Just Swing (Chinese team) | W   | 0.821      | 0.143        | 0.003 (0.000)    | 0.165 (0.019)    | 0 (0.000) |    14.71 | asap, chelleos, dpr, Sliimey, TjP    |
|            4 |      416 | 2025-02-08 | DXA Esports               | W   | 0.814      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.27 | asap, chelleos, dpr, Sliimey, TjP    |
|            3 |      471 | 2025-02-08 | SemperFi Esports          | L   | 0.809      | -            | -                | -                | -         |   -15.96 | asap, chelleos, dpr, Sliimey, TjP    |
|            2 |     2004 | 2024-10-10 | MANTRA                    | W   | 0.003      | 0.333        | 0.000 (0.000)    | 0.144 (0.000)    | 0 (0.000) |     0.04 | asap, chelleos, Rackem, Sliimey, TjP |
|            1 |     2005 | 2024-10-10 | MANTRA                    | L   | 0.002      | -            | -                | -                | -         |    -0.04 | asap, chelleos, Rackem, Sliimey, TjP |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($40.83)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-19 |      0.068 | $600.00        | $40.83          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
