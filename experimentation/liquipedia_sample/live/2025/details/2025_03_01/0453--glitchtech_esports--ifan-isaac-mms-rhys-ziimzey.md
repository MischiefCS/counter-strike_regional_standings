### Roster Details<br />
Team Name: Glitchtech Esports<br />
Roster: ifan, isaac, MMS, Rhys, Ziimzey<br />
Global Rank: [453](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [285]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  540.0<br />
<br />
Final Rank Value (540.0) = Starting Rank Value (537.1) + Head To Head Adjustments (2.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.160[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.117[<sup>2</sup>](#table1)

The average of these factors is 0.070<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 537.1
- 400 + ( ( 0.070 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 537.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      114 | 2025-02-22 | Viperio Academy         | L   | 1.000      | -            | -                | -                | -         |   -14.12 | ifan, isaac, MMS, Rhys, Ziimzey     |
|            6 |      124 | 2025-02-21 | Submissive and Readable | W   | 1.000      | 0.306        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     9.34 | ifan, isaac, MMS, Rhys, Ziimzey     |
|            5 |     3358 | 2024-11-07 | ROYALS                  | L   | 0.441      | -            | -                | -                | -         |    -4.35 | ifan, maddeN, Rhys, Yoshwa, Ziimzey |
|            4 |     3368 | 2024-11-07 | ALASKA                  | L   | 0.440      | -            | -                | -                | -         |    -0.94 | ifan, maddeN, Rhys, Yoshwa, Ziimzey |
|            3 |     3410 | 2024-11-06 | Annex Esports           | W   | 0.434      | 0.286        | 0.000 (0.000)    | 0.065 (0.008)    | 0 (0.000) |     8.04 | ifan, maddeN, Rhys, Yoshwa, Ziimzey |
|            2 |     3457 | 2024-11-05 | Dreams To Legends       | W   | 0.427      | 0.286        | 0.000 (0.000)    | 0.091 (0.011)    | 0 (0.000) |     8.25 | ifan, maddeN, Rhys, Yoshwa, Ziimzey |
|            1 |     3503 | 2024-11-04 | Belfast Storm           | L   | 0.421      | -            | -                | -                | -         |    -3.32 | ifan, maddeN, Rhys, Yoshwa, Ziimzey |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
