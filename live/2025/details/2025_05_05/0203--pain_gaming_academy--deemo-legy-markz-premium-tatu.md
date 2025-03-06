### Roster Details<br />
Team Name: PaiN Gaming Academy<br />
Roster: deemO, legy, Markz, PremiuM, Tatu<br />
Global Rank: [203](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_05_05.md)<br />
Regional Rank: [65]( ../../standings_americas_2025_05_05.md)<br />
<br />
Final Rank Value:  391.7<br />
<br />
Final Rank Value (391.7) = Starting Rank Value (400.2) + Head To Head Adjustments (-8.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.2
- 400 + ( ( 0.000 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 400.2


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
|            6 |      489 | 2025-02-07 | KRÜ Esports              | L   | 0.620      | -            | -                | -                | -         |    -9.84 | deemO, legy, Markz, PremiuM, Tatu |
|            5 |     1223 | 2024-11-26 | Yawara E-Sports          | L   | 0.133      | -            | -                | -                | -         |    -1.06 | deemO, legy, Markz, Tatu, tsug    |
|            4 |     1253 | 2024-11-24 | 9z Academy               | W   | 0.119      | 0.371        | 0.000 (0.000)    | 0.103 (0.005)    | 0 (0.000) |     2.44 | deemO, legy, Markz, Tatu, tsug    |
|            3 |     1304 | 2024-11-22 | BeBold.gg                | W   | 0.105      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.65 | deemO, legy, Markz, Tatu, tsug    |
|            2 |     1361 | 2024-11-20 | VELOX Argentina          | L   | 0.091      | -            | -                | -                | -         |    -1.43 | deemO, legy, Markz, Tatu, tsug    |
|            1 |     1384 | 2024-11-18 | Players (Brazilian team) | L   | 0.078      | -            | -                | -                | -         |    -0.35 | deemO, legy, Markz, Tatu, tsug    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
