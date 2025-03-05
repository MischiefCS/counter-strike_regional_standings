### Roster Details<br />
Team Name: Team Norway<br />
Roster: Grus, sense, shyyne, SLY, Tapewaare<br />
Global Rank: [227](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [135]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  600.5<br />
<br />
Final Rank Value (600.5) = Starting Rank Value (577.9) + Head To Head Adjustments (22.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.197[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.170[<sup>2</sup>](#table1)

The average of these factors is 0.093<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 577.9
- 400 + ( ( 0.093 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 577.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1451 | 2024-11-15 | Team Turkey                 | W   | 0.492      | 0.740        | 0.000 (0.000)    | 0.058 (0.021)    | 1 (0.492) |     8.10 | Grus, sense, shyyne, SLY, Tapewaare |
|            4 |     1463 | 2024-11-15 | Metizport                   | L   | 0.491      | -            | -                | -                | -         |    -0.64 | Grus, sense, shyyne, SLY, Tapewaare |
|            3 |     1475 | 2024-11-14 | Team Canada                 | W   | 0.487      | 0.742        | 0.000 (0.000)    | 0.040 (0.014)    | 1 (0.487) |     6.60 | Grus, sense, shyyne, SLY, Tapewaare |
|            2 |     1516 | 2024-11-13 | Mindfreak (Australian team) | W   | 0.479      | 0.744        | 0.002 (0.001)    | 0.092 (0.033)    | 1 (0.479) |    10.47 | Grus, sense, shyyne, SLY, Tapewaare |
|            1 |     1517 | 2024-11-13 | Los kogutos                 | L   | 0.479      | -            | -                | -                | -         |    -1.90 | Grus, sense, shyyne, SLY, Tapewaare |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
