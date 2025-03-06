### Roster Details<br />
Team Name: Joga de terno<br />
Roster: ALENNNCARrx, BALEROSTYLE, Brnz1k, Lukita, Sakamoto<br />
Global Rank: [218](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_04_07.md)<br />
Regional Rank: [67]( ../../standings_americas_2025_04_07.md)<br />
<br />
Final Rank Value:  475.6<br />
<br />
Final Rank Value (475.6) = Starting Rank Value (479.1) + Head To Head Adjustments (-3.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.150[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.038<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 479.1
- 400 + ( ( 0.038 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 479.1


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
|           10 |     1224 | 2024-11-26 | VELOX Argentina     | L   | 0.319      | -            | -                | -                | -         |    -4.90 | ALENNNCARrx, BALEROSTYLE, Brnz1k, Lukita, Sakamoto |
|            9 |     1238 | 2024-11-25 | Game Hunters        | L   | 0.313      | -            | -                | -                | -         |    -4.77 | ALENNNCARrx, BALEROSTYLE, Brnz1k, Lukita, Sakamoto |
|            8 |     1300 | 2024-11-22 | Patins da Ferrari   | W   | 0.293      | 0.371        | 0.000 (0.000)    | 0.061 (0.007)    | 0 (0.000) |     4.73 | ALENNNCARrx, BALEROSTYLE, Brnz1k, Lukita, Sakamoto |
|            7 |     1360 | 2024-11-20 | LaChampionsLiga     | W   | 0.278      | 0.371        | 0.000 (0.000)    | 0.173 (0.018)    | 0 (0.000) |     5.98 | ALENNNCARrx, BALEROSTYLE, Brnz1k, Lukita, Sakamoto |
|            6 |     1370 | 2024-11-19 | 20/70               | L   | 0.273      | -            | -                | -                | -         |    -2.78 | ALENNNCARrx, BALEROSTYLE, Brnz1k, Lukita, Sakamoto |
|            5 |     1661 | 2024-11-05 | 9z Academy          | L   | 0.178      | -            | -                | -                | -         |    -2.49 | Brnz1k, lealziNho, Lukita, Sakamoto, swarmyzz      |
|            4 |     1671 | 2024-11-04 | UNO MILLE           | L   | 0.173      | -            | -                | -                | -         |    -1.32 | Brnz1k, lealziNho, Lukita, Sakamoto, swarmyzz      |
|            3 |     1723 | 2024-11-01 | Game Hunters        | L   | 0.153      | -            | -                | -                | -         |    -1.40 | Brnz1k, lealziNho, Lukita, Sakamoto, swarmyzz      |
|            2 |     1741 | 2024-10-31 | PaiN Gaming Academy | W   | 0.147      | 0.371        | 0.000 (0.000)    | 0.059 (0.003)    | 0 (0.000) |     1.81 | Brnz1k, lealziNho, Lukita, Sakamoto, swarmyzz      |
|            1 |     1778 | 2024-10-29 | BESTIA Academy      | W   | 0.133      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.63 | Brnz1k, lealziNho, Lukita, Sakamoto, swarmyzz      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
