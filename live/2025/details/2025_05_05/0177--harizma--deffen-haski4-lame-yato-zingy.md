### Roster Details<br />
Team Name: Harizma<br />
Roster: deffen, Haski4, lame, yato, ZinGY<br />
Global Rank: [177](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [108]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  503.5<br />
<br />
Final Rank Value (503.5) = Starting Rank Value (511.2) + Head To Head Adjustments (-7.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.198[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.051<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 511.2
- 400 + ( ( 0.051 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 511.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      473 | 2025-02-08 | TYLOO                     | L   | 0.623      | -            | -                | -                | -         |   -12.62 | deffen, Haski4, lame, yato, ZinGY   |
|            6 |     1042 | 2024-12-05 | Chinggis Warriors         | W   | 0.190      | 0.333        | 0.007 (0.000)    | 0.499 (0.032)    | 0 (0.000) |     4.39 | deffen, Geneka, Haski4, lame, ZinGY |
|            5 |     1051 | 2024-12-05 | DogEvil                   | L   | 0.189      | -            | -                | -                | -         |    -3.14 | deffen, Geneka, Haski4, lame, ZinGY |
|            4 |     1054 | 2024-12-04 | Chinggis Warriors         | W   | 0.189      | 0.333        | 0.007 (0.000)    | 0.499 (0.031)    | 0 (0.000) |     4.38 | deffen, Geneka, Haski4, lame, ZinGY |
|            3 |     1323 | 2024-11-21 | CatEvil                   | L   | 0.102      | -            | -                | -                | -         |    -1.67 | deffen, Geneka, Haski4, lame, ZinGY |
|            2 |     1346 | 2024-11-20 | Just Swing (Chinese team) | L   | 0.096      | -            | -                | -                | -         |    -0.94 | deffen, Geneka, Haski4, lame, ZinGY |
|            1 |     1352 | 2024-11-20 | Ex-GR Gaming              | W   | 0.095      | 0.333        | 0.001 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     1.90 | deffen, Geneka, Haski4, lame, ZinGY |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
