### Roster Details<br />
Team Name: PaiN Gaming Academy<br />
Roster: deemO, legy, Markz, PremiuM, Tatu<br />
Global Rank: [280](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [89]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  399.5<br />
<br />
Final Rank Value (399.5) = Starting Rank Value (402.1) + Head To Head Adjustments (-2.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.001<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 402.1
- 400 + ( ( 0.001 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 402.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                 | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      489 | 2025-02-07 | KRÜ Esports              | L   | 1.000      | -            | -                | -                | -         |    -5.64 | deemO, legy, Markz, PremiuM, Tatu |
|           10 |     1223 | 2024-11-26 | Yawara E-Sports          | L   | 0.568      | -            | -                | -                | -         |    -3.46 | deemO, legy, Markz, Tatu, tsug    |
|            9 |     1253 | 2024-11-24 | 9z Academy               | W   | 0.554      | 0.379        | 0.000 (0.000)    | 0.210 (0.044)    | 0 (0.000) |    11.76 | deemO, legy, Markz, Tatu, tsug    |
|            8 |     1304 | 2024-11-22 | BeBold.gg                | W   | 0.540      | 0.380        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     8.46 | deemO, legy, Markz, Tatu, tsug    |
|            7 |     1361 | 2024-11-20 | VELOX Argentina          | L   | 0.526      | -            | -                | -                | -         |    -5.79 | deemO, legy, Markz, Tatu, tsug    |
|            6 |     1384 | 2024-11-18 | Players (Brazilian team) | L   | 0.513      | -            | -                | -                | -         |    -2.04 | deemO, legy, Markz, Tatu, tsug    |
|            5 |     1673 | 2024-11-04 | VELOX Argentina          | L   | 0.420      | -            | -                | -                | -         |    -4.57 | deemO, legy, Markz, Tatu, tsug    |
|            4 |     1707 | 2024-11-02 | MIBR Academy             | L   | 0.407      | -            | -                | -                | -         |    -2.47 | deemO, legy, Markz, Tatu, tsug    |
|            3 |     1741 | 2024-10-31 | Joga de terno            | L   | 0.395      | -            | -                | -                | -         |    -4.65 | deemO, legy, Markz, Tatu, tsug    |
|            2 |     1777 | 2024-10-29 | BeBold.gg                | W   | 0.382      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.94 | deemO, legy, Markz, Tatu, tsug    |
|            1 |     3095 | 2024-09-06 | MIBR Academy             | L   | 0.028      | -            | -                | -                | -         |    -0.16 | deemO, hug1, legy, Markz, Tatu    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
