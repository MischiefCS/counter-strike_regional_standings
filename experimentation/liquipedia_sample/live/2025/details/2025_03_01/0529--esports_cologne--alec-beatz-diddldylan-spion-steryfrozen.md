### Roster Details<br />
Team Name: ESports Cologne<br />
Roster: Alec, Beatz, Diddldylan, Spion, SteryFrozen<br />
Global Rank: [529](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [327]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  473.7<br />
<br />
Final Rank Value (473.7) = Starting Rank Value (475.3) + Head To Head Adjustments (-1.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.152[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.038<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 475.3
- 400 + ( ( 0.038 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 475.3


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
|            8 |     3814 | 2024-10-30 | Regnum4Games      | L   | 0.387      | -            | -                | -                | -         |    -3.40 | Alec, Beatz, Diddldylan, Spion, SteryFrozen |
|            7 |     3927 | 2024-10-28 | Sissi State Punks | W   | 0.374      | 0.338        | 0.000 (0.000)    | 0.058 (0.007)    | 0 (0.000) |     7.91 | Alec, Beatz, Diddldylan, Spion, SteryFrozen |
|            6 |     4257 | 2024-10-21 | BIG               | L   | 0.326      | -            | -                | -                | -         |    -0.03 | Alec, Beatz, Diddldylan, Spion, SteryFrozen |
|            5 |     4495 | 2024-10-16 | MYinsanity        | L   | 0.293      | -            | -                | -                | -         |    -2.39 | Alec, Beatz, Diddldylan, Spion, SteryFrozen |
|            4 |     4832 | 2024-10-09 | Permitta Esports  | L   | 0.247      | -            | -                | -                | -         |    -1.27 | Alec, Beatz, Diddldylan, Spion, SteryFrozen |
|            3 |     5368 | 2024-09-30 | XPERION NXT       | L   | 0.187      | -            | -                | -                | -         |    -1.63 | Alec, Beatz, Diddldylan, Spion, SteryFrozen |
|            2 |     6184 | 2024-09-18 | ALTERNATE aTTaX   | L   | 0.107      | -            | -                | -                | -         |    -0.24 | Alec, Beatz, Diddldylan, Spion, SteryFrozen |
|            1 |     6585 | 2024-09-11 | Wave Esports      | L   | 0.060      | -            | -                | -                | -         |    -0.56 | Alec, Beatz, Diddldylan, Spion, SteryFrozen |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
