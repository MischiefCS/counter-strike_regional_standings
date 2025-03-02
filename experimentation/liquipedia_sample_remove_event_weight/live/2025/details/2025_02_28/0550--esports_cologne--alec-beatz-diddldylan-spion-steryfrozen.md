### Roster Details<br />
Team Name: ESports Cologne<br />
Roster: Alec, Beatz, Diddldylan, Spion, SteryFrozen<br />
Global Rank: [550](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [341]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  484.3<br />
<br />
Final Rank Value (484.3) = Starting Rank Value (484.3) + Head To Head Adjustments (-0.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.166[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.042<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 484.3
- 400 + ( ( 0.042 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 484.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     4068 | 2024-10-30 | Regnum4Games      | L   | 0.393      | -            | -                | -                | -         |    -3.21 | Alec, Beatz, Diddldylan, Spion, SteryFrozen |
|            7 |     4188 | 2024-10-28 | Sissi State Punks | W   | 0.380      | 1.000        | 0.000 (0.000)    | 0.074 (0.028)    | 0 (0.000) |     8.40 | Alec, Beatz, Diddldylan, Spion, SteryFrozen |
|            6 |     4519 | 2024-10-21 | BIG               | L   | 0.332      | -            | -                | -                | -         |    -0.03 | Alec, Beatz, Diddldylan, Spion, SteryFrozen |
|            5 |     4764 | 2024-10-16 | MYinsanity        | L   | 0.299      | -            | -                | -                | -         |    -2.26 | Alec, Beatz, Diddldylan, Spion, SteryFrozen |
|            4 |     5119 | 2024-10-09 | Permitta Esports  | L   | 0.253      | -            | -                | -                | -         |    -0.72 | Alec, Beatz, Diddldylan, Spion, SteryFrozen |
|            3 |     5693 | 2024-09-30 | XPERION NXT       | L   | 0.193      | -            | -                | -                | -         |    -1.50 | Alec, Beatz, Diddldylan, Spion, SteryFrozen |
|            2 |     6540 | 2024-09-18 | ALTERNATE aTTaX   | L   | 0.113      | -            | -                | -                | -         |    -0.13 | Alec, Beatz, Diddldylan, Spion, SteryFrozen |
|            1 |     6960 | 2024-09-11 | Wave Esports      | L   | 0.066      | -            | -                | -                | -         |    -0.56 | Alec, Beatz, Diddldylan, Spion, SteryFrozen |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
