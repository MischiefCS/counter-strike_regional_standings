### Roster Details<br />
Team Name: Joga de terno<br />
Roster: ALENNNCARrx, BALEROSTYLE, Brnz1k, Lukita, Sakamoto<br />
Global Rank: [270](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [84]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  487.1<br />
<br />
Final Rank Value (487.1) = Starting Rank Value (494.0) + Head To Head Adjustments (-6.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.190[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.049<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 494.0
- 400 + ( ( 0.049 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 494.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |     1224 | 2024-11-26 | VELOX Argentina     | L   | 0.567      | -            | -                | -                | -         |    -8.45 | ALENNNCARrx, BALEROSTYLE, Brnz1k, Lukita, Sakamoto |
|           10 |     1238 | 2024-11-25 | Game Hunters        | L   | 0.561      | -            | -                | -                | -         |    -8.73 | ALENNNCARrx, BALEROSTYLE, Brnz1k, Lukita, Sakamoto |
|            9 |     1300 | 2024-11-22 | Patins da Ferrari   | W   | 0.542      | 0.371        | 0.000 (0.000)    | 0.115 (0.023)    | 0 (0.000) |     8.71 | ALENNNCARrx, BALEROSTYLE, Brnz1k, Lukita, Sakamoto |
|            8 |     1360 | 2024-11-20 | LaChampionsLiga     | W   | 0.527      | 0.371        | 0.003 (0.001)    | 0.199 (0.039)    | 0 (0.000) |    11.12 | ALENNNCARrx, BALEROSTYLE, Brnz1k, Lukita, Sakamoto |
|            7 |     1370 | 2024-11-19 | 20/70               | L   | 0.522      | -            | -                | -                | -         |    -5.37 | ALENNNCARrx, BALEROSTYLE, Brnz1k, Lukita, Sakamoto |
|            6 |     1661 | 2024-11-05 | 9z Academy          | L   | 0.426      | -            | -                | -                | -         |    -6.08 | Brnz1k, lealziNho, Lukita, Sakamoto, swarmyzz      |
|            5 |     1671 | 2024-11-04 | UNO MILLE           | L   | 0.421      | -            | -                | -                | -         |    -3.07 | Brnz1k, lealziNho, Lukita, Sakamoto, swarmyzz      |
|            4 |     1723 | 2024-11-01 | Game Hunters        | L   | 0.402      | -            | -                | -                | -         |    -3.72 | Brnz1k, lealziNho, Lukita, Sakamoto, swarmyzz      |
|            3 |     1741 | 2024-10-31 | PaiN Gaming Academy | W   | 0.395      | 0.371        | 0.000 (0.000)    | 0.088 (0.013)    | 0 (0.000) |     4.65 | Brnz1k, lealziNho, Lukita, Sakamoto, swarmyzz      |
|            2 |     1778 | 2024-10-29 | BESTIA Academy      | W   | 0.381      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.43 | Brnz1k, lealziNho, Lukita, Sakamoto, swarmyzz      |
|            1 |     2443 | 2024-09-27 | Fluxo               | L   | 0.167      | -            | -                | -                | -         |    -0.35 | Brnz1k, lealziNho, Lukita, Sakamoto, swarmyzz      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
