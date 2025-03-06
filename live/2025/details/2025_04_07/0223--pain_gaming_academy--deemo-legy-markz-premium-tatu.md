### Roster Details<br />
Team Name: PaiN Gaming Academy<br />
Roster: deemO, legy, Markz, PremiuM, Tatu<br />
Global Rank: [223](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_04_07.md)<br />
Regional Rank: [70]( ../../standings_americas_2025_04_07.md)<br />
<br />
Final Rank Value:  396.3<br />
<br />
Final Rank Value (396.3) = Starting Rank Value (401.0) + Head To Head Adjustments (-4.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 401.0
- 400 + ( ( 0.000 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 401.0


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
|           10 |      489 | 2025-02-07 | KRÜ Esports              | L   | 0.806      | -            | -                | -                | -         |    -6.11 | deemO, legy, Markz, PremiuM, Tatu |
|            9 |     1223 | 2024-11-26 | Yawara E-Sports          | L   | 0.320      | -            | -                | -                | -         |    -2.10 | deemO, legy, Markz, Tatu, tsug    |
|            8 |     1253 | 2024-11-24 | 9z Academy               | W   | 0.305      | 0.371        | 0.000 (0.000)    | 0.163 (0.018)    | 0 (0.000) |     6.34 | deemO, legy, Markz, Tatu, tsug    |
|            7 |     1304 | 2024-11-22 | BeBold.gg                | W   | 0.292      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.59 | deemO, legy, Markz, Tatu, tsug    |
|            6 |     1361 | 2024-11-20 | VELOX Argentina          | L   | 0.277      | -            | -                | -                | -         |    -3.35 | deemO, legy, Markz, Tatu, tsug    |
|            5 |     1384 | 2024-11-18 | Players (Brazilian team) | L   | 0.265      | -            | -                | -                | -         |    -1.19 | deemO, legy, Markz, Tatu, tsug    |
|            4 |     1673 | 2024-11-04 | VELOX Argentina          | L   | 0.171      | -            | -                | -                | -         |    -2.06 | deemO, legy, Markz, Tatu, tsug    |
|            3 |     1707 | 2024-11-02 | MIBR Academy             | L   | 0.158      | -            | -                | -                | -         |    -1.02 | deemO, legy, Markz, Tatu, tsug    |
|            2 |     1741 | 2024-10-31 | Joga de terno            | L   | 0.147      | -            | -                | -                | -         |    -1.81 | deemO, legy, Markz, Tatu, tsug    |
|            1 |     1777 | 2024-10-29 | BeBold.gg                | W   | 0.133      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.09 | deemO, legy, Markz, Tatu, tsug    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
