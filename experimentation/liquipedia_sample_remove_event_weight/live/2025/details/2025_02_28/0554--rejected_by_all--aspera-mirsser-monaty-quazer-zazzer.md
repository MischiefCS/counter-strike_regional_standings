### Roster Details<br />
Team Name: Rejected by all<br />
Roster: Aspera, Mirsser, MoNaTy, Quazer, zazzer<br />
Global Rank: [554](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [343]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  475.6<br />
<br />
Final Rank Value (475.6) = Starting Rank Value (476.7) + Head To Head Adjustments (-1.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.154[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.038<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 476.7
- 400 + ( ( 0.038 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 476.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     6817 | 2024-09-14 | LookingForOrg (Turkish team) | L   | 0.084      | -            | -                | -                | -         |    -1.61 | Aspera, Mirsser, MoNaTy, Quazer, zazzer |
|            7 |     6855 | 2024-09-13 | XPERION NXT                  | L   | 0.079      | -            | -                | -                | -         |    -0.61 | Aspera, Mirsser, MoNaTy, Quazer, zazzer |
|            6 |     6964 | 2024-09-11 | Divergent                    | W   | 0.066      | 1.000        | 0.000 (0.000)    | 0.003 (0.000)    | 0 (0.000) |     1.07 | Aspera, Mirsser, MoNaTy, Quazer, zazzer |
|            5 |     7069 | 2024-09-09 | QUAZAR                       | L   | 0.053      | -            | -                | -                | -         |    -0.22 | Aspera, Mirsser, MoNaTy, Quazer, zazzer |
|            4 |     7127 | 2024-09-08 | Underrated                   | L   | 0.046      | -            | -                | -                | -         |    -0.29 | Aspera, Mirsser, MoNaTy, Quazer, zazzer |
|            3 |     7301 | 2024-09-06 | FLuffy Gangsters             | L   | 0.032      | -            | -                | -                | -         |    -0.06 | Aspera, Mirsser, MoNaTy, Quazer, zazzer |
|            2 |     7364 | 2024-09-05 | Playfire                     | W   | 0.026      | 1.000        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.47 | Aspera, Mirsser, MoNaTy, Quazer, zazzer |
|            1 |     7518 | 2024-09-03 | EC BANGA                     | W   | 0.012      | 1.000        | 0.000 (0.000)    | 0.058 (0.001)    | 0 (0.000) |     0.22 | Aspera, Mirsser, MoNaTy, Quazer, zazzer |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
