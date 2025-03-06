### Roster Details<br />
Team Name: Team Norway<br />
Roster: Grus, sense, shyyne, SLY, Tapewaare<br />
Global Rank: [187](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [109]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  419.5<br />
<br />
Final Rank Value (419.5) = Starting Rank Value (417.4) + Head To Head Adjustments (2.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.032[<sup>2</sup>](#table1)

The average of these factors is 0.008<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 417.4
- 400 + ( ( 0.008 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 417.4


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
|            5 |     1451 | 2024-11-15 | Team Turkey                 | W   | 0.057      | 0.617        | 0.000 (0.000)    | 0.011 (0.000)    | 1 (0.057) |     1.14 | Grus, sense, shyyne, SLY, Tapewaare |
|            4 |     1463 | 2024-11-15 | Metizport                   | L   | 0.056      | -            | -                | -                | -         |    -0.18 | Grus, sense, shyyne, SLY, Tapewaare |
|            3 |     1475 | 2024-11-14 | Team Canada                 | W   | 0.052      | 0.617        | 0.000 (0.000)    | 0.005 (0.000)    | 1 (0.052) |     0.79 | Grus, sense, shyyne, SLY, Tapewaare |
|            2 |     1516 | 2024-11-13 | Mindfreak (Australian team) | W   | 0.044      | 0.617        | 0.000 (0.000)    | 0.006 (0.000)    | 1 (0.044) |     0.67 | Grus, sense, shyyne, SLY, Tapewaare |
|            1 |     1517 | 2024-11-13 | Los kogutos                 | L   | 0.044      | -            | -                | -                | -         |    -0.37 | Grus, sense, shyyne, SLY, Tapewaare |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
