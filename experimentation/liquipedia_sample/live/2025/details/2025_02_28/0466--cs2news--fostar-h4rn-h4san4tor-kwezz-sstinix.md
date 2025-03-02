### Roster Details<br />
Team Name: CS2NEWS<br />
Roster: fostar, h4rn, H4SAN4TOR, kwezz, sstiNiX<br />
Global Rank: [466](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [292]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  551.5<br />
<br />
Final Rank Value (551.5) = Starting Rank Value (546.7) + Head To Head Adjustments (4.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.256[<sup>2</sup>](#table1)
- Opponent Network: 0.028[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.071<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 546.7
- 400 + ( ( 0.071 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 546.7


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
|            6 |     1084 | 2025-01-08 | ECSTATIC      | L   | 0.858      | -            | -                | -                | -         |    -2.80 | fostar, h4rn, H4SAN4TOR, kwezz, sstiNiX          |
|            5 |     1096 | 2025-01-04 | Rhyno Esports | L   | 0.830      | -            | -                | -                | -         |    -3.94 | fostar, h4rn, H4SAN4TOR, kwezz, sstiNiX          |
|            4 |     1130 | 2024-12-29 | WOPA Esport   | W   | 0.791      | 0.417        | 0.037 (0.012)    | 0.845 (0.279)    | 0 (0.000) |    21.18 | fostar, h4rn, H4SAN4TOR, kwezz, sstiNiX          |
|            3 |     1194 | 2024-12-27 | KONO.ECF      | L   | 0.780      | -            | -                | -                | -         |   -10.61 | fostar, h4rn, H4SAN4TOR, kwezz, sstiNiX          |
|            2 |     2644 | 2024-11-23 | HOTU          | L   | 0.553      | -            | -                | -                | -         |    -4.17 | fostar, H4SAN4TOR, leri511, lollipop21k, sstiNiX |
|            1 |     2660 | 2024-11-23 | MOLEGAN       | W   | 0.553      | 0.262        | 0.000 (0.000)    | 0.030 (0.004)    | 0 (0.000) |     5.22 | fostar, H4SAN4TOR, leri511, lollipop21k, sstiNiX |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
