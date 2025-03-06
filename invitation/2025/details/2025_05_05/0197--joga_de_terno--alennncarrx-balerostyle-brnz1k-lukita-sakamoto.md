### Roster Details<br />
Team Name: Joga de terno<br />
Roster: ALENNNCARrx, BALEROSTYLE, Brnz1k, Lukita, Sakamoto<br />
Global Rank: [197](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_05_05.md)<br />
Regional Rank: [62]( ../../standings_americas_2025_05_05.md)<br />
<br />
Final Rank Value:  399.3<br />
<br />
Final Rank Value (399.3) = Starting Rank Value (400.3) + Head To Head Adjustments (-0.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.3
- 400 + ( ( 0.000 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 400.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1224 | 2024-11-26 | VELOX Argentina   | L   | 0.132      | -            | -                | -                | -         |    -2.08 | ALENNNCARrx, BALEROSTYLE, Brnz1k, Lukita, Sakamoto |
|            4 |     1238 | 2024-11-25 | Game Hunters      | L   | 0.126      | -            | -                | -                | -         |    -1.54 | ALENNNCARrx, BALEROSTYLE, Brnz1k, Lukita, Sakamoto |
|            3 |     1300 | 2024-11-22 | Patins da Ferrari | W   | 0.107      | 0.371        | 0.000 (0.000)    | 0.010 (0.000)    | 0 (0.000) |     1.68 | ALENNNCARrx, BALEROSTYLE, Brnz1k, Lukita, Sakamoto |
|            2 |     1360 | 2024-11-20 | LaChampionsLiga   | W   | 0.092      | 0.371        | 0.000 (0.000)    | 0.138 (0.005)    | 0 (0.000) |     1.87 | ALENNNCARrx, BALEROSTYLE, Brnz1k, Lukita, Sakamoto |
|            1 |     1370 | 2024-11-19 | 20/70             | L   | 0.087      | -            | -                | -                | -         |    -0.88 | ALENNNCARrx, BALEROSTYLE, Brnz1k, Lukita, Sakamoto |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
