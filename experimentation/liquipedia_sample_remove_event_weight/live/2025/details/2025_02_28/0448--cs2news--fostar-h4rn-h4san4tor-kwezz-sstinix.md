### Roster Details<br />
Team Name: CS2NEWS<br />
Roster: fostar, h4rn, H4SAN4TOR, kwezz, sstiNiX<br />
Global Rank: [448](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [279]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  588.6<br />
<br />
Final Rank Value (588.6) = Starting Rank Value (575.4) + Head To Head Adjustments (13.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.283[<sup>2</sup>](#table1)
- Opponent Network: 0.069[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.088<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 575.4
- 400 + ( ( 0.088 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 575.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1084 | 2025-01-08 | ECSTATIC      | L   | 0.858      | -            | -                | -                | -         |    -1.16 | fostar, h4rn, H4SAN4TOR, kwezz, sstiNiX          |
|            5 |     1096 | 2025-01-04 | Rhyno Esports | L   | 0.830      | -            | -                | -                | -         |    -3.01 | fostar, h4rn, H4SAN4TOR, kwezz, sstiNiX          |
|            4 |     1130 | 2024-12-29 | WOPA Esport   | W   | 0.791      | 1.000        | 0.037 (0.029)    | 0.845 (0.668)    | 0 (0.000) |    22.77 | fostar, h4rn, H4SAN4TOR, kwezz, sstiNiX          |
|            3 |     1194 | 2024-12-27 | KONO.ECF      | L   | 0.780      | -            | -                | -                | -         |    -7.40 | fostar, h4rn, H4SAN4TOR, kwezz, sstiNiX          |
|            2 |     2644 | 2024-11-23 | HOTU          | L   | 0.553      | -            | -                | -                | -         |    -2.73 | fostar, H4SAN4TOR, leri511, lollipop21k, sstiNiX |
|            1 |     2660 | 2024-11-23 | MOLEGAN       | W   | 0.553      | 1.000        | 0.000 (0.000)    | 0.030 (0.017)    | 0 (0.000) |     4.68 | fostar, H4SAN4TOR, leri511, lollipop21k, sstiNiX |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
